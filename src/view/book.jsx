import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LATEST, RATINGCOLORS, CATEGORY_COLORS } from '../constant/books';
import { HiStar } from 'react-icons/hi';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Card = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {LATEST.map((book) => (
                <div
                    style={{
                        backgroundImage: `url(${book.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'None',
                    }}
                    className="flex border flex-wrap w-64 h-96 border-3 justify-center mx-6 my-4"
                    key={book.title}
                >
                    <div className="flex items-end ">
                        <div
                            className=" w-64 h-20 bg-green-200 bg-opacity-80 z-0"
                            style={{
                                backdropFilter: 'blur(2px)',
                            }}
                        >
                            <div className="flex mt-4 mx-2  ">
                                {Array.from({ length: book.rating }, (_, i) => (
                                    <span className="text-xl text-yellow-500" key={book.author + i}>
                                        <HiStar />
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap mt-2 ml-2 text-gray-700 ">
                                {book.genre.map((item) => (
                                    <span
                                        key={book.title + CATEGORY_COLORS[item]}
                                        className="px-2 text-xs rounded-xl text-white  mx-1"
                                        style={{ backgroundColor: CATEGORY_COLORS[item] }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow className="flex" sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row" style={{ color: 'white' }}>
                    {row.title}
                </TableCell>
                <TableCell align="center" display="flex" style={{ color: 'white' }}>
                    <div
                        className="rounded-xl"
                        style={{ backgroundColor: RATINGCOLORS[row.rating] }}
                    >
                        {row.rating} / 5
                    </div>
                </TableCell>
                <TableCell align="right" style={{ color: 'white' }}>
                    <IconButton
                        style={{ color: 'white' }}
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: 'white' }}>
                                            {row.author}
                                        </TableCell>
                                        <TableCell style={{ color: 'white' }}>{row.date}</TableCell>

                                        <TableCell className="text-center">
                                            {row.genre.map((item) => (
                                                <span
                                                    key={row.title + row.author + item}
                                                    className="my-1 px-1 justify-center text-sm rounded-xl flex flex-wrap border border-white-200 text-white"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
const MobileCard = () => {
    return (
        <TableContainer
            style={{ backgroundColor: 'transparent', color: 'white', border: 'solid 1px gray' }}
        >
            <Table aria-label="collapsible table">
                <TableBody className="flex">
                    {LATEST.map((row) => (
                        <Row row={row} key={row.title + row.author + row.date} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
const getBooks = async () => {
    // console.log(process.env.REACT_APP_NOTION_KEY, process.env.REACT_APP_NOTION_DB_ID);
    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: process.env.REACT_APP_NOTION_KEY });

    (async () => {
        const databaseId = process.env.REACT_APP_NOTION_DB_ID;
        const response = await notion.databases.query({
            database_id: databaseId,
        });
        console.log(response);
    })();
};

export default function Book() {
    useEffect(() => {
        getBooks();
    });
    return (
        <>
            <div className="w-12/12 hidden md:block">
                <Card />
            </div>
            <div className="w-12/12 mx-4 block md:hidden lg:hidden">
                <MobileCard />
            </div>
        </>
    );
}
