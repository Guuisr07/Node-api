const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    //Metodo para definir na rota qual a pagina que deve ser mostrada
    const { page = 1 } = req.query;
    //Metodo para listar os dados da base
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  },

  async show(req, res) {
    //Metodo para detalhar especificos dados com o id
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    //Metodo para criar dados na base de dados
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    //Metodo para alterar algum dado na base
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(product);
  },

  async destroy(req, res) {
    //Metodo para deletar um dado na base com o id
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
