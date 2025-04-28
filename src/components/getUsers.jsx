import apiMethods from '@/lib/apiMethods';
import { getUsers } from '@/lib/apiMethods';
import { useState } from 'react';


export default function GetUsers() {

const [users, setUsers] = useState();

const getData = async () => {
    const fullResponse = await getUsers();
    setUsers(fullResponse.data);    
};

    return(
        <>
            <div>
                {users.map( (user) => (
                    <div>{user.username}</div>
                ))}
            </div>
        </>
    );

}