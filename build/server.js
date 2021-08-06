"use strict";
var app = require('./index');
var server = app.listen(3000, function () {
    console.log("Server is running in the port 3000");
});
