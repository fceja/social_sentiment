# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /ss_client

# Copy the current directory contents into the container at /app
COPY . /ss_client

# Install any needed packages
RUN npm install --production

# Expose port 3000
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "start"]
