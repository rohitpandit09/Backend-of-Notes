const Notes = require('../models/Notes');

exports.createNote = async (req,res) =>{

    try{

        const {title,description} = req.body;
        
        const notes = await Notes.create({

            title,
            description

        });

        res.status(201).json({
            message : "Note created successfully",
            
        });

    }catch(err){
        res.status(500).json({
            message : err.message
        })
    }
}

exports.getNote = async (req,res) =>{

    try{

        const existingNotes = await Notes.find();

        if(existingNotes.length===0){
            return res.status(404).json({
                message : "No notes added"
            })
        }

        res.status(200).json({
            message : "Notes feteched successfully",
            notes : existingNotes
        })

    }catch(err){
        res.status(500).json({
            message : err.message
        })
    }
}

exports.updateNote = async (req,res) =>{

    try{

        const {updatedTitle,updatedDescription}  = req.body;
    
        const id = req.params.id;

        // Base condition 

        const existingNotes = await Notes.find();

        if(existingNotes.length===0){
            return res.status(404).json({
                message : "No notes is available in database"
            })
        }

        for(let i=0;i<existingNotes.length;i++){

            if(existingNotes[i]._id.toString() === id){

                existingNotes[i].title = updatedTitle;
                existingNotes[i].description = updatedDescription;
                await existingNotes[i].save();
                
            }

        }

        res.status(200).json({
            message : "Updated successfully"
        })

    }catch(err){
        return res.status(500).json({
            message : err.message
        })
    }
}


// http://localhost:5000/api/update/note/:id


// existingNotes = [

//     {
//         _id : 91881,
//         title : "Tanvi",
//         description : "She is pro coder"

//     },

//     {
//         _id : 7271,
//         title : "Updated title",
//         description : "Updated description "

//     },

//     {
//         _id : 7237,
//         title : "Tanvi 2",
//         description : "She is pro coder 2"

//     }

// ]


// number = [1,2,3,4,5,6,7]

/* for(let i=0;i<number.length ;i++){

    if(number[i]===5){
        console.log(i)
    }
}


*/