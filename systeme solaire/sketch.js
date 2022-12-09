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
    background(0);//universe

    fill(500,500,500);
    for (let i = 0; i < 250; i++) {
  StarsX=random()*2000;
	StarsY=random()*2500;
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
    

         //SUN
    //in the centre of the universe
    //the planets are going to turn around the sun

    translate(width/2, height/2);//CENTRE
    noStroke();//pas de borre noir
    
    //sunshines
    
    //push pop to isolate, the sunshines are independent, they have their own rotation system
        
        //rayon A
            push(); //push pop sunshine A
			rotate(millis()/ -450);//SPEED ROTATION (NEGATIVE)
  	        noStroke(); 
			fill(234,32,0)
			rect(0,0,40,40);
			pop();
    
      //rayon B	
			push();//push pop du rayon B
			rotate(millis()/ 450);//SPEED ROTATION
			noStroke(); 
			fill(247,255,0)
			rect(0,0,40,40);
			pop();
   
       //rayon C
			push();//push pop du rayon C
			rotate(millis()/ 550);
			noStroke(); 
			fill(255,112,0 )
			rect(0,0,40,40);
			pop();
   
    //SUN
   
    rectMode(CENTER);
    fill(255,46,0)
    circle(0,0,40);  
    

        //MERCURY
   
        push();
  
      
        rotate(millis()/300);//HOW FAST IT TURNS AROUND THE SUN
        translate(45,0); //DISTANCE FROM THE CENTRE
        fill(113, 145, 161);
        circle(0,0,7);
      
      pop();
  
    //VENUS
    
    push();
    
    rotate(millis()/400);
    translate(127,0);
    fill(255,255,255);
    circle(0,0,7);
    
    pop();
    
  
    //EARTH
    
    push(); //TOGETHER WITH THE MOON
    
    rotate(millis()/500);
    translate(207,0);
    fill(3,158,235);
    circle(0,0,15);
    
    //MOON
     
    rotate(millis()/500); //SPEED ROTATION AROUND EARTH
    translate(37,0);// DISTANCE FROM EARTH
    fill(251,255,228);
    circle(0,0,4);
    
    pop();
    
    
    //MARS
    
    push();
    
     rotate(millis()/700);
     translate(277,0);
     fill(255,88,85);
     circle(0,0,10);
    
    pop();
    
    //JUPITER
    
    push();//JUPITER SYSTEM
    
    rotate(millis()/750);
    translate(317,0);
    fill(179,89,0);
    circle(0,0,25);
    
     
    //MOON 1
    
    
    push();//MOON 1 OF JUPITER
    
     rotate(millis()/100); //SPEED ROTATION AROUND JUPITER
    translate(27,0); //DISTANCE FROM JUPITER
    fill(251,255,228);
    circle(0,0,2);
  
    pop();//OF MOON1 
   
     

    
    //MOON 2
    
    push();
    
    rotate(millis()/150);
    translate(32,0);
    fill(251,255,228);
    circle(0,0,2);
    
    pop(); 
    

  
    //MOON 3
    
      push();
    
    rotate(millis()/240);
    translate(37,0);
    fill(251,255,228);
    circle(0,0,2);
    
    pop();
    
    //MOON 4
    
    push();
    
    rotate(millis()/300);
    translate(40,0);
    fill(251,255,228);
    circle(0,0,2);
    
    pop();
    
    //MOON 5
    
    push();
    
     rotate(millis()/400);
    translate(44,0);
    fill(251,255,228);
    circle(0,0,2);
    
    
    pop();// 
    
    //MOON 6
    
    push();
    
     rotate(millis()/425);
    translate(50,0);
    fill(251,255,228);
    circle(0,0,2);
    
    pop();// 
   
    //MOON 7
    
    push();
    
     rotate(millis()/450);
    translate(53,0);
    fill(251,255,228);
    circle(0,0,2);
    
    pop();
    
    //MOON 8
    
    push();

     rotate(millis()/520);
    translate(57,0);
    fill(251,255,228);
    circle(0,0,2);
    
    pop();
    
    pop();
    
    //SATURN
    
    push(); 
    
    
    rotate(millis()/800);
    translate(407,0);
    fill(255,184,77);
    circle(0,0,30);
    ellipse(0,0,50,5);
    
    pop();
 
  
    //URANUS
    
    push();
   
    
    rotate(millis()/900);
    translate(507,0);
    fill(153,230,255);
    circle(0,0,15);
    
    pop();
    
    //NEPTUNE
    
    push();
    
    rotate(millis()/1100);
    translate(607,0);
    fill(61,84,227);
    circle(0,0,15);
    
    pop();
    
}

