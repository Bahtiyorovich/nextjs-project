// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if(req.method === 'GET'){
        const { id } = req.query;

        const customers = await stripe.customers.list({limit: 1000,});
        const customer = customers.data.find(c => c.metadata.user_id === id)

        const subscription = await stripe.subscriptions.list({
            limit: 1,
            customer: customer?.id
        })

        return res.status(200).json({subscription})
    }

}

interface Data {
    message?: string,
    subscription?: Stripe.Response<Stripe.ApiList<Stripe.Subscription>>, 
  }