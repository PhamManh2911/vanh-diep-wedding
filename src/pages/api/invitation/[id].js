import { apiflashAccessKey, apiflashApi } from "@/configs/api-flash";
import { appHostname, nha } from "@/configs/app";
import { User } from "@/database/models/user";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const user = await User.findByPk(id);

    if (!user) res.status(404).send('User id not found!');
    const response = await axios.get(`${apiflashApi}`, {
      params: {
        access_key: apiflashAccessKey,
        url: `${appHostname}/invitation/${id}?nha=${nha}`,
        width: 1327,
        height: 1030,
        // for testing in ngrok
        user_agent: '/non-standard',
      },
      responseType: 'stream',
    });

    response.data.pipe(res);
  } else {
    res.status(400).send('Method not found!');
  }
}