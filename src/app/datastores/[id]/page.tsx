"use client"
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Menu,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  MenuItem,
  TableFooter,
} from "@mui/material";
import { FaCalendar, FaFingerprint } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosAdd, IoMdArrowDropdown } from "react-icons/io";
import { LiaSortAlphaDownAltSolid } from "react-icons/lia";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import datastores from "@/fake_data/datastore";
import { Datastore as DatastoreType } from "@/types/datastore/datastore.type";

export default function Datastore() {
  const records = datastores[0].records; 
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<DatastoreType.Record[]>([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newSelectedItems = selectAll ? [] : [...records];
    setSelectedItems(newSelectedItems);
  };

  const handleSelectItem = (selectedItem: DatastoreType.Record) => {
    const newSelectedItems = selectedItems.includes(selectedItem)
      ? selectedItems.filter((item) => item !== selectedItem)
      : [...selectedItems, selectedItem];
    setSelectedItems(newSelectedItems);

    const allSelected = records.every((record) => newSelectedItems.includes(record));
    setSelectAll(allSelected);
  };


  return (
    <>
      <Box display="flex" width="100%">
        <Box sx={{ flex: 2, borderRight: "1px solid grey" }}>
          <LeftMenu />
        </Box>
        <Box sx={{
          flex: 10,
          px: 5
        }}>
          <Box>
            <Typography variant="h6" fontWeight="bold" display="flex" alignItems="center" marginBottom={3}>
              Table name
            </Typography>
            <Box display="flex" gap={5}>
              <FormControlLabel
                control={<Checkbox checked={selectAll} onChange={handleSelectAll} />}
                label="Select All"
              />
              <Button startIcon={<CgMenuGridR />}>Actions</Button>
            </Box>
          </Box>
          <TableContainer component={Paper}>
      <Table size="small" sx={{ borderCollapse: 'separate', borderSpacing: '0 15px' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox checked={selectAll} onChange={handleSelectAll} />
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <FaFingerprint />
                Id
                <Menu open={false}>
                  <Button
                    
                    aria-label="Options"
                    onClick={() => {}}
                    size="small"
                    startIcon={<IoMdArrowDropdown />}
                  />
                  <Menu
                    anchorEl={null}
                    open={false}
                    onClose={() => {}}
                  >
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Ascending
                    </MenuItem>
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Descending
                    </MenuItem>
                  </Menu>
                </Menu>
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <FaCalendar />
                new1
                <Menu open={false}>
                  <Button
                    // 
                    aria-label="Options"
                    onClick={() => {}}
                    size="small"
                    startIcon={<IoMdArrowDropdown />}
                  />
                  <Menu
                    anchorEl={null}
                    open={false}
                    onClose={() => {}}
                  >
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Ascending
                    </MenuItem>
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Descending
                    </MenuItem>
                  </Menu>
                </Menu>
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <FaCalendar />
                xata.created_at
                <Menu open={false}>
                  <Button
                    // 
                    aria-label="Options"
                    onClick={() => {}}
                    size="small"
                    startIcon={<IoMdArrowDropdown />}
                  />
                  <Menu
                    anchorEl={null}
                    open={false}
                    onClose={() => {}}
                  >
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Ascending
                    </MenuItem>
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Descending
                    </MenuItem>
                  </Menu>
                </Menu>
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <FaCalendar />
                xata.updated_at
                <Menu open={false}>
                  <Button
                    // 
                    aria-label="Options"
                    onClick={() => {}}
                    size="small"
                    startIcon={<IoMdArrowDropdown />}
                  />
                  <Menu
                    anchorEl={null}
                    open={false}
                    onClose={() => {}}
                  >
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Ascending
                    </MenuItem>
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Descending
                    </MenuItem>
                  </Menu>
                </Menu>
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <FaCalendar />
                xata.version
                <Menu open={false}>
                  <Button
                    
                    aria-label="Options"
                    onClick={() => {}}
                    size="small"
                    startIcon={<IoMdArrowDropdown />}
                  />
                  <Menu
                    anchorEl={null}
                    open={false}
                    onClose={() => {}}
                  >
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Ascending
                    </MenuItem>
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Descending
                    </MenuItem>
                  </Menu>
                </Menu>
              </Box>
            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <Menu open={false}>
                  <Button
                    startIcon={<IoIosAdd />}
                    onClick={() => {}}
                    size="small"
                  />
                  <Menu
                    anchorEl={null}
                    open={false}
                    onClose={() => {}}
                  >
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Ascending
                    </MenuItem>
                    <MenuItem>
                      <LiaSortAlphaDownAltSolid /> Sort Descending
                    </MenuItem>
                  </Menu>
                </Menu>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>
                <Checkbox
                  checked={selectedItems.includes(record)}
                  onChange={() => handleSelectItem(record)}
                />
              </TableCell>
              <TableCell>{record.id}</TableCell>
              <TableCell>{record.new1}</TableCell>
              <TableCell>{record.xata.createdAt}</TableCell>
              <TableCell>{record.xata.updatedAt}</TableCell>
              <TableCell>{record.xata.version}</TableCell>
              <TableCell>
                {/* <Button
                  ref={btnRef}
                  color="teal"
                  onClick={onOpen}
                  startIcon={<IoEdit />}
                /> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>
              <Button  startIcon={<IoIosAdd />} />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
        </Box>
      </Box>
      {/* <ModelRecord isOpen={isOpen} onOpen={onOpen} onClose={onClose} mode="create" /> */}
    </>
  );
}
function dispatch(arg0: { payload: undefined; type: "datastore/getDatastores"; }) {
    throw new Error("Function not implemented.");
}

function selectDatastoreRecords(state: unknown): unknown {
    throw new Error("Function not implemented.");
}

