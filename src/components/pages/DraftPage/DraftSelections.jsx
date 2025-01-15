import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const DraftSelections = ({ draftSelections }) => {
    return (
        <Box
            sx={{
                flex: 1,
                overflowY: 'auto',
                maxHeight: '100%', // Adjusted to take up full height dynamically
                backgroundColor: 'background.paper', // Match TradeControls
                borderRadius: 1,
                padding: 2,
                boxShadow: 1,
            }}
        >
            <Typography variant="h6" gutterBottom>
                Draft Selections
            </Typography>
            <List>
                {draftSelections.map((selection, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText
                                primary={`Pick ${selection.pick}: ${selection.player}`}
                                secondary={`${selection.team} - ${selection.position}`}
                            />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
                {draftSelections.length === 0 && (
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ textAlign: 'center' }}
                    >
                        No selections made yet.
                    </Typography>
                )}
            </List>
        </Box>
    );
};

export default DraftSelections;