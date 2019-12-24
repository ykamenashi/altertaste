FROM node:slim
#RUN apk add mysql-client
#CMD sleep 1d
WORKDIR /app
COPY node/package*.json ./
RUN npm install
COPY node/index.js ./
EXPOSE 3000
CMD [ "node", "index.js" ]
