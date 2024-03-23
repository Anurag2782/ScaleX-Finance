
# Project Title

Pair Management API

# Desciption

The Pair Data Management System is a RESTful API built using Node.js, Express.js, and MongoDB, designed to manage pairs of tokens traded on a decentralized exchange. It provides endpoints for fetching, creating, updating, and deleting pair data, including price and volume information.


# Technologies Used:

#### Node.js: 
Runtime environment for executing JavaScript code server-side.

#### Express.js: 
Web application framework for building APIs and handling HTTP requests.

#### MongoDB: 
NoSQL database used to store pair data.

#### Mongoose: 
Object Data Modeling (ODM) library for MongoDB, used to define schemas and interact with the database.

#### RESTful API principles: 
Design approach for creating scalable and interoperable APIs.

## Features

- Fetch all pairs: Retrieve a list of all pairs available in the database.

- Create new pairs: Add new pairs to the database, including their metadata and initial price/volume data.

- Update pair data: Modify existing pair information, such as price, volume, or metadata.

- Delete pairs: Remove pairs from the database, either individually or in bulk.


## Installation

#### Clone the repository:


```bash
  git clone <repository-url>
```

#### Install dependencies:
```bash
  cd <project-directory>
  npm install
```

#### Set up environment variables:

Create a .env file in the root directory.
Add the necessary environment variables,i.e, MONGODB_URI to the .env file.

#### Start the application:
```bash
  node index.js
```

    
## API Reference

#### Get all Pairs

```http
  GET /pairs/
```
#### Create Pair

```http
    POST /pairs

```
#### Deletes a pair by ID.

```http
    DELETE /pairs/:pairId

```
#### Adds price data in the native currency to a pair.

```http
    POST /pairs/:pairId/priceNative

```
#### Adds price data in USD to a pair.

```http
    POST /pairs/:pairId/priceUsd

```
#### Retrieves price data in the native currency for a pair.

```http
    GET /pairs/:pairId/priceNative

```
#### Retrieves price data in USD for a pair.

```http
  GET /pairs/
```
#### Updates price data in the native currency for a pair.

```http
    PUT /pairs/:pairId/priceNative
```
#### Updates price data in USD for a pair.

```http
    PUT /pairs/:pairId/priceUsd

```
#### Deletes price data in the native currency for a pair.

```http
    DELETE /pairs/:pairId/priceNative
```
#### Deletes price data in USD for a pair.

```http
    DELETE /pairs/:pairId/priceUsd

```
#### Adds volume data to a pair.

```http
    POST /pairs/:pairId/volume

```
#### Retrieves volume data for a pair.

```http
    GET /pairs/:pairId/volume

```
#### Updates volume data for a pair.

```http
    PUT /pairs/:pairId/volume

```
#### Deletes volume data for a pair.

```http
    DELETE /pairs/:pairId/volume
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pairId`      | `number` | **Required**. Id of pair to fetch |




## Tech Stack

**Backend:** Node, Express, MongoDB, Mongoose, REST API

**Sample-dataSet Link:** "https://api.dexscreener.com/latest/dex/tokens/inj19dtllzcquads0hu3ykda9m58llupksqwekkfnw"



## Authors

- [@AnuragSharma](https://www.github.com/Anurag2782/)

