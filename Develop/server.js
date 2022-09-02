const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Use apiRoutes
app.use("/api", apiroutes);
app.use("/", htmlroutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
