const express = require('express')
const path = require('path');
const cors = require('cors')
const app = express()
app.use(cors())
const port = 3000

app.set('view engine', 'ejs');

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// set views for error and 404 pages
app.set('views', path.join(__dirname, 'views'));

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
    res.status(200).render('index');
})


app.get('/empresas', (req, res) => {
    res.send({
        empresas: [
            { nome: 'teste', lat: '-16', long: '-52', pontos: '10' },
            { nome: 'teste2', lat: '-16', long: '-53', pontos: '0' }
        ]
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})