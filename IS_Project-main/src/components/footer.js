import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from '@mui/material/Container';

export const Footer = () => {

    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            width: '100%',
            bottom: 0,
        }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                    <div>
                        <Typography color="initial">
                            Footer
                        </Typography>
                    </div>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright ©2022. [] Limited
                    </Typography>
                </Box>

            </Container>
        </Paper>
    )
}
