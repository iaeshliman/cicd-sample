# building stage
FROM node:20 AS build

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .
COPY src/ src/

RUN npm install
RUN npm run build

# # trimmed stage
FROM node:20
WORKDIR /app

COPY --from=build /app/package.json .
COPY --from=build /app/dist/ dist/

RUN npm install --omit=dev

CMD ["npm", "run", "start"]
