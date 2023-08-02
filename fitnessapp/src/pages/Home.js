import React, {useState} from 'react';
import {Box} from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import SportIntro from '../components/SportIntro';
import Boxings from '../components/Boxings';


const Home = () =>{
    const [exercises, setExercises] =useState([]);
    const [bodyPart, setBodyPart] = useState('all')

    return(
        <Box>
            <HeroBanner />
            <SearchExercises 
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart ={setBodyPart}
                />
            <Exercises
               setExercises={setExercises}
               bodyPart={bodyPart}
               exercises ={exercises}
            />
             <SportIntro/>

            <Boxings />

        </Box>
    )
}

export default Home