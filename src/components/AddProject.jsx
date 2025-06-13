import { useState } from "react";
import 'react-tagsinput/react-tagsinput.css';
import '@/app/projects/projects.css';
import { addProject } from "@/lib/apiMethods";

export default function AddProject() {

    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [status, setStatus] = useState('');
    const [projectStart, setProjectStart] = useState('');
    const [projectEnd, setProjectEnd] = useState('');

    const Project = {
        projectTitle,
        projectDescription,
        status,
        projectStart,
        projectEnd,
    };



    const handleSubmit = async (Project) => {
        try {
            const res = await addProject(Project);
            console.log(Project);
            if (res.ok) {
                alert('res.ok');
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className='projects-box'>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit(Project);}} className='projects-form'>
                <input
                    id='projectTitle'
                    type='text'
                    placeholder='Project-Title'
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    required
                />
                <input
                    id='projectDescription'
                    type='text'
                    placeholder='Project-Description'
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                />
                <input
                    id='status'
                    type='text'
                    placeholder='Project-Status'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <input
                    id='projectStart'
                    type='date'
                    placeholder='Project-Starttime'
                    value={projectStart}
                    onChange={(e) => setProjectStart(e.target.value)}
                />
                <input
                    id='projectEnd'
                    type='date'
                    placeholder='Project-Endtime'
                    value={projectEnd}
                    onChange={(e) => setProjectEnd(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );


}