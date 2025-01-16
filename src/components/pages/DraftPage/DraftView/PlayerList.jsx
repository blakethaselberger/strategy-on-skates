import React from 'react';
import { Box, List } from '@mui/material';
import PlayerListItem from './PlayerListItem';

const PlayerList = ({
    filteredPlayers,
    handleDraftPlayer,
    teamOrder,
    currentPickIndex,
    selectedTeams,
    isDrafting,
}) => {
    return (
        <Box
            sx={{
                overflowY: 'auto', // Enable scrolling
                maxHeight: '100%', // Use full height of parent container
                backgroundColor: 'background.paper',
                borderRadius: 1,
                padding: 1,
                boxShadow: 1,
            }}
        >
            <List sx={{ padding: 0 }}>
                {filteredPlayers.map((player) => (
                    <PlayerListItem
                        key={player.id}
                        player={player}
                        handleDraftPlayer={handleDraftPlayer}
                        teamOrder={teamOrder}
                        currentPickIndex={currentPickIndex}
                        selectedTeams={selectedTeams}
                        isDrafting={isDrafting}
                    />
                ))}
            </List>
        </Box>
    );
};

export default PlayerList;