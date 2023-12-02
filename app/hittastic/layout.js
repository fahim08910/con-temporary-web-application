import "./hittastic.css";
import Link from 'next/link';

function Layout({children}) {
    return(
        <div id='container'>
        <div id='nav'>
        <Link href='/hittastic'>Main</Link>
        <br />
        <Link href='/hittastic/search2'>search</Link>
        <br />
        <Link href='/hittastic/add'>Add</Link>
        <br />
        <Link href='/hittastic/about'>About</Link>
        <br />
        <Link href='/hittastic/slow'>Slow</Link>
        <br />
        <Link href='/hittastic/slow2'>Suspense Loading</Link>
        <br />
        </div>
        <div id='main'>
        {children}
        </div>
        </div>
    );
}

export default Layout;