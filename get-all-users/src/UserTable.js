import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles({
  table: {
  minWidth: 650,
  marginTop:60,
  borderTopWidth: 1, borderColor: 'white',borderStyle: 'solid'
 
  },
  icon:{
    marginRight:30
  },
  rowstyle:{
    textTransform: 'uppercase',
   
    backgroundColor:'rgba(46, 212, 122, 1)',
  },
  Paper: {
    position: 'absolute',
    width: '100%',
    border: '2px solid #000',
  },
  modal:{
     marginTop:'20%',
     marginLeft:'35%',
    
  },
 
});


const rows = [
{name:'mugoboka',surname:'claude',nativelangwage:'kinyarwanda',langwageLearnt:1,DeleteIcon,EditIcon},
{name:'rukundo',surname:'jean de dieu',nativelangwage:'English',langwageLearnt:2,DeleteIcon,EditIcon},
{name:'kalisa',surname:'claude',nativelangwage:'kinyarwanda',langwageLearnt:4,DeleteIcon,EditIcon},
{name:'kamana',surname:'jille',nativelangwage:'kinyarwanda',langwageLearnt:5,DeleteIcon,EditIcon},
{name:'kamana',surname:'jille',nativelangwage:'kinyarwanda',langwageLearnt:5,DeleteIcon,EditIcon},
{name:'kamana',surname:'jille',nativelangwage:'kinyarwanda',langwageLearnt:5,DeleteIcon,EditIcon},
{name:'kamana',surname:'jille',nativelangwage:'kinyarwanda',langwageLearnt:5,DeleteIcon,EditIcon},
{name:'kamana',surname:'jille',nativelangwage:'kinyarwanda',langwageLearnt:5,DeleteIcon,EditIcon},
{name:'kamana',surname:'jille',nativelangwage:'kinyarwanda',langwageLearnt:5,DeleteIcon,EditIcon},

];

const UserTable=()=> {
//deleteuser
const [index, setIndex] = useState('');
const [state,setState]=useState(rows)

//dialog delete button state
const [open, setOpen] = React.useState(false);

 //table pagination state

 const [page, setPage] = useState(0);
  
 const [rowsPerPage, setRowsPerPage] = useState(5);

  //searching user
 
const [filter,setFilter]=useState("");

//search user method handler
const handleSearchChange=(e)=>{
  setFilter(e.target.value)
  
}

  const handleOpen=(index)=>{
    setIndex(index)
    setOpen(true);

  }

  const handleClose = () => {
    setOpen(false);
  };

const handleDelete=()=>{
  setState( rows.splice(index,1));
  setOpen(false);
}
 
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(+event.target.value, 10));
    setPage(0);
  };

  const emptyRows=rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const classes = useStyles();
  
  return (
    
    <TableContainer component={Paper} > 
    <div >
    <div>

      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={open}
        
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
      >

        <div  style={{background:'purple'}}   className={classes.Paper}>
          <h2 id="server-modal-title">are you sure you  want to delete This person</h2>
          <div>
         <button onClick={handleDelete} >yes</button>

         <button onClick={handleClose}>no</button>
         
        </div>
        </div>


      </Modal>

    </div>

    <div style={{cursor:'pointer', float:'right'} } >
  <button className={classes.icon}><i  className="material-icons"  > person_add </i></button>

</div>


<TextField
   onChange={handleSearchChange}
      
        style={{width:'350px',float:'right',paddingLeft:'300',borderRadius:'4%',marginRight:'2%'}}
        placeholder='Search'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
       
          ),
       
        }}
      />
    
      <Grid style={{marginLeft:'1%'}}>
        <h1 style={{color:'#000000'}}>User Informations</h1>
          
      </Grid>
    </div>
     
      <Table className={classes.table} aria-label="customized table">

      <TableHead className={classes.rowstyle}>

          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell>surName</TableCell>
            <TableCell>Native Langwage</TableCell>
            <TableCell>langwage Learnt</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>

        </TableHead>



        <TableBody > 
          {rows    
          
          .slice(page*rowsPerPage,page*rowsPerPage + rowsPerPage)
          .map((row,index) => ( row.name.toLowerCase().includes(filter.trim().replace(" ").toLowerCase())&& 
          
          <TableRow key={index}>
            <TableCell > 
              {row.name}
            </TableCell>

            <TableCell>{row.surname}</TableCell>
          
            <TableCell>{row.nativelangwage}</TableCell>

            <TableCell>{row.langwageLearnt}</TableCell>

            <TableCell>

         <EditIcon style={{color:'blue',marginRight:'15'}}/>
        <DeleteIcon  onClick={()=>handleOpen (index)} style={{color:'red'}}/>
       

            </TableCell>     
            </TableRow>
            
            ))    
        }
       {emptyRows > 0 && (
            <TableRow style={{ height:53 * emptyRows }}>
            <TableCell colSpan={6} />
            </TableRow>
              )}

        </TableBody>

      </Table>

<TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        
    </TableContainer>
  );
}
export default UserTable;
