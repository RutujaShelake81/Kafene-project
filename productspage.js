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


        $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
                function (data) {
                        data.map((item) => {
                                rowcrte(item);
                                $("#countNo").html(data.length);
                        });
                }
        );
        function rowcrte(data) {
         let trow = `<tr class="tbl_row">
            <td >${data.id}</td>
            <td >${data.medicineName}</td>
            <td>${data.medicineBrand}</td>
            <td >${data.expiryDate}</td>
            <td >$${data.unitPrice}</td>
            <td >${data.stock}</td>
        </tr>`;
                $("#table_body").append(trow);
        }

        var expiredBox = document.getElementById("expiredBox");
        expiredBox.addEventListener("change", function (e) {
                e.preventDefault();
                let tblbody = document.getElementById("table_body");
                let tr = tblbody.getElementsByTagName("tr");
                for (let i = 0; i < tr.length; i++) {
                        let td = tr[i].getElementsByTagName("td")[3];
                        if (td) {
                                let textVal = myParser(td.textContent || td.innerHTML);
                                if (new Date(textVal).getTime() < new Date().getTime()) {
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

        var lowStockBox = document.getElementById("lowStockBox");
        lowStockBox.addEventListener("change", function (e) {
                e.preventDefault();
                let tblbody = document.getElementById("table_body");
                let tr = tblbody.getElementsByTagName("tr");
                for (let i = 0; i < tr.length; i++) {
                        let td = tr[i].getElementsByTagName("td")[5];
                        if (td) {
                                let textVal = td.textContent || td.innerHTML;
                                if (textVal < 100) {
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

        function myParser(date) {
                var arr = date.split("-");
                return arr.join(" ");
        }
});
