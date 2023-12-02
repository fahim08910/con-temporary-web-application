"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

function Search() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch() {
        const artist = document.getElementById("artist").value;
        const params = new URLSearchParams(searchParams);
        params.set('artist', artist);
        replace(`${pathname}?${params.toString()}`);
    }

    return(
        <div>
        Artist: <input id='artist' />
        <input type='button' value='Search!' onClick={handleSearch} />
        </div>
    );
}

export default Search;