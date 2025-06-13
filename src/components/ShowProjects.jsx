'use client';

import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { fetchProjects } from "@/lib/apiMethods";

export default function ShowProjects() {

    //hier alle projekte einspeichern
    const [projects, setProjects] = useState([]);


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
        }
    };


    //dann muss ich das formattieren, denn FullCalendar erwartet ein gewisses Format
    const events = projects.map(project => ({
        id: projects.id,
        title: project.projectTitle,
        start: project.projectStart,
        end: project.projectEnd,
        backgroundColor: getStatusColor(project.status),
    }));


    //diese function wird immer ausgeführt, wenn ein datum angeklickt wird
    const handleClick = (info) => {
        alert(`Project: ${info.event.title}`);
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
                />
            </div>
        </>
    );
}