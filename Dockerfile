# Stage 1: Build the Next.js application with Tailwind
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the Next.js app with Tailwind
RUN npm run build

# Stage 2: Production environment
FROM node:18-alpine
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]
