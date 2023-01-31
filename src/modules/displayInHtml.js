const table = document.querySelector('.scores-table');

const displayInHtml = (newScore) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
    <td>${newScore.yourName} : ${newScore.yourScore}</td>`

    table.appendChild(tableRow);
}

export default displayInHtml;