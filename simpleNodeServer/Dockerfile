# Specifiy base image
FROM node:alpine

# specify working directory
WORKDIR /usr/app

# this helps if no changes in package.json file
COPY ./package.json ./

# Install dependencies
RUN npm install

# copy files & folders from current build context to
COPY ./ ./

# Default container command
CMD ["npm", "start"]