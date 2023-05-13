// require npm dotenv
const { config } = require('dotenv');
config()

// require express js
const express = require('express')
const app = express()


const PORT = parseInt(process.env.PORT);

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.send('Node.js is working!');
});

app.get('/biodata', (req, res) => {
    const nama = req.query.nama
    const tempatLahir = req.query['tempat-lahir']
    const tanggalLahir = req.query['tanggal-lahir']
    const alamat = req.query.alamat

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat,
    })
});

app.post('/biodata', (req, res) => {
    const nama = req.body.nama
    const tempatLahir = req.body['tempat-lahir']
    const tanggalLahir = req.body['tanggal-lahir']
    const alamat = req.body.alamat

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat,
    })
});


app.listen(PORT, () => {
    console.log('Server berjalan di http://localhost:' + PORT);
});


