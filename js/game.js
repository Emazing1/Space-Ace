(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 720,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/background.jpg", id:"background"},
		{src:"images/boss1.png", id:"boss1"},
		{src:"images/boss2.png", id:"boss2"},
		{src:"images/boss3.png", id:"boss3"},
		{src:"images/boss4.png", id:"boss4"},
		{src:"images/boss5.png", id:"boss5"},
		{src:"images/dot.png", id:"dot"},
		{src:"images/flame1.png", id:"flame1"},
		{src:"images/flame2.png", id:"flame2"},
		{src:"images/gem.png", id:"gem"},
		{src:"images/rock1.png", id:"rock1"},
		{src:"images/rock2.png", id:"rock2"},
		{src:"images/rock3.png", id:"rock3"},
		{src:"images/shield.png", id:"shield"},
		{src:"images/ship.png", id:"ship"},
		{src:"images/timer.png", id:"timer"}
	]
};

// stage content:
(lib.game = function() {
	this.initialize();

	// Layer 1
	this.pause = new lib.Pause();
	this.pause.setTransform(483,269,1,1,0,0,0,11,-3);

	this.totalHp = new lib.totalHp();
	this.totalHp.setTransform(821,240,1,1,0,0,0,1.5,-1.5);

	this.currentHp = new lib.currentHp();
	this.currentHp.setTransform(821,240,1,1,0,0,0,1.5,-1.5);

	this.highscore = new cjs.Text("0", "20px 'Times New Roman'", "#FFFFFF");
	this.highscore.name = "highscore";
	this.highscore.lineHeight = 22;
	this.highscore.lineWidth = 15;
	this.highscore.setTransform(639.8,7.6);
	

	this.text = new cjs.Text("Highscore: ", "20px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(550.2,6.7);

	this.boss = new lib.boss();
	this.boss.setTransform(825,324,1,1,0,0,0,0.5,-4.5);

	this.level = new cjs.Text("1", "20px 'Times New Roman'", "#FFFFFF");
	this.level.name = "level";
	this.level.lineHeight = 22;
	this.level.lineWidth = 100;
	this.level.setTransform(341.5,7.6);

	this.text_1 = new cjs.Text("Level: ", "20px 'Times New Roman'", "#FFFFFF");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 100;
	this.text_1.setTransform(287,7.6);

	this.life = new lib.life();
	this.life.setTransform(114.9,21);

	this.text_2 = new cjs.Text("Lives: ", "20px 'Times New Roman'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 22;
	this.text_2.lineWidth = 96;
	this.text_2.setTransform(43.5,5);

	this.bullet = new lib.bullet();
	this.bullet.setTransform(166,371,1,1,0,0,0,-5,-2);

	this.text_3 = new cjs.Text("", "20px 'TimesNewRomanPSMT'", "#0066CC");
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 100;
	this.text_3.setTransform(107,325.2);

	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(458,241.5,1,1,0,0,0,201,134.9);

	this.score = new cjs.Text("0 ", "20px 'Times New Roman'", "#D3E1E7");
	this.score.name = "score";
	this.score.lineHeight = 22;
	this.score.lineWidth = 63;
	this.score.setTransform(903,6.7);

	this.text_4 = new cjs.Text("Score: ", "20px 'Times New Roman'", "#D2E0E6");
	this.text_4.lineHeight = 22;
	this.text_4.lineWidth = 63;
	this.text_4.setTransform(848,5);

	this.power = new lib.power();
	this.power.setTransform(822,498);

	this.meteor3 = new lib.meteor3();
	this.meteor3.setTransform(825,433);

	this.meteor2 = new lib.meteor2();
	this.meteor2.setTransform(827,341);

	this.meteor1 = new lib.meteor1();
	this.meteor1.setTransform(832,223);

	this.hero = new lib.hero();
	this.hero.setTransform(102,342,1,1,0,0,0,-12.4,0);

	this.background = new lib.background_1();
	this.background.setTransform(466,512,1,1,0,0,0,-4,-7);

	this.addChild(this.background,this.hero,this.meteor1,this.meteor2,this.meteor3,this.power,this.text_4,this.score,this.gameOver,this.text_3,this.bullet,this.text_2,this.life,this.text_1,this.level,this.boss,this.text,this.highscore,this.currentHp,this.totalHp,this.pause);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(434,360,1024,1024);


// symbols:
(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,1024);


(lib.boss1 = function() {
	this.initialize(img.boss1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,165);


(lib.boss2 = function() {
	this.initialize(img.boss2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,153);


(lib.boss3 = function() {
	this.initialize(img.boss3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,142);


(lib.boss4 = function() {
	this.initialize(img.boss4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,168);


(lib.boss5 = function() {
	this.initialize(img.boss5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,134);


(lib.dot = function() {
	this.initialize(img.dot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,10);


(lib.flame1 = function() {
	this.initialize(img.flame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,14);


(lib.flame2 = function() {
	this.initialize(img.flame2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,14);


(lib.gem = function() {
	this.initialize(img.gem);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,30);


(lib.rock1 = function() {
	this.initialize(img.rock1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,82);


(lib.rock2 = function() {
	this.initialize(img.rock2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,96);


(lib.rock3 = function() {
	this.initialize(img.rock3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.shield = function() {
	this.initialize(img.shield);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.ship = function() {
	this.initialize(img.ship);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,99);


(lib.timer = function() {
	this.initialize(img.timer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.totalHp = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AxFgYMAiLAAAIAAAxMgiLAAAg");
	this.shape.setTransform(1.5,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxFAYIAAgvMAiLAAAIAAAvg");
	this.shape_1.setTransform(1.5,-1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.9,-5,221,7);


(lib.power = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// detail
	this.instance = new lib.gem();
	this.instance.setTransform(-17,-15);

	this.instance_1 = new lib.shield();
	this.instance_1.setTransform(-19.8,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// shape
	this.instance_2 = new lib.timer();
	this.instance_2.setTransform(-13.9,-24);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-15,31,30);


(lib.Pause = function() {
	this.initialize();

	// Layer 1
	this.pause = new cjs.Text("PAUSE", "78px 'Trebuchet MS'", "#FFFFFF");
	this.pause.name = "pause";
	this.pause.lineHeight = 80;
	this.pause.lineWidth = 225;
	this.pause.setTransform(-96.1,-49.9,0.936,0.935);

	this.addChild(this.pause);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96,-49.9,214.1,93.9);


(lib.meteor3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.rock3();
	this.instance.setTransform(-10,-10);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-10,18,18);


(lib.meteor2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("AhXA0IABgDIBDgGIACgCIAGBJIgFAEgAAOhzIADgCIBEAxIADAAIgpBeIgIABg");
	this.shape.setTransform(7.6,-1.2);

	// Layer 1
	this.instance = new lib.rock2();
	this.instance.setTransform(-50,-48);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-48,98,96);


(lib.meteor1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.rock1();
	this.instance.setTransform(-40,-40);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40,-40,89,82);


(lib.GameOver = function() {
	this.initialize();

	// Layer 1
	this.playButton = new cjs.Text("", "26px 'Arial'", "#0066CC");
	this.playButton.name = "playButton";
	this.playButton.textAlign = "center";
	this.playButton.lineHeight = 28;
	this.playButton.lineWidth = 100;
	this.playButton.setTransform(203,233.8);

	this.playButton_1 = new cjs.Text("PLAY", "26px 'Arial'", "#FFFFFF");
	this.playButton_1.name = "playButton_1";
	this.playButton_1.textAlign = "center";
	this.playButton_1.lineHeight = 28;
	this.playButton_1.lineWidth = 71;
	this.playButton_1.setTransform(202.5,233.8);

	this.text = new cjs.Text("GAME OVER", "62px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 64;
	this.text.lineWidth = 398;
	this.text.setTransform(199,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnGjCIONAAIAAGFIuNAAg");
	this.shape.setTransform(203.5,250);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("AnFDDIAAmEIOMAAIAAGEg");
	this.shape_1.setTransform(203.5,250);

	this.addChild(this.shape_1,this.shape,this.text,this.playButton_1,this.playButton);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,402,270.5);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flame2();
	this.instance.setTransform(-11.8,-10);

	this.instance_1 = new lib.flame1();
	this.instance_1.setTransform(-10,-7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-10,35,14);


(lib.currentHp = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AxFgYMAiLAAAIAAAxMgiLAAAg");
	this.shape.setTransform(1.5,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AxFAYIAAgvMAiLAAAIAAAvg");
	this.shape_1.setTransform(1.5,-1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.9,-5,221,7);


(lib.bullet = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.dot();
	this.instance.setTransform(-10,-7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10,-7,10,10);


(lib.boss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// main
	this.instance = new lib.boss2();
	this.instance.setTransform(-76,-81,1.046,1.046);

	this.instance_1 = new lib.boss1();
	this.instance_1.setTransform(-73,-83,0.97,0.97);

	this.instance_2 = new lib.boss3();
	this.instance_2.setTransform(-61,-74,1.127,1.127);

	this.instance_3 = new lib.boss5();
	this.instance_3.setTransform(-69,-70,1.194,1.194);

	this.text = new cjs.Text("", "20px 'TimesNewRomanPSMT'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 100;
	this.text.setTransform(69,53.2);

	this.instance_4 = new lib.boss4();
	this.instance_4.setTransform(-83.5,-84,0.952,0.952);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.text},{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-81,160,160);


(lib.background_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.background();
	this.instance.setTransform(-516,-519);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-516,-519,1024,1024);


(lib.life = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fly:0,shield:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("shield");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// shield
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FE9900").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33FF99").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape_2.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(2));

	// flames
	this.instance = new lib.fire();
	this.instance.setTransform(-34,-0.7,0.32,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// detail
	this.instance_1 = new lib.ship();
	this.instance_1.setTransform(-28.6,-16,0.294,0.273);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-16,31.2,27);


(lib.hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"fly":0,"shield":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.gotoAndPlay("shield");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// shield
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FE9900").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape_1.setTransform(0,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33FF99").ss(2.5,0,0,4).p("AF7AAQAACdhvBvQhvBvidAAQicAAhvhvQhvhvAAidQAAicBvhvQBvhvCcAAQCdAABvBvQBvBvAACcg");
	this.shape_2.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(2));

	// flames
	this.instance = new lib.fire();
	this.instance.setTransform(-57,4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// detail
	this.instance_1 = new lib.ship();
	this.instance_1.setTransform(-40,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.8,-47,103.8,99);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;