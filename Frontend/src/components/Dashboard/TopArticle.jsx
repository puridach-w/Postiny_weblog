import React, {useState, useEffect} from 'react';
import Axios from "axios";
import "../../css/toparticle.css"
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
 } from '@material-ui/core';


function TopArticle() {
  const [category, setCategory] = useState(1);
	const [select, setSelect] = useState([]);
  const [articleData, setArticleData] = useState([]);

  useEffect( () => {
    Axios.get('http://localhost:8080/getcategory').then((response) => {
      setSelect(response.data);
    });

    Axios.get('http://localhost:8080/getTopArticle').then((response) => {
      setArticleData(response.data);
    });
  }, []);

  const filterCategory = articleData.filter( (blog) => {
    return blog.category_id == category;
  })

  return (
	<div className='toparticle'>
      <div className="tatccontainer">
      <div>
            <div className="toparticleTitle">
            <select 
                value={category}
                onChange={ e => setCategory(e.target.value)}
            >
            {select.map( item => (
                <option key={item.category_id} value={item.category_id}>{item.category_name}</option>
            ))}
            </select>
            <h2>Top 5 articles of this week</h2>
            </div>
       <TableContainer className="TAtableContainer">
        <Table className="table-topatc">
          <TableHead>
            <TableRow >
              <TableCell style={{ paddingLeft: '2rem', borderBottom:"none"}} width="65px" className="tatcHeaderCell">No.</TableCell>
              <TableCell style={{borderBottom:"none"}} width="280px" className="tatcHeaderCell">Article Information</TableCell>
              <TableCell style={{borderBottom:"none"}} width="65px" className="tatcHeaderCell">Like</TableCell>
              <TableCell style={{borderBottom:"none"}} width="65px" className="tatcHeaderCell">Comment</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filterCategory.slice(0, 5).map((row, count) => (
              <TableRow key={count}>
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                  <div className="idContainer">
                  {count+1}
                  </div>
                </TableCell>
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                    <div className="tatcimg">
                        <img alt="" src={"http://localhost:8080" + `/image/${row.article_pic}`}/>
                    </div>
                    <div className="tatctitle">
                        {row.title}
                    </div>
                    <div className="tatcauthor">
                        By {row.firstname} {row.lastname}
                    </div>
                </TableCell >
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                  {row.likeCount} Likes
                </TableCell>
                <TableCell style={{borderBottom:"none"}} className="tatccell">
                  {row.commentCount} Comments
                </TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </div>
	</div>
    );
  }
  
  export default TopArticle;