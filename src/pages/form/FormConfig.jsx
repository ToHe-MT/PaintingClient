export const buyerAddressConfig = [
    {
        id: 2,
        name: "country",
        type: "text",
        placeholder: "Country",
        errorMessage: "Please enter a valid country name.",
        label: "Country",
        required: true,
    },
    {
        id: 3,
        name: "city",
        type: "text",
        placeholder: "City",
        errorMessage: "Please enter a valid city name.",
        label: "City",
        required: true,
    },
    {
        id: 4,
        name: "street",
        type: "text",
        placeholder: "Street",
        errorMessage: "Please enter a valid street address.",
        label: "Street",
        required: true,
    },
    {
        id: 5,
        name: "postalCode",
        type: "text",
        placeholder: "Postal Code",
        errorMessage: "Please enter a valid postal code.",
        label: "Postal Code",
        pattern: "^\\d{5}$", // Adjust the pattern as needed for your use case
        required: true,
    },
];

export const buyerDataConfig = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Full Name",
        errorMessage:
            "Full name should only contain letters, and spaces.",
        label: "Full Name",
        pattern: "^[A-Za-z.' ]+$",
        required: true,
    },
    {
        id: 6,
        name: "email",
        type: "email",
        placeholder: "Email Address",
        errorMessage: "Please enter a valid email address.",
        label: "Email",
        pattern: "^[\\-a-zA-Z0-9._]+@[a-zA-Z0-9.]+.[a-zA-Z]{2,4}$",
        required: false,
    },
    {
        id: 7,
        name: "phoneNumber",
        type: "tel",
        placeholder: "+(CountryCode)XXXXXX   E.g.+62XXXXXX",
        errorMessage: "Please enter a valid phone number.",
        label: "Phone Number",
        pattern: "\\+[0-9]{10,}", // Adjust the pattern as needed for your use case
        required: false,
    },
    {
        id: 8,
        name: "dob",
        type: "date",
        errorMessage: "Please enter a valid date of birth.",
        label: "Date of Birth (Optional) - Will Give Birthday Coupons",
        required: false,
    },
    {
        id: 10,
        name: "currency",
        type: "select",
        options: [
            { id: 1, value: "USD", label: "USD" },
            { id: 2, value: "IDR", label: "IDR" },
            // Add more options as needed
        ],
        label: "Currency",
        required: false
    },
    {
        id: 11,
        name: "length",
        type: "select",
        options: [
            { id: 1, value: "centimeters", label: "Centimeters", default: true },
            { id: 2, value: "inches", label: "Inches" },
            // Add more options as needed
        ],
        placeholder: "Length (cm or Inch)",
        errorMessage: "Please enter a valid length.",
        label: "Length",
        required: false
    }
]

export const buyerWishlistConfig = (paintings) => [
    {
        id: 9,
        name: "wishlist",
        type: "checkbox",
        checkbox: paintings,
        label: "Wishlist"
    }
]

export const buyerPreferredConfig = [
    {
        id: 10,
        name: "currency",
        type: "select",
        options: [
            { id: 1, value: "USD", label: "USD" },
            { id: 2, value: "IDR", label: "IDR" },
            // Add more options as needed
        ],
        label: "Currency",
        required: false
    },
    {
        id: 11,
        name: "length",
        type: "select",
        options: [
            { id: 1, value: "centimeters", label: "Centimeters", default: true },
            { id: 2, value: "inches", label: "Inches" },
            // Add more options as needed
        ],
        placeholder: "Length (cm or Inch)",
        errorMessage: "Please enter a valid length.",
        label: "Length",
        required: false
    }
]

export const DimensionConfig = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Dimension Name",
        errorMessage:
            "Full name should only contain letters,numbers, spaces, apostrophes, hyphens, and periods.",
        label: "Name",
        pattern: "^[A-Za-z.'\\-0-9`\\s]+$",
        required: true,
    },
    {
        id: 2,
        name: "width",
        type: "number",
        placeholder: "Width (mm)",
        errorMessage: "Please enter a valid Number.",
        label: "Width (mm)",
        pattern: "^[0-9]+$",
        required: true,
    },
    {
        id: 3,
        name: "height",
        type: "number",
        placeholder: "Height (mm)",
        errorMessage: "Please enter a valid number.",
        label: "Height (mm)",
        pattern: "^[0-9]+$", // Adjust the pattern as needed for your use case
        required: true,
    }
]

