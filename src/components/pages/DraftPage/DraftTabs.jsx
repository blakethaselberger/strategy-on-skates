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
    List,
    ListItem,
    Button,
    Divider,
    Typography,
} from '@mui/material';

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

                    <List>
                        {filteredPlayers.map((player) => (
                            <React.Fragment key={player.id}>
                                <ListItem
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap', // Allow wrapping if space is tight
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                Rank: {player.rank} | ADP:{' '}
                                                {player.adp ? player.adp.toFixed(1) : 'N/A'}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {player.name}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                                            >
                                                {player.position} - {player.team}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: 1,
                                            flexWrap: 'nowrap', // Buttons stay side by side
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            onClick={() =>
                                                handleDraftPlayer(
                                                    player,
                                                    teamOrder[currentPickIndex]?.teamName
                                                )
                                            }
                                            disabled={
                                                teamOrder[currentPickIndex]?.teamName !==
                                                selectedTeams.find(
                                                    (team) =>
                                                        team === teamOrder[currentPickIndex]?.teamName
                                                ) || isDrafting
                                            }
                                        >
                                            Draft
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            disabled={isDrafting}
                                        >
                                            Details
                                        </Button>
                                    </Box>
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            )}

            {activeTab === 1 && (
                <Box>
                    <Typography variant="body2">Trade functionality coming soon...</Typography>
                </Box>
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