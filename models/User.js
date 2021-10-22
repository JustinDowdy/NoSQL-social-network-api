//require mongoose
const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
            //use regex to validate correct email
			match: [
				/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
				'Please enter a valid email address',
			],
		},
		thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
		friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// get friend count
UserSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

//create users model
const User = model('User', UserSchema);

//export to users module
module.exports = User;