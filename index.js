var chnText = document.getElementById("chn-text");
var arr1 = ["Web","Apps"];
console.log(arr1);


setInterval(() => {
    random()
}, 1000);
function random() {
    var num = Math.round(Math.random())
    chnText.innerHTML = arr1[num]
}

