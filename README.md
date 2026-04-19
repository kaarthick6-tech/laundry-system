# laundry-system
Mini Laundry Order Management System
# 🧺 SparkWash - Laundry Management System

A mini laundry order management system built with Node.js, Express, and HTML/CSS/JS.

## 🚀 Setup Instructions

1. Clone the repository
2. Install dependencies:
   cd backend
   npm install
3. Start the server:
   node server.js
4. Open frontend/index.html in browser

## ✅ Features Implemented

- Create orders with customer name, phone, garments
- Unique Order ID generated automatically
- Total bill calculated automatically
- Order status management (RECEIVED, PROCESSING, READY, DELIVERED)
- Update order status
- View all orders
- Filter by status, name, phone, garment type
- Dashboard with total orders, revenue, orders per status
- Estimated delivery date (3 days)
- Search by garment type
- Animated UI with floating clothes

## 🤖 AI Usage Report

### Tools Used
- Claude AI - Main code generation
- ChatGPT - Debugging help

### Sample Prompts Used
- "Generate a Node.js Express REST API for a laundry order system with in-memory storage"
- "Create a beautiful HTML frontend for laundry management with animations"
- "Add filter by garment type and estimated delivery date"

### What AI Got Wrong
- Initial code had no input validation
- Status update had no validation for wrong status values
- Frontend had CORS issues initially

### What I Improved
- Added proper input validation
- Added status validation
- Fixed CORS configuration
- Added animated clothes drying UI

## ⚖️ Tradeoffs

### What I Skipped
- Database (used in-memory storage)
- Authentication
- Unit tests

### What I'd Improve With More Time
- Add MongoDB database
- Add user authentication
- Deploy to cloud
- Add SMS notifications
- Add print invoice feature
