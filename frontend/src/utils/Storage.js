const Storage = (function(){
    let userData = {}
    function storeUserData(data){
        userData=data
    }
    function getUserData(){
        return userData
    }

    return{
        storeUserData,
        getUserData
    }
})()

export default Storage