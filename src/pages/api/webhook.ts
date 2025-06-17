import type { IncomingHttpHeaders } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { WebhookRequiredHeaders } from 'svix';
import type { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';
import { prisma } from '~/server/db';

const webhookSecret: string = process.env.WEBHOOK_SECRET || '';

export default async function handler(
  req: NextApiRequestWithSvixRequiredHeaders,
  res: NextApiResponse,
) {
  const payload = JSON.stringify(req.body);
  const headers = req.headers;
  // Create a new Webhook instance with your webhook secret
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;

  try {
    // Verify the webhook payload and headers

    evt = (await wh.verify(payload, headers)) as WebhookEvent;
  } catch (err) {
    // If the verification fails, return a 400 error
    console.log(err);
    return res.status(400).json({});
  }
  const id = evt.data?.id;

  const eventType = evt.type;
  if (eventType === 'user.created' && id !== undefined) {
    console.log(evt.data.email_addresses[0]?.email_address);
    try {
      const user = await prisma.user.create({
        data: {
          id: evt.data.id,
          firstName: evt.data?.first_name,
          lastName: evt.data?.last_name,
          email: evt.data.email_addresses[0]?.email_address,
        },
      });
      if (!user) {
        throw new Error('there was an error setting up the account');
      }
    } catch (err) {
      console.log(err);
      res.status(401);
    }

    res.status(201).json({});
  }
  if (eventType === 'user.deleted' && id !== undefined) {
    await prisma.user.delete({
      where: {
        id: evt.data.id,
      },
    });

    res.status(201).json({});
  }
}

type NextApiRequestWithSvixRequiredHeaders = NextApiRequest & {
  headers: IncomingHttpHeaders & WebhookRequiredHeaders;
};
