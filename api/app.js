const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

const userRoutes = require("./routes/users");
const passwordRoutes = require("./routes/password");

app.use(express.json());
app.use(cors());
const uuid = require('uuid')


app.use("/api", userRoutes);

app.use("/api", passwordRoutes);

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public", "index.html"))
);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server up and running on port: ${PORT}`)
);
