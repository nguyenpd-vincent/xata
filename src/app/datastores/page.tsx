"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Typography,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LeftMenuDatastore from '@/components/LeftMenu/LeftMenuDatastore';
import datastores from '../../fake_data/datastore';import React from 'react';

export default function Home() {
  const databaseRecords = datastores;

  return (
    <Grid container>
      <Grid item xs={12} md={3} alignItems="center" p={3}>
        <LeftMenuDatastore />
      </Grid>
      <Grid item xs={12} md={1}>
        <Divider orientation="vertical" flexItem />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box m="50px 20px 50px 20px">
          <Box
            minWidth="max-content"
            display="flex"
            alignItems={{ base: 'start', md: 'center' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Typography variant="h4" component="h2" p={2}>
              Databases
            </Typography>
            <Box marginLeft="auto">
              <Button startIcon={<AddIcon />}>Add database</Button>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {databaseRecords.map((item, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Link href={`/datastores/${item.name}`}>
                  <Box
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius={2}
                    p={2}
                  >
                    <Box>{item.name}</Box>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
