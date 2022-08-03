
module.exports = { getDate , getDay };


function getDate(){
    let today = new Date();
    // var currentDay = today.getDay();
    var options= {
    weekday:"long",
    day:"numeric",
    month:"long"
    };
    
    return today.toLocaleDateString("en-US",options);
    
}

function getDay(){
    let today = new Date();
    // var currentDay = today.getDay();
    var options= {
    weekday:"long",
    
    };
    
    return today.toLocaleDateString("en-US",options);
    
}