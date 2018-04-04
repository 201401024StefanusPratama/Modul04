alert('Masukan Tinggi A');


var tA = prompt('Masukan tinggi A');
console.log('tinggiA '+tA);
    var tAA= 2;
    console.log(tAA);
    var uA = prompt(' Masukan Umur A');
console.log('umurA '+uA);
    var uAA=2;
    
    console.log(uAA);
    var tB = prompt('Masukan tinggi B');
console.log('tinggiA '+tB);
    var uB = prompt(' Masukan Umur B');
console.log('umurA '+tB);
    
    console.log(tAA+uAA);
    //console.log(tB+uB);
    
//    alert(name + ' adalah seorang yang berumur  ' + age + ' pekerjaannya ' + job + '. is he married? ' + isMarried); 
    
    
var nameA = "John";
console.log('namaA '+nameA);

var nameB = "teman John";
console.log('namaB '+nameB);

var nameC = "orang ketiga";
console.log('namaB '+nameC);
    

var tinggiA = 165;
console.log('TinggiA '+tinggiA);
var usiaA = 21;
console.log('UsiaA '+usiaA);
var tinggiB = 173;
console.log('TinggiB '+tinggiB);  
var usiaB = 25;
console.log('UsiaB '+usiaB);
var tinggiC = 162;
console.log('TinggiC '+tinggiC); 
var usiaC = 34;
console.log('UsiaC '+usiaC);
    
    
var hasilA=tinggiA+(5*usiaA);
var hasilB=tinggiB+(5*usiaB);
var hasilC=tinggiC+(5*usiaC);
    

console.log('skorA='+hasilA+' skorB='+hasilB +' skorC '+hasilC);
    
    if((hasilA>hasilB)&&(hasilA>hasilC)){
        console.log('Winner =A dg skor ='+hasilA);
    }else if((hasilB>hasilA)&&(hasilB>hasilC)){
            console.log('Winner =B dg skor = '+hasilB);
             }
else if((hasilC>hasilA)&&(hasilC>hasilB)){
            console.log('Winner =C dg skor = '+hasilC);
             }
    else if((hasilC==hasilA)&&(hasilC==hasilB)){
            console.log('draw atau seri');
             }