# 🧺 SparkWash - Laundry Order Management System

> A mini laundry order management system built with Node.js, Express, and HTML/CSS/JS.
> Built in 18 hours using AI tools heavily.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js v24+ installed
- Any modern browser (Chrome, Edge, Firefox)

### Steps to Run

1. **Clone the repository**
```bash
git clone https://github.com/kaarthick6-tech/laundry-system.git
cd laundry-system
```

2. **Install dependencies**
```bash
cd backend
npm install
```

3. **Start the backend server**
```bash
node server.js
```
You should see:
```
Server running on http://localhost:3000
```

4. **Open the frontend**
- Open `frontend/index.html` in your browser
- OR double click the `index.html` file

5. **You're ready!** 🎉

---

## ✅ Features Implemented

### Core Features
- ✅ Create orders with customer name, phone, garments, quantity
- ✅ Unique Order ID generated automatically (UUID)
- ✅ Price per item configured for each garment type
- ✅ Total bill calculated automatically
- ✅ Order status management (RECEIVED → PROCESSING → READY → DELIVERED)
- ✅ Update order status with dropdown
- ✅ View all orders in a clean UI
- ✅ Filter orders by status
- ✅ Filter orders by customer name
- ✅ Filter orders by phone number
- ✅ Dashboard showing total orders
- ✅ Dashboard showing total revenue
- ✅ Dashboard showing orders per status

### Bonus Features
- ✅ Estimated delivery date (3 days from order creation)
- ✅ Search by garment type
- ✅ Single order view via GET /orders/:id
- ✅ Popular garments tracking in dashboard
- ✅ Simple frontend UI (HTML/CSS/JS)
- ✅ Animated UI with floating clothes background
- ✅ Input validation on both frontend and backend
- ✅ Status validation (prevents invalid status values)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express |
| Frontend | HTML + CSS + Vanilla JavaScript |
| Storage | In-memory (no database needed) |
| ID Generation | UUID v4 |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /orders | Create a new order |
| GET | /orders | Get all orders (with filters) |
| GET | /orders/:id | Get single order by ID |
| PATCH | /orders/:id/status | Update order status |
| GET | /dashboard | Get dashboard stats |
| GET | /prices | Get garment price list |

### Filter Examples
```
GET /orders?status=RECEIVED
GET /orders?name=Ravi
GET /orders?phone=9876
GET /orders?garment=shirt
```

### Sample Create Order Request
```json
POST /orders
{
  "customerName": "Ravi Kumar",
  "phone": "9876543210",
  "garments": [
    { "type": "shirt", "quantity": 2 },
    { "type": "saree", "quantity": 1 }
  ]
}
```

### Sample Response
```json
{
  "success": true,
  "order": {
    "id": "a1b2c3d4-...",
    "customerName": "Ravi Kumar",
    "phone": "9876543210",
    "garments": [
      { "type": "shirt", "quantity": 2, "pricePerItem": 50, "subtotal": 100 },
      { "type": "saree", "quantity": 1, "pricePerItem": 150, "subtotal": 150 }
    ],
    "totalBill": 250,
    "status": "RECEIVED",
    "estimatedDelivery": "2026-04-21",
    "createdAt": "2026-04-18T07:00:00.000Z"
  }
}
```

---

## 🤖 AI Usage Report

### Tools Used
- **Claude (Anthropic)** — Primary tool for all code generation
- **ChatGPT** — Used for planning and brainstorming

---

### Sample Prompts Used

**Prompt 1 — Backend scaffolding:**
> "Generate a Node.js Express REST API for a laundry order management system with in-memory storage. Include: create order, list orders with filters, update status, and dashboard endpoints."

**Prompt 2 — Frontend UI:**
> "Create a full HTML/CSS/JS frontend for a laundry management system with dark sidebar, animated floating clothes background, dashboard with stat cards, create order form, and orders list with filters."

**Prompt 3 — Validation:**
> "Add input validation and status validation to the Express routes. Return proper error messages for missing fields and invalid status values."

**Prompt 4 — README:**
> "Write a complete professional README for a laundry order management system including setup instructions, features, API docs, AI usage report, and tradeoffs."

---

### Where AI Helped
- ✅ Generated entire backend server.js in one shot
- ✅ Created all API routes with proper structure
- ✅ Built the complete animated frontend UI
- ✅ Added validation logic
- ✅ Wrote this README

### Where I Had to Fix AI Code
- ❌ AI initially forgot to add `cors()` middleware — fixed manually
- ❌ File save issues in VS Code — debugged step by step
- ❌ Frontend path issues — corrected the file location
- ❌ AI used `echo.` command which didn't work in PowerShell — used `New-Item` instead

---

## ⚖️ Tradeoffs

### What I Chose
| Decision | Reason |
|---|---|
| In-memory storage instead of MongoDB | Faster to build, no DB setup needed |
| Vanilla HTML/JS instead of React | Simpler, no build step needed |
| Single server.js file | Keeps it simple and readable |
| No authentication | Saves time, not required for core features |

### What I Skipped
- ❌ Database (MongoDB/SQL) — used in-memory storage
- ❌ Authentication/Login — not in core requirements
- ❌ Deployment — ran out of time
- ❌ Unit tests — prioritized working features

### What I Would Improve With More Time
- 🔜 Add MongoDB for persistent storage
- 🔜 Add JWT authentication
- 🔜 Deploy on Render (backend) + Vercel (frontend)
- 🔜 Add SMS/WhatsApp notification when order is ready
- 🔜 Add print receipt feature
- 🔜 Add customer-facing order tracking page
- 🔜 Add date range filter in dashboard
- 🔜 Add export to Excel/PDF feature

---

## 💰 Garment Price List

| Garment | Price |
|---|---|
| T-Shirt | ₹40 |
| Shirt | ₹50 |
| Shorts | ₹60 |
| Pants | ₹80 |
| Kurta | ₹90 |
| Bedsheet | ₹100 |
| Jacket | ₹120 |
| Dress | ₹130 |
| Saree | ₹150 |
| Suit | ₹200 |

---

## 📁 Project Structure

```
laundry-system/
├── backend/
│   ├── server.js        # Main Express server with all APIs
│   ├── package.json     # Node dependencies
│   └── node_modules/    # Installed packages
├── frontend/
│   └── index.html       # Complete frontend UI
└── README.md            # This file
```

---

## 👨‍💻 Built By

**Ajay (kaarthick6-tech)**
Built in 18 hours as part of a software engineering assignment.
AI tools used: Claude by Anthropic, ChatGPT

---

*"We evaluate speed of execution, AI leverage, problem solving, and ownership mindset — not perfect code."*
