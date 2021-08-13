const express = require("express");
const app = express();
const photoRouter = require("./routers/photoRouter");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(photoRouter);

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
