import { Typography, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { FormPage2 } from './page2';
import {
    BrowserRouter as Router, Routes,
    Route, Navigate
} from "react-router-dom";
// import { Link } from "@material-ui/Link";
import { Link } from '@mui/material';

export const LandingComp = () => {

    return (
        <div className='landingComponentOuter'>
            <div className='mainText'>
                <Typography variant='h1' style={{ "color": "white", "fontWeight": "500" }}>
                    The new way to plan your next trip
                </Typography>
            </div>
            <div className='mainForm'>
                <form>
                    <div className='mainFormInput'>
                        <TextField id="outlined-search" label="Enter source destination..." type="text" />
                    </div>
                    <div className='mainFormInput'>
                        <TextField id="outlined-search" label="Enter end destination..." type="text" />
                    </div>
                    <div className='mainFormInputDate'>
                        <TextField id="outlined-search" label="Start Date" type="text" />
                        <TextField id="outlined-search" label="End Date" type="number" />
                    </div>
                    <div className='mainFormButton'>
                        {/* <Link to="reactproject/src/components/page2.jsx">
                            See your Trip
                        </Link> */}
                        <Button variant="contained">See your Trip</Button>

                    </div>
                </form>
            </div >



        </div >
    )
}
