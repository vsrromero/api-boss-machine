const express = require('express');
const ideasRouter = require('./ideas');
const minionsRouter = require('./minions');
const apiRouter = express.Router();



apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;


// const express = require('express');
// const ideasRouter = require('./ideas');
// const minionsRouter = require('./minions');

// const subRouters = {
//   '/minions': minionsRouter,
//   '/ideas': ideasRouter
// };

// const apiRouter = express.Router();

// for (const [path, router] of Object.entries(subRouters)) {
//   apiRouter.use(path, router);
// }

// apiRouter.use((req, res, next) => {
//   const err = new Error('Path not found');
//   err.status = 404;
//   next(err);
// });

// apiRouter.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || 'Something went wrong!');
// });

// module.exports = apiRouter;