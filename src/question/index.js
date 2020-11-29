const qBank = [
  {
    question:
      "An Optical Input Device that interprets pencil marks on paper media ______",
    answers: [
      "O.M.R",
      "Punch card reader",
      "Optical scanners",
      "Magnetic tape"
    ],
    correct: "O.M.R",
    questionId: "001"
  },
  {
    question:
      "A Billionth of a second is defined as a ______",
    answers: [
      "Millisecond",
      "Microsecond",
      "Nanosecond",
      "Picoseconds"
    ],
    correct: "Nanosecond",
    questionId: "002"
  },
  {
    question:
      "CD-ROM stands for _____",
    answers: [
      "Compactable Read Only Memory",
      "Compact Data Read Only Memory",
      "Compactable Disk Read Only Memory",
      "Compact Disk Read Only Memory"
    ],
    correct: "Compact Disk Read Only Memory",
    questionId: "003"
  },
  {
    question:
      "The Name box on to the left of formula bar _____",
    answers: [
      "shows the name of workbook currently working on",
      "shows the name of worksheet currently working on",
      "shows the name of cell or range currently working on",
      "None of above"
    ],
    correct: "shows the name of cell or range currently working on",
    questionId: "004"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "01010101"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "092299"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "222099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "2222099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "09922099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "222292099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "0998999099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "099099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "09459099"
  },
  {
    question:
      "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: "0912219099"
  },


];

export default (n = 10) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
