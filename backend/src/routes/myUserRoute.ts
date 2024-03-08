import express from 'express';
import MyUserController from '../controllers/MyUserController';

const router = express.Router();

// when request will be "/api.my/user" and that is a post request this will be sending it to the controller name MyUserController and controller will call createCurrentUser function

router.post('/',MyUserController.createCurrentUser);

export default router;