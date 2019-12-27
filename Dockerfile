FROM cypress/browsers:chrome69

# Create app directory
WORKDIR /
# Bundle app source
COPY package.json package-lock.json ./
COPY . .
RUN npm i

CMD [ "npm", "run", "ci" ]
