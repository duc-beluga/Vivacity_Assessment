import express, {Express, Request, Response} from "express"
import path from "path";

const studentRoutes = require(path.join(__dirname, "/src/duc/routes"));
const cors = require('cors');
const app:Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req:Request, res:Response) => {
  res.send("Hello there" );
});

// app.get('/awesome/applicant', (req:Request, res:Response) => {
//   res.json({
//     name: 'Duc Nguyen',
//     education: 'Georgia Tech',
//     country: 'Vietnam', 
//     ethnicity: 'Asian',
//     color: 'Blue',
//   });
// });

app.use('/awesome/applicant', studentRoutes)

app.listen(port, () => console.log(`listening on port ${port}`))