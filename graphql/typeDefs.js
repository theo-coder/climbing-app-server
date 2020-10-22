const { gql } = require('apollo-server')
module.exports = gql`
    type Route{
        id: ID!
        username: String!
        createdAt: String!
        type: String!
        difficulty: String
    }
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query{
        getRoutes: [Route]
        getRoute(routeId: ID!): Route
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(email: String!, password: String!): User!
        addRoute(username: String!, type: String!, difficulty: String): Route!
        deleteRoute(routeId: ID!): String!
    }
`