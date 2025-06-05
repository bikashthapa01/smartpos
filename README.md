# 🍽️ SmartRestaurant POS

A modern, flexible, and scalable restaurant **Point of Sale (POS)** system built with the **MERN stack** — tailored for dine-in, takeaway, and delivery operations. Designed for real-world restaurant workflows, featuring a smooth UI and extendable logic for future growth.

> ⚙️ Built by a chef-turned-developer, SmartRestaurant aims to bring professional tools to small and mid-sized food businesses.

---

## 🚀 Features Overview

- ✅ Interactive category-based menu
- ✅ Table status management (Available, Occupied, Billed)
- ✅ Assign customers to tables with capacity checks
- ✅ Modal-driven UI flows for smooth order assignment
- ✅ Responsive layout with soft color palette
- ✅ Redux-based global state management
- ✅ Modular folder and slice structure
- ✅ Built for MongoDB integration (schema-first mindset)

---

## 🛠 Tech Stack

| Layer      | Tools Used                               |
| ---------- | ---------------------------------------- |
| Frontend   | React (Vite), Tailwind CSS, Lucide Icons |
| State Mgmt | Redux Toolkit                            |
| Routing    | React Router DOM                         |
| Backend    | Node.js, Express (planned)               |
| Database   | MongoDB (planned)                        |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── menu/
│   │   ├── Categories.jsx
│   │   └── MenuItem.jsx
│   └── tables/
│       ├── TableCard.jsx
│       └── AssignTableModal.jsx
├── pages/
│   ├── menu/
│   │   ├── Menu.jsx
│   │   └── CategoryDetails.jsx
│   └── tables/
│       ├── Tables.jsx
│       └── TableOrder.jsx (upcoming)
├── store/
│   ├── store.js
│   └── slices/
│       ├── menuSlice.js
│       ├── tableSlice.js
│       └── orderSlice.js
├── data/
│   └── api.js (mock data simulating API calls)
```

---

## ✅ Implemented Functionality (as of now)

### 🔹 Menu System

- Responsive category grid styled like CosyPOS (Dribbble)
- Live item count per category
- Category details page showing menu items
- Simulated loading and empty state handling

### 🔹 Table Management

- Grid view with color-coded status (available, occupied, billed)
- Filter bar to sort by status
- “Use Table” button launches modal to assign customers
- Validates seat count before assigning an order
- Future order page route: `/tables/order/:orderId`

### 🔹 State Management

- Global Redux store with modular slices for menu, tables, and orders
- Simulated async data loading from `api.js`

---

## 🧩 Upcoming Roadmap

- [ ] Full order management page (`/tables/order/:orderId`)
- [ ] Kitchen dashboard for order tracking
- [ ] Delivery and takeaway workflows
- [ ] Order billing, payment & archiving
- [ ] MongoDB backend with real API integration
- [ ] Admin panel with roles (admin, chef, waiter)
- [ ] Authentication (JWT or Firebase)
- [ ] Multi-outlet support

---

## 🧑‍🍳 About the Developer

> I'm a chef by profession (IT -> Chef -> IT), now transitioning into software development to build powerful tools for the restaurant industry.  
> SmartRestaurant is both a technical learning journey and a personal vision for improving how restaurants operate.

---

## 🖼️ Screenshots

_(Will be added as features complete and polish phase begins.)_

---

## ⚙️ Setup (Coming Soon)

Instructions for local setup and MongoDB configuration will be added once backend development begins.

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

## 💬 Feedback & Contributions

Have suggestions or want to contribute? Open an issue or pull request — all ideas are welcome!
