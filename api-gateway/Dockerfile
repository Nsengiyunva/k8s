FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8082 
CMD [ "node", "index.js" ]