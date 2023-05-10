export const isAdmin = (req, res, next) => {
    if(!req.user){
        res.status(404).json({message: 'Not found'})
    }

    let user_role = req.user.role;

    if(user_role == 'admin'){
        next();
    }else{
        res.status(403).json({message: 'Access Forbidden'})
    }
}