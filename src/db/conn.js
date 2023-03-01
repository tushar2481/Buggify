const mongoose = require('mongoose');
require('.env').config();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://tusharmotka19cs:${process.env.MONGO_PASSWORD}@buggifycluster.gnqrl4p.mongodb.net/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection established`);
}).catch((err) => {
    console.log(err);
});

