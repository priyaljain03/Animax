import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../css/Home.css'
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
                <Grid container columns={{ xs: 4, sm: 4, md: 12 }} alignItems="center" columnSpacing={3} rowSpacing={15}>
                    {animeList.map((anime) => {
                        //Looping through list of animes
                        return (
                            <Grid item xs={6} md={2}>
                                <img src={anime.image}/>
                            </Grid>
                        )
                    })}
                </Grid>    
            </Box>
        </>
    )
}






export default Home