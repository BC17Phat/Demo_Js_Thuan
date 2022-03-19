// alert(1);
// clousurefuntion là kỹ thuật viết hàm lồng trong hàm

// ban đầu hàm main nhận 1 cái message và nó tạo bên trong là 1 cái function và alert ra cái message

// hàm demo sẽ lấy 1 cái message từ hàm chính và show cái message đó ra
// function Main(message) {
//   return function Demo() {
//     alert(message);
//   };
// }
// // khi mình gọi hàm main thực thi và mình truyền cho nó 1 cái chuỗi

// // thì nó sẽ không trả ra cái hàm alert message
// // cái lệnh sẽ  trả về cho mình 1 cái biến dạng hàm do vậy muốn gọi hàm phải thêm ()vào.
// // Main('Hello Phát cố lên nhé ');

// // Main('Hello Phát cố lên nhé ')(); // thì nó mới gọi hàm

// const funDemo = Main("Hello Phát cố lên nhé "); // thì nó mới gọi hàm sau đo người ta tạo ra 1 biến // thì lúc đo cái hàm
// /* thì lúc đó cái hàm bên trong chưa thực thi  
//     return function Demo(){
//         alert(message); mà nó gọi cái hàm Main('Hello Phát cố lên nhé ') này thực thi và hàm main thực thi nó sẽ trả về giá trị
//         là 1 function Demo(){
//         alert(message) 1 cái callback và mình đem cái function đó gán vào 1 cái biến const funDemo
//         sau đó muốn cái biên đó chạy  phải gọi nó thêm 1 lần.
//     }
// */
// funDemo(); // thì lúc đó nó mới chạy và hiện cái thông báo alert lên

// cách 2

// cách viết này giúp những hàm bên trong sd được các tham số ở ngoài cùng hoặc là bên trong nó luôn
// đó là cách minh lợi dụng để truyền cái callback đi gửi dữ liệu vào cáii hàm bên trong cái hàm đó
//  vd bạn có 1 biến là
let message = "Hello Phát cố lên nhé";
// tuy nhiên là để gán 1 cái sự kiện vào 1 cái nút( onclick của nút button or 1 cái ctrol nào khác thì lúc đó không gán được bằng callback vì nó ko có tham số
// nếu vậy không dùng dược cái binding)

function Main1() {
  return function Demo() {
    alert(message);
  };
}

const funDemo1 = Main1();
//  funDemo1(); // này là cách viết tắt và chỉ hiện thông báo 1 lần

document.getElementById("btn").onclick = funDemo1;
