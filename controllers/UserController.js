const UserModel = require('../models/user')

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        //res.status(200).json(user);
        res.status(200).render('results', {mydata: user})
    } catch(error) {
        res.status(404).render('results', {mydata: error.message})
        //res.status(404).json({message: error.message});
    }
};
// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.query.email}).exec(); //change params to query
        //const user = await UserModel.findById(req.query.id); //change params to query
        //res.status(200).json(user);
        if (user===null){
            res.status(404).render('results', {mydata: "user not found"
            })
        }else{
            res.status(200).render('results', {mydata: "user :"+ user.username +" "
                     +" "+ user.email +" "+ user.password
            })
        }

    } catch(error) {
        //res.status(404).json({ message: error.message});
        res.status(404).render('results', {mydata: error.message})
    }
};
// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {

    //await UserModel.findByIdAndRemove(req.params.id).then(data => {
    let useremail=req.body.email
    await UserModel.deleteOne({email: useremail}).then(data => {
    //await UserModel.findByIdAndRemove(req.query.id).then(data => {
        //console.log(data)
        if (data.deletedCount===0) {
            //res.status(404).send({ message: `User not found.`});
            res.status(404).render('results', {mydata: "User not found"})

        } else {
            //res.send({message: "User deleted successfully!"});

            res.status(200).render('results', {mydata: "user "+useremail+" deleted succesfully!"})
        }
    }).catch(err => {
        //res.status(500).send({ message: err.message });
        res.status(500).render('results', {mydata: err.message})
    });
};