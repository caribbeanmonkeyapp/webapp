gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSpriteObjects3= [];
gdjs.menuCode.GDblancoObjects1= [];
gdjs.menuCode.GDblancoObjects2= [];
gdjs.menuCode.GDblancoObjects3= [];
gdjs.menuCode.GDgameObjects1= [];
gdjs.menuCode.GDgameObjects2= [];
gdjs.menuCode.GDgameObjects3= [];
gdjs.menuCode.GDcoctailObjects1= [];
gdjs.menuCode.GDcoctailObjects2= [];
gdjs.menuCode.GDcoctailObjects3= [];
gdjs.menuCode.GDcoctail2Objects1= [];
gdjs.menuCode.GDcoctail2Objects2= [];
gdjs.menuCode.GDcoctail2Objects3= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDNewSprite3Objects3= [];
gdjs.menuCode.GDgame2Objects1= [];
gdjs.menuCode.GDgame2Objects2= [];
gdjs.menuCode.GDgame2Objects3= [];
gdjs.menuCode.GDgame3Objects1= [];
gdjs.menuCode.GDgame3Objects2= [];
gdjs.menuCode.GDgame3Objects3= [];
gdjs.menuCode.GDgame4Objects1= [];
gdjs.menuCode.GDgame4Objects2= [];
gdjs.menuCode.GDgame4Objects3= [];
gdjs.menuCode.GDgame5Objects1= [];
gdjs.menuCode.GDgame5Objects2= [];
gdjs.menuCode.GDgame5Objects3= [];
gdjs.menuCode.GDPlayButtonObjects1= [];
gdjs.menuCode.GDPlayButtonObjects2= [];
gdjs.menuCode.GDPlayButtonObjects3= [];
gdjs.menuCode.GDconsolaObjects1= [];
gdjs.menuCode.GDconsolaObjects2= [];
gdjs.menuCode.GDconsolaObjects3= [];
gdjs.menuCode.GDPlayButton2Objects1= [];
gdjs.menuCode.GDPlayButton2Objects2= [];
gdjs.menuCode.GDPlayButton2Objects3= [];
gdjs.menuCode.GDjhpObjects1= [];
gdjs.menuCode.GDjhpObjects2= [];
gdjs.menuCode.GDjhpObjects3= [];
gdjs.menuCode.GDNewLightObjects1= [];
gdjs.menuCode.GDNewLightObjects2= [];
gdjs.menuCode.GDNewLightObjects3= [];
gdjs.menuCode.GDblanco2Objects1= [];
gdjs.menuCode.GDblanco2Objects2= [];
gdjs.menuCode.GDblanco2Objects3= [];
gdjs.menuCode.GDgamexObjects1= [];
gdjs.menuCode.GDgamexObjects2= [];
gdjs.menuCode.GDgamexObjects3= [];
gdjs.menuCode.GDblanco3Objects1= [];
gdjs.menuCode.GDblanco3Objects2= [];
gdjs.menuCode.GDblanco3Objects3= [];
gdjs.menuCode.GDgamex2Objects1= [];
gdjs.menuCode.GDgamex2Objects2= [];
gdjs.menuCode.GDgamex2Objects3= [];
gdjs.menuCode.GDblanco4Objects1= [];
gdjs.menuCode.GDblanco4Objects2= [];
gdjs.menuCode.GDblanco4Objects3= [];
gdjs.menuCode.GDgamexpObjects1= [];
gdjs.menuCode.GDgamexpObjects2= [];
gdjs.menuCode.GDgamexpObjects3= [];
gdjs.menuCode.GDlogoObjects1= [];
gdjs.menuCode.GDlogoObjects2= [];
gdjs.menuCode.GDlogoObjects3= [];
gdjs.menuCode.GDblanco5Objects1= [];
gdjs.menuCode.GDblanco5Objects2= [];
gdjs.menuCode.GDblanco5Objects3= [];
gdjs.menuCode.GDgamexp2Objects1= [];
gdjs.menuCode.GDgamexp2Objects2= [];
gdjs.menuCode.GDgamexp2Objects3= [];
gdjs.menuCode.GDgamexp3Objects1= [];
gdjs.menuCode.GDgamexp3Objects2= [];
gdjs.menuCode.GDgamexp3Objects3= [];
gdjs.menuCode.GDCancionObjects1= [];
gdjs.menuCode.GDCancionObjects2= [];
gdjs.menuCode.GDCancionObjects3= [];
gdjs.menuCode.GDautor2Objects1= [];
gdjs.menuCode.GDautor2Objects2= [];
gdjs.menuCode.GDautor2Objects3= [];
gdjs.menuCode.GDCancion2Objects1= [];
gdjs.menuCode.GDCancion2Objects2= [];
gdjs.menuCode.GDCancion2Objects3= [];
gdjs.menuCode.GDleaderObjects1= [];
gdjs.menuCode.GDleaderObjects2= [];
gdjs.menuCode.GDleaderObjects3= [];
gdjs.menuCode.GDbotonObjects1= [];
gdjs.menuCode.GDbotonObjects2= [];
gdjs.menuCode.GDbotonObjects3= [];
gdjs.menuCode.GDolaObjects1= [];
gdjs.menuCode.GDolaObjects2= [];
gdjs.menuCode.GDolaObjects3= [];
gdjs.menuCode.GDblancoxObjects1= [];
gdjs.menuCode.GDblancoxObjects2= [];
gdjs.menuCode.GDblancoxObjects3= [];
gdjs.menuCode.GDblanco9Objects1= [];
gdjs.menuCode.GDblanco9Objects2= [];
gdjs.menuCode.GDblanco9Objects3= [];
gdjs.menuCode.GDgamexphObjects1= [];
gdjs.menuCode.GDgamexphObjects2= [];
gdjs.menuCode.GDgamexphObjects3= [];
gdjs.menuCode.GDmenunoalObjects1= [];
gdjs.menuCode.GDmenunoalObjects2= [];
gdjs.menuCode.GDmenunoalObjects3= [];
gdjs.menuCode.GDmaderitaObjects1= [];
gdjs.menuCode.GDmaderitaObjects2= [];
gdjs.menuCode.GDmaderitaObjects3= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cancion"), gdjs.menuCode.GDCancionObjects2);
gdjs.copyArray(runtimeScene.getObjects("autor2"), gdjs.menuCode.GDautor2Objects2);
{for(var i = 0, len = gdjs.menuCode.GDCancionObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDCancionObjects2[i].getBehavior("Text").setText("Sol y playa Tropical fusion ");
}
}{for(var i = 0, len = gdjs.menuCode.GDautor2Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDautor2Objects2[i].getBehavior("Text").setText("Caribbean Monkey");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cancion"), gdjs.menuCode.GDCancionObjects2);
gdjs.copyArray(runtimeScene.getObjects("autor2"), gdjs.menuCode.GDautor2Objects2);
{for(var i = 0, len = gdjs.menuCode.GDCancionObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDCancionObjects2[i].getBehavior("Text").setText("Daikiri Club Mix ");
}
}{for(var i = 0, len = gdjs.menuCode.GDautor2Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDautor2Objects2[i].getBehavior("Text").setText("Caribbean Monkey");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cancion"), gdjs.menuCode.GDCancionObjects1);
gdjs.copyArray(runtimeScene.getObjects("autor2"), gdjs.menuCode.GDautor2Objects1);
{for(var i = 0, len = gdjs.menuCode.GDCancionObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDCancionObjects1[i].getBehavior("Text").setText("Tú, mi niña");
}
}{for(var i = 0, len = gdjs.menuCode.GDautor2Objects1.length ;i < len;++i) {
    gdjs.menuCode.GDautor2Objects1[i].getBehavior("Text").setText("Jara Henao Producciones");
}
}}

}


};gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDgameObjects1Objects = Hashtable.newFrom({"game": gdjs.menuCode.GDgameObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctailObjects1Objects = Hashtable.newFrom({"coctail": gdjs.menuCode.GDcoctailObjects1});
gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctail2Objects1Objects = Hashtable.newFrom({"coctail2": gdjs.menuCode.GDcoctail2Objects1});
gdjs.menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cancion"), gdjs.menuCode.GDCancionObjects2);
gdjs.copyArray(runtimeScene.getObjects("autor2"), gdjs.menuCode.GDautor2Objects2);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 100);
}{for(var i = 0, len = gdjs.menuCode.GDCancionObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDCancionObjects2[i].getBehavior("Text").setText("Sol y playa Tropical fusion ");
}
}{for(var i = 0, len = gdjs.menuCode.GDautor2Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDautor2Objects2[i].getBehavior("Text").setText("Caribbean Monkey");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "caribean_monkey.mp3", 100, true, 90, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cancion"), gdjs.menuCode.GDCancionObjects2);
gdjs.copyArray(runtimeScene.getObjects("autor2"), gdjs.menuCode.GDautor2Objects2);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 100);
}{for(var i = 0, len = gdjs.menuCode.GDCancionObjects2.length ;i < len;++i) {
    gdjs.menuCode.GDCancionObjects2[i].getBehavior("Text").setText("Daikiri Club Mix ");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "danceclub.mp3", 100, true, 90, 1);
}{for(var i = 0, len = gdjs.menuCode.GDautor2Objects2.length ;i < len;++i) {
    gdjs.menuCode.GDautor2Objects2[i].getBehavior("Text").setText("Caribbean Monkey");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cancion"), gdjs.menuCode.GDCancionObjects1);
gdjs.copyArray(runtimeScene.getObjects("autor2"), gdjs.menuCode.GDautor2Objects1);
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 100);
}{for(var i = 0, len = gdjs.menuCode.GDCancionObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDCancionObjects1[i].getBehavior("Text").setText("Tú, mi niña");
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "el_sol_ha_de_brillar3.mp3", 100, true, 90, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.menuCode.GDautor2Objects1.length ;i < len;++i) {
    gdjs.menuCode.GDautor2Objects1[i].getBehavior("Text").setText("Jara Henao Producciones");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}}

}


};gdjs.menuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blanco"), gdjs.menuCode.GDblancoObjects1);
gdjs.copyArray(runtimeScene.getObjects("jhp"), gdjs.menuCode.GDjhpObjects1);
{for(var i = 0, len = gdjs.menuCode.GDblancoObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDblancoObjects1[i].getBehavior("Opacity").setOpacity(80);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "BEACH.mp3", 200, true, 30, 1);
}{for(var i = 0, len = gdjs.menuCode.GDjhpObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDjhpObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("game"), gdjs.menuCode.GDgameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDgameObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coctail"), gdjs.menuCode.GDcoctailObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctailObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "alcohol", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coctail2"), gdjs.menuCode.GDcoctail2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDcoctail2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "noalcohol", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.menuCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDNewSprite3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDNewSprite3Objects1[k] = gdjs.menuCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.menuCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/caribbeanmonkeycocktail/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jhp"), gdjs.menuCode.GDjhpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDjhpObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDjhpObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDjhpObjects1[k] = gdjs.menuCode.GDjhpObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDjhpObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/jarahenaoproducciones/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.menuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDPlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDPlayButtonObjects1[k] = gdjs.menuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12375540);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("consola"), gdjs.menuCode.GDconsolaObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.menuCode.GDconsolaObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDconsolaObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{ //Subevents
gdjs.menuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects3.length = 0;
gdjs.menuCode.GDblancoObjects1.length = 0;
gdjs.menuCode.GDblancoObjects2.length = 0;
gdjs.menuCode.GDblancoObjects3.length = 0;
gdjs.menuCode.GDgameObjects1.length = 0;
gdjs.menuCode.GDgameObjects2.length = 0;
gdjs.menuCode.GDgameObjects3.length = 0;
gdjs.menuCode.GDcoctailObjects1.length = 0;
gdjs.menuCode.GDcoctailObjects2.length = 0;
gdjs.menuCode.GDcoctailObjects3.length = 0;
gdjs.menuCode.GDcoctail2Objects1.length = 0;
gdjs.menuCode.GDcoctail2Objects2.length = 0;
gdjs.menuCode.GDcoctail2Objects3.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects3.length = 0;
gdjs.menuCode.GDgame2Objects1.length = 0;
gdjs.menuCode.GDgame2Objects2.length = 0;
gdjs.menuCode.GDgame2Objects3.length = 0;
gdjs.menuCode.GDgame3Objects1.length = 0;
gdjs.menuCode.GDgame3Objects2.length = 0;
gdjs.menuCode.GDgame3Objects3.length = 0;
gdjs.menuCode.GDgame4Objects1.length = 0;
gdjs.menuCode.GDgame4Objects2.length = 0;
gdjs.menuCode.GDgame4Objects3.length = 0;
gdjs.menuCode.GDgame5Objects1.length = 0;
gdjs.menuCode.GDgame5Objects2.length = 0;
gdjs.menuCode.GDgame5Objects3.length = 0;
gdjs.menuCode.GDPlayButtonObjects1.length = 0;
gdjs.menuCode.GDPlayButtonObjects2.length = 0;
gdjs.menuCode.GDPlayButtonObjects3.length = 0;
gdjs.menuCode.GDconsolaObjects1.length = 0;
gdjs.menuCode.GDconsolaObjects2.length = 0;
gdjs.menuCode.GDconsolaObjects3.length = 0;
gdjs.menuCode.GDPlayButton2Objects1.length = 0;
gdjs.menuCode.GDPlayButton2Objects2.length = 0;
gdjs.menuCode.GDPlayButton2Objects3.length = 0;
gdjs.menuCode.GDjhpObjects1.length = 0;
gdjs.menuCode.GDjhpObjects2.length = 0;
gdjs.menuCode.GDjhpObjects3.length = 0;
gdjs.menuCode.GDNewLightObjects1.length = 0;
gdjs.menuCode.GDNewLightObjects2.length = 0;
gdjs.menuCode.GDNewLightObjects3.length = 0;
gdjs.menuCode.GDblanco2Objects1.length = 0;
gdjs.menuCode.GDblanco2Objects2.length = 0;
gdjs.menuCode.GDblanco2Objects3.length = 0;
gdjs.menuCode.GDgamexObjects1.length = 0;
gdjs.menuCode.GDgamexObjects2.length = 0;
gdjs.menuCode.GDgamexObjects3.length = 0;
gdjs.menuCode.GDblanco3Objects1.length = 0;
gdjs.menuCode.GDblanco3Objects2.length = 0;
gdjs.menuCode.GDblanco3Objects3.length = 0;
gdjs.menuCode.GDgamex2Objects1.length = 0;
gdjs.menuCode.GDgamex2Objects2.length = 0;
gdjs.menuCode.GDgamex2Objects3.length = 0;
gdjs.menuCode.GDblanco4Objects1.length = 0;
gdjs.menuCode.GDblanco4Objects2.length = 0;
gdjs.menuCode.GDblanco4Objects3.length = 0;
gdjs.menuCode.GDgamexpObjects1.length = 0;
gdjs.menuCode.GDgamexpObjects2.length = 0;
gdjs.menuCode.GDgamexpObjects3.length = 0;
gdjs.menuCode.GDlogoObjects1.length = 0;
gdjs.menuCode.GDlogoObjects2.length = 0;
gdjs.menuCode.GDlogoObjects3.length = 0;
gdjs.menuCode.GDblanco5Objects1.length = 0;
gdjs.menuCode.GDblanco5Objects2.length = 0;
gdjs.menuCode.GDblanco5Objects3.length = 0;
gdjs.menuCode.GDgamexp2Objects1.length = 0;
gdjs.menuCode.GDgamexp2Objects2.length = 0;
gdjs.menuCode.GDgamexp2Objects3.length = 0;
gdjs.menuCode.GDgamexp3Objects1.length = 0;
gdjs.menuCode.GDgamexp3Objects2.length = 0;
gdjs.menuCode.GDgamexp3Objects3.length = 0;
gdjs.menuCode.GDCancionObjects1.length = 0;
gdjs.menuCode.GDCancionObjects2.length = 0;
gdjs.menuCode.GDCancionObjects3.length = 0;
gdjs.menuCode.GDautor2Objects1.length = 0;
gdjs.menuCode.GDautor2Objects2.length = 0;
gdjs.menuCode.GDautor2Objects3.length = 0;
gdjs.menuCode.GDCancion2Objects1.length = 0;
gdjs.menuCode.GDCancion2Objects2.length = 0;
gdjs.menuCode.GDCancion2Objects3.length = 0;
gdjs.menuCode.GDleaderObjects1.length = 0;
gdjs.menuCode.GDleaderObjects2.length = 0;
gdjs.menuCode.GDleaderObjects3.length = 0;
gdjs.menuCode.GDbotonObjects1.length = 0;
gdjs.menuCode.GDbotonObjects2.length = 0;
gdjs.menuCode.GDbotonObjects3.length = 0;
gdjs.menuCode.GDolaObjects1.length = 0;
gdjs.menuCode.GDolaObjects2.length = 0;
gdjs.menuCode.GDolaObjects3.length = 0;
gdjs.menuCode.GDblancoxObjects1.length = 0;
gdjs.menuCode.GDblancoxObjects2.length = 0;
gdjs.menuCode.GDblancoxObjects3.length = 0;
gdjs.menuCode.GDblanco9Objects1.length = 0;
gdjs.menuCode.GDblanco9Objects2.length = 0;
gdjs.menuCode.GDblanco9Objects3.length = 0;
gdjs.menuCode.GDgamexphObjects1.length = 0;
gdjs.menuCode.GDgamexphObjects2.length = 0;
gdjs.menuCode.GDgamexphObjects3.length = 0;
gdjs.menuCode.GDmenunoalObjects1.length = 0;
gdjs.menuCode.GDmenunoalObjects2.length = 0;
gdjs.menuCode.GDmenunoalObjects3.length = 0;
gdjs.menuCode.GDmaderitaObjects1.length = 0;
gdjs.menuCode.GDmaderitaObjects2.length = 0;
gdjs.menuCode.GDmaderitaObjects3.length = 0;

gdjs.menuCode.eventsList2(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
