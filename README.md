# News API

## Requirements

- Node >= v18.12.0
- npm

## Setup (local)

### Database

Download and install MongoDB Community version locally - [Reference](https://www.mongodb.com/docs/manual/installation/).

Start the `mongod` process.

```sh
sudo systemctl start mongod
```

Enable the `mongod` process to be started with system reboot.

```sh
sudo systemctl enable mongod
```

### Clone repository

```sh
git clone https://github.com/drseu55/news-api
```

### Environment variables

Create .env file and change constants if you wish

```sh
cp .env.example .env
```

### Start the server

Change directory and install dependencies with npm

```sh
cd news-api && npm install
```

Start the server

```sh
npm run start
```

## Setup (Docker)

### Install Docker Engine

Install Docker Engine according to your platform - [Docker Docs](https://docs.docker.com/engine/install/)

### Clone repository

```sh
git clone https://github.com/drseu55/news-api
```

### Environment variables

Create .env file and change constants if you wish

```sh
cd news-api && cp .env.example .env
```

### Start Docker containers

```sh
sudo docker compose -f docker-compose.yml up -d --remove-orphans
```

### Stop Docker containers

```sh
sudo docker compose -f docker-compose.yml down
```

## Usage

Default port is 9000. There is a Postman collection in docs directory, which can be imported and used to test the endpoints.

### REST API Endpoints

Responses follow this pattern:

```json
{
    "status": "success" | "error", - Mandatory field
    "message": "News created", - Optional field to inform the user about the action
    "data": { - Optional field to return important data to user
        "id": "655dbf1f5fa4ffecddf2e536"
    }
}
```

#### Create and save news to database

[*POST*] **/v1/news**

Example request body:

```json
{
  "date": "2023-11-22",
  "title": "News Title 1",
  "shortDescription": "Short description 1",
  "text": "Text 1"
}
```

Date can be with or without time, e.g. _2023-11-22_ or _2023-11-22T12:00:00_

Response when the request is successful:

```json
{
  "status": "success",
  "message": "News created",
  "data": {
    "id": "655dbf1f5fa4ffecddf2e536"
  }
}
```

#### Fetch one news by id. Id should be a string

[*GET*] **/v1/news/:id**

Response when the request is successful:

```json
{
  "status": "success",
  "message": "News fetched",
  "data": {
    "_id": "655dbf1f5fa4ffecddf2e536",
    "date": "2023-11-22T00:00:00.000Z",
    "title": "News Title 1",
    "shortDescription": "Short description 1",
    "text": "Text 1"
  }
}
```

#### Fetch news, which can be filtered or sorted

[*GET*] **/v1/news/**

URL parameter structure:

```text
http://localhost:9000/v1/news?sort[date]=asc&sort[title]=desc&filter[date]=value1&filter[title]=value2
```

News can be sorted and/or filtered by date and/or title. The date value will be exactly matched, but the title value is case-insensitive and can be partially matched.

Example response when the request is successful:

```json
{
  "status": "success",
  "message": "News fetched",
  "data": [
    {
      "_id": "655cc716791cb80ae8e8abf3",
      "date": "2023-11-22T00:00:00.000Z",
      "title": "News Title 2",
      "shortDescription": "Short description 2",
      "text": "Text 2"
    },
    {
      "_id": "655dbf1f5fa4ffecddf2e536",
      "date": "2023-11-22T00:00:00.000Z",
      "title": "News Title 1",
      "shortDescription": "Short description 1",
      "text": "Text 1"
    }
  ]
}
```

#### Set new values for news parameters

[*PUT*] **/v1/news/:id**

Example request body:

```json
{
  "date": "2023-11-23",
  "title": "News Title 1 - Some value",
  "shortDescription": "Short description 1",
  "text": "Text 1"
}
```

Response when the request is successful:

```json
{
  "status": "success",
  "message": "News updated",
  "data": ""
}
```

If the id is not found, the API will return `Not Found` and appropriate message.

#### Delete news from database

[*DELETE*] **/v1/news/:id**

Response when the request is successful:

```json
{
  "status": "success",
  "message": "News deleted",
  "data": ""
}
```

If the id is not found, the API will return `Not Found` and appropriate message.

## Conventions and standards for contributing to project

Use GitHub Flow for branch-based workflow. There are custom rules for linting, which can be found in `.eslintrc.cjs` file and custom Prettier configuration, which can be found in `.prettierrc.cjs`.

### Commit message format

Use [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Example commit message structure:

```sh
feat: Add beta sequence
^--^ ^---------------^
| |
| +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

### Linting

- ESLint
- Prettier
- Commitlint
- Buddy.js
