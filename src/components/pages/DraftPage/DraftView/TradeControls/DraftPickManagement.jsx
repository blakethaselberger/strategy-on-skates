import React from 'react';
import { Box, Typography } from '@mui/material';

const DraftPickManagement = ({ teamData, selectedPicks, togglePick, isUserTeam = false }) => {
    const renderPicks = (picks, year) => (
        <Box sx={{ flex: 1, textAlign: 'left', marginX: year === 2026 ? 1 : 0 }}>
            <Typography
                variant="body2"
                sx={{ fontWeight: 'bold', marginBottom: 1, color: 'text.primary' }}
            >
                {year} Picks
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                }}
            >
                {picks?.length > 0 ? (
                    picks.map((pick) => (
                        <Box
                            key={pick}
                            sx={{
                                padding: 1,
                                border: '1px solid',
                                borderColor: selectedPicks.includes(pick) ? 'primary.main' : 'divider',
                                backgroundColor: selectedPicks.includes(pick) ? 'primary.main' : 'background.paper',
                                color: selectedPicks.includes(pick) ? 'background.paper' : 'text.primary',
                                borderRadius: 1,
                                cursor: 'pointer',
                                textAlign: 'center',
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                minWidth: 36,
                                transition: 'all 0.2s ease-in-out',
                            }}
                            onClick={() => togglePick(pick, isUserTeam)}
                        >
                            {pick}
                        </Box>
                    ))
                ) : (
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                        No Picks Available
                    </Typography>
                )}
            </Box>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            {renderPicks(teamData?.picks, 2025)}
            {renderPicks([], 2026)}
            {renderPicks([], 2027)}
        </Box>
    );
};

export default DraftPickManagement;