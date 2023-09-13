function result() {
    //input
    const money = +document.getElementById("money").value;
    const from = +document.getElementById("from").value;
    const to = +document.getElementById("to").value;
    // tinh toan
    const result = money * to / from;
    // out put
    alert('Số tiền là' + result)
}

