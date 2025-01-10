import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Example data
const rows = [
    { rank: 1, team: 'Vegas Golden Knights', gp: 41, w: 28, l: 10, ot: 3, pts: 59, p: '.720' },
    { rank: 2, team: 'Washington Capitals', gp: 41, w: 27, l: 10, ot: 4, pts: 58, p: '.707' },
    // Add more teams...
];

const NHLStandings = () => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 650, bgcolor: 'background.paper' }}>
            <Table aria-label="NHL standings">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Team</TableCell>
                        <TableCell align="right">GP</TableCell>
                        <TableCell align="right">W</TableCell>
                        <TableCell align="right">L</TableCell>
                        <TableCell align="right">OT</TableCell>
                        <TableCell align="right">PTS</TableCell>
                        <TableCell align="right">P%</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.rank} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.rank}</TableCell>
                            <TableCell>{row.team}</TableCell>
                            <TableCell align="right">{row.gp}</TableCell>
                            <TableCell align="right">{row.w}</TableCell>
                            <TableCell align="right">{row.l}</TableCell>
                            <TableCell align="right">{row.ot}</TableCell>
                            <TableCell align="right">{row.pts}</TableCell>
                            <TableCell align="right">{row.p}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default NHLStandings;