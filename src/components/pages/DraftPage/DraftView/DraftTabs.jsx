import React from 'react';
import {
    Box,
    Tabs,
    Tab,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import PlayerList from './PlayerList'; // Assuming PlayerList is your updated component for displaying players
import TradeControls from './TradeControls/TradeControls';

const DraftTabs = ({
    activeTab,
    handleTabChange,
    filteredPlayers,
    handleDraftPlayer,
    teamOrder,
    currentPickIndex,
    selectedTeams,
    isDrafting,
    filterPosition,
    setFilterPosition,
    searchQuery,
    setSearchQuery,
    teamsData,
    selectedPicksForTrade,
    setSelectedPicksForTrade,
    selectedPlayersForTrade,
    setSelectedPlayersForTrade,
    selectedTeamForTrade,
    setSelectedTeamForTrade,
    userTeam,
}) => {
    return (
        <Box>
            {/* Tabs */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{
                    minHeight: 30,
                    '& .MuiTab-root': {
                        minHeight: 30,
                        fontSize: '0.875rem',
                        padding: '4px 8px',
                    },
                }}
            >
                <Tab label="Draft a Player" />
                <Tab label="Trade" />
                <Tab label="Analysis" />
            </Tabs>

            <Box sx={{ marginTop: 2 }} />

            {/* Tab Content */}
            {activeTab === 0 && (
                <Box>
                    <Box sx={{ display: 'flex', gap: 2, marginBottom: 2, marginTop: 3 }}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Filter Positions</InputLabel>
                            <Select
                                value={filterPosition}
                                onChange={(e) => setFilterPosition(e.target.value)}
                                label="Filter Positions"
                            >
                                <MenuItem value="All">All</MenuItem>
                                <MenuItem value="C">Center</MenuItem>
                                <MenuItem value="RW">Right Wing</MenuItem>
                                <MenuItem value="LW">Left Wing</MenuItem>
                                <MenuItem value="D">Defense</MenuItem>
                                <MenuItem value="G">Goalie</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            label="Search All Players"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            fullWidth
                        />
                    </Box>

                    <PlayerList
                        filteredPlayers={filteredPlayers}
                        handleDraftPlayer={handleDraftPlayer}
                        teamOrder={teamOrder}
                        currentPickIndex={currentPickIndex}
                        selectedTeams={selectedTeams}
                        isDrafting={isDrafting}
                    />
                </Box>
            )}

            {activeTab === 1 && (
                <TradeControls
                    teamsData={teamsData}
                    selectedPicksForTrade={selectedPicksForTrade}
                    setSelectedPicksForTrade={setSelectedPicksForTrade}
                    selectedPlayersForTrade={selectedPlayersForTrade}
                    setSelectedPlayersForTrade={setSelectedPlayersForTrade}
                    selectedTeamForTrade={selectedTeamForTrade}
                    setSelectedTeamForTrade={setSelectedTeamForTrade}
                    userTeam={userTeam}
                />
            )}

            {activeTab === 2 && (
                <Box>
                    <Typography variant="body2">Analysis functionality coming soon...</Typography>
                </Box>
            )}
        </Box>
    );
};

export default DraftTabs;