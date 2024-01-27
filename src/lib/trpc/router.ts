import prisma from '$lib/prisma';
import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
// import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	locations: t.procedure.query(() => prisma.location.findMany({ orderBy: { name: 'asc' } })),
	people: t.procedure.query(() =>
		prisma.person.findMany({ include: { location: true }, orderBy: { surname: 'asc' } })
	)
});

export type Router = typeof router;
