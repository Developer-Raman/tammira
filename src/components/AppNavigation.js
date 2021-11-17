import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, useHistory } from "react-router-dom"
import { Typography } from "@mui/material";

import Index from '../pages/Index';

const AppNavigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<Typography variant="h4" component="h1" gutterBottom align="center">Page not found</Typography>} />
        </Routes>
    )
}

export default AppNavigation