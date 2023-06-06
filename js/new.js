
function requestOrder(){

    console.log("Order request accepted");
}
function requestProcessed(){
    console.log("Order Processed");
}

function orderPacked(){
    console.log("Order packed");
}
function orderOutForDelivery(){
    console.log("Order out for delivery");

}
function delivered(){
    console.log("Delivered");
}

function OrderStatus(){

    setTimeout(requestOrder,5000);
    setTimeout(requestProcessed,10000);
    setTimeout(orderPacked,7000);
    setTimeout(orderOutForDelivery,20000);
    setTimeout(delivered,250000);
}

OrderStatus();
