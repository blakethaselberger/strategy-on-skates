import React from 'react';
import { Box, TextField, MenuItem, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PlayerSelection = ({
    label,
    players,
    selectedPlayer,
    setSelectedPlayer,
    selectedPlayersForTrade,
    addPlayerToTrade,
    removePlayerFromTrade,
    isYourTeam,
}) => {
    return (
        <Box>
            {/* Player Dropdown */}
            <TextField
                select
                label={label}
                value={selectedPlayer}
                onChange={(e) => {
                    addPlayerToTrade(e.target.value, isYourTeam);
                    setSelectedPlayer('');
                }}
                fullWidth
                variant="outlined"
                sx={{
                    marginBottom: 2,
                    '& .MuiInputLabel-root': { color: 'text.secondary' }, // Dynamic label color
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'background.paper',
                        color: 'text.primary', // Dynamic input text color
                    },
                }}
            >
                <MenuItem value="">Select a player</MenuItem>
                {players?.map((player) => (
                    <MenuItem
                        key={`${player.first_name} ${player.last_name}`}
                        value={`${player.first_name} ${player.last_name}`}
                    >
                        {`${player.first_name} ${player.last_name} (${player.position})`}
                    </MenuItem>
                ))}
            </TextField>

            {/* Selected Players */}
            <Box>
                {selectedPlayersForTrade.map((player, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 1,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            marginBottom: 1,
                            color: 'text.primary', // Theme-based color
                        }}
                    >
                        <Typography>{player}</Typography>
                        <IconButton
                            size="small"
                            onClick={() => removePlayerFromTrade(player, isYourTeam)}
                        >
                            <CloseIcon sx={{ color: 'text.primary' }} /> {/* Dynamic color */}
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PlayerSelection;