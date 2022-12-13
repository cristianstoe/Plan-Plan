module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      cpf: String,
      nome: String,
      privilegio: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("users", schema, "users");
  return Product;
};
