import React from 'react';
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
import { FaGoodreads } from 'react-icons/fa';

import { RATINGCOLORS, CATEGORY_COLORS, BOOKS } from '../constant/books';

const Year = (props) => {
    return (
        <div className="mb-10 text-center">
            <p className="mb-4 text-4xl font-bold" style={{ fontFamily: 'Major Mono Display' }}>
                {props.year}
            </p>
            <hr className="border-gray-700" />
        </div>
    );
};

const Card = ({ data }) => {
    return data ? (
        <div className="flex flex-wrap justify-center">
            {data.map((book) => (
                <div
                    style={{
                        backgroundImage: `url(${book.url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'None',
                    }}
                    className="flex border flex-wrap w-64 h-96 mt-4 border-3 justify-center mx-6 "
                    key={book.name}
                >
                    <div className="flex items-end ">
                        <div
                            className=" w-64 h-20 bg-green-200 bg-opacity-80 z-0"
                            style={{
                                backdropFilter: 'blur(2px)',
                            }}
                        >
                            {book.status === 'Reading' ? (
                                <p className="text-xl my-6 text-center text-blue-800">
                                    Currently Reading
                                </p>
                            ) : (
                                <>
                                    <div className="flex mt-4 mx-2">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span
                                                className={`text-xl ${i < book.rating ? 'text-yellow-500' : 'text-gray-500'}`}
                                                key={book.author + i}
                                            >
                                                <HiStar />
                                            </span>
                                        ))}
                                    </div>


                                    <div className="flex text-xs flex-wrap mt-2 ml-2 text-gray-700 ">
                                        {Object.keys(book).indexOf('genres') === -1
                                            ? ''
                                            : book.genres.map((genre) => (
                                                  <span
                                                      key={book.Name + genre}
                                                      className="mr-2 px-3 text-white rounded-2xl"
                                                      style={{
                                                          background:
                                                              CATEGORY_COLORS[genre.toLowerCase()],
                                                      }}
                                                  >
                                                      {genre}{' '}
                                                  </span>
                                              ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div>no data loaded</div>
    );
};
function Row({ row }) {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow className="flex" sx={{ '& > *': { borderBottom: 'None' } }}>
                <TableCell
                 component="th"
                 scope="row"
                 style={{ color: 'white', borderBottom: 'solid 1px #2a2a2a80' }}
                >   
                    <img className="w-12/12" src={`${row.url}`} alt={row.name}/>
                    
                </TableCell>
                <TableCell
                    component="th"
                    scope="row"
                    style={{ color: 'white', borderBottom: 'solid 1px #2a2a2a80' }}
                >
                    {row.name}
                </TableCell>
                <TableCell
                    align="center"
                    display="flex"
                    style={{ color: 'white', borderBottom: 'solid 1px #2a2a2a80' }}
                >
                    <div
                        className="rounded-xl px-2 text-xs"
                        style={{ backgroundColor: RATINGCOLORS[row.Rating] }}
                    >
                        {row.rating ? `${row.rating}/5` : 'Reading'}
                    </div>
                </TableCell>
                <TableCell
                    align="right"
                    style={{ color: 'white', borderBottom: 'solid 1px #2a2a2a80' }}
                >
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
                                    <TableRow className="flex">
                                        <TableCell
                                            className="flex"
                                            style={{ color: 'white', borderBottom: 'none' }}
                                        >
                                            {row.author}
                                        </TableCell>
                                        <TableCell
                                            className="text-center"
                                            style={{ color: 'white', borderBottom: 'none' }}
                                        >
                                            {/* {Object.keys(row).indexOf('Genres') === -1 ? (
                                                <p>{Object.keys(row)}</p>
                                            ) : ( */}
                                            {row.genres.map((genre) => (
                                                <span
                                                    key={'card' + row.Name + genre}
                                                    className="mt-1 mr-1 px-2 justify-center text-sm rounded-xl text-white"
                                                    style={{
                                                        background:
                                                            CATEGORY_COLORS[genre.toLowerCase()],
                                                    }}
                                                >
                                                    {genre}
                                                </span>
                                            ))}
                                            {/* )} */}
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
                    {BOOKS.map((row) => (
                        <Row row={row} key={'card' + row.name + row.Author} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default function Book() {
    return (
        <>
            <div className="text-blue-300 w-full flex flex-row mx-4 mb-4 md:mb-0 md:mx-0">
                <a
                    href="https://www.goodreads.com/user/show/33245001-phuntsho-norbu"
                    target="_"
                    className="float-left"
                >
                    Goodreads <FaGoodreads className="inline" />
                </a>
            </div>
            <div className="w-12/12 hidden md:block">
                <Year year="2024" />
                <Card data={BOOKS} />
                <div className='mb-60'/>
            </div>

            <div className="w-12/12 mx-4 block md:hidden lg:hidden">
                <Year year="2024" />
                <MobileCard />
                <div className='mb-48'/>
            </div>
        </>
    );
}
