let time = 59 
let timer = 9
let box = 1;
let click = 1;
let check = 0;
let marks = 0;
let count = 0;    
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
let one = [
"JavaScript ka use kis liye hota hai?",
"Sirf images banane ke liye",
"Webpage ko interactive banane ke liye",
"Computer clean karne ke liye",
"HTML delete karne ke liye"
]

let two = [
"JavaScript file ki extension kya hai?",
".html",
".css",
".js",
".php"
]

let three = [
"JavaScript mein variable declare karne ke liye kya use hota hai?",
"let",
"style",
"color",
"body"
]

let four = [
"Console par output dikhane ke liye kya use hota hai?",
"document.write()",
"alert()",
"prompt()",
"console.log()"
]

let five = [
"HTML element select karne ke liye kya use hota hai?",
"console.log()",
"document.getElementById()",
"localStorage",
"setInterval()"
]

let six = [
"JavaScript mein function banane ke liye kaunsa keyword hai?",
"function",
"style",
"const",
"return"
]

let seven = [
"JavaScript mein equality check karne ke liye kya use hota hai?",
"=",
"+",
"==",
"*"
]

let eight = [
"JavaScript mein array banane ke liye kya use hota hai?",
"{}",
"()",
"<>",
"[]"
]

let nine = [
"Browser mein data save karne ke liye kya use hota hai?",
"console",
"localStorage",
"document",
"window"
]

