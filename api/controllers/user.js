import { banco } from "../banco.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";


    banco.query(q, (err,data) => {
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    });
};