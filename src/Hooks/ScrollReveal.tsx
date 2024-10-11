import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';
import './ScrollReveal.css'; 

const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.5, 
        triggerOnce: true, 
        
    });

    return (
        <Box ref={ref} className={`reveal ${inView ? 'visible' : ''}`}>
            {children}
        </Box>
    );
};

export default ScrollReveal;
