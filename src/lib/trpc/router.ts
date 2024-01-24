import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure.input(z.object({ name: z.string() })).query(async ({ input }) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return { greeting: `Hello ${input} tRPC v10 @ ${new Date().toLocaleTimeString()}` };
	})
});

export type Router = typeof router;
