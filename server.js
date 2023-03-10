const express = require('express')
const app = express()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['htm', 'html', 'css', 'js', 'tsx', 'ts', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
//     index: ['index.html'],
//     maxAge: '1m',
//     redirect: false
// }
// app.use(express.static('build', options))

app.get("/", (req, res, next) => {
    try {
        res.send("Hello World");
    } catch (error) {
        next(error);
    }
})

const port = process.env.PORT || 3006

app.listen(port, () => {
    console.log(`React app listening at http://localhost:${port}`)
})