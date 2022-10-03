// Require modules
const express = require('express')

// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */


/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */


/* END Middleware */

// Mount Routes
/*Start Routes */
app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href="/98">take on down, pass it around</a>`);
})


app.get('/:number_of_bottles', (req, res) => {
    if(req.params.number_of_bottles > 0 && req.params.number_of_bottles < 99){
    res.send(`<h1>${req.params.number_of_bottles} Bottles of beer on the wall</h1>
    <a href="/${req.params.number_of_bottles - 1} ">take on down, pass it around</a>`);
    } else {
        res.send(`<a href="/">Start Over</a>`)
    }
})



/* END ROUTES */


// Tell the app to listen on a port
app.listen(3002, () => {
    console.log('Listening on Port 3002')
})
