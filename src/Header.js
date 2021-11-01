import React, { useState } from 'react'
import Brightness3Outlined from '@mui/icons-material/Brightness3Outlined';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/styles/useTheme'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import makeStyles from '@mui/styles/makeStyles'

const mobileStyles = makeStyles({
  menu: {
    alignSelf: 'flex-end'
  }
});

const useStyles = makeStyles({
  logo: {
    flexGrow: 1
  }
});

const menuItems = [
  { link: "#about", name: "about" },
  { link: "#projects", name: "projects" },
  { link: "#blog", name: "blog" },
  { link: "#contact", name: "contact" }
]

function MobileNavbar() {
  const { menu } = mobileStyles();
  const [anchor, setAnchor] = useState(null);
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchor(null);
  }
  return (
    <>
      <IconButton
        aria-label="menu"
        onClick={handleMenu}
        className={menu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={handleMenuClose}
      >
        {menuItems.map(({ link, name }) => {
          return (
            <MenuItem
              key={name}
              component={Link}
              href={link}
            >
              {name}
            </MenuItem>
          )
        })}

      </Menu>
    </>
  )
}

function DesktopNavbar() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-end"
    >
      <Grid item><Link href="#about">About</Link></Grid>
      <Grid item><Link href="#projects">Projects</Link></Grid>
      <Grid item><Link href="#blog">Blog</Link></Grid>
      <Grid item><Link href="#contact">Contact</Link></Grid>
    </Grid>
  )
}

function Header(props) {
  const { themeMode, setThemeMode } = props;
  const theme = useTheme();
  const { logo } = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Icon = themeMode ? WbSunnyOutlined : Brightness3Outlined;

  return (
    <Grid item>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" className={logo}>
            LOGO
          </Typography>
          <Typography variant="h6">
            {isMobile ?
              <MobileNavbar />
              :
              <DesktopNavbar />
            }
          </Typography>
          <Typography>
            <IconButton
              edge="end"
              color="primary"
              size="small"
              aria-label="mode"
              onClick={() => setThemeMode(!themeMode)}
            >
              <Icon fontSize="medium" />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid >
  )
}

export default Header
