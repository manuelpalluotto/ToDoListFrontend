import Link from "next/link";
import '@/components/components.css';
import { deleteCookie } from "@/lib/apiMethods";
import { useRouter } from "next/router";

export default function LogoutLink({ children }) {


    const logout = async () => {
        try {
            const response = await deleteCookie();
            if (response.ok) {
                alert('Cookie deleted');

            }
        } catch (error) {
            alert(error);
        }
    };

    return <Link href='/login'><button className='logout-button' onClick={logout}>{ children }</button></Link>;
}