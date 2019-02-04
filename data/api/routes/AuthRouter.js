const env = require ('dotenv').config ();
const express = require ('express');
const helmet = require ('helmet');
const knex = require ('knex');
const cors = require ('cors');
const bcrypt = require ('bcryptjs');
const knexConfig = require ('../../../knexfile');
const jwt = require ('jsonwebtoken');
const port = 5000;
const server = express ();

