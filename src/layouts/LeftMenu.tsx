import React from 'react';
import {
  Box,
  Stack,
  Divider,
  Button,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material';
import { IoMdArrowRoundBack, IoIosAdd } from 'react-icons/io';
import { TbSchema } from 'react-icons/tb';
import Link from 'next/link'

const LeftMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToImportFile = () => {

    // setAnchorEl(null);
  };
  
  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ sm: 'space-between', md: 'normal' }}
      >
        <Stack spacing={4} alignItems="flex-start">
          <Link href="/">
            <Button
              variant="text"
            //   
              startIcon={<IoMdArrowRoundBack />}
              title="Back to workspace"
            >
              Back to workspace
            </Button>
          </Link>
          <Stack spacing={2} alignItems="flex-start" color="gray.500">
            <Box borderBottom="1px solid grey" >

            <Link href={'../schema'}>
              <Button  startIcon={<TbSchema />} />
              Schema
            </Link>
            <Link href={'../Schema'}>
              <Button  startIcon={<TbSchema />} />
              Playground
            </Link>
            <Link href={'../Schema'}>
              <Button  startIcon={<TbSchema />} />
              Search engine
            </Link>
            <Link href={'../Schema'}>
              <Button  startIcon={<TbSchema />} />
              Setting
            </Link>
            </Box>

            {/* <Divider /> */}
            <Box marginTop='20px'>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Add a Table
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Add an empty table</MenuItem>
                <MenuItem onClick={handleClose}><Link href='/datastores/imports' >Import a CSV file</Link></MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default LeftMenu;
