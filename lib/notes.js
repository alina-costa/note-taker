const path = require("path");

// ** come back to add ability to create and delete notes **

module.exports = { findById, validateNotes };

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
