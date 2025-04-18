const express = require( "express" )
const cors = require( "cors" )

const app = express()
app.use( express.json() )
app.use( cors() )

app.get(  "/api/hello", ( req, res ) => {
    res.json( {
        message: "Hello Nsengiyunva"
    }  )
} );

app.listen( 5005, () => {
    console.log( "App - Nsengiyunva is running on  5005" )
} )