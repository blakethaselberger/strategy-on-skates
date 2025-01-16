import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const TeamInfo = ({ teamLogo, currentTeamName, draftNeeds, remainingPicks }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                marginBottom: 3,
            }}
        >
            <Avatar
                src={teamLogo}
                alt={`${currentTeamName} Logo`}
                sx={{ width: 40, height: 40 }}
            />
            <Box>
                <Typography variant="h6">{currentTeamName}</Typography>
            </Box>
            <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                <Box>
                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                        Needs
                    </Typography>
                    <Typography variant="body2">{draftNeeds.join(', ')}</Typography>
                </Box>
                <Box>
                    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                        Remaining Picks
                    </Typography>
                    <Typography variant="body2">{remainingPicks.join(', ')}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TeamInfo;