const express = require( "express" );
const cors = require( "cors" )

const app = express()
app.use( express.json() )
app.use( cors() )

app.get( "/user", async () => {
    res.send( { message: "This is the User Service" } );
} )

app.listen( 3002, () => {
    console.log( `User service is running at port 3002` )
} )