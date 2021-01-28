const {fetchDishes,createDish}=require('../../controllers/dishes')
const route = require('express').Router()


route.get('/',async(req,res)=>{
    //Get all dishes
    const dishes=await fetchDishes()
    res.status(200).json(dishes)
})
route.post('/',async(req,res)=>{
    //add a new dish
    const dish = await createDish(
        req.body.title,
        req.body.content,
        1 // TODO: use actual user id from req.user.id
    )
    req.send(dish)
})
route.get('/:id',(req,res)=>{
    //fetch a particular article
})
route.get('/:id/comments',(req,res)=>{
    //fetch commments of a particular dish
})


module.exports=route