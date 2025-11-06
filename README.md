<p align="center">
  <img src="./trading-journal-logo.svg" alt="Trading Journal Logo" width="100">
</p>

# Trading Journal

[![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://react.dev/)
[![Express](https://img.shields.io/badge/Backend-Express-lightgrey?logo=express)](https://expressjs.com/)
[![Pisma](https://img.shields.io/badge/ORM-Prisma-blueviolet?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)](https://www.postgresql.org/)
[![Node.js](https://img.shields.io/badge/Runtime-Node.js-green?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)

A **smart trading log** that helps traders manage their positions, stay disciplined,
and gain actionable insights over time.  
The goal is to encourage traders to plan trades in advance and later review
whether they followed their original setup - promoting consistency and accountability.

---

## Vision

A minimalist yet powerful **Trading Journal MVP** demonstrating:

- Clean full-stack architecture
- Frontend-backend integration
- Real-world data management
- Potential for intelligent, data-driven insights

---

## Features

- Record every trade with key details: _symbol, entry price, stop-loss, take-profit, quantity, notes, and investment horizon_
- Review performance metrics: **win rate**, **average return**, **stop-loss/take-profit discipline**
- Visualize portfolio evolution through **interactive charts and tables**
- Generate weekly insights, for example:
  > “This week you executed 7 trades and respected your stop-loss in 5 of them.”

---

## Tech Stack

| Layer            | Technologies                                  |
| ---------------- | --------------------------------------------- |
| **Frontend**     | React, Vite, TailwindCSS, Shadcn UI, Recharts |
| **Backend**      | Node.js, Express, Prisma ORM                  |
| **Database**     | PostgreSQL                                    |
| **Architecture** | MVC, RESTful API                              |

---

## Project Structure

```
trading-journal/
│
├── client/                  # React + Vite frontend
│   ├── src/
│   └── ...
│
├── server/                  # Express backend
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   └── ...
│
├── config/                  # Project additional configurations
│   ├── prettier/
│   └── ...
│
└── README.md
```

---

## Current Progress

- [x] Backend foundation (users + trades models, full CRUD)
- [x] PostgreSQL connected via Prisma ORM
- [x] Modular backend structure under `src/`
- [ ] API integration with React frontend in progress
- [ ] Display statistics and insights visually (next phase)
- [ ] Explore smart insights or ML-based recommendations (future enhancement)

---

## Setup Instructions

```bash
# Clone repository
git clone https://github.com/TomBar2/trading-journal
cd trading-journal

# Install dependencies
cd server
npm install
cd ../client
npm install

# Create environment file (.env)
DATABASE_URL="postgresql://USERNAME:PASSWORD@HOST:PORT/trading_journal?schema=SCHEMA"
# Run backend
cd server
npm run dev

# Run frontend
cd ../client
npm run dev
```

---

## License

This project is released under the [MIT License](./LICENSE).
