import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    Slider,
    Paper,
    Checkbox,
    FormControlLabel,
    Switch,
} from '@mui/material';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey'; // Placeholder icon

const teams = [
    { name: 'Anaheim Ducks', id: 1, pick: 1 },
    { name: 'Arizona Coyotes', id: 2, pick: 2 },
    { name: 'Boston Bruins', id: 3, pick: 3 },
    { name: 'Buffalo Sabres', id: 4, pick: 4 },
    { name: 'Calgary Flames', id: 5, pick: 5 },
    { name: 'Carolina Hurricanes', id: 6, pick: 6 },
    { name: 'Chicago Blackhawks', id: 7, pick: 7 },
    { name: 'Colorado Avalanche', id: 8, pick: 8 },
    { name: 'Columbus Blue Jackets', id: 9, pick: 9 },
    { name: 'Dallas Stars', id: 10, pick: 10 },
    { name: 'Detroit Red Wings', id: 11, pick: 11 },
    { name: 'Edmonton Oilers', id: 12, pick: 12 },
    { name: 'Florida Panthers', id: 13, pick: 13 },
    { name: 'Los Angeles Kings', id: 14, pick: 14 },
    { name: 'Minnesota Wild', id: 15, pick: 15 },
    { name: 'Montreal Canadiens', id: 16, pick: 16 },
    { name: 'Nashville Predators', id: 17, pick: 17 },
    { name: 'New Jersey Devils', id: 18, pick: 18 },
    { name: 'New York Islanders', id: 19, pick: 19 },
    { name: 'New York Rangers', id: 20, pick: 20 },
    { name: 'Ottawa Senators', id: 21, pick: 21 },
    { name: 'Philadelphia Flyers', id: 22, pick: 22 },
    { name: 'Pittsburgh Penguins', id: 23, pick: 23 },
    { name: 'San Jose Sharks', id: 24, pick: 24 },
    { name: 'Seattle Kraken', id: 25, pick: 25 },
    { name: 'St. Louis Blues', id: 26, pick: 26 },
    { name: 'Tampa Bay Lightning', id: 27, pick: 27 },
    { name: 'Toronto Maple Leafs', id: 28, pick: 28 },
    { name: 'Vancouver Canucks', id: 29, pick: 29 },
    { name: 'Vegas Golden Knights', id: 30, pick: 30 },
    { name: 'Washington Capitals', id: 31, pick: 31 },
    { name: 'Winnipeg Jets', id: 32, pick: 32 },
];

const DraftSimulator = () => {
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [rounds, setRounds] = useState(7);
    const [randomness, setRandomness] = useState(50);
    const [draftNeeds, setDraftNeeds] = useState(50);
    const [isLotteryEnabled, setIsLotteryEnabled] = useState(false); // Toggle for Draft Lottery
    const [selectAll, setSelectAll] = useState(false); // Toggle for Select All Teams

    const toggleTeamSelection = (teamId) => {
        if (selectedTeams.includes(teamId)) {
            setSelectedTeams(selectedTeams.filter((id) => id !== teamId));
        } else {
            setSelectedTeams([...selectedTeams, teamId]);
        }
    };

    const handleSliderChange = (setter) => (event, newValue) => {
        setter(newValue);
    };

    const handleSelectAllToggle = (event) => {
        setSelectAll(event.target.checked);
        setSelectedTeams(event.target.checked ? teams.map((team) => team.id) : []);
    };

    const handleLotteryToggle = (event) => {
        setIsLotteryEnabled(event.target.checked);
        alert(`Draft Lottery is now ${event.target.checked ? 'enabled' : 'disabled'}.`);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '40px auto', // Outer margin for spacing
                maxWidth: '80%', // Restrict the width of the layout
            }}
        >
            {/* Combined Grid and Settings in One Paper */}
            <Paper elevation={3} sx={{ width: '100%', padding: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Draft Simulator
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 3,
                    }}
                >
                    {/* Left Side: Teams Grid */}
                    <Box sx={{ flex: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: 2,
                            }}
                        >
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    Select Your Team(s)
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Draft order is locked.
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Teams are listed by their first pick.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    alignItems: 'flex-end',
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={isLotteryEnabled}
                                            onChange={handleLotteryToggle}
                                            color="primary"
                                        />
                                    }
                                    label="Sim Draft Lottery"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={selectAll}
                                            onChange={handleSelectAllToggle}
                                            color="primary"
                                        />
                                    }
                                    label="Select All Teams"
                                />
                            </Box>
                        </Box>
                        <Grid container spacing={2}>
                            {teams.map((team) => (
                                <Grid item xs={3} key={team.id}>
                                    <Button
                                        onClick={() => toggleTeamSelection(team.id)}
                                        sx={{
                                            width: '100%', // Ensure buttons fill their grid cell
                                            height: 70, // Shallow height for buttons
                                            backgroundColor: selectedTeams.includes(team.id)
                                                ? 'rgba(0, 123, 255, 0.5)'
                                                : 'transparent',
                                            border: '1px solid rgba(0, 0, 0, 0.7)', // Updated to a darker outline
                                            display: 'flex',
                                            justifyContent: 'space-between', // Align content horizontally
                                            alignItems: 'center', // Align content vertically
                                            padding: 1,
                                            borderRadius: 1,
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            },
                                        }}
                                    >
                                        {/* Left Side: Pick Number and Team Name */}
                                        <Box sx={{ textAlign: 'left', marginLeft: 1 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    fontSize: '0.8rem',
                                                }}
                                            >
                                                {team.pick}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: '0.7rem',
                                                    lineHeight: 1.1,
                                                }}
                                            >
                                                {team.name}
                                            </Typography>
                                        </Box>
                                        {/* Right Side: Placeholder Icon */}
                                        <SportsHockeyIcon
                                            style={{
                                                fontSize: 28, // Slightly larger icon
                                                marginRight: '5px',
                                            }}
                                        />
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Right Side: Draft Settings */}
                    <Box sx={{ flex: 1, marginLeft: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Draft Simulator Settings
                        </Typography>
                        <Box sx={{ marginBottom: 3 }}>
                            <Typography>Rounds</Typography>
                            <Slider
                                value={rounds}
                                onChange={handleSliderChange(setRounds)}
                                step={1}
                                marks
                                min={1}
                                max={7}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                        <Box sx={{ marginBottom: 3 }}>
                            <Typography>Randomness</Typography>
                            <Slider
                                value={randomness}
                                onChange={handleSliderChange(setRandomness)}
                                step={1}
                                min={0}
                                max={100}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                        <Box sx={{ marginBottom: 3 }}>
                            <Typography>Draft for Needs</Typography>
                            <Slider
                                value={draftNeeds}
                                onChange={handleSliderChange(setDraftNeeds)}
                                step={1}
                                min={0}
                                max={100}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Turbo Mode"
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Start Draft
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default DraftSimulator;