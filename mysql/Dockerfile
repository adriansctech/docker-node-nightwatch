FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD 123

ADD templates/custom_config.cnf /etc/mysql/conf.d/

RUN useradd -u 1000 -m nightwatch-user

RUN apt-get update

RUN apt-get install -y \
  curl \
  git \
  wget \
  zlib1g-dev \
  zip \
  nodejs \
  libnss3 && \
  curl -sL https://deb.nodesource.com/setup_12.x | bash -

WORKDIR /home

ADD templates/package.json .

ADD templates/nightwatch.conf.js .

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
  apt install -y ./google-chrome-stable_current_amd64.deb

ADD templates/custom_config.cnf /etc/mysql/conf.d/

RUN apt-get install npm -y

