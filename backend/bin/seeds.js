const mongoose = require('mongoose')
const Cause = require('../models/Cause')

mongoose.connect(process.env.DB,{useNewUrlParser: true})

const ongs =  [
{
  ongname : 'Grupo Voluntario Mexicano-Alemán, A.C.',
  photoURL: 'http://riapuebla.org/web/wp-content/uploads/2012/11/Logo-Casa-del-Sol-jpg.jpg',
  type: 'Cultural',
  rfc: 'GVM900521SJ1',
},
{
    ongname : 'Fundación Jaguar Negro Tigre Blanco, A.C.',
    photoURL: 'https://i.vimeocdn.com/video/515894126_1280x720.jpg',
    type: 'Ecológica',
    rfc: 'FJN140904CS4',
  },
  {
    ongname : 'Océanos Vivientes, A.C.',
    photoURL: 'http://oceanosvivientes.org/wp-content/uploads/2018/05/logo3.png',
    type: 'Ecológica' ,
    rfc: 'OVI1501215J6',
  },
  {
    ongname : '8 Rainforest Alliance México - Alianza para Bosques, A.C..',
    photoURL: 'http://www.rainforest-alliance.org/sites/default/files/rainforest-alliance-logo.png',
    type: 'Ecológica' ,
    rfc: 'RAM050610LQ8',
  },
  {
    ongname : 'Naturalia, Comité para la Conservación de Especies Silvestres, A.C.',
    photoURL: 'https://naturalia.org.mx/naturalia/images/banners/logo2.jpg',
    type: 'Ecológica' ,
    rfc: 'NCC901024GJ1',
  },
  {
    ongname : 'Fundación Universidad Nacional Autónoma de México, A.C.',
    photoURL: 'https://pbs.twimg.com/profile_images/1082328105048465408/FdcJucnt_400x400.jpg',
    type: 'Educativa' ,
    rfc: 'FUN9301081I5',
  },
  {
    ongname : 'Grupo de Ecología y Conservación de Islas, A.C.',
    photoURL: 'https://naturalia.org.mx/naturalia/images/banners/logo2.jpg',
    type: 'Investigación científica' ,
    rfc: 'GEC981007RWA',
  },
  {
    ongname : 'Trasplante y Vida, I.A.P.',
    photoURL: 'http://www.pro-renal.com/wp-content/uploads/2017/05/logoTyV.png',
    type: 'Cultural' ,
    rfc: 'AHP8503111P1',
  },
  {
    ongname : 'ProSalud y Lucha Contra el Cancer, A.C',
    photoURL: 'https://pbs.twimg.com/profile_images/957096924225593344/_fVjntU3_400x400.jpg',
    type: 'Cultural' ,
    rfc: 'PLC150220R26',
  },
  {
    ongname : 'Proteccion Integral para la Mujer y la Niñez, A.C',
    photoURL: 'https://naturalia.org.mx/naturalia/images/banners/logo2.jpg',
    type: 'Cultural' ,
    rfc: 'PIM160301AX9',
  },
  {
    ongname : 'Milagros Caninos, A.C',
    photoURL: 'https://pbs.twimg.com/profile_images/2157444279/LOGO_FINAL-1_copia.jpg',
    type: 'Servicios públicos' ,
    rfc: 'MCA060209358',
  },
  {
    ongname : 'Culturas y Artes Populares, A.C',
    photoURL: 'http://imparcialoaxaca.mx/wp-content/uploads/2018/01/Muestra-del-arte-popular-de-Oaxaca-.jpg',
    type: 'Cultural' ,
    rfc: 'CAP160215NB8',
  },
  {
    ongname : 'Greenpeace México, A.C.',
    photoURL: 'https://greenpeace.mx/sin-plasticos/img/logogp.png',
    type: 'Ecológica' ,
    rfc: 'GME920514V69',
  },
  {
    ongname : 'Reforestamos México, A.C.',
    photoURL: 'https://ecoosfera.com/wp-content/imagenes/reforestamos.jpg',
    type: 'Ecológica' ,
    rfc: 'RME020521MV8',
  },
  {
    ongname : 'Protectora Nacional de Animales, A.C.',
    photoURL: 'https://pnamexico.com/wp-content/uploads/2017/12/LOGO-PNA-300x105.png',
    type: 'Servicios públicos' ,
    rfc: 'PNA921015S37',
  },
  {
    ongname : 'Andes Animales Desamparados, A.C.',
    photoURL: 'http://www.andes.org.mx/Images/all_header.gif',
    type: 'Servicios públicos' ,
    rfc: 'AAD040708KB5',
  },
]

// mongoose.connect('mongodb+srv://admin:<Mojo2511>@cluster0-2nqms.mongodb.net/donare?retryWrites=true',{useNewUrlParser: true}, () => {
  Cause.create(ongs)
    .then (organs=>{
      console.log(`You have created ${organs.length} succesfully`)
      mongoose.connection.close()
    })
    .catch(err=>{(err)})

