'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "./context/UserContext";

export default function HomeRedirect() {
  const { authStatus, isAuthorized, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      console.log('Auth status: ', authStatus);
      if (isAuthorized) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [authStatus, isAuthorized, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Redirecting...</div>
}
