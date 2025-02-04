import UserModel from ("../models/User.model.js")

async function attachCurrentUser(req, res, next) {
    try {
        const loggedInUser = req.auth;
    
        const user = await UserModel.findById(loggedInUser._id, {
          passwordHash: 0,
        });
    
        req.currentUser = user;
    
        next();
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
}

export default attachCurrentUser