import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import availablePlayersData from '../../../mock-data/availablePlayers.json';
import initialTeamsData from '../../../mock-data/teams.json';
import DraftSelections from './DraftSelectionView/DraftSelections';
import DraftView from './DraftView/DraftView';
import DraftPageHeader from './DraftPageHeader';

const DraftPage = () => {
    const location = useLocation();
    const selectedTeams = location.state?.selectedTeams || [];

    const [draftSelections, setDraftSelections] = useState([]);
    const [availablePlayers, setAvailablePlayers] = useState(availablePlayersData);
    const [filteredPlayers, setFilteredPlayers] = useState(availablePlayersData);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterPosition, setFilterPosition] = useState('All');
    const [currentPickIndex, setCurrentPickIndex] = useState(0);
    const [teamsData, setTeamsData] = useState(initialTeamsData);
    const [draftState, setDraftState] = useState('pre-draft');
    const [userTeam, setUserTeam] = useState(
        selectedTeams.length > 0
            ? teamsData.find((team) => team.name === selectedTeams[0]) || {}
            : {}
    );
    const [selectedPicksForTrade, setSelectedPicksForTrade] = useState({
        yourPicks: [],
        theirPicks: [],
    });
    const [selectedPlayersForTrade, setSelectedPlayersForTrade] = useState({
        yourPlayers: [],
        theirPlayers: [],
    });
    const [selectedTeamForTrade, setSelectedTeamForTrade] = useState(
        teamsData[0]?.name === userTeam.name ? teamsData[1]?.name || '' : teamsData[0]?.name || ''
    );

    const [teamOrder, setTeamOrder] = useState(() =>
        initialTeamsData
            .flatMap((team) => team.picks.map((pick) => ({ teamName: team.name, pick })))
            .sort((a, b) => a.pick - b.pick)
    );

    const [draftSpeed, setDraftSpeed] = useState(1000);

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
        setDraftState('in-between-picks');
    };

    const handleTrade = () => {
        const { yourPicks, theirPicks } = selectedPicksForTrade;
        const { yourPlayers, theirPlayers } = selectedPlayersForTrade;

        const updatedTeams = teamsData.map((team) => {
            if (team.name === userTeam.name) {
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

        setSelectedPicksForTrade({ yourPicks: [], theirPicks: [] });
        setSelectedPlayersForTrade({ yourPlayers: [], theirPlayers: [] });
    };

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
            }, draftSpeed);

            return () => clearTimeout(timer);
        }
    }, [currentPickIndex, selectedTeams, availablePlayers, draftState, teamOrder, draftSpeed]);

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
                margin: '10px auto',
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
                <DraftPageHeader draftSpeed={draftSpeed} setDraftSpeed={setDraftSpeed} />

                {/* <Typography variant="h6" gutterBottom>
                    NHL Mock Draft
                </Typography> */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 3,
                        height: 'calc(100% - 60px)',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            overflowY: 'auto',
                            maxHeight: 'calc(100% - 20px)',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            padding: 2,
                        }}
                    >
                        <DraftSelections draftSelections={draftSelections} />
                    </Box>
                    <Box
                        sx={{
                            flex: 2,
                            overflowY: 'auto',
                            maxHeight: 'calc(100% - 20px)',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1,
                            padding: 2,
                        }}
                    >
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