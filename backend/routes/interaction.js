const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/User')
const Cause = require('../models/Cause')
const Event = require('../models/Event')

//middlewares
function isAuth(req,res,next){
    if(req.isAuthenticated()){
     return next()
    }else {
        res.status (401).json ({message: "No has iniciado sesión"})
    }
}


function isLoggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status (401).json ({message: "No has iniciado sesión"})
    }
  }

router.post('/createEvent', isAuth, (req, res, next)=>{
    Event.create({...req.body})
        .then(event => {
            let { id } = req.user
            let { cause } = event
            Promise.all([
                User.findByIdAndUpdate(id, {$push: {eventsCreated: event, causesSupported: cause}}, {new: true}),
                Cause.findByIdAndUpdate(cause, {$push: {eventsForTheCause: event, sponsors: id}}, {new: true})
            ])
                .then(response => {
                    res.status(201).json({response, event})
                })
                .catch(e => res.json(e))
        })
    .catch(e => console.log(e))
})

router.get('/allMyEvents', isAuth, (req, res, next) => {
    let { id } = req.user
    Event.find({owner: id})
        .then(events => {
            res.status(200).json(events)
        })
        .catch(e => console.log(e))
})

module.exports = router