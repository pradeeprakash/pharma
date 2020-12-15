import React from 'react';
import MaterialTable from 'material-table';
import EachProductPurchase from './eachProductPurchase';
function Purchase() {
    const { useState } = React;


    const [columns, setColumns] = useState([
        { title: 'Product Name', field: 'productName' },
        { title: 'Description', field: 'description', initialEditValue: '' },
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
        { productName: 'Cold 5mg tablet', description: 'Prakash', unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
        { productName: 'Cold 5mg tablet', description: 'Prakash', unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
        { productName: 'Cold 5mg tablet', description: 'Prakash', unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
        { productName: 'Cold 5mg tablet', description: 'Prakash', unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
        { productName: 'Cold 5mg tablet', description: 'Prakash', unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
        { productName: 'Cold 5mg tablet', description: 'Prakash', unit: 9976322613, rate: 120,mrp:500,taxPercentage:'5%', taxAmount:'50'},
        { productName: 'Fever  Tablet', description: 'Vasakam', unit: 993826778, rate: 120, mrp:500,taxPercentage:'5%', taxAmount:'50' },
  
    ]);

    return (
        <div style={{margin:"24px"}}>
            <MaterialTable
                title="Purchase List"
                columns={columns}
                data={data}
                options={{
                    // filtering: true,
                    // grouping: false
                  }}
                  detailPanel={[
                    {
                      tooltip: 'Show Name',
                      render: rowData => {
                        return (
                          <EachProductPurchase title={rowData.productName}/>
                        )
                      },
                    }
                  ]}
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


export default Purchase;