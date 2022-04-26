//usando objeto express
const express =require('express')
//app express
const app = express()
// puerto para renderizar la vista
const port = 3000

//pth inicial
app.get('/',(req,res)=>{

	res.send('Hello world!')	
})
//inicializar app

app.listen(port,()=>{

	console.log(`Example app listening on port ${port}`)

})

//respondiendo texto
//localhost:3000/launchex

app.get('/launchx',(req,res)=>{

	res.send('aca estoy hello world')

})
app.get('/explorersInNode',(req,res)=>{

	res.send('Aca estoy explorers')

})
app.get('/explorers',(req,res)=>{

	const explorer = {nasme:"Explorer1", msg:"Hello MC Carlo"}
res.send(explorer)

})
app.get('/explorern',(req,res)=>{

	const explorer={name:"Explorer", msg:"Hola daniel aca andamos"}
		res.send(explorer)
})

//query params: recibir parametros por url
//http://localhost:3000/explorers/daniel
//req.params = {"explorerName":"Daniel"}
app.get('/explorers/:explorerName',(req,res)=>{
		
	res.send(req.params)

})












