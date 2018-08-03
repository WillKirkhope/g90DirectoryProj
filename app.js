const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const queries = require('./queries')
const app = express()

const port = parseInt(process.env.port) || 3000;

const students = require("./routes/index");

app.use(bodyParser.json())
app.use(cors())

app.use("/students", students);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res
    .status(err.status || 500)
    .json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
});

app.listen(port, () => console.log('Listening on http://localhost:3000'))


module.exports = app;
