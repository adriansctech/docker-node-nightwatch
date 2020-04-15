>FROM node:slim

RUN groupmod -g 1000 node \
  && usermod -u 1000 -g 1000 node

RUN apt-get update \
	&& apt-get install -y wget \
	dpkg \
	git \
	libnss3

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
	apt install -y ./google-chrome-stable_current_amd64.deb	

RUN npm install nightwatch

RUN npm install chromedriver --save-dev

//	./node_modules/.bin/nightwatch tests/ecosia.js