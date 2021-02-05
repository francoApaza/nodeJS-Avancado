const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')


//frans 
const buscaDistrit = require('./src/functions/buscaDistri')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//declarando  uso do ejs
app.set('view engine', 'ejs')
app.set('views', './src/views')


//renderizando pg principal
app.get('/', (req, res) => {
  res.render('index')
})


//pegando os dados da minha view
app.post('/envia-cep', async(req,res) => {
  const { cep } = req.body
  const resultado = await buscaCep(cep)
 
  res.render('resultado',{dado:resultado})
})


// frans
app.post('/envia-distrito', async(req,res) => {
  const { UF } = req.body
  const pagedistrit = await buscaDistrit(UF)
 
  res.render('pagedistrit',{dado:pagedistrit})
})



app.listen(3535)
