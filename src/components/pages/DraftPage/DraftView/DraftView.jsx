import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import GenericBanner from './GenericBanner';
import TradeControls from './TradeControls/TradeControls';
import TeamInfo from './TeamInfo';
import DraftTabs from './DraftTabs';
import InBetweenPicks from '../InBetweenPicks';
import DraftStateControls from '../DraftStateControls';

const DraftView = ({
    filteredPlayers,
    handleDraftPlayer,
    teamOrder,
    currentPickIndex,
    selectedTeams,
    searchQuery,
    setSearchQuery,
    filterPosition,
    setFilterPosition,
    teamsData,
    draftState,
    setDraftState,
    handleTrade,
    selectedPicksForTrade,
    setSelectedPicksForTrade,
    selectedPlayersForTrade,
    setSelectedPlayersForTrade,
    selectedTeamForTrade,
    setSelectedTeamForTrade,
    userTeam
}) => {
    const [activeTab, setActiveTab] = useState(0);

    const currentTeamName = teamOrder[currentPickIndex]?.teamName || 'Unknown Team';
    const currentTeam = teamsData?.find((team) => team.name === currentTeamName) || {};
    const userNextPick = teamOrder.findIndex(
        (pick) => selectedTeams.includes(pick.teamName) && pick.pick > currentPickIndex
    );
    const userNextPickNumber = userNextPick !== -1 ? userNextPick + 1 : 'N/A';
    const teamsBeforeUser = userNextPick - currentPickIndex;

    const teamLogo = '/path/to/logo.png';

    useEffect(() => {
        if (draftState === 'in-between-picks' && teamsBeforeUser === 0) {
            setDraftState('user-picking');
        }
    }, [draftState, teamsBeforeUser, setDraftState]);

    return (
        <Box
            sx={{
                flex: 1,
                overflowY: 'auto',
                backgroundColor: 'background.paper',
                borderRadius: 1,
                padding: 2,
                boxShadow: 1,
            }}
        >
            {draftState === 'pre-draft' && (
                <Box>
                    <GenericBanner displayText={{ left: 'Make Trades Before the Draft Starts', right: '' }} />
                    <TradeControls
                        teamsData={teamsData}
                        currentTeam={currentTeam}
                        handleTrade={handleTrade}
                        selectedPicksForTrade={selectedPicksForTrade}
                        setSelectedPicksForTrade={setSelectedPicksForTrade}
                        selectedPlayersForTrade={selectedPlayersForTrade}
                        setSelectedPlayersForTrade={setSelectedPlayersForTrade}
                        selectedTeamForTrade={selectedTeamForTrade}
                        setSelectedTeamForTrade={setSelectedTeamForTrade}
                        userTeam={userTeam}
                    />
                </Box>
            )}
            {draftState === 'paused' && (
                <Box>
                    <GenericBanner displayText={{ left: `Your next pick: ${userNextPickNumber}`, right: '' }} />
                    <TradeControls
                        teamsData={teamsData}
                        currentTeam={currentTeam}
                        handleTrade={handleTrade}
                        selectedPicksForTrade={selectedPicksForTrade}
                        setSelectedPicksForTrade={setSelectedPicksForTrade}
                        selectedPlayersForTrade={selectedPlayersForTrade}
                        setSelectedPlayersForTrade={setSelectedPlayersForTrade}
                        selectedTeamForTrade={selectedTeamForTrade}
                        setSelectedTeamForTrade={setSelectedTeamForTrade}
                        userTeam={userTeam}
                    />
                </Box>
            )}
            {draftState === 'in-between-picks' && teamsBeforeUser > 0 && (
                <Box>
                    <GenericBanner displayText={{ left: `Your next pick: ${userNextPickNumber}`, right: '' }} />
                    <TeamInfo
                        teamLogo={teamLogo}
                        currentTeamName={currentTeamName}
                        draftNeeds={currentTeam.draftNeeds || []}
                        remainingPicks={currentTeam.picks || []}
                    />
                    <InBetweenPicks teamsBeforeUser={teamsBeforeUser} />
                </Box>
            )}
            {draftState === 'user-picking' && (
                <Box>
                    <GenericBanner
                        displayText={{
                            left: "You're on the clock!",
                            right: `Round ${Math.floor(currentPickIndex / 32) + 1}, Pick ${(currentPickIndex % 32) + 1}`,
                        }}
                    />
                    <TeamInfo
                        teamLogo={teamLogo}
                        currentTeamName={currentTeamName}
                        draftNeeds={currentTeam.draftNeeds || []}
                        remainingPicks={currentTeam.picks || []}
                    />
                    <DraftTabs
                        activeTab={activeTab}
                        handleTabChange={(e, newValue) => setActiveTab(newValue)}
                        filteredPlayers={filteredPlayers}
                        handleDraftPlayer={handleDraftPlayer}
                        teamOrder={teamOrder}
                        currentPickIndex={currentPickIndex}
                        selectedTeams={selectedTeams}
                        filterPosition={filterPosition}
                        setFilterPosition={setFilterPosition}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </Box>
            )}

            <DraftStateControls
                draftState={draftState}
                startDraft={() => setDraftState('in-between-picks')}
                resumeDraft={() => setDraftState('in-between-picks')}
                pauseDraft={() => setDraftState('paused')}
                handleTrade={handleTrade}
            />
        </Box>
    );
};

export default DraftView;