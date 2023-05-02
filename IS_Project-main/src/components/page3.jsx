import React from 'react'
import { Typography } from '@mui/material'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WcIcon from '@mui/icons-material/Wc';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Diversity3Icon from '@mui/icons-material/Diversity3';


export const FormPage3 = () => {
    return (
        <div className='page2'>
            <Typography variant='h4' style={{ "textAlign": "center" }}>
                Who you are travelling with?
            </Typography>
            <div className="page2Cards">
                <div className="card1">
                    <div className="cardIconSingle">
                        <EmojiPeopleIcon fontSize='large' />
                    </div>
                    <br />
                    <Typography variant='subtitle2' style={{ "textAlign": "center" }}>
                        Wandering Solo
                    </Typography>
                </div>

                <div className="card1">
                    <div className="cardIconSingle">
                        <WcIcon fontSize='large' />
                    </div>
                    <br />
                    <Typography variant='subtitle2' style={{ "textAlign": "center" }}>
                        Holidaying as a Couple
                    </Typography>
                </div>

                <div className="card1">
                    <div className="cardIconSingle">
                        <FamilyRestroomIcon fontSize='large' />
                    </div>
                    <br />
                    <Typography variant='subtitle2' style={{ "textAlign": "center" }}>
                        Vacationing with Family
                    </Typography>
                </div>

                <div className="card1">
                    <div className="cardIconSingle">
                        <Diversity3Icon fontSize='large' />
                    </div>
                    <br />
                    <Typography variant='subtitle2' style={{ "textAlign": "center" }}>
                        Travelling with Friends
                    </Typography>
                </div>

            </div>
        </div>
    )
}
