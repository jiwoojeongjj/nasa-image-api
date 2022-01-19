import React, { useState, useEffect } from 'react';
import Content from '../components/Content';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {

    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [valid, setValid] = useState(true);

    console.log(date);

    useEffect(() => {
        const API_KEY = "DwolUtHdatM4XrAa9QjsGxnM2dQ9JCDdHXmf4bXU";
        const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;    
        const URL = `${BASE_URL}&date=${date}`;
        
        async function getResponse() {
            console.log(URL)
            await fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setResponse(data);
                    setLoading(false);
                    if (new Date().toISOString().slice(0, 10) < date) {
                        setValid(false);
                    } else {
                        setValid(true);
                    };                
                })
        }
        getResponse();
    }, [date]);

    function onChange(event) {
        setDate(event.target.value);
        setLoading(true);
    }


    function conditional() {
        if (loading) {
            return <Typography>Loading...</Typography>;
        } else {
            if (valid) {
                return <Content response={response}/>;
            } else {
                return <Typography>Not ready yet!</Typography>;
            }
        }
    }

    return (
        <>
            <Typography variant="h1" sx={{ fontSize: 30, fontWeight: 500, m: 2 }}>Spacetagram</Typography>
            <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                sx={{ fontSize: 15, m:2 }}
            >
                Brought to you by NASA's Astronomy Photo of the Day (APOD) API
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input type="date" onChange={onChange} style={{ width: 200 }}/>
            </div>
            <Box sx={{ display: "flex", justifyContent: "center", m: 6 }}>
                {conditional()}
            </Box>
        </>
    );
}

export default App;
