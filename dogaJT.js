/*420 should return ["4", "42", "420"]
2017 should return ["2", "20", "201", "2017"]
2010 should return ["2", "20", "201", "2010"]
4020 should return ["4", "40", "402", "4020"]
80200 should return ["8", "80", "802", "8020", "80200"]*/
function bont(a) {
    let ered=[];
    let na = 0;
    for (let i = 1; i < a.length; i++) {
        na += a.slice(0,i);
        ered.push(na);
    }
    return ered;
}
console.log(bont(420));

function noword(b){
    let szab = /^d/;
    let ered = 0;
    for (let i = 0; i < b.length; i++) {
        ered += szab.test(b[i]);
    }
return ered;
}
function masal(c){
    let betu = "aáeéiíoóöőuúüű";
   let ered = c.replaceAll(/a-ű/,"");
    /*for (let i = 0; i < c.length; i++) {
        for (let j = 0; j <= betu.length; j++) {
            if (betu[j] != c[i]) {
                ered += c[i];
            }
            else{
                ered += "";
            } 
        }
    }*/
   

    return ered;
}
console.log(masal("The wether"))
function fact(d) {
    let ered = 1; 
    while (d > 0) {
        ered *=d;
        d--;
    }
    return ered;
}