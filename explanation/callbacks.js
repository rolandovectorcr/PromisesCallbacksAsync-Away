function requestHandler(req, res){
    User.fincById(req.userId, function(err, user){
        if(err){
            res.send(err);
        }else{
            Tasks.findById(user.taskbyId, function(err, task){
                if (err){
                    return res.send(err);
                } else{
                    tasks.completed = true;
                    task.save(function(err){
                        if(err){
                            return res.send(err);
                        }else{
                            res.send('Task completed');
                        }
                    })
                }
            })
        }
    })
}
