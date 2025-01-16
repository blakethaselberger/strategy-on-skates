import React from 'react';
import { Box, Typography } from '@mui/material';

const YourTeamInfo = ({ userTeamData }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                padding: 1,
                paddingLeft: 3,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
                borderRadius: 1,
                boxShadow: 2,
            }}
        >
            <img
                src={`/path/to/logos/${userTeamData.name}.png`}
                alt={userTeamData.name}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    border: '1px solid',
                    borderColor: 'divider',
                }}
            />
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    color: 'text.primary',
                }}
            >
                {userTeamData.name}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    fontSize: '0.9rem',
                    color: 'text.secondary',
                }}
            >
                Next Pick: {userTeamData.picks?.[0] || 'N/A'}
            </Typography>
        </Box>
    );
};

export default YourTeamInfo;