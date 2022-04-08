import React, { useState, useEffect } from "react";
import "./Table.scss";
import arrowUp from "../assets/sort_up.png";
import arrowDown from "../assets/sort_down.png";
const Table = ({ data }) => {
    const [tableEntries, setTableEntries] = useState(data);
    const [toogle, setToogle] = useState([]);
    useEffect(() => {
        setToogle(
            tableEntries.tableHead.map((item, i) => ({
                id: i,
                asc: false,
                desc: false,
            }))
        );
    }, []);

    const setToogleState = (itemID) => {
        setToogle((prev) =>
            prev.map((item, i) => {
                if (i === itemID) {
                    if (!item.asc && !item.desc) {
                        return { ...item, asc: !item.asc, desc: item.desc };
                    } else if ((item.asc && !item.desc) || (!item.asc && item.desc)) {
                        return { ...item, asc: !item.asc, desc: !item.desc };
                    }
                    return item;
                } else
                    return {
                        ...item,
                        asc: false,
                        desc: false,
                    };
            })
        );
    };

    const showToogleIcon = (itemID) => {
        if (!toogle[itemID]?.asc && !toogle[itemID]?.desc) {
            return <div className="icon"></div>;
        } else if (!toogle[itemID]?.asc || toogle[itemID]?.desc) {
            return (
                <div className="icon">
                    <img alt="icon_down" src={arrowDown} width={15}></img>
                </div>
            );
        } else if (toogle[itemID]?.asc || !toogle[itemID]?.desc) {
            return (
                <div className="icon">
                    <img alt="icon_up" src={arrowUp} width={15}></img>
                </div>
            );
        } else return <div className="icon"></div>;
    };

    const sortTableEntries = (columnID) => {
        let tempArr = tableEntries.tableData;

        tempArr.sort(
            ((index) => {
                return (a, b) => {
                    let ascending = a[index] < b[index];
                    let descening = a[index] > b[index];
                    let sortOrder = toogle[columnID]?.asc ? ascending : descening;
                    return a[index] === b[index] ? 0 : sortOrder ? -1 : 1;
                };
            })(columnID)
        );
        setTableEntries((prev) => ({
            ...prev,
            tableData: tempArr,
        }));
    };
    return (
        <table>
            <thead>
                <tr>
                    {tableEntries.tableHead.map((item, i) => (
                        <td
                            className={toogle[i]?.asc || toogle[i]?.desc ? "activeTab" : ""}
                            key={`${i}a`}
                            onClick={() => {
                                setToogleState(i);
                                sortTableEntries(i);
                            }}
                        >
                            {item}
                            {showToogleIcon(i)}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableEntries.tableData.map((item, i) => (
                    <tr key={i}>
                        {tableEntries.tableData[i].map((item, i) => (
                            <td key={`${i}c`}>{item}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
