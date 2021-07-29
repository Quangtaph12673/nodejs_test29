import Book from '../model/bookModel';

export const listBook = (req, res) => {
    Book.find()
        .populate('category', '_id name')
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    err
                })
            }
            res.json({
                data
            })
        })

}

export const creatBook = (req, res) => {
    let book = new Book(req.body);
    book.save((err, data) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            data
        })
    })
}

export const bookID = (req, res, next, id) => {
    Book.findById(id).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        req.book = data;
        next();
    })
}

export const readBook = (req, res) => {
    return res.json(req.book);
}