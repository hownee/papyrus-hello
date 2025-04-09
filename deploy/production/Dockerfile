# Builder stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Generate protobuf files
RUN npm run proto:gen

# Build the application
RUN npm run build


# Runner stage
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /usr/src/app

# Copy dist directory from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose gRPC application port
EXPOSE 50051

# Start the application
CMD ["node", "dist/main"]
