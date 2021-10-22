//require express router
const router = require('express').Router();

//grab thoughts-controller and set requirements for them
const {
	getAllThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
	addReaction,
	deleteReaction,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);

router
	.route('/:id')
	.get(getThoughtById)
	.put(updateThought)
	.delete(deleteThought);

router.route('/:thoughtId/reactions/').post(addReaction).delete(deleteReaction);
//export router through module
module.exports = router;