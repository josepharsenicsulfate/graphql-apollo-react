// import React from 'react'
// import ReactDOM from 'react-dom'
// import './style.css'

const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query{
        books: [Book]
    }
    `

// sample data
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin'
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster'
    }
]

//resolvers
const resolvers = {
    Query: {
        books: () => books
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`Server is running`)
})

// class Main extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>
//                     lorem
//                 </p>
//                 <List />
//             </div>
//         )
//     }
// }

// class List extends React.Component{
//     render(){
//         return(
//             <ul>
//                 <li>Item 1</li>
//                 <li>Item 2</li>
//                 <li>Item 3</li>
//                 <li>Item 4</li>
//             </ul>
//         )
//     }
// }

// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// )