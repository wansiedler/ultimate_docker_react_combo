FROM node:slim
RUN npm install
WORKDIR /var/www/react_project
ENV NPM_CONFIG_LOGLEVEL warn
RUN apt-get update
RUN comfies='curl wget git nano sudo   autojump zsh openssl iputils-ping telnet' \
  && apt-get install $comfies -y  --allow-unauthenticated \
  && if [ -d /root/.oh-my-zsh ]; then rm -rf /root/.oh-my-zsh; fi && sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" \
  && apt-get install zsh-antigen
COPY ./package.json ./
RUN npm install
COPY . .
#CMD ["npm", "run-script", "start:dev"]
CMD ["npm", "run-script", "start:react"]