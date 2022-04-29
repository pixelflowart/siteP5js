var descricao = [];
var obra = [];
var button = [];
var cont;
var obraAtual = 0;
var bt1,bt2,bt3,bt4;
var cx;
var size;
function setup(){
    createCanvas(window.innerWidth*0.80,window.innerHeight*0.5);
    background(255);

    button[0] =  createButton('Project I');
    button[1] = createButton('Project II');
    button[2] = createButton('Project III');
    button[3] = createButton('Project IV');
    button[0].mousePressed( btn1);
    button[1].mousePressed( btn2);
    button[2].mousePressed( btn3);
    button[3].mousePressed( btn4);
    cont = 0;
    cont2 = 0;
    valorTotal = width/3;
    nl = 15;
    size = 20;
    numberObra = 0;
    obra[0] = new Obra(nl);
    obra[1] = new Obra(nl);
    obra[2] = new Obra(nl);
    obra[3] = new Obra(nl);

    descricao[0] = "Stones in my heart";
    descricao[1] = "Aquarela";
    descricao[2] = "weaving destinations";
    descricao[3] = "City in my eyes";
    
}

function draw(){


    if (cont<valorTotal){
        push();
        switch (numberObra){
            case 0:
                obra[0].criarArte(12,10);

                break;
            case 1:
                obra[0].criarArte(0,10,1,0,0,30,0);

                break;
            case 2:
                obra[0].criarArte(1,1,2,20);

                break;
            case 3:
                obra[0].criarArte(1,1,3,20);

                break;
        }

        pop();
    }


    if (cont2<2){cont2++};
    cont++;
    if (cont2<2){
            criarDiv();
    }
    
}
function criarDiv(){
    var ndiv = document.createElement('ndiv');
    ndiv.textContent=descricao[numberObra];
    ndiv.style.padding='15px';
    ndiv.style.paddingTop='30px';
    //ndiv.style.backgroundColor='red';
    cx=document.querySelector('div');
    cx.appendChild(ndiv);
}
function removeDiv(){

    cx.removeChild(cx.lastElementChild);
}

function btn1(){
    cont = 0;
    rect(0,0,width,height);
    numberObra = 0;
    removeDiv()
    cont2 = 0;
}
function btn2(){
    cont = 0;
    rect(0,0,width,height);
    numberObra = 1;
    removeDiv()
    cont2 = 0;
}
function btn3(){
    cont = 0;
    rect(0,0,width,height);
    numberObra = 2;
    removeDiv()
    cont2 = 0;
}
function btn4(){
    cont = 0;
    rect(0,0,width,height);
    numberObra = 3;
    removeDiv()
    cont2 = 0;

}
class Obra{
    constructor(x){
        this.x = x;
        this.w = width;
        this.h = height;
    }

    borda(){
        stroke(170);
        strokeWeight(50);
        noFill();
        rect(0, 0, this.w, this.h);
    }

    desenharPontos(vl,rr=0,gg=0,bb=0){
        let r,g,b,a;
        for (let i=0; i<vl; i++){
            r = random(0,50);
            g = random(0,50);
            b = random(0,50);
            a = random(0,255);
            stroke(r+rr, r+gg, r+bb, a);
            strokeWeight(random(0.03, 10));
            for(let i=0; i<30; i++){
                point(random(0,this.w),random(0,this.h));
            }
            }
    }

    desenharLinhasCl(vl){
        let r,g,b,a;
        for (let i=0; i<vl; i++){
            r = random(0,255);
            g = random(0,255);
            b = random(0,255);
            a = random(0,255);
            stroke(random(50,100)+i, 30+i, 30+i, a);
            strokeWeight(random(0.03, 1.1));
            line(random(0,this.w),random(0,this.h),random(0,this.w),random(0,this.h));
            }
    }

    desenharQuad(vl,sx){
        let r,g,b,a;
        for (let i=0; i<vl; i++){
            r = random(0,255);
            g = random(0,255);
            b = random(0,255);
            a = random(0,255);
            stroke(i, 10+i, random(0,100)+i, a);
            strokeWeight(random(0.03, 4.1));
            fill(a, r, r, a);
            quad(random(0,this.w),random(0,this.h),random(0,this.w),random(0,this.h));
            noFill();
            quad(random(0,this.w),random(0,this.h),random(0,this.w),sx);
            circle(random(width/3, width),random(width/3, width/2.5),random(width/3,width/3.5))
            }
    }


    desenharRect(vl,sx){
        let r,g,b,a;
        for (let i=0; i<vl; i++){
            r = random(0,255);
            g = random(0,255);
            b = random(0,255);
            a = random(0,255);
            stroke(random(50,100)+i, 30+i, 30+i, a);
            strokeWeight(random(0.03, 4.1));
            fill(r, r, b, a);
            rect(random(0,this.w),random(0,this.h),sx,sx);
            noFill();
            rect(random(0,this.w),random(0,this.h),sx,sx);
            }
    }

    criarArte(nl=12,np=12,y=0,s,rr,gg,bb){

        if (y == 0){

            this.desenharPontos(np,rr,gg,bb);
            this.desenharLinhasCl(nl);
            this.desenharLinhasCl(nl);
            this.desenharPontos(np,rr,gg,bb);
            this.desenharLinhasCl(nl);
            this.desenharLinhasCl(nl);
            this.borda();
    
        } else if(y == 1){

            this.desenharPontos(np,rr,gg,bb);
            this.desenharLinhasCl(nl);
            this.desenharLinhasCl(nl);
            this.desenharPontos(np,100,gg,bb);
            this.desenharLinhasCl(nl);
            this.desenharLinhasCl(nl);
            this.borda();

        }else if(y == 2){
            for(let i =0; i< 100; i++){
            this.desenharQuad(np,s);
            }
            this.desenharQuad(np,s);

             this. desenharQuad(np,s);
             this.desenharQuad(np,s);
            this.borda();
        } else {
            for(let i =0; i< 100; i++){
                this.desenharRect(np,s);
                }
                this.desenharRect(np,s);
    
                 this. desenharRect(np,s);
                 this.desenharRect(np,s);
                this.borda();
        }

    }





}

