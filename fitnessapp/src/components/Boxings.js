import React from 'react'
import {Box, Stack, Typography, Button, Link} from '@mui/material'
import boxing from '../assets/images/boxing.png';

const Boxings=() =>{
    return(
        <Box sx={{
            mt: {lg:'100px', xs: '70px'},
            ml: {sm:'50px'},
            display: "flex",

        }}
        
        position="relative" p="20px"
        >
             <img src={boxing} alt="boxing"
            className="boxing"
            />
            <Typography
            fontSize='22px'
            LineHeight='35px'
            mb={4}
            ml={20}
            fontWeight= {800}
            >
                        <Typography 
                                color="#FF2625"
                                fontWeight="600"
                                fontSize="26px"
                                >
                                Check out our sport playlists:

                    </Typography>
                    <br/>
                    <br/>
                Boxing: <br/>
                <a href="https://www.youtube.com/watch?v=8SNyYw-OxFQ&list=PL2aENynvccQX4uVG8hqVBfpYzxpKd5F8a&index=1" target="_blank"> -  Boxing lessons with coach Marshal</a> <br/>
                <br/>
                <br/>
                Soccer: <br/>
                <a href="https://www.youtube.com/watch?v=8SNyYw-OxFQ&list=PL2aENynvccQX4uVG8hqVBfpYzxpKd5F8a&index=1"  target="_blank"> - Soccer lessons with coach Nguyen</a> <br/>
                <br/>
                <br/>
                Basketball: <br/>
                <a href="https://www.youtube.com/watch?v=8SNyYw-OxFQ&list=PL2aENynvccQX4uVG8hqVBfpYzxpKd5F8a&index=1"  target="_blank"> - Basketball lessons with coach Chang</a> <br/>
            </Typography>

          

            <Typography
            fontWeight={600}
            color="#FFE4C4"
            sc={{
                opacity: 0.1,
                display: {lg: 'block', xs: 'none'}
            }}
            fontSize="200px"
            >
                  <br></br>
            </Typography>

           
            
        </Box>
    )
}

export default Boxings;