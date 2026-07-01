const express = require('express');
const app = express();
const cors = require('cors');

const notesRoutes = require('./src/routes/notesRoutes');
const connectDB = require('./src/config/db');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
app.use(cors(

    {
        origin : [
            "https://notes-app-delta-dun-18.vercel.app/"
        ]
    }
));

app.use('/api/notes',notesRoutes);

connectDB();


app.listen(5000,()=>{
    console.log('Server started on port 5000');
})



// https://backend-of-notes.onrender.com/api/notes/create-note