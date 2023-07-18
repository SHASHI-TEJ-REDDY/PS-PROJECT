const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');


const DB = 'mongodb+srv://21bd1a661tcsma:shashi@shashireact.ebrjsgd.mongodb.net/blockchain?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connection success")
}).catch((err) => console.log("no error"));


// const app = express();
// app.use(cors());
// app.use(express.json());





// // Connect to MongoDB
// mongoose
    // .connect('mongodb+srv://21bd1a661tcsma:shashi@shashireact.ebrjsgd.mongodb.net/blockchain?retryWrites=true&w=majority', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })


// const itemSchema = new mongoose.Schema(
//     {
//         username: String,
//         dateAdded: {
//             type: Date,
//             default: Date.now
//         }

//     },
//     { versionKey: false } // Exclude the version key (__v)
// );


// const Item = mongoose.model('userlos', itemSchema);


// app.post('/api/items', (req, res) => {
//     const newItem = new Item({ username: req.body.filler });

//     newItem
//         .save()
//         .then((result) => {
//             console.log('Saved item:', result);
//             res.sendStatus(200);
//         })

// });



// app.get('/api/items', (req, res) => {
//     Item.find({})
//         .then((items) => {
//             res.status(200).json(items);
//         })

// });

// const port = 5000;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });