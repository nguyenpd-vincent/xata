// components/CSVSelector.tsx
import { Box, styled } from "@mui/material";
import React from "react";

type Props = {
  onChange(data: string[][]): void;
};
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
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  //   if (file) {
  //     fileReader.onload = function (event) {
  //       const csvOutput = event.target.result;
  //     };

  //     fileReader.readAsText(file);
  //   }
  // };

const CSVSelector = () => {
  // console.log('onChange  đ :>> ', onChange);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const file = e.target.files[0];

        // 1. create url from the file
        const fileUrl = URL.createObjectURL(file);

        // 2. use fetch API to read the file
        const response = await fetch(fileUrl);

        // 3. get the text from the response
        const text = await response.text();

        // 4. split the text by newline
        const lines = text.split("\n");

        // 5. map through all the lines and split each line by comma.
        const _data = lines.map((line) => line.split(","));

        // 6. call the onChange event
        // onChange(_data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Box >
        <VisuallyHiddenInput accept=".csv" onChange={handleFileChange} />
    </Box>
  );
};

export default CSVSelector;
