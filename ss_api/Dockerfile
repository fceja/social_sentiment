# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /ss_api

# Copy the current directory contents into the container at /app
COPY . /ss_api

# Install any needed packages
RUN npm install --production

# Expose port 7592
EXPOSE 7592

# Define the command to start the app
CMD ["npm", "start"]
