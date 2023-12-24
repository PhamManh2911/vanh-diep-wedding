import { User } from "@/database/models/user";
import { NextApiRequest, NextApiResponse } from "next";

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const user = await User.findByPk(id);

    if (!user) res.status(404).send("User id not found!");
    res.status(200).json({ data: { user } });
  } else {
    res.status(400).send("Method not found!");
  }
}
