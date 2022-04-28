FROM cypress/base:latest

WORKDIR /home/cypress/

COPY . /home/cypress/

RUN npm install

CMD ["npx", "cypress", "run"]