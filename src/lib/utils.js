module.exports = {
    age(timestamp){
        
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        

        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
            console.log(today.getDate)
            age = age - 1
        }
       
        
        return age
    },
    date(timestamp){
        
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso:`${year}-${month}-${day}`,
            birthDay:`${day}-${month}`,
            format:`${day}/${month}/${year}`
        }


    },
    blooded(blood){
        const encodedblood = [
            "A1",
            "A0",
            "B1",
            "B0",
            "AB1",
            "AB0",
            "O1",
            "O0"
        ]

        const typeofblood = [
            "A+",
            "A-",
            "B+",
            "B-",
            "AB+",
            "AB-",
            "O+",
            "O-"

        ]

        for(let i = 0; i < encodedblood.length; i = i + 1){
            if(blood == encodedblood[i]){
                
                return typeofblood[i]

            }
        }
    }
}