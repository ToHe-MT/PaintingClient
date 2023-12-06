export const DimensionDetailConfig = [
    {
        type: "normal",
        label:"Name",
        upper: undefined,
        value:"name",
    },
    {
        type: "normal",
        label:"Height (mm)",
        upper: undefined,
        value:"height",
    },
    {
        type: "normal",
        label:"Width (mm)",
        upper: undefined,
        value:"width",
    }
]
export const MediumDetailConfig = [
    {
        type:'upper',
        upper: 'paper',
        label:"Paper",
        child: [
            {
                type: "normal",
                label:"GSM",
                upper: "paper",
                value:"gsm",
            },
            {
                type: "normal",
                label:"Paper Type",
                upper: "paper",
                value:"type",
            },
            {
                type: "boolean",
                label:"100% Cotton",
                upper: "paper",
                value:"isFullCotton",
            },
        ]
    },

    {
        type: "normal",
        label:"Tools",
        upper: undefined,
        value:"tools",
    },
    {
        type: "boolean",
        label:"Brand",
        upper: undefined,
        value:"brand",

    },
]
export const BuyerDetailConfig = [
    {
        type: "upper",
        upper: "address",
        label:"Adress",
        child: [
            {
                type: "normal",
                label:"Country",
                upper: "address",
                value:"country",
            },
            {
                type: "normal",
                label:"City",
                upper: "address",
                value:"city",
            },
            {
                type: "normal",
                label:"Street",
                upper: "address",
                value:"street",
            },
            {
                type: "normal",
                label:"Postal Code",
                upper: "address",
                value:"postalCode",
            },
        ]
    },
    {
        type: "normal",
        label:"Email",
        upper: undefined,
        value:"email",
    },
    {
        type: "normal",
        label:"Phone Number",
        upper: undefined,
        value:"phoneNumber",
    },
    {
        type: "list",
        label:"WishList",
        upper:"wishlist",
        childValue:[No,title]
    },
    {
        type: "normal",
        label:"Languages",
        upper: undefined,
        value:"languages",
    },
    {
        type: "normal",
        label:"Currency",
        upper: undefined,
        value:"currency",
    },
    {
        type: "normal",
        label:"Length",
        upper: undefined,
        value:"lengthPreferences",
    },
]

