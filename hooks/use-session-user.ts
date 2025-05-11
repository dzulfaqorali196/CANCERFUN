import { useSession } from "next-auth/react";

/**
 * Custom hook to retrieve the user object from the session.
 * Provides additional utilities like loading and authentication status.
 */
export function useSessionUser() {
  const { data: session, status } = useSession();

  // Extract the user object from the session
  const user = session?.user;

  return {
    user, // The user object from the session
    isLoading: status === "loading", // Indicates if the session is still loading
    isAuthenticated: status === "authenticated", // Indicates if the user is authenticated
  };
}
