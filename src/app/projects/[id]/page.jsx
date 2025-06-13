'use client'
import { fetchProjects, getProjectById } from "@/lib/apiMethods";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
    const params = useParams();
    const projectId = params.id;
    const [project, setProject] = useState(null);

    useEffect( () => {
        const fetchData = async (id) => {
            try {
                console.log('ID LOG: ', id);
                const res = await getProjectById(id);
                console.log('NEUER LOG: ', res);
                setProject(res);
            } catch (error) {
                alert (error);
            }

            fetchData(projectId);
        };
    }, [])

    return(
        <div>
            {/* <div>title: { project.projectTitle }</div>
            <div>title: { project.status }</div>
            <div>title: { project.projectDescription }</div>
            <div>title: { project.projectStart }</div>
            <div>title: { project.projectEnd }</div> */}
        </div>
    );
}