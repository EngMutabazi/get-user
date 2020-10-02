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

const useStyles = makeStyles({
  table: {
  minWidth: 650,
  marginTop:60,
 
  },
  icon:{
    marginRight:30
  },
  rowstyle:{
    textTransform: 'uppercase',
   
    backgroundColor:'rgba(46, 212, 122, 1)',
  },
});
const rows = [
{name:'mugoboka',surname:'claude',nativelangwage:'kinyarwanda',langwageLearnt:1,DeleteIcon,EditIcon},
{name:'rukundo',surname:'jean de dieu',nativelangwage:'English',langwageLearnt:2,DeleteIcon,EditIcon},
{name:'kalisa',surname:'claude',nativelangwage:'kinyarwanda',langwageLearnt:4,DeleteIcon,EditIcon},
{name:'kamana',surname:'jille',nativelangwage:'kinyarwanda',langwageLearnt:5,DeleteIcon,EditIcon},
{name:'kanakuze',surname:'claudette',nativelangwage:'kinyarwanda',langwageLearnt:7,DeleteIcon,EditIcon},
{name:'kanakuze',surname:'claudette',nativelangwage:'kinyarwanda',langwageLearnt:7,DeleteIcon,EditIcon},
{name:'kanakuze',surname:'claudette',nativelangwage:'kinyarwanda',langwageLearnt:7,DeleteIcon,EditIcon},
{name:'kanakuze',surname:'claudette',nativelangwage:'kinyarwanda',langwageLearnt:7,DeleteIcon,EditIcon},
{name:'mutabazi',surname:'Elyse',nativelangwage:'English',langwageLearnt:7,DeleteIcon,EditIcon},
{name:'mugoboka',surname:'claude',nativelangwage:'kinyarwanda',langwageLearnt:1,DeleteIcon,EditIcon},
{name:'mugoboka',surname:'claude',nativelangwage:'kinyarwanda',langwageLearnt:1,DeleteIcon,EditIcon}
];


const UserTable=()=> {


  //deleting user
  const[rowDelete,setRawDelete]=useState([...rows]);


  const handleDelete=(id)=>{

    console.log(rowDelete.indexOf(rows.name));
  
    let del=rows.splice(rowDelete,1);

    setRawDelete(del);
  }

  //searching user
 
const [filter,setFilter]=useState("");

const handleSearchChange=(e)=>{
  setFilter(e.target.value)
  
}
  const classes = useStyles();

  //table pagination

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows=rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <TableContainer component={Paper} style={{ border: '1px solid green'}}> 
    <div >
    <div style={{cursor:'pointer', float:'right'} } >
  <button className={classes.icon}><i  className="material-icons"> person_add </i></button>

</div>
<input
        type="text"
        style={{width:'200px',float:'right',paddingLeft:'300',borderRadius:'4%',}}
        placeholder="Search"
        onChange={handleSearchChange}
      />
      <Grid style={{marginLeft:'1%'}}>
        <h1 style={{color:'#23B666'}}>User Informations</h1>
          
      </Grid>
    </div>
     
      <Table className={classes.table} size="small" aria-label="a dense table">

      <TableHead className={classes.rowstyle}>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell>surName</TableCell>
            <TableCell>Native Langwage</TableCell>
            <TableCell>langwage Learnt</TableCell>
            <TableCell>delete</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
       
        </TableHead>
        <TableBody > 

          {rows    
          
          .slice(page*rowsPerPage,page*rowsPerPage + rowsPerPage)
          .map((row,index) => ( row.name.toLowerCase().includes(filter.trim().replace(" ").toLowerCase())&&
          
          <TableRow key={index} >
            <TableCell > 
              {row.name}
            </TableCell>

            <TableCell>{row.surname}</TableCell>
          
            <TableCell>{row.nativelangwage}</TableCell>

            <TableCell>{row.langwageLearnt}</TableCell>

            <TableCell>

           <button onClick={handleDelete}> <DeleteIcon /></button>

            </TableCell>

            <TableCell>

           <button> <EditIcon /></button>
    
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
          rowsPerPageOptions={[5]}
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
