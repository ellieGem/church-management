import express, { Request, Response } from 'express';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
