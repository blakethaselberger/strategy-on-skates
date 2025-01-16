import React from 'react';
import { Box, Typography, Slider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DraftPageHeader = ({ draftSpeed, setDraftSpeed }) => {
    const navigate = useNavigate();

    /**
     * Navigates to the DraftSimulator page with a confirmation prompt.
     */
    const handleSettingsClick = () => {
        const confirmNavigation = window.confirm(
            'You are about to navigate back to settings. All progress in this session will be lost. Do you want to continue?'
        );
        if (confirmNavigation) {
            navigate('/draft-simulator');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
                backgroundColor: 'background.paper',
                boxShadow: 1,
                borderRadius: 1,
                marginBottom: 3,
            }}
        >
            {/* Left Side - Speed Control */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1 }}>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: 'text.primary',
                    }}
                >
                    Speed
                </Typography>
                <Slider
                    value={1000 / draftSpeed}
                    onChange={(e, value) => setDraftSpeed(1000 / value)}
                    step={1}
                    min={1}
                    max={5}
                    sx={{
                        width: '200px',
                        color: 'primary.main',
                        alignSelf: 'center',
                    }}
                />
            </Box>

            {/* Right Side - Settings Button */}
            <Button
                variant="contained"
                onClick={handleSettingsClick}
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    padding: '12px 24px',
                    alignSelf: 'center',
                    ':hover': {
                        backgroundColor: 'primary.dark',
                    },
                }}
            >
                Settings
            </Button>
        </Box>
    );
};

export default DraftPageHeader;