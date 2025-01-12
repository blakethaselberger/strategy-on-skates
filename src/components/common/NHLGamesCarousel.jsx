import React, { useState } from 'react';
import { Box, IconButton, Typography, Card, CardContent, Grid2, Avatar } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NHLGamesCarousel = ({ games }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < games.length - 3) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                overflow: 'hidden',
                paddingX: 3,
            }}
        >
            {/* Left Arrow */}
            <IconButton
                onClick={handlePrevClick}
                sx={{
                    position: 'absolute',
                    left: -40, // Move the button outside the cards
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    opacity: currentIndex === 0 ? 0.5 : 1,
                    cursor: currentIndex === 0 ? 'default' : 'pointer',
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>

            {/* Carousel Items */}
            <Box
                sx={{
                    display: 'flex',
                    transition: 'transform 0.3s ease-in-out',
                    transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                    width: `${(games.length / 3) * 100}%`, // Ensures correct width
                    gap: 2,
                }}
            >
                {games.map((game, index) => (
                    <Card
                        key={index}
                        sx={{
                            flex: '0 0 calc((100% - 32px) / 3)', // 3 cards with space for gaps
                            maxWidth: '300px',
                            minWidth: '250px',
                            backgroundColor: 'background.paper',
                            boxShadow: 2,
                        }}
                    >
                        <CardContent>
                            <Typography variant="subtitle2" color="textSecondary">
                                {game.time}
                            </Typography>
                            <Grid2 container spacing={2}>
                                <Grid2 item xs={6}>
                                    <Typography variant="body1">{game.team1.name}</Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {game.team1.record}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
                                        {game.team1.line}
                                    </Typography>
                                </Grid2>
                                <Grid2 item xs={6}>
                                    <Typography variant="body1">{game.team2.name}</Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {game.team2.record}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
                                        {game.team2.line}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                            <Typography variant="caption" sx={{ mt: 2, display: 'block' }}>
                                Team Leaders:
                            </Typography>
                            <Grid2 container spacing={1} alignItems="center">
                                <Grid2 item xs={6} display="flex" alignItems="center">
                                    <Avatar
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            mr: 1,
                                        }}
                                    >
                                        {game.team1.leader.name.charAt(0)}
                                    </Avatar>
                                    <Typography variant="caption">{game.team1.leader.name}</Typography>
                                    <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
                                        {game.team1.leader.stats}
                                    </Typography>
                                </Grid2>
                                <Grid2 item xs={6} display="flex" alignItems="center">
                                    <Avatar
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            mr: 1,
                                        }}
                                    >
                                        {game.team2.leader.name.charAt(0)}
                                    </Avatar>
                                    <Typography variant="caption">{game.team2.leader.name}</Typography>
                                    <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
                                        {game.team2.leader.stats}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Right Arrow */}
            <IconButton
                onClick={handleNextClick}
                sx={{
                    position: 'absolute',
                    right: -40, // Move the button outside the cards
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    opacity: currentIndex === games.length - 3 ? 0.5 : 1,
                    cursor: currentIndex === games.length - 3 ? 'default' : 'pointer',
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default NHLGamesCarousel;