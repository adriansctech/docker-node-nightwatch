FROM php:7.3-apache-stretch

RUN useradd -u 1000 -m www-bridge-user

RUN apt-get update

RUN apt-get install -y \
  git \
  wget \
  zlib1g-dev \
  zip \
  vim \
  mysql-client \
  libpng-dev \
  libmcrypt-dev \
  libicu-dev \
  nodejs \
  libnss3 && \
  curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
  apt install -y ./google-chrome-stable_current_amd64.deb

RUN apt-get install nodejs -y

#RUN npm install nightwatch

#RUN npm install chromedriver --save-dev

ADD templates/apache2.conf /etc/apache2/



