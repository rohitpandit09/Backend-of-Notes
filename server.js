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
        origin : "*"
    }
));

app.use('/api/notes',notesRoutes);

connectDB();


app.listen(5000,()=>{
    console.log('Server started on port 5000');
})



// http://localhost:5000/api/notes/create-note