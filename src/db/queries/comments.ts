import type { Comment } from "@prisma/client";
import { prisma } from "@/db";

export type CommentWithAutor = Comment & {
  user: { name: string | null; image: string | null };
};

export function fetchCommentsByPostId(
  postId: string
): Promise<CommentWithAutor[]> {
  return prisma.comment.findMany({
    where: { postId },
    include: { user: { select: { name: true, image: true } } },
  });
}
