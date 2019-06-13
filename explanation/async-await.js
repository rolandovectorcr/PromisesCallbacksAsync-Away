async function requestHandler(req, res){  

    try{
        const user = await User.findById(req.userId);
        const task = await task.findById(user.taskId);
        task.completed = true;
        res.send('Task Completed');

    }catch(e){

    }
   
}