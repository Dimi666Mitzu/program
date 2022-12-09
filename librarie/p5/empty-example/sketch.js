function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
var StarsX
var Starsy
var i

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
    //le contournement eazyyy
    background(0);//univers
  
   fill(247,220,111);
    for (let i = 0; i < 200; i++) {
  StarsX=random()*2500;
	StarsY=random()*2000;
	circle(StarsX,StarsY,3); }

    
    /*etoiles
    rect(50,50,5);rect(100,30,5);
  rect(250,50,5);rect(300,50,5);
    rect(400,70,5); rect(70,130,5);
    rect(225,100,5);rect(350,150,5);
    rect(40,300,5);rect(240,230,5);
    rect(360,260,5);rect(120,350,5);
    rect(70,390,5);rect(300,350,5);
    rect(100,500,5);rect(1500,450,5);
    rect(250,450,5);rect(50,600,5);
    ;rect(200,520,5);
    rect(270,580,5);rect(120,620,5);
    ;rect(350,650,5); rect(320,505,5);
    rect(30,750,5);rect(450,755,5);
    rect(800,600,5);rect(950,300,5);
    rect(700,200,5);rect(600,100,5);
    rect(500,150,5); rect(660,300,5);
    rect(400,400,5);rect(500,550,5);
    rect(200,900,5);rect(100,850,5);
    rect(300,800,5);rect(700,700,5);
    rect(500,800,5);rect(650,900,5);
    rect(450,950,5); rect(1000,300,5);
    rect(800,150,5);rect(750,320,5);
    rect(900,450,5);rect(900,700,5);
    rect(850,850,5);rect(800,780,5);
    rect(950,50,5);rect(950,200,5);
    rect(550,500,5);rect(550,200,5);
    rect(1200,700,5);rect(1800,250,5);
    rect(1100,150,5);rect(1500,300,5);
    rect(1300,350,5);rect(1250,100,5);
    rect(1400,200,5);rect(1650,100,5);
    rect(1570,270,5);rect(1650,700,5);
    rect(1500,600,5);rect(1400,550,5);
    rect(1450,800,5);rect(1350,870,5);
    rect(1200,900,5); rect(1000,850,5);
    rect(1850,950,5);rect(1700,900,5);
    rect(1600,920,5);rect(1850,750,5);
    rect(1750,600,5);rect(1700,500,5);
    rect(1900,800,5);rect(1960,600,5);
    rect(1940,530,5); rect(1850,400,5);
    rect(1960,200,5);rect(1920,140,5);
    rect(1800,50,5);rect(1600,40,5);
    rect(1400,50,5);rect(1990,50,5);
    rect(1990,300,5);*/
    
     //SOLEIL
    //donne le centre de l'univers
    //les planètes tournerons autour du soleil

     translate(width/2, height/2);//CENTRE
    noStroke();//pas de borre noir
    
    //rayon du soleil
    
    //push pop pour isolé, les rayons sont indépendant de la rotation du soleil, ils ont leurs propre rotation
        
        //rayon A
            push(); //push pop du rayon A
			rotate(millis()/ -450);//vitesse de rotation sur elle meme (negativement)
  	        noStroke(); //pas de borre noir
			fill(242,146,0)//couleur
			rect(0,0,35,35);
			pop();
    
		//rayon B	
			push();//push pop du rayon B
			rotate(millis()/ 450);//vitesse de rotation sur elle meme
			noStroke(); //pas de borre noir
			fill(242,121,0)//couleur
			rect(0,0,35,35);
			pop();
   
       //rayon C
			push();//push pop du rayon C
			rotate(millis()/ 550);//vitesse de rotation sur elle meme
			noStroke(); //pas de borre noir
			fill(237,103,1)//couleur
			rect(0,0,35,35);
			pop();
   
    
    //SOLEIL
   
    rectMode(CENTER);
    fill(255,153,0)//couleur
    circle(0,0,40);  
    

    //MERCURE
   
    push();
  
      
      rotate(millis()/300);//vitesse de rotation autour du soleil
      translate(38,0); //distance par rapport au centre
      fill(19,223,65);//couleur
      circle(0,0,7);
    
    pop();
  

    //VENUS
    
    push();
    
    rotate(millis()/400);//vitesse de rotation autour du soleil
    translate(120,0);//distance par rapport au centre
    fill(255,255,255);//couleur
    circle(0,0,7);
    
    pop();
    
  
    //TERRE
    
    push(); //lune integré car c'est un systeme avec la terre
    
    rotate(millis()/500);//vitesse de rotation autour du soleil
    translate(200,0);
    fill(0,0,255);//couleur
    circle(0,0,15);
    
    //LUNE
     
    rotate(millis()/500);//vitesse de rotation autour de la Terre
    translate(30,0);//distance par rapport au centre de la Terre
    fill(251,255,228);//couleur
    circle(0,0,4);
    
    pop();
    
    
    //MARS
    
    push();
    
     rotate(millis()/700);//vitesse de rotation autour du soleil
     translate(270,0);//distance par rapport au centre
     fill(255,50,50);
     circle(0,0,10);
    
    pop();
    
    //JUPITER
    
    push();//du systeme Jupiteriens
    
    rotate(millis()/750);//vitesse de rotation autour du soleil
    translate(310,0);//distance par rapport au centre
    fill(179,89,0);//couleur
    circle(0,0,25);
    
     
    //LUNE 1
    
    
    push();//de lune 1 autour de Jupiter
    
     rotate(millis()/100);//vitesse de rotation autour de Jupiter
    translate(20,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
  
    pop();//de lune 1
   
     
    
    //LUNE 2
    
    push();//de lune 2 autour de Jupiter
    
    rotate(millis()/150);//vitesse de rotation autour de Jupiter
    translate(25,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 2
    
  
    //LUNE 3
    
      push();//de lune 3 autour de Jupiter
    
    rotate(millis()/240);//vitesse de rotation autour de Jupiter
    translate(30,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 3
    
    //LUNE 4
    
    push();//de lune 4 autour de Jupiter
    
    rotate(millis()/300);//vitesse de rotation autour de Jupiter
    translate(33,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 4
    
    //LUNE 5
    
    push();//de lune 5 autour de Jupiter
    
     rotate(millis()/400);//vitesse de rotation autour de Jupiter
    translate(37,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    
    pop();// de lune 5
    
    //LUNE 6
    
    push();//de la lune 6 autour de Jupiter
    
     rotate(millis()/425);//vitesse de rotation autour de Jupiter
    translate(43,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();// de lune6
   
    //LUNE 7
    
    push();//de la lune 7 autour de Jupiter
    
     rotate(millis()/450);//vitesse de rotation autour de Jupiter
    translate(46,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop()//de lune 7
    
    //LUNE 8
    
    push();//de la lune 8 autour de Jupiter
    
     rotate(millis()/520);//vitesse de rotation autour de Jupiter
    translate(50,0);//distance par rapport au centre de Jupiter
    fill(251,255,228);//couleur
    circle(0,0,2);
    
    pop();//de lune 8
    
    pop();//du systeme Jupiteriens
    
    //SATURNE
    
    push(); //du systeme Saturien
    
    
    rotate(millis()/800);//vitesse de rotation autour du soleil
    translate(400,0);//distance par rapport au centre
    fill(255,184,77);
    circle(0,0,30);
    ellipse(0,0,50,5);
    
    pop();//du systeme saturien
 
  
    //URANUS
    
    push();
   
    
    rotate(millis()/900);//vitesse de rotation autour du soleil
    translate(500,0);//distance par rapport au centre
    fill(153,230,255);//couleur
    circle(0,0,15);
    
    pop();
    
    //NEPTUNE
    
    push();
    
    rotate(millis()/1100);//vitesse de rotation autour du soleil
    translate(600,0);//distance par rapport au centre
    fill(102,179,255);//couleur
    circle(0,0,15);
    
    pop();
    
}


