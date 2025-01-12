import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Example mock data for draft rankings
const draftRankings = [
    { rank: 1, name: "Connor Bedard", position: "C", team: "Regina Pats" },
    { rank: 2, name: "Adam Fantilli", position: "C", team: "University of Michigan" },
    { rank: 3, name: "Matvei Michkov", position: "RW", team: "SKA St. Petersburg" },
    { rank: 4, name: "Leo Carlsson", position: "C", team: "Örebro HK" },
    { rank: 5, name: "Will Smith", position: "C", team: "USNTDP" },
    { rank: 6, name: "Dalibor Dvorský", position: "C", team: "AIK" },
    { rank: 7, name: "Zach Benson", position: "LW", team: "Winnipeg ICE" },
    { rank: 8, name: "Oliver Moore", position: "C", team: "USNTDP" },
    { rank: 9, name: "Brayden Yager", position: "C", team: "Moose Jaw Warriors" },
    { rank: 10, name: "Ryan Leonard", position: "RW", team: "USNTDP" },
];

const DraftRankings = () => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 650, margin: "0 auto", bgcolor: "background.paper" }}>
            <Table aria-label="Draft Rankings">
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Player</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Team</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {draftRankings.map((player) => (
                        <TableRow key={player.rank}>
                            <TableCell>{player.rank}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.team}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DraftRankings;