import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { updateValidationSchema } from 'validationSchema/updates';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.update
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getUpdateById();
    case 'PUT':
      return updateUpdateById();
    case 'DELETE':
      return deleteUpdateById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getUpdateById() {
    const data = await prisma.update.findFirst(convertQueryToPrismaUtil(req.query, 'update'));
    return res.status(200).json(data);
  }

  async function updateUpdateById() {
    await updateValidationSchema.validate(req.body);
    const data = await prisma.update.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteUpdateById() {
    const data = await prisma.update.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
