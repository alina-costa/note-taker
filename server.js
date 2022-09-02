const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3001;

// use apiRoutes
app.use("/api", apiroutes);
app.use("/", htmlroutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
