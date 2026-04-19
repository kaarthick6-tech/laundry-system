const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

const prices = {
  shirt: 50, pants: 80, saree: 150,
  jacket: 120, bedsheet: 100, kurta: 90,
  suit: 200, dress: 130, tshirt: 40, shorts: 60
};

function getEstimatedDelivery() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toISOString().split('T')[0];
}

function calculateBill(garments) {
  return garments.reduce((total, g) => {
    const price = prices[g.type.toLowerCase()] || 50;
    return total + price * g.quantity;
  }, 0);
}

app.post('/orders', (req, res) => {
  const { customerName, phone, garments } = req.body;
  if (!customerName || !phone || !garments || garments.length === 0) {
    return res.status(400).json({ error: 'customerName, phone, and garments are required' });
  }
  const totalBill = calculateBill(garments);
  const order = {
    id: uuidv4(),
    customerName,
    phone,
    garments: garments.map(g => ({
      type: g.type.toLowerCase(),
      quantity: g.quantity,
      pricePerItem: prices[g.type.toLowerCase()] || 50,
      subtotal: (prices[g.type.toLowerCase()] || 50) * g.quantity
    })),
    totalBill,
    status: 'RECEIVED',
    estimatedDelivery: getEstimatedDelivery(),
    createdAt: new Date()
  };
  orders.push(order);
  res.status(201).json({ success: true, order });
});

app.get('/orders', (req, res) => {
  let result = orders;
  if (req.query.status) result = result.filter(o => o.status === req.query.status.toUpperCase());
  if (req.query.name) result = result.filter(o => o.customerName.toLowerCase().includes(req.query.name.toLowerCase()));
  if (req.query.phone) result = result.filter(o => o.phone.includes(req.query.phone));
  if (req.query.garment) result = result.filter(o => o.garments.some(g => g.type.includes(req.query.garment.toLowerCase())));
  res.json({ total: result.length, orders: result });
});

app.get('/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

app.patch('/orders/:id/status', (req, res) => {
  const validStatuses = ['RECEIVED', 'PROCESSING', 'READY', 'DELIVERED'];
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  const newStatus = req.body.status?.toUpperCase();
  if (!validStatuses.includes(newStatus)) {
    return res.status(400).json({ error: `Invalid status. Use: ${validStatuses.join(', ')}` });
  }
  order.status = newStatus;
  order.updatedAt = new Date();
  res.json({ success: true, order });
});

app.get('/dashboard', (req, res) => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.totalBill, 0);
  const perStatus = {
    RECEIVED: orders.filter(o => o.status === 'RECEIVED').length,
    PROCESSING: orders.filter(o => o.status === 'PROCESSING').length,
    READY: orders.filter(o => o.status === 'READY').length,
    DELIVERED: orders.filter(o => o.status === 'DELIVERED').length,
  };
  const garmentCount = {};
  orders.forEach(o => {
    o.garments.forEach(g => {
      garmentCount[g.type] = (garmentCount[g.type] || 0) + g.quantity;
    });
  });
  res.json({ totalOrders, totalRevenue, perStatus, popularGarments: garmentCount });
});

app.get('/prices', (req, res) => {
  res.json(prices);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});