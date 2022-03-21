import React from 'react';
import {Link} from 'react-router-dom'
import '../css/Banner.css'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function Banner({anime}) {
    return (
            <div className='banner-wrapper-outer' style={{backgroundImage: `url(${anime.movie_banner})`}}>
            <div className='banner-content'>
                <div className="banner-title">{anime.title}</div>
                <div className="banner-extra">Released: {anime.release_date} | Rating:  {anime.rt_score}% | <AccessTimeFilledIcon className='icon'/> Running Time: {anime.running_time} mins</div>
                <div className="banner-description">{anime.description}</div>
                <div className="banner-buttons">
                    <button className='watch-button'>Watch Now</button>
                    <Link to={`/detail/${anime.id}`}><button className='more-info-button'>Detail</button></Link>
                </div>
            </div>
            <div className='fade-bottom'></div>
       </div>
    )
}

export default Banner