'use client'

import '@/app/projects/projects.css';
import ManuButton from '@/components/SubmitButton';
import Navbar from "@/components/Navbar";
import NavLinksBar from "@/components/NavLinksBar";
import { addTicket, convertedStatus, fetchProjects, getProjectById, updateDate } from "@/lib/apiMethods";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SubmitButton from '@/components/SubmitButton';

export default function ProjectDetail() {
    const params = useParams();
    const projectId = params.id;
    const [project, setProject] = useState([]);
    const [isEditingEndTime, setEditingEndTime] = useState(false);
    const [isEditingTickets, setEditingTickets] = useState(false);
    const [projectEnd, setProjectEnd] = useState('');
    const [projectTickets, setProjectTickets] = useState([]);
    const status = convertedStatus(project.status);

    const [ticketTitle, setTicketTitle] = useState();
    const [ticketStart, setTicketStart] = useState();
    const [ticketEnd, setTicketEnd] = useState();


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
            await updateDate(ProjectUpdateDateDTO);
        }
        catch (error) {
            alert(error);
        }
    };

    const sendNewTicketDTO = async (NewTicketDTO) => {
        try {
            await addTicket(NewProjectDTO);
        } catch (error) {
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

                {!isEditingEndTime ?
                    (
                        <div className='endtime-container'>
                            <div>endtime: {project.projectEnd}</div>
                            <button onClick={() => setEditingEndTime(true)}>Edit</button>
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
                                <button onClick={() => setEditingEndTime(false)}>Cancel</button>
                            </form>
                        </div>
                    )}

                {!isEditingTickets ? (
                    <div className='ticket-container'>Tickets:
                        {project.projectTickets && projectTickets.map((ticket) => (
                            <div key={ticket.id}>
                                {ticket.name}
                            </div>
                        ))}
                        <button onClick={() => setEditingTickets(true)}>Edit</button>
                    </div>
                )
                    :
                    (
                        <div>
                            <form onSubmit={(e) => {
                                const NewTicketDTO = {
                                    ticketTitle,
                                    ticketStart,
                                    ticketEnd,
                                    project_ids : projectId
                                };
                                sendNewTicketDTO(NewTicketDTO); 
                            }}>
                                <input
                                    id='ticketTitle'
                                    type='text'
                                    placeholer='Ticket-Title'
                                    value={projectTickets}
                                    onChange={(e) => setProjectTickets(e.target.value)}
                                    required
                                />
                                <input
                                id='ticketStart'
                                type='date'
                                placeholder='Ticket-Start'
                                value={ticketStart}
                                onChange={(e) => setTicketStart(e.target.value)}
                                required
                                />
                                <input
                                id='ticketEnd'
                                type='date'
                                placeholder='Ticket-End'
                                value={ticketEnd}
                                onChange={(e) => setTicketEnd(e.target.value)}
                                required
                                />
                                <SubmitButton>Submit</SubmitButton>
                                <button onClick={() => setEditingTickets(false)}>Cancel</button>
                            </form>
                        </div>
                    )
                }



            </div>
        </>
    );
}