import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();
app.get("/", (req, res) => {
    res.send({ message: "ok", user: { age: 12 } });
    res.end();
});

app.use('/graphql',
    graphqlHTTP(req => ({
        schema,
        pretty: true,
        graphiql: true
    }))
);


const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`App running on ${port}`);
})