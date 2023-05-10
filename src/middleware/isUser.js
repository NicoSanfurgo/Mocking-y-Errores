export const isUser = (req, res, next) => {
    if(!req.user){
        res.status(404).json({message: 'Not found'})
    }

    let user_role = req.user.role;

    if(user_role == 'user'){
        next();
    }else{
        res.status(401).json({message: 'Only users can do this action'})
    }
}