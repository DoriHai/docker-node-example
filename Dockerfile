# Use the official Node.js 14 image as a base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

ENV PORT=7777

# Start the Node.js application
CMD ["npm", "start"]