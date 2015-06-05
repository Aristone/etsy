"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
require('whatwg-fetch') //--> not a typo, don't store as a var

var $ = require('jquery')

var backbone = require('backbone')
// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
    // start app
    // new Router()
// }
var data = [{ url:}]

import * as templates from "./templates.js"

// console.log(templates.home(data))

// document.body.innerHTML =templates.home(data)

//create router constructor
var GihpyRouter = backbone.router.extend({

	routes: {
		'home' : 'home',
		'details/:id' : 'details'
	},
 home: function(){},
 details: function (){},
 initialize: function (){
 	backbone.history.start()
 },
 home: function(){
 	document.body.innerHTML = templates.home([])
 },
 details: function(id){
 	document.body.innerHTML = templates.details("","")
 }
})

var router = new GihpyRouter()






