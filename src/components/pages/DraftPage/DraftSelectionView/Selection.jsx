import React from 'react';
import { Box, Typography } from '@mui/material';

const Selection = ({ selection }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider',
                width: '100%', // Ensures it spans the entire box
            }}
        >
            {/* Pick Number */}
            <Box
                sx={{
                    flex: 0.1,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    padding: 1,
                }}
            >
                {selection.pick}
            </Box>

            {/* Team and Player Info */}
            <Box sx={{ flex: 0.7, display: 'flex', alignItems: 'center', padding: 1, gap: 2 }}>
                <Box
                    component="img"
                    src={`/path/to/logos/${selection.team}.png`}
                    alt={`${selection.team} logo`}
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        border: '1px solid',
                        borderColor: 'divider',
                    }}
                />
                <Box>
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                            color: selection.player === 'Upcoming' ? 'text.secondary' : 'text.primary',
                        }}
                    >
                        {selection.player === 'Upcoming' ? 'Upcoming' : selection.player}
                    </Typography>
                    {selection.player !== 'Upcoming' && (
                        <Typography variant="body2" color="text.secondary">
                            {selection.position} - {selection.amateurTeam || 'Unknown Team'}
                        </Typography>
                    )}
                </Box>
            </Box>

            {/* Team Needs */}
            <Box sx={{ flex: 0.3, textAlign: 'right', padding: 1 }}>
                <Typography variant="body2" color="text.secondary">
                    Needs: {(selection.teamNeeds || []).join(', ') || 'N/A'}
                </Typography>
            </Box>
        </Box>
    );
};

export default Selection;