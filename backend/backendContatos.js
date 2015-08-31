var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var contatos = [
	{nome: "Bruno da silva", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "Sandra amaral", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "Mariana dos anjos", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.delete('/contatos', function(req, res){
  //var index = contatos.indexOf(req.body);
  
  //if(index > -1){
    //contatos.splice(index, 1);
  //}
  console.log(req.body);
    for(var contato in req.body){
      console.log(contato.nome);
    }  
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});