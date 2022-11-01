const app = require('express')();
const importData = require('./data.json')
let PORT = process.env.PORT || 8080;

app.listen(
    PORT,
    () => {console.log(`it's alive on http://localhost:${PORT}`)}
)


app.get('/', (req, res) => {
    res.status(200).send(importData)
})