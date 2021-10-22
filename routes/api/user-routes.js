//require express router
const router = require('express').Router();

//grab users-controller and set requirements for them
const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	deleteFriend,
} = require('../../controllers/user-controller');

//directing to <GET, POST> to create users
router.route('/').get(getAllUsers).post(createUser);

//directing to <GET, PUT, DELETE> to add & delete users
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// directing to <POST, DELETE> to add & delete friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

//export router through module
module.exports = router;