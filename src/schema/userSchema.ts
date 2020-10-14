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
            required: false
        },
        PhoneNumber: {
            type: 'string',
            required: true
        },
        Address: {
            type: 'string',
            required: true
        },
        TypeOfService:{
            type: 'string',
            required: true
        },
        Rank: {
            type: 'string',
            required: true
        },
        CommanderInCharge: {
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
        },
        SleepingRoom: {
            type: 'string',
            required: false
        },
        BuildingRoom: {
            type: 'string',
            required: false
        }
    }
}


export  default userSchema