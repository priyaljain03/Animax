import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import Card from "./Card";
import Loader from "./Loader";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Home() {
    const [animeList, setAnimeList] = useState([])
    const navigate = useNavigate()

    //Fetching Anime List from API URL and setting list as state variable animeList
    useEffect(async () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(resp => {
                return resp.json()
            })
            .then(res => {
                setAnimeList(res)
            })
            .catch(err => {
                setTimeout(()=>{
                    navigate('/error')
                },10000)
            })
    }, [])

    
    //Returning Grid view for list of animes
    return (
        <div>
            {animeList.length == 0 ? <Loader /> :
                <Box sx={{ flexGrow: 1 }} style={{ padding: '70px',paddingTop:'0px' }}>
                    <h1 style={{color:"white"}}>Browse Anime Shows</h1>
                    <Grid container columns={{ xs: 12, sm: 12, md: 18, lg: 12 }} alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 4, sm: 8, md: 9 }}>
                        {animeList.map((anime) => {
                            //Looping through list of animes
                            return (
                               <Card anime={anime}/>
                            )
                        })}
                    </Grid>
                </Box>
            }
        </div>
    )
}


export default Home