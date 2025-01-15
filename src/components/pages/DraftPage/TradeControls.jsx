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
                            color: '#333',
                        }}
                    >
                        Select A Team to Trade With
                    </Typography>

                    {/* Dropdown Field */}
                    <FormControl fullWidth variant="outlined">
                        <Select
                            value={selectedTeamForTrade}
                            onChange={handleTeamChange}
                            sx={{
                                backgroundColor: 'white',
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
                                            src={`/path/to/logos/${team.name}.png`}
                                            alt={team.name}
                                            style={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: '50%',
                                                border: '1px solid #ddd',
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                color: '#333',
                                            }}
                                        >
                                            {team.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: '0.9rem',
                                                color: '#666',
                                            }}
                                        >
                                            Next Pick: {team.picks?.[0] || 'N/A'}
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
                                                    border: '1px solid #ddd',
                                                }}
                                            />
                                        </ListItemIcon>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                color: '#333',
                                            }}
                                        >
                                            {team.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
                    {selectedTeamData?.picks?.map((pick) => (
                        <Box
                            key={pick}
                            sx={{
                                padding: 1,
                                border: '1px solid',
                                borderColor: selectedPicksForTrade.theirPicks.includes(pick)
                                    ? 'primary.main'
                                    : 'divider',
                                borderRadius: 1,
                                cursor: 'pointer',
                                textAlign: 'center',
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                minWidth: 36,
                            }}
                            onClick={() => togglePick(pick, false)}
                        >
                            {pick}
                        </Box>
                    ))}
                </Box>
                <Divider sx={{ marginY: 2 }} />
                <TextField
                    select
                    label="Player"
                    value={selectedPlayerForTheirTeam}
                    onChange={(e) => addPlayerToTrade(e.target.value, false)}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
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
                            }}
                        >
                            <Typography>{player}</Typography>
                            <IconButton
                                size="small"
                                onClick={() => removePlayerFromTrade(player, false)}
                            >
                                <CloseIcon />
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
                            color: '#333',
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
                            border: '1px solid',
                            borderColor: 'divider',
                            backgroundColor: 'background.default',
                            borderRadius: 1,
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add subtle shadow for depth
                        }}
                    >
                        <img
                            src={`/path/to/logos/${userTeamData.name}.png`}
                            alt={userTeamData.name}
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: '50%',
                                border: '1px solid #ddd',
                            }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                color: '#333',
                            }}
                        >
                            {userTeamData.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '0.9rem',
                                color: '#666',
                            }}
                        >
                            Next Pick: {userTeamData.picks?.[0] || 'N/A'}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 1 }}>
                    {userTeamData.picks.map((pick) => (
                        <Box
                            key={pick}
                            sx={{
                                padding: 1,
                                border: '1px solid',
                                borderColor: selectedPicksForTrade.yourPicks.includes(pick)
                                    ? 'primary.main'
                                    : 'divider',
                                borderRadius: 1,
                                cursor: 'pointer',
                                textAlign: 'center',
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                minWidth: 36,
                            }}
                            onClick={() => togglePick(pick, true)}
                        >
                            {pick}
                        </Box>
                    ))}
                </Box>
                <Divider sx={{ marginY: 2 }} />
                <TextField
                    select
                    label="Player"
                    value={selectedPlayerForYourTeam}
                    onChange={(e) => addPlayerToTrade(e.target.value, true)}
                    fullWidth
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                >
                    <MenuItem value="">Select a player</MenuItem>
                    {userTeamData.players.map((player) => (
                        <MenuItem
                            key={`${player.first_name} ${player.last_name}`}
                            value={`${player.first_name} ${player.last_name}`}
                        >
                            {`${player.first_name} ${player.last_name} (${player.position})`}
                        </MenuItem>
                    ))}
                </TextField>
                <Box>
                    {selectedPlayersForTrade.yourPlayers.map((player, index) => (
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
                            }}
                        >
                            <Typography>{player}</Typography>
                            <IconButton
                                size="small"
                                onClick={() => removePlayerFromTrade(player, true)}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default TradeControls;