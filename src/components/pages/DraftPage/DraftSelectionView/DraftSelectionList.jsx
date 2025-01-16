import React from 'react';
import { List, Typography } from '@mui/material';
import RoundHeader from './RoundHeader';
import Selection from './Selection';

const DraftSelectionList = ({ draftSelections }) => {
    return (
        <List
            sx={{
                padding: 0,
                margin: 0,
            }}
        >
            {draftSelections.map((selection, index) => {
                const isRoundHeader = index % 32 === 0;
                const roundNumber = Math.floor(index / 32) + 1;

                return (
                    <React.Fragment key={index}>
                        {isRoundHeader && <RoundHeader roundNumber={roundNumber} />}
                        <Selection selection={selection} />
                    </React.Fragment>
                );
            })}
            {draftSelections.length === 0 && (
                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ textAlign: 'center', marginTop: 2 }}
                >
                    No selections made yet.
                </Typography>
            )}
        </List>
    );
};

export default DraftSelectionList;