import { useState } from "react";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import '@/app/projects/projects.css';

export default function AddProject() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [users, setUsers] = useState([]);
    const [tickets, setTickets] = useState([]);

    const Project = {
        name,
        description,
        status,
        category,
        start,
        end,
        users,
        tickets
    };

    return (
        <div className='projects-box'>
            <form className='projects-form'>
                <input
                    id='name'
                    type='text'
                    placeholder='Projectname'
                    value={name}
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
                    id='category'
                    type='text'
                    placeholder='Project-Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    value={users}
                    onChange={setUsers}
                    placeholder='Add Users and press Enter'
                />
                <TagsInput
                    id='tickets'
                    value={tickets}
                    onChange={setTickets}
                    placeholder='Add Tickets and press Enter'
                />
            </form>
        </div>
    );


}