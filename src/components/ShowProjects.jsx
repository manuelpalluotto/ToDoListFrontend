'use client';

import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { fetchProjects } from "@/lib/apiMethods";
import { useRouter } from "next/navigation";

export default function ShowProjects() {

    //hier alle projekte einspeichern
    const [projects, setProjects] = useState([]);
    const router = useRouter();

    //dann hier beim initial load die daten fetchen
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchProjects();
                setProjects(response);
            } catch (error) {
                alert(error);
            }
        };

        fetchData();
    }, [])

    //das hilft mir, aufgrund des status des projektes eine passende farbe anzuzeigen
    const getStatusColor = (status) => {
        switch (status) {
            case 'ADDED': return '#9e9e9e'; //grey
            case 'PENDING': return '#ffffff'; //white
            case 'IN_PROGRESS': return '#2196f3'; //blue
            case 'COMPLETED': return '#4caf50'; //green
            default: return '#9e9e9e';
        }
    };


    //dann muss ich das formattieren, denn FullCalendar erwartet ein gewisses Format
    const events = projects.map(project => {
        console.log(`Creating event for project: ${project.id} - ${project.projectTitle} (${project.status})`);
        return {
        id: project.projectId,
        title: project.projectTitle,
        start: project.projectStart,
        end: project.projectEnd || project.projectStart,
        backgroundColor: getStatusColor(project.status),
        allDay: true
    }});

    console.log('Final events array: ', events);


    //diese function wird immer ausgeführt, wenn ein datum angeklickt wird
    const handleClick = (info) => {
        router.push(`/projects/${info.event.id}`);
    };



    return (
        <>
            <div>
                <h2>Project Calendar</h2>
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin
                    ]}
                    initialView='dayGridMonth'
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    events={events}
                    eventClick={handleClick}
                    height='auto'
                    eventDisplay='block'
                />
            </div>
        </>
    );
}