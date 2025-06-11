import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
    const { isAuthorized, loading } = useUser();
    const router = useRouter();

    useEffect( () => {
        if (!loading && !isAuthorized) {
            router.push('/login');
        }
    }, [isAuthorized, loading, router]);

    if (loading) {
        return <div>Checking authorization</div>;
    }

    return isAuthorized ? children : null;
}