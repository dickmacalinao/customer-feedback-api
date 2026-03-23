# ─── Stage 1: Base ───────────────────────────────────────────────────────────
FROM node:20-alpine AS base
WORKDIR /app

# Copy dependency files first (better layer caching)
COPY package*.json ./
# RUN npm ci --only=production
RUN npm install --only=production

# ─── Stage 2: Development ────────────────────────────────────────────────────
FROM base AS development
RUN npm install --only=development
COPY . .
CMD ["npm", "run", "dev"]

# ─── Stage 3: Production ─────────────────────────────────────────────────────
FROM base AS production
COPY . .
CMD ["npm", "start"]
