import express from 'express'

const app = express()
const port = 3500

app.get("/" , function(req,res){
    res.send('Hello World')
})

app.listen(port , () => console.log(`Server is running on ${port}`))