const text =
  "Gửi Trang,        my only love,        Hơn 3 năm tính từ ngày đầu anh gặp em và em vẫn vậy,     Luôn nhắc anh mặc thật ấm khi trời trở lạnh,           Hỏi anh ăn cơm chưa,     Lắng nghe anh kể chuyện mỗi khi anh cần,...      Chà, ngay lúc này anh vẫn không tin em là thật đâu đấy...           Anh cảm ơn những bức thư em viết, chúng luôn hay một cách kỳ lạ, dù anh có đọc bao nhiêu thì anh vẫn muốn đọc tiếp.           Cảm ơn những món quà em tặng, mỗi khi anh thấy áp lực anh đã bắt đầu ngắm nghía chúng, mỗi lần như vậy anh luôn tự cưòi rất tưoi.           Anh cảm ơn em nhé,                sẽ luôn cố gắng hết khả năng của anh để có đưọc một tuơng lai mà anh luôn mong muốn, với em, Trang.            Cưòi nhiều lên nhé!           Anh rất yêu thuơng em!                          Em và mỗi mình em,       Duy Anh";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
