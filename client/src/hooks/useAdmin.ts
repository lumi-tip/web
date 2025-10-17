import { useQuery } from "@tanstack/react-query";

interface AdminCheckResponse {
  isAdmin: boolean;
  email: string;
}

export function useAdmin() {
  const { data, isLoading, error } = useQuery<AdminCheckResponse>({
    queryKey: ["/api/admin/check"],
    retry: false,
  });

  return {
    isAdmin: data?.isAdmin ?? false,
    email: data?.email,
    isLoading,
    error,
  };
}
