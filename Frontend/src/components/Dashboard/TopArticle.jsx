import React, {useState} from 'react';
import "../../css/toparticle.css"



import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
 } from '@material-ui/core';


function TopArticle(props) {
	const [select, setSelect] = useState([]);
  const category = ["Technology", "Gaming", "Music", "Beauty", "Sports", "Art"];
    return (
	<div className='toparticle'>
      <div className="tatccontainer">
      <div>
            <div className="toparticleTitle">
            <select 
                          value={select}
                          onChange={ e => setSelect(e.target.value)}
                      >
                          {category.map( item => (
                              <option key={item} value={item}>{item}</option>
                          ))}
                  </select>
                <h2>Top 5 articles of this week</h2>
            </div>
            <div className="catselect">
                  {/* <select 
                          value={select}
                          onChange={ e => setSelect(e.target.value)}
                      >
                          {category.map( item => (
                              <option key={item} value={item}>{item}</option>
                          ))}
                  </select> */}
            </div>
       <TableContainer className="TAtableContainer">
        <Table className="table-topatc">
          <TableHead>
            <TableRow >
              <TableCell style={{ paddingLeft: '2rem', borderBottom:"none"}} width="65px" className="tatcHeaderCell">No.</TableCell>
              <TableCell style={{borderBottom:"none"}} width="280px" className="tatcHeaderCell">Article Title</TableCell>
              <TableCell style={{borderBottom:"none"}} width="65px" className="tatcHeaderCell">Like</TableCell>
              <TableCell style={{borderBottom:"none"}} width="65px" className="tatcHeaderCell">Comment</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.topATC.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                  <div className="idContainer">
                  {row.id}
                  </div>
                </TableCell>
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                    <div className="tatcimg">
                        <img alt="" src={row.cover}/>
                    </div>
                    <div className="tatctitle">
                        {row.title}
                    </div>
                    <div className="tatcauthor">
                        By {row.authorName}
                    </div>
                </TableCell >
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                  {row.like} Likes
                </TableCell>
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                  {row.comment} Comments
                </TableCell>
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
  
  export default TopArticle;