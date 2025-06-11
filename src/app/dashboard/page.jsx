'use client';
import Navbar from "@/components/Navbar";
import NavLinksBar from "@/components/NavLinksBar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {

    return (
        <>
            <ProtectedRoute>
                <Navbar />
                <NavLinksBar />
            </ProtectedRoute>
        </>
    );
}
