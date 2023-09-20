var form = document.querySelector('form');
var expenseList = document.getElementById('expenseList');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var i1 = document.getElementById("i1").value;
    var i2 = document.getElementById("i2").value;
    var dropdown = document.getElementById("dropdown");
    var i3 = dropdown.options[dropdown.selectedIndex].value;

    localStorage.setItem("i1Value", i1);
    localStorage.setItem("i2Value", i2);
    localStorage.setItem("i3Value", i3);

    document.getElementById("i1").value = "";
    document.getElementById("i2").value = "";

    displayExpenses(); // Call the function to display expenses



    function displayExpenses() {
        var i1Value = localStorage.getItem("i1Value");
        var i2Value = localStorage.getItem("i2Value");
        var i3Value = localStorage.getItem("i3Value");
    
        var expenseItem = document.createElement('div');
        expenseItem.innerHTML = `
            <p>${i1Value}</p>
            <p>${i2Value}</p>
            <p> ${i3Value}</p>
            <button onclick="editExpense('${i1Value}', '${i2Value}', '${i3Value}')">Edit</button>
            <button onclick="deleteExpense('${i1Value}')">Delete</button>
        `;
    
        expenseList.appendChild(expenseItem);
    }
    
});


function editExpense(i1Value, i2Value, i3Value) {
    // Implement the edit logic here
    // You can prefill the form fields with the selected values for editing
    document.getElementById("i1").value = i1Value;
    document.getElementById("i2").value = i2Value;
    document.getElementById("dropdown").value = i3Value;
}

function deleteExpense(i1Value) {
    // Implement the delete logic here
    // Remove the selected expense from localStorage and update the display
    localStorage.removeItem("i1Value");
    localStorage.removeItem("i2Value");
    localStorage.removeItem("i3Value");

    // Remove the corresponding expense from the display
    var expenseItem = document.querySelector(`div:contains(${i1Value})`);
    if (expenseItem) {
        expenseItem.remove();
    }
}





// Initial display of expenses when the page loads
displayExpenses();
