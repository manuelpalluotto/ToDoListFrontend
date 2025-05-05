import Link from "next/link";

export default function NavLinksBar() {
    return (
        <div className='navlinks-container'>
            <div className='dashboard-container'><Link href='/dashboard'>Dashboard</Link></div>
            <div className='projects-container'><Link href='/projects'>Your Projects</Link></div>
            <div className='all--tickets-container'><Link href='tickets'>All Tickets</Link></div>
        </div>
    );
}