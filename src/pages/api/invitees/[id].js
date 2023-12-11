import { User } from "@/database/models/user";
import { table } from "@/services/airtable";
import { NextApiRequest, NextApiResponse } from "next";

async function handleGet(res, recordId) {
  const record = await table.find(recordId);

  if (record) res.status(200).json({
    data: { record: record.fields },
  });
  res.status(404).send('Record not found!');
}

async function handlePut(res, recordId, payload) {
  const record = await table.update(recordId, payload);

  if (record) res.status(200).json({
    data: { record: record.fields },
  });
  res.status(404).send('Record not found!');
}

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default async function handler(req, res) {
  const { id } = req.query;
  const user = await User.findByPk(id);

  if (!user) res.status(404).send('User not found!');
  const recordId = user.record_id;

  // User with no record created
  if (!recordId) res.status(200).json({ data: { record: null } });

  switch (req.method) {
    case 'GET':
      await handleGet(res, recordId);
      break;
    case 'PUT':
      const { join, plus_one, address, date } = req.body;

      await handlePut(res, recordId, { join, plus_one, date, address });
      break;
    default:
      res.status(400).send('Method not found!');
  }
}