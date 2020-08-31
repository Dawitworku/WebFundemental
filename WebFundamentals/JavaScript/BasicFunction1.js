function a(){
    return 35;             // Actual output- 35
}                          // predicted output- 35
console.log(a())
//////////////////////////
function a(b){
    return b;                     // Actual output- 6
                                  // predicted output- 6
}
console.log(a(2) + a(4));
//////////////////////////
function a(){                        //Actual output- 8         predicted output- 8
    return 4;
}
console.log(a()+a());
///////////////////////////
function a(b){
        console.log(b);              //Actual output- 3, 9         predicted output- 3, 9
        return b*3;
    }
    console.log(a(3));
/////////////////////////
function a(b){
    return b*4;                      //Actual output- 40         predicted output- 40
    console.log(b);
 }
 console.log(a(10));
 ////////////////////////
 function a(b){
    if(b<10) {
        return 2;                  //Actual output- 4         predicted output- 4, 15
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
 ///////////////////////
 function a(b,c){
    return b*c;                //Actual output- 10,3, 30         predicted output- 10,3 ,30
}
console.log(10,3);
console.log( a(3,10) );
//////////////////////////
function a(b){
    for(var i=0; i<10; i++){      //Actual output-3,4          predicted output- 3,4
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//////////////////////////
function a(){
    for(var i=0; i<10; i++){        //Actual output-2,5,8,11     predicted output-2,5,8,11 
        i = i +2;
        console.log(i);
    }
}
a();
///////////////////////////
function a(b,c){
    for(var i=b; i<c; i++) {     //Actual output-                  predicted output-
       console.log(i);          // 0,1,2,3,4,5,6,7,8,9,0,        0,1,2,3,4,5,6,7,8,9,0
   }                            //1,2,3,4,5,6,7,8,9,0        
   return b*c;
}
a(0,10);
console.log(a(0,10));
/////////////////////////
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){      //Actual output-                     predicted output-
           console.log(j);  // Nothing.Function hasn't been called    // Nothing.Function hasn't been called
       }
       console.log(i);
    }
}
/////////////////////////
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){ // function hasn't been called. Nothing will happen
            console.log(i,j);
        }
        console.log(j,i);
    }
}
///////////////////////////
var z = 10;
function a(){
    var z = 15;       //Actual output-  10             predicted output- 10
    console.log(z);
}
console.log(z);
///////////////////////
var z = 10;
function a(){
    var z = 15;
    console.log(z);         //Actual output- 15, 10             predicted output- 15, 10
}
a();
console.log(z);
/////////////////////
var z = 10;
function a(){
    var z = 15;
    console.log(z);     //Actual output- 15, 15             predicted output- 15, 15
    return z;
}
z = a();
console.log(z);