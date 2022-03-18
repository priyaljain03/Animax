import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import Loader from "./Loader"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import Modal from '@mui/material/Modal';
import '../css/Detail.css'

function Detail(props) {
    const params = useParams();
    const [anime, setAnime] = useState({});
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'rgba(17, 10, 10, 0.9)',
        border: 'None',
        boxShadow: 24,
        p: 4,
        borderRadius:"10px",
        color:'white'
    };

    // Fetching anime based on Id received in props
    useEffect(async () => {
        fetch(`https://ghibliapi.herokuapp.com/films/${params.animeId}`)
            .then(resp => {
                return resp.json()
            })
            .then(res => {
                setAnime(res)
            })
            .catch(err => {
                setTimeout(()=>{
                    navigate('/error')
                },10000)
            })
    }, [])



    return (
        <div>
            {Object.keys(anime).length != 0  ?
                <>
                    {/* Background image in Detail page */}
                    <div className="banner" style={{ backgroundImage: `url("${anime.movie_banner}")` }}>
                    </div>

                    {/* Image and Content about the Anime */}
                    <Box className="content-grid" sx={{ flexGrow: 1 }} >
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs='auto' sm={4} md={3} lg={3}>
                                <img className="content-img" src={anime.image} />
                            </Grid>
                            <Grid item xs={12} sm={8} md={7} lg={7}>
                                <div className="anime-info">
                                    <h1>{anime.title} | {anime.original_title}</h1>
                                    <span style={{ color: "orange", fontWeight: 600 }}>Released : {anime.release_date} | Running Time: {anime.running_time} mins</span>
                                    <p>{anime.description}</p>
                                    <button className="watch-button" ><OndemandVideoIcon className="icon"/> Watch Now</button>
                                    <button className="more-info-button" onClick={handleOpen}><InfoSharpIcon className="icon"/> More Info</button>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </>
                :
                <Loader />}

            {/* Modal Starts Here */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p>Title - {anime?anime.title:""}</p>
                    <p>Original Title - {anime?anime.original_title:""}</p>
                    <p>Director - {anime?anime.director:""}</p>
                    <p>Producer - {anime?anime.producer:""}</p>
                    <p>Release Year - {anime?anime.release_date:""}</p>
                    <p>Rating - {anime?anime.rt_score:""}%</p>
                </Box>
            </Modal>
        </div>
    )
}

export default Detail