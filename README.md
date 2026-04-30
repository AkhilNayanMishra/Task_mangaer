# Team Task Manager (Full-Stack)

This repository contains a minimal full-stack Team Task Manager app (Express + MongoDB backend, React + Vite frontend) scaffolded for local development and deployment.

## Quick start (Windows PowerShell)

1. Backend
```powershell
cd backend
copy .env.example .env
# Edit .env to set MONGO_URI and JWT_SECRET if needed
npm install
npm run dev
```

2. Frontend
```powershell
cd frontend
npm install
npm run dev
```

API base: backend runs on `http://localhost:5000` by default. Vite dev server runs on `http://localhost:5173` and proxies requests to `/api` to the backend if configured in `vite.config.js` (you can instead use absolute URLs).

## Deployment
- Backend: any Node host (Railway, Heroku). Ensure `MONGO_URI` and `JWT_SECRET` env vars are set.
- Frontend: build with `npm run build` and serve the `dist` folder on any static host.

## Notes
- This is a scaffold with basic auth, projects, and tasks. Extend validation and UI as needed.
