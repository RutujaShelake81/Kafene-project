$(document).ready(function () {
    if (localStorage.getItem('status') !== 'true') {
        location.assign('./index.html')
    }
    const logoutButton = document.getElementById('logoutBtn');
    logoutButton.onclick = function (e) {
        e.preventDefault();
        localStorage.setItem('status', false)
        location.assign('./index.html')
    }
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
        function (data) {
            data.map((item) => {
                rowcrte(item)
                console.log(data);
            })
            searchFun();
            $('#resetBtn').click(function (e) {
                e.preventDefault();
                $('#searchBox').val('');
                $('#table_body tr').css('display', '')
            });
        },
    );
    function rowcrte(data) {
        let trow = (`
        <tr class="tbl_row">
            <td >${data.id}</td>
            <td ><img src=${data.profilePic}/></td>
            <td >${data.fullName}</td>
            <td >${data.dob}</td>
            <td >${data.gender}</td>
            <td >${data.currentCity}, ${data.currentcountory}</td>
        </tr>`)
        $('#table_body').append(trow);
    }


    const searchFun = () => {
        $('#formSearch').submit((e) => {
            let searchValue = document.getElementById('searchBox').value.toUpperCase();
            e.preventDefault();
            if (searchValue.length < 2) {
                alert('Please enter atleast 2 characters');
                $('#table_body tr').css('display', '')
            } else {
                $.get(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchValue}`,
                    function() {

                        let tablebody = document.getElementById('table_body');
                        let tr = tablebody.getElementsByTagName('tr');
                        for (let i = 0; i < tr.length; i++) {
                            let td = tr[i].getElementsByTagName('td')[2];
                            if (td) {
                                let textVal= td.textContent || td.innerHTML;

                                if (textVal.toUpperCase().indexOf(searchValue) > -1) {
                                    tr[i].style.display = "";
                                } else {
                                    tr[i].style.display = 'none';
                                }
                            }
                        }
                    },
                );
            }
        })
    }
});
