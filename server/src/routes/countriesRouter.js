const {Router} = require("express");
const {getAllCountries, getCountryHandler} = require("../handlers/countriesHandlers");


const countriesRouter = Router();

countriesRouter.get("/", getAllCountries);
countriesRouter.get("/:id", getCountryHandler);

module.exports = countriesRouter;
