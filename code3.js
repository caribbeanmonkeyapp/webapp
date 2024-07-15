gdjs.noalcoholCode = {};
gdjs.noalcoholCode.localVariables = [];
gdjs.noalcoholCode.GDNewSpriteObjects1= [];
gdjs.noalcoholCode.GDNewSpriteObjects2= [];
gdjs.noalcoholCode.GDleftObjects1= [];
gdjs.noalcoholCode.GDleftObjects2= [];
gdjs.noalcoholCode.GDrightObjects1= [];
gdjs.noalcoholCode.GDrightObjects2= [];
gdjs.noalcoholCode.GDNewLightObjects1= [];
gdjs.noalcoholCode.GDNewLightObjects2= [];
gdjs.noalcoholCode.GDblanco2Objects1= [];
gdjs.noalcoholCode.GDblanco2Objects2= [];
gdjs.noalcoholCode.GDgamexObjects1= [];
gdjs.noalcoholCode.GDgamexObjects2= [];
gdjs.noalcoholCode.GDblanco3Objects1= [];
gdjs.noalcoholCode.GDblanco3Objects2= [];
gdjs.noalcoholCode.GDgamex2Objects1= [];
gdjs.noalcoholCode.GDgamex2Objects2= [];
gdjs.noalcoholCode.GDblanco4Objects1= [];
gdjs.noalcoholCode.GDblanco4Objects2= [];
gdjs.noalcoholCode.GDgamexpObjects1= [];
gdjs.noalcoholCode.GDgamexpObjects2= [];
gdjs.noalcoholCode.GDlogoObjects1= [];
gdjs.noalcoholCode.GDlogoObjects2= [];
gdjs.noalcoholCode.GDblanco5Objects1= [];
gdjs.noalcoholCode.GDblanco5Objects2= [];
gdjs.noalcoholCode.GDgamexp2Objects1= [];
gdjs.noalcoholCode.GDgamexp2Objects2= [];
gdjs.noalcoholCode.GDgamexp3Objects1= [];
gdjs.noalcoholCode.GDgamexp3Objects2= [];
gdjs.noalcoholCode.GDCancionObjects1= [];
gdjs.noalcoholCode.GDCancionObjects2= [];
gdjs.noalcoholCode.GDautor2Objects1= [];
gdjs.noalcoholCode.GDautor2Objects2= [];
gdjs.noalcoholCode.GDCancion2Objects1= [];
gdjs.noalcoholCode.GDCancion2Objects2= [];
gdjs.noalcoholCode.GDleaderObjects1= [];
gdjs.noalcoholCode.GDleaderObjects2= [];
gdjs.noalcoholCode.GDbotonObjects1= [];
gdjs.noalcoholCode.GDbotonObjects2= [];
gdjs.noalcoholCode.GDolaObjects1= [];
gdjs.noalcoholCode.GDolaObjects2= [];
gdjs.noalcoholCode.GDblancoxObjects1= [];
gdjs.noalcoholCode.GDblancoxObjects2= [];
gdjs.noalcoholCode.GDblanco9Objects1= [];
gdjs.noalcoholCode.GDblanco9Objects2= [];
gdjs.noalcoholCode.GDgamexphObjects1= [];
gdjs.noalcoholCode.GDgamexphObjects2= [];
gdjs.noalcoholCode.GDmenunoalObjects1= [];
gdjs.noalcoholCode.GDmenunoalObjects2= [];
gdjs.noalcoholCode.GDmaderitaObjects1= [];
gdjs.noalcoholCode.GDmaderitaObjects2= [];


