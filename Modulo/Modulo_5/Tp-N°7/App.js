const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'backend'
});

connection.connect(function (err) {
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    } else {
        console.log("estoy conectado");
    }
});


//Listar Persona
app.get('/api/persona', (req, res) => {

    $query  = 'SELECT * from persona';

    connection.query($query,(err,rows)=> {
        if(err){
            res.send(err);
            return;
        }
        res.send(rows);
    });
    
});

//Crear Persona
app.post('/api/persona', (req, res) => {
    
    parametros= [req.body.dni, req.body.nombre, req.body.apellido]
    $query  = 'INSERT INTO persona (dni, nombre, apellido) VALUES(?,?,?)';

    connection.query($query, parametros, (err,rows)=> {
          if(err){
              res.status(500).send(err);
              return;
          }else{
             res.send("Se creo la persona" + req.body.nombre, req.body.apellido);
          }
       
    });
});


//Modiicar Persona
app.put('/api/persona/:dni', (req, res) => {

    $query  = 'UPDATE persona set dni = ?, nombre = ?, apellido = ? WHERE dni = ?';
    parametros=[req.body.dni, req.body.nombre, req.body.apellido,req.params.dni];

    connection.query($query,parametros,(err,rows)=> {
          if(err){
            res.status(500).send(err);
            return;
          }else{
            if(rows.affectedRows == 0){
                res.status(404).send({message:"no se encotro la persona " + req.params.dni,});
            }else{
                res.send({message:"Se Modifico a la persona " + req.params.dni,detail:rows});
            }
          }
        
    });
});

//Eliminar Persona
app.delete('/api/persona/:dni', (req, res) => {

    $query  = 'DELETE from persona WHERE dni = ?';
    parametros=[req.params.dni];

    connection.query($query,parametros,(err,rows)=> {
          if(err){
            res.status(500).send(err);
            return;
          }else{
            if(rows.affectedRows == 0){
                res.status(404).send({message:"no se encotro la persona " + req.params.dni,});
            }else{
                res.send({message:"Se Elimino a la persona " + req.params.dni,detail:rows});
            }
          }
        
    });
});


//Listar Usuario
app.get('/api/usuario', (req, res) => {

    $query  = 'SELECT * from usuario';

    connection.query($query,(err,rows)=> {
        if(err){
            res.send(err);
            return;
        }
        res.send(rows);
    });
    
});

//Crear usuario
app.post('/api/usuario', (req, res) => {
    
    parametros= [req.body.mail, req.body.nickname, req.body.password]
    $query  = 'INSERT INTO usuario (mail, nickname, password) VALUES(?,?,?)';

    connection.query($query, parametros, (err,rows)=> {
          if(err){
              res.status(500).send(err);
              return;
          }else{
             res.send("Se creo al usuario" + req.body.mail, req.body.nickname);
          }
       
    });
});


//Modiicar usuario
app.put('/api/usuario/:mail', (req, res) => {

    $query  = 'UPDATE usuario set mail = ?, nickname = ?, password = ? WHERE mail = ?';
    parametros=[req.body.mail, req.body.nickname, req.body.password,req.params.mail];

    connection.query($query,parametros,(err,rows)=> {
          if(err){
            res.status(500).send(err);
            return;
          }else{
            if(rows.affectedRows == 0){
                res.status(404).send({message:"no se encotro al usuario " + req.params.mail,});
            }else{
                res.send({message:"Se Modifico al usuario " + req.params.mail,detail:rows});
            }
          }
        
    });
});

//Eliminar usuario
app.delete('/api/usuario/:mail', (req, res) => {

    $query  = 'DELETE from usuario WHERE mail = ?';
    parametros=[req.params.mail];

    connection.query($query,parametros,(err,rows)=> {
          if(err){
            res.status(500).send(err);
            return;
          }else{
            if(rows.affectedRows == 0){
                res.status(404).send({message:"no se encotro al usuario " + req.params.mail,});
            }else{ 
                res.send({message:"Se Elimino al usuario " + req.params.mail,detail:rows});
            }
          }
        
    });
});

app.listen(8080, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('App escuchando puerto :8080');
    }
    
});