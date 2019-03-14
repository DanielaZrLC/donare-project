const express = require ('express')
const router = express.Router()
const passport = require ('passport')
const multer = require ('multer')
const uploadCload = require ('../helpers/cloudinary')

const User = require ('../models/User')



//middlewares

function isAuth(req,res,next){
if (req.isAuthenticated()){
return next()
}else {
    res.status (401).json ({message: "Regístrate o haz Login"})
}}

router.post('/signup', uploadCload.single('picture'), (req,res,next) => {
    if(req.file) req.body.profilePic = req.file.url
    User.register(req.body, req.body.password)
        .then(user => {
            req.body.user = user.id
            res.status(201).json(user)
        })
        .catch(e =>{
            // req.body.err = errDict[e.name]
            res.json(e)
        })
})

router.post ('/login', passport.authenticate('local'),(req,res,next) => {
    let {user} = req
    res.status(200).json({ message:"Has iniciado sesión de forma exitosa", user })
})

router.get ('/logout',isAuth,(req,res)=>{
    req.logout()
    req.session.destroy((err)=>{
        if (!err){
            res.status(200).clearCookie('connect.sid', {path:'/'}).json({message:"Has finalizado tu sesión"})
        }
    })
})

router.get ('/profile',isAuth, (req,res)=>{
    let {user} = req
    res.status(200).json({message: "Éste es tu perfil", user})
})

module.exports = router