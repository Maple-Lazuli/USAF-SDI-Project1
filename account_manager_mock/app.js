const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = 6001
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

app.get('/supervisor/:id', (req, res) => { //return the user's supervisor and start date.
    supervisor = {
        supervisorID: '',
        DateOfSupervison: '',
    }
    unit.forEach(airmen => {
        airmen.subordinates.forEach(subordinate => {
            if ((subordinate.subordinateID == req.params.id) && (supervisor.supervisorID === '')){
                supervisor.supervisorID = airmen.userid
                supervisor.DateOfSupervison = subordinate.DateOfSupervison
            }
            
        })
    })
    if (supervisor.supervisorID === '') {
        res.status(400).send("No Supervisor Found")
    } else {

        res.status(200).send(supervisor)
    }

})


app.listen(port, () => console.log(`Account Manager Mock app listening at http://localhost:${port}`))



