//require express 
const router = require('express').Router();
//Import APIs
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
//404 status error
router.use((req, res) => {
	res.status(404).send('<h1>404 Error</h1>');
});
//exporting router through module
module.exports = router;