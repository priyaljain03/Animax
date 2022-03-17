import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Loader from "./Loader"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../css/Detail.css'

function Detail(props) {
    const params = useParams();
    const [anime, setAnime] = useState();

    useEffect(async () => {
        fetch(`https://ghibliapi.herokuapp.com/films/${params.animeId}`)
            .then(resp => {
                console.log(resp)
                return resp.json()
            })
            .then(res => {
                console.log(res)
                setAnime(res)
            })
    }, [])


    return (
        <div>
            {anime ?
                <>
                    <div className="banner" style={{ backgroundImage: `url("${anime.movie_banner}")` }}>
                    </div>

                    
                    <Box className="content-grid" sx={{ flexGrow: 1 }} >
                        <Grid container spacing={2} justifyContent="center" alignItems="center" >
                            <Grid item xs={8} sm={4} md={3} lg={3}>
                                <img className="content-img" src={anime.image} />
                            </Grid>
                            <Grid item xs={12} sm={8} md={7} lg={7}>
                                <div className="anime-info">
                                    <h1>{anime.title} | {anime.original_title}</h1>
                                    <p >{anime.description}</p>
                                    <p ><button style={{ backgroundColor: 'orange', border: 'none', 'height': '40px', 'width': '100px' }}>Watch Now</button>
                                        |
                                        <button style={{ backgroundColor: 'orange', border: 'none', 'height': '40px', 'width': '100px' }}>more Info</button></p>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} justifyContent="flex-start" >
                            <Grid item xs={12} sm={8} md={12} lg={12}>
                                <div className="content-extra">
                                    <h3>Additional Info</h3>
                                    <hr />
                                    <p><b>Original Title</b> - {anime.original_title}</p>
                                    <p><b>Director</b> - {anime.director}</p>
                                    <p><b>Director</b> - {anime.director}</p>
                                    <p><b>Producer</b> - {anime.producer}</p>
                                    <p><b>Producer</b> - {anime.producer}</p>
                                    <p><b>Rotten Tomatoes</b> - {anime.rt_score}%</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>

                </>
                :
                <Loader />}
        </div>


    )
}

export default Detail