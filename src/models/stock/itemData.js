import React, { useState , useEffect} from 'react';
import MaterialTable from 'material-table';
import { useSnackbar } from 'notistack';
import EachItemEntry from './eachItemEntry';
import API from '../../api';

function CreateStock() {
    const [isLoading,setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    useEffect(()=>{
        getStocks();
    },[]);

    const getStocks = ()=>{
        setIsLoading(true);
         API.get('/product/products')
        .then(res=>{
            setData(res.data.data);
            console.log(res);
            setIsLoading(false);
        })
        .catch(err=>{
            setIsLoading(false);
            console.log(err);
        })
    }
    const [columns, setColumns] = useState([
        { title: 'Product Code', field: 'product_code'},
        { title: 'Product Name', field: 'product_name' },
        { title: 'HSN Name', field: 'hsn_name' },
        // { title: 'Packing Type', field: 'packingType' },
        // { title: 'Packing Volume', field: 'packingVolume' },
        { title: 'Quantity', field: 'quantity' },
        // {
        //     title: 'PTR',
        //     field: 'ptr',
        // },
        // {
        //     title: 'PTR GST%',
        //     field: 'ptrGST',
        // },
        {
            title: 'PTR (Include Tax)',
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

    const [data, setData] = useState([]);

    const handleRowAdd = (newData, resolve,reject)=>{
        API.post("/product/product",{data:newData})
        .then((res)=>{
            enqueueSnackbar('Product Added',{ variant: 'success',});
            resolve();
            getStocks();
        })
        .catch((err)=>{
            resolve();
            console.log(err,handleRowAdd);
        })
    }

    const handleRowUpdate = (newData, resolve,reject)=>{
        API.post("/product/product",{data:newData})
        .then((res)=>{
            getStocks();
            resolve();
        })
        .catch((err)=>{
            resolve();
            console.log(err,handleRowAdd);
        })
    }

    const handleRowDelete = (newData, resolve,reject)=>{
        API.delete(`/product/product/${newData.id}`)
        .then((res)=>{
            enqueueSnackbar('Product Deleted',{ variant: 'error',});
            getStocks();
            resolve();
        })
        .catch((err)=>{
            resolve();
            console.log(err,handleRowAdd);
        })
    }

    return (
        <div style={{ margin: "24px" }}>
            <MaterialTable
                isLoading={isLoading}
                title="Stock List"
                columns={columns}
                data={data}
                options={{
                    exportButton: true
                    // filtering: true,
                    // grouping: false
                }}
                detailPanel={[
                    {
                        tooltip: 'Show Name',
                        render: rowData => {
                            return (
                                <React.Fragment>
                                    {/* <Button variant="contained">Default</Button> */}
                                    <EachItemEntry title={rowData.productName} />
                                </React.Fragment>
                            )
                        },
                    },
                ]}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            handleRowAdd(newData, resolve,reject);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            handleRowUpdate(newData, resolve,reject);
                        }),
                    onRowDelete: data =>
                        new Promise((resolve, reject) => {
                            handleRowDelete(data, resolve,reject);
                        }),
                }}
            />
        </div>
    )
}

export default CreateStock;