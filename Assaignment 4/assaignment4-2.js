function add(){
    var a,b,c;
    a=Number(document.getElementById("num1").value);
    b=Number(document.getElementById("num2").value);
    c= a + b;
    console.log(c);
    document.getElementById("answer").value= c;
    }