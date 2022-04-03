import React, { useState, useEffect } from 'react'
import "./Table.scss"
import arrowUp from "../assets/sort_up.png"
import arrowDown from "../assets/sort_down.png"
const Table = ({ data }) => {
    const [toogle, setToogle] = useState([])
    useEffect(() => {
        createToogleState();
    }, [])

    const createToogleState = () => {
        setToogle(data.tableHead.map((item, i) => (
            {
                id: i,
                asc: false,
                desc: false
            }
        )))
    }

    const setToogleState = (itemID) => {
        setToogle((prev) => (
            prev.map((item, i) => {
                if (i === itemID) {
                    if (!item.asc && !item.desc) {
                        return { ...item, asc: !item.asc, desc: item.desc }
                    } else if ((item.asc && !item.desc) || (!item.asc && item.desc)) {
                        return { ...item, asc: !item.asc, desc: !item.desc }
                    } return item
                }
                else return {
                    ...item,
                    asc: false,
                    desc: false
                };
            })
        )
        )
    }

    const showToogleIcon = (itemID) => {
        if (!toogle[itemID]?.asc && !toogle[itemID]?.desc) {
            return <div className='icon'></div>
        } else if (!toogle[itemID]?.asc || toogle[itemID]?.desc) {
            return <div className='icon'><img alt='icon_down' src={arrowDown} width={15}></img></div>
        } else if (toogle[itemID]?.asc || !toogle[itemID]?.desc) {
            return <div className='icon'><img alt='icon_up' src={arrowUp} width={15}></img></div>
        } else return <div className='icon'></div>
    }
    return (
        <table >
            <thead>
                <tr>
                    {data.tableHead.map((item, i) => <td className={toogle[i]?.asc || toogle[i]?.desc ? "activeTab" : ""} key={`${i}a`} onClick={() => setToogleState(i)} >{item}{showToogleIcon(i)}</td>)}
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