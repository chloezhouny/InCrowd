var express = require("express");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static('app'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


