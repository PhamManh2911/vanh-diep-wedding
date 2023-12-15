import { User } from "@/database/models/user";
import { genTable } from "@/services/airtable";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nha_trai } = req.query;
    const { uid, ...payload } = req.body;

    if (!uid) res.status(400).send('Missing user id!');
    const user = await User.findByPk(uid);

    if (!user) res.status(400).send('User not found!');
    if (user.record_id) res.status(403).send('Record already existed!');
    const record = await genTable(nha_trai === "true").create({
      name: user.username,
      ...payload,
    });

    await user.update({ record_id: record.id });
    res.status(201).json({ data: { record: record.fields } });
  } else {
    res.status(400).send('Method not found!');
  }
}