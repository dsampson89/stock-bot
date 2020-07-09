const express = require("express");
const path = require("path"); 
const PORT = process.env.PORT || 3001;
const app = express();
//const mongoose = require("mongoose")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

//mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_5j922hxq:password1357@ds133311.mlab.com:33311/heroku_5j922hxq")

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
