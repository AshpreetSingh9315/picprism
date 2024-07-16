/* eslint-disable no-undef */
const { login , signup } = require("../Controller/authCotroller");

 const appRoute = require("express").Router();

 appRoute.post('/login', login)
 appRoute.post('/signup', signup)

 module.exports = appRoute  