import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ApexChart from '../../components/chart';
import PieChart from '../../components/chart/pie';


const useStyles = makeStyles((theme) => ({
  paper: {
   margin:'24px',
   padding:'24px',
  },
}));


function Dashboard(){
    const classes = useStyles();
    return (
        <div >
         <Paper className={classes.paper}><ApexChart /></Paper>
         <Paper className={classes.paper}><PieChart /></Paper>
         {/* <Paper className={classes.paper}><ApexChart /></Paper> */}
       </div>
    );
}
export default Dashboard;