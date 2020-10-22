const Route = require('../../models/Route')
const checkAuth = require('../../util/check-auth')

module.exports = {
    Query: {
        async getRoutes() {
            try {
                const routes = await Route.find().sort({ createdAt: 1 });
                return routes;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getRoute(_, { routeId }) {
            try {
                const route = await Route.findById(routeId);
                if (route) {
                    return route
                } else {
                    throw new Error('Route not found')
                }
            } catch (err) {
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async addRoute(_, { username, type, difficulty }, context) {
            const user = checkAuth(context)
            if (username.trim() === '') {
                throw new Error('Username should not be empty')
            }
            if (type.trim() === '') {
                throw new Error('Invalid type')
            }
            if (!difficulty) {
                difficulty = "undefined"
            }
            const newRoute = new Route({
                username,
                createdAt: new Date().toISOString(),
                type,
                difficulty
            })
            const route = await newRoute.save()
            return route
        },
        async deleteRoute(_, { routeId }, context) {
            const user = checkAuth(context)
            try {
                const route = await Route.findById(routeId)
                await route.delete()
                return 'Route deleted successfuly'
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}