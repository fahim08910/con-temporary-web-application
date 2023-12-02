// app/ui/SongDetails.js
"use client";

import { useFormState } from 'react-dom';
import buyAction from 'app/actions/buyAction';

function SongDetails({ song }) {
    const [state, alteredBuy] = useFormState(() => buyAction(song.id), {
        status: "",
        quantity: song.quantity
    });

    return (
        <div>
            {song.title} by {song.artist} ({song.year}) - Price: ${song.price} - Quantity: {state.quantity}
            <form action={alteredBuy}>
                <input type='submit' value='Buy!' />
            </form>
            Status: {state.status}
        </div>
    );
}

export default SongDetails;
