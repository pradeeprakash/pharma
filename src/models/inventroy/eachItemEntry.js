import React from 'react';
import MaterialTable from 'material-table';

function EachItemEntry({ title }) {
    const { useState } = React;

    const [columns, setColumns] = useState([
        // { title: 'S.No', field: 'sno' },
        { title: 'Product Code', field: 'productCode' },
        { title: 'Stocky', field: 'stocky' ,lookup:{1:'GSK',2:'Deepa Medical'}},
        // { title: 'Product Name', field: 'productName' },
        { title: 'Packing Type', field: 'packingType' },
        { title: 'Packing Volume', field: 'packingVolume' },
        { title: 'Quantity', field: 'quantity' },
        {
            title: 'PTR',
            field: 'ptr',
        },
        {
            title: 'PTR GST%',
            field: 'ptrGST',
        },
        {
            title: 'Total PTR',
            field: 'totalPTR',
        },
        {
            title: 'MRP',
            field: 'mrp',
        },
        {
            title: 'Discount',
            field: 'discount',
        },
        {
            title: 'Selling Price',
            field: 'sellingPrice',
        },
    ]);

    const [data, setData] = useState([
        { sno: "1", productCode: "1001", stocky:1,productName: 'Cold 5mg tablet', packingType: "ml", packingVolume: "50", quantity: "86", ptr: "100", ptrGST: "5%", totalPTR: "105", mrp: "205", discount: "10%", sellingPrice: "180" },
    ]);

    return (
        <div style={{ margin: "24px" }}>
            <MaterialTable
                title={title}
                columns={columns}
                data={data}
                options={{
                    exportButton: true
                    // filtering: true,
                    // grouping: false
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