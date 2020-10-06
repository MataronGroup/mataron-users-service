const userSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'number',
            required: true
        },
        Name: {
            type: 'string',
            required: true
        },
        Job: {
            type: 'number',
            required: true
        },
        Profession: {
            type: 'number',
            required: true
        },
        CardID: {
            type: 'number',
            required: true
        },
        Phone_Number: {
            type: 'number',
            required: true
        },
        Address: {
            type: 'string',
            required: true
        },
        Type_Of_Service:{
            type: 'string',
            required: true
        },
        Rank: {
            type: 'string',
            required: true
        },
        C_In_Charge: {
            type: 'string',
            required: true
        },
        Gender: {
            type: 'string',
            required: true
        },
        PersonalID: {
            type: 'number',
            required: true
        }
    }
}


export  default userSchema