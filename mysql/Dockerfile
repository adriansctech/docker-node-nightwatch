FROM mysql:5.7

RUN useradd -u 1000 -m nightwatch-user

RUN apt-get update

RUN apt-get install -y \
  git \
  wget \
  zlib1g-dev \
  zip \
  vim \
  mysql-client \
  nodejs \
  libnss3 && \
  curl -sL https://deb.nodesource.com/setup_12.x | bash -

RUN apt-get install npm -y

ENV MYSQL_ROOT_PASSWORD 123

ADD templates/custom_config.cnf /etc/mysql/conf.d/

WORKDIR /home

ADD templates/package.json .

ADD templates/nightwatch.conf.js .

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
  apt install -y ./google-chrome-stable_current_amd64.deb

RUN chown -R nightwatch-user:nightwatch-user /home/

RUN npm install


