const express = require('express')
const methodOvveride = require('method-override')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    methodOvveride('_method', {
        methods: ['POST', 'GET'],
    })
);


app.get('/', (req,res)=>{
    res.send('INDEX')
})

app.get('/users', (req,res)=>{
    res.status(200).json([{
        firstName: "BJVAÖ",
        lastName: "xd"
    }, 
    {
        firstName: 'JSAPDA',
        lastName: 'dx'
    }])
})

app.post('/user', (req,res)=>{
    console.log(req.body)
})

app.listen(80)