gdjs.noalcoholCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.noalcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco9"), gdjs.noalcoholCode.GDblanco9Objects1);
gdjs.copyArray(runtimeScene.getObjects("boton"), gdjs.noalcoholCode.GDbotonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ola"), gdjs.noalcoholCode.GDolaObjects1);
{for(var i = 0, len = gdjs.noalcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDNewSpriteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDblanco9Objects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDblanco9Objects1[i].getBehavior("Opacity").setOpacity(10);
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDolaObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDolaObjects1[i].setColor("164;247;68");
}
}{for(var i = 0, len = gdjs.noalcoholCode.GDbotonObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDbotonObjects1[i].getBehavior("Opacity").setOpacity(80);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.noalcoholCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.noalcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.noalcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton"), gdjs.noalcoholCode.GDbotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDbotonObjects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDbotonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDbotonObjects1[k] = gdjs.noalcoholCode.GDbotonObjects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDbotonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blanco9"), gdjs.noalcoholCode.GDblanco9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.noalcoholCode.GDblanco9Objects1.length;i<l;++i) {
    if ( gdjs.noalcoholCode.GDblanco9Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.noalcoholCode.GDblanco9Objects1[k] = gdjs.noalcoholCode.GDblanco9Objects1[i];
        ++k;
    }
}
gdjs.noalcoholCode.GDblanco9Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.noalcoholCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.noalcoholCode.GDNewSpriteObjects1.length = 0;
gdjs.noalcoholCode.GDNewSpriteObjects2.length = 0;
gdjs.noalcoholCode.GDleftObjects1.length = 0;
gdjs.noalcoholCode.GDleftObjects2.length = 0;
gdjs.noalcoholCode.GDrightObjects1.length = 0;
gdjs.noalcoholCode.GDrightObjects2.length = 0;
gdjs.noalcoholCode.GDNewLightObjects1.length = 0;
gdjs.noalcoholCode.GDNewLightObjects2.length = 0;
gdjs.noalcoholCode.GDblanco2Objects1.length = 0;
gdjs.noalcoholCode.GDblanco2Objects2.length = 0;
gdjs.noalcoholCode.GDgamexObjects1.length = 0;
gdjs.noalcoholCode.GDgamexObjects2.length = 0;
gdjs.noalcoholCode.GDblanco3Objects1.length = 0;
gdjs.noalcoholCode.GDblanco3Objects2.length = 0;
gdjs.noalcoholCode.GDgamex2Objects1.length = 0;
gdjs.noalcoholCode.GDgamex2Objects2.length = 0;
gdjs.noalcoholCode.GDblanco4Objects1.length = 0;
gdjs.noalcoholCode.GDblanco4Objects2.length = 0;
gdjs.noalcoholCode.GDgamexpObjects1.length = 0;
gdjs.noalcoholCode.GDgamexpObjects2.length = 0;
gdjs.noalcoholCode.GDlogoObjects1.length = 0;
gdjs.noalcoholCode.GDlogoObjects2.length = 0;
gdjs.noalcoholCode.GDblanco5Objects1.length = 0;
gdjs.noalcoholCode.GDblanco5Objects2.length = 0;
gdjs.noalcoholCode.GDgamexp2Objects1.length = 0;
gdjs.noalcoholCode.GDgamexp2Objects2.length = 0;
gdjs.noalcoholCode.GDgamexp3Objects1.length = 0;
gdjs.noalcoholCode.GDgamexp3Objects2.length = 0;
gdjs.noalcoholCode.GDCancionObjects1.length = 0;
gdjs.noalcoholCode.GDCancionObjects2.length = 0;
gdjs.noalcoholCode.GDautor2Objects1.length = 0;
gdjs.noalcoholCode.GDautor2Objects2.length = 0;
gdjs.noalcoholCode.GDCancion2Objects1.length = 0;
gdjs.noalcoholCode.GDCancion2Objects2.length = 0;
gdjs.noalcoholCode.GDleaderObjects1.length = 0;
gdjs.noalcoholCode.GDleaderObjects2.length = 0;
gdjs.noalcoholCode.GDbotonObjects1.length = 0;
gdjs.noalcoholCode.GDbotonObjects2.length = 0;
gdjs.noalcoholCode.GDolaObjects1.length = 0;
gdjs.noalcoholCode.GDolaObjects2.length = 0;
gdjs.noalcoholCode.GDblancoxObjects1.length = 0;
gdjs.noalcoholCode.GDblancoxObjects2.length = 0;
gdjs.noalcoholCode.GDblanco9Objects1.length = 0;
gdjs.noalcoholCode.GDblanco9Objects2.length = 0;
gdjs.noalcoholCode.GDgamexphObjects1.length = 0;
gdjs.noalcoholCode.GDgamexphObjects2.length = 0;
gdjs.noalcoholCode.GDmenunoalObjects1.length = 0;
gdjs.noalcoholCode.GDmenunoalObjects2.length = 0;
gdjs.noalcoholCode.GDmaderitaObjects1.length = 0;
gdjs.noalcoholCode.GDmaderitaObjects2.length = 0;

gdjs.noalcoholCode.eventsList0(runtimeScene);

return;

}

gdjs['noalcoholCode'] = gdjs.noalcoholCode;
