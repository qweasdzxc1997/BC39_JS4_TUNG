// bài 1
// -đầu vào
document.getElementById("btnsapxep").onclick = function () {
    var number1 = document.getElementById("number_1").value;
    var number2 = document.getElementById("number_2").value;
    var number3 = document.getElementById("number_3").value;
    var sapxep;

    // -đầu ra
    if (number1 > number2 && number2 > number3) {
        sapxep = number1 + ',' + number2 + ',' + number3;

    } else if (number2 > number1 && number1 > number3) {
        sapxep = number3 + ',' + number1 + ',' + number2;

    } else if (number3 > number1 && number1 > number2) {
        sapxep = number3 + ',' + number1 + ',' + number2;

    } else if (number1 < number2 && number2 < number3) {
        sapxep = number1 + ',' + number2 + ',' + number3;
    } else if (number2 < number3 && number3 < number1) {
        sapxep = number2 + ',' + number3 + ',' + number1;
    }


    else {
        sapxep = "chọn số";
    }

    // -in kết quả
    var result = "";
    result += "<p>thu tu la:" + sapxep + "</p";

    document.getElementById("infosapxep").innerHTML = result;
}




// bài 2
// -đầu vào


document.getElementById("btnHello").onclick = function () {

    var thanhVien = document.getElementById("thanhVien").value
    var hello;
    // xử lý

    if (thanhVien == "Bố") {
        hello = "Xin chào bố"
    } else if (thanhVien == "Mẹ") {
        hello = "Xin chào mẹ"
    } else if (thanhVien == "Anh Trai") {
        hello = "Xin chào anh trai"
    } else if (thanhVien == "Em Gái") {
        hello = "Xin chào em gái"
    } else {
        thanhVien = "Chọn thành viên"
        hello = "hãy chọn thành viên"
    }
    // in kết quả

    var result = ""
    result += hello
    document.getElementById("infoHello").innerHTML = result;
}



// bài 3

// -đầu vào
document.getElementById("btndem").onclick = function () {
    var so1 = document.getElementById("so1").value * 1
    var so2 = document.getElementById("so2").value * 1
    var so3 = document.getElementById("so3").value * 1
    var giaTri;
   




    // -xử lý
    if(so1 % 2 == 0 && so2 % 2 == 0 && so3 % 2 == 0){
        giaTri = "Có 3 số chẵn";
    }else if(so1 % 2 == 0 && so2 % 2 == 0 && so3 % 2 == 0){
        giaTri = "Có 2 số chẵn và 1 số lẻ";
    }else if(so1 % 2 == 0 && so2 % 2 != 0 && so3 % 2 == 0){
        giaTri = "Có 2 số chẵn và 1 số lẻ";
    }else if(so1 % 2 == 0 && so2 % 2 == 0 && so3 % 2 != 0){
        giaTri = "Có 2 số chẵn và 1 số lẻ";
    }else if(so1 % 2 == 0 && so2 % 2 != 0 && so3 % 2 != 0){
        giaTri = "Có 1 số chẵn và 2 số lẻ";
    }else if(so1 % 2 == 0 && so2 % 2 != 0 && so3 % 2 != 0){
        giaTri = "Có 1 số chẵn và 2 số lẻ";
    }else if(so1 % 2 != 0 && so2 % 2 == 0 && so3 % 2 != 0){
        giaTri = "Có 1 số chẵn và 2 số lẻ";
    }else if(so1 % 2 != 0 && so2 % 2 != 0 && so3 % 2 == 0){
        giaTri = "Có 1 số chẵn và 2 số lẻ";
    }else {
        giaTri = "có 3 số lẻ";
    };

    // Đầu ra
    var result2 = "";
result2 +=  giaTri;
document.getElementById("infodem").innerHTML = result2;
}



// bài 4


document.getElementById("btnTg").onclick = function (){
    var num7 = document.getElementById("number_7").value*1;
    var num8 = document.getElementById("number_8").value*1;
    var num9 = document.getElementById("number_9").value*1;
    var tamGiac;
    // Xử lý
    
    if( num7 == num8 && num7 != num9){
        tamGiac = "Tam giác cân";
    }else if(num7 != num8 && num8 == num9){
        tamGiac = "Tam giác cân";
    }else if(num7 == num9 && num8 != num9){
        tamGiac = "Tam giác cân";
    }else if(num7 == num8 && num7 == num9){
        tamGiac = "Tam giác đều";
    }else if(num7*num7 == num8*num8 +num9*num9 ) {
        tamGiac = "Tam giác vuông";
    }else if(num8*num8 == num7 * num7 +num9*num9 ) {
        tamGiac = "Tam giác vuông";

    }else if( num9 * num9 == num7 * num7 +num8*num8 ) {
        tamGiac = "Tam giác vuông";

    }else{
        tamGiac = "Tam giác thường";

    }

    // Đầu ra
    var result3 = "";
result3 +=  tamGiac;
document.getElementById("infoTg").innerHTML = result3;
}; 