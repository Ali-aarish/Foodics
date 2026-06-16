# Backend ⚙️

The **server** that powers all the apps. It stores the data and runs the
business logic. The POS App, Online Ordering, and Admin Dashboard all talk
to this backend.

## What the backend handles
- User accounts and login (staff, managers, customers)
- Menu and products
- Orders (POS and online)
- Payments
- Inventory and stock
- Customer engagement (loyalty, offers)
- Business analytics data
- Multi-branch / multi-market support

## Folders
```
backend/
├── routes/       → The API endpoints (URLs the apps call)
├── controllers/  → Logic that runs for each request
├── models/       → Database structure (what data looks like)
├── middleware/   → Checks that run between request and response (e.g. auth)
├── config/       → Settings (database, keys, environment)
└── utils/        → Helper functions used in many places
```

## Suggested Tech
- Node.js + Express
- MongoDB / PostgreSQL
- Cloud hosting for multi-market access
