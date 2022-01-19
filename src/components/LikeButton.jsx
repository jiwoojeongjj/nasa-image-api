import React, { useState } from 'react';
import Button from '@mui/material/Button';

function LikeButton() {

    const [clicked, setClicked] = useState(false);

    function onClick() {
        setClicked(!clicked);
    }

    return (
        <Button variant="text" onClick={onClick}>
            {clicked ? "Unlike" : "Like"}
        </Button>
    );
}

export default LikeButton;
