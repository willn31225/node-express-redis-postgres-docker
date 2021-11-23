FROM node:16
WORKDIR /app
COPY package*.json .
RUN npm i --silent
COPY src/* .
COPY wait-for-it.sh .
CMD ["npm", "index.js"]
