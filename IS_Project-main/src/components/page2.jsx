import { Typography } from '@mui/material'
import React from 'react'
import DrawerAppBar from './header'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const FormPage2 = () => {

    // console.log("pp");

    return (
            <div className='page2'>

                <Typography variant='h4' style={{ "textAlign": "center" }}>
                    How can we help you?
                </Typography>
                <div className="page2Cards">
                    <div className="card1">
                        <Typography variant='subtitle2' style={{ "textAlign": "center" }}>
                            <b>
                                Suggest an itinerary with
                            </b>
                        </Typography>
                        <div className="cardOuter">
                            <div className="cardInner">
                                <span className="cardIcon">
                                    <AirplanemodeActiveIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Transportation
                                    </Typography>
                                </span>
                            </div>
                            <div className="cardInner">
                                <span className="cardIcon">
                                    <MapsHomeWorkIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Accomodation
                                    </Typography>
                                </span>
                            </div>
                            <div className="cardInner">
                                <span className="cardIcon">
                                    <LocationOnIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Places to Visit
                                    </Typography>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card1">
                        <Typography variant='subtitle2' style={{ "textAlign": "center" }}>
                            <b>
                                Suggest an itinerary with
                            </b>
                        </Typography>
                        <div className="cardOuter">

                            <div className="cardInner">
                                <span className="cardIcon">
                                    <MapsHomeWorkIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Accomodation
                                    </Typography>
                                </span>
                            </div>
                            <div className="cardInner">
                                <span className="cardIcon">
                                    <LocationOnIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Places to Visit
                                    </Typography>
                                </span>
                            </div>
                            <hr />
                            <div className="cardInner">
                                <span className="cardIcon">
                                    <AirplanemodeActiveIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Transportation
                                    </Typography>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="card1">
                        <Typography variant='subtitle2' style={{ "textAlign": "center" }}>
                            <b>
                                Suggest an itinerary with
                            </b>
                        </Typography>
                        <div className="cardOuter">

                            <div className="cardInner">
                                <span className="cardIcon">
                                    <LocationOnIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Places to Visit
                                    </Typography>
                                </span>
                            </div>
                            <hr />
                            <div className="cardInner">
                                <span className="cardIcon">
                                    <AirplanemodeActiveIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Transportation
                                    </Typography>
                                </span>
                            </div>
                            <div className="cardInner">
                                <span className="cardIcon">
                                    <MapsHomeWorkIcon />
                                </span>
                                <span className='cardIconText'>
                                    <Typography variant='body2'>
                                        Accomodation
                                    </Typography>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
