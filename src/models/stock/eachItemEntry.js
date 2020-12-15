import React from 'react';
import MaterialTable from 'material-table';
import Purchase from '../purchase';
import { Button } from '@material-ui/core';

function EachItemEntry({title}) {
    const { useState } = React;

    function t (ch){
    }

    const [columns, setColumns] = useState([
        { title: 'Product Name', field: 'productName' ,type:"datetime"},
        { title: 'Description', field: 'description' },
        { title: 'Expire Date', field: 'expireDate', type:"date" },
        { title: 'Unit', field: 'unit' },
        {
            title: 'Rate',
            field: 'rate',
        },
        {
            title: 'MRP',
            field: 'mrp',
        },
        {
            title: 'Tax %',
            field: 'taxPercentage',
        },
        {
            title: 'Tax Amount',
            field: 'taxAmount',
        },
    ]);

    const [data, setData] = useState([
        { productName: 'Cold 5mg tablet', description: 'Prakash', expireDate:"", unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', expireDate:"", unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
        { productName: 'Cold 5mg tablet', description: 'Prakash', expireDate:"", unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', expireDate:"", unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
        { productName: 'Cold 5mg tablet', description: 'Prakash', expireDate:"", unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
    ]);

    return (
        <div style={{margin:"24px"}}>
            <MaterialTable
                title={title}
                columns={columns}
                data={data}
                options={{
                    exportButton: true,
                    // filtering: true,
                    // grouping: false
                    actionsColumnIndex: -1
                  }}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 0)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            t(newData)
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 0)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            t(oldData)
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve()
                            }, 0)
                        }),
                }}
            />
        </div>
    )
}

export default EachItemEntry;