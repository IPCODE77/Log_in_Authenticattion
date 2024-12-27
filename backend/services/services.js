const sessionidToUser = new Map();


function setUser(id,user){
    console.log("in setUser")
    sessionidToUser.set(id,user);
}

function getuser(id,User){
    return sessionidToUser.get(id,User);
}

module.exports = {setUser,getuser}