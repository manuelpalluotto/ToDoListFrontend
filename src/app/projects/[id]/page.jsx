'use client'

import '@/app/projects/projects.css';
import ManuButton from '@/components/SubmitButton';
import Navbar from "@/components/Navbar";
import NavLinksBar from "@/components/NavLinksBar";
import { convertedStatus, fetchProjects, getProjectById, updateDate } from "@/lib/apiMethods";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SubmitButton from '@/components/SubmitButton';

export default function ProjectDetail() {
    const params = useParams();
    const projectId = params.id;
    const [project, setProject] = useState([]);
    const [isEditing, setEditing] = useState(false);
    const [projectEnd, setProjectEnd] = useState('');
    const status = convertedStatus(project.status);


    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const res = await getProjectById(id);
                setProject(res);
            } catch (error) {
                alert(error);
            }
        };
        fetchData(projectId);
    }, [])

    const sendData = async (ProjectUpdateDateDTO) => {
        try {
            const response = await updateDate(ProjectUpdateDateDTO);
        }
        catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <Navbar />
            <NavLinksBar />
            <div>
                <div>
                    <div>title: {project.projectTitle}</div>
                </div>

                <div>
                    <div>description: {project.projectDescription}</div>
                </div>

                <div>
                    <div>status: {status}</div>
                </div>

                <div>
                    <div>starttime: {project.projectStart}</div>
                </div>

                {!isEditing ?
                    (
                        <div className='endtime-container'>
                            <div>endtime: {project.projectEnd}</div>
                            <button onClick={() => setEditing(true)}>Edit</button>
                        </div>
                    )
                    :
                    (
                        <div>
                            <form onSubmit={(e) => {
                                const ProjectUpdateDateDTO = {
                                    projectId,
                                    projectEnd
                                };
                                sendData(ProjectUpdateDateDTO);
                            }}>
                                <input
                                    id='projectEnd'
                                    type='date'
                                    placeholder='Input New Date Here'
                                    value={projectEnd}
                                    onChange={(e) => setProjectEnd(e.target.value)}
                                    required
                                />
                                <SubmitButton>Submit</SubmitButton>
                                <button onClick={() => setEditing(false)}>Cancel</button>
                            </form>
                        </div>
                    )}



                <div className='ticket-container'>
                    <div>tickets: {project.tickets}</div>
                    <SubmitButton>Add Ticket/s</SubmitButton>
                </div>

                <div className='user-container'>
                    <div>users: {project.users}</div>
                    <ManuButton>Add User/s</ManuButton>
                </div>

            </div>
        </>
    );
}