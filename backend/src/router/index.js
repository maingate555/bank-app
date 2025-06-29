const express = require('express');
const router = express.Router();
const AuthRoute = require('./auth');

const routes = [{
    path: '/auth',
    route: AuthRoute
}]


routes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;