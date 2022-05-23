const exp = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')
const app = exp()

// app.use(exp.json())
app.use(cors())
app.use(bodyParser.json())

const mysql = require('mysql')

let connection = mysql.createPool({
	host:"localhost",
	user:"root",
	password:"Sonu12345",
	database : "acme",
  insecureAuth : true
})

app.get('/account',function(req,res){
connection.query("SELECT * FROM acme.Account;",(err,result)=>{
    if(err){
      return console.log(err)
    }
    else{
      res.send(result)
    }
         
     })   
})

app.get('/account/:id',function(req,res){
  //let id = req.params.id
connection.query(`SELECT * FROM Account WHERE accountId=?`,(req.params.id),(err,result)=>{
  if(err){
   res.json({"success":false,data:err})
  }
        //res.json({"success":true,data:result})
        res.json(result)
      })   
})

app.get('/account/contact/:id',function(req,res){
  //let id = req.params.id
connection.query(`SELECT * FROM accountContact WHERE contactID=?`,(req.params.id),(err,result)=>{
  if(err){
   res.json({"success":false,data:err})
  }
        //res.json({"success":true,data:result})
        res.json(result)
      })   
})

app.post('/account',function(req,res){
  connection.query('INSERT INTO Account SET ?',req.body,(err,result)=>{
    if(err){
      res.json({"success":false,data:err})
     } 
     else{
       res.send(result)
     }
  })
})

app.put('/account/:id', (req, res) => {

  let body = req.body;

  let getData = [body.accountName, body.accountNumber, body.accountEmail, body.accountPhone, body.accountAddress, body.accountCity, body.accountState,body.accountCountry,body.accountZipCode, req.params.id]

  connection.query('UPDATE Account SET accountName = ?, accountNumber = ?, accountEmail = ?, accountPhone = ?, accountAddress = ?, accountCity = ?, accountState = ?, accountCountry = ?, accountZipCode = ?   WHERE accountId = ?', getData, (err, result) => {

      if (err) {

          res.json({ "success": false, getData: err });

      } else {

          res.send(result);

      }

  });

});


app.listen(3000,()=>{
  console.log('Running on localhost 3000')
})