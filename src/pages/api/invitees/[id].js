import { User } from "@/database/models/user";
import { genTable } from "@/services/airtable";
import { NextApiRequest, NextApiResponse } from "next";

async function handleGet(req, res, recordId) {
  const { nha_trai } = req.query;
  const record = await genTable(nha_trai === "true").find(recordId);

  if (record) res.status(200).json({
    data: { record: record.fields },
  });
  res.status(404).send('Record not found!');
}

async function handlePut(req, res, recordId) {
  const { nha_trai } = req.query;
  const payload = req.body
  const record = await genTable(nha_trai === "true").update(recordId, payload);

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
      await handleGet(req, res, recordId);
      break;
    case 'PUT':
      await handlePut(req, res, recordId);
      break;
    default:
      res.status(400).send('Method not found!');
  }
}