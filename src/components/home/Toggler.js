import React from 'react';
import {Box} from "@mui/material";

export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">lights on</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">lights off</span>
         }
      </Box>
   )
}