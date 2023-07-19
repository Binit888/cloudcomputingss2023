FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json /

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
