import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Example data
const rows = [
    { rank: 1, team: "Vegas Golden Knights", gp: 41, w: 28, l: 10, ot: 3, pts: 59, pPct: ".720" },
    { rank: 2, team: "Washington Capitals", gp: 41, w: 27, l: 10, ot: 4, pts: 58, pPct: ".707" },
    { rank: 3, team: "Winnipeg Jets", gp: 42, w: 28, l: 12, ot: 2, pts: 58, pPct: ".690" },
    { rank: 4, team: "Minnesota Wild", gp: 42, w: 26, l: 12, ot: 4, pts: 56, pPct: ".667" },
    { rank: 5, team: "Toronto Maple Leafs", gp: 43, w: 27, l: 14, ot: 2, pts: 56, pPct: ".651" },
    { rank: 6, team: "New Jersey Devils", gp: 44, w: 25, l: 15, ot: 4, pts: 54, pPct: ".614" },
    { rank: 7, team: "Dallas Stars", gp: 40, w: 26, l: 13, ot: 1, pts: 53, pPct: ".663" },
    { rank: 8, team: "Edmonton Oilers", gp: 41, w: 25, l: 13, ot: 3, pts: 53, pPct: ".646" },
    { rank: 9, team: "Colorado Avalanche", gp: 43, w: 26, l: 16, ot: 1, pts: 53, pPct: ".616" },
    { rank: 10, team: "Carolina Hurricanes", gp: 42, w: 25, l: 15, ot: 2, pts: 52, pPct: ".619" }
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