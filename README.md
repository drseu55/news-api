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

### Environment variables

Create .env file and change constants if you wish

```sh
cp .env.example .env
```

### Start Docker containers

```sh
sudo docker compose -f docker-compose.yml up -d --remove-orphans
```

## Usage

### API Endpoints

## Conventions and standards for contributing to project

Use GitHub Flow for branch-based workflow.

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

- eslint
- prettier
- commitlint
