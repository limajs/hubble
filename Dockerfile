FROM node:4
COPY package.json /src/package.json
RUN cd /src; npm install
COPY . /src
EXPOSE 8002
CMD ["node", "/src/server.js"]
