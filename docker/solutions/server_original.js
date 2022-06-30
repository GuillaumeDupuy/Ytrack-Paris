const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('FUSION! Blue-Eyes Ultimate Dragon!')
})

app.listen(port, () => {
    console.log(`Fusion listening on port ${port}`)
})