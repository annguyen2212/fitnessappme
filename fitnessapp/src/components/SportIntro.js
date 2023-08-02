import React from 'react';
import {Stack, Typography} from '@mui/material';

const SportIntro = () => {
    return(
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
            fontWeight={700}
            sx={{
                fontSize: {
                    lg:'44px',
                    xs:'30px'
                }
            }}
            mb='50px'
            textAlign='center'
            >
                If you're into sports, <br/> check out the training videos below <br/> from our local trainers.
            </Typography>
        </Stack>
    )
}

export default SportIntro;
