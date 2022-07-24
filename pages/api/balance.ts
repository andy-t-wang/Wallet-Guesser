import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import Cors from "cors";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query;
  // Run the middleware
  await runMiddleware(req, res, cors);

  var data = JSON.stringify({
    jsonrpc: "2.0",
    method: "ankr_getAccountBalance",
    params: {
      blockchain: ["eth", "bsc", "fantom", "avalanche", "polygon", "arbitrum"],
      walletAddress: address,
    },
    id: 1,
  });
  var config = {
    method: "post",
    url: "https://rpc.ankr.com/multichain",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY":
        "22e282df02e47a6dc906c48db9830304e93e9f12bb74a179152c747c01d4e7b7",
    },
    data: data,
  };
  const call = await axios(config);

  // Rest of the API logic
  res.status(200).json(call.data.result);
}
