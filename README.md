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
│   ├── config/                     # Configuration point
│   │   └── postgres.js
│   ├── controllers/                # Business logic 
│   │   └── categoryController.js
│   │   └── feedbackController.js    
│   ├── databases/                  # Database scripts 
│   │   ├── postgres/
│   │   │   └── data.sql
│   │   │   └── rollback.sql
│   │   │   └── schema.sql    
│   ├── routes/                     # Route definitions
│   │   └── apiDocs.js           
│   │   └── category.js
│   │   └── feedback.js
│   ├── services/                   # Route definitions
│   │   └──category.js           
│   ├── index.js                    # App entry point
├── .env                            # Environment variables
├── .env.example                    # Env template
├── Dockerfile                      # Multi-stage Docker build
├── docker-compose.yml              # Compose config
└── package.json                    # Library declarations
```

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                       |
|--------|----------------------|-----------------------------------|
| GET    | /health              | Health check                      |
| GET    | /api/categories      | List all categories               |
| GET    | /api/categories/:id  | Get category by ID                |
| POST   | /api/feedback        | Create and post feedback          |
| GET    | /api-docs            | List of available API endpoints   |

### Example Requests

```bash
# List of available API endpoints
curl http://localhost:3000/api-docs

# Get all categories
curl http://localhost:3000/api/categories

# Get all category by id
curl http://localhost:3000/api/categories/1

# Create a feedback
curl -X POST http://localhost:3000/api/feedback \
  -H "Content-Type: application/json" \
  -d '[{"qId": "1", "value": "5"}, {"qId": "2", "value": "Excellent"}]'
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
