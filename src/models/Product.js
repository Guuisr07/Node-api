const mongoose = require('mongoose');
//Importando o mongoose paginate para fazer a paginacao dos dados
const mongoosePaginate = require('mongoose-paginate');

//Criando o Produto e suas tabelas
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
