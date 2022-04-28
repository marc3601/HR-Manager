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
  } else return;
};

export const renderDaysOff = (initialDay = 1) => {
  let initialDays = [1, 2, 3, 4, 5, 6, 7];
  let reversed = [...initialDays].reverse();
  let initialDayOff = initialDays[reversed.indexOf(initialDay)];
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(initialDayOff);
    initialDayOff += 7;
  }
  return arr;
};

export const daysNames = [
  {
    fullName: "Poniedziałek",
    shortName: "Pn",
  },
  {
    fullName: "Wtorek",
    shortName: "Wt",
  },
  {
    fullName: "Środa",
    shortName: "Śr",
  },
  {
    fullName: "Czwartek",
    shortName: "Czw",
  },
  {
    fullName: "Piątek",
    shortName: "Pt",
  },
  {
    fullName: "Sobota",
    shortName: "Sb",
  },
  {
    fullName: "Niedziela",
    shortName: "Nd",
  },
];

export const months = [
  {
    name: "Styczeń 2022",
    noOfDays: 31,
    intialDay: 6,
  },
  {
    name: "Luty 2022",
    noOfDays: 28,
    intialDay: 2,
  },
  {
    name: "Marzec 2022",
    noOfDays: 31,
    intialDay: 2,
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
