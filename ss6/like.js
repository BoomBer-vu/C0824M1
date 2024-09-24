// external

// function :hàm
//addEventListener : lắng nghe sự kiện click
// khi sự kiện click xảy ra thì nó sẽ thực hiện function và hiện thi alert

// document.getElementById("btn").addEventListener("click", function () {
//     alert('hello')
// })
let text = document.getElementById("text");

text.addEventListener("click", function () {
    text.style.backgroundColor = "blue"
    text.style.color = "white"
    text.innerText = "Unlike"
})