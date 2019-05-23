FROM node:12
WORKDIR /usr/src/app
COPY . .
RUN yarn
EXPOSE 4200

CMD ["yarn","serve"]
