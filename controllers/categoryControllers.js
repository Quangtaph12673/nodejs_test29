import Category from '../model/categoryModel';

export const listCate = (req, res) => {
    Category.find((err, data) => {
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

export const creatCate = (req, res) => {
    let category = new Category(req.body);
    category.save((err, data) => {
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

export const cateID = (req, res, next, id) => {
    Category.findById(id).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        req.category = data;
        next();
    })
}

export const readCate = (req, res) => {
    return res.json(req.category);
}

export const removeCate = (req, res) => {
    let cate = req.category;
    cate.remove((err, data) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            message: "delete successfully"
        })
    })
}
export const editCate = (req, res) => {
    let category = req.category;
    let newCate = Object.assign(category, req.body);
    newCate.save((err, data) => {
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