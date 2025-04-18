# Use Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
COPY . .

# Expose port and run app
EXPOSE 3000
CMD ["node", "index.js"]

