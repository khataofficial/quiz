let time = 60 
let timer = 20
let box = 1;
let click = 1;
let check = 0;
let marks = 0;
let count = 1;    
let checking = 0;
let check1 = "";
let check2 = "";
let check3 = "";
let check4 = "";
let check5 = "";
let check6 = "";
let check7 = "";
let check8 = "";
let check9 = "";
let check10 = "";
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
      let chapter4 = document.getElementById('chapter4');
let checkone = localStorage.getItem("check1");
let checktwo = localStorage.getItem("check2");
let checkthree = localStorage.getItem("check3");
let checkfour = localStorage.getItem("check4");
let checkfive = localStorage.getItem("check5");
let checksix = localStorage.getItem("check6");
let checkseven = localStorage.getItem("check7");
let checkeight = localStorage.getItem("check8");
let checknine = localStorage.getItem("check9");
let checkten = localStorage.getItem("check10");
let marks1 = localStorage.getItem("marks")
let grade = marks1/10*100
let one0 = localStorage.getItem("one0");
let one1 = localStorage.getItem("one1");
let one2 = localStorage.getItem("one2");
let one3 = localStorage.getItem("one3");
let one4 = localStorage.getItem("one4");

let two0 = localStorage.getItem("two0");
let two1 = localStorage.getItem("two1");
let two2 = localStorage.getItem("two2");
let two3 = localStorage.getItem("two3");
let two4 = localStorage.getItem("two4");

let three0 = localStorage.getItem("three0");
let three1 = localStorage.getItem("three1");
let three2 = localStorage.getItem("three2");
let three3 = localStorage.getItem("three3");
let three4 = localStorage.getItem("three4");

let four0 = localStorage.getItem("four0");
let four1 = localStorage.getItem("four1");
let four2 = localStorage.getItem("four2");
let four3 = localStorage.getItem("four3");
let four4 = localStorage.getItem("four4");

let five0 = localStorage.getItem("five0");
let five1 = localStorage.getItem("five1");
let five2 = localStorage.getItem("five2");
let five3 = localStorage.getItem("five3");
let five4 = localStorage.getItem("five4");

let six0 = localStorage.getItem("six0");
let six1 = localStorage.getItem("six1");
let six2 = localStorage.getItem("six2");
let six3 = localStorage.getItem("six3");
let six4 = localStorage.getItem("six4");

let seven0 = localStorage.getItem("seven0");
let seven1 = localStorage.getItem("seven1");
let seven2 = localStorage.getItem("seven2");
let seven3 = localStorage.getItem("seven3");
let seven4 = localStorage.getItem("seven4");

let eight0 = localStorage.getItem("eight0");
let eight1 = localStorage.getItem("eight1");
let eight2 = localStorage.getItem("eight2");
let eight3 = localStorage.getItem("eight3");
let eight4 = localStorage.getItem("eight4");

let nine0 = localStorage.getItem("nine0");
let nine1 = localStorage.getItem("nine1");
let nine2 = localStorage.getItem("nine2");
let nine3 = localStorage.getItem("nine3");
let nine4 = localStorage.getItem("nine4");

let ten0 = localStorage.getItem("ten0");
let ten1 = localStorage.getItem("ten1");
let ten2 = localStorage.getItem("ten2");
let ten3 = localStorage.getItem("ten3");
let ten4 = localStorage.getItem("ten4");
document.getElementById("question").textContent = one0
document.getElementById("a").textContent = one1
document.getElementById("b").textContent = one2
document.getElementById("c").textContent = one3
document.getElementById("d").textContent = one4
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= "#0eff01e9"    
    chapter3.style.borderColor= ""    
    chapter4.style.borderColor= "" 
 
