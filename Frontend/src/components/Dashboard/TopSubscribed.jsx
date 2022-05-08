import React, {useState} from 'react';
import "../../css/topsubscribed.css"
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
 } from '@material-ui/core';


function TopSubscribed(props) {
    return (
	<div className='topsubscribed'>
      <div className="tsscontainer">
      <div>
            <div className="topsubscribedTitle">
                <h2>Top 5 subscribed users</h2>
            </div>
       <TableContainer className="TStableContainer">
        <Table className="table-topsc">
          
          <TableBody>
            {props.topSU.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{borderBottom:"none"}} className="tscell">
                  <div className="idContainer">
                  {row.id}
                  </div>
                </TableCell>
                <TableCell style={{borderBottom:"none"}} className="tscell">
                    <div className="tsimg">
                        <img alt="" src={row.authorAvatar}/>
                    </div>
                    <div className="tsname">
                        {row.firstname} {row.lastname}
                    </div>
                    <div className="tssubcount">
                        + {row.newSubCount} Subscribers
                    </div>
                    <div className="tscategory">
                        {row.category}
                    </div>
                </TableCell >
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </div>
	</div>
    );
  }
  
  export default TopSubscribed;