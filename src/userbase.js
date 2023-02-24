const express = require('express');
const businessRouter = require('./routers/businessUser');
const app = express();
require('./db/conn');
const businessUsers = require("./models/userConn");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(businessRouter);


app.listen(port, "127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});