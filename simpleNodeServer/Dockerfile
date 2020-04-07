# Specifiy base image
FROM node:alpine

# specify working directory
WORKDIR /app

# this helps if no changes in package.json file(by using cache)
COPY ./package.json ./

# Install dependencies
RUN npm install

# copy files & folders from current build context to above specified wokdirectory directory
COPY ./ ./

# Default container command
CMD ["npm", "start"]