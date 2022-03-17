import React, { useEffect, useState } from 'react'
import {
    Link
} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../css/Home.css'
import ColorChip from "./ColorChip";
import Loader from "./Loader";
import Grow from '@mui/material/Grow';

function Home() {
    const [animeList, setAnimeList] = useState([]) //List for all fetched animes
    const [checked,setChecked] = useState(false)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    //Fetching Anime List from API URL and setting list as state variable animeList
    useEffect(async () => {
        console.log(animeList)
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(resp => {
                console.log(resp)
                return resp.json()
            })
            .then(res => {
                console.log(res)
                setChecked(true)
                setAnimeList(res)
            })
    }, [])

    //Returning Grid view for list of animes
    return (
        <div>
            {animeList.length == 0 ? <Loader /> :
                <Box sx={{ flexGrow: 1 }} style={{ padding: '70px' }}>

                    <Grid container columns={{ xs: 12, sm: 12, md: 18, lg: 12 }} alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 4, sm: 8, md: 9 }}>
                        {animeList.map((anime) => {
                            //Looping through list of animes
                            return (
                                <Grow direction="up" in={checked}  mountOnEnter unmountOnExit>
                                    <Grid item xs={12} sm={6} md={6} lg={2}>
                                        <div className="gridBox">
                                            <div className="chip">
                                                <ColorChip rt_score={anime.rt_score + "%"} />
                                            </div>

                                            <Link to={`/detail/${anime.id}`}><img src={anime.image} /></Link>
                                            <div className="content">
                                                <span>{anime.title} | {anime.original_title}</span>
                                                <br />
                                                <span>Release - {anime.release_date}</span>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grow>
                            )
                        })}
                    </Grid>
                </Box>
            }
        </div>
    )
}






export default Home