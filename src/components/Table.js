import React, { useState, useEffect } from "react";
import "./Table.scss";
import arrowUp from "../assets/sort_up.png";
import arrowDown from "../assets/sort_down.png";
import { useSelector, useDispatch } from "react-redux";
import { setTableState, sortTable } from "../features/tableSortSlice";

const Table = ({ data }) => {
    const [tableEntries, setTableEntries] = useState(data);
    const dispatch = useDispatch();
    const initialTableState = useSelector((state) => state.table_sort);
    useEffect(() => {
        if (initialTableState.length === 0) {
            dispatch(setTableState(tableEntries.tableHead.length));
        }
    }, []);

    const setToogleState = (itemID) => {
        dispatch(sortTable(itemID));
    };

    const showToogleIcon = (itemID) => {
        if (!initialTableState[itemID]?.asc && !initialTableState[itemID]?.desc) {
            return <div className="icon"></div>;
        } else if (
            !initialTableState[itemID]?.asc ||
            initialTableState[itemID]?.desc
        ) {
            return (
                <div className="icon">
                    <img alt="icon_down" src={arrowDown} width={15}></img>
                </div>
            );
        } else if (
            initialTableState[itemID]?.asc ||
            !initialTableState[itemID]?.desc
        ) {
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
                    let sortOrder = initialTableState[columnID]?.asc
                        ? ascending
                        : descening;
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
                            className={
                                initialTableState[i]?.asc || initialTableState[i]?.desc
                                    ? "activeTab"
                                    : ""
                            }
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
