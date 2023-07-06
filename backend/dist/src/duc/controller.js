"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplicant = void 0;
const db_1 = __importDefault(require("../../db"));
const getApplicant = (req, res) => {
    db_1.default.query("SELECT * FROM awesome_applicant", (error, results) => {
        if (error)
            throw error;
        res.status(200).json(results.rows);
    });
};
exports.getApplicant = getApplicant;
