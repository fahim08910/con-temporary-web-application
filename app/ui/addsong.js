"use client"

import { useFormState } from 'react-dom';
import createSong from 'app/actions/createSong';

function AjaxAddSong() {
    const [state, actionCreateSong] = useFormState(createSong, { id: 0 });

    return(
        <div>
            <h2>AJAX form</h2>
            ID: { state.id }
            <form action={actionCreateSong}>
                Title: <br />
                <input name='title' id='title' /><br />
                Artist: <br />
                <input name='artist' id='artist' /><br />
                Year: <br />
                <input name='year' id='year' /><br />
                Downloads: <br />
                <input name='downloads' id='downloads' /><br />
                Price: <br />
                <input name='price' id='price' /><br />
                Quantity: <br />
                <input name='quantity' id='quantity' /><br />
                <input type='submit' value='Add Song' />
            </form>
        </div>
    );
}

export default AjaxAddSong
