'use client';
import '@/app/admin/admin.css';
import Navbar from "@/components/Navbar";
import NavLinksBar from "@/components/NavLinksBar";


export default function Admin() {


    return (
        <>
            <Navbar />
            <NavLinksBar />
            <div className='all-users'>All Users</div>
        </>
    );
}