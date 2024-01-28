const fs = require('fs')

const users = JSON.parse(fs.readFileSync('./dev-data/data/users.json', 'utf-8'))

exports.getUsers = (req, res) =>{
res.status(200).json({
    status:'success',
    data:{
        users
    }
})
}

exports.getOneUser = (req, res) =>{
    const id = req.params.id
const user = users.find((user) => user._id === id)
if(!user){
   return res.status(401).json({
        status:'error',
        message:'Invalid ID'
    })
}
res.status(200).json({
    status:'success', 
    data:{
        user
    }
})
}