import React from "react";
import ListEachItem from "./ListEachItem";

function listTransaction(props){
    const payments = props.payment;
    const subscribes = props.subscription;

    return (
        <div> 
        {payments.map(item =>
                <ListEachItem
                    type="Recieve"
                    amount={item.amount}
                    create={item.create}
                />
            )}
        {subscribes.map(item =>
            <ListEachItem 
                type="Paid"
                amount="20"
                create={item.create}
            />
        )}
        </div>
      );
}

export default listTransaction;
