"use client"
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { FaCloudUploadAlt } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import Link from "next/link";

interface CsvItem {
  [key: string]: string;
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const stepsImport = ['Select a file', 'Confirm details', 'Import'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [nameFile, setNameFile] = React.useState('')
  const [comfirmCsv, setComfirmCsv] = React.useState(false)
  const [arrayData, setArray] = useState<CsvItem[]>([]);
  const fileReader = new FileReader();

  const csvFileToArray = (text: string) => {
    const csvHeader = text.slice(0, text.indexOf("\n")).split(",");
    const csvRows = text.slice(text.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((row) => {
      const values = row.split(",");
      const obj: CsvItem = csvHeader.reduce((acc, header, index) => {
        acc[header] = values[index];
        return acc;
      }, {} as CsvItem);
      return obj;
    });

    setArray(array);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
        return;
      } else {
        const file = e.target.files[0];
        setNameFile(file.name)
        fileReader.onload = function (event) {
          if (event.target) {
            const text = event.target.result as string;
            csvFileToArray(text);
          }
        };
      
        fileReader.readAsText(file);
        setActiveStep(1);
      }
  };

  const handleImportCSV = async () =>{
    setComfirmCsv(true)
    await new Promise(r => setTimeout(r, 3000));

    setActiveStep(2);
  }
  const headerKeys = Object.keys(Object.assign({}, ...arrayData));

  const hanldeChangeStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{
            display: 'flex', 
            pt: 2, 
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            height: '100%' 
            }}
          >
            <Box>
              <Button>
              <Button component="label" variant="contained" startIcon={<FaCloudUploadAlt />}>
                Upload file
                <VisuallyHiddenInput  type={"file"}  accept=".csv" onChange={handleFileChange} />
              </Button>
              </Button>
            </Box>
            Or drag and drop a CSV file to start
          </Box>  
        )
      case 1:
       
          return (
            <Box>
              <>
              {
                comfirmCsv == true ? 
                    (
                      <Box sx={{ paddingTop: '20px' }}>
                      <CircularProgress color="secondary" /> Importing CSV to database
                      </Box>
                    ) 
                  : 
                  <>
                    <Box sx={{ paddingTop: '20px' }}>
                      Table Name: {nameFile}
                    </Box>
                    <Box display={'flex'} sx={{ paddingTop: '20px' }}>
                      <Button variant="outlined" onClick={handleImportCSV} sx={{marginRight:'20px'}}>Begin import</Button>
                      <Button variant="outlined">Cancel</Button>
                    </Box>
                    <TableContainer component={Paper} sx={{ paddingTop: '20px', marginTop:'20px' }}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            {headerKeys.map((key) => (
                              // eslint-disable-next-line react/jsx-key
                              <TableCell align="center">{key}</TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {arrayData.map((item) => (
                            <TableRow
                              key={item.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              {Object.values(item).map((val) => (
                                // eslint-disable-next-line react/jsx-key
                                <TableCell align="center">{val}</TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                }
              </>
            </Box>
          )
          
      case 2:
        return (
          <Box sx={{paddingTop:'20px'}}>
            <Box> Imported number rows </Box>
            Your data has been imported successfully. You can either delete this table, edit your CSV and re-import, or make edits to the table in the UI.
            <Box display={'flex'} sx={{paddingTop:'20px'}}>
              <Button variant="outlined" sx={{marginRight:'20px'}}>
                <Link href='/datastores'>Go to your table</Link>
              </Button>
              <Button variant="outlined">Delete table and try again</Button>
            </Box>
          </Box>
        )
      default:
        break;
    }
  }

  return (
    <Box sx={{ width: '100%', height: '100%', paddingTop:'50px' }}>
      <Stepper activeStep={activeStep}>
        {stepsImport.map((label) => {
          return (
            <Step key={label} >
              <StepLabel >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {
        hanldeChangeStep()
      }
    </Box>
  );
}
