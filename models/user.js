let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
	
	unique_id: Number,
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		type: String,
		default: ''
	},

	password: String,
	passwordConf: String
}),
UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;