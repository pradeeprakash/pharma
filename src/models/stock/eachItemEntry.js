import React from 'react';
import MaterialTable from 'material-table';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor:"#273035"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({title}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Stocks
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
         <EachItemEntry title={title}/>
        </List>
      </Dialog>
    </div>
  );
}

function EachItemEntry({ title }) {
    const { useState } = React;

    const [columns, setColumns] = useState([
        // { title: 'S.No', field: 'sno' },
        { title: 'Product Code', field: 'productCode' },
        { title: 'Expire Date', field: 'expireDate',type:'date' },
        { title: 'Batch No', field: 'batchNo' },
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
        { sno: "1", productCode: "1001",expireDate:'',batchNo:"4", stocky:1,productName: 'Cold 5mg tablet', packingType: "ml", packingVolume: "50", quantity: "86", ptr: "100", ptrGST: "5%", totalPTR: "105", mrp: "205", discount: "10%", sellingPrice: "180" },
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

// export default EachItemEntry;