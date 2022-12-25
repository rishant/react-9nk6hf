import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import MouseIcon from '@mui/icons-material/Mouse';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const customControlList = [
  'Far Hone Failure Anaysis Icon',
  'Far Hone Validation Report Icon',
  'Far Hone Invalid Run Icon',
];

export default function FloatingActionButtons() {
  const [project, setProject] = React.useState('');

  const singleSelectHandleChange = (event) => {
    setProject(event.target.value);
  };

  const [personName, setPersonName] = React.useState([]);

  const multioSelectHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <>
      <Grid container sx={{ width: '100%', border: '2px solid gray' }}>
        <Box display="flex" justifyContent="flex-start">
          <Typography
            variant="h4"
            color="gray"
            sx={{ marginLeft: '15px', marginTop: '15px' }}
          >
            Runs
          </Typography>
        </Box>
        <Box
          sx={{
            '& > :not(style)': { m: 1 },
            display: 'flex',
            flex: 'auto',
            justifyContent: 'flex-end',
          }}
        >
          <Fab color="primary" aria-label="add" disabled>
            <MouseIcon fontSize="small" />
          </Fab>
          <Fab color="primary" aria-label="add">
            <AssignmentIcon fontSize="small" />
          </Fab>
          <Fab color="primary" aria-label="add" disabled>
            <DeleteIcon fontSize="small" />
          </Fab>
          <Fab color="primary" aria-label="add">
            <PlayArrowIcon fontSize="small" />
          </Fab>
          <Fab color="primary" aria-label="add">
            <SettingsBackupRestoreIcon fontSize="medium" />
          </Fab>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Milestone View"
            labelPlacement="top"
          />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Project
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={project}
              label="Project"
              onChange={singleSelectHandleChange}
            >
              <MenuItem value={10}>OneBay</MenuItem>
              <MenuItem value={20}>OneBayFirmwareValidation</MenuItem>
              <MenuItem value={30}>StartgateFVT</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid
        container
        sx={{ width: '100%', border: '2px solid gray', height: '300px' }}
      >
        <Box>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Controls</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label2"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={multioSelectHandleChange}
              input={<OutlinedInput label="Controls" />}
              // renderValue={(selected) => selected.join(', ')}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {customControlList.map((customControl) => (
                <MenuItem key={customControl} value={customControl}>
                  <Checkbox checked={personName.indexOf(customControl) > -1} />
                  <ListItemText primary={customControl} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </>
  );
}
