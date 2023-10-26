FROM node:latest

COPY index.js /app/
COPY index.html /app/
COPY package.json /app/

WORKDIR /app

RUN npm install

CMD [ "node","index.js" ]

