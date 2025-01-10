import React, { useState } from 'react';
import { ClickAwayListener, InputAdornment, IconButton, OutlinedInput, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const handleToggleSearch = () => {
        setSearchOpen((prev) => !prev);
    };

    const handleCloseSearch = () => {
        setSearchOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleCloseSearch}>
            <FormControl sx={{ width: searchOpen ? '100%' : 'auto' }}>
                {searchOpen ? (
                    <OutlinedInput
                        size="small"
                        placeholder="Search…"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        autoFocus
                    />
                ) : (
                    <IconButton
                        onClick={handleToggleSearch}
                        color="inherit"
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light background for the icon
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Darker on hover
                            },
                            borderRadius: '8px', // Increasing borderRadius to soften the edges more
                            border: '1px solid rgba(255, 255, 255, 0.3)', // Adding an outline
                            display: { xs: 'flex', md: 'none' } // Only show this style on mobile
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                )}
            </FormControl>
        </ClickAwayListener>
    );
};

export default Search;