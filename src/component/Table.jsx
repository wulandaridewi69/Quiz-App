import React, { useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";

import Layout from './Layout';


const Table = ({ data, search, titles, Row, onChange,  }) => {
    
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const filteredData = data.filter(
        (item) => item.name.toLowerCase().includes(search.toLowerCase()) 
            || item.symbol.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        setLoading(false)
    }, []);

    if (loading) {
        return (loading)
      } else {
        return (
            <Layout>
                <table className='table table-dark mt-4 table-hover '>
                    <thead>
                        {/* COLUMN TITLE */}
                        <tr>
                            {titles.map(title => (
                                <td>{title}</td>
                            ))}
                        </tr>
                        {/* COLUMN TITLE */}
                    </thead>
                    <tbody>
                        {/* ROW */}
                        {filteredData.map((item, index) => {
                            let startIndex = (page - 1) * data.length + (index + 1);
                            return <Row item={item} key={index} index={startIndex} />
                        })}
                        {/* ROW */}
                    </tbody>
                </table>
                {/* PAGINATION */}
                <Pagination
                    size="large"
                    count={5}
                    onChange={(event, pageNumber) => {
                        setPage(pageNumber)
                        onChange(pageNumber)
                    }}
                />
                {/* PAGINATION */}
            </Layout>
        )
    }
}

export default Table;