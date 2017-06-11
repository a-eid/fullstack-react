import express from 'express'
import data from "../src/testData"
const contests = data.contests.reduce((memo, contest) => {
  memo[contest.id] = contest
  return memo
}, {})

const router = express.Router()
router.get('/', (req, res) => {
  res.send("this is an api route")
})

router.get('/data', (req, res) => {
  res.json({
    contests,
    id: null
  })
})

router.get('/data/:id', (req, res) => {
  const contest = contests[req.params.id] 
  const id = req.params.id
  contest && (contest.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, necessitatibus fuga, architecto officiis dolores sequi ex unde culpa quibusdam eos neque iusto vero. Ex perspiciatis saepe officiis qui veritatis autem.")
  res.json( contest && { contests , id: 1 } || {message: "Contest not found"})
})

export default router