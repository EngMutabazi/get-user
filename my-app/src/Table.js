import React,{ useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchBar from "material-ui-search-bar";


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
];

export default function DenseTable() {
  const classes = useStyles();
  
  const[page,setPage]=React.useState(0);
  const[rowsPerPage,setRowsPerPage]=React.useState(5);


  const handleChangePage=(event,newPage)=>{
    setPage(newPage);
  }
  const handleRowsPerPage=e=>{
    setRowsPerPage(parseInt(e.target.value,10))
    setPage(0)
  }

  const handleSearch=()=>{
   
  

  
  }


  const emptyRows=rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  

  
  return (
    <TableContainer component={Paper} style={{ border: '1px solid green'}}> 
    <div >
    <div style={{cursor:'pointer', float:'right'} } >
  <button className={classes.icon}><i  className="material-icons"> person_add </i></button>

</div>

<SearchBar
    placeholder='Search-user' 

    style={{float:'right',backgroundColor:'#F8F2F1',marginRight:'2%'}} onChange={handleSearch}

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

         
          .slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
          
          .map((row,index) => (

          <TableRow key={index} >
            
            <TableCell >
              {row.name}
            </TableCell>

            <TableCell>{row.surname}</TableCell>

            <TableCell>{row.nativelangwage}</TableCell>

            <TableCell>{row.langwageLearnt}</TableCell>

            <TableCell>

            <DeleteIcon />

          </TableCell>

          <TableCell>

          <EditIcon />
    
        </TableCell>
          </TableRow>
            
            ))}
           {emptyRows > 0 && (
            <TableRow style={{ height:53 * emptyRows }}>
            <TableCell colSpan={6} />
            </TableRow>
              )}
        </TableBody>
      </Table>
      <TablePagination
     rowsPerPageOptions={[5,10]}
     component='div'  
     count={rows.length} 
     rowsPerPage={rowsPerPage}  
     page={page}
     onChangePage={handleChangePage}     
     onChangeRowsPerPage={handleRowsPerPage}
    
          
        />
    </TableContainer>
  );
}
