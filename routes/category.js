import express from "express";
import {
    listCate,
    readCate,
    removeCate,
    cateID,
    creatCate,
    editCate
} from "../controllers/categoryControllers";
const router = express.Router();

router.get('/category', listCate);
router.get('/category/:id', readCate);
router.post('/category', creatCate);
router.put('/category/:id', editCate);
router.delete('/category/:id', removeCate);

router.param('id', cateID);


module.exports = router;