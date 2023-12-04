$(document).ready(function () {
    if (localStorage.getItem("status") !== "true") {
        location.assign("./index.html");
    }
    const logoutButton = document.getElementById("logoutBtn");
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem("status", false);
        location.assign("./index.html");
    };
    var resArr;
    $.get(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
        function (data) {
            resArr = data;
            data.map((item, pos) => {
                createRows(item);
                $("#countNo").html(data.length);
            });
        }
    );
    function createRows(data) {
        let trow = `
        <tr class="tbl_row">
            <td >${data.id}</td>
            <td >${data.customerName}</td>
            <td >${data.orderDate}<br>
            <span>${data.orderTime}</span>
            </td>
            <td >$${data.amount}</td>
            <td >${data.orderStatus}</td>
        </tr>`;
        $("#table_body").append(trow);
    }

    var newBox = document.getElementById("newBox");
    newBox.addEventListener("change", function (e) {
        e.preventDefault();
        let tablebody = document.getElementById("table_body");
        let tr = tablebody.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === "New") {
                    if (this.checked === true) {
                        tr[i].style.display = "";
                        $("#countNo").html(parseInt($("#countNo").html()) + 1);
                    } else {
                        tr[i].style.display = "none";
                        $("#countNo").html(parseInt($("#countNo").html()) - 1);
                    }
                }
            }
        }
        console.log(tablebody.getElementsByTagName("tr").length);
    });

    var DeliveredBox = document.getElementById("DeliveredBox");
    DeliveredBox.addEventListener("change", function (e) {
        e.preventDefault();
        let tablebody = document.getElementById("table_body");
        let tr = tablebody.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === "Delivered") {
                    if (this.checked === true) {
                        tr[i].style.display = "";
                        $("#countNo").html(parseInt($("#countNo").html()) + 1);
                    } else {
                        tr[i].style.display = "none";
                        $("#countNo").html(parseInt($("#countNo").html()) - 1);
                    }
                }
            }
        }
    });

    var IntransitBox = document.getElementById("IntransitBox");
    IntransitBox.addEventListener("change", function (e) {
        e.preventDefault();
        let tablebody = document.getElementById("table_body");
        let tr = tablebody.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === "InTransit") {
                    if (this.checked === true) {
                        tr[i].style.display = "";
                        $("#countNo").html(parseInt($("#countNo").html()) + 1);
                    } else {
                        tr[i].style.display = "none";
                        $("#countNo").html(parseInt($("#countNo").html()) - 1);
                    }
                }
            }
        }
    });

    var PackedCheckBox = document.getElementById("PackedCheckBox");
    PackedCheckBox.addEventListener("change", function (e) {
        e.preventDefault();
        let tablebody = document.getElementById("table_body");
        let tr = tablebody.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                let textValue = td.textContent || td.innerHTML;
                if (textValue === "Packed") {
                    if (this.checked === true) {
                        tr[i].style.display = "";
                        $("#countNo").html(parseInt($("#countNo").html()) + 1);
                    } else {
                        tr[i].style.display = "none";
                        $("#countNo").html(parseInt($("#countNo").html()) - 1);
                    }
                }
            }
        }
    });
});
