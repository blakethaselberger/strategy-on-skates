import React from 'react';
import { Box, Typography } from '@mui/material';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey'; // Placeholder for NHL icon

const DraftSelectionsHeader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 1,
                backgroundColor: '#333', // Dark background
                color: '#fff', // White text
                borderRadius: '4px',
                marginBottom: 2,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SportsHockeyIcon />
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    Draft Selections
                </Typography>
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                NHL
            </Typography>
        </Box>
    );
};

export default DraftSelectionsHeader;