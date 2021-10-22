//express router
const router = require('express').Router();
//set user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
//add users and thoughts to routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
//export through module router
module.exports = router;