import express from 'express';

const PORT = 3333;

const app = express();

app.get('/test', (request, response) => {
    return response.send('Olá NLW');
})

app.post('/test-post', (request, response) => {
    return response.send('Olá NLW método POST');
})

app.listen(PORT, () => console.log(`Server has started at port ${PORT}`));
