module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id: String,
      nome: String,
      tempo_colheita: String,
      epoca: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("products", schema, "products");
  return Tutorial;
};
