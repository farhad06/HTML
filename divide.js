function multiply(){
	n1=document.getElementById("first").value;
	n2=document.getElementById("second").value;
    document.getElementById("result").innerHTML=n1*n2;
}
function divide(){
	n1=document.getElementById("first").value;
	n2=document.getElementById("second").value;
    document.getElementById("result").innerHTML=n1/n2;
}
//to see current url
//console.log(document.URL);
//see current variable name
/*var name='abcd';
var n=150;
this[name]=n;
console.log(this[name]);*/
//see extension name

/*exten="abc.html";
console.log(exten.split(".").pop());
file="xzs.js";
console.log(file.split(".").pop());*/
/*function minues(n){
	if(n<=13){
		return (13-n);
	}else{
		return (n-13)*2;
	}
}
alert(minues(3));
alert(minues(15));*/
/*function sum(n1,n2){
	if(n1==n2){
		return (n1+n2)*3;
	}else{
		return n1+n2;
	}
}
console.log(sum(12,20));
console.log(sum(10,10));*/
/*function a(z,x){
	if(z==50 || x==50){
		return (true);
	}else if( (z+x)==50){
		return (true);

	}else{
		return z+x;
	}
}
console.log(a(5,20));
console.log(a(30,20));*/
/*function pos_neg(a,b){
	if((a>0 && b<0) || (a<0 && b>0)){
		return true;

	}else{
		return false;
	}
}
console.log(pos_neg(2,2));
console.log(pos_neg(-2,-2));
console.log(pos_neg(-2,2));
console.log(pos_neg(2,-2));*/
/*function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("farhad"));*/
//farhad-->aadfhr
/*function large(m,n){
	if(m>n)
		return m;
	else
		return n;

}
console.log(large(5,6));
console.log(large(10,4));*/
/*function check(m,n,o){
	if((m*n*o)>0)
		return (" The sign is + ");
	 else
	 	return("The sign is - ");
}
alert( check(10,-2,1));*/
/*function palin(n){
	var q=n, s=0,r;
	while(q>0){
		r= q%10;
		s=s+(r*r*r);
		q=q/10;
	}
	if(s==n){
		return("The number is palindrome");
	}else{
		return("The number is not palindrome");
	}
}
console.log(palin(153)); 
console.log(palin(125));*/
/*function generate(){
	var i;
	for(i=0;i<=15;++i){
		if(i%2==0){
			document.write(i + " is even" + '<br>');
		}else{
			document.write(i + " is odd" + '<br>');
		}

	}
}
generate();*/
function print(){
	for (var i=0 ;i<=5;++i){
		for(var j= 0;j>=i;++j){
			document.write(" * ");
		}
		document.write('<br>');
	}
}
print();