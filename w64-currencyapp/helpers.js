function getDataFromInvestorCalculator() {
    const form = new FormData(document.querySelector("#investor_calculator_form"));
    return {
        howManyMonths: parseInt(form.get("howManyMonths")),
        howMuchYouInvested: parseInt(form.get("howMuchYouInvested")),
        theBestResult: !!form.get("theBestResult")
    }
}

function getDataFromSavingForm() {
    const form = new FormData(document.querySelector("#tracking_saving_form"));
    return {
        howMuchYouSaved: parseInt(form.get("howMuchYouSaved")),
        dateOfInvestment: new Date(form.get("dateOfInvestment")),
        currency: form.get("currency"),
    }
}

function cleanTable(tableId) {
    const [headerRow, ...rowsToDelete] = document.querySelectorAll(`#${tableId} tbody tr:not(.footer)`);
    rowsToDelete.forEach((row)=>{
        row.remove();
    })
}

function appendRow(tableId, arrayWithValuesOfColumns) {
    const rowsNotFooter = document.querySelectorAll(`#${tableId} tbody tr:not(.footer)`);
    const lastRow = rowsNotFooter[rowsNotFooter.length-1];
    const newRow = document.createElement('tr');
    arrayWithValuesOfColumns.forEach((columnText)=>{
        const newColumn = document.createElement('td');
        newColumn.innerText = columnText;
        newRow.appendChild(newColumn);
    })
    lastRow.insertAdjacentHTML("afterend",newRow.outerHTML);
}