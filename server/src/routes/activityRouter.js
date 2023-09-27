const {Router} = require("express");
const {createActivityHandler} = require("../handlers/activitiesHandlers");

const activityRouter = Router();

activityRouter.post("/", createActivityHandler);
activityRouter.get("/", )