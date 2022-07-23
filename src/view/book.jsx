import React from 'react';
import { RATINGCOLORS, CATEGORY_COLORS } from '../constant/books';
import { HiStar, HiEmojiSad } from 'react-icons/hi';
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

const Card = ({ data }) => {
    return data ? (
        <div className="flex flex-wrap justify-center">
            {data.map((book) => (
                <div
                    style={{
                        backgroundImage: `url(${book.image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'None',
                    }}
                    className="flex border flex-wrap w-64 h-96 border-3 justify-center mx-6 my-4"
                    key={book.Name}
                >
                    <div className="flex items-end ">
                        <div
                            className=" w-64 h-20 bg-green-200 bg-opacity-80 z-0"
                            style={{
                                backdropFilter: 'blur(2px)',
                            }}
                        >
                            <div className="flex mt-4 mx-2  ">
                                {book.Rating ? (
                                    Array.from({ length: book.Rating }, (_, i) => (
                                        <span
                                            className="text-xl text-yellow-500"
                                            key={book.Author + i}
                                        >
                                            <HiStar />
                                        </span>
                                    ))
                                ) : (
                                    <span>nothing</span>
                                )}
                            </div>

                            <div className="flex text-xs flex-wrap mt-2 ml-2 text-gray-700 ">
                                {Object.keys(book).indexOf('Genres') === -1
                                    ? ''
                                    : book.Genres.map((genre) => (
                                          <span
                                              key={book.Name + genre}
                                              className="mr-2 px-3 text-gray-700 rounded-2xl"
                                              style={{ background: CATEGORY_COLORS[genre] }}
                                          >
                                              {genre}{' '}
                                          </span>
                                      ))}
                            </div>
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
                    className=" w-4 flex content-center"
                    style={{ borderBottom: 'solid 1px #2a2a2a80' }}
                >
                    <img className="w-12/12 rounded-md" src={`${row.image}`} alt="book" />
                </TableCell>
                <TableCell
                    component="th"
                    scope="row"
                    style={{ color: 'white', borderBottom: 'solid 1px #2a2a2a80' }}
                >
                    {row.Name}
                </TableCell>
                <TableCell
                    align="center"
                    display="flex"
                    style={{ color: 'white', borderBottom: 'solid 1px #2a2a2a80' }}
                >
                    <div
                        className="rounded-xl px-2"
                        style={{ backgroundColor: RATINGCOLORS[row.Rating] }}
                    >
                        {row.Rating ? `${row.Rating}/5` : 'no rating'}
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
                                            {row.Author}
                                        </TableCell>
                                        <TableCell
                                            className="text-center"
                                            style={{ color: 'white', borderBottom: 'none' }}
                                        >
                                            {Object.keys(row).indexOf('Genres') === -1
                                                ? ''
                                                : row.Genres.map((genre) => (
                                                      <span
                                                          key={'card' + row.Name + genre}
                                                          className="mt-1 mr-1 px-2 justify-center text-sm rounded-xl text-white"
                                                          style={{
                                                              background: CATEGORY_COLORS[genre],
                                                          }}
                                                      >
                                                          {genre}{' '}
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
const MobileCard = ({ data }) => {
    return (
        <TableContainer
            style={{ backgroundColor: 'transparent', color: 'white', border: 'solid 1px gray' }}
        >
            <Table aria-label="collapsible table">
                <TableBody className="flex">
                    {data.map((row) => (
                        <Row row={row} key={'card' + row.Name + row.Author} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default function Book({ data, error }) {
    return error ? (
        <div className="h-screen text-2xl flex flex-col text-center  underline mx-4">
            <HiEmojiSad className="w-full text-6xl mb-4" />
            An error occured. Please try again later
        </div>
    ) : (
        <>
            <div className="w-12/12 hidden md:block">
                <Card data={data} />
            </div>
            <div className="w-12/12 mx-4 block md:hidden lg:hidden">
                <MobileCard data={data} />
            </div>
        </>
    );
}
