import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, LinearProgress, Typography } from '@mui/material';

const TradeActions = ({ tradeDetails, setTradeDetails }) => {
    return (
        <Box sx={{ marginTop: 2 }}>
            {/* Progress Bar */}
            <LinearProgress variant="determinate" value={tradeDetails.percentage || 0} sx={{ marginBottom: 2 }} />
            <Typography variant="body2" align="center">
                % Trade Acceptance (once both teams add picks)
            </Typography>

            {/* Force Trade Option */}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={tradeDetails.forceTrade || false}
                        onChange={(e) =>
                            setTradeDetails((prev) => ({
                                ...prev,
                                forceTrade: e.target.checked,
                            }))
                        }
                    />
                }
                label="Force this trade"
            />

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
                <Button variant="contained" color="primary">
                    Offer Trade
                </Button>
                <Button variant="contained" color="secondary">
                    Start Draft
                </Button>
            </Box>
        </Box>
    );
};

export default TradeActions;