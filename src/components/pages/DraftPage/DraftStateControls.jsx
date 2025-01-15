import React from 'react';
import { Box } from '@mui/material';
import MainButton from '../../common/MainButton'; // Import MainButton
import SecondaryButton from '../../common/SecondaryButton'; // Import SecondaryButton

const DraftStateControls = ({
    draftState,
    startDraft,
    resumeDraft,
    pauseDraft,
    handleTrade,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                marginTop: 3,
            }}
        >
            {draftState === 'pre-draft' && (
                <>
                    <SecondaryButton onClick={handleTrade}>
                        Offer Trade
                    </SecondaryButton>
                    <MainButton onClick={startDraft}>Start Draft</MainButton>
                </>
            )}

            {draftState === 'paused' && (
                <>
                    <SecondaryButton onClick={handleTrade}>
                        Offer Trade
                    </SecondaryButton>
                    <MainButton onClick={resumeDraft}>Resume Draft</MainButton>
                </>
            )}

            {draftState === 'in-between-picks' && (
                <>
                    <MainButton onClick={pauseDraft}>
                        Pause & Offer Trade
                    </MainButton>
                </>
            )}
        </Box>
    );
};

export default DraftStateControls;