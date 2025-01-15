import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import availablePlayersData from '../../../mock-data/availablePlayers.json';
import initialTeamsData from '../../../mock-data/teams.json';
import DraftSelections from './DraftSelections';
import DraftView from './DraftView';

const DraftPage = () => {

    // var for maintaining list of teams user selected on prev page
    const location = useLocation();
    const selectedTeams = location.state?.selectedTeams || [];

    // States for draft management
    const [draftSelections, setDraftSelections] = useState([]);
    const [availablePlayers, setAvailablePlayers] = useState(availablePlayersData);

    //state for searching and filtering
    const [filteredPlayers, setFilteredPlayers] = useState(availablePlayersData);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterPosition, setFilterPosition] = useState('All'); // Position filter for players

    //Keeps track of pick index as it iterates through draft order. Note that pick will be currentPickIndex+1
    const [currentPickIndex, setCurrentPickIndex] = useState(0);

    //load NHL Team Data into mutable state
    const [teamsData, setTeamsData] = useState(initialTeamsData);

    // State of the draft ('pre-draft', 'paused', 'in-between-picks', 'user-picking')
    const [draftState, setDraftState] = useState('pre-draft');

    //Which User Team Selected is currently active (for handinlg sessions where the user selects multiple teams)
    const [userTeam, setUserTeam] = useState(
        selectedTeams.length > 0
            ? teamsData.find((team) => team.name === selectedTeams[0]) || {}
            : {}
    );

    // Selected picks and players for trades
    const [selectedPicksForTrade, setSelectedPicksForTrade] = useState({
        yourPicks: [],
        theirPicks: [],
    });
    const [selectedPlayersForTrade, setSelectedPlayersForTrade] = useState({
        yourPlayers: [],
        theirPlayers: [],
    });

    // Selected team for trades - Kinda wierd edge case I handled. If userTeam is teamData[0] e.g., you select the team with 1st overall, don't intiialize the team to trade with as yourself
    const [selectedTeamForTrade, setSelectedTeamForTrade] = useState(teamsData[0]?.name === userTeam.name ? teamsData[1]?.name || '' : teamsData[0]?.name || '');

    // Generates the draft order based on team picks
    const [teamOrder, setTeamOrder] = useState(() =>
        initialTeamsData
            .flatMap((team) => team.picks.map((pick) => ({ teamName: team.name, pick })))
            .sort((a, b) => a.pick - b.pick)
    );

    /**
     * Handles drafting a player.
     * Updates available players, draft selections, team picks, and transitions to the next state.
     */
    const handleDraftPlayer = (player, teamName) => {
        setAvailablePlayers((prevPlayers) =>
            prevPlayers.filter((p) => p.id !== player.id)
        );

        setDraftSelections((prevSelections) => [
            ...prevSelections,
            {
                team: teamName,
                pick: teamOrder[currentPickIndex].pick,
                player: player.name,
                position: player.position,
            },
        ]);

        setTeamsData((prevTeamsData) =>
            prevTeamsData.map((team) =>
                team.name === teamName
                    ? {
                        ...team,
                        picks: team.picks.filter(
                            (pick) => pick !== teamOrder[currentPickIndex].pick
                        ),
                    }
                    : team
            )
        );

        setCurrentPickIndex((prevIndex) => prevIndex + 1);
        setDraftState('in-between-picks'); // we may not need this
    };

    /**
     * Handles trades between teams.
     */
    const handleTrade = () => {
        const { yourPicks, theirPicks } = selectedPicksForTrade;
        const { yourPlayers, theirPlayers } = selectedPlayersForTrade;

        const updatedTeams = teamsData.map((team) => {
            if (team.name === userTeam.name) {// teamOrder[currentPickIndex]?.teamName) {
                return {
                    ...team,
                    picks: team.picks
                        .filter((pick) => !yourPicks.includes(pick))
                        .concat(theirPicks)
                        .sort((a, b) => a - b),
                    players: team.players
                        .filter(
                            (player) =>
                                !yourPlayers.includes(
                                    `${player.first_name} ${player.last_name}`
                                )
                        )
                        .concat(
                            theirPlayers.map((playerName) => {
                                const [firstName, lastName] = playerName.split(' ');
                                return { first_name: firstName, last_name: lastName, position: '' };
                            })
                        ),
                };
            } else if (team.name === selectedTeamForTrade) {
                return {
                    ...team,
                    picks: team.picks
                        .filter((pick) => !theirPicks.includes(pick))
                        .concat(yourPicks)
                        .sort((a, b) => a - b),
                    players: team.players
                        .filter(
                            (player) =>
                                !theirPlayers.includes(
                                    `${player.first_name} ${player.last_name}`
                                )
                        )
                        .concat(
                            yourPlayers.map((playerName) => {
                                const [firstName, lastName] = playerName.split(' ');
                                return { first_name: firstName, last_name: lastName, position: '' };
                            })
                        ),
                };
            }
            return team;
        });

        setTeamsData(updatedTeams);
        setTeamOrder(
            updatedTeams
                .flatMap((team) =>
                    team.picks.map((pick) => ({ teamName: team.name, pick }))
                )
                .sort((a, b) => a.pick - b.pick)
        );

        // Reset selections
        setSelectedPicksForTrade({ yourPicks: [], theirPicks: [] });
        setSelectedPlayersForTrade({ yourPlayers: [], theirPlayers: [] });
    };

    /**
     * Manages draft state transitions based on the current pick and draft state.
     */
    useEffect(() => {
        if (currentPickIndex >= teamOrder.length || availablePlayers.length === 0) {
            setDraftState('draft-complete');
            return;
        }

        const currentDraftingTeam = teamOrder[currentPickIndex];

        if (draftState === 'pre-draft' || draftState === 'paused') {
            return;
        }

        if (selectedTeams.includes(currentDraftingTeam.teamName)) {
            const matchedTeam = teamsData.find((team) => team.name === currentDraftingTeam.teamName);
            if (matchedTeam) {
                setUserTeam(matchedTeam);
            }
            setDraftState('user-picking');
        } else {
            setDraftState('in-between-picks');
            const timer = setTimeout(() => {
                if (draftState === 'in-between-picks') {
                    const bestPlayer = availablePlayers[0];
                    handleDraftPlayer(bestPlayer, currentDraftingTeam.teamName);
                }
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [currentPickIndex, selectedTeams, availablePlayers, draftState, teamOrder]);

    /**
     * Filters available players based on the search query and selected position.
     */
    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        setFilteredPlayers(
            availablePlayers.filter(
                (player) =>
                    player.name &&
                    (filterPosition === 'All' || player.position === filterPosition) &&
                    player.name.toLowerCase().includes(lowerCaseQuery)
            )
        );
    }, [searchQuery, filterPosition, availablePlayers]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '40px auto',
                maxWidth: '80%',
                height: '100vh',
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    height: '100%',
                    padding: 3,
                    backgroundColor: 'background.default',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    NHL Mock Draft
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 3,
                        height: '100%',
                    }}
                >
                    {/* Draft Selections: 1/3 of the width */}
                    <Box sx={{ flex: 1 }}>
                        <DraftSelections draftSelections={draftSelections} />
                    </Box>

                    {/* Draft View: 2/3 of the width */}
                    <Box sx={{ flex: 2 }}>
                        <DraftView
                            filteredPlayers={filteredPlayers}
                            handleDraftPlayer={handleDraftPlayer}
                            teamOrder={teamOrder}
                            currentPickIndex={currentPickIndex}
                            selectedTeams={selectedTeams}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            filterPosition={filterPosition}
                            setFilterPosition={setFilterPosition}
                            teamsData={teamsData}
                            handleTrade={handleTrade}
                            draftState={draftState}
                            setDraftState={setDraftState}
                            selectedPicksForTrade={selectedPicksForTrade}
                            setSelectedPicksForTrade={setSelectedPicksForTrade}
                            selectedPlayersForTrade={selectedPlayersForTrade}
                            setSelectedPlayersForTrade={setSelectedPlayersForTrade}
                            selectedTeamForTrade={selectedTeamForTrade}
                            setSelectedTeamForTrade={setSelectedTeamForTrade}
                            userTeam={userTeam}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default DraftPage;