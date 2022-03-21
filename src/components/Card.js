import React, { useEffect, useState } from 'react'
import {
    Link
} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import ColorChip from "./ColorChip";
import Grow from '@mui/material/Grow';
import '../css/Card.css'

function Card(props) {
    const [checked, setChecked] = useState(false)
    const [anime, setAnime] = useState({})

    //Setting anime state and checked state 
    useEffect(() => {
        setChecked(true)
        setAnime(props.anime)
    },[])

    //Card JSX 
    return (
        <Grow direction="up" in={checked} mountOnEnter unmountOnExit>
            <Grid item xs={12} sm={6} md={6} lg={2}>
                <div className="grid-box">
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
}

export default Card