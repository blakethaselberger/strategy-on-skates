import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const InBetweenPicks = ({ teamsBeforeUser }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                marginTop: 4,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CircularProgress />
                <Typography variant="h6">
                    {teamsBeforeUser} Teams Picking Before You
                </Typography>
            </Box>
        </Box>
    );
};

export default InBetweenPicks;