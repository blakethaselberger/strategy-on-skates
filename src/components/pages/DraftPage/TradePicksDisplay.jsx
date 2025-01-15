import React from 'react';
import { Box, Typography } from '@mui/material';

const TradePicksDisplay = ({ picks, players }) => {
    return (
        <Box>
            {/* Picks */}
            {picks.map((year, index) => (
                <Box key={index}>
                    <Typography variant="subtitle1">{year.year}</Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {year.picks.map((pick, i) => (
                            <Box
                                key={i}
                                sx={{
                                    width: 50,
                                    height: 50,
                                    border: '1px solid #ccc',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 2,
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                {pick}
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}
            {/* Players */}
            <Box>
                <Typography variant="subtitle1">Players</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {players.map((player, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: 100,
                                height: 50,
                                border: '1px solid #ccc',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 2,
                                fontWeight: 'bold',
                            }}
                        >
                            {player.first_name} {player.last_name}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TradePicksDisplay;