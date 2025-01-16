import React from 'react';
import { Box, ListItem, Typography, Button, Divider } from '@mui/material';

const PlayerListItem = ({
    player,
    handleDraftPlayer,
    teamOrder,
    currentPickIndex,
    selectedTeams,
    isDrafting,
}) => {
    return (
        <>
            <ListItem
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 16px', // Reduced padding for less height
                    backgroundColor: 'background.paper',
                    marginBottom: '8px', // Space between items
                }}
            >
                {/* Rank and ADP */}
                <Box
                    sx={{
                        flex: 0.2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '2px', // Reduced gap
                    }}
                >
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        Rank: {player.rank}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        ADP: {player.adp ? player.adp.toFixed(1) : 'N/A'}
                    </Typography>
                </Box>

                {/* Team Logo and Player Info */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px', // Reduced gap between logo and info
                    }}
                >
                    <Box
                        component="img"
                        src={`/path/to/logos/${player.team}.png`}
                        alt={`${player.team} logo`}
                        sx={{
                            width: 40,
                            height: 40, // Reduced logo size
                            borderRadius: '50%',
                            border: '1px solid',
                            borderColor: 'divider',
                        }}
                    />
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 'bold', color: 'text.primary' }}
                        >
                            {player.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {player.position} - {player.amateurTeam || 'Unknown Team'}
                        </Typography>
                    </Box>
                </Box>

                {/* Draft and Details Buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: '8px', // Reduced gap between buttons
                        alignItems: 'center',
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        size="small" // Made buttons smaller
                        onClick={() =>
                            handleDraftPlayer(player, teamOrder[currentPickIndex]?.teamName)
                        }
                        disabled={
                            teamOrder[currentPickIndex]?.teamName !==
                            selectedTeams.find(
                                (team) => team === teamOrder[currentPickIndex]?.teamName
                            ) || isDrafting
                        }
                        sx={{ padding: '6px 12px' }} // Adjusted padding for smaller size
                    >
                        Draft
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="small" // Made buttons smaller
                        disabled={isDrafting}
                        sx={{ padding: '6px 12px' }} // Adjusted padding for smaller size
                    >
                        Details
                    </Button>
                </Box>
            </ListItem>
            <Divider />
        </>
    );
};

export default PlayerListItem;