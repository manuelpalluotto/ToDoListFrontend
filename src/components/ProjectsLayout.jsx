'use client'

import { useState } from "react";
import AddProject from "./AddProject";
import ShowProjects from "./ShowProjects";

export default function ProjectsLayout() {

    const [editing, setEditing] = useState(false);

    return(
        <>
            <div className='show-container'></div>
            <div className='add-container'>
                <div className='add-container-title'><button className='add-project-button' onClick={() => setEditing(!editing)}> + Add Project</button></div>
                {editing && <AddProject />}
            <ShowProjects />
            </div>
        </>
    );
}