const router = require("express").Router()
const Message = require("../Models/Message")

router.post("/",async(req,res)=>{
    const newMessage = new Message(req.body);
    try {
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
    } catch (err) {
        res.status(200).json(err)
    }
});

router.get("/:id",async(req,res)=>{
    try {
        const messages = await Message.find({
            conversationId : req.params.id,
        })
        res.status(200).json(messages)
    } catch (err) {
        res.status(200).json(err)
    }
})



module.exports=router