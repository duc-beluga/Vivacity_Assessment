"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const studentRoutes = require(path_1.default.join(__dirname, "/src/duc/routes"));
const cors = require('cors');
const app = (0, express_1.default)();
const port = 3000;
app.use(cors());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("Hello there");
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
app.use('/awesome/applicant', studentRoutes);
app.listen(port, () => console.log(`listening on port ${port}`));
