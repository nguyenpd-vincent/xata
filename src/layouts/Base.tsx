'use client';
import { Box, CssBaseline, Paper, Container } from '@mui/material';
import { FC } from 'react';
import Footer from './Footer/Footer';
import React from 'react';
import Header from './Header/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="50vh"  height="100vh">
      <CssBaseline />
      <Header />
      <Container
       component="main"
       maxWidth="lg" 
        sx={{ flexGrow: 1, paddingTop:'10px' }}
        >
          {children}
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default BaseLayout;
