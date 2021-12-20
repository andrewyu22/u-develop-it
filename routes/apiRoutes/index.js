const router = require('express').Router();
const candidateRouter = require('./candidateRoutes');
const partyRouter = require('./partyRoutes');

router.use(candidateRouter);
router.use(partyRouter);
router.use(require('./voterRouters'));
router.use(require('./voteRoutes'));

module.exports = router;