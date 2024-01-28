const fs = require('fs')

const tours = JSON.parse(fs.readFileSync('./dev-data/data/tours-simple.json')) 

exports.postTour = (req, res)=>{
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({id:newId}, req.body)
    tours.push(newTour)
    
    fs.writeFile('./dev-data/data/tours-simple.json', JSON.stringify(tours), (err)=>{
        console.log(err)
        res.status(201).json({
            status:'success',
          data:{tour:newTour},
        })
    })
    }

    exports.CheckPost = (req, res, next) =>  { 
        if(!req.body.name || !req.body.price){
            return res.status(400).json({
                status:'fail',
                message:'Missing name or price'
            })
        }
        next()
    }
    
    exports.getTours = (req, res)=>{
        res.status(200).json({
            status: 'success',
            data: { 
                tours
            },
        })
    }
    
    exports.getOneTour = (req, res)=>{
        const id = Number(req.params.id)
        const tour = tours.find(item => item.id === id)
    
        // if(!tour){
        //     return res.status(401).json({
        //         status:'failed',
        //         message:'Invalid ID'
        //     })
        // }
    
        res.status(200).json({
            status: 'success',
            data: { 
                tour
            },
        })
    }
    

    exports.CheckID = (req, res, next, value) => {
        const id = value * 1
        const tour = tours.find(tour=> tour.id === id)
        if(!tour){
            return res.status(401).json({
                status:'error',
                message:'Invalid ID'
            })
        }
        next()
        }