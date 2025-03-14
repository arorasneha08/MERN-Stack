const reqFilters = (req, res, next)=>{
    if(!req.query.age){
        res.send("please enter a valid age "); 
    }
    else if(req.query.age < 18){
        res.send("You can not access this page"); 
    }
    else{
        next(); 
    }
}

module.exports = reqFilters; 