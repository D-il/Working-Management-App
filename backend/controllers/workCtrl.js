const Work = require("../models/workmodel.js");

const CreateWork = (async(req,res) => {
    const { WorkID,WorkTitle,WorkDescription,WorkStatus,CreationDate,DueDate,PriorityLevel} = req.body;

    const newWork = new Work({
        WorkID,
        WorkTitle,
        WorkDescription,
        WorkStatus,
        CreationDate,
        DueDate,
        PriorityLevel
    });

    await newWork.save()
    .then(() => {
        res.status(201).json({ message:'Work created successfully'});
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({message:'Work creation Unsuccessful',err});
    });
})
module.exports = {CreateWork}