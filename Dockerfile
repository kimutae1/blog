FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app
RUN npm install -g npm-check-updates
RUN ncu -u
RUN npm install 
RUN npm install react-scripts  -g --silent
#RUN npm install react-scripts@3.0.1 -g --silent
#RUN npx create-react-app dorian-blog

# start app
#CMD ["npm", "start"]