const userSchema = {
    type: 'object',
    properties: {
        UserId: {
            type: 'string',
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
        CarID: {
            type: 'string',
            required: true
        },
        Phone_Number: {
            type: 'string',
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
            type: 'string',
            required: true
        }
    }
}


export  default userSchema