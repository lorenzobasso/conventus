import API from "$api/api";
import type { AvailabilityPatch } from "$api/api-response-types";
import { errorToastSettings } from "$atoms/alert-toast";
import { toastStore } from "@skeletonlabs/skeleton";
import {
  createMutation,
  createQuery,
  useQueryClient,
} from "@tanstack/svelte-query";

export const useUpdateAvailability = () => {
  const queryClient = useQueryClient();

  return createMutation({
    mutationFn: (newAvailability: AvailabilityPatch) =>
      API.people.updateAvailability(newAvailability),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
    onError: () => {
      toastStore.trigger({
        message: "Failed to update the availability",
        ...errorToastSettings,
      });
    },
  });
};

export const useGetAvailabilities = () => {
  return createQuery({
    queryKey: ["availabilities"],
    queryFn: API.people.getAvailable,
  });
};
