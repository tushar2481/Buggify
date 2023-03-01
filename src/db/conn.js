const mongoose = require('mongoose');
<<<<<<< HEAD
require('.env').config();
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://tusharmotka19cs:${process.env.MONGO_PASSWORD}@buggifycluster.gnqrl4p.mongodb.net/userDB", {
=======
require('dotenv').config(); // Load environment variables from .env file

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://tusharmotka19cs:AyhWAyIMXbodYByW@buggifycluster.gnqrl4p.mongodb.net/userDB`, {
>>>>>>> e5c3e935571a2b4d48c75823c7dad076d431159f
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection established`);
}).catch((err) => {
    console.log(err);
});

