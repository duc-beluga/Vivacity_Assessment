import express, {Express, Request, Response} from "express"
import { QueryResult } from 'pg';

import pool from '../../db';

export const getApplicant = (req: Request, res: Response) => {
    pool.query("SELECT * FROM awesome_applicant", (error: Error, results: QueryResult) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

export const updateApplicant = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, email, school, movie, game, weather } = req.body;

    pool.query('UPDATE awesome_applicant SET name = $1, email = $2, school = $3, movie = $4, game = $5, weather = $6 WHERE id = $7', 
        [name, email, school, movie, game, weather, id], 
        (error: Error, results: QueryResult) => {
            if (error) throw error;
            res.status(200).send(`Applicant modified with ID: ${id}`);
    })
}
