const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('index');
  });
  const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
// Configure o motor de renderização de templates Express Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Define o caminho para o seu diretório de views
app.set('views', path.join(__dirname, 'views'));

// Escreva suas rotas aqui

app.listen(4000, () => {
  console.log('Aplicação iniciada na porta 3000');
});