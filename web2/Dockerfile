FROM node:latest 
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 5005
CMD [ "node", "index.js" ]