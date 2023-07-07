"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateApplicant = exports.getApplicant = void 0;
const db_1 = __importDefault(require("../../db"));
const getApplicant = (req, res) => {
    db_1.default.query("SELECT * FROM awesome_applicant", (error, results) => {
        if (error)
            throw error;
        res.status(200).json(results.rows);
    });
};
exports.getApplicant = getApplicant;
const updateApplicant = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, school, movie, game, weather } = req.body;
    db_1.default.query('UPDATE awesome_applicant SET name = $1, email = $2, school = $3, movie = $4, game = $5, weather = $6 WHERE id = $7', [name, email, school, movie, game, weather, id], (error, results) => {
        if (error)
            throw error;
        res.status(200).send(`Applicant modified with ID: ${id}`);
    });
};
exports.updateApplicant = updateApplicant;
