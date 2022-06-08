// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

let reqData: any;

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method == 'POST') {
        // console.log(typeof req.body);
        reqData = req.body;
        console.log(reqData, typeof reqData);
        setTimeout(() => {
            res.status(200).json({ name: 'Resolved' });
        }, 450);
    } else {
        res.status(200).json({ name: 'John Doe' });
    }
}
