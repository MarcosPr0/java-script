function tabuada(){
    var num = document.getElementById("num")
    var n = Number(num.value)
    var res = document.getElementById('res')
    var tabuada =''

    for(var count=1;count <= 10; count++){
        tabuada += n + " x " + count + " = " + n*count + "<br />";
        res.innerHTML = tabuada
    }
}

