import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import '../../assets/css/common.css';
import PatientList from '../../models/patient';
import Stock from '../../models/stock';
import Purchase from '../../models/purchase';
import Dashboard from '../../models/dashboard';
import Dealer from '../../models/dealer';


import { sideBarData } from '../../services/constants';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    background: '#273035',
  },
  menuButton: {
    display: 'flex',
    float: 'right',
    position: 'absolute',
    right: '20px',
  },
  toolbar: theme.mixins.toolbar,
  toolBarContent: {
    background: '#56b597',
  },

  sidebarContent: {
    fontSize: '15px',
    cursor: 'arrow !important',
  },
  drawerPaper: {
    width: drawerWidth,
    overflowX: 'hidden',
    backgroundColor: '#273035',
  },
  content: {
    background: '#e8eff5',
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: '40px'  
  },
  activeItem: {
    color: '#C0C0C0',
    fontSize: '14px',
    background: 'black',
  },
  inActiveItem: {
    color: '#C0C0C0',
    fontSize: '14px',
  },
  header:{
    color:'white'
  }
}));

function Navigation(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [sidebarData, setSidebarData] = React.useState(sideBarData);
  const [current, setCurrent] = React.useState('');

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleSidebar() {
    const sidebar = sideBarData.map((data) => {
      data.active = false;
      if (data.url === window.location.pathname.replace('/', ''))
        data.active = true;
      return data;
    });
    setSidebarData(sidebar);
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    // setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  async function handleLogout() {
    // try {
    //   const res = await Logout(props);
    //   openSnackbar({ message: 'Logged out successfully', variant: 'success' });
    //   afterLogout(res);
    // } catch (err) {
    //   openSnackbar({ message: 'Logged out successfully', variant: 'success' });
    //   afterLogout({});
    // }
  }
  const menuId = 'primary-search-account-menu';

  React.useEffect(() => {
    // handleSidebar();
  }, [current]);

  function activeRoute(pathName) {
    return window.location.pathname.indexOf(pathName) > -1;
  }

  const drawer = (
    <div>
      <div className={classes.toolBarContent}>
        <div className={classes.toolbar}>
        {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        </div>
      </div>
      <div>
        <Divider />
        <div className={classes.sidebarContent}>
          <List className='my-list'>
            {sideBarData.map((data) => (
              <React.Fragment key={data.text}>
                <Link to={`/${data.url}`}>
                  <ListItem
                    className={
                      activeRoute(data.url)
                        ? classes.activeItem
                        : classes.inActiveItem
                    }
                    onClick={() => setCurrent(data.url)}
                  >
                    <ListItemIcon
                      className={
                        activeRoute(data.url)
                          ? classes.activeItem
                          : classes.inActiveItem
                      }
                    >
                      <Icon>{data.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={data.text} />
                  </ListItem>
                </Link>
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} color='default'>
        {/* <Toolbar /> */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.header} noWrap>
            Guhan Pharmacy
          </Typography>
        </Toolbar>
      </AppBar>
       <Router>
        <nav className={classes.drawer} aria-label='Mailbox folders'>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation='css'>
            <Drawer
              container={container}
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Route exact path='/pharma/stock'>
            <Stock />
          </Route>
          <Route exact path='/pharma/purchase'>
          <Purchase />
          </Route>
          <Route exact path='/pharma/patient'>
            <PatientList />
          </Route>
          <Route exact path='/pharma/dealer'>
            <Dealer />
          </Route>
          <Route exact path='/pharma/dashboard'>
            <Dashboard />
          </Route>
        </main>
      </Router>
    </div>
  );
}

Navigation.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};

export default withRouter(Navigation);