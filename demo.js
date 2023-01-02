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

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Tooltip from '@mui/material/Tooltip';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import DoneIcon from '@mui/icons-material/Done';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuIconOpen = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuIconHandleClose = () => {
    setAnchorEl(null);
  };

  const [userIconAnchorEl, setUserIconAnchorEl] = React.useState(null);
  const userIconOpen = Boolean(userIconAnchorEl);
  const userIconHandleMenuClick = (event) => {
    setUserIconAnchorEl(event.currentTarget);
  };
  const userIconHandleClose = () => {
    setUserIconAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              OneFAR
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={menuIconOpen}
              onClose={menuIconHandleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={menuIconHandleClose}>
                <HomeIcon
                  fontSize="small"
                  color="primary"
                  style={{ paddingRight: '6px' }}
                />
                Home
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <BuildIcon
                  fontSize="small"
                  sx={{ color: 'rgb(156, 39, 176)' }}
                  style={{ paddingRight: '6px' }}
                />
                Shack Builder
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <BlurLinearIcon
                  fontSize="small"
                  color="action"
                  style={{ paddingRight: '6px' }}
                />
                E6 Counter View
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <DonutLargeIcon
                  fontSize="small"
                  color="error"
                  style={{ paddingRight: '6px' }}
                />
                My FA
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <DonutSmallIcon
                  fontSize="small"
                  color="primary"
                  style={{ paddingRight: '6px' }}
                />
                Auto FA
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <YoutubeSearchedForIcon
                  fontSize="small"
                  color="secondary"
                  style={{ paddingRight: '6px' }}
                />
                Auto Triage
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <AssignmentIcon
                  fontSize="small"
                  color="error"
                  style={{ paddingRight: '6px' }}
                />
                TDD Rules
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <DoneIcon
                  fontSize="small"
                  color="primary"
                  style={{ paddingRight: '6px' }}
                />
                Test Results
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <VpnLockIcon
                  fontSize="small"
                  color="primary"
                  style={{ paddingRight: '6px' }}
                />
                VM Management
              </MenuItem>
              <MenuItem onClick={menuIconHandleClose}>
                <SettingsIcon
                  fontSize="small"
                  color="warning"
                  style={{ paddingRight: '6px' }}
                />
                Project Settings
              </MenuItem>
            </Menu>

            <Tooltip title="Account Settings">
              <AccountCircleIcon
                sx={{ mr: 2 }}
                onClick={userIconHandleMenuClick}
              />
            </Tooltip>
            <Menu
              id="user-menu"
              anchorEl={userIconAnchorEl}
              open={userIconOpen}
              onClose={userIconHandleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={userIconHandleClose}>
                <AccountCircleIcon
                  fontSize="small"
                  color="primary"
                  style={{ paddingRight: '6px' }}
                />
                Rishant Gupta
              </MenuItem>
              <MenuItem onClick={userIconHandleClose}>
                <SettingsIcon
                  fontSize="small"
                  color="action"
                  style={{ paddingRight: '6px' }}
                />
                User Preference
              </MenuItem>
              <MenuItem onClick={userIconHandleClose}>
                <PowerSettingsNewIcon
                  fontSize="small"
                  color="error"
                  style={{ paddingRight: '6px' }}
                />
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container sx={{ width: '100%', hight: '50px' }}>
        <br />
      </Grid>
      <Grid
        container
        sx={{
          width: '100%',
          border: '2px solid gray',
          backgroundColor: '#f1eaeb9e',
        }}
      >
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
          <Fab color="success" aria-label="add">
            <PlayArrowIcon fontSize="small" />
          </Fab>
          <Fab color="action" aria-label="add">
            <SettingsBackupRestoreIcon fontSize="medium" />
          </Fab>
        </Box>
        <Box display="flex" justifyContent="flex-end">
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
        sx={{
          width: '100%',
          border: '2px solid gray',
          height: '300px',
          backgroundColor: '#faedf352',
        }}
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
