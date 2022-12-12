module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      produtoId: String,
      userId: String,
      quantidade: Number,
      data_plantio: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Plantios = mongoose.model("plantios", schema, "plantios");
  return Plantios;
};
