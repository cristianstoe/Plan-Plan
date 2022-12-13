const db = require("../models");
const Plantio = db.plantios;

// Create and Save a new Plantio
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Create a Plantio
  const plantio = new Plantio({
    produtoId: req.body.produtoId,
    userId: req.body.userId,
    quantidade: req.body.quantidade,
    data_plantio: req.body.data_plantio,
  });

  console.log(req.body);
  console.log(plantio);

  // Save Plantio in the database
  plantio
    .save(plantio)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Plantio."
      });
    });
};

// Retrieve all Plantios from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Plantio.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving plantios."
      });
    });
};

// Find a single Plantio with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Plantio.findById(id)
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Plantio with id " + id });
//       else res.send(data);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Plantio with id=" + id });
//     });
// };

exports.findOne = (req, res) => {
  const produto = req.query.instrument

  console.log(produto)
  Plantio.find({ produto: produto })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Plantio with id " });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Plantio with id=" });
    });
};


// Update a Plantio by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  
  Plantio.findByIdAndUpdate(req.body.id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Plantio with. Maybe Plantio was not found!`
        });
      } else res.send({ message: "Plantio was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Plantio with id="
      });
    });
};

// Delete a Plantio with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Plantio.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Plantio with id=${id}. Maybe Plantio was not found!`
        });
      } else {
        res.send({
          message: "Plantio was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Plantio with id=" + id
      });
    });
};

// Delete all Plantios from the database.
exports.deleteAll = (req, res) => {
  Plantio.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Plantios were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all plantios."
      });
    });
};

// Find all published Plantios
exports.findAllPublished = (req, res) => {
  Plantio.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving plantios."
      });
    });
};
