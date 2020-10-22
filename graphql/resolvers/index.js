const routesResolvers = require('./routes')
const usersResolvers = require('./users')

module.exports = {
    Query: {
        ...routesResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...routesResolvers.Mutation
    }
}