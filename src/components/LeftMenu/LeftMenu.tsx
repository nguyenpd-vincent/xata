import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Divider,
  Button,
  Menu,
  MenuItem,
  MenuList,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IoMdArrowRoundBack, IoIosAdd } from "react-icons/io";
import { TbSchema } from "react-icons/tb";
import Link from "next/link";
import datastores from "@/fake_data/datastore";
import { SetStateAction } from "react";

const LeftMenu = () => {
  const [nameDatastores, setNameDatastore] = useState([]);
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

  useEffect(() => {
    const names = datastores.map((datastore) => datastore.name);
    setNameDatastore(names as SetStateAction<never[]>);
  }, [datastores]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          direction: { xs: "column", md: "row" },
          justifyContent: { sm: "space-between", md: "normal" },
        }}
      >
        <Stack
          spacing={4}
          alignItems="flex-start"
          sx={{
            width: "100%",
          }}
        >
          <Link
            href="/"
            style={{
              width: "100%",
            }}
          >
            <Button
              variant="text"
              sx={{
                width: "100%",
                justifyContent: "start"
              }}
              startIcon={<IoMdArrowRoundBack />}
              title="Back to workspace"
            >
              Back to workspace
            </Button>
          </Link>
          <Stack spacing={2} alignItems="flex-start" sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: "1px solid grey",
                paddingBottom: "20px",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <Link
                href={"../schema"}
                style={{ display: "block", width: "100%" }}
              >
                <Button
                  startIcon={<TbSchema />}
                  sx={{ width: "100%", justifyContent: "start" }}
                >
                  Schema
                </Button>
              </Link>
              <Link
                href={"../Schema"}
                style={{ display: "block", width: "100%" }}
              >
                <Button
                  startIcon={<TbSchema />}
                  sx={{ width: "100%", justifyContent: "start" }}
                >
                  Playground
                </Button>
              </Link>
            </Box>

            {nameDatastores.map((nameDatastore) => (
              <>
                <ListItemButton
                  key={nameDatastore}
                  sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                >
                  {/* <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon> */}
                  <ListItemText
                    primary={nameDatastore}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </ListItemButton>
              </>
            ))}

            <Box sx={{ paddingTop: "20px" }}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
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
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Add an empty table</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/datastores/imports">Import a CSV file</Link>
                </MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default LeftMenu;
