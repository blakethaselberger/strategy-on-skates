import React, { useState } from 'react';
import { Box } from '@mui/material';
import GenericBanner from './GenericBanner';
import TradeControls from './TradeControls';
import TradeActions from './TradeActions';

const TradePage = ({ teamsData }) => {
    const [yourTeam, setYourTeam] = useState(null);
    const [tradePartner, setTradePartner] = useState(null);
    const [yourTeamPicks, setYourTeamPicks] = useState([]);
    const [partnerTeamPicks, setPartnerTeamPicks] = useState([]);
    const [yourTeamPlayers, setYourTeamPlayers] = useState([]);
    const [partnerTeamPlayers, setPartnerTeamPlayers] = useState([]);
    const [tradeDetails, setTradeDetails] = useState({
        yourTeam: [],
        partnerTeam: [],
    });

    return (
        <Box sx={{ padding: 2 }}>
            {/* Banner */}
            <GenericBanner
                displayText={{
                    left: 'Offer Trades Before the Draft Starts',
                    right: '', // Leave blank as per design
                }}
            />

            {/* Trade Controls */}
            <TradeControls
                teamsData={teamsData}
                yourTeam={yourTeam}
                setYourTeam={setYourTeam}
                tradePartner={tradePartner}
                setTradePartner={setTradePartner}
                yourTeamPicks={yourTeamPicks}
                setYourTeamPicks={setYourTeamPicks}
                partnerTeamPicks={partnerTeamPicks}
                setPartnerTeamPicks={setPartnerTeamPicks}
                yourTeamPlayers={yourTeamPlayers}
                setYourTeamPlayers={setYourTeamPlayers}
                partnerTeamPlayers={partnerTeamPlayers}
                setPartnerTeamPlayers={setPartnerTeamPlayers}
            />

            {/* Trade Actions */}
            <TradeActions tradeDetails={tradeDetails} setTradeDetails={setTradeDetails} />
        </Box>
    );
};

export default TradePage;