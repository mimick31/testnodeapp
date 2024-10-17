FROM node:22.9.0-alpine

ENV DB_HOST=mypostgresql
ENV DB_PORT=5432
ENV DB_USER=database_user
ENV DB_NAME=database_name
ENV DB_PASSWORD=database_password

EXPOSE 8081

WORKDIR /nodeApp

COPY . .
RUN npm install
CMD ["node", "app.js"]
