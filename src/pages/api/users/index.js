import { User } from "@/database/models/user";
import { NextApiRequest, NextApiResponse } from "next";

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userName } = req.body;

    if (!userName) res.status(400).send("Missing user name in body!");
    const user = await User.create({ username: userName });

    res.status(200).json({ data: { user } });
  } else {
    res.status(400).send("Method not found!");
  }
}
