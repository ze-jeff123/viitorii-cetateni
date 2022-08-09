import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import elasticlunr from 'elasticlunr';
import flatPosts from "../flatPosts.js";
import { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

let Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    display:'flex',
    alignItems:'center',
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

const StyledTextField = styled(TextField)(({ theme }) => ({
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

let postsById = new Array(flatPosts.length + 3);
for (let i = 0; i < flatPosts.length; i++) {
    postsById[flatPosts[i].id] = flatPosts[i];
}

function checkPrefix(prefix, value) {
    if (!(prefix.length<=value.length)) return false;
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i] !== value[i]) return false;
    }
    return true;
}

function makeIdsUnique(array) {
    let seenIds = {};
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        if (seenIds[array[i].id] !== true) {
            seenIds[array[i].id] = true;
            finalArray.push(array[i]);
        }
    }
    return finalArray;
}
function SearchComp(props) {

    const [index, setIndex] = useState(null);
    useEffect(() => {
        setIndex(intializeSearch());
    }, []);

    const [firstOption, setFirstOption] = useState(null);

    const rendered = (params) => (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={(e)=>{e.preventDefault(); if(firstOption!==null)window.location.assign(firstOption)}}>
            <TextField {...params} inputProps={{...params.inputProps, placeholder:'Cauta...',style:{color:'white', minWidth:'125px',maxWidth:'200px', marginLeft:'25px', height:'8px', padding:'8px'}}}>
                
            </TextField>
            </form>
        </Search>
    )

    return (
        <Autocomplete
            id="suggestions"
            options={flatPosts.map((post)=>({label:post.content.metadata.title, id:post.id}))}
            sx={{width:300,display:'flex',alignItems:'center'}}
            renderInput={(params) => rendered(params)}
            freeSolo
            filterOptions={(options,state) => {
                const values = index.search(state.inputValue);
                if (values.length>0) {
                    setFirstOption('/'+postsById[values[0].ref].slug);
                } 

                const searchedSuggestions = values.splice(0, Math.min(7,values.length - 1)).map((post)=>({label:postsById[post.ref].content.metadata.title, id:postsById[post.ref].id}));
                let prefixSuggestions =(state.inputValue !== '') ?  flatPosts.filter((post) => checkPrefix(state.inputValue.toLowerCase(), post.content.metadata.title.toLowerCase())).map((post)=>({label:post.content.metadata.title, id: post.id})) : [];
                const finalSuggestions = makeIdsUnique(searchedSuggestions.concat(prefixSuggestions));
                prefixSuggestions = prefixSuggestions.splice(0, Math.min(5,prefixSuggestions.length - 1));
                if (finalSuggestions.length>0) {
                    setFirstOption('/'+postsById[finalSuggestions[0].id].slug);
                } 

                return finalSuggestions;
            }}
        />
    )
}

export default SearchComp;

/*
 <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase {...params}
                placeholder="Cauta…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        */