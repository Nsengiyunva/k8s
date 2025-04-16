const express = require( "express" );
const cors = require( "cors" );

const app = express();
app.use( express.json() );
app.use( cors() );

app.get( "/auth", async( req, res ) => {
    res.send( { message:  "This is the Auth Service" } );
} );

app.listen( 3005, () => {
    console.log( "Auth Service is running on port 3005" )
}  );