# Use the official Node.js 20 Alpine image as a base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production || npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose the default port (4000)
EXPOSE 4000

# Set environment variables
ENV NODE_ENV=production

# Command to start the application
CMD ["npm", "start"]
