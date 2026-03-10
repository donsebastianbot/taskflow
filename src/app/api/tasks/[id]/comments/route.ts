import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { content } = await request.json();
  if (!content?.trim()) return NextResponse.json({ error: 'Comentario vacío' }, { status: 400 });

  const comment = await prisma.taskComment.create({
    data: {
      taskId: id,
      content: content.trim(),
    },
  });

  return NextResponse.json(comment, { status: 201 });
}
