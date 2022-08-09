import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './Logo';

import Container from "@mui/material/Container";

import Article from './Article';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {  Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Search from './Search'
import posts from "../posts.json";
import flatPosts from '../flatPosts';
const drawerWidth = 240;

const StyledLink = styled(Link)`
    text-decoration : none;
    color : black;
`



function NestedList({ posts }) {
  const [open, setOpen] = React.useState({});

  const location = useLocation();

  const handleClick = (index) => {
    let copyOpen = JSON.parse(JSON.stringify(open));
    copyOpen[index] = !copyOpen[index];
    setOpen(copyOpen);
  };

  function resolve(post) {
    if (post.content === 'root') {
      return (
        <div>
          {
            post.kids.map((post) => resolve(post))
          }
        </div>
      )
    }

    if (post.kids.length > 0) {
      return (
        <>
          <ListItemButton onClick={handleClick.bind(this, post.slug)}>
            <ListItemText primaryTypographyProps={{ fontSize: '1.2rem' }} primary={post.content.metadata.title} />
            {open[post.slug] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open[post.slug]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                post.kids.map((post) => resolve(post))
              }
            </List>
          </Collapse>
        </>
      )
    }

    return (
      <StyledLink to={`/${post.slug}`}>
        <ListItemButton selected={location.pathname === `/${post.slug}`} sx={{ pl: 4 }} >
          <ListItemText>
            {post.content.metadata.title}
          </ListItemText>
        </ListItemButton>
      </StyledLink>
    )
  }
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
      {resolve(posts)}

    </List>
  );
}

/*
const GridContainer = styled.div`
  display : grid;
  grid-template-rows : auto auto;
  grid-template-columns : auto auto;
`

*/
///TODO : make the edges align on the sidebar vs the header
function Articles(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ paddingTop: "24px" }}>
      <Typography align='center' variant='h5'>Cuprins</Typography>
      <NestedList posts={posts}></NestedList>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />

          <Search style={{ marginLeft: 'auto' }} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Container>
          {
            posts &&
            <Article post={flatPosts.find((post) => ('/' + post.slug) === location.pathname)}></Article>
          }
        </Container>
      </Box>
    </Box>
  );
}

export default Articles;
