const express = require("express")

const app = express()

app.use('/test', (req,res)=>{
 res.send('Hi router skj slkdno')
})

app.use('/', (req,res)=>{
    res.send('Hi home ss')
   })

app.listen(7777,()=>{
    console.log('hi shwetha dskjok')
})