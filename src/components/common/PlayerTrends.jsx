import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid2 } from '@mui/material';

// Example data
const hotStreaks = [
    { name: 'Connor McDavid', team: 'EDM', stats: '10 PTS in 5 GP', description: 'Leading the Oilers to victories.', avatar: '' },
    { name: 'David Pastrnak', team: 'BOS', stats: '7 G in 5 GP', description: 'Scored a hat trick last game.', avatar: '' },
    { name: 'Connor McDavid', team: 'EDM', stats: '10 PTS in 5 GP', description: 'Leading the Oilers to victories.', avatar: '' },
    { name: 'David Pastrnak', team: 'BOS', stats: '7 G in 5 GP', description: 'Scored a hat trick last game.', avatar: '' },
];

const coldStreaks = [
    { name: 'Johnny Gaudreau', team: 'CBJ', stats: '0 PTS in 5 GP', description: 'Struggling to find the net.', avatar: '' },
    { name: 'Patrick Kane', team: 'CHI', stats: '1 PTS in 5 GP', description: 'Limited offensive production.', avatar: '' },
    { name: 'Johnny Gaudreau', team: 'CBJ', stats: '0 PTS in 5 GP', description: 'Struggling to find the net.', avatar: '' },
    { name: 'Patrick Kane', team: 'CHI', stats: '1 PTS in 5 GP', description: 'Limited offensive production.', avatar: '' },
    { name: 'Johnny Gaudreau', team: 'CBJ', stats: '0 PTS in 5 GP', description: 'Struggling to find the net.', avatar: '' },
];

const PlayerTrends = () => {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Player Trends
            </Typography>
            <Grid2 container spacing={2}>
                {/* Hot Streaks */}
                <Grid2 item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Hot Streaks
                    </Typography>
                    {hotStreaks.map((player, index) => (
                        <Card key={index} sx={{ mb: 2, backgroundColor: 'background.paper', boxShadow: 2 }}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                                    {player.name.charAt(0)}
                                </Avatar>
                                <Box>
                                    <Typography variant="subtitle1">{player.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {player.team} - {player.stats}
                                    </Typography>
                                    <Typography variant="caption">{player.description}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Grid2>

                {/* Cold Streaks */}
                <Grid2 item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Cold Streaks
                    </Typography>
                    {coldStreaks.map((player, index) => (
                        <Card key={index} sx={{ mb: 2, backgroundColor: 'background.paper', boxShadow: 2 }}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ mr: 2, bgcolor: 'error.main' }}>
                                    {player.name.charAt(0)}
                                </Avatar>
                                <Box>
                                    <Typography variant="subtitle1">{player.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {player.team} - {player.stats}
                                    </Typography>
                                    <Typography variant="caption">{player.description}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default PlayerTrends;