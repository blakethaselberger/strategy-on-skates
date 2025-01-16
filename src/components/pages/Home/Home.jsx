import React from 'react';
import { Typography, Container, Grid2, Box } from '@mui/material';
import NHLStandings from '../../tables/NHLStandings';
import NHLLeadingScorers from '../../tables/NHLLeadingScorers';
import PlayerTrends from '../../common/PlayerTrends';
import DraftRankings from '../../tables/DraftRankings';

const Home = () => {
    return (
        <Container>
            {/* Page Title */}
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Welcome to Strategy on Skates
            </Typography>

            {/* Player Trends and Draft Rankings Side by Side */}
            <Box sx={{ marginBottom: 3 }}>
                <Grid2 container spacing={2} justifyContent="center">
                    {/* Player Trends */}
                    <Grid2 item xs={12} md={6}>
                        <PlayerTrends />
                    </Grid2>

                    {/* Draft Rankings */}
                    <Grid2 item xs={12} md={6}>
                        <DraftRankings />
                    </Grid2>
                </Grid2>
            </Box>

            {/* Group for NHL Standings and NHL Leading Scorers */}
            <Grid2
                container
                spacing={2}
                justifyContent="center" // Centers items horizontally
                alignItems="center" // Centers items vertically
            >
                {/* NHL Standings */}
                <Grid2 item xs={12} md={6}>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            margin: '0 auto', // Centers content in mobile
                            overflowX: 'auto',
                            textAlign: 'center', // Centers text in Box
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            NHL Standings
                        </Typography>
                        <NHLStandings />
                    </Box>
                </Grid2>

                {/* NHL Leading Scorers */}
                <Grid2 item xs={12} md={6}>
                    <Box
                        sx={{
                            maxWidth: '100%',
                            margin: '0 auto', // Centers content in mobile
                            overflowX: 'auto',
                            textAlign: 'center', // Centers text in Box
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            NHL Leading Scorers
                        </Typography>
                        <NHLLeadingScorers />
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default Home;