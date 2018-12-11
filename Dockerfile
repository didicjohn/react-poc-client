WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
ADD src /usr/usr/app/src
ADD public /usr/src/app/public
RUN npm build
CMD["npm","start"]