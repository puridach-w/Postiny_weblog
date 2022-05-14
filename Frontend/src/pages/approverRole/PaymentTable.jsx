import React from 'react';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/EditRounded';
import "../../css/pages_css/approverRole/payment.css"

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
 } from '@material-ui/core';


function PaymentTable(props) {

  return (
	<div>
       <TableContainer className="tableContainer">
        <Table className="table-payment">
          <TableHead>
            <TableRow>
              <TableCell style={{ paddingLeft: '2rem'}} width="120px" className="tableHeaderCell">Id</TableCell>
              <TableCell width="200px" className="tableHeaderCell">Username</TableCell>
              <TableCell width="180px" className="tableHeaderCell">Amount</TableCell>
              <TableCell width="200px" className="tableHeaderCell">Date</TableCell>
              <TableCell width="180px" className="tableHeaderCell">Status</TableCell>
			        <TableCell width="180px" className="tableHeaderCell"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.data.map((row) => (
              <TableRow key={row.payment_id}>
                <TableCell className="cell">
                  {row.payment_id}
                </TableCell>
                <TableCell className="cell">
                  {row.username}
                </TableCell>
                <TableCell className="cell">
                  {row.amount}
                </TableCell>
                <TableCell className="cell">
                  {row.created_at.substring(0,10)}
                </TableCell>
                <TableCell className="cell">
                    <Typography 
                      className="status"
                      style={{
                          backgroundColor: 
                          (
                            (row.status_name === 'Approved' && '#189A25') ||
                            (row.status_name === 'Pending' && '#EEBE16') ||
                            (row.status_name === 'Rejected' && '#C12323')
                          ),
                      }}
                    >{row.status_name}
                    </Typography>
				</TableCell>
				<TableCell>
					<Button
						variant="contained"
						endIcon={<Edit />}
						onClick={() => {
              props.callForModal(row);
						}}
					>
					Manage
					</Button>
				</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer> 
	</div>
  );
  }
  
  export default PaymentTable;