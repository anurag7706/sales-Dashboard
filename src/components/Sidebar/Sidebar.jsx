import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, ListItemButton, Typography, Avatar} from '@mui/material';
import { LogoDev, DashboardOutlined, ViewInAr, AccountBoxOutlined, AccountBalanceWalletOutlined, MonetizationOnOutlined, HelpCenterOutlined} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Sidebar = ({ setMobileOpen }) => {
    const classes = useStyles();

    useEffect(() => {
        setMobileOpen(false);
    }, []);

    return (
        <div style={{background: '#040440', color: 'white'}}>
            <Link to="/" className={classes.logo}>
                <LogoDev className={classes.image} />
                <Typography variant='h4'>
                  Dashboard
                </Typography>
            </Link>
            <Divider />
            <List className={classes.thelist}>
                <Link to="/" className={classes.links}>
                  <ListItemIcon>
                    <DashboardOutlined className={classes.images}/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </Link>
                <Link to="/" className={classes.links}>
                  <ListItemIcon>
                    <ViewInAr className={classes.images}/>
                  </ListItemIcon>
                  <ListItemText primary="Product" />
                  <Typography variant='h6' style={{marginRight: '20px'}}>&gt;</Typography>
                </Link>
                <Link to="/" className={classes.links}>
                  <ListItemIcon>
                    <AccountBoxOutlined className={classes.images}/>
                  </ListItemIcon>
                  <ListItemText primary="Customers" />
                  <Typography variant='h6' style={{marginRight: '20px'}}>&gt;</Typography>
                </Link>
                <Link to="/" className={classes.links}>
                  <ListItemIcon>
                    <AccountBalanceWalletOutlined className={classes.images}/>
                  </ListItemIcon>
                  <ListItemText primary="Income" />
                  <Typography variant='h6' style={{marginRight: '20px'}}>&gt;</Typography>
                </Link>
                <Link to="/" className={classes.links}>
                  <ListItemIcon>
                    <MonetizationOnOutlined className={classes.images}/>
                  </ListItemIcon>
                  <ListItemText primary="Promote" />
                  <Typography variant='h6' style={{marginRight: '20px'}}>&gt;</Typography>
                </Link>
                <Link to="/" className={classes.links}>
                  <ListItemIcon>
                    <HelpCenterOutlined className={classes.images}/>
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                  <Typography variant='h6' style={{marginRight: '20px'}}>&gt;</Typography>
                </Link>
            </List>
            <Divider />
            <div className={classes.userCard}>
                <Avatar className={classes.avatar} src={"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"} alt="Anurag" />
                <div className={classes.userInfo}>
                  <Typography variant="body1" className={classes.userName}>
                    Anurag Mishra
                  </Typography>
                  <Typography variant="body2" className={classes.userDesignation}>
                    Project Manager
                  </Typography>
                </div>
              </div>
            </div>
    );
};

export default Sidebar;
