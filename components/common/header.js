import Topbar from './topbar';
import Navbar from './navbar';

export default function Header() {
    return(
        <div className="header">
            <Topbar />
            <Navbar />
        </div>
    )
}