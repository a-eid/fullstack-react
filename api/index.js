import express from 'express' 
import data from "../src/testData"


const router = express.Router() 
router.get('/' , (req , res) => {
  res.send("this is an api route")
})

router.get('/data' , (req , res) => {
  res.json(data.contests)
  // res.send({data: data.contests})
})

export default router