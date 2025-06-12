import { useState } from "react";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import '@/app/projects/projects.css';
import { addProject, getFullUser } from "@/lib/apiMethods";

export default function AddProject() {

    const [title, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [username, setUsername] = useState([]);

    const Project = {
        title,
        description,
        status,
        start,
        end,
        username
    };



    const handleSubmit = async (Project) => {
        try {
            const res = await addProject(Project);
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
                    id='title'
                    type='text'
                    placeholder='Project-Title'
                    value={title}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    id='description'
                    type='text'
                    placeholder='Project-Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    id='status'
                    type='text'
                    placeholder='Project-Status'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <input
                    id='start'
                    type='date'
                    placeholder='Project-Starttime'
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
                <input
                    id='end'
                    type='date'
                    placeholder='Project-Endtime'
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                />
                <TagsInput
                    id='users'
                    value={ username }
                    onChange={ setUsername }
                    placeholder='Add Users and press Enter'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );


}