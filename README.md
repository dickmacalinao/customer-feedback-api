# Express.js + Docker Compose Starter

A simple REST API built with Node.js and Express, containerized with Docker.

## 🚀 Quick Start

```bash
# 1. Clone and enter the project
cd express-app

# 2. Copy environment file
cp .env.example .env

# 3. Start with Docker Compose
docker compose up --build
```

API is now live at **http://localhost:3000**

---

## 📁 Project Structure

```
express-app/
├── src/
│   ├── index.js                 # App entry point
│   ├── routes/
│   │   └── users.js             # Route definitions
│   └── controllers/
│       └── userController.js    # Business logic
├── .env                         # Environment variables
├── .env.example                 # Env template
├── Dockerfile                   # Multi-stage Docker build
├── docker-compose.yml           # Compose config
└── package.json
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | /                | API info          |
| GET    | /health          | Health check      |
| GET    | /api/users       | List all users    |
| GET    | /api/users/:id   | Get user by ID    |
| POST   | /api/users       | Create a user     |
| PUT    | /api/users/:id   | Update a user     |
| DELETE | /api/users/:id   | Delete a user     |

### Example Requests

```bash
# Get all users
curl http://localhost:3000/api/users

# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "email": "jane@example.com"}'

# Update a user
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Updated"}'

# Delete a user
curl -X DELETE http://localhost:3000/api/users/1
```

---

## 🐳 Docker Commands

```bash
# Start in background
docker compose up -d --build

# View logs
docker compose logs -f

# Stop containers
docker compose down

# Rebuild after changes
docker compose up --build
```

## 🔧 For Production

In `docker-compose.yml`, change the build target:
```yaml
build:
  target: production   # was: development
```
# customer-feedback-api
