// pages/api/myApi.ts
/**
 * @swagger
 * /myApi:
 *   get:
 *     summary: Get data from myApi
 *     description: Retrieve data from myApi
 *     responses:
 *       200:
 *         description: Data retrieved successfully
 *       404:
 *         description: Data not found
 */
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "Data retrieved successfully" });
};
