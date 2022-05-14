import React,{useEffect,useState} from "react";
import GoBackBtn from "../components/gobackbtn";
import { useParams } from "react-router";
import "../css/subscribe.css"
import Axios from "axios";

export default function Subscribe() {
    const {id} = useParams();
    const user_id = localStorage.getItem("user_id");
    const [authorData,setAuthorData] = useState([]);
    const [userData,setUserData] = useState([]);


    useEffect( () => {
        Axios.get(`http://localhost:8080/currentuser/${id}`).then((response) => {
            setAuthorData(response.data[0]);
        })
        Axios.get(`http://localhost:8080/currentuser/${user_id}`).then((response) => {
            setUserData(response.data[0]);
        })
    }, []);

    const updateBalanceUser = () => {
        Axios.patch("http://localhost:8080/updateBalanceUser",{
            user_id: user_id,
            amount: 20
        });
    }

    const updateBalanceAuthor = () => {
        Axios.patch("http://localhost:8080/updateCoinbalance",{
            user_id: id,
            amount: 20
        });
    }

    const subscribe = () => {
        Axios.post('http://localhost:8080/subscribe',{
            user_id: user_id,
            author_id: id
        }).then((response) => {
            setUserData(response.data);
        })
    }

    function handleClick() {
        if(userData.coin_balance < 20){
            alert("Your coin is not enough please topup your balance");
            window.location = "/topup";
        }else{
            subscribe();
            updateBalanceUser();
            updateBalanceAuthor();
            alert("Thank for subscribe");
            window.location = `../../profile/${id}`
        }
    }


    return (
        <div className="subscribeuser">
        <GoBackBtn />
            <div className="subcontainer1">
                <div className="subsummary">
                    <h2>Subscription</h2>
                    <div className="subprofileimg">
                        <img alt="" src={authorData.role_id === 1 ? "/admin.jpg" :
                            authorData.role_id === 2 ? "/approver.jpg" :
                            authorData.profile_pic === null ? 
                            "/pony-profile.jpg" : "http://localhost:8080" + `/image/${authorData.profile_pic}`}/>
                    </div>
                <div className="subuserDetail">
                    <h3 className="subname">{authorData.firstname} {authorData.lastname}</h3>
                </div>
                <div className="subdescription">
                    <h4>Support and Subscribe to help {authorData.firstname} keep writing wonderful articles</h4>
                    <div className="subButtons">
                        <button className="subscribeuserbtn" onClick={handleClick}>subscribe with 20 coins </button>
                    </div>
                </div>
            </div>
        </div>
        
        
        </div>
    );
}

