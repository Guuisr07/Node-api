const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Rota para listar
routes.get('/products', ProductController.index);

//Rota para listar um dado especifico
routes.get('/products/:id', ProductController.show);

//Rota para criar
routes.post('/products', ProductController.store);

//Rota para alterar um dado com o id
routes.put('/products/:id', ProductController.update);

//Rota para deletar um dado com o id
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;

//Para acessar a aplicacao de qualquer forma externa e necessario baixar o npm install
//cors

//Para ser mais performatico quando a base de dados tiver muitos items, e bom que tenha
//uma paginacao na listagem de dados, para isso e necessario instalar o mongoose-paginate
//rodando no terminal npm install mongoose-paginate
