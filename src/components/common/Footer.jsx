import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
            <Typography variant="body1">
                My sticky footer can be found here.
            </Typography>
        </Container>
    </Box>
);

export default Footer;