const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    //console.log(path.join(__dirname, '/views/index.html'));
     //res.sendFile(path.join(__dirname, '/views/index.ejs'));
     res.render('index',{title:'Home'});
 });

 router.get('/estacion', (req, res) =>{
    res.render('estacion',{title:'Estación meteorológica'});
});

 router.get('/plantas', (req, res) =>{
    res.render('plantas',{title:'Platas Fotovoltáicas'});
});


router.get('/bases', (req, res) =>{
    res.render('bases',{title:'Bases externas'});
});


 module.exports=router;