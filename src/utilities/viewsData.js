import people from "../assets/people.png";
import calendar from "../assets/calendar.png";
import home from "../assets/home.png";

// Menu items
export const itemsData = [
    { name: "Strona główna", logo: home, link: "/" },
    { name: "Pracownicy", logo: people, link: "/employes" },
    { name: "Kalendarz", logo: calendar, link: "/calendar" },
    { name: "Title4", logo: people, link: "/link4" },
];

//Table dummy data

export const tableData = {
    tableHead: ["Imię", "Nazwisko", "Stanowisko", "Miasto"],
    tableData: [
        ["Marcin", "Czaja", "Pracownik biurowy", "Pakość"],
        ["Andrzej", "Nowak", "Mechanik", "Inowrocław"],
        ["Wojciech", "Tomaszewski", "Księgowy", "Poznań"],
        ["Piotr", "Kowalczyk", "Negocjator", "Wrocław"],
        ["Krzysztof", "Grabowski", "Serwisant", "Białystok"],
        ["Grzegorz", "Szewczyk", "Planista", "Opole"],
        ["Agnieszka", "Majewska", "Dietetyk", "Warszawa"],
        ["Daniel", "Kubiak", "Elektryk", "Szczecin"],
        ["Marcin", "Czaja", "Pracownik biurowy", "Pakość"],
        ["Andrzej", "Nowak", "Mechanik", "Inowrocław"],
        ["Wojciech", "Tomaszewski", "Księgowy", "Poznań"],
        ["Piotr", "Kowalczyk", "Negocjator", "Wrocław"],
        ["Krzysztof", "Grabowski", "Serwisant", "Białystok"],
        ["Grzegorz", "Szewczyk", "Planista", "Opole"],
        ["Agnieszka", "Majewska", "Dietetyk", "Warszawa"],
        ["Daniel", "Kubiak", "Elektryk", "Szczecin"],
    ],
};

export const getCurrentMonth = () => {
    const d = new Date();
    return d.getMonth();
};

export const getCurrentDay = (userChoice, currentMonth) => {
    const d = new Date();
    if (userChoice === currentMonth) {
        return d.getDate();
    } else return

};

export const months = [
    {
        name: "Styczeń 2022",
        noOfDays: 31,
        intialDay: 7,
    },
    {
        name: "Luty 2022",
        noOfDays: 28,
        intialDay: 3,
    },
    {
        name: "Marzec 2022",
        noOfDays: 31,
        intialDay: 3,
    },
    {
        name: "Kwiecień 2022",
        noOfDays: 30,
        intialDay: 5,
    },
    {
        name: "Maj 2022",
        noOfDays: 31,
        intialDay: 7,
    },
    {
        name: "Czerwiec 2022",
        noOfDays: 30,
        intialDay: 3,
    },
    {
        name: "Lipiec 2022",
        noOfDays: 31,
        intialDay: 5,
    },
    {
        name: "Sierpień 2022",
        noOfDays: 31,
        intialDay: 1,
    },
    {
        name: "Wrzesień 2022",
        noOfDays: 30,
        intialDay: 4,
    },
    {
        name: "Październik 2022",
        noOfDays: 31,
        intialDay: 6,
    },
    {
        name: "Listopad 2022",
        noOfDays: 30,
        intialDay: 2,
    },
    {
        name: "Grudzień 2022",
        noOfDays: 31,
        intialDay: 4,
    },
];
