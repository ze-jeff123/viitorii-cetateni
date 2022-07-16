import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { slugify } from '../global/articlesUtility';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import importAllDefault from '../global/importAllDefaults';
import Container from "@mui/material/Container";
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Article from './Article';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ListSubheader, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { getCategories, slugifyArticle } from '../global/articlesUtility';
import Search from './Search'
import Carousel from './Carousel';
import ArticleCard from './ArticleCard';
const drawerWidth = 240;

const StyledLink = styled(Link)`
    text-decoration : none;
    color : black;
`


function repeat(count, element) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(element);
  }
  return result;
}

function getLastSlug(pathname) {
  let s = '';
  for (let i = pathname.length - 1; i >= 0; i--) {
    if (pathname[i] === '/') {
      return s;
    }
    s = pathname[i] + s;
  }
}
function NestedList({ articles }) {
  const categories = getCategories(articles);
  const [open, setOpen] = React.useState(repeat(5, false));

  const location = useLocation();

  const handleClick = (index) => {
    let copyOpen = open.slice(0);
    copyOpen[index] = !copyOpen[index];
    setOpen(copyOpen);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"

    >

      {
        categories &&
        categories.map((category, index) => (
          <>
            <ListItemButton onClick={handleClick.bind(null, index)}>
              <ListItemText primaryTypographyProps={{ fontSize: '1.2rem' }} primary={category} />
              {open[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  articles &&
                  articles.filter((article) => article.category === category).map((article) => (
                    <StyledLink to={`/articole/${slugifyArticle(article)}`}>
                      <ListItemButton selected={location.pathname === `/articole/${slugifyArticle(article)}`} sx={{ pl: 4 }} >
                        <ListItemText>
                          {article.title}
                        </ListItemText>
                      </ListItemButton>
                    </StyledLink>
                  ))
                }
              </List>
            </Collapse>
          </>
        ))
      }
    </List>
  );
}

const GridContainer = styled.div`
  display : grid;
  grid-template-rows : auto auto;
  grid-template-columns : auto auto;
`
///TODO : make the edges align on the sidebar vs the header
function Articles(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [articles, setArticles] = useState(null);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    importAllDefault().then((val) => { setArticles(val) });
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ paddingTop: "24px" }}>
      <Typography align='center' variant='h5'>Cuprins</Typography>
      <NestedList articles={articles}></NestedList>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {
        articles &&
        <Carousel >
          {
            articles.map((article) => <ArticleCard article={article} />)
          }

        </Carousel >
      }
    </>
  );
}

export default Articles;
