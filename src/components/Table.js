import React from 'react'
import "./Table.scss"
const Table = ({ data }) => {
    return (
        <table >
            <thead>
                <tr>
                    {data.tableHead.map((item, i) => <td key={`${i}a`}>{item}</td>)}
                </tr>
            </thead>
            <tbody>
                {data.tableData.map((item, i) => (
                    <tr key={i}>
                        {data.tableData[i].map((item, i) => <td key={`${i}c`}>{item}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table