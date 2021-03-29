import express from 'express';
import { getRoutes } from './routes';
import bodyParser from 'body-parser';

const app = express();

app.get('/api/greet', (req, res) => {
    res.json({message: 'Hello World!'});
});

app.get('api/greet/:name', (req, res) => {
    const name = req.params.name;
    
    res.json({
        en: 'Hello' + name,
        hu: 'Hali' + name
    });
});

app.use(bodyParser.json());
app.use(getRoutes());

app.listen(3000, () => {
    console.log('Server started succesfully...');
});