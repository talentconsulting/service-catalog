FROM ghcr.io/talentconsulting/consumer-contract-testing:main
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install

ENTRYPOINT ["npm", "test"]