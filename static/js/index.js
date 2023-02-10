"use strick";

let form = document.getElementsByTagName('form')[0];

let easy = document.getElementsByClassName('blog')[0];
let medium = document.getElementsByClassName('blog')[1];
let hard = document.getElementsByClassName('blog')[2];
let advance = document.getElementsByClassName('blog')[3];

let lenResult = document.getElementById('lenResult');

let strength = document.getElementsByClassName('left')[0];

let input1 = document.getElementsByClassName('input1')[0];
input1.value = '';

let range = form.elements[0];
range.value = 0;
let upper = form.elements[1];
let lower = form.elements[2];
let number = form.elements[3];
let symbol = form.elements[4];

let inputs = document.getElementsByClassName('in');

let a=0;

for(let i of inputs){
    i.addEventListener('click', (e)=>{
        if(i.checked){
            a+=1;
        }
        else{
            a-=1;
        }
        if(a<0){
            a=0;
        }
        if(a==1){
            easy.style.backgroundColor = 'green';
            medium.style.backgroundColor = 'black';
            hard.style.backgroundColor = 'black';
            advance.style.backgroundColor = 'black';
            strength.innerHTML = 'EASY';
        }
        if(a==2){
            medium.style.backgroundColor = 'rgb(241, 200, 64)';
            hard.style.backgroundColor = 'black';
            advance.style.backgroundColor = 'black';
            strength.innerHTML = 'MEDIUM';
        }
        if(a==3){
            hard.style.backgroundColor = 'orange';
            advance.style.backgroundColor = 'black';
            strength.innerHTML = 'HARD';
        }
        if(a==4){
            advance.style.backgroundColor = 'red';
            strength.innerHTML = 'ADVANCE';
        }
        if(a==0){
            easy.style.backgroundColor = 'black';
            medium.style.backgroundColor = 'black';
            hard.style.backgroundColor = 'black';
            advance.style.backgroundColor = 'black';
            strength.innerHTML = 'STRENGTH';
        }
        range.value = a;
        lenResult.innerHTML = a;
    });
}

let U = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let L = 'qwertyuiopasdfghjklzxcvbnm';
let N = '1234567890';
let S = '!@#$%&*_/?';
let R = '';

let u=0;
let l=0;
let n=0;
let s=0;

function generate(){
    
    let d='';
    let k=0;

    if(upper.checked){
        d+=U[Math.floor(Math.random()*(U.length))];
        R+=U;   
        u+=1;   
        if(u>1){
            u-=1;
            R=R.replace(U,'');
        }
    }
    else{
        u=0;
        R=R.replace(U,'');
    }
    if(lower.checked){
        d+=L[Math.floor(Math.random()*(L.length))];
        R+=L;
        l+=1;
        if(l>1){
            l-=1;
            R=R.replace(L,'');
        }
    }
    else{
        l=0;
        R=R.replace(L,'');
    }
    if(number.checked){
        d+=N[Math.floor(Math.random()*(N.length))];
        R+=N;
        n+=1;
        if(n>1){
            n-=1;
            R=R.replace(N,'');
        }
    }
    else{
        n=0;
        R=R.replace(N,'');
    }
    if(symbol.checked){
        d+=S[Math.floor(Math.random()*(S.length))];
        R+=S;
        s+=1;
        if(s>1){
            s-=1;
            R=R.replace(S,'');
        }
    }
    else{
        s=0;
        R=R.replace(S,'');
    }

    let t=R.length;
    let len = range.value;
    
    k=u+l+n+s;
    
    if(t!=0 && len!=0){
        for(let i=k;i<len;i++){
            let f=Math.floor(Math.random()*t);
            d += R[f];
            console.log(R);
        }
    }
    if(len==0){
        d='';
    }
    
    input1.value = d;

}

range.addEventListener('input', (e)=>{
    lenResult.innerHTML = e.target.value;
})

function copy(param){
    navigator.clipboard.writeText(input1.value);
    param.className = 'fa fa-check';
}   