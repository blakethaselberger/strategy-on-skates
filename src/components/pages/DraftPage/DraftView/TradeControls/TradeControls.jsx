import React, { useState } from 'react';
import {
    Box,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Divider,
    TextField,
    IconButton,
    ListItemIcon,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import TradeTeamDropdown from './TradeTeamDropdown';
import DraftPickManagement from './DraftPickManagement';
import PlayerSelection from './PlayerSelection';

const TradeControls = ({
    teamsData,
    selectedPicksForTrade,
    setSelectedPicksForTrade,
    selectedPlayersForTrade,
    setSelectedPlayersForTrade,
    selectedTeamForTrade,
    setSelectedTeamForTrade,
    userTeam,
}) => {
    const [selectedPlayerForYourTeam, setSelectedPlayerForYourTeam] = useState('');
    const [selectedPlayerForTheirTeam, setSelectedPlayerForTheirTeam] = useState('');

    const selectedTeamData = teamsData.find((team) => team.name === selectedTeamForTrade) || {};
    const userTeamData = teamsData.find((team) => team.name === userTeam.name) || {};

    const handleTeamChange = (event) => {
        const newTeam = event.target.value;
        setSelectedTeamForTrade(newTeam);

        // Reset the picks and players for the other team when changing selected team
        setSelectedPicksForTrade((prev) => ({
            ...prev,
            theirPicks: [],
        }));
        setSelectedPlayersForTrade((prev) => ({
            ...prev,
            theirPlayers: [],
        }));
    };

    const togglePick = (pick, isYourTeam) => {
        setSelectedPicksForTrade((prev) => {
            const updatedPicks = { ...prev };
            if (isYourTeam) {
                updatedPicks.yourPicks = prev.yourPicks.includes(pick)
                    ? prev.yourPicks.filter((p) => p !== pick)
                    : [...prev.yourPicks, pick];
            } else {
                updatedPicks.theirPicks = prev.theirPicks.includes(pick)
                    ? prev.theirPicks.filter((p) => p !== pick)
                    : [...prev.theirPicks, pick];
            }
            return updatedPicks;
        });
    };

    const addPlayerToTrade = (player, isYourTeam) => {
        setSelectedPlayersForTrade((prev) => {
            const updatedPlayers = { ...prev };

            if (isYourTeam) {
                if (
                    updatedPlayers.yourPlayers.length < 2 &&
                    !updatedPlayers.yourPlayers.includes(player)
                ) {
                    updatedPlayers.yourPlayers = [...prev.yourPlayers, player];
                }
                setSelectedPlayerForYourTeam('');
            } else {
                if (
                    updatedPlayers.theirPlayers.length < 2 &&
                    !updatedPlayers.theirPlayers.includes(player)
                ) {
                    updatedPlayers.theirPlayers = [...prev.theirPlayers, player];
                }
                setSelectedPlayerForTheirTeam('');
            }

            return updatedPlayers;
        });
    };

    const removePlayerFromTrade = (player, isYourTeam) => {
        setSelectedPlayersForTrade((prev) => {
            const updatedPlayers = { ...prev };
            if (isYourTeam) {
                updatedPlayers.yourPlayers = prev.yourPlayers.filter((p) => p !== player);
            } else {
                updatedPlayers.theirPlayers = prev.theirPlayers.filter((p) => p !== player);
            }
            return updatedPlayers;
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                backgroundColor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                padding: 3,
                boxShadow: 2,
            }}
        >
            {/* Opponent Team Section */}
            <Box>
                <Box sx={{ marginBottom: 2 }}>
                    {/* Label Positioned Above */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            marginBottom: '4px',
                            color: 'text.primary', // Dynamic color for better contrast in dark mode
                        }}
                    >
                        Select A Team to Trade With
                    </Typography>

                    {/* Dropdown Field */}
                    <TradeTeamDropdown
                        teamsData={teamsData}
                        userTeam={userTeam}
                        selectedTeamForTrade={selectedTeamForTrade}
                        handleTeamChange={handleTeamChange}
                    />
                </Box>
                <DraftPickManagement
                    teamData={selectedTeamData}
                    selectedPicks={selectedPicksForTrade.theirPicks}
                    togglePick={togglePick}
                    isUserTeam={false}
                />
                <Divider sx={{ marginY: 2 }} />
                <TextField
                    select
                    label="Player"
                    value={selectedPlayerForTheirTeam}
                    onChange={(e) => addPlayerToTrade(e.target.value, false)}
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
                    {selectedTeamData?.players?.map((player) => (
                        <MenuItem
                            key={`${player.first_name} ${player.last_name}`}
                            value={`${player.first_name} ${player.last_name}`}
                        >
                            {`${player.first_name} ${player.last_name} (${player.position})`}
                        </MenuItem>
                    ))}
                </TextField>
                <Box>
                    {selectedPlayersForTrade.theirPlayers.map((player, index) => (
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
                                onClick={() => removePlayerFromTrade(player, false)}
                            >
                                <CloseIcon sx={{ color: 'text.primary' }} /> {/* Dynamic color */}
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Your Team Section */}
            <Box>
                <Box>
                    {/* Label Positioned Above */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            marginBottom: '4px',
                            color: 'text.primary', // Dynamic color
                        }}
                    >
                        Your Team
                    </Typography>

                    {/* Your Team Info */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            padding: 1,
                            paddingLeft: 3, // Add additional padding to the left side
                            border: '1px solid',
                            borderColor: 'divider', // Dynamic border color
                            backgroundColor: 'background.paper', // Use theme background for dark mode
                            borderRadius: 1,
                            boxShadow: 2, // Subtle shadow for depth
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
                            {userTeamData.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '0.9rem',
                                color: 'text.secondary', // Theme-based secondary text color
                            }}
                        >
                            Next Pick: {userTeamData.picks?.[0] || 'N/A'}
                        </Typography>
                    </Box>
                </Box>
                {/* Your Team Picks */}
                <DraftPickManagement
                    teamData={userTeamData}
                    selectedPicks={selectedPicksForTrade.yourPicks}
                    togglePick={togglePick}
                    isUserTeam={true}
                />
                <Divider sx={{ marginY: 2 }} />
                <PlayerSelection
                    label="Player"
                    players={userTeamData.players}
                    selectedPlayer={selectedPlayerForYourTeam}
                    setSelectedPlayer={setSelectedPlayerForYourTeam}
                    selectedPlayersForTrade={selectedPlayersForTrade.yourPlayers}
                    addPlayerToTrade={addPlayerToTrade}
                    removePlayerFromTrade={removePlayerFromTrade}
                    isYourTeam={true}
                />
            </Box>
        </Box>
    );
};

export default TradeControls;