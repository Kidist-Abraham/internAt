FROM node:latest

WORKDIR /usr/app/
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN npm test

EXPOSE 3000
CMD ["node", "server.js"]