if(checkone=="a"){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"

    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkone=="b"){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkone=="c"){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checkone=="d"){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
   // A //
    function filla() { 
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');
click++
        box++
        check=1
    let boxfill = box%2;

}
    // B //
    function fillb() { 
     click++
        box++
                check=2
    let boxfill = box%2;
            }
    // C //
    function fillc() { 
     click++
        box++
                check=3
    let boxfill = box%2;
    }
    // D //
    function filld() { 
     click++
        box++
                check=4
    let boxfill = box%2;
    }
    function submit() {
        count++
        let top = document.getElementById('top');
        let btn1 = document.getElementById('btn1');
        let btn2= document.getElementById('btn2');
        let main= document.getElementById('main');
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');
let checkone = localStorage.getItem("check1")
let checktwo = localStorage.getItem("check2")
let checkthree = localStorage.getItem("check3")
let checkfour = localStorage.getItem("check4")
let checkfive = localStorage.getItem("check5")
let checksix = localStorage.getItem("check6")
let checkseven = localStorage.getItem("check7")
let checkeight = localStorage.getItem("check8")
let checknine = localStorage.getItem("check9")
let checkten = localStorage.getItem("check10")

click++
        if(count==11){
                window.location.href="index.html"
                }else{
                document.getElementById("question").textContent = ""
}
if(checkone=="a" && count==1){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"

    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkone=="b" && count==1){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkone=="c" && count==1){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checkone=="d" && count==1){
    document.getElementById("question").textContent = one0
    document.getElementById("a").textContent = one1
    document.getElementById("b").textContent = one2
    document.getElementById("c").textContent = one3
    document.getElementById("d").textContent = one4
    document.getElementById("p").textContent = "10 of 1"
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
else if(checktwo=="a" && count==2){    
    document.getElementById("question").textContent = two0
    document.getElementById("a").textContent = two1
    document.getElementById("b").textContent = two2
    document.getElementById("c").textContent = two3
    document.getElementById("d").textContent = two4
    document.getElementById("p").textContent = "10 of 2"

    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checktwo=="b" && count==2){
    document.getElementById("question").textContent = two0
    document.getElementById("a").textContent = two1
    document.getElementById("b").textContent = two2
    document.getElementById("c").textContent = two3
    document.getElementById("d").textContent = two4
    document.getElementById("p").textContent = "10 of 2"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#8E1523"
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checktwo=="c" && count==2){
    document.getElementById("question").textContent = two0
    document.getElementById("a").textContent = two1
    document.getElementById("b").textContent = two2
    document.getElementById("c").textContent = two3
    document.getElementById("d").textContent = two4
    document.getElementById("p").textContent = "10 of 2"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checktwo=="d" && count==2){
    document.getElementById("question").textContent = two0
    document.getElementById("a").textContent = two1
    document.getElementById("b").textContent = two2
    document.getElementById("c").textContent = two3
    document.getElementById("d").textContent = two4
    document.getElementById("p").textContent = "10 of 2"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
else if(checkthree=="a" && count==3){
    document.getElementById("question").textContent = three0
    document.getElementById("a").textContent = three1
    document.getElementById("b").textContent = three2
    document.getElementById("c").textContent = three3
    document.getElementById("d").textContent = three4
    document.getElementById("p").textContent = "10 of 3"
    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkthree=="b" && count==3){    
    document.getElementById("question").textContent = three0
    document.getElementById("a").textContent = three1
    document.getElementById("b").textContent = three2
    document.getElementById("c").textContent = three3
    document.getElementById("d").textContent = three4
    document.getElementById("p").textContent = "10 of 3"

    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= "#8E1523"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkthree=="c" && count==3){
    document.getElementById("question").textContent = three0
    document.getElementById("a").textContent = three1
    document.getElementById("b").textContent = three2
    document.getElementById("c").textContent = three3
    document.getElementById("d").textContent = three4
    document.getElementById("p").textContent = "10 of 3"
    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checkthree=="d" && count==3){
    document.getElementById("question").textContent = three0
    document.getElementById("a").textContent = three1
    document.getElementById("b").textContent = three2
    document.getElementById("c").textContent = three3
    document.getElementById("d").textContent = three4
    document.getElementById("p").textContent = "10 of 3"

    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
else if(checkfour=="a" && count==4){
    document.getElementById("question").textContent = four0
    document.getElementById("a").textContent = four1
    document.getElementById("b").textContent = four2
    document.getElementById("c").textContent = four3
    document.getElementById("d").textContent = four4
    document.getElementById("p").textContent = "10 of 4"

    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkfour=="b" && count==4){
    document.getElementById("question").textContent = four0
    document.getElementById("a").textContent = four1
    document.getElementById("b").textContent = four2
    document.getElementById("c").textContent = four3
    document.getElementById("d").textContent = four4
    document.getElementById("p").textContent = "10 of 4"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#8E1523"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= ""
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkfour=="c" && count==4){
    document.getElementById("question").textContent = four0
    document.getElementById("a").textContent = four1
    document.getElementById("b").textContent = four2
    document.getElementById("c").textContent = four3
    document.getElementById("d").textContent = four4
    document.getElementById("p").textContent = "10 of 4"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checkfour=="d" && count==4){
    document.getElementById("question").textContent = four0
    document.getElementById("a").textContent = four1
    document.getElementById("b").textContent = four2
    document.getElementById("c").textContent = four3
    document.getElementById("d").textContent = four4
    document.getElementById("p").textContent = "10 of 4"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkfive=="a" && count==5){
    document.getElementById("question").textContent = five0
    document.getElementById("a").textContent = five1
    document.getElementById("b").textContent = five2
    document.getElementById("c").textContent = five3
    document.getElementById("d").textContent = five4
    document.getElementById("p").textContent = "10 of 5"
    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkfive=="b" && count==5){
    document.getElementById("question").textContent = five0
    document.getElementById("a").textContent = five1
    document.getElementById("b").textContent = five2
    document.getElementById("c").textContent = five3
    document.getElementById("d").textContent = five4
    document.getElementById("p").textContent = "10 of 5"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkfive=="c" && count==5){
    document.getElementById("question").textContent = five0
    document.getElementById("a").textContent = five1
    document.getElementById("b").textContent = five2
    document.getElementById("c").textContent = five3
    document.getElementById("d").textContent = five4
    document.getElementById("p").textContent = "10 of 5"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checkfive=="d" && count==5){
    document.getElementById("question").textContent = five0
    document.getElementById("a").textContent = five1
    document.getElementById("b").textContent = five2
    document.getElementById("c").textContent = five3
    document.getElementById("d").textContent = five4
    document.getElementById("p").textContent = "10 of 5"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
else if(checksix=="a" && count==6){
    document.getElementById("question").textContent = six0
    document.getElementById("a").textContent = six1
    document.getElementById("b").textContent = six2
    document.getElementById("c").textContent = six3
    document.getElementById("d").textContent = six4
    document.getElementById("p").textContent = "10 of 6"

    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checksix=="b" && count==6){
    document.getElementById("question").textContent = six0
    document.getElementById("a").textContent = six1
    document.getElementById("b").textContent = six2
    document.getElementById("c").textContent = six3
    document.getElementById("d").textContent = six4
    document.getElementById("p").textContent = "10 of 6"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#8E1523"
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checksix=="c" && count==6){
    document.getElementById("question").textContent = six0
    document.getElementById("a").textContent = six1
    document.getElementById("b").textContent = six2
    document.getElementById("c").textContent = six3
    document.getElementById("d").textContent = six4
    document.getElementById("p").textContent = "10 of 6"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checksix=="d" && count==6){
    document.getElementById("question").textContent = six0
    document.getElementById("a").textContent = six1
    document.getElementById("b").textContent = six2
    document.getElementById("c").textContent = six3
    document.getElementById("d").textContent = six4
    document.getElementById("p").textContent = "10 of 6"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
else if(checkseven=="a" && count==7){
    document.getElementById("question").textContent = seven0
    document.getElementById("a").textContent = seven1
    document.getElementById("b").textContent = seven2
    document.getElementById("c").textContent = seven3
    document.getElementById("d").textContent = seven4
    document.getElementById("p").textContent = "10 of 7"

    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkseven=="b" && count==7){
    document.getElementById("question").textContent = seven0
    document.getElementById("a").textContent = seven1
    document.getElementById("b").textContent = seven2
    document.getElementById("c").textContent = seven3
    document.getElementById("d").textContent = seven4
    document.getElementById("p").textContent = "10 of 7"

    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= "#8E1523"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkseven=="c" && count==7){
    document.getElementById("question").textContent = seven0
    document.getElementById("a").textContent = seven1
    document.getElementById("b").textContent = seven2
    document.getElementById("c").textContent = seven3
    document.getElementById("d").textContent = seven4
    document.getElementById("p").textContent = "10 of 7"

    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checkseven=="d" && count==7){
    document.getElementById("question").textContent = seven0
    document.getElementById("a").textContent = seven1
    document.getElementById("b").textContent = seven2
    document.getElementById("c").textContent = seven3
    document.getElementById("d").textContent = seven4
    document.getElementById("p").textContent = "10 of 7"

    fill1.style.backgroundColor= "#0eff01e9"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= "#0dff015f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= "#0eff01e9"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
else if(checkeight=="a" && count==8){
    document.getElementById("question").textContent = eight0
    document.getElementById("a").textContent = eight1
    document.getElementById("b").textContent = eight2
    document.getElementById("c").textContent = eight3
    document.getElementById("d").textContent = eight4
    document.getElementById("p").textContent = "10 of 8"

    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkeight=="b" && count==8){
    document.getElementById("question").textContent = eight0
    document.getElementById("a").textContent = eight1
    document.getElementById("b").textContent = eight2
    document.getElementById("c").textContent = eight3
    document.getElementById("d").textContent = eight4
    document.getElementById("p").textContent = "10 of 8"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#8E1523"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= ""
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkeight=="c" && count==8){
    document.getElementById("question").textContent = eight0
    document.getElementById("a").textContent = eight1
    document.getElementById("b").textContent = eight2
    document.getElementById("c").textContent = eight3
    document.getElementById("d").textContent = eight4
    document.getElementById("p").textContent = "10 of 8"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checkeight=="d" && count==8){
    document.getElementById("question").textContent = eight0
    document.getElementById("a").textContent = eight1
    document.getElementById("b").textContent = eight2
    document.getElementById("c").textContent = eight3
    document.getElementById("d").textContent = eight4
    document.getElementById("p").textContent = "10 of 8"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#0eff01e9"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#0dff015f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#0eff01e9"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checknine=="a" && count==9){
    document.getElementById("question").textContent = nine0
    document.getElementById("a").textContent = nine1
    document.getElementById("b").textContent = nine2
    document.getElementById("c").textContent = nine3
    document.getElementById("d").textContent = nine4
    document.getElementById("p").textContent = "10 of 9"
    console.log(check10)

    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checknine=="b" && count==9){
    document.getElementById("question").textContent = nine0
    document.getElementById("a").textContent = nine1
    document.getElementById("b").textContent = nine2
    document.getElementById("c").textContent = nine3
    document.getElementById("d").textContent = nine4
    document.getElementById("p").textContent = "10 of 9"
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checknine=="c" && count==9){
    document.getElementById("question").textContent = nine0
    document.getElementById("a").textContent = nine1
    document.getElementById("b").textContent = nine2
    document.getElementById("c").textContent = nine3
    document.getElementById("d").textContent = nine4
    document.getElementById("p").textContent = "10 of 9"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= "#8E1523"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= ""
}
else if(checknine=="d" && count==9){
    document.getElementById("question").textContent = nine0
    document.getElementById("a").textContent = nine1
    document.getElementById("b").textContent = nine2
    document.getElementById("c").textContent = nine3
    document.getElementById("d").textContent = nine4
    document.getElementById("p").textContent = "10 of 9"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#0eff01e9"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#0dff015f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#0eff01e9"
    chapter3.style.borderColor= ""
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
}
else if(checkten=="a" && count==10){
    document.getElementById("question").textContent = ten0
    document.getElementById("a").textContent = ten1
    document.getElementById("b").textContent = ten2
    document.getElementById("c").textContent = ten3
    document.getElementById("d").textContent = ten4
    document.getElementById("p").textContent = "10 of 10"
    console.log(ten0)


    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= "#8E1523"
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkten=="b" && count==10){
    document.getElementById("question").textContent = ten0
    document.getElementById("a").textContent = ten1
    document.getElementById("b").textContent = ten2
    document.getElementById("c").textContent = ten3
    document.getElementById("d").textContent = ten4
    document.getElementById("p").textContent = "10 of 10"
    console.log(ten0)


    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= "#8E1523"
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkten=="c" && count==10){
    document.getElementById("question").textContent = ten0
    document.getElementById("a").textContent = ten1
    document.getElementById("b").textContent = ten2
    document.getElementById("c").textContent = ten3
    document.getElementById("d").textContent = ten4
    document.getElementById("p").textContent = "10 of 10"


    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= ""

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= ""
}
else if(checkten=="d" && count==10){
    document.getElementById("question").textContent = ten0
    document.getElementById("a").textContent = ten1
    document.getElementById("b").textContent = ten2
    document.getElementById("c").textContent = ten3
    document.getElementById("d").textContent = ten4
    document.getElementById("p").textContent = "10 of 10"

    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= "#8E1523"

    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= "#8e15235f"

    chapter1.style.borderColor= ""
    chapter2.style.borderColor= ""
    chapter3.style.borderColor= "#0eff01e9"
    chapter4.style.borderColor= "#8E1523"

    fill1.style.borderColor= ""
    fill2.style.borderColor= ""
    fill3.style.borderColor= ""
    fill4.style.borderColor= "#d8c4a0"
} 

                 if(check==2 && count==2){
}
    else if(check==3 && count==3){
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#0eff01e9"
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#0dff015f"
    chapter4.style.backgroundColor= ""
    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= ""    
    chapter3.style.borderColor= "#0eff01e9"    
    chapter4.style.borderColor= ""        }
        else{
        }  

            }

if(grade<=60){
document.getElementById('totaltime').textContent = grade
let circle = document.getElementById('totaltime');
circle.style.backgroundColor = "#8e15235f"
circle.style.borderColor= "#8E1523"
circle.style.borderStyle= "solid"
circle.style.borderWidth= "2px"
circle.style.color= "black"
}
else{
document.getElementById('totaltime').textContent = grade
let circle = document.getElementById('totaltime');
circle.style.backgroundColor = "#0dff015f"
circle.style.borderColor= "#fbf4e3"
circle.style.borderStyle= "solid"
circle.style.borderWidth= "2px"
circle.style.color= "white"
}
  //=======================================\\
 //            second page                  \\
//===========================================\\