import React from 'react';
import MaterialTable from 'material-table';
function PatientPurchase({title}) {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Medition Name', field: 'name' },
        { title: 'Place', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Price', field: 'phone', type: 'numeric' },
        {
            title: 'Tax',
            field: 'city',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
        {
            title: 'Discount',
            field: 'city',
        },
        {
            title: 'Totak',
            field: 'city',
        },
    ]);

    const [data, setData] = useState([
        { name: 'Pradeep', surname: 'Prakash', phone: 9976322613, city: 'Kolakaranoor' },
        { name: 'Mani', surname: 'Vasakam', phone: 993826778, city: 34 },
    ]);

    return (
        <div style={{margin:"24px"}}>
            <MaterialTable
                title={title}
                columns={columns}
                data={data}
                options={{
                    selection:true,
                    // filtering: true,
                    // grouping: false,
                    actionsColumnIndex: -1
                  }}
                  actions={[
                    {
                      icon: 'receipt',
                      tooltip: 'Save User',
                      onClick: (event, rowData) => alert("You saved " + rowData.name)
                    }
                ]}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve()
                            }, 1000)
                        }),
                }}
            />
        </div>
    )
}

export default PatientPurchase;