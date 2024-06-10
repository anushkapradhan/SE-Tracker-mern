const model = require('../models/model');

// post: http://localhost:8081/api/categories
async function create_categories(req, res){
    const Create = new model.Categories({
        type: "Investment",
        color: "#FCBE44", //dark
    }); 
    try{
        await Create.save();
        res.status(201).json("Category created successfully");
    } catch (error) {
        return res.status(400).json({message: `Error while creating categories ${err}`});
    }
}

// get: http://localhost:8081/api/categories
async function get_categories(req, res){
    try{
        let data = await model.Categories.find({});
        let filter = await data.map(v => Object.assign({}, {type: v.type, color: v.color}));
        return res.json(filter);
    } catch(error){
        return res.status(400).json({message: `Error while getting categories ${err}`});
    }
}

// post: http://localhost:8081/api/transaction
async function create_transaction(req, res){
    try{
        if(!req.body) return res.status(400).json({messgae:"Post HTTP Data not provided"});
        let { name, type, amount } = req.body; // destructing the body

        const create = await new model.Transaction(
            {
                name, 
                type, 
                amount,
                date: new Date()
            }
        );

        /*const create = new model.Transaction({
            name: "Rent",
            type: "Expense",
            amount: "20000",
            date: new Date()
        }); */

        create.save();
        res.status(201).json({message: "Transaction created successfully!"});
    } catch (error){
        return res.status(400).json({message: `Error while creating transaction ${err}`});
    }
}

// get: http://localhost:8081/api/transaction
async function get_transaction(req, res){
    try{
        let data = await model.Transaction.find({});
        return res.json(data);
    }catch (error){
        return res.status(400).json({message: `Error while getting transaction ${err}`});
    }
}

// delete: http://localhost:8081/api/transaction
async function delete_transaction(req, res){
    try{
        if(!req.body) res.status(400).json({messgae: "Request body not found"});
        await model.Transaction.deleteOne(req.body);
        res.json("Record Deleted!");
    }catch (error){
        return res.status(400).json({message: `Error while deleting transaction ${err}`});
    }
}

// get: http://localhost:8081/api/labels
async function get_labels(req, res){
    model.Transaction.aggregate([
        {
            $lookup:{
                from: "categories",
                localField: "type",
                foreignField: "type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result => {
        let data = result.map(v => Object.assign({}, {_id: v._id, name: v.name, type: v.type, amount: v.amount, color: v.categories_info['color']}));
        res.json(data);
    }).catch(error => {
        res.status(400).json("Lookup collection error");
    });
}

module.exports = {
    create_categories,
    get_categories,
    create_transaction,
    get_transaction,
    delete_transaction,
    get_labels
}