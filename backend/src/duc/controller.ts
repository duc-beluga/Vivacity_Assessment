import express, {Express, Request, Response} from "express"
import { QueryResult } from 'pg';

import pool from '../../db';

export const getApplicant = (req: Request, res: Response) => {
    pool.query("SELECT * FROM awesome_applicant", (error: Error, results: QueryResult) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
