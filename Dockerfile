FROM node:16.14.2-alpine

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /home/app
ENV NODE_ENV=production

# Copies package.json and package-lock.json to Docker environment
COPY package.json yarn.lock lerna.json ./home/app/

# Copy packages
COPY packages/my-app/package.json packages/my-app/yarn.lock ./home/app/packages/my-app/
COPY packages/hooks/package.json packages/hooks/yarn.lock ./home/app/packages/hooks/

# Install
RUN npx lerna bootstrap --hoist --ignore-scripts -- --production --no-optional

# Copies everything over to Docker environment
COPY . ./home/app/
# Installs all node packages
RUN yarn build

WORKDIR /home/app/packages/my-app
EXPOSE 3000
CMD ["yarn", "start"]
