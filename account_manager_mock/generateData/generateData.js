//Generate Data for the project :)
const fs = require('fs');

let numMembers = 10000
let ranks = ['AB', 'Amn', 'A1C', 'SrA', 'SSgt', 'TSgt', 'MSgt', 'SMSgt', 'CMSgt']
let genders = ['Male', 'Female']
let firstNames = fs.readFileSync("fnames.txt").toString().split("\n")
let lastNames = fs.readFileSync("lnames.txt").toString().split("\n")
let units = fs.readFileSync("units.txt").toString().split("\n")

//Fix case on last names
fixedLastNames = lastNames.map(name => {
    lame = name.toLowerCase()
    name = lame.charAt(0).toUpperCase() + lame.slice(1);
    return name
})
let serviceMemberTemplate = {
    firstName: '',
    lastName: '',
    userid: '',
    paygrade: '',
    rank: '',
    subordinates: [],
    gender: '',
}
let currentSM = {}
let unit = []

let subTemplate = {
    subordinateID: "",
    DateOfSupervison: ""

}

for (let i = 1; i < numMembers; i++) {
    currentSM = { ...serviceMemberTemplate }
    currentSM.firstName = firstNames[Math.floor((Math.random() * firstNames.length))]
    currentSM.lastName = fixedLastNames[Math.floor((Math.random() * fixedLastNames.length))]
    rankInt = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    currentSM.rank = ranks[rankInt - 1]
    currentSM.paygrade = `E-${rankInt}`
    currentSM.rankInt = rankInt //for ease of subordinate pairing in the mock
    currentSM.subIDs = [] // for ease of subordinate pairing in the mock
    currentSM.AFSC = "1Q251A"
    currentSM.unit = units[Math.floor((Math.random() * units.length))]
    day = Math.floor(Math.random() * (28 - 1 + 1) + 1);
    month = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    year = Math.floor(Math.random() * (2020 - 1990 + 1) + 1990);
    currentSM.subordinates = []
    currentSM.subIDs = []
    currentSM.DOR = `${month}-${day}-${year}`
    currentSM.userid = `user${i}`
    currentSM.gender = genders[Math.floor((Math.random() * genders.length))]

    //10 attempts to find a sub
    ii = i - 5
    if (ii > 20) {
        for (let j = 0; j < 10; j++) {
            if (rankInt > 4) {
                randoTroop = unit[Math.floor(Math.random() * (ii - 1 + 1) + 1)];
                if (!currentSM.subIDs.includes(randoTroop.userid))
                    if ((rankInt - randoTroop.rankInt == 1) || (rankInt - randoTroop.rankInt == 2)) {
                        temp = { ...subTemplate }
                        temp.subordinateID = randoTroop.userid;
                        day = Math.floor(Math.random() * (28 - 1 + 1) + 1);
                        month = Math.floor(Math.random() * (12 - 1 + 1) + 1);
                        year = Math.floor(Math.random() * (2020 - 1990 + 1) + 1990);
                        temp.DateOfSupervison = `${month}-${day}-${year}`
                        currentSM.subordinates.push(temp)
                        currentSM.subIDs.push(temp.subordinateID)
                    }
            }
        }
    }
    unit.push(currentSM)

}


fs.writeFileSync('../unitData.json', JSON.stringify(unit))



// studentJSON.forEach(student =>
//     logger.write(`INSERT INTO Student (fname,lname,gpa,gender, y) VALUES (${student.firstName},${student.lastName},${student.gpa},${student.gender},${student.year},);`)
// )