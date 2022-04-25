import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/EditRounded';
import "../../css/pages_css/adminRole/adminRP.css"



import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';


function AdminTable(props) {
	
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }


    return (
	<div className='admin'>
      
      <div>
       <TableContainer className="tableContainer">
        <Table className="table-admin">
          <TableHead>
            <TableRow>
              <TableCell style={{ paddingLeft: '2rem'}} width="180px" className="tableHeaderCell">Report id</TableCell>
              <TableCell width="120px" className="tableHeaderCell">Type</TableCell>
              <TableCell width="150px" className="tableHeaderCell">Username</TableCell>
              <TableCell width="150px" className="tableHeaderCell">Date</TableCell>
              <TableCell width="150px" className="tableHeaderCell">Status</TableCell>
			  <TableCell width="100px" className="tableHeaderCell"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.report.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell className="cell">
                  {row.id}
                </TableCell>
                <TableCell className="cell">
                  {row.type}
                </TableCell>
                <TableCell className="cell">
                  {row.username}
                </TableCell>
                <TableCell className="cell">
                  {row.date}
                </TableCell>
                <TableCell className="cell">
                    <Typography 
                      className="status"
                      style={{
                          backgroundColor: 
                          (
                            (row.status === 'Approved' && '#189A25') ||
                            (row.status === 'Pending' && '#EEBE16') ||
                            (row.status === 'Rejected' && '#C12323')
                          ),
                      }}
                    >{row.status}
                    </Typography>
				</TableCell>
				<TableCell>
					<Button
						variant="contained"
						endIcon={<Edit />}
						onClick={() => {
							props.callModal(row);
						}}
					>
					Manage
					</Button>
					
				</TableCell>
              </TableRow>
            ))}

          </TableBody>

          <TableFooter className='table-footer'>
            <TablePagination
              rowsPerPageOptions={[5]}
              component="div"
              count={props.report.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
      </div>
	</div>
    );
  }
  
  export default AdminTable;