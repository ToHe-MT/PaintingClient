import { useState } from "react";
import Delete_Modal from "../../pages/delete/modal";
import { Update, Delete, View } from "../Buttons";

const Table = ({ columns, data, header, category }) => {
    const [openModal, setOpenModal] = useState(false)
    const [id,setId] = useState()
    const Header = ({ header }) => {
        return (
            <thead>
                <tr>
                    {header.map((head, index) => (
                        <th key={index}>{head}</th>
                    ))}
                </tr>
            </thead>
        );
    };
    const Items = ({ data, columns }) => {
        columns.includes("")
        return (
            <tbody>
                {data.map((ele) => (
                    <tr key={ele._id}>
                        {
                            columns.map((column) => (
                                column.includes(".") ?
                                    <td key={column} className={`${column.split('.')[1]} ${ele[column.split(".")[0]][column.split('.')[1]].toString()}`} >{ele[column.split(".")[0]][column.split('.')[1]].toString()}</td>
                                    :
                                    <td key={column} className={ele[column]}>{ele[column]}</td>
                            ))
                        }
                        <td className='buttons'>
                            <View link={`/${category}/${ele._id}`} />
                            <Update link={`/${category}/${ele._id}/update`} />
                            <span onClick={() => {
                                setOpenModal(true);
                                setId(ele._id)
                            }}><Delete /></span>
                        </td>
                    </tr>
                )
                )}
            </tbody>
        );
    };
    return (
        <div className='table'>
            <table>
                {/* {data.length === 0 && <h3>Fetching Data...</h3>} */}
                {data.length > 0 &&
                    <>
                        <Header header={header} />
                        <Items data={data} columns={columns} />
                    </>
                }
                {/* {data.length === 0 && <h3>No Data Available</h3>} */}
            </table>
            {
                openModal && <Delete_Modal setOpenModal={setOpenModal} catalog={category} id={id} />
            }
        </div>
    )
}



export default Table