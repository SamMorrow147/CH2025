(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Mrw_Table_anim_VER2_atlas_", frames: [[456,656,41,87],[506,0,6,27],[490,379,14,21],[473,353,33,24],[408,780,46,36],[473,232,36,61],[449,477,57,95],[408,745,71,33],[473,448,26,23],[335,717,71,86],[456,574,50,80],[499,295,10,7],[162,731,73,43],[334,477,113,151],[456,780,50,32],[237,731,57,48],[0,387,101,243],[225,781,40,39],[0,738,48,55],[162,776,61,31],[240,387,92,230],[267,781,47,28],[88,699,72,88],[0,632,86,104],[103,387,135,159],[103,548,113,149],[342,0,162,230],[342,232,129,243],[335,630,119,85],[218,630,115,99],[473,425,31,21],[473,379,15,44],[408,717,29,14],[162,699,46,29],[0,0,340,385],[473,295,24,56]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.flash0ai = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_1 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_2 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_3 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_4 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_5 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_6 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_7 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_8 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_9 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_10 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_11 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_12 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_13 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_14 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_15 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_16 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_17 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_18 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_19 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_20 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_21 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_22 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_23 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_24 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_25 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_26 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_27 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_28 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_29 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_30 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_31 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_32 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_33 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_34 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai_35 = function() {
	this.spriteSheet = ss["Mrw_Table_anim_VER2_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,0,36,61), null);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,6,27), null);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,0,33,24), null);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,14,21), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,46,36), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,26,23), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,57,95), null);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,71,33), null);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,71,86), null);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,73,43), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,0,10,7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,50,32), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_15();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,57,48), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,48,55), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_19();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,61,31), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,40,39), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_21();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.343,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,16.1,9.6), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,72,88), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,86,104), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_24();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,135,159), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,113,149), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_26();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,162,230), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,129,243), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_34();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340,385);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_28();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,119,85), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_29();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,115,99), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_30();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,31,21), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_31();
	this.instance.parent = this;
	this.instance.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,-10,15,44), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,29,14), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,46,29), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flash0ai_35();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,56);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170,192.5,1,1,0,0,0,170,192.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,340,385), null);