let ten = [
"Button click event ke liye kya use hota hai?",
"onclick",
"onload",
"onchange",
"onmouseover"
]
document.getElementById("question").textContent = one[0]
document.getElementById("a").textContent = one[1]
document.getElementById("b").textContent = one[2]
document.getElementById("c").textContent = one[3]
document.getElementById("d").textContent = one[4]

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
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= "#8E1523"
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= "#8e15235f"
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""
    fill1.style.borderColor= "#8E1523"
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= "#d8c4a0"
    chapter1.style.borderColor= "#8E1523"    
    chapter2.style.borderColor= ""    
    chapter3.style.borderColor= ""    
    chapter4.style.borderColor= ""    
        }
        
        else{
    fill1.style.backgroundColor= "white"

        }

}
    // B //
    function fillb() { 
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
                check=2
    let boxfill = box%2;
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= "#8E1523"
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= "#8e15235f"
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= ""
    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= "#8E1523"
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= "#d8c4a0"
    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= "#8E1523"    
    chapter3.style.borderColor= ""    
    chapter4.style.borderColor= ""        }
        else{
    fill2.style.backgroundColor= "white"

        }
    }
    // C //
    function fillc() { 
     let fill1 = document.getElementById('circle1');
     let fill2 = document.getElementById('circle2');
     let fill3 = document.getElementById('circle3');
     let fill4 = document.getElementById('circle4');
     let chapter1 = document.getElementById('chapter1');
     let chapter2 = document.getElementById('chapter2');
     let chapter3 = document.getElementById('chapter3');
     let chapter4 = document.getElementById('chapter4');click++
        box++
                check=3
    let boxfill = box%2;
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= "#8E1523"
    fill4.style.backgroundColor= ""
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= "#8e15235f"
    chapter4.style.backgroundColor= ""    
    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= "#8E1523"
    fill4.style.borderColor= "#d8c4a0" 
    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= ""    
    chapter3.style.borderColor= "#8E1523"    
    chapter4.style.borderColor= ""       }
        else{
    fill3.style.backgroundColor= "white"

        }
    }
    // D //
    function filld() { 
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
                check=4
    let boxfill = box%2;
        if(boxfill<=0 || click>2){
    fill1.style.backgroundColor= ""
    fill2.style.backgroundColor= ""
    fill3.style.backgroundColor= ""
    fill4.style.backgroundColor= "#8E1523"
    chapter1.style.backgroundColor= ""
    chapter2.style.backgroundColor= ""
    chapter3.style.backgroundColor= ""
    chapter4.style.backgroundColor= "#8e15235f"
    fill1.style.borderColor= "#d8c4a0"
    fill2.style.borderColor= "#d8c4a0"
    fill3.style.borderColor= "#d8c4a0"
    fill4.style.borderColor= "#8E1523"
    chapter1.style.borderColor= ""    
    chapter2.style.borderColor= ""    
    chapter3.style.borderColor= ""    
    chapter4.style.borderColor= "#8E1523"        }
        else{
    fill4.style.backgroundColor= "white"

        }
    }
    function submit() {
        count++
        let top = document.getElementById('top');
        let btn1 = document.getElementById('btn1');
        let btn2= document.getElementById('btn2');
        let main= document.getElementById('main');
click++
        
                if(count==1){
                document.getElementById("question").textContent = one[0]
                document.getElementById("a").textContent = one[1]
                document.getElementById("b").textContent = one[2]
                document.getElementById("c").textContent = one[3]
                document.getElementById("d").textContent = one[4]
                document.getElementById("p").textContent = "10 of 1"
   }             
                   else if(count==2){
                document.getElementById("question").textContent = two[0]
                document.getElementById("a").textContent = two[1]
                document.getElementById("b").textContent = two[2]
                document.getElementById("c").textContent = two[3]
                document.getElementById("d").textContent = two[4]
                document.getElementById("p").textContent = "10 of 2"
                }       
                else if(count==3){
                document.getElementById("question").textContent = three[0]
                document.getElementById("a").textContent = three[1]
                document.getElementById("b").textContent = three[2]
                document.getElementById("c").textContent = three[3]
                document.getElementById("d").textContent = three[4]
                document.getElementById("p").textContent = "10 of 3"

                }else if(count==4){
                document.getElementById("question").textContent = four[0]
                document.getElementById("a").textContent = four[1]
                document.getElementById("b").textContent = four[2]
                document.getElementById("c").textContent = four[3]
                document.getElementById("d").textContent = four[4]
                document.getElementById("p").textContent = "10 of 4"
               }else if(count==5){
                document.getElementById("question").textContent = five[0]
                document.getElementById("a").textContent = five[1]
                document.getElementById("b").textContent = five[2]
                document.getElementById("c").textContent = five[3]
                document.getElementById("d").textContent = five[4]
                document.getElementById("p").textContent = "10 of 5"
                }else if(count==6){
                document.getElementById("question").textContent = six[0]
                document.getElementById("a").textContent = six[1]
                document.getElementById("b").textContent = six[2]
                document.getElementById("c").textContent = six[3]
                document.getElementById("d").textContent = six[4]
                document.getElementById("p").textContent = "10 of 6"
                }else if(count==7){
                document.getElementById("question").textContent = seven[0]
                document.getElementById("a").textContent = seven[1]
                document.getElementById("b").textContent = seven[2]
                document.getElementById("c").textContent = seven[3]
                document.getElementById("d").textContent = seven[4]
                document.getElementById("p").textContent = "10 of 7"
                }else if(count==8){
                document.getElementById("question").textContent = eight[0]
                document.getElementById("a").textContent = eight[1]
                document.getElementById("b").textContent = eight[2]
                document.getElementById("c").textContent = eight[3]
                document.getElementById("d").textContent = eight[4]
                document.getElementById("p").textContent = "10 of 8"
                }
                else if(count==9){
                document.getElementById("question").textContent = nine[0]
                document.getElementById("a").textContent = nine[1]
                document.getElementById("b").textContent = nine[2]
                document.getElementById("c").textContent = nine[3]
                document.getElementById("d").textContent = nine[4]
                document.getElementById("p").textContent = "10 of 9"
                }else if(count==10){
                document.getElementById("question").textContent = ten[0]
                document.getElementById("a").textContent = ten[1]
                document.getElementById("b").textContent = ten[2]
                document.getElementById("c").textContent = ten[3]
                document.getElementById("d").textContent = ten[4]
                document.getElementById("p").textContent = "10 of 10"
                }else if(count==11){
   window.location.href = "result.html"
    
                
                
                }else{
                document.getElementById("question").textContent = ""
}           
            if(check==1 && count==2){
                checking=0
                marks=marks
                check1=1
            }
            else if(check==2 && count==2){
                marks++
                checking=1
                check1=2
            }      
            else if(check==3 && count==2){
                checking=0
                marks=marks
                check1 =3
            }      
            else if(check==4 && count==2){
                checking=0
                marks=marks
                check1=4
            }      
            else if(check==1 && count==3){
                checking=0
                marks=marks
                check2="a"
            }      
            else if(check==2 && count==3){
                checking=0
                marks=marks
                check2="b"
            }      
            else if(check==3 && count==3){
                marks++
                checking=1
                check2="c"
            }      
            else if(check==4 && count==3){
                checking=0
                marks=marks
                check2="d"
            }     
            else if(check==1 && count==4){
                marks++
                checking=1
                check3="a"
            }   
            else if(check==2 && count==4){
                checking=0
                marks=marks
                check3="b"
            }   
            else if(check==3 && count==4) { 
                checking=0
                marks=marks
                check3="c"
            }   
            else if(check==4 && count==4){
                checking=0
                marks=marks
                check3="d"
            }    
            else if(check==1 && count==5){
                checking=0
                marks=marks
                check4="a"
            }
            else if(check==2 && count==5){
                checking=0
                marks=marks
                check4="b"
            }
            else if(check==3 && count==5){
                checking=0
                marks=marks
                check4="c"
            }
            else if(check==4 && count==5){
                marks++
                checking=1
                check4 ="d"
            }     
            else if(check==1 && count==6){
                    checking=0
                    marks=marks
                    check5="a"
            }
            else if(check==2 && count==6){
                marks++
                checking=1
                check5="b"
            }
            else if(check==3 && count==6){
                checking=0
                marks=marks
                check5="c"
            }
            else if(check==4 && count==6){
                checking=0
                marks=marks
                check5="d"
            }
            else if(check==1 && count==7){
                checking=0
                marks=marks
                check6="a"
            }
            else if(check==2 && count==7){
                checking=0
                marks=marks
                check6="b"
            }
            else if(check==3 && count==7){
                marks++
                checking=1
                check6="c"
            }
            else if(check==4 && count==7){
                checking=0
                marks=marks
                check6="d"
            }     
            else if(check==1 && count==8){
                marks++
                checking=1
                check7="a"
            }
            else if(check==2 && count==8){
                checking=0
                marks=marks
                check7="b"
            }
            else if(check==3 && count==8){
                checking=0
                marks=marks
                check7="c"
            }
            else if(check==4 && count==8){
                checking=0
                marks=marks
                check7="d"
            }
            else if(check==1 && count==9){
                checking=0
                marks=marks
                check8="a"
            }
            else if(check==2 && count==9){
                checking=0
                marks=marks
                check8="b"
            }
            else if(check==3 && count==9){
                checking=0
                marks=marks
                check8="c"
            }
            else if(check==4 && count==9){
                marks++
                checking=1
                check8="d"
            }   
            else if(check==1 && count==10){
                checking=0
                marks=marks
                check9="a"
            }     
            else if(check==2 && count==10){
                marks++
                checking=1
                check9="b"
            }     
            else if(check==3 && count==10){
                checking=0
                marks=marks
                check9="c"
            }   
            else if(check==4 && count==10){
                checking=0
                marks=marks
                check9="d"
            }
            else if(check==1 && count==11){
                checking=0
                marks=marks
                check10="a"
            }
            else if(check==2 && count==11){
                checking=0
                marks=marks
                check10="c"
            }
            else if(check==3 && count==11){
                marks++
                checking=1
                check10 = "b"
            }
            else if(check==4 && count==11){
                checking=0
                marks=marks
                check10="d"
            }
            else{
                checking=0
                    marks=marks
                }
                timer=9
localStorage.setItem("check1" , check1);
localStorage.setItem("check2" , check2)
localStorage.setItem("check3" , check3)
localStorage.setItem("check4" , check4)
localStorage.setItem("check5" , check5)
localStorage.setItem("check6" , check6)
localStorage.setItem("check7" , check7)
localStorage.setItem("check8" , check8)
localStorage.setItem("check9" , check9)
localStorage.setItem("check10" , check10) 
localStorage.setItem("marks" ,marks)
localStorage.setItem("one0", one[0]);
localStorage.setItem("one1", one[1]);
localStorage.setItem("one2", one[2]);
localStorage.setItem("one3", one[3]);
localStorage.setItem("one4", one[4]);

localStorage.setItem("two0", two[0]);
localStorage.setItem("two1", two[1]);
localStorage.setItem("two2", two[2]);
localStorage.setItem("two3", two[3]);
localStorage.setItem("two4", two[4]);

localStorage.setItem("three0", three[0]);
localStorage.setItem("three1", three[1]);
localStorage.setItem("three2", three[2]);
localStorage.setItem("three3", three[3]);
localStorage.setItem("three4", three[4]);

localStorage.setItem("four0", four[0]);
localStorage.setItem("four1", four[1]);
localStorage.setItem("four2", four[2]);
localStorage.setItem("four3", four[3]);
localStorage.setItem("four4", four[4]);

localStorage.setItem("five0", five[0]);
localStorage.setItem("five1", five[1]);
localStorage.setItem("five2", five[2]);
localStorage.setItem("five3", five[3]);
localStorage.setItem("five4", five[4]);

localStorage.setItem("six0", six[0]);
localStorage.setItem("six1", six[1]);
localStorage.setItem("six2", six[2]);
localStorage.setItem("six3", six[3]);
localStorage.setItem("six4", six[4]);

localStorage.setItem("seven0", seven[0]);
localStorage.setItem("seven1", seven[1]);
localStorage.setItem("seven2", seven[2]);
localStorage.setItem("seven3", seven[3]);
localStorage.setItem("seven4", seven[4]);

localStorage.setItem("eight0", eight[0]);
localStorage.setItem("eight1", eight[1]);
localStorage.setItem("eight2", eight[2]);
localStorage.setItem("eight3", eight[3]);
localStorage.setItem("eight4", eight[4]);

localStorage.setItem("nine0", nine[0]);
localStorage.setItem("nine1", nine[1]);
localStorage.setItem("nine2", nine[2]);
localStorage.setItem("nine3", nine[3]);
localStorage.setItem("nine4", nine[4]);

localStorage.setItem("ten0", ten[0]);
localStorage.setItem("ten1", ten[1]);
localStorage.setItem("ten2", ten[2]);
localStorage.setItem("ten3", ten[3]);
localStorage.setItem("ten4", ten[4]);
// let checkone = localStorage.getItem("check1")
// let checktwo = localStorage.getItem("check2")
// let checkthree = localStorage.getItem("check3")
// let checkfour = localStorage.getItem("check4")
// let checkfive = localStorage.getItem("check5")
// let checksix = localStorage.getItem("check6")
// let checkseven = localStorage.getItem("check7")
// let checkeight = localStorage.getItem("check8")
// let checknine = localStorage.getItem("check9")
// let checkten = localStorage.getItem("check10")

            }
setInterval(function timing() {
time--
document.getElementById('time').textContent = time
document.getElementById('long').textContent = timer
if(time==0) {
time=59
timer--
}
else if(timer==0){
  timer=9
submit()
}
else if(time<=9){
document.getElementById('time').textContent = "0"+time
}
else if(timer<=9){
document.getElementById('long').textContent = "0"+timer
}

},16.66666666666667);
