import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import elasticlunr from 'elasticlunr';
import flatPosts from "../flatPosts.js";
import { useEffect, useState } from 'react';

let Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function intializeSearch() {
    let index = elasticlunr(function () {
        this.addField('title');
        this.addField('body');
        this.setRef('id');
    });

    flatPosts.forEach((post) => {
        let obj = {
            id: post.id,
            title: post.content.metadata.title,
            body: post.content.content,
        };
        index.addDoc(obj);
    });

    return index;
}
function SearchComp(props) {

    const [index,setIndex] = useState(null);
    useEffect(() => {
        setIndex(intializeSearch());
    });

    return (
        <div className={props.className}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Cauta…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </div>
    )
}

export default SearchComp;