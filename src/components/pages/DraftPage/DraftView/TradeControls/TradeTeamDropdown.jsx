import React from 'react';
import {
    Box,
    FormControl,
    Select,
    MenuItem,
    Typography,
    ListItemIcon,
} from '@mui/material';

const TradeTeamDropdown = ({
    teamsData = [],
    userTeam = {},
    selectedTeamForTrade,
    handleTeamChange,
}) => {
    return (
        <FormControl fullWidth variant="outlined">
            <Select
                value={selectedTeamForTrade}
                onChange={handleTeamChange}
                sx={{
                    backgroundColor: 'background.paper', // Use theme background for dark mode
                    borderRadius: 1,
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px 8px',
                    height: '56px',
                }}
                renderValue={(value) => {
                    const team = teamsData.find((t) => t.name === value);
                    return (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                            }}
                        >
                            <img
                                src={`/path/to/logos/${team?.name}.png`}
                                alt={team?.name}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    border: '1px solid',
                                    borderColor: 'divider', // Dynamic border color
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    color: 'text.primary', // Theme-based color
                                }}
                            >
                                {team?.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '0.9rem',
                                    color: 'text.secondary', // Theme-based secondary text color
                                }}
                            >
                                Next Pick: {team?.picks?.[0] || 'N/A'}
                            </Typography>
                        </Box>
                    );
                }}
            >
                {teamsData
                    .filter((team) => team.name !== userTeam.name)
                    .map((team) => (
                        <MenuItem
                            key={team.name}
                            value={team.name}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                padding: '8px 12px',
                            }}
                        >
                            <ListItemIcon>
                                <img
                                    src={`/path/to/logos/${team.name}.png`}
                                    alt={team.name}
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: '50%',
                                        border: '1px solid',
                                        borderColor: 'divider', // Dynamic border color
                                    }}
                                />
                            </ListItemIcon>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    color: 'text.primary', // Theme-based color
                                }}
                            >
                                {team.name}
                            </Typography>
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
};

export default TradeTeamDropdown;