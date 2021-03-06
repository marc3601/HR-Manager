import people from "../assets/people.png";
import calendar from "../assets/calendar.png";
import home from "../assets/home.png";
import timeline from "../assets/timeline.png";

// Menu items
// Item is not rendered on sidebar if logo is absent.
export const itemsData = [
  { name: "Strona główna", logo: home, link: "/" },
  { name: "Pracownicy", logo: people, link: "/employes" },
  { name: "Kalendarz", logo: calendar, link: "/calendar" },
  { name: "Oś czasu", logo: timeline, link: "/timeline" },
  { name: "Dodaj pracownika", link: "/employes/add" },
];

//Table dummy data. It will be generated on backend based on requested data.
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

//List of inputs in "Add employee view"
const addEmployeeInputs = [
  {
    type: "text",
    text: "Imię",
    placeholder: "Podaj imię",
    id: "add_name",
  },
  {
    type: "number",
    text: "PESEL",
    placeholder: "Podaj pesel",
    id: "add_pesel",
  },
  {
    type: "text",
    text: "Nazwisko",
    placeholder: "Podaj nazwisko",
    id: "add_surname",
  },
  {
    type: "date",
    text: "Data urodzenia",
    id: "add_birth",
  },
  {
    type: "text",
    text: "Stanowisko",
    placeholder: "Podaj stanowisko",
    id: "add_position",
  },
  {
    type: "date",
    text: "Data zatrudnienia",
    id: "add_hired",
  },
  {
    type: "text",
    text: "Miasto",
    placeholder: "Podaj miasto",
    id: "add_city",
  },
  {
    type: "number",
    text: "Kod",
    placeholder: "Podaj kod pocztowy",
    id: "add_code",
  },
  {
    type: "text",
    text: "Ulica",
    placeholder: "Podaj ulicę",
    id: "add_street",
  },
  {
    type: "number",
    text: "Numer domu",
    placeholder: "Podaj numer domu",
    id: "add_home",
  },
  {
    type: "number",
    text: "Mieszkanie",
    placeholder: "Podaj mieszkanie",
    id: "add_flat",
  },
];

// This function divides array of inputs into two rows to show them in the UI.
export const twoRowInputs = () => {
  const half = Math.ceil(addEmployeeInputs.length / 2);
  const firstHalf = addEmployeeInputs.slice(0, half);
  const secondHalf = addEmployeeInputs.slice(half, addEmployeeInputs.length);
  return { first: firstHalf, second: secondHalf };
};

//This will also be most likely generated on backend
export const daysOffData = [
  {
    surname: "Czaja",
    name: "Marcin",
    daysOffLastYear: 15,
    daysOffThisYear: 4,
  },
  {
    surname: "Majewska",
    name: "Agnieszka",
    daysOffLastYear: 12,
    daysOffThisYear: 5,
  },
  {
    surname: "Kubiak",
    name: "Daniel",
    daysOffLastYear: 12,
    daysOffThisYear: 5,
  },
  {
    surname: "Kubiak",
    name: "Daniel",
    daysOffLastYear: 12,
    daysOffThisYear: 5,
  },
];
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

export const calendarContextManuSettings = {
  title: "Dodaj zdarzenie",
  options: ["Urlop wypoczynkowy >>", "Chorobowe >>", "Urlop bezpłatny >>"],
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
