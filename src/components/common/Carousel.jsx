import React, { useState } from 'react';
import { Box, IconButton, Card, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery('(max-width: 600px)'); // Media query for mobile screens
    const itemsPerPage = isMobile ? 1 : 3; // Show 1 card on mobile, 3 on desktop

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < items.length - itemsPerPage) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                padding: '20px 0',
                gap: 2, // Spacing between cards
            }}
        >
            {/* Left Arrow */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: '-30px', // Position outside of the cards
                    zIndex: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                    color: 'white',
                    opacity: currentIndex === 0 ? 0.5 : 1,
                    cursor: currentIndex === 0 ? 'default' : 'pointer',
                    height: '50px',
                    width: '50px',
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>

            {/* Carousel Items */}
            <Box
                sx={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                    width: `${(items.length / itemsPerPage) * 100}%`,
                }}
            >
                {items.map((_, index) => (
                    <Card
                        key={index}
                        sx={{
                            flex: `0 0 calc(100% / ${itemsPerPage})`, // Dynamically adjust card size
                            margin: '0 10px', // Add spacing between cards
                            height: '200px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Placeholder color
                            borderRadius: '10px',
                            boxShadow: 2,
                        }}
                    />
                ))}
            </Box>

            {/* Right Arrow */}
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: '-30px', // Position outside of the cards
                    zIndex: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                    color: 'white',
                    opacity: currentIndex >= items.length - itemsPerPage ? 0.5 : 1,
                    cursor: currentIndex >= items.length - itemsPerPage ? 'default' : 'pointer',
                    height: '50px',
                    width: '50px',
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
};

export default Carousel;