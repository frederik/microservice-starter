FROM sciflow/prince-node

RUN apt-get update && apt-get install libgif4

# Create app directory
RUN mkdir -p /usr/src/app/
RUN mkdir -p /usr/src/app/src/
WORKDIR /usr/src/app

ADD server.js /usr/src/app

# re-compile node modules in the target environment
ADD package.json /usr/src/app
RUN npm install --production

# configuration
ADD config /usr/src/app/config

# copy the code
ADD www /usr/src/app/www
ADD dist /usr/src/app/dist

EXPOSE 8000
CMD ["node","server.js"]  
