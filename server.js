const express = require('express')
// Set up 'app' below to be able to us that to call 'express' above throughout code
const app = express()
const PORT = 8000

const rappers = {

    '21 savage':{
     'birthname': 'Sylvester Stallone' ,
    'birth_location': 'London, England' ,
    'age': 29},

    'eminem': {
        'birthname': 'Marshall Mathers' ,
        'birth_location': 'Detroit, MI' ,
        'age': 48
    },

    'macklemore': {
        'birthname': 'Mark Donmore' ,
        'birth_location': 'St. Louis, MO' ,
        'age': 38
    },

    'unknown': {
        'birthname': 'unknown' ,
        'birth_location': 'unknown' ,
        'age': 0
    }
   
}

// the below get request is much like an event listener but for network requests
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})