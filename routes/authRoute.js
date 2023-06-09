import express from "express"
import {registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,} from "../controllers/authController.js"
import { isAdmin, requireSignIn} from "../middleware/authMiddleware.js"
//route object
const router = express.Router()

//routuing
//register
router.post('/register',registerController)
//LOGIN {{ Poat}}
router.post('/login',loginController)
//Forget Password
router.post('/forgot-password',forgotPasswordController)
//tst
router.get('/test',requireSignIn,isAdmin,testController)
//protected route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});
//admin
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});
//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router
