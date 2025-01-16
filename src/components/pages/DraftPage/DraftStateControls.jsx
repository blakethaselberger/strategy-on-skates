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
                flexDirection: draftState === 'in-between-picks' ? 'column' : 'row',
                justifyContent: 'center', // Center-align the buttons
                alignItems: 'center',
                gap: 3, // Increase gap between buttons
                marginTop: 4,
            }}
        >
            {draftState === 'pre-draft' && (
                <>
                    <SecondaryButton
                        onClick={handleTrade}
                        sx={{
                            width: '300px', // Make buttons wider
                            textAlign: 'center', // Center-align text
                        }}
                    >
                        Offer Trade
                    </SecondaryButton>
                    <MainButton
                        onClick={startDraft}
                        sx={{
                            width: '300px',
                            textAlign: 'center',
                        }}
                    >
                        Start Draft
                    </MainButton>
                </>
            )}

            {draftState === 'paused' && (
                <>
                    <SecondaryButton
                        onClick={handleTrade}
                        sx={{
                            width: '300px',
                            textAlign: 'center',
                        }}
                    >
                        Offer Trade
                    </SecondaryButton>
                    <MainButton
                        onClick={resumeDraft}
                        sx={{
                            width: '300px',
                            textAlign: 'center',
                        }}
                    >
                        Resume Draft
                    </MainButton>
                </>
            )}

            {draftState === 'in-between-picks' && (
                <MainButton
                    onClick={pauseDraft}
                    sx={{
                        width: '400px', // Make the single button wider
                        textAlign: 'center',
                        padding: '16px', // Increase padding for emphasis
                    }}
                >
                    Pause & Offer Trade
                </MainButton>
            )}
        </Box>
    );
};

export default DraftStateControls;