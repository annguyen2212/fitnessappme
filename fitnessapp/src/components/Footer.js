import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
    return(
        <Box mt="80px" bgcolor="ff3f4">
            <Stack gap="40px" alignItems= 'center' px="40px" pt="24px">
                <img src={Logo} alt="logo" width="200px" height="40px"/>
                <Typography variant="h5" pb="40px" mt="40px">
                    Author: An Nguyen
                    <br></br>
                    Phone number: 918-978-3872
                    <br></br>
                    Email: an.nguyen2212002@gmail.com
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer