import React, {useEffect} from "react";
import ponystand from "../images/inhupony.png"
import "../css/newcat.css"
import Axios from "axios";

export default function NewCat() {
    
    const [getAllCategory,setGetAllCategory] = React.useState();
    var checkedCategory = [];
    var username = localStorage.getItem("username");
    const [user_id,setUser_Id] = React.useState([]);

    useEffect( () => {
        Axios.get('http://localhost:8080/getAllCategory').then((response) => {
            setGetAllCategory(response.data);
        });
      }, []);

    useEffect( () => {
        Axios.get('http://localhost:8080/userInfo').then((response) => {
            response.data.map(item => {
                if(item.username === username){
                    setUser_Id(item.user_id);
                }
            })
            })
    }, []);


    const addCategory = async (category_id) => {
        Axios.post('http://localhost:8080/addCategory', {
          user_id: user_id,
          category_id: category_id
        })
      }

    const submitCategory = () => {
        checkedCategory.map(item => {
            addCategory(item);
        })
        window.location = '/';
        localStorage.removeItem("username");
    }

    const handleChecked = (event) => {
        const id = event.target.value;
        const checked = event.target.checked; //true = checked false = unchecked
        if(checked){
            checkedCategory.push(id);
        } else{
            var newChecked = [];
            newChecked = checkedCategory.filter(function(item) {
                  return item !== id;
            });
            checkedCategory = newChecked;
        }
        }
    

    return (
        <div className="newcat">
            <br/> <br/> <br/>
            <div className="choosecat">
                <h2>Choose interested category</h2>
            </div>
            <div className="ccdetail">
                <h4>choose<span className="yellow"> at least 1 category </span>
                    of article that you would like to read</h4>
            </div>              
            <div className="container">
            <form action="" id="choosecat">
                {getAllCategory?.map( category => (
                <label className="option_item">
                    <input type="checkbox" value={category.category_id} onChange={(e) => {
                        handleChecked(e);
                    }} className="checkbox" />
                    <div className="option_inner">
                        <img alt="" src={"http://localhost:8080" + `/image/${category.category_icon}`}/>
                        <div className="name">{category.category_name}</div>
                    </div>
                </label>
                ))}
            </form>
                
            </div>
            <div className="ponystand">
                <img alt="" src={ponystand}/>
                <button type="button" onClick={submitCategory} form="choosecat">Start your journey</button>
            </div>
            
        </div>
    );
}