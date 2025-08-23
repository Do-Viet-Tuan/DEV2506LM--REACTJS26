function checkBlank(val, id) {
    let nameId = '#' + id
    if (val == "" || val == null) {
        $(id).siblings('.err-blank').show();
    } else {
        $(id).siblings('.err-blank').hide();
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    var phoneRegex = /^(03|05|07|08|09)\d{8}$/;
    return phoneRegex.test(phone);
}


// $('#submit').on('click', (event) => {
$('#form').on('submit', (event) => {
    event.preventDefault();
    var name = $('#name').val()
    var email = $('#email').val()
    var phone = $('#phone').val()
    var content = $('#content').val()

    //Kiem tra Ho ten co trong hay khong

    checkBlank(name, "#name");
    // kiem tra truong email co dung dinh dang
    checkBlank(email, "#email");
    if (email != "" && email != null) {
        if (!isValidEmail(email)) {
            $('#email').siblings('.err-email').show();
        } else {
            $('#email').siblings('.err-email').hide();
        }
    }

    //kiem tra truong so dien thoai co dung hay k
    checkBlank(phone, "#phone");
    $('#form').on('submit', (event) => {
        event.preventDefault();
        var name = $('#name').val()
        var email = $('#email').val()
        var phone = $('#phone').val()
        var content = $('#content').val()

        checkBlank(name, "#name");
        checkBlank(email, "#email");
        checkBlank(phone, "#phone");
        checkBlank(content, "#content");

        // Kiểm tra định dạng email nếu không rỗng
        if (email != "" && email != null) {
            if (!isValidEmail(email)) {
                $('#email').siblings('.err-email').show();
            } else {
                $('#email').siblings('.err-email').hide();
            }
        }

        // Kiểm tra định dạng số điện thoại Việt Nam nếu không rỗng
        if (phone != "" && phone != null) {
            if (!isValidPhone(phone)) {
                $('#phone').siblings('.err-phone').show();
            } else {
                $('#phone').siblings('.err-phone').hide();
            }
        }
    });

    checkBlank(content, "#content");
})

$('#phone').on('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Loại bỏ mọi ký tự không phải số
})
$('#phone').on('keydown', function (e) {
    // Cho phép: phím số, backspace, delete, tab, arrow keys
    if (
        (e.key >= '0' && e.key <= '9') ||
        e.key === 'Backspace' ||
        e.key === 'Delete' ||
        e.key === 'Tab' ||
        e.key.startsWith('Arrow')
    ) {
        return true;
    } else {
        e.preventDefault(); // chặn phím khác
    }
});
