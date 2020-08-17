//imports
const express = require('express')
const path = require('path')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

//variables
store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [{
      text: 'Cruel…..var { house, mouse} = No type optimization at all'},{
      text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},{
      text: '(p1,p2)=>{ … } ,i understand this ,thank you !'
      }
    ]
    }
  ]
}

const rIndex = require('./routes/index')

//Intit
let app = express()

//Midlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // support json encoded bodies

app.use(logger('dev'))
app.use(errorhandler())

//routes
app.use('/',rIndex)

//Boot Server
app.listen(3000)
