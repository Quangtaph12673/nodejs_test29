import express from "express";
import {
    listBook,
    readBook,
    creatBook,
    bookID
} from "../controllers/bookControllers";
const router = express.Router();

router.get('/books', listBook);
router.get('/books/:id', readBook);
router.post('/books', creatBook);

router.param('id', bookID);


module.exports = router;