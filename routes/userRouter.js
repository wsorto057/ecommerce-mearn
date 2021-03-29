const router= require ('express').Router();
const userController= require('../controllers/userController');
const auth =require('../middleware/auth');

/* router.post('/register', (req,res) =>{
    res.json({msg: "test router"})
}); */

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/refresh_token', userController.refreshToken);
router.get('/infor', auth, userController.getUser);

module.exports =router;

