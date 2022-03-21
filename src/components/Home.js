import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import Card from "./Card";
import Loader from "./Loader";
import Banner from "./Banner";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


function Home() {
    const [animeList, setAnimeList] = useState([])
    var randomNum ;
    const navigate = useNavigate()

    //Fetching Anime List from API URL and setting list as state variable animeList
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(resp => {
                return resp.json()
            })
            .then(res => {
                randomNum = Math.floor(Math.random() * res.length);
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
                <>
                <Banner anime={animeList[Math.floor(Math.random() * animeList.length)]}/> {/*Getting Random Anime out of List for the Banner */}
                <Box sx={{ flexGrow: 1 }} style={{ padding: '50px',paddingTop:'0px' }}>
                    <h1 style={{color:"white",fontFamily:'Montserrat'}}>Browse Anime Shows</h1>
                    <Grid container columns={{ xs: 12, sm: 12, md: 18, lg: 12 }} alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{ xs: 4, sm: 8, md: 9 }}>
                        {animeList.map((anime) => {
                            //Looping through list of animes
                            return (
                               <Card key={anime.id} anime={anime}/>
                            )
                        })}
                    </Grid>
                </Box>
                </>
            }
        </div>
    )
}


export default Home