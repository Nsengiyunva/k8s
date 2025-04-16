FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3002 
CMD [ "node", "index.js" ]