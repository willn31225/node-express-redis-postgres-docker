FROM node:10
WORKDIR /app
COPY package*.json .
RUN npm i --silent
COPY . ./
EXPOSE 3000
CMD ["node", "src/index.js"]
