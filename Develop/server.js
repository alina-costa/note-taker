const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// use apiRoutes
app.use("/api", apiroutes);
app.use("/", htmlroutes);

function findById(id, array) {
  const result = array.filter((data) => data.id === id)[0];
  return result;
}

// make sure user doesnt save empty notes
function validateNotes(notes) {
  if (!notes.title || typeof notes.title !== "string") {
    return false;
  }
  if (!notes.text || typeof notes.text !== "string") {
    return false;
  }
  return true;
}

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

module.exports = validateNotes;
