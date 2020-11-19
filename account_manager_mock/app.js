const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = 6000
const fs = require('fs');
let unit = JSON.parse(fs.readFileSync("unitData.json"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())



app.get('/users', function (req, res) { //return all users to testing and debugging 

    res.send(unit)
})

//note:the user IDs are created by the Authentication service
app.get('/users/:id', (req, res) => { //get the user by ID
    console.log(`got request ${req.params.id}`)
    res.send(unit
        .map(user => {
            temp = { ...user }
            delete temp.subordinates
            delete temp.subIDs
            return temp
        }).filter(user =>
            user.userid == req.params.id)[0])
})

app.get('/subordinates/:id', (req, res) => { //get the user's troops
    res.send(unit.filter(user =>
            user.userid == req.params.id)
            .map(user => {
                return user.subordinates
            })[0])
})

app.get('/usersWithTroops/', (req, res) => { //get all users with troops
    res.send(unit.filter(user =>
            user.subordinates.length != 0)
            .map(user => {
                return `user: ${user.userid}, `
            })
    )
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



