import React from 'react';
import MaterialTable from 'material-table';
import PatientPurchase from './patientPurchase';
function PatientList({type}) {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },
        {
            title: 'Address',
            field: 'address',
            lookup: { 1: 'kolakkaranor', 2: 'Umareddiyur',3:'Ammapettai',4:'Nerinjipettai',5:'Poolambatti',6:'Mettur',7:'Boodapadi',8:'Guruvareddiyur',9:'Singampettai',10:'Chittar',11:'Bhavani' },
        },
        {
            title: 'Coins',
            field: 'coins',
        },
        {
            title: 'Repeat',
            field: 'repeatType',
            lookup:{1:'Yes',2:'No'}
        },
        {
            title: 'Repeat Date',
            field: 'repeatDate',
            type:'date'
        },
    ]);

    const [data, setData] = useState([
        { name: type=="general" ? '' :'Pradeep', phoneNumber: 9976322613, address: 1 , coins:'10',repeatType:1,repeatDate:''},
        { name: type=="general" ? '' :'Mani', phoneNumber: 993826778, address: 2 , coins:'5',repeatType:1,repeatDate:''},
    ]);

    return (
        <div>
            <MaterialTable
                title="Customer List"
                columns={columns}
                data={data}
                options={{
                    grouping: false,
                    actionsColumnIndex: -1
                  }}
                  detailPanel={[
                    {
                      tooltip: 'Show Name',
                      render: rowData => {
                        return (
                            <React.Fragment>
                              {/* <Button variant="contained">Default</Button> */}
                             <PatientPurchase title={rowData.name} />
                          </React.Fragment>
                        )
                      },
                    },
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

export default PatientList;