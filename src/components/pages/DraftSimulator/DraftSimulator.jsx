import React, { useState, useEffect } from 'react';
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
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import { useNavigate } from 'react-router-dom';
import teams from '../../../mock-data/teams.json';

const DraftSimulator = () => {
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [rounds, setRounds] = useState(7);
    const [randomness, setRandomness] = useState(50);
    const [draftNeeds, setDraftNeeds] = useState(50);
    const [isLotteryEnabled, setIsLotteryEnabled] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const navigate = useNavigate();

    const toggleTeamSelection = (teamId) => {
        const team = teams.find((t) => t.id === teamId); // Find the team by ID
        if (!team) return;

        const teamName = team.name; // Use the team name

        if (selectedTeams.includes(teamName)) {
            setSelectedTeams(selectedTeams.filter((name) => name !== teamName));
        } else {
            setSelectedTeams([...selectedTeams, teamName]);
        }
    };

    const handleSliderChange = (setter) => (event, newValue) => {
        setter(newValue);
    };

    const handleSelectAllToggle = (event) => {
        setSelectAll(event.target.checked);
        setSelectedTeams(event.target.checked ? teams.map((team) => team.name) : []);
    };

    const handleLotteryToggle = (event) => {
        setIsLotteryEnabled(event.target.checked);
    };

    const handleStartDraft = () => {
        if (selectedTeams.length === 0) {
            alert('Please select at least one team to start the draft.');
            return;
        }
        navigate('/draft', { state: { selectedTeams } }); // Pass selected teams to DraftPage
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '40px auto',
                maxWidth: '80%',
            }}
        >
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
                                            width: '100%',
                                            height: 70,
                                            backgroundColor: selectedTeams.includes(team.name)
                                                ? 'rgba(0, 123, 255, 0.5)'
                                                : 'transparent',
                                            border: '1px solid rgba(0, 0, 0, 0.7)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: 1,
                                            borderRadius: 1,
                                            textTransform: 'none',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            },
                                        }}
                                    >
                                        <Box sx={{ textAlign: 'left', marginLeft: 1 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontWeight: 'bold', fontSize: '0.8rem' }}
                                            >
                                                {team.pick}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ fontSize: '0.7rem', lineHeight: 1.1 }}
                                            >
                                                {team.name}
                                            </Typography>
                                        </Box>
                                        <SportsHockeyIcon
                                            style={{ fontSize: 28, marginRight: '5px' }}
                                        />
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
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
                        <FormControlLabel control={<Checkbox />} label="Turbo Mode" />
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleStartDraft}
                        >
                            Start Draft
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default DraftSimulator;