FROM node:16
WORKDIR /app
COPY package*.json .
RUN npm install
RUN chown -R node:node node_modules
RUN chown -R 1000:1000 "/root/.npm"
COPY . ./
EXPOSE 3000
CMD ["node", "src/index.js"]
