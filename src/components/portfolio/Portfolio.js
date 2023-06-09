import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'space-around'} p={'40px'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={2.2} key={index}>
                       <PortfolioBlock image={project.image} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};