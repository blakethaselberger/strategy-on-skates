import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel } from '@mui/material';

// Mock data
// Mock data for the top 10 NHL players in scoring
const initialRows = [
    { name: "Connor McDavid", team: "Edmonton Oilers", gp: 41, goals: 35, assists: 55, points: 90 },
    { name: "Leon Draisaitl", team: "Edmonton Oilers", gp: 41, goals: 30, assists: 50, points: 80 },
    { name: "Nathan MacKinnon", team: "Colorado Avalanche", gp: 39, goals: 25, assists: 53, points: 78 },
    { name: "Auston Matthews", team: "Toronto Maple Leafs", gp: 40, goals: 34, assists: 44, points: 78 },
    { name: "Sidney Crosby", team: "Pittsburgh Penguins", gp: 38, goals: 32, assists: 45, points: 77 },
    { name: "Nikita Kucherov", team: "Tampa Bay Lightning", gp: 36, goals: 28, assists: 49, points: 77 },
    { name: "Brad Marchand", team: "Boston Bruins", gp: 34, goals: 29, assists: 47, points: 76 },
    { name: "Mitch Marner", team: "Toronto Maple Leafs", gp: 43, goals: 25, assists: 51, points: 76 },
    { name: "Artemi Panarin", team: "New York Rangers", gp: 42, goals: 24, assists: 52, points: 76 },
    { name: "Alex Ovechkin", team: "Washington Capitals", gp: 41, goals: 38, assists: 36, points: 74 }
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const NHLScores = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('points');

    const handleSort = (property) => (event) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 650, bgcolor: 'background.paper' }}>
            <Table aria-label="NHL leading scorers">
                <TableHead>
                    <TableRow>
                        <TableCell sortDirection={orderBy === 'name' ? order : false}>
                            <TableSortLabel
                                active={orderBy === 'name'}
                                direction={orderBy === 'name' ? order : 'asc'}
                                onClick={handleSort('name')}
                            >
                                Player
                            </TableSortLabel>
                        </TableCell>
                        <TableCell>
                            Team
                        </TableCell>
                        <TableCell align="right" sortDirection={orderBy === 'points' ? order : false}>
                            <TableSortLabel
                                active={orderBy === 'points'}
                                direction={orderBy === 'points' ? order : 'asc'}
                                onClick={handleSort('points')}
                            >
                                Points
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">Goals</TableCell>
                        <TableCell align="right">Assists</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stableSort(initialRows, getComparator(order, orderBy)).slice(0, 10).map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.team}</TableCell>
                            <TableCell align="right">{row.points}</TableCell>
                            <TableCell align="right">{row.goals}</TableCell>
                            <TableCell align="right">{row.assists}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default NHLScores;