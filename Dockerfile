# use Cypress provided image with all dependencies included
FROM cypress/base:10
RUN node --version
RUN npm --version
WORKDIR /home/node/app
# copy our test application
COPY package.json package-lock.json ./
COPY app ./app
# copy Cypress tests
COPY cypress.json cypress ./
COPY cypress ./cypress

ENV CI=1

# install NPM dependencies and Cypress binary
RUN npm install
# check if the binary was installed successfully
RUN $(npm bin)/cypress verify
