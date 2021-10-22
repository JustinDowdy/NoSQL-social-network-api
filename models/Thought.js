const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
			minlength: '1',
			maxlength: '280',
		},
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdAtVal) => createdAtVal.toDateString(),
		},
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// ThoughtsSchema
const ThoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minlength: '1',
			maxlength: '280',
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdAtVal) => createdAtVal.toDateString(),
		},
		username: {
			type: String,
			required: true,
		},
        //Use ReactionsSchema to validate data
		reactions: [ReactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);
//gets total count of reactions
ThoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});
// Thoughts model
const Thought = model('Thought', ThoughtSchema);

//export through thoughts module
module.exports = Thought;