import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../css/Home.css'
import { GridViewRounded } from '@mui/icons-material';
import {ColorChips} from "./ColorChip";

function Home() {
    const [animeList, setAnimeList] = useState([]) //List for all fetched animes

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    //Fetching Anime List from API URL and setting list as state variable animeList
    useEffect(async () => {  
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(resp => {
                console.log(resp)
                return resp.json()
            })
            .then(res => {
                console.log(res)
                setAnimeList(res)
            })
    }, [])

    //Returning Grid view for list of animes
    return (
        <>
            <Box sx={{ flexGrow: 1}} style={{padding:'70px'}}>
                <Grid container columns={{ xs: 12, sm: 18, md: 12 }} alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 4, sm: 8, md: 15 }}>
                    {animeList.map((anime) => {
                        //Looping through list of animes
                        return (
                            <Grid item xs={12} sm={6} md={2}>
                                <div className="gridBox">
                                <img src={anime.image}/>
                                <div className="content">
                                    <span>{anime.title} | {anime.original_title}</span>
                                    <br />
                                    <span>Release - {anime.release_date}</span>
                                </div>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>    
            </Box>
        </>
    )
}






export default Home