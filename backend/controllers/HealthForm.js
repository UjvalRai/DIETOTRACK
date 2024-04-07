exports.createHealthForm = (req,res)=>{
    const {newData} = req.body;
    console.log(newData);
    res.stutus(200).json(newData);
}