// stage content:
(lib.MrwTableanimVER2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_164 = function() {
		this.gotoAndPlay(51);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(1));

	// Vup
	this.instance = new lib.Symbol35();
	this.instance.parent = this;
	this.instance.setTransform(210,64.5,1,1,0,0,0,7,10.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(1).to({y:64.6},0).wait(2).to({x:209.9,y:64.7},0).wait(2).to({y:64.8},0).wait(1).to({y:64.9},0).wait(1).to({x:209.8},0).wait(1).to({y:65},0).wait(1).to({y:65.1},0).wait(2).to({x:209.7,y:65.2},0).wait(2).to({y:65.3},0).wait(1).to({y:65.4},0).wait(1).to({x:209.6},0).wait(1).to({y:65.5},0).wait(1).to({y:65.6},0).wait(2).to({x:209.5,y:65.7},0).wait(2).to({y:65.8},0).wait(1).to({y:65.9},0).wait(1).to({x:209.4},0).wait(1).to({y:66},0).wait(1).to({y:66.1},0).wait(2).to({x:209.3,y:66.2},0).wait(2).to({y:66.3},0).wait(1).to({y:66.4},0).wait(1).to({x:209.2},0).wait(1).to({y:66.5},0).wait(2).to({y:66.6},0).wait(1).to({x:209.1,y:66.7},0).wait(2).to({y:66.8},0).wait(1).to({y:66.9},0).wait(1).to({x:209},0).wait(1).to({y:67},0).wait(2).to({y:67.1},0).wait(1).to({x:208.9,y:67.2},0).wait(2).to({y:67.3},0).wait(1).to({y:67.4},0).wait(1).to({x:208.8},0).wait(1).to({y:67.5},0).wait(2).to({y:67.6},0).wait(1).to({x:208.7,y:67.7},0).wait(2).to({y:67.8},0).wait(1).to({y:67.9},0).wait(1).to({x:208.8,y:68.1},0).wait(1).to({x:209,y:68.4},0).wait(1).to({x:209.2,y:68.7},0).wait(1).to({x:209.4,y:69},0).wait(1).to({x:209.6,y:69.3},0).wait(1).to({x:209.8,y:69.6},0).wait(1).to({x:210,y:69.9},0).wait(1).to({x:210.2,y:70.2},0).wait(1).to({x:210.4,y:70.5},0).wait(1).to({x:210.6,y:70.8},0).wait(1).to({x:210.8,y:71.1},0).wait(1).to({x:211,y:71.4},0).wait(1).to({x:211.2,y:71.7},0).wait(1).to({x:211.4,y:72},0).wait(1).to({x:211.6,y:72.2},0).wait(1).to({x:211.8,y:72.5},0).wait(1).to({x:212,y:72.8},0).wait(1).to({x:212.2,y:73.1},0).wait(1).to({x:212.4,y:73.4},0).wait(1).to({x:212.6,y:73.7},0).wait(1).to({x:212.8,y:74},0).wait(1).to({x:213,y:74.3},0).wait(1).to({x:212.7,y:73.7},0).wait(1).to({x:212.4,y:73},0).wait(1).to({x:212.1,y:72.4},0).wait(1).to({x:211.8,y:71.8},0).wait(1).to({x:211.4,y:71.1},0).wait(1).to({x:211.1,y:70.5},0).wait(1).to({x:210.8,y:69.9},0).wait(1).to({x:210.5,y:69.2},0).wait(1).to({x:210.2,y:68.6},0).wait(1).to({x:209.9,y:68},0).wait(1).to({x:209.6,y:67.3},0).wait(1).to({x:209.3,y:66.7},0).wait(1).to({x:209,y:66.1},0).wait(1).to({x:208.6,y:65.4},0).wait(1).to({x:208.7},0).wait(1).to({x:208.8},0).wait(1).to({y:65.3},0).wait(1).to({x:208.9},0).wait(1).to({y:65.2},0).wait(1).to({x:209},0).wait(2).to({x:209.1,y:65.1},0).wait(1).to({x:209.2},0).wait(1).to({y:65},0).wait(1).to({x:209.3},0).wait(2).to({x:209.4,y:64.9},0).wait(2).to({x:209.5,y:64.8},0).wait(2).to({x:209.6},0).wait(1).to({x:209.7,y:64.7},0).wait(2).to({x:209.8},0).wait(1).to({y:64.6},0).wait(1).to({x:209.9},0).wait(1).to({y:64.5},0).wait(1).to({x:210},0).wait(1));

	// Right-Arm
	this.instance_1 = new lib.Symbol34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.5,83.5,1,1,0,0,0,23,18);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(1).to({rotation:-0.8,x:176.6,y:83.3},0).wait(1).to({rotation:-1.6,x:176.7,y:83.1},0).wait(1).to({rotation:-2.4,x:176.8,y:83},0).wait(1).to({rotation:-3.2,x:176.9,y:82.8},0).wait(1).to({rotation:-3.9,x:177,y:82.6},0).wait(1).to({rotation:-4.7,x:177.1,y:82.5},0).wait(1).to({rotation:-5.5,x:177.2,y:82.3},0).wait(1).to({rotation:-6.3,x:177.3,y:82.1},0).wait(1).to({rotation:-7.1,x:177.4,y:81.9},0).wait(1).to({rotation:-7.9,x:177.5,y:81.8},0).wait(1).to({rotation:-8.7,x:177.6,y:81.6},0).wait(1).to({rotation:-9.5,x:177.7,y:81.4},0).wait(1).to({rotation:-10.3,x:177.8,y:81.2},0).wait(1).to({rotation:-11.1,x:177.9,y:81.1},0).wait(1).to({rotation:-11.8,x:178,y:80.9},0).wait(1).to({rotation:-12.6,x:178.1,y:80.7},0).wait(1).to({rotation:-13.4,x:178.2,y:80.5},0).wait(1).to({rotation:-14.2,x:178.3,y:80.4},0).wait(1).to({rotation:-15,x:178.4,y:80.2},0).wait(1).to({rotation:-13.6,x:177.9,y:80.3},0).wait(1).to({rotation:-12.3,x:177.4},0).wait(1).to({rotation:-10.9,x:176.9,y:80.4},0).wait(1).to({rotation:-9.5,x:176.4},0).wait(1).to({rotation:-8.1,x:175.9,y:80.5},0).wait(1).to({rotation:-6.8,x:175.4},0).wait(1).to({rotation:-5.4,x:175,y:80.6},0).wait(1).to({rotation:-4,x:174.5},0).wait(1).to({rotation:-2.7,x:174,y:80.7},0).wait(1).to({rotation:-1.3,x:173.5,y:80.8},0).wait(1).to({rotation:0.1,x:173},0).wait(1).to({rotation:1.5,x:172.5,y:80.9},0).wait(1).to({rotation:2.8,x:172},0).wait(1).to({rotation:4.2,x:171.6,y:81},0).wait(1).to({rotation:5.6,x:171},0).wait(1).to({rotation:6.9,x:170.5,y:81.1},0).wait(1).to({rotation:8.3,x:170.1},0).wait(1).to({rotation:9.7,x:169.5,y:81.2},0).wait(1).to({rotation:11.1,x:169.1},0).wait(1).to({rotation:12.4,x:168.5,y:81.3},0).wait(1).to({rotation:13.8,x:168.1,y:81.4},0).wait(1).to({rotation:15.2,x:167.6},0).wait(1).to({rotation:14.6,x:167.8},0).wait(1).to({rotation:14,x:168},0).wait(1).to({rotation:13.4,x:168.2,y:81.5},0).wait(1).to({rotation:12.8,x:168.4},0).wait(1).to({rotation:12.3,x:168.7,y:81.6},0).wait(1).to({rotation:11.7,x:168.9},0).wait(1).to({rotation:11.1,x:169.1},0).wait(1).to({rotation:10.5,x:169.3,y:81.7},0).wait(1).to({rotation:9.9,x:169.5},0).wait(1).to({rotation:9.3,x:169.8},0).wait(1).to({rotation:8.8,x:170},0).wait(1).to({rotation:8.2,x:170.2},0).wait(1).to({rotation:7.6,x:170.4,y:81.8},0).wait(1).to({rotation:7,x:170.6},0).wait(1).to({rotation:6.4,x:170.8,y:81.9},0).wait(1).to({rotation:5.8,x:171},0).wait(1).to({rotation:5.3,x:171.3},0).wait(1).to({rotation:4.7,x:171.5},0).wait(1).to({rotation:4.1,x:171.7,y:82},0).wait(1).to({rotation:3.5,x:171.9},0).wait(1).to({rotation:2.9,x:172.1},0).wait(1).to({rotation:2.3,x:172.3,y:82.1},0).wait(1).to({rotation:1.8,x:172.6},0).wait(1).to({rotation:1.2,x:172.8},0).wait(1).to({rotation:0.6,x:173,y:82.2},0).wait(1).to({rotation:0,x:173.2},0).wait(1).to({rotation:1.4,x:172.7},0).wait(1).to({rotation:2.7,x:172.2},0).wait(1).to({rotation:4.1,x:171.7},0).wait(1).to({rotation:5.5,x:171.2},0).wait(1).to({rotation:6.8,x:170.7},0).wait(1).to({rotation:8.2,x:170.1},0).wait(1).to({rotation:9.5,x:169.6},0).wait(1).to({rotation:10.9,x:169.1},0).wait(1).to({rotation:12.3,x:168.6},0).wait(1).to({rotation:13.6,x:168.1},0).wait(1).to({rotation:15,x:167.6},0).wait(1).to({rotation:14.6,x:167.8},0).wait(1).to({rotation:14.2,x:168.1,y:82.3},0).wait(1).to({rotation:13.7,x:168.3},0).wait(1).to({rotation:13.3,x:168.6},0).wait(1).to({rotation:12.9,x:168.8,y:82.4},0).wait(1).to({rotation:12.5,x:169.1},0).wait(1).to({rotation:12.1,x:169.4},0).wait(1).to({rotation:11.7,x:169.5,y:82.5},0).wait(1).to({rotation:11.2,x:169.8},0).wait(1).to({rotation:10.8,x:170.1,y:82.6},0).wait(1).to({rotation:10.4,x:170.3},0).wait(1).to({rotation:10,x:170.5,y:82.7},0).wait(1).to({rotation:9.6,x:170.8},0).wait(1).to({rotation:9.2,x:171.1},0).wait(1).to({rotation:8.7,x:171.3,y:82.8},0).wait(1).to({rotation:8.3,x:171.6},0).wait(1).to({rotation:7.9,x:171.8},0).wait(1).to({rotation:7.5,x:172,y:82.9},0).wait(1).to({rotation:7.1,x:172.3},0).wait(1).to({rotation:6.7,x:172.5},0).wait(1).to({rotation:6.2,x:172.8,y:83},0).wait(1).to({rotation:5.8,x:173},0).wait(1).to({rotation:5.4,x:173.3},0).wait(1).to({rotation:5,x:173.5,y:83.1},0).wait(1).to({rotation:4.6,x:173.8},0).wait(1).to({rotation:4.2,x:174},0).wait(1).to({rotation:3.7,x:174.3,y:83.2},0).wait(1).to({rotation:3.3,x:174.5},0).wait(1).to({rotation:2.9,x:174.8,y:83.3},0).wait(1).to({rotation:2.5,x:175},0).wait(1).to({rotation:2.1,x:175.3},0).wait(1).to({rotation:1.7,x:175.5},0).wait(1).to({rotation:1.2,x:175.8,y:83.4},0).wait(1).to({rotation:0.8,x:176},0).wait(1).to({rotation:0.4,x:176.2},0).wait(1).to({rotation:0,x:176.5,y:83.5},0).wait(1));

	// Pencl
	this.instance_2 = new lib.Symbol37();
	this.instance_2.parent = this;
	this.instance_2.setTransform(197,93.5,1,1,0,0,0,3,13.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(1).to({rotation:-0.7,x:197.1,y:93.3},0).wait(1).to({rotation:-1.5,x:197.3,y:93.1},0).wait(1).to({rotation:-2.2,x:197.5,y:93},0).wait(1).to({rotation:-2.9,x:197.7,y:92.8},0).wait(1).to({rotation:-3.7,x:197.8,y:92.5},0).wait(1).to({rotation:-4.4,x:198,y:92.3},0).wait(1).to({rotation:-5.1,x:198.2,y:92.2},0).wait(1).to({rotation:-5.9,x:198.4,y:92},0).wait(1).to({rotation:-6.6,x:198.5,y:91.8},0).wait(1).to({rotation:-7.3,x:198.7,y:91.6},0).wait(1).to({rotation:-8,x:198.8,y:91.4},0).wait(1).to({rotation:-8.8,x:199,y:91.3},0).wait(1).to({rotation:-9.5,x:199.2,y:91.1},0).wait(1).to({rotation:-10.2,x:199.4,y:90.9},0).wait(1).to({rotation:-11,x:199.5,y:90.7},0).wait(1).to({rotation:-11.7,x:199.7,y:90.5},0).wait(1).to({rotation:-12.4,x:199.9,y:90.3},0).wait(1).to({rotation:-13.2,x:200,y:90.1},0).wait(1).to({rotation:-13.9,x:200.2,y:90},0).wait(1).to({rotation:-14.6,x:199.4,y:90.3},0).wait(1).to({rotation:-15.4,x:198.6,y:90.6},0).wait(1).to({rotation:-16.1,x:197.8,y:90.9},0).wait(1).to({rotation:-16.8,x:196.9,y:91.2},0).wait(1).to({rotation:-17.6,x:196.1,y:91.5},0).wait(1).to({rotation:-18.3,x:195.3,y:91.8},0).wait(1).to({rotation:-19,x:194.5,y:92.1},0).wait(1).to({rotation:-19.8,x:193.6,y:92.5},0).wait(1).to({rotation:-20.5,x:192.8,y:92.8},0).wait(1).to({rotation:-21.2,x:192,y:93.1},0).wait(1).to({rotation:-22,x:191.2,y:93.5},0).wait(1).to({rotation:-22.7,x:190.3,y:93.8},0).wait(1).to({rotation:-23.4,x:189.5,y:94.1},0).wait(1).to({rotation:-24.1,x:188.7,y:94.4},0).wait(1).to({rotation:-24.9,x:187.9,y:94.7},0).wait(1).to({rotation:-25.6,x:187,y:95},0).wait(1).to({rotation:-26.3,x:186.2,y:95.3},0).wait(1).to({rotation:-27.1,x:185.4,y:95.7},0).wait(1).to({rotation:-27.8,x:184.6,y:96},0).wait(1).to({rotation:-28.5,x:183.8,y:96.3},0).wait(1).to({rotation:-29.3,x:182.9,y:96.7},0).wait(1).to({rotation:-30,x:182.1,y:97},0).wait(1).to({rotation:-28.3,x:182.5,y:96.9},0).wait(1).to({rotation:-26.5,x:182.8,y:96.8},0).wait(1).to({rotation:-24.8,x:183.1,y:96.7},0).wait(1).to({rotation:-23.1,x:183.5,y:96.6},0).wait(1).to({rotation:-21.3,x:183.9,y:96.5},0).wait(1).to({rotation:-19.6,x:184.2,y:96.3},0).wait(1).to({rotation:-17.8,x:184.6},0).wait(1).to({rotation:-16.1,x:184.9,y:96.1},0).wait(1).to({rotation:-14.4,x:185.3},0).wait(1).to({rotation:-12.6,x:185.6,y:95.9},0).wait(1).to({rotation:-10.9,x:186},0).wait(1).to({rotation:-9.2,x:186.3,y:95.8},0).wait(1).to({rotation:-7.4,x:186.7,y:95.7},0).wait(1).to({rotation:-5.7,x:187.1,y:95.6},0).wait(1).to({rotation:-4,x:187.4,y:95.4},0).wait(1).to({rotation:-2.2,x:187.7},0).wait(1).to({rotation:-0.5,x:188.1,y:95.2},0).wait(1).to({rotation:1.3,x:188.4,y:95.1},0).wait(1).to({rotation:3,x:188.8},0).wait(1).to({rotation:4.7,x:189.2,y:94.9},0).wait(1).to({rotation:6.5,x:189.5,y:94.8},0).wait(1).to({rotation:8.2,x:189.8},0).wait(1).to({rotation:9.9,x:190.2,y:94.6},0).wait(1).to({rotation:11.7,x:190.5,y:94.5},0).wait(1).to({rotation:13.4,x:190.9},0).wait(1).to({rotation:15.1,x:191.2,y:94.4},0).wait(1).to({rotation:14.8,x:190.5,y:94.6},0).wait(1).to({rotation:14.5,x:189.7,y:94.9},0).wait(1).to({rotation:14.2,x:189,y:95.3},0).wait(1).to({rotation:13.9,x:188.2,y:95.5},0).wait(1).to({rotation:13.5,x:187.5,y:95.9},0).wait(1).to({rotation:13.2,x:186.7,y:96.1},0).wait(1).to({rotation:12.9,x:186,y:96.4},0).wait(1).to({rotation:12.6,x:185.3,y:96.7},0).wait(1).to({rotation:12.2,x:184.6,y:97},0).wait(1).to({rotation:11.9,x:183.8,y:97.3},0).wait(1).to({rotation:11.6,x:183.1,y:97.6},0).wait(1).to({rotation:11.3,x:183.4,y:97.5},0).wait(1).to({rotation:11,x:183.8,y:97.3},0).wait(1).to({rotation:10.6,x:184.2,y:97.2},0).wait(1).to({rotation:10.3,x:184.6},0).wait(1).to({rotation:10,x:185,y:97},0).wait(1).to({rotation:9.7,x:185.4,y:96.9},0).wait(1).to({rotation:9.3,x:185.7,y:96.8},0).wait(1).to({rotation:9,x:186.2,y:96.7},0).wait(1).to({rotation:8.7,x:186.5,y:96.6},0).wait(1).to({rotation:8.4,x:186.9,y:96.5},0).wait(1).to({rotation:8.1,x:187.3,y:96.3},0).wait(1).to({rotation:7.7,x:187.7},0).wait(1).to({rotation:7.4,x:188.1,y:96.1},0).wait(1).to({rotation:7.1,x:188.5,y:96},0).wait(1).to({rotation:6.8,x:188.9,y:95.9},0).wait(1).to({rotation:6.4,x:189.3,y:95.8},0).wait(1).to({rotation:6.1,x:189.6,y:95.6},0).wait(1).to({rotation:5.8,x:190.1},0).wait(1).to({rotation:5.5,x:190.4,y:95.5},0).wait(1).to({rotation:5.2,x:190.8,y:95.3},0).wait(1).to({rotation:4.8,x:191.2,y:95.2},0).wait(1).to({rotation:4.5,x:191.6,y:95.1},0).wait(1).to({rotation:4.2,x:192,y:94.9},0).wait(1).to({rotation:3.9,x:192.4,y:94.8},0).wait(1).to({rotation:3.5,x:192.7,y:94.7},0).wait(1).to({rotation:3.2,x:193.1,y:94.6},0).wait(1).to({rotation:2.9,x:193.5,y:94.5},0).wait(1).to({rotation:2.6,x:193.9,y:94.4},0).wait(1).to({rotation:2.3,x:194.3,y:94.3},0).wait(1).to({rotation:1.9,x:194.7,y:94.2},0).wait(1).to({rotation:1.6,x:195,y:94.1},0).wait(1).to({rotation:1.3,x:195.5,y:93.9},0).wait(1).to({rotation:1,x:195.8,y:93.8},0).wait(1).to({rotation:0.6,x:196.2,y:93.7},0).wait(1).to({rotation:0.3,x:196.6,y:93.6},0).wait(1).to({rotation:0,x:197,y:93.5},0).wait(1));

	// Head
	this.instance_3 = new lib.Symbol38();
	this.instance_3.parent = this;
	this.instance_3.setTransform(166,45,1,1,0,0,0,18,30.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).wait(1).to({rotation:1.2},0).wait(1).to({rotation:2.3,y:44.9},0).wait(1).to({rotation:3.5},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:6.9,x:165.9},0).wait(1).to({rotation:8.1,y:44.8},0).wait(1).to({rotation:9.2},0).wait(1).to({rotation:10.4,x:166},0).wait(1).to({rotation:11.5},0).wait(1).to({rotation:12.7,y:44.7},0).wait(1).to({rotation:13.8},0).wait(1).to({rotation:15},0).wait(1).to({rotation:14.6,x:165.9,y:44.6},0).wait(1).to({rotation:14.2,x:166},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:13.3},0).wait(1).to({rotation:12.9,y:44.5},0).wait(1).to({rotation:12.5},0).wait(1).to({rotation:12.1},0).wait(1).to({rotation:11.6},0).wait(1).to({rotation:11.2,x:165.9,y:44.4},0).wait(1).to({rotation:10.8,x:166},0).wait(1).to({rotation:10.4,x:165.9},0).wait(1).to({rotation:9.9,x:166},0).wait(1).to({rotation:9.5,x:165.9},0).wait(1).to({rotation:9.1,y:44.3},0).wait(1).to({rotation:8.7},0).wait(1).to({rotation:8.3},0).wait(1).to({rotation:7.8,y:44.2},0).wait(1).to({rotation:7.4},0).wait(1).to({rotation:7},0).wait(1).to({rotation:6.6,y:44.1},0).wait(1).to({rotation:6.2},0).wait(1).to({rotation:5.7},0).wait(1).to({rotation:5.3,y:44},0).wait(1).to({rotation:4.9,y:44.1},0).wait(1).to({rotation:4.5,y:44},0).wait(1).to({rotation:4.1},0).wait(1).to({rotation:3.6,x:165.8},0).wait(1).to({rotation:3.2,x:165.9,y:43.9},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:2.4},0).wait(1).to({rotation:1.9},0).wait(1).to({rotation:1.5},0).wait(1).to({rotation:1.1,x:165.8,y:43.8},0).wait(1).to({rotation:0.7,x:165.9},0).wait(1).to({rotation:0.3,x:165.8},0).wait(1).to({rotation:-0.2,x:165.9},0).wait(1).to({rotation:-0.6,x:165.8,y:43.7},0).wait(1).to({rotation:-1,x:165.9},0).wait(1).to({rotation:-1.4,x:165.8},0).wait(1).to({rotation:-1.8,x:165.9,y:43.6},0).wait(1).to({rotation:-2.3,x:165.8,y:43.7},0).wait(1).to({rotation:-2.7,x:165.9,y:43.6},0).wait(1).to({rotation:-3.1,x:165.8,y:43.5},0).wait(1).to({rotation:-3.5,y:43.6},0).wait(1).to({rotation:-3.9,y:43.5},0).wait(1).to({rotation:-4.4},0).wait(1).to({rotation:-3.8,x:165.9},0).wait(1).to({rotation:-3.3,x:166},0).wait(1).to({rotation:-2.7,x:166.1},0).wait(1).to({rotation:-2.1,x:166.2},0).wait(1).to({rotation:-1.6,x:166.3},0).wait(1).to({rotation:-1,x:166.4},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:0.1,x:166.5},0).wait(1).to({rotation:0.7,x:166.6},0).wait(1).to({rotation:1.2,x:166.7},0).wait(1).to({rotation:1.8,x:166.8},0).wait(1).to({rotation:2.3,x:166.9},0).wait(1).to({rotation:2.9,x:167},0).wait(1).to({rotation:3.5},0).wait(1).to({rotation:4,x:167.1},0).wait(1).to({rotation:4.6,x:167.2},0).wait(1).to({rotation:5.1,x:167.3},0).wait(1).to({rotation:5.7,x:167.4},0).wait(1).to({rotation:6.2,x:167.6},0).wait(1).to({rotation:6.8},0).wait(1).to({rotation:7.4,x:167.7},0).wait(1).to({rotation:7.9,x:167.8},0).wait(1).to({rotation:8.5,x:167.9},0).wait(1).to({rotation:9,x:168},0).wait(1).to({rotation:9.6,x:168.1},0).wait(1).to({rotation:10.2},0).wait(1).to({rotation:10.7,x:168.3},0).wait(1).to({rotation:10.3,x:168.2,y:43.6},0).wait(1).to({rotation:10,x:168.1},0).wait(1).to({rotation:9.6,x:168,y:43.7},0).wait(1).to({rotation:9.2,x:167.9},0).wait(1).to({rotation:8.8,y:43.8},0).wait(1).to({rotation:8.4,x:167.8},0).wait(1).to({rotation:8,x:167.7,y:43.9},0).wait(1).to({rotation:7.7,x:167.6,y:44},0).wait(1).to({rotation:7.3,x:167.5},0).wait(1).to({rotation:6.9,x:167.4},0).wait(1).to({rotation:6.5,y:44.1},0).wait(1).to({rotation:6.1,x:167.3},0).wait(1).to({rotation:5.7,x:167.2,y:44.2},0).wait(1).to({rotation:5.4,x:167.1,y:44.3},0).wait(1).to({rotation:5},0).wait(1).to({rotation:4.6,x:167,y:44.4},0).wait(1).to({rotation:4.2,x:166.9},0).wait(1).to({rotation:3.8,x:166.8,y:44.5},0).wait(1).to({rotation:3.4,x:166.7},0).wait(1).to({rotation:3.1,x:166.6,y:44.6},0).wait(1).to({rotation:2.7},0).wait(1).to({rotation:2.3,x:166.5,y:44.7},0).wait(1).to({rotation:1.9,x:166.4},0).wait(1).to({rotation:1.5,x:166.3,y:44.8},0).wait(1).to({rotation:1.1},0).wait(1).to({rotation:0.8,x:166.2,y:44.9},0).wait(1).to({rotation:0.4,x:166.1},0).wait(1).to({rotation:0,x:166,y:45},0).wait(1));

	// Left Arm
	this.instance_4 = new lib.Symbol36();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194.5,64,1,1,0,0,0,16.5,12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).wait(1).to({scaleX:1,rotation:0.2},0).wait(1).to({scaleX:1,rotation:0.5},0).wait(1).to({scaleX:1,rotation:0.7},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:0.9,x:194.4},0).wait(1).to({scaleX:1.01,rotation:1.1},0).wait(1).to({scaleX:1.01,rotation:1.4},0).wait(1).to({scaleX:1.01,rotation:1.6,y:63.9},0).wait(1).to({scaleX:1.01,rotation:1.8,y:64},0).wait(1).to({scaleX:1.01,rotation:2,y:63.9},0).wait(1).to({scaleX:1.02,rotation:2.3},0).wait(1).to({scaleX:1.02,scaleY:1,rotation:2.5},0).wait(1).to({scaleX:1.02,rotation:2.7},0).wait(1).to({scaleX:1.02,rotation:2.9},0).wait(1).to({scaleX:1.02,rotation:3.2,x:194.3},0).wait(1).to({scaleX:1.02,rotation:3.4,x:194.4},0).wait(1).to({scaleX:1.03,rotation:3.6,x:194.3,y:63.8},0).wait(1).to({scaleX:1.03,rotation:3.8,y:63.9},0).wait(1).to({scaleX:1.03,rotation:4.1,y:63.8},0).wait(1).to({scaleX:1.03,scaleY:1,rotation:4.3},0).wait(1).to({scaleX:1.03,rotation:4.5},0).wait(1).to({scaleX:1.03,rotation:4.7,x:194.2},0).wait(1).to({scaleX:1.04,rotation:5,x:194.3},0).wait(1).to({scaleX:1.04,rotation:5.2,x:194.2},0).wait(1).to({scaleX:1.04,rotation:5.4,y:63.7},0).wait(1).to({scaleX:1.04,rotation:5.6,y:63.8},0).wait(1).to({scaleX:1.04,scaleY:1,rotation:5.9,x:194.3},0).wait(1).to({scaleX:1.05,rotation:6.1,x:194.2},0).wait(1).to({scaleX:1.05,rotation:6.3},0).wait(1).to({scaleX:1.05,rotation:6.5,y:63.7},0).wait(1).to({scaleX:1.05,rotation:6.8},0).wait(1).to({scaleX:1.05,rotation:7},0).wait(1).to({scaleX:1.05,rotation:7.2},0).wait(1).to({scaleX:1.06,scaleY:1,rotation:7.4,x:194.1},0).wait(1).to({scaleX:1.06,rotation:7.7},0).wait(1).to({scaleX:1.06,rotation:7.9},0).wait(1).to({scaleX:1.06,rotation:8.1,y:63.6},0).wait(1).to({scaleX:1.06,rotation:8.3},0).wait(1).to({scaleX:1.06,rotation:8.6},0).wait(1).to({scaleX:1.07,rotation:8.8},0).wait(1).to({scaleX:1.07,scaleY:0.99,rotation:9},0).wait(1).to({scaleX:1.07,rotation:9.2,y:63.7},0).wait(1).to({scaleX:1.07,rotation:9.5,x:194,y:63.6},0).wait(1).to({scaleX:1.07,rotation:9.7,x:194.1},0).wait(1).to({scaleX:1.07,rotation:9.9,x:194},0).wait(1).to({scaleX:1.08,rotation:10.1},0).wait(1).to({scaleX:1.08,rotation:10.4},0).wait(1).to({scaleX:1.08,scaleY:0.99,rotation:10.6,y:63.5},0).wait(1).to({scaleX:1.08,rotation:10.8},0).wait(1).to({scaleX:1.08,rotation:11},0).wait(1).to({scaleX:1.08,rotation:11.3},0).wait(1).to({scaleX:1.09,rotation:11.5,x:193.9},0).wait(1).to({scaleX:1.09,rotation:11.7,x:194},0).wait(1).to({scaleX:1.09,rotation:12},0).wait(1).to({scaleX:1.09,rotation:12.2,x:193.9},0).wait(1).to({scaleX:1.09,scaleY:0.99,rotation:12.4},0).wait(1).to({scaleX:1.11,scaleY:0.99,rotation:12.6,x:194.1,y:63.8},0).wait(1).to({scaleX:1.12,scaleY:0.99,rotation:12.9,x:194.4,y:64},0).wait(1).to({scaleX:1.13,scaleY:0.98,rotation:13.1,x:194.6,y:64.3},0).wait(1).to({scaleX:1.14,scaleY:0.98,rotation:13.3,x:194.8,y:64.6},0).wait(1).to({scaleX:1.16,scaleY:0.98,rotation:13.6,x:195,y:64.7},0).wait(1).to({scaleX:1.17,scaleY:0.97,rotation:13.8,x:195.2,y:65},0).wait(1).to({scaleX:1.18,scaleY:0.97,rotation:14,x:195.4,y:65.3},0).wait(1).to({scaleX:1.19,scaleY:0.97,rotation:14.3,x:195.7,y:65.6},0).wait(1).to({scaleX:1.21,scaleY:0.96,rotation:14.5,x:195.8,y:65.8},0).wait(1).to({scaleX:1.22,scaleY:0.96,rotation:14.7,x:196.1,y:66.1},0).wait(1).to({scaleX:1.23,scaleY:0.95,rotation:15,x:196.3,y:66.4},0).wait(1).to({scaleX:1.25,scaleY:0.95,rotation:15.2,x:196.5,y:66.6},0).wait(1).to({scaleX:1.26,scaleY:0.95,rotation:15.4,x:196.8,y:66.9},0).wait(1).to({scaleX:1.27,scaleY:0.94,rotation:15.6,x:197,y:67.1},0).wait(1).to({scaleX:1.28,scaleY:0.94,rotation:15.9,x:197.2,y:67.4},0).wait(1).to({scaleX:1.3,scaleY:0.94,rotation:16.1,x:197.4,y:67.7},0).wait(1).to({scaleX:1.31,scaleY:0.93,rotation:16.3,x:197.6,y:67.9},0).wait(1).to({scaleX:1.32,scaleY:0.93,rotation:16.6,x:197.8,y:68.2},0).wait(1).to({scaleX:1.33,scaleY:0.93,rotation:16.8,x:198.1,y:68.5},0).wait(1).to({scaleX:1.35,scaleY:0.92,rotation:17,x:198.3,y:68.7},0).wait(1).to({scaleX:1.36,scaleY:0.92,rotation:17.3,x:198.5,y:69},0).wait(1).to({scaleX:1.34,scaleY:0.92,rotation:16.3,x:198.3,y:68.7},0).wait(1).to({scaleX:1.33,rotation:15.3,y:68.3},0).wait(1).to({scaleX:1.31,rotation:14.3,x:198.1,y:68},0).wait(1).to({scaleX:1.3,rotation:13.3,x:197.9,y:67.7},0).wait(1).to({scaleX:1.28,rotation:12.3,x:197.8,y:67.4},0).wait(1).to({scaleX:1.26,rotation:11.3,x:197.7,y:67.1},0).wait(1).to({scaleX:1.25,rotation:10.3,x:197.6,y:66.7},0).wait(1).to({scaleX:1.23,rotation:9.3,x:197.4,y:66.5},0).wait(1).to({scaleX:1.22,rotation:8.3,x:197.3,y:66.1},0).wait(1).to({scaleX:1.2,rotation:7.3,x:197.1,y:65.8},0).wait(1).to({scaleX:1.19,rotation:6.3,x:197,y:65.5},0).wait(1).to({scaleX:1.17,rotation:5.3,x:196.9,y:65.1},0).wait(1).to({scaleX:1.15,rotation:4.3,x:196.8,y:64.8},0).wait(1).to({scaleX:1.14,rotation:3.3,x:196.6,y:64.5},0).wait(1).to({scaleX:1.12,rotation:2.3,x:196.5,y:64.2},0).wait(1).to({scaleX:1.12,scaleY:0.92,rotation:2.2,x:196.4},0).wait(1).to({scaleX:1.11,scaleY:0.93,rotation:2.1,x:196.3},0).wait(1).to({scaleX:1.11,scaleY:0.93,rotation:2,x:196.2},0).wait(1).to({scaleX:1.1,scaleY:0.93,rotation:1.9,x:196.1},0).wait(1).to({scaleX:1.1,scaleY:0.94,rotation:1.8},0).wait(1).to({scaleX:1.09,scaleY:0.94,rotation:1.7,x:196,y:64.1},0).wait(1).to({scaleX:1.09,scaleY:0.94,rotation:1.6,x:195.9},0).wait(1).to({scaleX:1.08,scaleY:0.95,rotation:1.5,x:195.8},0).wait(1).to({scaleX:1.08,scaleY:0.95,rotation:1.4,x:195.7},0).wait(1).to({scaleX:1.07,scaleY:0.95,rotation:1.3,x:195.6},0).wait(1).to({scaleX:1.06,scaleY:0.96,rotation:1.2,x:195.5},0).wait(1).to({scaleX:1.06,scaleY:0.96,rotation:1.1},0).wait(1).to({scaleX:1.05,scaleY:0.97,rotation:1,x:195.4},0).wait(1).to({scaleX:1.05,scaleY:0.97,rotation:0.9,x:195.3,y:64},0).wait(1).to({scaleX:1.04,scaleY:0.97,rotation:0.8,x:195.2,y:64.1},0).wait(1).to({scaleX:1.04,scaleY:0.98,rotation:0.7,x:195.1,y:64},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:0.6,y:64.1},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:0.5,x:194.9},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.4,x:194.8,y:64},0).wait(1).to({scaleX:1.02,scaleY:0.99,rotation:0.3},0).wait(1).to({scaleX:1.01,scaleY:0.99,rotation:0.2,x:194.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.1,x:194.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:194.5},0).wait(1));

	// Lady
	this.instance_5 = new lib.Symbol20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(167,67,1,1,0,0,0,43,52);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.flash0ai();
	this.instance_6.parent = this;
	this.instance_6.setTransform(131,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},35).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).wait(1).to({x:167.5,alpha:0.071},0).wait(1).to({x:168,alpha:0.143},0).wait(1).to({x:168.5,alpha:0.214},0).wait(1).to({x:169,alpha:0.286},0).wait(1).to({x:169.5,alpha:0.357},0).wait(1).to({x:170,alpha:0.429},0).wait(1).to({x:170.6,alpha:0.5},0).wait(1).to({x:171.1,alpha:0.571},0).wait(1).to({x:171.6,alpha:0.643},0).wait(1).to({x:172.1,alpha:0.714},0).wait(1).to({x:172.6,alpha:0.786},0).wait(1).to({x:173.1,alpha:0.857},0).wait(1).to({x:173.6,alpha:0.929},0).wait(1).to({x:174.1,alpha:1},0).to({_off:true},1).wait(115));

	// Left Arm
	this.instance_7 = new lib.Symbol31();
	this.instance_7.parent = this;
	this.instance_7.setTransform(367.5,172.5,1,1,0,0,0,35.5,16.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({_off:false},0).wait(1).to({rotation:0.9,x:367.6,y:172.3},0).wait(1).to({rotation:1.8,x:367.7,y:172.2},0).wait(1).to({rotation:2.6,x:367.8,y:172},0).wait(1).to({rotation:3.5,x:367.9,y:171.8},0).wait(1).to({rotation:4.4,x:368,y:171.6},0).wait(1).to({rotation:5.3,y:171.5},0).wait(1).to({rotation:6.2,x:368.1,y:171.2},0).wait(1).to({rotation:7.1,x:368.2,y:171.1},0).wait(1).to({rotation:7.9,y:170.9},0).wait(1).to({rotation:8.8,x:368.4,y:170.7},0).wait(1).to({rotation:9.7,y:170.6},0).wait(1).to({rotation:10.6,x:368.5,y:170.3},0).wait(1).to({rotation:11.5,x:368.6,y:170.2},0).wait(1).to({rotation:12.4,x:368.7,y:170},0).wait(1).to({rotation:13.2,y:169.9},0).wait(1).to({rotation:14.1,x:368.9,y:169.7},0).wait(1).to({rotation:15,x:369,y:169.5},0).wait(1).to({rotation:14.5},0).wait(1).to({rotation:14,x:369.1},0).wait(1).to({rotation:13.4,x:369.2,y:169.6},0).wait(1).to({rotation:12.9,x:369.3},0).wait(1).to({rotation:12.4,x:369.4},0).wait(1).to({rotation:11.9,x:369.5,y:169.7},0).wait(1).to({rotation:11.3,x:369.6},0).wait(1).to({rotation:10.8,x:369.7},0).wait(1).to({rotation:10.3,x:369.8,y:169.8},0).wait(1).to({rotation:9.8,x:369.9,y:169.7},0).wait(1).to({rotation:9.2,x:370,y:169.8},0).wait(1).to({rotation:8.7,x:370.1},0).wait(1).to({rotation:8.2,x:370.2,y:169.9},0).wait(1).to({rotation:7.7,x:370.3},0).wait(1).to({rotation:7.1,x:370.4},0).wait(1).to({rotation:6.6,x:370.5,y:170},0).wait(1).to({rotation:6.1,x:370.6,y:169.9},0).wait(1).to({rotation:5.6,x:370.7,y:170},0).wait(1).to({rotation:5.1,x:370.8,y:170.1},0).wait(1).to({rotation:4.5,x:370.9,y:170},0).wait(1).to({rotation:4,x:371,y:170.1},0).wait(1).to({rotation:3.5,x:371.1},0).wait(1).to({rotation:3,x:371.2,y:170.2},0).wait(1).to({rotation:2.4,x:371.3},0).wait(1).to({rotation:1.9,x:371.4},0).wait(1).to({rotation:1.4,x:371.5},0).wait(1).to({rotation:0.9,x:371.6,y:170.3},0).wait(1).to({rotation:0.3,x:371.7},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.5,y:170.2},0).wait(1).to({rotation:-0.7,x:371.6},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-1.2,y:170.1},0).wait(1).to({rotation:-1.4,x:371.5},0).wait(1).to({rotation:-1.6,y:170},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-1.9,x:371.4},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-2.3,x:371.3},0).wait(1).to({rotation:-2.5,y:169.9},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:-2.8,x:371.2},0).wait(1).to({rotation:-3,y:169.8},0).wait(1).to({rotation:-3.2},0).wait(1).to({rotation:-3.4,x:371.1,y:169.7},0).wait(1).to({rotation:-3.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-3.9,x:371},0).wait(1).to({rotation:-4.1,y:169.6},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4.4,x:370.9},0).wait(1).to({rotation:-4.6,y:169.5},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.9,x:370.8},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.3,y:169.4},0).wait(1).to({rotation:-5.5,y:169.3},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.8,x:370.7},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-6.2,x:370.6,y:169.2},0).wait(1).to({rotation:-6.4},0).wait(1).to({rotation:-6.5},0).wait(1).to({rotation:-6.3,x:370.5,y:169.3},0).wait(1).to({rotation:-6.1,x:370.4,y:169.4},0).wait(1).to({rotation:-5.9,x:370.3,y:169.5},0).wait(1).to({rotation:-5.7,x:370.2,y:169.6},0).wait(1).to({rotation:-5.5,x:370.1,y:169.7},0).wait(1).to({rotation:-5.3,x:370,y:169.8},0).wait(1).to({rotation:-5.1,x:369.9,y:169.9},0).wait(1).to({rotation:-4.9,x:369.8,y:170},0).wait(1).to({rotation:-4.7,x:369.7,y:170.1},0).wait(1).to({rotation:-4.5,x:369.6,y:170.2},0).wait(1).to({rotation:-4.3,x:369.5,y:170.3},0).wait(1).to({rotation:-4.1,x:369.4,y:170.4},0).wait(1).to({rotation:-3.9,x:369.3,y:170.5},0).wait(1).to({rotation:-3.7,x:369.2,y:170.6},0).wait(1).to({rotation:-3.5,x:369.1,y:170.7},0).wait(1).to({rotation:-3.3,x:369,y:170.9},0).wait(1).to({rotation:-3.1,x:368.9,y:171},0).wait(1).to({rotation:-2.9,x:368.8,y:171.1},0).wait(1).to({rotation:-2.7,x:368.7,y:171.2},0).wait(1).to({rotation:-2.5,x:368.6,y:171.3},0).wait(1).to({rotation:-2.2,x:368.5,y:171.4},0).wait(1).to({rotation:-2,y:171.5},0).wait(1).to({rotation:-1.8,x:368.4,y:171.6},0).wait(1).to({rotation:-1.6,x:368.3,y:171.7},0).wait(1).to({rotation:-1.4,x:368.2,y:171.8},0).wait(1).to({rotation:-1.2,x:368.1,y:171.9},0).wait(1).to({rotation:-1,x:368,y:172},0).wait(1).to({rotation:-0.8,x:367.9,y:172.1},0).wait(1).to({rotation:-0.6,x:367.8,y:172.2},0).wait(1).to({rotation:-0.4,x:367.7,y:172.3},0).wait(1).to({rotation:-0.2,x:367.6,y:172.4},0).wait(1).to({rotation:0,x:367.5,y:172.5},0).wait(1));

	// Right Arm
	this.instance_8 = new lib.Symbol33();
	this.instance_8.parent = this;
	this.instance_8.setTransform(370,149.5,1,1,0,0,0,13,11.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({_off:false},0).wait(1).to({y:149.4},0).wait(1).to({y:149.3},0).wait(1).to({y:149.2},0).wait(1).to({y:149},0).wait(1).to({y:148.9},0).wait(1).to({y:148.8},0).wait(1).to({y:148.7},0).wait(1).to({y:148.6},0).wait(1).to({y:148.5},0).wait(1).to({y:148.3},0).wait(1).to({y:148.2},0).wait(1).to({y:148.1},0).wait(1).to({y:148},0).wait(1).to({y:147.9},0).wait(1).to({y:147.8},0).wait(1).to({y:147.6},0).wait(1).to({y:147.5},0).wait(1).to({y:147.4},0).wait(1).to({y:147.3},0).wait(1).to({y:147.2},0).wait(1).to({y:147.1},0).wait(1).to({y:146.9},0).wait(1).to({y:146.8},0).wait(1).to({y:146.7},0).wait(1).to({y:146.6},0).wait(1).to({y:146.5},0).wait(1).to({y:146.4},0).wait(1).to({y:146.2},0).wait(1).to({y:146.1},0).wait(1).to({y:146},0).wait(1).to({y:145.9},0).wait(1).to({y:146.2},0).wait(1).to({y:146.5},0).wait(1).to({y:146.8},0).wait(1).to({y:147},0).wait(1).to({y:147.3},0).wait(1).to({y:147.6},0).wait(1).to({y:147.9},0).wait(1).to({y:148.2},0).wait(1).to({y:148.5},0).wait(1).to({y:148.8},0).wait(1).to({y:149},0).wait(1).to({y:149.3},0).wait(1).to({y:149.6},0).wait(1).to({y:149.9},0).wait(1).to({y:150.2},0).wait(1).to({y:150.5},0).wait(1).to({y:150.8},0).wait(1).to({y:151},0).wait(1).to({y:151.3},0).wait(1).to({y:151.6},0).wait(1).to({y:151.9},0).wait(1).to({y:152.2},0).wait(1).to({y:152.5},0).wait(1).to({y:152.8},0).wait(1).to({y:153},0).wait(1).to({y:153.3},0).wait(1).to({y:153.6},0).wait(1).to({y:153.9},0).wait(1).to({y:153.8},0).wait(1).to({y:153.6},0).wait(1).to({y:153.5},0).wait(1).to({y:153.3},0).wait(1).to({y:153.2},0).wait(1).to({y:153},0).wait(1).to({y:152.9},0).wait(1).to({y:152.7},0).wait(1).to({y:152.6},0).wait(1).to({y:152.4},0).wait(1).to({y:152.3},0).wait(1).to({y:152.1},0).wait(1).to({y:152},0).wait(1).to({y:151.8},0).wait(1).to({y:151.7},0).wait(1).to({y:151.5},0).wait(1).to({y:151.4},0).wait(1).to({y:151.2},0).wait(1).to({y:151.1},0).wait(1).to({y:150.9},0).wait(1).to({y:150.8},0).wait(1).to({y:150.6},0).wait(1).to({y:150.5},0).wait(1).to({y:150.3},0).wait(3).to({y:150.4},0).wait(6).to({y:150.5},0).wait(5).to({y:150.6},0).wait(6).to({y:150.7},0).wait(3).to({y:150.6},0).wait(1).to({y:150.4},0).wait(1).to({y:150.3},0).wait(1).to({y:150.2},0).wait(1).to({y:150},0).wait(1).to({y:149.9},0).wait(1).to({y:149.8},0).wait(1).to({y:149.6},0).wait(1).to({y:149.5},0).wait(1));

	// Newspaper
	this.instance_9 = new lib.Symbol32();
	this.instance_9.parent = this;
	this.instance_9.setTransform(340.5,121.5,1,1,0,0,0,28.5,47.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({_off:false},0).wait(1).to({x:340.7,y:121.2},0).wait(1).to({x:340.8,y:120.9},0).wait(1).to({x:341,y:120.6},0).wait(1).to({x:341.1,y:120.3},0).wait(1).to({x:341.3,y:120.1},0).wait(1).to({x:341.4,y:119.8},0).wait(1).to({x:341.6,y:119.5},0).wait(1).to({x:341.7,y:119.2},0).wait(1).to({x:341.9,y:118.9},0).wait(1).to({x:342.1,y:118.6},0).wait(1).to({x:342.2,y:118.3},0).wait(1).to({x:342.4,y:118},0).wait(1).to({x:342.5,y:117.7},0).wait(1).to({x:342.7,y:117.5},0).wait(1).to({x:342.8,y:117.2},0).wait(1).to({x:343,y:116.9},0).wait(1).to({x:343.1,y:116.6},0).wait(1).to({x:343.3,y:116.3},0).wait(1).to({y:116.5},0).wait(1).to({x:343.2,y:116.6},0).wait(1).to({y:116.8},0).wait(1).to({y:117},0).wait(1).to({y:117.1},0).wait(1).to({x:343.1,y:117.3},0).wait(1).to({y:117.5},0).wait(1).to({y:117.6},0).wait(1).to({y:117.8},0).wait(1).to({x:343,y:118},0).wait(1).to({y:118.1},0).wait(1).to({y:118.3},0).wait(1).to({x:342.9,y:118.5},0).wait(1).to({y:118.6},0).wait(1).to({y:118.8},0).wait(1).to({y:118.9},0).wait(1).to({x:342.8,y:119.1},0).wait(1).to({y:119.3},0).wait(1).to({y:119.4},0).wait(1).to({x:342.7,y:119.6},0).wait(1).to({y:119.8},0).wait(1).to({y:119.9},0).wait(1).to({y:120.1},0).wait(1).to({x:342.6,y:120.3},0).wait(1).to({y:120.4},0).wait(1).to({y:120.6},0).wait(1).to({y:120.8},0).wait(1).to({x:342.5,y:120.9},0).wait(1).to({y:121.1},0).wait(2).to({x:342.4,y:121.2},0).wait(2).to({x:342.3},0).wait(1).to({y:121.3},0).wait(1).to({x:342.2},0).wait(2).to({x:342.1,y:121.4},0).wait(2).to({x:342},0).wait(1).to({y:121.5},0).wait(2).to({x:341.9},0).wait(1).to({y:121.6},0).wait(1).to({x:341.8},0).wait(2).to({x:341.7,y:121.7},0).wait(2).to({x:341.6,y:121.8},0).wait(2).to({x:341.5},0).wait(1).to({y:121.9},0).wait(1).to({x:341.4},0).wait(2).to({y:122},0).wait(1).to({x:341.3},0).wait(2).to({x:341.2,y:122.1},0).wait(2).to({x:341.1},0).wait(1).to({y:122.2},0).wait(1).to({x:341},0).wait(2).to({x:340.9,y:122.3},0).wait(4).to({y:122.2},0).wait(2).to({x:340.8},0).wait(2).to({y:122.1},0).wait(4).to({y:122},0).wait(2).to({x:340.7},0).wait(2).to({y:121.9},0).wait(4).to({y:121.8},0).wait(2).to({x:340.6},0).wait(2).to({y:121.7},0).wait(4).to({y:121.6},0).wait(2).to({x:340.5},0).wait(2).to({y:121.5},0).wait(2));

	// Head
	this.instance_10 = new lib.Symbol30();
	this.instance_10.parent = this;
	this.instance_10.setTransform(410.3,145.9,1,1,0,0,0,35.4,80);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).wait(1).to({regX:35.5,regY:43,rotation:0.9,x:410.7,y:108.9},0).wait(1).to({rotation:1.8,x:411.1},0).wait(1).to({rotation:2.6,x:411.3,y:109},0).wait(1).to({rotation:3.5,x:411.7},0).wait(1).to({rotation:4.4,x:412},0).wait(1).to({rotation:5.3,x:412.4,y:109.1},0).wait(1).to({rotation:6.2,x:412.7},0).wait(1).to({rotation:7.1,x:413,y:109.2},0).wait(1).to({rotation:7.9,x:413.3,y:109.3},0).wait(1).to({rotation:8.8,x:413.7,y:109.4},0).wait(1).to({rotation:9.7,x:414,y:109.5},0).wait(1).to({rotation:10.6,x:414.3},0).wait(1).to({rotation:11.5,x:414.7,y:109.7},0).wait(1).to({rotation:12.4,x:415,y:109.8},0).wait(1).to({rotation:13.2,x:415.3,y:109.9},0).wait(1).to({rotation:14.1,x:415.6,y:110},0).wait(1).to({rotation:15,x:415.9,y:110.2},0).wait(1).to({rotation:14.7,x:415.8,y:110.1},0).wait(1).to({rotation:14.4,x:415.7},0).wait(1).to({rotation:14.1,x:415.5,y:110},0).wait(1).to({rotation:13.8,x:415.4},0).wait(1).to({rotation:13.5,x:415.2},0).wait(1).to({rotation:13.2,x:415.1,y:109.9},0).wait(1).to({rotation:12.9,x:414.9,y:109.8},0).wait(1).to({rotation:12.6,x:414.8},0).wait(1).to({rotation:12.3,x:414.6},0).wait(1).to({rotation:12,x:414.5,y:109.7},0).wait(1).to({rotation:11.7,x:414.3},0).wait(1).to({rotation:11.4,x:414.2,y:109.6},0).wait(1).to({rotation:11.1,x:414.1},0).wait(1).to({rotation:10.8,x:413.9},0).wait(1).to({rotation:10.5,x:413.8,y:109.5},0).wait(1).to({rotation:10.2,x:413.6},0).wait(1).to({rotation:9.9,x:413.4},0).wait(1).to({rotation:9.6,x:413.3,y:109.4},0).wait(1).to({rotation:9.3,x:413.2},0).wait(1).to({rotation:9,x:413},0).wait(1).to({rotation:8.7,x:412.9,y:109.3},0).wait(1).to({rotation:8.4,x:412.7},0).wait(1).to({rotation:8.1,x:412.6},0).wait(1).to({rotation:7.8,x:412.4},0).wait(1).to({rotation:7.5,x:412.2,y:109.2},0).wait(1).to({rotation:7.1,x:412.1},0).wait(1).to({rotation:6.8,x:411.9},0).wait(1).to({rotation:6.4,y:109.1},0).wait(1).to({rotation:6,x:411.8},0).wait(1).to({rotation:5.5,x:411.7},0).wait(1).to({rotation:5.1,x:411.6},0).wait(1).to({rotation:4.7,x:411.5,y:109},0).wait(1).to({rotation:4.2,x:411.4},0).wait(1).to({rotation:3.8,x:411.2},0).wait(1).to({rotation:3.4},0).wait(1).to({rotation:2.9,x:411},0).wait(1).to({rotation:2.5,x:410.9,y:108.9},0).wait(1).to({rotation:2,x:410.8},0).wait(1).to({rotation:1.6,x:410.7},0).wait(1).to({rotation:1.2,x:410.6},0).wait(1).to({rotation:0.7,x:410.5},0).wait(1).to({rotation:0.3,x:410.4},0).wait(1).to({rotation:-0.1,x:410.3},0).wait(1).to({rotation:-0.6,x:410.2},0).wait(1).to({rotation:-1,x:410.1},0).wait(1).to({rotation:-1.4,x:410},0).wait(1).to({rotation:-1.9,x:409.9,y:109},0).wait(1).to({rotation:-2.3,x:409.7,y:108.9},0).wait(1).to({rotation:-2.8,x:409.6},0).wait(1).to({rotation:-3.2,y:109},0).wait(1).to({rotation:-3.6,x:409.4,y:108.9},0).wait(1).to({rotation:-4.1,x:409.3,y:109},0).wait(1).to({rotation:-4.5,x:409.2},0).wait(1).to({rotation:-4.9,x:409.1},0).wait(1).to({rotation:-5.4,x:409,y:109.1},0).wait(1).to({rotation:-5.8,x:408.9},0).wait(1).to({rotation:-6.2,x:408.8},0).wait(1).to({rotation:-6.7,x:408.7},0).wait(1).to({rotation:-7.1,y:109.2},0).wait(1).to({rotation:-7.6,x:408.5},0).wait(1).to({rotation:-8,x:408.4},0).wait(1).to({rotation:-7.8},0).wait(1).to({rotation:-7.5,x:408.5},0).wait(1).to({rotation:-7.3,x:408.6},0).wait(1).to({rotation:-7.1,y:109.1},0).wait(1).to({rotation:-6.9,x:408.7,y:109.2},0).wait(1).to({rotation:-6.7,y:109.1},0).wait(1).to({rotation:-6.4,x:408.8},0).wait(1).to({rotation:-6.2},0).wait(1).to({rotation:-6,x:408.9},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-5.5,x:409,y:109},0).wait(1).to({rotation:-5.3,x:409.1},0).wait(1).to({rotation:-5.1,y:109.1},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-4.7,x:409.2,y:109},0).wait(1).to({rotation:-4.4,x:409.3},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4,x:409.4},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-3.6,x:409.5,y:108.9},0).wait(1).to({rotation:-3.3,y:109},0).wait(1).to({rotation:-3.1,x:409.6},0).wait(1).to({rotation:-2.9,y:108.9},0).wait(1).to({rotation:-2.7,x:409.7},0).wait(1).to({rotation:-2.4,x:409.8},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2,x:409.9},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-1.6,x:410},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-1.1,x:410.1},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-0.7,x:410.2},0).wait(1).to({rotation:-0.4,x:410.3},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:0,x:410.4},0).wait(1));

	// Newspaper-guy
	this.instance_11 = new lib.Symbol19();
	this.instance_11.parent = this;
	this.instance_11.setTransform(396.7,147.3,1,1,0,0,0,67.5,79.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.flash0ai_10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(377,146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},30).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},0).wait(1).to({x:395.8,alpha:0.053},0).wait(1).to({x:394.8,alpha:0.105},0).wait(1).to({x:393.9,alpha:0.158},0).wait(1).to({x:393,alpha:0.211},0).wait(1).to({x:392.1,alpha:0.263},0).wait(1).to({x:391.1,alpha:0.316},0).wait(1).to({x:390.2,alpha:0.368},0).wait(1).to({x:389.3,y:147.4,alpha:0.421},0).wait(1).to({x:388.4,alpha:0.474},0).wait(1).to({x:387.4,alpha:0.526},0).wait(1).to({x:386.5,alpha:0.579},0).wait(1).to({x:385.6,alpha:0.632},0).wait(1).to({x:384.7,alpha:0.684},0).wait(1).to({x:383.7,alpha:0.737},0).wait(1).to({x:382.8,alpha:0.789},0).wait(1).to({x:381.9,y:147.5,alpha:0.842},0).wait(1).to({x:381,alpha:0.895},0).wait(1).to({x:380,alpha:0.947},0).wait(1).to({x:379.1,alpha:1},0).to({_off:true},1).wait(115));

	// Right Hand
	this.instance_13 = new lib.Symbol29();
	this.instance_13.parent = this;
	this.instance_13.setTransform(130.2,148.4,1,1,0,0,0,6.2,6.4);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({_off:false},0).wait(1).to({regX:36.5,regY:21.5,rotation:-0.4,x:160.6,y:163.3},0).wait(1).to({rotation:-0.8,x:160.7,y:163.1},0).wait(1).to({rotation:-1.1,x:160.8,y:162.9},0).wait(1).to({rotation:-1.5,x:160.9,y:162.7},0).wait(1).to({rotation:-1.9,x:161,y:162.5},0).wait(1).to({rotation:-2.3,x:161.1,y:162.3},0).wait(1).to({rotation:-2.6,x:161.2,y:162.1},0).wait(1).to({rotation:-3,x:161.3,y:161.9},0).wait(1).to({rotation:-3.4,y:161.7},0).wait(1).to({rotation:-3.8,x:161.4,y:161.5},0).wait(1).to({rotation:-4.1,x:161.5,y:161.3},0).wait(1).to({rotation:-4.5,x:161.6,y:161.1},0).wait(1).to({rotation:-4.9,x:161.7,y:160.9},0).wait(1).to({rotation:-5.3,y:160.6},0).wait(1).to({rotation:-5.6,x:161.8,y:160.4},0).wait(1).to({rotation:-6,x:161.9,y:160.3},0).wait(1).to({rotation:-6.4,x:162,y:160},0).wait(1).to({rotation:-6.8,x:162.1,y:159.8},0).wait(1).to({rotation:-6.4,x:162,y:160},0).wait(1).to({rotation:-6,x:161.9,y:160.3},0).wait(1).to({rotation:-5.6,y:160.5},0).wait(1).to({rotation:-5.2,x:161.7,y:160.7},0).wait(1).to({rotation:-4.8,x:161.6,y:160.9},0).wait(1).to({rotation:-4.4,y:161.1},0).wait(1).to({rotation:-4,x:161.5,y:161.4},0).wait(1).to({rotation:-3.6,x:161.4,y:161.6},0).wait(1).to({rotation:-3.3,x:161.3,y:161.8},0).wait(1).to({rotation:-2.9,x:161.2,y:161.9},0).wait(1).to({rotation:-2.5,x:161.1,y:162.2},0).wait(1).to({rotation:-2.1,y:162.4},0).wait(1).to({rotation:-1.7,x:161,y:162.6},0).wait(1).to({rotation:-1.3,x:160.9,y:162.8},0).wait(1).to({rotation:-0.9,x:160.7,y:163},0).wait(1).to({rotation:-0.5,x:160.6,y:163.2},0).wait(1).to({rotation:-0.1,x:160.5,y:163.4},0).wait(1).to({rotation:0.2,x:160.4,y:163.6},0).wait(1).to({rotation:0.6,x:160.3,y:163.8},0).wait(1).to({rotation:1,x:160.2,y:164},0).wait(1).to({rotation:1.4,x:160.1,y:164.2},0).wait(1).to({rotation:1.8,x:160,y:164.5},0).wait(1).to({rotation:2.2,x:159.9,y:164.7},0).wait(1).to({rotation:2.6,x:159.8,y:164.9},0).wait(1).to({rotation:3,x:159.7,y:165},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:2.7,x:159.8,y:164.9},0).wait(1).to({rotation:2.5,y:164.8},0).wait(1).to({rotation:2.3},0).wait(1).to({rotation:2.2,x:159.9,y:164.7},0).wait(1).to({rotation:2,x:160,y:164.6},0).wait(1).to({rotation:1.9,y:164.5},0).wait(1).to({rotation:1.7,y:164.4},0).wait(1).to({rotation:1.6,x:160.1,y:164.3},0).wait(1).to({rotation:1.4,y:164.2},0).wait(1).to({rotation:1.3,x:160.2},0).wait(1).to({rotation:1.1,y:164.1},0).wait(1).to({rotation:1,x:160.3,y:164},0).wait(1).to({rotation:0.8,y:163.9},0).wait(1).to({rotation:0.6,y:163.8},0).wait(1).to({rotation:0.5,x:160.4,y:163.7},0).wait(1).to({rotation:0.3},0).wait(1).to({rotation:0.2,x:160.5,y:163.6},0).wait(1).to({rotation:0,y:163.5},0).wait(1).to({rotation:-0.1,y:163.4},0).wait(1).to({rotation:-0.3,x:160.6,y:163.3},0).wait(1).to({rotation:-0.4,y:163.2},0).wait(1).to({rotation:-0.7,x:160.7},0).wait(1).to({rotation:-0.9,x:160.8,y:163},0).wait(1).to({rotation:-1.1,y:162.9},0).wait(1).to({rotation:-1.3,x:160.9,y:162.8},0).wait(1).to({rotation:-1.5,y:162.7},0).wait(1).to({rotation:-1.7,x:161,y:162.6},0).wait(1).to({rotation:-1.9,y:162.5},0).wait(1).to({rotation:-2.1,y:162.4},0).wait(1).to({rotation:-2.4,x:161.1,y:162.3},0).wait(1).to({rotation:-2.6,y:162.1},0).wait(1).to({rotation:-2.8,x:161.2,y:162},0).wait(1).to({rotation:-3,x:161.3,y:161.9},0).wait(1).to({rotation:-3.2,y:161.8},0).wait(1).to({rotation:-3.4,x:161.4,y:161.6},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.9,y:161.4},0).wait(1).to({rotation:-4.1,x:161.5,y:161.3},0).wait(1).to({rotation:-4.3,y:161.2},0).wait(1).to({rotation:-4.5,x:161.6,y:161.1},0).wait(1).to({rotation:-4.7,y:161},0).wait(1).to({rotation:-4.9,x:161.7,y:160.8},0).wait(1).to({rotation:-5.1,y:160.7},0).wait(1).to({rotation:-5.3,x:161.8,y:160.6},0).wait(1).to({rotation:-5.6,x:161.9,y:160.5},0).wait(1).to({rotation:-5.8,x:161.8,y:160.4},0).wait(1).to({rotation:-6,x:161.9,y:160.3},0).wait(1).to({rotation:-5.7,x:161.8,y:160.4},0).wait(1).to({rotation:-5.5,y:160.5},0).wait(1).to({rotation:-5.2,x:161.7,y:160.7},0).wait(1).to({rotation:-4.9,y:160.8},0).wait(1).to({rotation:-4.7,x:161.6,y:161},0).wait(1).to({rotation:-4.4,y:161.1},0).wait(1).to({rotation:-4.2,x:161.5,y:161.3},0).wait(1).to({rotation:-3.9,x:161.4,y:161.4},0).wait(1).to({rotation:-3.6,y:161.6},0).wait(1).to({rotation:-3.4,x:161.3,y:161.7},0).wait(1).to({rotation:-3.1,y:161.8},0).wait(1).to({rotation:-2.9,x:161.2,y:162},0).wait(1).to({rotation:-2.6,y:162.1},0).wait(1).to({rotation:-2.3,x:161.1,y:162.3},0).wait(1).to({rotation:-2.1,y:162.4},0).wait(1).to({rotation:-1.8,x:161,y:162.6},0).wait(1).to({rotation:-1.6,x:160.9,y:162.7},0).wait(1).to({rotation:-1.3,y:162.8},0).wait(1).to({rotation:-1,x:160.8,y:163},0).wait(1).to({rotation:-0.8,x:160.7,y:163.1},0).wait(1).to({rotation:-0.5,x:160.6,y:163.2},0).wait(1).to({rotation:-0.3,y:163.4},0).wait(1).to({rotation:0,x:160.5,y:163.5},0).wait(1));

	// Thumg
	this.instance_14 = new lib.Symbol28();
	this.instance_14.parent = this;
	this.instance_14.setTransform(187,131.5,1,1,0,0,0,5,3.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).wait(1).to({x:186.6,y:131.9},0).wait(1).to({x:186.3,y:132.2},0).wait(1).to({x:185.9,y:132.6},0).wait(1).to({x:185.6,y:132.9},0).wait(1).to({x:185.2,y:133.3},0).wait(1).to({x:184.9,y:133.6},0).wait(1).to({x:184.5,y:134},0).wait(1).to({x:184.2,y:134.3},0).wait(1).to({x:183.8,y:134.7},0).wait(1).to({x:183.5,y:135},0).wait(1).to({x:183.1,y:135.4},0).wait(1).to({x:182.8,y:135.7},0).wait(1).to({x:182.4,y:136.1},0).wait(1).to({x:182.1,y:136.4},0).wait(1).to({x:181.7,y:136.8},0).wait(1).to({x:181.4,y:137.1},0).wait(1).to({x:181,y:137.5},0).wait(1).to({x:181.5,y:137},0).wait(1).to({x:182,y:136.5},0).wait(1).to({x:182.5,y:136},0).wait(1).to({x:183,y:135.5},0).wait(1).to({x:183.5,y:135},0).wait(1).to({x:184,y:134.5},0).wait(1).to({x:184.6,y:133.9},0).wait(1).to({x:185.1,y:133.4},0).wait(1).to({x:185.6,y:132.9},0).wait(1).to({x:186.1,y:132.4},0).wait(1).to({x:186.6,y:131.9},0).wait(1).to({x:187.1,y:131.4},0).wait(1).to({x:187.6,y:130.9},0).wait(1).to({x:187.5,y:131},0).wait(1).to({x:187.4,y:131.1},0).wait(1).to({x:187.3,y:131.2},0).wait(1).to({x:187.2,y:131.3},0).wait(1).to({x:187.1,y:131.4},0).wait(1).to({x:187,y:131.5},0).wait(1).to({x:186.9,y:131.6},0).wait(1).to({x:186.8,y:131.7},0).wait(1).to({x:186.7,y:131.8},0).wait(1).to({x:186.6,y:131.9},0).wait(1).to({x:186.5,y:132},0).wait(1).to({x:186.4,y:132.1},0).wait(1).to({x:186.3,y:132.2},0).wait(1).to({x:186.1,y:132.4},0).wait(1).to({x:186,y:132.5},0).wait(1).to({x:185.9,y:132.6},0).wait(1).to({x:185.8,y:132.7},0).wait(1).to({x:185.7,y:132.8},0).wait(1).to({x:185.6,y:132.9},0).wait(1).to({x:185.5,y:133},0).wait(1).to({x:185.4,y:133.1},0).wait(1).to({x:185.3,y:133.2},0).wait(1).to({x:185.2,y:133.3},0).wait(1).to({x:185.1,y:133.4},0).wait(1).to({x:185,y:133.5},0).wait(1).to({x:184.9,y:133.6},0).wait(1).to({x:184.8,y:133.7},0).wait(1).to({x:184.3,y:134.2},0).wait(1).to({x:183.8,y:134.7},0).wait(1).to({x:183.3,y:135.2},0).wait(1).to({x:182.8,y:135.7},0).wait(1).to({x:182.3,y:136.2},0).wait(1).to({x:181.8,y:136.7},0).wait(1).to({x:181.3,y:137.2},0).wait(1).to({x:180.8,y:137.7},0).wait(1).to({x:181.6,y:136.9},0).wait(1).to({x:182.4,y:136.2},0).wait(1).to({x:183.1,y:135.4},0).wait(1).to({x:183.9,y:134.6},0).wait(1).to({x:184.7,y:133.8},0).wait(1).to({x:185.5,y:133.1},0).wait(1).to({x:186.2,y:132.3},0).wait(1).to({x:187,y:131.5},0).wait(1).to({x:186.6,y:132},0).wait(1).to({x:186.1,y:132.4},0).wait(1).to({x:185.7,y:132.9},0).wait(1).to({x:185.3,y:133.3},0).wait(1).to({x:184.9,y:133.8},0).wait(1).to({x:184.4,y:134.2},0).wait(1).to({x:184,y:134.7},0).wait(1).to({x:183.6,y:135.1},0).wait(1).to({x:183.2,y:135.6},0).wait(1).to({x:182.7,y:136},0).wait(1).to({x:182.3,y:136.5},0).wait(1).to({x:182.8,y:136},0).wait(1).to({x:183.4,y:135.5},0).wait(1).to({x:183.9,y:135},0).wait(1).to({x:184.4,y:134.5},0).wait(1).to({x:184.9,y:134},0).wait(1).to({x:185.5,y:133.5},0).wait(1).to({x:186,y:133},0).wait(1).to({x:186.5,y:132.5},0).wait(1).to({x:187.1,y:132},0).wait(1).to({x:187.6,y:131.5},0).wait(1).to({x:188.1,y:131},0).wait(1).to({x:188.6,y:130.5},0).wait(1).to({x:189.2,y:130},0).wait(1).to({x:189.7,y:129.5},0).wait(1).to({x:189.5,y:129.6},0).wait(1).to({x:189.4,y:129.8},0).wait(1).to({x:189.2,y:129.9},0).wait(1).to({x:189,y:130},0).wait(1).to({x:188.9,y:130.1},0).wait(1).to({x:188.7,y:130.3},0).wait(1).to({x:188.5,y:130.4},0).wait(1).to({x:188.4,y:130.5},0).wait(1).to({x:188.2,y:130.6},0).wait(1).to({x:188,y:130.8},0).wait(1).to({x:187.8,y:130.9},0).wait(1).to({x:187.7,y:131},0).wait(1).to({x:187.5,y:131.1},0).wait(1).to({x:187.3,y:131.2},0).wait(1).to({x:187.2,y:131.4},0).wait(1).to({x:187,y:131.5},0).wait(1));

	// phone Guy
	this.instance_15 = new lib.Symbol18();
	this.instance_15.parent = this;
	this.instance_15.setTransform(132.9,140.3,1,1,0,0,0,56.5,74.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.flash0ai_13();
	this.instance_16.parent = this;
	this.instance_16.setTransform(93,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},30).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},5).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({_off:false},0).wait(1).to({x:134.1,y:140.1,alpha:0.071},0).wait(1).to({x:135.2,y:140,alpha:0.143},0).wait(1).to({x:136.4,y:139.9,alpha:0.214},0).wait(1).to({x:137.5,y:139.8,alpha:0.286},0).wait(1).to({x:138.7,y:139.7,alpha:0.357},0).wait(1).to({x:139.8,y:139.6,alpha:0.429},0).wait(1).to({x:141,y:139.5,alpha:0.5},0).wait(1).to({x:142.2,y:139.3,alpha:0.571},0).wait(1).to({x:143.3,y:139.2,alpha:0.643},0).wait(1).to({x:144.5,y:139.1,alpha:0.714},0).wait(1).to({x:145.6,y:139,alpha:0.786},0).wait(1).to({x:146.8,y:138.9,alpha:0.857},0).wait(1).to({x:147.9,y:138.8,alpha:0.929},0).wait(1).to({x:149.1,y:138.7,alpha:1},0).wait(1).to({x:149.3,y:139},0).to({_off:true},5).wait(115));

	// Right-Arm
	this.instance_17 = new lib.Symbol24();
	this.instance_17.parent = this;
	this.instance_17.setTransform(150.5,281.5,1,1,0,0,0,30.5,15.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(50).to({_off:false},0).wait(1).to({scaleX:1,rotation:0.8,x:150.4,y:281.9},0).wait(1).to({rotation:1.6,x:150.2,y:282.3},0).wait(1).to({scaleX:1,rotation:2.4,x:150.1,y:282.6},0).wait(1).to({scaleX:1,rotation:3.2,x:150,y:283.1},0).wait(1).to({scaleX:1,rotation:3.9,x:149.9,y:283.4},0).wait(1).to({rotation:4.7,x:149.7,y:283.8},0).wait(1).to({scaleX:1,rotation:5.5,x:149.6,y:284.2},0).wait(1).to({scaleX:1.01,rotation:6.3,x:149.5,y:284.5},0).wait(1).to({scaleX:1.01,rotation:7.1,x:149.4,y:284.9},0).wait(1).to({rotation:7.9,x:149.2,y:285.3},0).wait(1).to({scaleX:1.01,rotation:8.7,x:149.1,y:285.7},0).wait(1).to({scaleX:1.01,rotation:9.5,x:149,y:286},0).wait(1).to({rotation:10.3,x:148.9,y:286.4},0).wait(1).to({scaleX:1.01,rotation:11.1,x:148.8,y:286.8},0).wait(1).to({scaleX:1.01,rotation:11.8,x:148.6,y:287.2},0).wait(1).to({scaleX:1.01,rotation:12.6,x:148.5,y:287.5},0).wait(1).to({rotation:13.4,x:148.4,y:287.9},0).wait(1).to({scaleX:1.01,rotation:14.2,x:148.2,y:288.4},0).wait(1).to({scaleX:1.01,rotation:15,x:148.1,y:288.7},0).wait(1).to({scaleX:1.01,rotation:13.9,y:288.2},0).wait(1).to({rotation:12.8,y:287.7},0).wait(1).to({scaleX:1.02,rotation:11.7,y:287.2},0).wait(1).to({scaleX:1.02,rotation:10.7,y:286.7},0).wait(1).to({rotation:9.6,y:286.1},0).wait(1).to({scaleX:1.02,rotation:8.5,y:285.6},0).wait(1).to({scaleX:1.02,rotation:7.4,y:285.1},0).wait(1).to({scaleX:1.02,rotation:6.3,y:284.6},0).wait(1).to({rotation:5.2,y:284.1},0).wait(1).to({scaleX:1.02,rotation:4.2,y:283.5},0).wait(1).to({scaleX:1.02,rotation:3.1,y:283},0).wait(1).to({scaleX:1.02,rotation:2,y:282.6},0).wait(1).to({rotation:0.9,y:282},0).wait(1).to({scaleX:1.02,rotation:-0.2,y:281.5},0).wait(1).to({scaleX:1.02,rotation:-0.8,x:148,y:281.2},0).wait(1).to({scaleX:1.03,rotation:-1.4,y:281},0).wait(1).to({rotation:-2,y:280.7},0).wait(1).to({scaleX:1.03,rotation:-2.7,y:280.5},0).wait(1).to({scaleX:1.03,rotation:-3.3,y:280.1},0).wait(1).to({rotation:-3.9,x:147.9,y:279.9},0).wait(1).to({scaleX:1.03,rotation:-4.5,y:279.7},0).wait(1).to({scaleX:1.03,rotation:-5.1,y:279.4},0).wait(1).to({scaleX:1.03,rotation:-5.8,x:147.8,y:279.1},0).wait(1).to({rotation:-6.4,x:147.7,y:278.8},0).wait(1).to({scaleX:1.03,rotation:-7,x:147.8,y:278.6},0).wait(1).to({scaleX:1.03,rotation:-7.6,x:147.7,y:278.3},0).wait(1).to({scaleX:1.03,rotation:-8.2,y:278.1},0).wait(1).to({rotation:-8.8,x:147.6,y:277.8},0).wait(1).to({scaleX:1.03,rotation:-9.5,y:277.5},0).wait(1).to({scaleX:1.04,rotation:-10.1,y:277.2},0).wait(1).to({rotation:-10.7,x:147.5,y:277},0).wait(1).to({scaleX:1.04,rotation:-11.3,y:276.7},0).wait(1).to({scaleX:1.04,rotation:-11.9,x:147.4,y:276.4},0).wait(1).to({scaleX:1.04,rotation:-12.6,y:276.2},0).wait(1).to({rotation:-13.2,y:275.9},0).wait(1).to({scaleX:1.04,rotation:-13.8,y:275.6},0).wait(1).to({scaleX:1.04,rotation:-14.4,x:147.3,y:275.4},0).wait(1).to({scaleX:1.04,rotation:-15,y:275.1},0).wait(1).to({rotation:-14.6,y:275.3},0).wait(1).to({scaleX:1.04,rotation:-14.1,x:147.4,y:275.6},0).wait(1).to({scaleX:1.04,rotation:-13.7,y:275.7},0).wait(1).to({rotation:-13.2,y:276},0).wait(1).to({scaleX:1.05,rotation:-12.8,y:276.2},0).wait(1).to({scaleX:1.05,rotation:-12.3,y:276.4},0).wait(1).to({scaleX:1.05,rotation:-11.9,x:147.5,y:276.6},0).wait(1).to({rotation:-11.4,y:276.9},0).wait(1).to({scaleX:1.05,rotation:-10.9,y:277.1},0).wait(1).to({scaleX:1.05,rotation:-10.5,y:277.3},0).wait(1).to({scaleX:1.05,rotation:-10,y:277.5},0).wait(1).to({rotation:-9.6,x:147.6,y:277.7},0).wait(1).to({scaleX:1.05,rotation:-9.1,y:277.9},0).wait(1).to({scaleX:1.05,rotation:-8.7,y:278.1},0).wait(1).to({rotation:-8.2,y:278.4},0).wait(1).to({scaleX:1.05,rotation:-7.7,x:147.7,y:278.6},0).wait(1).to({scaleX:1.05,rotation:-7.3,y:278.8},0).wait(1).to({scaleX:1.06,rotation:-6.8,x:147.8,y:279},0).wait(1).to({rotation:-6.4,x:147.7,y:279.2},0).wait(1).to({scaleX:1.06,rotation:-5.9,x:147.8,y:279.4},0).wait(1).to({scaleX:1.06,rotation:-5.5,y:279.7},0).wait(1).to({scaleX:1.06,rotation:-5,y:279.9},0).wait(1).to({rotation:-4.6,x:147.9,y:280.1},0).wait(1).to({scaleX:1.06,rotation:-4.1,y:280.3},0).wait(1).to({scaleX:1.06,rotation:-3.6,y:280.5},0).wait(1).to({rotation:-3.2,y:280.8},0).wait(1).to({scaleX:1.06,rotation:-2.7,x:148,y:281},0).wait(1).to({scaleX:1.06,rotation:-2.3,x:147.9,y:281.2},0).wait(1).to({scaleX:1.06,rotation:-1.8,x:148,y:281.4},0).wait(1).to({rotation:-1.4,y:281.7},0).wait(1).to({scaleX:1.06,rotation:-0.9,x:148.1,y:281.9},0).wait(1).to({scaleX:1.07,rotation:-0.5,y:282.1},0).wait(1).to({scaleX:1.07,rotation:0,y:282.3},0).wait(1).to({x:148.2},0).wait(1).to({scaleX:1.07,x:148.4,y:282.2},0).wait(1).to({scaleX:1.07,x:148.5},0).wait(1).to({x:148.6,y:282.1},0).wait(1).to({scaleX:1.07,x:148.8},0).wait(1).to({scaleX:1.07,x:148.9,y:282},0).wait(1).to({scaleX:1.07,x:149},0).wait(1).to({x:149.2,y:281.9},0).wait(1).to({scaleX:1.07,x:149.3},0).wait(1).to({scaleX:1.07,x:149.4},0).wait(1).to({scaleX:1.07,x:149.6,y:281.8},0).wait(1).to({x:149.7},0).wait(1).to({scaleX:1.08,x:149.8,y:281.7},0).wait(1).to({scaleX:1.08,x:150},0).wait(1).to({scaleX:1.08,x:150.1,y:281.6},0).wait(1).to({x:150.2},0).wait(1).to({scaleX:1.08,x:150.4,y:281.5},0).wait(1).to({scaleX:1.08,x:150.5},0).wait(1).to({scaleX:1.07},0).wait(1).to({scaleX:1.05},0).wait(1).to({scaleX:1.04},0).wait(1).to({scaleX:1.03},0).wait(1).to({scaleX:1.01},0).wait(1).to({scaleX:1},0).wait(1));

	// Penicl
	this.instance_18 = new lib.Symbol23();
	this.instance_18.parent = this;
	this.instance_18.setTransform(182,274.5,1,1,0,0,0,20,19.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(50).to({_off:false},0).wait(1).to({rotation:3,x:181},0).wait(1).to({rotation:6,x:180.1},0).wait(1).to({rotation:9,x:179.1},0).wait(1).to({rotation:12,x:178.2},0).wait(1).to({rotation:15,x:177.2},0).wait(1).to({rotation:17.1,x:176.8,y:275.7},0).wait(1).to({rotation:19.3,x:176.4,y:276.9},0).wait(1).to({rotation:21.4,x:176,y:278.1},0).wait(1).to({rotation:23.6,x:175.6,y:279.3},0).wait(1).to({rotation:25.7,x:175.2,y:280.5},0).wait(1).to({rotation:27.8,x:174.8,y:281.7},0).wait(1).to({rotation:30,x:174.4,y:282.9},0).wait(1).to({rotation:32.1,x:174.1,y:284.1},0).wait(1).to({rotation:34.2,x:173.7,y:285.3},0).wait(1).to({rotation:36.4,x:173.3,y:286.5},0).wait(1).to({rotation:38.5,x:172.8,y:287.7},0).wait(1).to({rotation:40.7,x:172.4,y:288.9},0).wait(1).to({rotation:42.8,x:172,y:290.1},0).wait(1).to({rotation:44.9,x:171.7,y:291.3},0).wait(1).to({rotation:41.7,x:172,y:290.1},0).wait(1).to({rotation:38.5,x:172.5,y:288.9},0).wait(1).to({rotation:35.3,x:172.8,y:287.7},0).wait(1).to({rotation:32.1,x:173.3,y:286.5},0).wait(1).to({rotation:28.9,x:173.7,y:285.3},0).wait(1).to({rotation:25.7,x:174,y:284.1},0).wait(1).to({rotation:22.5,x:174.5,y:282.9},0).wait(1).to({rotation:19.3,x:174.8,y:281.7},0).wait(1).to({rotation:16.1,x:175.2,y:280.5},0).wait(1).to({rotation:12.8,x:175.6,y:279.3},0).wait(1).to({rotation:9.6,x:176,y:278.1},0).wait(1).to({rotation:6.4,x:176.4,y:276.9},0).wait(1).to({rotation:3.2,x:176.8,y:275.7},0).wait(1).to({rotation:0,x:177.2,y:274.5},0).wait(1).to({rotation:1.2,x:176.9,y:274.1},0).wait(1).to({rotation:2.5,x:176.6,y:273.6},0).wait(1).to({rotation:3.7,x:176.3,y:273.1},0).wait(1).to({rotation:5,x:176,y:272.7},0).wait(1).to({rotation:6.2,x:175.7,y:272.2},0).wait(1).to({rotation:7.5,x:175.4,y:271.7},0).wait(1).to({rotation:8.7,x:175.1,y:271.2},0).wait(1).to({rotation:10,x:174.8,y:270.7},0).wait(1).to({rotation:11.2,x:174.5,y:270.3},0).wait(1).to({rotation:12.5,x:174.2,y:269.8},0).wait(1).to({rotation:13.7,x:173.9,y:269.4},0).wait(1).to({rotation:15,x:173.6,y:268.9},0).wait(1).to({rotation:16.2,x:173.3,y:268.5},0).wait(1).to({rotation:17.4,x:173,y:268},0).wait(1).to({rotation:18.7,x:172.7,y:267.5},0).wait(1).to({rotation:19.9,x:172.4,y:267},0).wait(1).to({rotation:21.2,x:172.1,y:266.6},0).wait(1).to({rotation:22.4,x:171.8,y:266.1},0).wait(1).to({rotation:23.7,x:171.5,y:265.6},0).wait(1).to({rotation:24.9,x:171.2,y:265.2},0).wait(1).to({rotation:26.2,x:170.9,y:264.7},0).wait(1).to({rotation:27.4,x:170.6,y:264.2},0).wait(1).to({rotation:28.7,x:170.3,y:263.8},0).wait(1).to({rotation:29.9,x:170,y:263.3},0).wait(1).to({rotation:28.5,x:170.1,y:263.7},0).wait(1).to({rotation:27.2,x:170.3,y:264},0).wait(1).to({rotation:25.8,x:170.4,y:264.3},0).wait(1).to({rotation:24.4,x:170.6,y:264.7},0).wait(1).to({rotation:23.1,x:170.7,y:265},0).wait(1).to({rotation:21.7,x:170.9,y:265.3},0).wait(1).to({rotation:20.4,x:171,y:265.7},0).wait(1).to({rotation:19,x:171.1,y:266},0).wait(1).to({rotation:17.6,x:171.3,y:266.4},0).wait(1).to({rotation:16.3,x:171.5,y:266.7},0).wait(1).to({rotation:14.9,x:171.6,y:267},0).wait(1).to({rotation:13.5,x:171.8,y:267.4},0).wait(1).to({rotation:12.2,x:171.9,y:267.7},0).wait(1).to({rotation:10.8,x:172,y:268},0).wait(1).to({rotation:9.4,x:172.2,y:268.4},0).wait(1).to({rotation:8.1,x:172.3,y:268.7},0).wait(1).to({rotation:6.7,x:172.4,y:269.1},0).wait(1).to({rotation:5.4,x:172.6,y:269.4},0).wait(1).to({rotation:4,x:172.8,y:269.8},0).wait(1).to({rotation:2.6,x:172.9,y:270.1},0).wait(1).to({rotation:1.3,x:173,y:270.4},0).wait(1).to({rotation:-0.1,x:173.2,y:270.8},0).wait(1).to({rotation:-1.5,x:173.4,y:271.1},0).wait(1).to({rotation:-2.8,x:173.5,y:271.5},0).wait(1).to({rotation:-4.2,x:173.6,y:271.8},0).wait(1).to({rotation:-5.6,x:173.8,y:272.1},0).wait(1).to({rotation:-6.9,x:173.9,y:272.5},0).wait(1).to({rotation:-8.3,x:174.1,y:272.8},0).wait(1).to({rotation:-9.6,x:174.2,y:273.1},0).wait(1).to({rotation:-11,x:174.4,y:273.5},0).wait(1).to({rotation:-12.4,x:174.5,y:273.8},0).wait(1).to({rotation:-13.7,x:174.7,y:274.2},0).wait(1).to({rotation:-15.1,x:174.8,y:274.5},0).wait(1).to({rotation:-13.5,x:175},0).wait(1).to({rotation:-11.9,x:175.1,y:274.4},0).wait(1).to({rotation:-10.3,x:175.3},0).wait(1).to({rotation:-8.8,x:175.4,y:274.3},0).wait(1).to({rotation:-7.2,x:175.7},0).wait(1).to({rotation:-5.6,x:175.8,y:274.2},0).wait(1).to({rotation:-4,x:176},0).wait(1).to({rotation:-2.4,x:176.2},0).wait(1).to({rotation:-0.9,x:176.3,y:274.1},0).wait(1).to({rotation:0.7,x:176.5},0).wait(1).to({rotation:2.3,x:176.7,y:274},0).wait(1).to({rotation:3.9,x:176.8},0).wait(1).to({rotation:5.5,x:177,y:273.9},0).wait(1).to({rotation:7.1,x:177.2},0).wait(1).to({rotation:8.6,x:177.3},0).wait(1).to({rotation:10.2,x:177.5,y:273.8},0).wait(1).to({rotation:11.8,x:177.7},0).wait(1).to({rotation:13.4,x:177.8,y:273.7},0).wait(1).to({rotation:15,x:178},0).wait(1).to({rotation:12,x:178.8,y:273.9},0).wait(1).to({rotation:9,x:179.6,y:274},0).wait(1).to({rotation:6,x:180.4,y:274.2},0).wait(1).to({rotation:3,x:181.2,y:274.3},0).wait(1).to({rotation:0,x:182,y:274.5},0).wait(1));

	// Left-Arm
	this.instance_19 = new lib.Symbol25();
	this.instance_19.parent = this;
	this.instance_19.setTransform(134,237.5,1,1,0,0,0,24,27.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(50).to({_off:false},0).wait(1).to({rotation:-0.3},0).wait(1).to({scaleY:1,rotation:-0.7,x:133.9},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.4},0).wait(1).to({scaleY:1,rotation:-1.7},0).wait(1).to({rotation:-2},0).wait(1).to({rotation:-2.4},0).wait(1).to({scaleY:1,rotation:-2.7,x:133.8},0).wait(1).to({rotation:-3},0).wait(1).to({scaleY:1,rotation:-3.4,x:133.7},0).wait(1).to({rotation:-3.7,x:133.8},0).wait(1).to({rotation:-4.1,x:133.7},0).wait(1).to({scaleY:1,rotation:-4.4},0).wait(1).to({rotation:-4.7,x:133.6},0).wait(1).to({rotation:-5.1},0).wait(1).to({scaleY:0.99,rotation:-5.4},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-6.1},0).wait(1).to({scaleY:0.99,rotation:-6.4,x:133.5},0).wait(1).to({rotation:-6.8},0).wait(1).to({rotation:-7.1},0).wait(1).to({scaleY:0.99,rotation:-7.4},0).wait(1).to({rotation:-7.8,x:133.4},0).wait(1).to({scaleY:0.99,rotation:-8.1},0).wait(1).to({rotation:-8.5},0).wait(1).to({rotation:-8.4,y:237.6},0).wait(1).to({scaleY:0.99,x:133.5,y:237.9},0).wait(1).to({y:238},0).wait(1).to({y:238.1},0).wait(1).to({scaleY:0.99,x:133.6,y:238.3},0).wait(1).to({x:133.5,y:238.5},0).wait(1).to({x:133.6,y:238.7},0).wait(1).to({scaleY:0.99,y:238.8},0).wait(1).to({y:239},0).wait(1).to({y:239.1},0).wait(1).to({scaleY:0.99,rotation:-8.3,x:133.7,y:239.3},0).wait(1).to({y:239.5},0).wait(1).to({y:239.6},0).wait(1).to({scaleY:0.99,y:239.8},0).wait(1).to({y:240},0).wait(1).to({scaleY:0.99,x:133.8,y:240.1},0).wait(1).to({y:240.3},0).wait(1).to({rotation:-8.2},0).wait(1).to({rotation:-8.1,y:240.4},0).wait(1).to({scaleY:0.99,rotation:-8,x:133.7},0).wait(1).to({rotation:-7.9,y:240.3},0).wait(1).to({rotation:-7.8},0).wait(1).to({rotation:-7.6,y:240.4},0).wait(1).to({scaleY:0.99,rotation:-7.5},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-7.3},0).wait(1).to({rotation:-7.2,y:240.5},0).wait(1).to({rotation:-7.1,x:133.6},0).wait(1).to({scaleY:0.99,rotation:-7},0).wait(1).to({rotation:-6.9,y:240.4},0).wait(1).to({rotation:-6.8,y:240.5},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-6.6},0).wait(1).to({scaleY:0.99,rotation:-6.5},0).wait(1).to({rotation:-6.4},0).wait(1).to({rotation:-6.2,x:133.5,y:240.6},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-6},0).wait(1).to({scaleY:0.99,rotation:-5.9},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.5},0).wait(1).to({scaleY:0.99,rotation:-5.4},0).wait(1).to({rotation:-5.3,x:133.4,y:240.7},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-5.1},0).wait(1).to({scaleY:0.99,rotation:-5},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-4.6,x:133.3},0).wait(1).to({rotation:-4.5},0).wait(1).to({scaleY:0.99,rotation:-4.4},0).wait(1).to({rotation:-4.3,y:240.8},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4},0).wait(1).to({scaleY:0.99,rotation:-3.9},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-3.7,y:240.9},0).wait(1).to({rotation:-3.6,x:133.2},0).wait(1).to({rotation:-3.4},0).wait(1).to({scaleY:1,rotation:-3.3},0).wait(1).to({rotation:-3.2},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-3,y:241},0).wait(1).to({rotation:-2.9},0).wait(1).to({scaleY:1,rotation:-2.8,x:133.1},0).wait(1).to({rotation:-2.7,y:240.9},0).wait(1).to({rotation:-2.6,y:241},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.4},0).wait(1).to({scaleY:1,rotation:-2.3},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2,y:241.1},0).wait(1).to({rotation:-1.9},0).wait(1).to({scaleY:1,rotation:-1.8,x:133},0).wait(1).to({rotation:-1.7},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.5,y:240.8},0).wait(1).to({rotation:-1.3,y:240.4},0).wait(1).to({scaleY:1,rotation:-1.1,y:240},0).wait(1).to({rotation:-1,y:239.7},0).wait(1).to({rotation:-0.8,y:239.3},0).wait(1).to({rotation:-0.6,y:239},0).wait(1).to({rotation:-0.5,y:238.6},0).wait(1).to({scaleY:1,rotation:-0.3,y:238.2},0).wait(1).to({rotation:-0.2,y:237.9},0).wait(1).to({rotation:0,y:237.5},0).wait(1));

	// Drawing Guy
	this.instance_20 = new lib.Symbol17();
	this.instance_20.parent = this;
	this.instance_20.setTransform(86,254,1,1,0,0,0,81,115);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.instance_21 = new lib.flash0ai_20();
	this.instance_21.parent = this;
	this.instance_21.setTransform(40,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},27).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(27).to({_off:false},0).wait(1).to({x:88.9,y:254.1,alpha:0.083},0).wait(1).to({x:91.8,y:254.2,alpha:0.167},0).wait(1).to({x:94.8,y:254.3,alpha:0.25},0).wait(1).to({x:97.7,y:254.4,alpha:0.333},0).wait(1).to({x:100.6,y:254.5,alpha:0.417},0).wait(1).to({x:103.5,y:254.6,alpha:0.5},0).wait(1).to({x:106.4,y:254.7,alpha:0.583},0).wait(1).to({x:109.4,y:254.9,alpha:0.667},0).wait(1).to({x:112.3,y:255,alpha:0.75},0).wait(1).to({x:115.2,y:255.1,alpha:0.833},0).wait(1).to({x:118.1,y:255.2,alpha:0.917},0).wait(1).to({x:121.1,y:255.3,alpha:1},0).wait(10).to({_off:true},1).wait(115));

	// Left Arm
	this.instance_22 = new lib.Symbol26();
	this.instance_22.parent = this;
	this.instance_22.setTransform(384.5,323,1,1,0,0,0,28.5,24);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(50).to({_off:false},0).wait(1).to({rotation:-0.6,y:323.2},0).wait(1).to({rotation:-1.2,x:384.6,y:323.4},0).wait(1).to({rotation:-1.8,y:323.6},0).wait(1).to({rotation:-2.4,y:323.8},0).wait(1).to({rotation:-3,x:384.7,y:324},0).wait(1).to({rotation:-3.6,y:324.2},0).wait(1).to({rotation:-4.2,y:324.5},0).wait(1).to({rotation:-4.8,x:384.8,y:324.6},0).wait(1).to({rotation:-5.4,y:324.9},0).wait(1).to({rotation:-6,y:325},0).wait(1).to({rotation:-6.6,x:384.9,y:325.3},0).wait(1).to({rotation:-7.2,y:325.5},0).wait(1).to({rotation:-7.8,y:325.7},0).wait(1).to({rotation:-8.4,x:385,y:325.9},0).wait(1).to({rotation:-9,y:326.1},0).wait(1).to({rotation:-9.6,y:326.3},0).wait(1).to({rotation:-10.2,x:385.1,y:326.5},0).wait(1).to({rotation:-10.8,y:326.7},0).wait(1).to({rotation:-11.4,x:385.2,y:327},0).wait(1).to({rotation:-12,y:327.2},0).wait(1).to({rotation:-12.6,y:327.4},0).wait(1).to({rotation:-13.2,x:385.3,y:327.6},0).wait(1).to({rotation:-13.8,y:327.8},0).wait(1).to({rotation:-14.4,y:328},0).wait(1).to({rotation:-15,x:385.4,y:328.2},0).wait(1).to({rotation:-15.2,x:385.2,y:328.3},0).wait(1).to({rotation:-15.5,x:385.1,y:328.5},0).wait(1).to({rotation:-15.7,x:385,y:328.7},0).wait(1).to({rotation:-15.9,x:384.9,y:328.9},0).wait(1).to({rotation:-16.1,x:384.8,y:329},0).wait(1).to({rotation:-16.4,x:384.6,y:329.2},0).wait(1).to({rotation:-16.6,x:384.5,y:329.3},0).wait(1).to({rotation:-16.8,x:384.4,y:329.5},0).wait(1).to({rotation:-17,x:384.3,y:329.6},0).wait(1).to({rotation:-17.3,x:384.2,y:329.8},0).wait(1).to({rotation:-17.5,x:384.1,y:330},0).wait(1).to({rotation:-15.5,x:384.3,y:329.3},0).wait(1).to({rotation:-13.5,x:384.6,y:328.6},0).wait(1).to({rotation:-11.5,x:384.8,y:327.9},0).wait(1).to({rotation:-9.5,x:385,y:327.2},0).wait(1).to({rotation:-7.5,x:385.3,y:326.6},0).wait(1).to({rotation:-5.5,x:385.5,y:325.9},0).wait(1).to({rotation:-3.5,x:385.8,y:325.2},0).wait(1).to({rotation:-1.5,x:386.1,y:324.5},0).wait(1).to({rotation:0.5,x:386.3,y:323.9},0).wait(1).to({rotation:2.5,x:386.5,y:323.2},0).wait(1).to({rotation:4.5,x:386.7,y:322.6},0).wait(1).to({rotation:6.5,x:387,y:321.8},0).wait(1).to({rotation:8.5,x:387.3,y:321.2},0).wait(1).to({rotation:10.5,x:387.5,y:320.5},0).wait(1).to({rotation:12.5,x:387.8,y:319.8},0).wait(1).to({rotation:14.5,x:388,y:319.2},0).wait(1).to({rotation:13.5,x:387.8,y:319.4},0).wait(1).to({rotation:12.4,x:387.7,y:319.7},0).wait(1).to({rotation:11.4,x:387.5,y:319.9},0).wait(1).to({rotation:10.4,x:387.3,y:320.1},0).wait(1).to({rotation:9.4,x:387.1,y:320.4},0).wait(1).to({rotation:8.4,x:386.9,y:320.7},0).wait(1).to({rotation:7.3,x:386.7,y:320.9},0).wait(1).to({rotation:6.3,x:386.5,y:321.2},0).wait(1).to({rotation:5.3,x:386.3,y:321.4},0).wait(1).to({rotation:4.3,x:386.1,y:321.7},0).wait(1).to({rotation:3.3,x:385.9,y:321.9},0).wait(1).to({rotation:2.2,x:385.7,y:322.2},0).wait(1).to({rotation:1.2,x:385.6,y:322.4},0).wait(1).to({rotation:0.2,x:385.3,y:322.7},0).wait(1).to({rotation:-0.8,x:385.2,y:323},0).wait(1).to({rotation:-1.8,x:385,y:323.2},0).wait(1).to({rotation:-2.9,x:384.8,y:323.5},0).wait(1).to({rotation:-3.9,x:384.6,y:323.7},0).wait(1).to({rotation:-4.9,x:384.4,y:323.9},0).wait(1).to({rotation:-5.9,x:384.2,y:324.2},0).wait(1).to({rotation:-6.9,x:384,y:324.5},0).wait(1).to({rotation:-8,x:383.8,y:324.7},0).wait(1).to({rotation:-7.6,x:383.9},0).wait(1).to({rotation:-7.2},0).wait(1).to({rotation:-6.8,x:384},0).wait(1).to({rotation:-6.4,y:324.6},0).wait(1).to({rotation:-6,y:324.5},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.2,x:384.1},0).wait(1).to({rotation:-4.9,y:324.4},0).wait(1).to({rotation:-4.5},0).wait(1).to({rotation:-4.1,x:384.2,y:324.3},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-3.3,x:384.3,y:324.2},0).wait(1).to({rotation:-2.9,x:384.2},0).wait(1).to({rotation:-2.5,x:384.3},0).wait(1).to({rotation:-2.1,x:384.4,y:324.1},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-1.4,y:324},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-0.6,x:384.5,y:323.9},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:0.2},0).wait(1).to({x:384.6,y:323.8},0).wait(3).to({y:323.7},0).wait(1).to({rotation:0.1},0).wait(1).to({x:384.5,y:323.6},0).wait(3).to({y:323.5},0).wait(4).to({y:323.4},0).wait(3).to({y:323.3},0).wait(3).to({rotation:0,y:323.2},0).wait(1));

	// Laptop Guy
	this.instance_23 = new lib.Symbol16();
	this.instance_23.parent = this;
	this.instance_23.setTransform(476.3,292.6,1,1,0,0,0,64.5,121.5);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.instance_24 = new lib.flash0ai_16();
	this.instance_24.parent = this;
	this.instance_24.setTransform(383,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},27).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(27).to({_off:false},0).wait(1).to({x:473.7,alpha:0.048},0).wait(1).to({x:471,y:292.5,alpha:0.095},0).wait(1).to({x:468.4,alpha:0.143},0).wait(1).to({x:465.7,alpha:0.19},0).wait(1).to({x:463.1,y:292.4,alpha:0.238},0).wait(1).to({x:460.5,alpha:0.286},0).wait(1).to({x:457.8,alpha:0.333},0).wait(1).to({x:455.2,y:292.3,alpha:0.381},0).wait(1).to({x:452.6,alpha:0.429},0).wait(1).to({x:449.9,alpha:0.476},0).wait(1).to({x:447.3,y:292.2,alpha:0.524},0).wait(1).to({x:444.6,alpha:0.571},0).wait(1).to({x:442,alpha:0.619},0).wait(1).to({x:439.4,y:292.1,alpha:0.667},0).wait(1).to({x:436.7,alpha:0.714},0).wait(1).to({x:434.1,alpha:0.762},0).wait(1).to({x:431.5,y:292,alpha:0.81},0).wait(1).to({x:428.8,alpha:0.857},0).wait(1).to({x:426.2,alpha:0.905},0).wait(1).to({x:423.5,y:291.9,alpha:0.952},0).wait(1).to({x:420.9,alpha:1},0).wait(1).to({_off:true},1).wait(115));

	// Right Arm
	this.instance_25 = new lib.Symbol27();
	this.instance_25.parent = this;
	this.instance_25.setTransform(418.6,258.3,1,1,0,0,0,49.5,12.3);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(50).to({_off:false},0).wait(1).to({regX:25,regY:16,scaleX:1.01,scaleY:0.99,rotation:-1.1,x:393.7,y:262.4},0).wait(1).to({scaleX:1.03,scaleY:0.99,rotation:-2.1,x:393.3,y:262.7},0).wait(1).to({scaleX:1.04,scaleY:0.98,rotation:-3.2,x:392.9,y:263.1},0).wait(1).to({scaleX:1.06,scaleY:0.97,rotation:-4.3,x:392.4,y:263.4},0).wait(1).to({scaleX:1.07,scaleY:0.97,rotation:-5.4,x:392.1,y:263.9},0).wait(1).to({scaleX:1.09,scaleY:0.96,rotation:-6.4,x:391.6,y:264.3},0).wait(1).to({scaleX:1.1,scaleY:0.95,rotation:-7.5,x:391.3,y:264.7},0).wait(1).to({scaleX:1.12,scaleY:0.95,rotation:-8.6,x:390.9,y:265.2},0).wait(1).to({scaleX:1.13,scaleY:0.94,rotation:-9.7,x:390.5,y:265.6},0).wait(1).to({scaleX:1.14,scaleY:0.93,rotation:-10.7,x:390.2,y:266.1},0).wait(1).to({scaleX:1.16,scaleY:0.93,rotation:-11.8,x:389.9,y:266.6},0).wait(1).to({scaleX:1.15,scaleY:0.93,rotation:-12.9,y:266.9},0).wait(1).to({scaleX:1.15,scaleY:0.93,rotation:-14,x:390.1,y:267.4},0).wait(1).to({scaleX:1.15,scaleY:0.93,rotation:-15,x:390.2,y:267.8},0).wait(1).to({scaleX:1.14,scaleY:0.94,rotation:-16.1,x:390.4,y:268.2},0).wait(1).to({scaleX:1.14,scaleY:0.94,rotation:-17.2,x:390.6,y:268.6},0).wait(1).to({scaleX:1.13,scaleY:0.94,rotation:-18.3,x:390.7,y:269},0).wait(1).to({scaleX:1.13,scaleY:0.94,rotation:-19.3,x:390.9,y:269.4},0).wait(1).to({scaleX:1.13,scaleY:0.95,rotation:-20.4,x:391,y:269.7},0).wait(1).to({scaleX:1.12,scaleY:0.95,rotation:-21.5,x:391.2,y:270.1},0).wait(1).to({scaleX:1.12,scaleY:0.95,rotation:-22.5,x:391.5,y:270.4},0).wait(1).to({scaleX:1.12,scaleY:0.95,rotation:-22.2,y:270.2},0).wait(1).to({scaleX:1.11,scaleY:0.96,rotation:-21.9,y:270.1},0).wait(1).to({scaleX:1.11,scaleY:0.96,rotation:-21.5,x:391.6,y:269.9},0).wait(1).to({scaleX:1.1,scaleY:0.96,rotation:-21.2,y:269.8},0).wait(1).to({scaleX:1.1,scaleY:0.96,rotation:-20.8,y:269.7},0).wait(1).to({scaleX:1.1,scaleY:0.97,rotation:-20.5,x:391.7,y:269.5},0).wait(1).to({scaleX:1.09,scaleY:0.97,rotation:-20.1,x:391.8,y:269.3},0).wait(1).to({scaleX:1.09,scaleY:0.97,rotation:-19.8,y:269.2},0).wait(1).to({scaleX:1.08,scaleY:0.97,rotation:-19.5,x:391.9,y:269.1},0).wait(1).to({scaleX:1.08,scaleY:0.98,rotation:-19.1,y:268.9},0).wait(1).to({scaleX:1.08,scaleY:0.98,rotation:-18.8,x:392,y:268.8},0).wait(1).to({scaleX:1.07,scaleY:0.98,rotation:-18.4,y:268.6},0).wait(1).to({scaleX:1.07,scaleY:0.98,rotation:-18.1,x:392.1,y:268.4},0).wait(1).to({scaleX:1.06,scaleY:0.99,rotation:-17.7,y:268.3},0).wait(1).to({scaleX:1.06,scaleY:0.99,rotation:-17.4,x:392.2,y:268.2},0).wait(1).to({scaleX:1.06,scaleY:0.99,rotation:-17.1,x:392.3,y:268},0).wait(1).to({scaleX:1.05,scaleY:0.99,rotation:-16.7,y:267.9},0).wait(1).to({scaleX:1.05,scaleY:1,rotation:-16.4,x:392.4,y:267.7},0).wait(1).to({scaleX:1.04,scaleY:1,rotation:-16,y:267.6},0).wait(1).to({scaleX:1.04,scaleY:1,rotation:-15.7,x:392.5,y:267.4},0).wait(1).to({scaleX:1.04,scaleY:1,rotation:-15.3,y:267.3},0).wait(1).to({scaleX:1.03,scaleY:1.01,rotation:-15,x:392.6,y:267.1},0).wait(1).to({scaleX:1.04,rotation:-15.1,y:267.2},0).wait(1).to({scaleX:1.04,rotation:-15.3,y:267.3},0).wait(1).to({scaleX:1.05,rotation:-15.4,x:392.5,y:267.4},0).wait(1).to({scaleX:1.05,rotation:-15.5,x:392.4,y:267.5},0).wait(1).to({scaleX:1.05,rotation:-15.6,y:267.6},0).wait(1).to({scaleX:1.06,rotation:-15.8,x:392.3,y:267.7},0).wait(1).to({scaleX:1.06,rotation:-15.9,y:267.8},0).wait(1).to({scaleX:1.07,rotation:-16,y:267.9},0).wait(1).to({scaleX:1.07,rotation:-16.1,x:392.2,y:268},0).wait(1).to({scaleX:1.08,rotation:-16.3,y:268.1},0).wait(1).to({scaleX:1.08,rotation:-16.4,x:392.1,y:268.2},0).wait(1).to({scaleX:1.08,rotation:-16.5,y:268.3},0).wait(1).to({scaleX:1.09,rotation:-16.6,x:392,y:268.4},0).wait(1).to({scaleX:1.09,rotation:-16.8,y:268.5},0).wait(1).to({scaleX:1.1,rotation:-16.9,y:268.6},0).wait(1).to({scaleX:1.1,rotation:-17,x:391.9,y:268.7},0).wait(1).to({scaleX:1.1,rotation:-17.1,y:268.8},0).wait(1).to({scaleX:1.11,rotation:-17.3,x:391.8,y:268.9},0).wait(1).to({scaleX:1.11,rotation:-16.6,x:391.6,y:268.7},0).wait(1).to({scaleX:1.12,rotation:-15.9,x:391.4,y:268.4},0).wait(1).to({scaleX:1.12,rotation:-15.2,x:391.2,y:268.1},0).wait(1).to({scaleX:1.13,rotation:-14.5,x:391,y:267.9},0).wait(1).to({scaleX:1.13,rotation:-13.8,x:390.9,y:267.6},0).wait(1).to({scaleX:1.13,rotation:-13.1,x:390.6,y:267.3},0).wait(1).to({scaleX:1.14,rotation:-12.4,x:390.4,y:267.1},0).wait(1).to({scaleX:1.14,rotation:-11.7,x:390.3,y:266.8},0).wait(1).to({scaleX:1.15,rotation:-11.1,x:390.1,y:266.5},0).wait(1).to({scaleX:1.15,rotation:-10.4,x:389.9,y:266.2},0).wait(1).to({scaleX:1.16,rotation:-9.7,x:389.8,y:265.9},0).wait(1).to({scaleX:1.16,rotation:-9,x:389.6,y:265.6},0).wait(1).to({scaleX:1.16,rotation:-8.3,y:265.3},0).wait(1).to({scaleX:1.15,scaleY:1.01,rotation:-7.6,x:389.7,y:264.9},0).wait(1).to({scaleX:1.15,rotation:-6.9,y:264.6},0).wait(1).to({scaleX:1.15,rotation:-6.2,y:264.3},0).wait(1).to({scaleX:1.14,rotation:-5.5,y:263.9},0).wait(1).to({scaleX:1.14,rotation:-4.8,y:263.7},0).wait(1).to({scaleX:1.14,rotation:-4.1,x:389.8,y:263.3},0).wait(1).to({scaleX:1.13,rotation:-3.5,y:263},0).wait(1).to({scaleX:1.13,scaleY:1,rotation:-2.8,x:389.9,y:262.7},0).wait(1).to({scaleX:1.13,rotation:-2.1,x:390,y:262.4},0).wait(1).to({scaleX:1.12,rotation:-1.4,y:262},0).wait(1).to({scaleX:1.12,rotation:-0.7,x:390.1,y:261.7},0).wait(1).to({scaleX:1.12,rotation:0,y:261.4},0).wait(1).to({scaleX:1.11,x:390.3},0).wait(1).to({scaleX:1.11,x:390.4},0).wait(1).to({scaleX:1.11,scaleY:1,x:390.5},0).wait(1).to({scaleX:1.1,x:390.6,y:261.5},0).wait(1).to({scaleX:1.1,x:390.7},0).wait(1).to({scaleX:1.1,x:390.8},0).wait(1).to({scaleX:1.09,x:390.9},0).wait(1).to({scaleX:1.09,x:391},0).wait(1).to({scaleX:1.09,x:391.1},0).wait(1).to({scaleX:1.08,scaleY:1,x:391.3,y:261.6},0).wait(1).to({scaleX:1.08,x:391.4},0).wait(1).to({scaleX:1.08,x:391.5},0).wait(1).to({scaleX:1.07,x:391.6},0).wait(1).to({scaleX:1.07,x:391.7},0).wait(1).to({scaleX:1.07,x:391.8},0).wait(1).to({scaleX:1.06,x:392,y:261.7},0).wait(1).to({scaleX:1.06,scaleY:1,x:392.1},0).wait(1).to({scaleX:1.06,x:392.2},0).wait(1).to({scaleX:1.05,x:392.3},0).wait(1).to({scaleX:1.05,x:392.4},0).wait(1).to({scaleX:1.05,x:392.5,y:261.8},0).wait(1).to({scaleX:1.04,x:392.6},0).wait(1).to({scaleX:1.04,x:392.7},0).wait(1).to({scaleX:1.04,x:392.8},0).wait(1).to({scaleX:1.03,scaleY:1,x:393},0).wait(1).to({scaleX:1.03,x:393.1},0).wait(1).to({scaleX:1.03,x:393.2},0).wait(1).to({scaleX:1.02,x:393.3},0).wait(1));

	// Chair
	this.instance_26 = new lib.Symbol21();
	this.instance_26.parent = this;
	this.instance_26.setTransform(393,92,1,1,0,0,0,36,44);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.instance_27 = new lib.flash0ai_22();
	this.instance_27.parent = this;
	this.instance_27.setTransform(348,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},36).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},116).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(36).to({_off:false},0).wait(1).to({x:392.2,alpha:0.091},0).wait(1).to({x:391.5,alpha:0.182},0).wait(1).to({x:390.7,alpha:0.273},0).wait(1).to({x:389.9,alpha:0.364},0).wait(1).to({x:389.2,alpha:0.455},0).wait(1).to({x:388.4,alpha:0.545},0).wait(1).to({x:387.7,alpha:0.636},0).wait(1).to({x:386.9,alpha:0.727},0).wait(1).to({x:386.1,alpha:0.818},0).wait(1).to({x:385.4,alpha:0.909},0).wait(1).to({x:384.6,alpha:1},0).to({_off:true},1).wait(117));

	// Sketchbook
	this.instance_28 = new lib.Symbol14();
	this.instance_28.parent = this;
	this.instance_28.setTransform(181.4,329.4,0.435,0.435,-0.3,0,0,38.9,33);
	this.instance_28.alpha = 0.109;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(7).to({_off:false},0).wait(1).to({regX:59.5,regY:42.5,scaleX:0.49,scaleY:0.49,rotation:0.3,x:192.4,y:328.4,alpha:0.209},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:1,x:194.4,y:323.4,alpha:0.308},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:1.6,x:196.3,y:318.4,alpha:0.407},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:2.2,x:198.3,y:313.4,alpha:0.506},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:2.9,x:200.2,y:308.5,alpha:0.604},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:3.5,x:202.1,y:303.6,alpha:0.703},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:4.2,x:204,y:298.6,alpha:0.802},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:4.8,x:205.9,y:293.7,alpha:0.901},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:5.5,x:207.8,y:288.9,alpha:1},0).wait(1).to({rotation:6.1,x:208.9,y:284.7},0).wait(1).to({rotation:6.8,x:210.2,y:280.5},0).wait(1).to({rotation:7.4,x:211.4,y:276.3},0).wait(1).to({rotation:8,x:212.5,y:272.1},0).wait(1).to({rotation:8.7,x:213.8,y:267.9},0).wait(1).to({rotation:6.4,x:212.6,y:275.5},0).wait(1).to({rotation:4.2,x:211.4,y:283},0).wait(1).to({rotation:1.9,x:210.1,y:290.5},0).wait(1).to({rotation:-0.3,x:208.8,y:297.9},0).wait(1).to({regX:54.6,regY:40.6,scaleX:0.95,scaleY:0.95,rotation:0.9,x:196,y:295.2},0).wait(6).to({rotation:0.9},0).wait(133));

	// Laptop
	this.instance_29 = new lib.Symbol13();
	this.instance_29.parent = this;
	this.instance_29.setTransform(313.8,293.8,0.594,0.594,14.8,0,0,46.5,28.7);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(7).to({_off:false},0).wait(1).to({regX:57.5,regY:49.5,scaleX:0.64,scaleY:0.64,rotation:13.3,x:319.2,y:303.1,alpha:0.111},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:11.7,x:321.6,y:298.9,alpha:0.222},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:10,x:323.9,y:294.5,alpha:0.333},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:8.3,x:326.4,y:290.2,alpha:0.444},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:6.7,x:329,y:285.8,alpha:0.556},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:5,x:331.6,y:281.3,alpha:0.667},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:3.3,x:334.2,y:276.8,alpha:0.778},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:1.7,x:336.9,y:272.3,alpha:0.889},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:0,x:339.6,y:267.7,alpha:1},0).wait(1).to({rotation:-1.2,x:338.3,y:262.6},0).wait(1).to({rotation:-2.3,x:337,y:257.4},0).wait(1).to({rotation:-3.5,x:335.7,y:252.2},0).wait(1).to({rotation:-4.6,x:334.3,y:247},0).wait(1).to({rotation:-5.8,x:333,y:241.9},0).wait(1).to({rotation:-6.9,x:331.7,y:236.7},0).wait(1).to({rotation:-3.8,x:333.5,y:239.6},0).wait(1).to({rotation:-0.6,x:335.2,y:242.5},0).wait(1).to({rotation:2.6,x:337,y:245.2},0).wait(1).to({rotation:5.8,x:338.7,y:247.9},0).wait(1).to({rotation:9,x:340.4,y:250.6},0).wait(1).to({rotation:7.2,x:340.2,y:255.7},0).wait(1).to({rotation:5.4,x:340.1,y:260.9},0).wait(1).to({rotation:3.6,x:340,y:266},0).wait(1).to({rotation:1.8,x:339.8,y:271.1},0).wait(1).to({rotation:0,x:339.6,y:276.2},0).wait(1).to({regX:48,regY:29.8,scaleX:1.03,scaleY:1.03,x:328.7,y:255.8},0).wait(132));

	// Pen 2
	this.instance_30 = new lib.Symbol12();
	this.instance_30.parent = this;
	this.instance_30.setTransform(208,239.8,0.389,0.389,3.8,0,0,6.2,5.1);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(7).to({_off:false},0).wait(1).to({regX:15.5,regY:10.5,scaleX:0.46,scaleY:0.46,rotation:4,x:212,y:240,alpha:0.111},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:212.6,y:237.8,alpha:0.222},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:213.2,y:235.7,alpha:0.333},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:213.8,y:233.5,alpha:0.444},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:214.4,y:231.4,alpha:0.556},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:214.9,y:229.2,alpha:0.667},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:215.5,y:227.1,alpha:0.778},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:216.1,y:224.9,alpha:0.889},0).wait(1).to({scaleX:1,scaleY:1,x:216.7,y:222.8,alpha:1},0).wait(1).to({rotation:7.7,x:216.6,y:218},0).wait(1).to({rotation:11.4,x:216.5,y:213.1},0).wait(1).to({rotation:15.1,x:216.3,y:208.2},0).wait(1).to({rotation:18.8,x:216.1,y:203.2},0).wait(1).to({rotation:17.2,x:215.9,y:206.3},0).wait(1).to({rotation:15.5,x:215.7,y:209.2},0).wait(1).to({rotation:13.9,x:215.5,y:212.2},0).wait(1).to({rotation:12.2,x:215.2,y:215.2},0).wait(1).to({rotation:10.6,x:215,y:218.2},0).wait(1).to({rotation:8.9,x:215.4,y:220.6},0).wait(1).to({rotation:7.3,x:215.9,y:223},0).wait(1).to({rotation:5.6,x:216.3,y:225.4},0).wait(1).to({rotation:4,x:216.7,y:227.8},0).wait(1).to({regX:7.1,regY:7,rotation:3.8,x:208.7,y:223.6},0).wait(135));

	// paper
	this.instance_31 = new lib.Symbol22();
	this.instance_31.parent = this;
	this.instance_31.setTransform(221,141.8,2.035,2.035,0,0,0,7.8,4.9);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(7).to({_off:false},0).wait(1).to({regX:8.1,regY:4.8,scaleX:2.26,scaleY:2.26,rotation:0.1,x:219.6,y:135.8,alpha:0.125},0).wait(1).to({scaleX:2.48,scaleY:2.48,x:217.5,y:129.9,alpha:0.25},0).wait(1).to({scaleX:2.71,scaleY:2.71,x:215.5,y:124.1,alpha:0.375},0).wait(1).to({scaleX:2.93,scaleY:2.93,x:213.4,y:118.3,alpha:0.5},0).wait(1).to({scaleX:3.16,scaleY:3.16,x:211.4,y:112.4,alpha:0.625},0).wait(1).to({scaleX:3.38,scaleY:3.38,x:209.3,y:106.6,alpha:0.75},0).wait(1).to({scaleX:3.61,scaleY:3.61,x:207.3,y:100.8,alpha:0.875},0).wait(1).to({scaleX:3.83,scaleY:3.83,x:205.2,y:95,alpha:1},0).wait(1).to({rotation:-4.9,y:87.9},0).wait(1).to({rotation:-9.9,x:205.1,y:80.8},0).wait(1).to({rotation:-15,y:73.7},0).wait(1).to({rotation:-16.1,x:204.8,y:76.8},0).wait(1).to({rotation:-17.2,x:204.4,y:80},0).wait(1).to({rotation:-18.3,x:204.1,y:83.2},0).wait(1).to({rotation:-19.4,x:203.8,y:86.4},0).wait(1).to({rotation:-20.5,x:203.5,y:89.6},0).wait(1).to({rotation:-21.6,x:203.1,y:92.8},0).wait(1).to({rotation:-17.2,x:203.6,y:95},0).wait(1).to({rotation:-12.9,x:204,y:97.2},0).wait(1).to({rotation:-8.5,x:204.5,y:99.5},0).wait(1).to({rotation:-4.2,x:204.9,y:101.8},0).wait(1).to({rotation:0.1,x:205.2,y:104},0).wait(1).to({rotation:0,x:204.8,y:104.6},0).wait(135));

	// Canister
	this.instance_32 = new lib.Symbol11("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(203.1,226.2,0.7,0.7,0,0,0,7.3,40);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(7).to({_off:false},0).wait(1).to({regX:7.5,regY:12,scaleX:0.74,scaleY:0.74,x:203.5,y:200.6,alpha:0.125},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:203.6,y:194.6,alpha:0.25},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:203.8,y:188.7,alpha:0.375},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:204,y:182.7,alpha:0.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:204.2,y:176.8,alpha:0.625},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:204.4,y:170.8,alpha:0.75},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:204.5,y:164.9,alpha:0.875},0).wait(1).to({scaleX:1,scaleY:1,x:204.7,y:158.9,alpha:1},0).wait(1).to({rotation:2.2,x:205.7,y:157.9},0).wait(1).to({rotation:4.3,x:206.7,y:156.8},0).wait(1).to({rotation:6.5,x:207.7,y:155.9},0).wait(1).to({rotation:8.7,x:208.6,y:155},0).wait(1).to({rotation:10.8,x:209.6,y:154.1},0).wait(1).to({rotation:13,x:210.6,y:153.3},0).wait(1).to({rotation:15.2,x:211.5,y:152.4},0).wait(1).to({rotation:13.7,x:210.7,y:154},0).wait(1).to({rotation:12.2,x:210,y:155.6},0).wait(1).to({rotation:10.7,x:209.2,y:157.2},0).wait(1).to({rotation:9.2,x:208.4,y:158.8},0).wait(1).to({rotation:7.7,x:207.6,y:160.4},0).wait(1).to({rotation:6.2,x:206.8,y:162.1},0).wait(1).to({rotation:2.2,x:205.2,y:163.8},0).wait(1).to({rotation:-1.8,x:203.5,y:165.6},0).wait(1).to({rotation:-5.7,x:201.9,y:167.5},0).wait(1).to({rotation:-4.6,x:202.5,y:167.4},0).wait(1).to({rotation:-3.4,x:203,y:167.3},0).wait(1).to({rotation:-2.3,x:203.6,y:167.1},0).wait(1).to({rotation:-1.1,x:204.2,y:167},0).wait(1).to({rotation:0,x:204.7,y:166.9},0).wait(1).to({regX:7.4,regY:40.1,x:204.6,y:194.6,mode:"independent"},0).wait(128));

	// Pen-1
	this.instance_33 = new lib.Symbol10("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(270.5,123.4,0.607,0.607);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(7).to({_off:false},0).wait(1).to({regX:14.5,regY:7,scaleX:0.66,scaleY:0.66,x:279.9,y:123.8,alpha:0.125},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:280.6,y:120,alpha:0.25},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:281.3,y:116.1,alpha:0.375},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:281.9,y:112.2,alpha:0.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:282.6,y:108.4,alpha:0.625},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-0.5,x:283.3,y:104.4,alpha:0.75},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-5,x:284.5,y:99.5,alpha:0.875},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.3,x:285.5,y:94.4,alpha:1},0).wait(1).to({rotation:-13.4,x:285.6,y:91.6},0).wait(1).to({rotation:-15,x:285.5,y:89.6},0).wait(1).to({rotation:-14.9,x:285.3,y:87.9},0).wait(1).to({x:285.1,y:86.3},0).wait(1).to({y:88.6},0).wait(1).to({rotation:-14.8,y:90.9},0).wait(1).to({rotation:-14.3,y:93.3},0).wait(1).to({rotation:-11.4,x:284.9,y:96.3},0).wait(1).to({rotation:-8.7,x:284.6,y:99.3},0).wait(1).to({rotation:-6.2,x:284.7,y:104.2},0).wait(1).to({rotation:-3.9,x:284.8,y:108.9},0).wait(1).to({rotation:-1.7,x:284.9,y:113.7},0).wait(1).to({rotation:0.2,x:285,y:118.4},0).wait(1).to({regX:6.2,regY:1.4,rotation:0,x:277.1,y:112.8},0).wait(16).to({startPosition:0},0).wait(113).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(1));

	// nobtebook
	this.instance_34 = new lib.Symbol9();
	this.instance_34.parent = this;
	this.instance_34.setTransform(323.1,228.6,0.613,0.613,0,0,0,22.7,14.1);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(7).to({_off:false},0).wait(1).to({regX:23,regY:14.5,scaleX:0.66,scaleY:0.66,x:325.4,y:222.9,alpha:0.125},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:327.5,y:217,alpha:0.25},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:329.5,y:211,alpha:0.375},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:331.4,y:205.1,alpha:0.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:333.3,y:199.2,alpha:0.625},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:334.9,y:193.3,alpha:0.75},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:187.4,alpha:0.875},0).wait(1).to({scaleX:1,scaleY:1,y:181.5,alpha:1},0).wait(1).to({rotation:5,y:178.6},0).wait(1).to({rotation:10,x:334.8,y:175.8},0).wait(1).to({rotation:15,y:172.9},0).wait(1).to({rotation:13.5,y:172.4},0).wait(1).to({rotation:12,y:172},0).wait(1).to({rotation:10.5,y:171.5},0).wait(1).to({rotation:9,y:170.9},0).wait(1).to({rotation:7.5,y:175.5},0).wait(1).to({rotation:6,x:334.9,y:179.9},0).wait(1).to({rotation:4.5,y:184.5},0).wait(1).to({rotation:3,y:189},0).wait(1).to({rotation:1.5,y:193.5},0).wait(1).to({rotation:0,y:198},0).wait(1).to({regX:22.8,regY:14.1,x:334.8,y:197.2},0).wait(136));

	// Shake
	this.instance_35 = new lib.Symbol7();
	this.instance_35.parent = this;
	this.instance_35.setTransform(274.6,238.2,0.794,0.752,0.5,0,0,4.5,38.2);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(7).to({_off:false},0).wait(1).to({regX:12,regY:28,scaleX:0.82,scaleY:0.78,rotation:0.6,x:280.9,y:223.1,alpha:0.125},0).wait(1).to({scaleX:0.85,scaleY:0.8,x:281.3,y:215.6,alpha:0.25},0).wait(1).to({scaleX:0.88,scaleY:0.83,x:281.5,y:208.2,alpha:0.375},0).wait(1).to({scaleX:0.9,scaleY:0.86,x:281.8,y:200.8,alpha:0.5},0).wait(1).to({scaleX:0.93,scaleY:0.88,x:282.1,y:193.3,alpha:0.625},0).wait(1).to({scaleX:0.96,scaleY:0.91,x:282.4,y:185.9,alpha:0.75},0).wait(1).to({scaleX:0.99,scaleY:0.93,x:282.7,y:178.4,alpha:0.875},0).wait(1).to({scaleX:1.01,scaleY:0.96,x:282.9,y:171,alpha:1},0).wait(1).to({rotation:-4.5,x:282,y:168.5},0).wait(1).to({rotation:-9.5,x:281,y:166.1},0).wait(1).to({rotation:-14.5,x:280,y:163.9},0).wait(1).to({rotation:-8.4,x:281.3,y:162.3},0).wait(1).to({rotation:-2.3,x:282.4,y:160.8},0).wait(1).to({rotation:3.7,x:283.4,y:159.5},0).wait(1).to({rotation:5.3,x:283.6,y:165.3},0).wait(1).to({rotation:6.8,x:283.9,y:171.3},0).wait(1).to({rotation:1.3,x:283,y:169.4},0).wait(1).to({rotation:-4.2,x:282,y:167.7},0).wait(1).to({rotation:-2.6,y:170.6},0).wait(1).to({rotation:-1,x:280.5,y:173.5},0).wait(1).to({rotation:0.6,x:278.8,y:176.4},0).wait(1).to({regX:12.2,regY:28.2,rotation:0.9,x:279},0).wait(136));

	// Table
	this.instance_36 = new lib.Symbol8();
	this.instance_36.parent = this;
	this.instance_36.setTransform(262.9,431.4,0.713,0.885,0,0,0,169.2,384.2);
	this.instance_36.alpha = 0.121;
	this.instance_36._off = true;

	this.instance_37 = new lib.flash0ai_34();
	this.instance_37.parent = this;
	this.instance_37.setTransform(92,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36}]},7).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},37).to({state:[{t:this.instance_37}]},112).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(7).to({_off:false},0).wait(1).to({regX:170,regY:192.5,scaleX:0.75,scaleY:0.9,x:263.5,y:256.5,alpha:0.246},0).wait(1).to({scaleX:0.8,scaleY:0.92,y:251.2,alpha:0.371},0).wait(1).to({scaleX:0.84,scaleY:0.93,x:263.6,y:245.9,alpha:0.497},0).wait(1).to({scaleX:0.88,scaleY:0.95,y:240.6,alpha:0.623},0).wait(1).to({scaleX:0.92,scaleY:0.97,y:235.3,alpha:0.749},0).wait(1).to({scaleX:0.96,scaleY:0.98,y:230,alpha:0.874},0).wait(1).to({scaleX:1,scaleY:1,x:263.7,y:224.8,alpha:1},0).to({_off:true},1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '7D1E80A734B44C329A7374B6FC4E4B6B',
	width: 530,
	height: 440,
	fps: 24,
	color: "transparent",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./images/animations/table.webp", id:"Mrw_Table_anim_VER2_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7D1E80A734B44C329A7374B6FC4E4B6B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;