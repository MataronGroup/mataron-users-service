const userArraySchema = {
    type: 'array',
    items:{
        type: 'object',
        properties: {
            UserId: {
                type: 'string',
                required: false
            },
            Name: {
                type: 'string',
                required: false
            },
            Job: {
                type: 'number',
                required: false
            },
            Profession: {
                type: 'number',
                required: false
            },
            CarID: {
                type: 'string',
                required: false
            },
            PhoneNumber: {
                type: 'string',
                required: false
            },
            Address: {
                type: 'string',
                required: false
            },
            TypeOfService:{
                type: 'string',
                required: false
            },
            Rank: {
                type: 'string',
                required: false
            },
            CommanderInCharge: {
                type: 'string',
                required: false
            },
            Gender: {
                type: 'string',
                required: false
            },
            PersonalID: {
                type: 'string',
                required: false
            },
            SleepingRoom: {
                type: 'string',
                required: false
            },
            SleepingBuilding: {
                type: 'string',
                required: false
            }
        }
    }
}


export  default userArraySchema