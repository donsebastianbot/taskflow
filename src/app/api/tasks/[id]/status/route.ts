import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { TaskStatus } from '@prisma/client';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { status } = await request.json();

  const current = await prisma.task.findUnique({ where: { id } });
  if (!current) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const nextStatus = status as TaskStatus;

  const task = await prisma.task.update({
    where: { id },
    data: {
      status: nextStatus,
      history: {
        create: {
          fromStatus: current.status,
          toStatus: nextStatus,
          note: 'Movida en tablero',
        },
      },
    },
    include: {
      comments: { orderBy: { createdAt: 'desc' } },
      history: { orderBy: { createdAt: 'desc' }, take: 6 },
    },
  });

  return NextResponse.json(task);
}
