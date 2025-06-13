'use client'

import Navbar from "@/components/Navbar";
import NavLinksBar from "@/components/NavLinksBar";
import ProjectsLayout from "@/components/ProjectsLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProjectsPage() {
    return (
        <ProtectedRoute>
            <Navbar />
            <NavLinksBar />
            <ProjectsLayout />
        </ProtectedRoute>
    );
}