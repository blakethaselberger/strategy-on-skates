import React from 'react';
import { Box, Typography } from '@mui/material';
import DraftSelectionsHeader from './DraftSelectionsHeader';
import DraftSelectionList from './DraftSelectionList';

const DraftSelections = ({ draftSelections }) => {
    return (
        <Box
            sx={{
                flex: 1,
                overflowY: 'auto',
                maxHeight: '100%',
                backgroundColor: 'background.paper',
                borderRadius: 1,
                padding: 2,
                boxShadow: 1,
            }}
        >
            <DraftSelectionsHeader />
            <DraftSelectionList draftSelections={draftSelections} />
        </Box>
    );
};

export default DraftSelections;