import apiMethods from '@/lib/apiMethods';
import { getUsers } from '@/lib/apiMethods';


export default function GetUsers() {

    const users[] = await getUsers();


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