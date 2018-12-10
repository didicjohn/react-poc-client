FROM mhart/alpine-node:latest  

COPY . /app

WORKDIR /app

RUN npm install 

EXPOSE 9090

ENTRYPOINT ["node_modules/.bin/babel-node","index.js"]

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start-server"]