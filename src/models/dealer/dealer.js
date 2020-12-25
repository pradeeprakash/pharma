import React from 'react';
import MaterialTable from 'material-table';
import Purchase from '../purchase';


function Dealer({title}) {
    const { useState } = React;

    function t (ch){
    }

    const [columns, setColumns] = useState([
        { title: 'Dealer Name', field: 'dealerName'},
        { title: 'Address', field: 'address' },
        { title: 'Phone Number', field: 'phoneNumber'},
        { title: 'Client Companies', field: 'clientCompanies' },
        {
            title: 'Payment Method',
            field: 'rate',
        },
        {
            title: 'Last Payment',
            field: 'rate',
        },
        {
            title: 'Credit Days',
            field: 'creditDays',
        }
    ]);

    const [data, setData] = useState([
        { dealerName: 'GSK', address: 'Erode', expireDate:"", phoneNumber: 9976322613, paymentMethod: 'Card',lastPayment:'65400',creditDays:30},
        { dealerName: 'Deepa Medical', address: 'Salem', phoneNumber: 8232382942,  paymentMethod: 'Cash',lastPayment:'34400',creditDays:60},
        
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

export default Dealer;