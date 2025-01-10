import React from 'react';
import { Button, Card, CardContent, Typography, Container } from '@mui/material';
import NHLStandings from '../tables/NHLStandings'; // Ensure the import path is correct

const Home = () => (
    <Container>
        <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Strategy on Skates
        </Typography>
        <NHLStandings />  {/* Insert the NHLStandings component here */}
        <Card sx={{ marginTop: 2 }}>
            <CardContent>
                <Typography variant="h5">
                    Feature Spotlight
                </Typography>
                <Typography variant="body2">
                    Dive into our deep analytics tools to build your winning strategy.
                </Typography>
            </CardContent>
        </Card>
    </Container>
);

export default Home;