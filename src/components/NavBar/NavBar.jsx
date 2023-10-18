import React, {useState} from 'react';
import { AppBar, Toolbar, Drawer, useMediaQuery, Typography, TextField, InputAdornment } from '@mui/material';
import { Menu, Search as SearchIcon } from '@mui/icons-material'
import useStyles from './styles';
import { Sidebar } from '..';

const NavBar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
        <AppBar position='fixed'>
            <Toolbar className={classes.toolbar}>
                {isMobile && (
                            <IconButton
                                color="inherit"
                                edge="start"
                                style={{outline: 'none'}}
                                onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                                className={classes.menuButton}
                            >
                                <Menu />
                            </IconButton>
                )}
                <Typography variant='h5'>Hello Anurag Mishra👋</Typography>
                <div className={classes.searchContainer}>
                    <TextField 
                        variant="outlined"
                        placeholder='Search'
                        size="small"
                        InputProps={{
                            className: classes.input,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
        {isMobile ? (
            <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
            >
            <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
        ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
        )}
        </nav>
    </>
  );
};

export default NavBar;
