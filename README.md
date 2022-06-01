# Evergreen Energy Tech Test

## What I've Produced

Most of a program which generates quotes based on given hoses and heat pumps taking into account weather from an api.

I ran out of time early and haven't done as much testing as I hoped - hopefully the tests provided show competetence.

I have many TODOs scattered around for things that I'd like to come back to but don't have time for now. 

The software won't currently compile because I ran out of time and have incomplete files, but should be easy to read.

## How to run

### Setup

Set environment variables for API_KEY and BASE_PATH. For local development make a `.env` file in the root of the project similar to the one below.

```
API_KEY="AAAAAAAAAAAAAAAAAA111111111111111"
BASE_PATH="https://api.evergreen.energy/api-address"
```

Install the dependencies by running

```
nvm install
npm install -g npm@8.8.0
npm ci
```

### Run

To run, use the command

```
npm start
```

### Run Tests

To run, use the command

```
npm test
```
