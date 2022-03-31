import people from "../assets/people.png"
import calendar from "../assets/calendar.png"
import home from "../assets/home.png"

// Menu items
export const itemsData = [
    { name: "Strona główna", logo: home, link: "/" },
    { name: "Pracownicy", logo: people, link: "/employes" },
    { name: "Kalendarz", logo: calendar, link: "/calendar" },
    { name: "Title4", logo: people, link: "/link4" },
]

//Table dummy data

export const tableData = {
    tableHead: [
        "Name",
        "Surname",
        "Age",
        "Job"
    ],
    tableData: [
        [
            "Text1a",
            "Text2a",
            "Text3a",
            "Text4a"
        ],
        [
            "Text1b",
            "Text2b",
            "Text3b",
            "Text4b"
        ],
        [
            "Text1c",
            "Text2c",
            "Text3c",
            "Text4c"
        ],
        [
            "Text1d",
            "Text2d",
            "Text3d",
            "Text4d"
        ],

    ]
}
