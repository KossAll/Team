const data = [
    {
        Місце: 1,
        Команда: "Агросвіт",
        М: 1,
        В: 1,
        Н: 0,
        П: 0,
        Заб: 2,
        Про: 0,
        Різн: 2,
        О: 3,
    },

    {
        Місце: 1,
        Команда: "Технологія",
        М: 1,
        В: 0,
        Н: 1,
        П: 0,
        Заб: 1,
        Про: 1,
        Різн: 0,
        О: 1,
},

{
    Місце: 1,
    Команда: "Lex VSK",
    М: 1,
    В: 0,
    Н: 0,
    П: 1,
    Заб: 0,
    Про: 2,
    Різн: -2,
    О: 0,
},

{
    Місце: 1,
    Команда: "Тріумф-Signal",
    М: 1,
    В: 0,
    Н: 1,
    П: 0,
    Заб: 1,
    Про: 1,
    Різн: 0,
    О: 1,
},
  // ...
];


// Сортировка данных по количеству набранных очков (О) и забитым мячам (Заб)
data.sort((a, b) => {
    if (b.О === a.О) {
        return b.Заб - a.Заб;
    }
    return b.О - a.О;
});


// Отображение данных в таблице
const tableBody = document.getElementById("table-body");
data.forEach((row, index) => {
    const newRow = document.createElement("tr");
    if (row.Команда === 'Технологія') {
        newRow.classList.add('highlighted');
    }
    newRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${row.Команда}</td>
        <td>${row.М}</td>
        <td>${row.В}</td>
        <td>${row.Н}</td>
        <td>${row.П}</td>
        <td>${row.Заб}</td>
        <td>${row.Про}</td>
        <td>${row.Різн}</td>
        <td>${row.О}</td>
    `;
    tableBody.appendChild(newRow);
});
