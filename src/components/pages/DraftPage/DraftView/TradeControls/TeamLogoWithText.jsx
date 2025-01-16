import React from 'react';
import { Box, Typography } from '@mui/material';

const TeamLogoWithText = ({ teamName, logoPath, additionalText }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <img
                src={logoPath}
                alt={teamName}
                style={{
                    width: 36,
                    height: 36,
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
                        fontSize: '1rem',
                        color: 'text.primary',
                    }}
                >
                    {teamName}
                </Typography>
                {additionalText && (
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '0.9rem',
                            color: 'text.secondary',
                        }}
                    >
                        {additionalText}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default TeamLogoWithText;