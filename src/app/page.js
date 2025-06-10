'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "./context/UserContext";

export default function HomeRedirect() {
  const { authStatus, isAuthorized } = useUser();
  const router = useRouter();

  useEffect( () => {
    if (isAuthorized) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [authStatus, isAuthorized, router])

}
