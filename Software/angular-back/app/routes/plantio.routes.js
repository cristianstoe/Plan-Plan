module.exports = app => {
  const plantios = require("../controllers/plantio.controller.js");

  var router = require("express").Router();

  // Create a new Plantios
  router.post("/", plantios.create);

  // Retrieve all Plantioss
  router.get("/", plantios.findAll);

  // Retrieve all published Plantioss
  router.get("/published", plantios.findAllPublished);

  // Retrieve a single Plantios with id
  router.get("/:id", plantios.findOne);

  // Update a Plantios with id
  router.put("/:id", plantios.update);

  // Delete a Plantios with id
  router.delete("/:id", plantios.delete);

  // Create a new Plantios
  router.delete("/", plantios.deleteAll);

  app.use("/api/plantio", router);
};
