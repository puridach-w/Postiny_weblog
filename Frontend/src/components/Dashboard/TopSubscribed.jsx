import React, { useState, useEffect } from 'react';
import "../../css/topsubscribed.css"
import Axios from "axios"
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
 } from '@material-ui/core';


function TopSubscribed() {
  const [topsub, setTopsub] = useState([]);

  useEffect( () => {
    Axios.get('http://localhost:8080/getTopSubscribe').then((response) => {
      setTopsub(response.data);
    });
  }, []);

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
                  {topsub.map((row, count) => (
                    <TableRow key={count}>
                      <TableCell style={{borderBottom:"none"}} className="tscell">
                        <div className="idContainer">
                        {count+1}
                        </div>
                      </TableCell>
                      <TableCell style={{borderBottom:"none"}} className="tscell">
                          <div className="tsimg">
                              <img alt="" src={row.profile_pic === null ? "/pony-profile.jpg" 
                                : 
                                "http://localhost:8080" + `/image/${row.profile_pic}`}
                              />
                          </div>
                          <div className="tsname">
                              {row.firstname} {row.lastname}
                          </div>
                          <div className="tssubcount">
                              + {row.subCount} Subscribers
                          </div>
                          <div className="tscategory">
                              {row.category_name}
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