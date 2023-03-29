import API from "$api/api";
import type { Message } from "$api/api-response-types";
import { createQuery } from "@tanstack/svelte-query";

export const useGetMessage = () =>
  createQuery<Message, Error>({
    queryKey: ["message"],
    queryFn: API.message.get,
  });
