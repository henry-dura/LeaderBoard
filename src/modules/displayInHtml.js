export const table = document.querySelector('.scores-table');

const displayInHtml = (data) => {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${data.user} : ${data.score}</td>`;

  table.appendChild(tableRow);
};

export default displayInHtml;