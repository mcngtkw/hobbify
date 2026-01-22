'use client'

import {useState} from 'react';

//Sample Client-side component just to learn.
//Client-side component can use state.
export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleLikeClick() {
        setLikes(likes + 1);
    }

    return(
        <button onClick={handleLikeClick}>Likes ({likes})</button>
    );
}