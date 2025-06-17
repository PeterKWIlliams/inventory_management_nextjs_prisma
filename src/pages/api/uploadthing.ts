import { createRouteHandler } from 'uploadthing/next-legacy';

import { ourFileRouter } from '~/server/uploadthing';

const handler = createRouteHandler({
  router: ourFileRouter,
});

export default handler;