export const MediumPaperConfig = [
    {
        id: 1,
        name: "gsm",
        type: "number",
        placeholder: "GSM",
        errorMessage:
            "Valid Number",
        label: "GSM",
        pattern: "^[0-9]+$",
        required: true,
    },
    {
        id: 2,
        name: "type",
        type: "select",
        label: "Paper Type ",
        options: [
            { id: 1, value: "watercolor", label: "Watercolor" },
            { id: 2, value: "cold pressed", label: "Cold Pressed" },
            { id: 3, value: "hot pressed", label: "Hot Pressed" },
            { id: 4, value: "canvas", label: "Canvas" },
            // Add more options as needed
        ],
        required: true,
    },
]
export const MediumDataConfig = [
    {
        id: 1,
        name: "tools",
        type: "select",
        options: [
            { id: 1, value: "Gouache", label: "Gouache" },
            { id: 2, value: "Watercolor", label: "Watercolor" },
            { id: 3, value: "Oil", label: "Oil" },
            { id: 4, value: "canvas", label: "Canvas" },
            // Add more options as needed
        ],
        label: "Tools",
        required: true,
    },
    {
        id: 2,
        name: "brand",
        type: "text",
        placeholder: "Holbein / Himi Miya / etc",
        label: "Brand",
        errorMessage: "Valid Brand",
        // pattern:"",
        required: true,
    },
    {
        id: 3,
        name: "info",
        type: "textarea",
        placeholder: "Etc...",
        label: "Additional Info",
        // errorMessage:"Valid Brand",
        // pattern:"",
        required: false,
    },
]

export const MediumCottonConfig = [
    {
        id: 4,
        name: "isFullCotton",
        type: "select",
        options: [
            { id: 1, value: "yes", label: "Yes" },
            { id: 2, value: "no", label: "No" },
            // Add more options as needed
        ],
        label: "Full Cotton?",
        required: true
    }
]
export const paintingConfig = (dimensions, mediums, buyers) => [
    {
        id: 1,
        name: "No",
        type: "number",
        placeholder: "Painting Number",
        errorMessage: "Please enter a valid painting number.",
        label: "Painting Number",
        pattern: "^[0-9]+$", // Adjust the pattern as needed for your use case
        required: true,
    },
    {
        id: 2,
        name: "title",
        type: "text",
        placeholder: "Title",
        errorMessage: "Please enter a valid title.",
        label: "Title",
        required: true,
    },
    {
        id: 3, // Replace with the appropriate ID
        name: "dateCreated", // Replace with the appropriate name
        type: "date",
        errorMessage: "Please enter a valid date.",
        label: "Date Created",
        required: true, // Adjust as needed
    },

    {
        id: 4,
        name: "medium",
        type: "select",
        placeholder: "Medium",
        errorMessage: "Please select a valid medium.",
        label: "Medium",
        required: true,
        options: mediums
    },
    {
        id: 5,
        name: "dimension",
        type: "select",
        placeholder: "Dimension",
        errorMessage: "Please select a valid dimension.",
        label: "Dimension",
        required: true,
        options: dimensions
    },
    {
        id: 6,
        name: "price",
        type: "number",
        placeholder: " USD",
        errorMessage: "Please enter a valid price.",
        label: "Price",
        pattern: "^[0-9]+$", // Adjust the pattern as needed for your use case
        required: true,
    },
    {
        id: 7,
        name: "status",
        type: "select",
        placeholder: "Status",
        errorMessage: "Please select a valid status.",
        label: "Status",
        default: "Maintenance",
        options: [
            { id: 1, value: "Maintenance", label: "Maintenance" },
            { id: 2, value: "Available", label: "Available" },
            { id: 3, value: "Sold", label: "Sold" },
        ],
        required: true,
    },
    {
        id: 8,
        name: "buyer",
        type: "select",
        label: "Buyer",
        options: buyers,
        required: false,
    },
    {
        id: 9,
        name: "info",
        type: "textarea",
        placeholder: "Additional Info",
        errorMessage: "Please enter valid additional information.",
        label: "Additional Info",
        required: false,
    },
    {
        id: 13, // Replace with the appropriate ID
        name: "datePurchased", // Replace with the appropriate name
        type: "date",
        errorMessage: "Please enter a valid purchase date.",
        label: "Date Purchased",
        required: false, // Adjust as needed
    }
];
