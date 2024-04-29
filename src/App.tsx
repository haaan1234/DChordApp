import { useState } from "react"
import { MakeDChords } from "./logic"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";


export default function App() {
  //key選択状況を保持
  const [key, setKey] = React.useState(0);
  //keyが選択されたときに処理実行
  const keyChange = (event: SelectChangeEvent) => {
    setKey(Number(event.target.value as string));
    //   setDChords()
  };

  //Maj/min選択状況を保持
  const [Mm, setMm] = React.useState(0);
  //Maj/minが選択されたときに処理実行
  const MmChange = (event: SelectChangeEvent) => {
    setMm(Number(event.target.value as string));
  };

  return (
    <Grid container
      direction="row"
      alignContent="center"
      justifyContent="center"
      sx={{ minHeight: "50vh" }}
    > <Grid item xs={0}>
        <FormControl fullWidth>
          <InputLabel id="key">key</InputLabel>
          <Select
            labelId="key"
            id="key"
            label="key"
            onChange={keyChange}
          >
            <MenuItem value={0}>C</MenuItem>
            <MenuItem value={1}>D♭</MenuItem>
            <MenuItem value={2}>D</MenuItem>
            <MenuItem value={3}>E♭</MenuItem>
            <MenuItem value={4}>E</MenuItem>
            <MenuItem value={5}>F</MenuItem>
            <MenuItem value={6}>G♭</MenuItem>
            <MenuItem value={7}>G</MenuItem>
            <MenuItem value={8}>A♭</MenuItem>
            <MenuItem value={9}>A</MenuItem>
            <MenuItem value={10}>B♭</MenuItem>
            <MenuItem value={11}>B</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={0}>
        <FormControl>
          <InputLabel id="Mm">maj/min</InputLabel>
          <Select
            labelId="Mm"
            id="Mm"
            label="Mm"
            onChange={MmChange}  >
            <MenuItem value={0}>maj</MenuItem>
            <MenuItem value={1}>min</MenuItem>
          </Select>
        </FormControl>
        <MakeDChords dkey={key} Mm={Mm} />
      </Grid>
      <Grid item xs={12}>

      </Grid>
    </Grid>

  )

}
