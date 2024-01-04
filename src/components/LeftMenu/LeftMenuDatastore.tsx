// "use client";
import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { IoIosAdd, IoMdArrowRoundBack } from "react-icons/io";
import { PiDotsThreeOutlineDuotone } from "react-icons/pi";
import { VscDatabase } from "react-icons/vsc";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiWallet } from "react-icons/ci";

const LeftMenuHome = () => {
  return (
    <Stack spacing={4} alignItems="flex-start">
      <Button
        // fontSize="md"
        // fontWeight="bold"
        // display="flex"
        // alignItems="center"
        // gap={1}
      >
        <Box
        //   maxWidth="200px"
        //   overflow="hidden"
        //   whiteSpace="nowrap"
        //   textOverflow="ellipsis"
        //   wordBreak="break-word"
        >
          Nguyenpd-lts workspace
        </Box>
        <PiDotsThreeOutlineDuotone />
      </Button>
      <Stack spacing={2} alignItems="flex-start" color="gray.500">
        <Box>
          <Button>
            <Box p="inherit" margin="auto">
              <VscDatabase />
            </Box>
            <Typography>Databases</Typography>
          </Button>
        </Box>
        <Box>
          <Button>
            <Box p="inherit" margin="auto">
              <MdOutlinePeopleAlt />
            </Box>
            <Typography>People</Typography>
          </Button>
        </Box>
        <Box>
          <Button>
            <Box p="inherit" margin="auto">
              <IoMdSettings />
            </Box>
            <Typography>Settings</Typography>
          </Button>
        </Box>
        <Box>
          <Button>
            <Box p="inherit" margin="auto">
              <CiWallet />
            </Box>
            <Typography>Billing</Typography>
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default LeftMenuHome;
