import React from 'react';
import MaterialTable from 'material-table';
function SimpleAction() {
    const { useState } = React;

    function t (ch){
debugger
    }

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Phone Number', field: 'phone', type: 'numeric' },
        {
            title: 'City',
            field: 'city',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
        {
            title: 'City',
            field: 'city',
        },
        {
            title: 'City',
            field: 'city',
        },
        {
            title: 'City',
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
                title="Patient List"
                columns={columns}
                data={data}
                options={{
                    filtering: true,
                    grouping: false
                  }}
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
                            t(newData)
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
                            t(oldData)
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

export default SimpleAction;