const express = require('express');

const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/      shelterDB`;
