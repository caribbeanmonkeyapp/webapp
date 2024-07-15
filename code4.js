gdjs.alcoholCode = {};
gdjs.alcoholCode.localVariables = [];
gdjs.alcoholCode.GDNewSpriteObjects1= [];
gdjs.alcoholCode.GDNewSpriteObjects2= [];
gdjs.alcoholCode.GDleftObjects1= [];
gdjs.alcoholCode.GDleftObjects2= [];
gdjs.alcoholCode.GDrightObjects1= [];
gdjs.alcoholCode.GDrightObjects2= [];
gdjs.alcoholCode.GDconsolaObjects1= [];
gdjs.alcoholCode.GDconsolaObjects2= [];
gdjs.alcoholCode.GDNewLightObjects1= [];
gdjs.alcoholCode.GDNewLightObjects2= [];
gdjs.alcoholCode.GDblanco2Objects1= [];
gdjs.alcoholCode.GDblanco2Objects2= [];
gdjs.alcoholCode.GDgamexObjects1= [];
gdjs.alcoholCode.GDgamexObjects2= [];
gdjs.alcoholCode.GDblanco3Objects1= [];
gdjs.alcoholCode.GDblanco3Objects2= [];
gdjs.alcoholCode.GDgamex2Objects1= [];
gdjs.alcoholCode.GDgamex2Objects2= [];
gdjs.alcoholCode.GDblanco4Objects1= [];
gdjs.alcoholCode.GDblanco4Objects2= [];
gdjs.alcoholCode.GDgamexpObjects1= [];
gdjs.alcoholCode.GDgamexpObjects2= [];
gdjs.alcoholCode.GDlogoObjects1= [];
gdjs.alcoholCode.GDlogoObjects2= [];
gdjs.alcoholCode.GDblanco5Objects1= [];
gdjs.alcoholCode.GDblanco5Objects2= [];
gdjs.alcoholCode.GDgamexp2Objects1= [];
gdjs.alcoholCode.GDgamexp2Objects2= [];
gdjs.alcoholCode.GDgamexp3Objects1= [];
gdjs.alcoholCode.GDgamexp3Objects2= [];
gdjs.alcoholCode.GDCancionObjects1= [];
gdjs.alcoholCode.GDCancionObjects2= [];
gdjs.alcoholCode.GDautor2Objects1= [];
gdjs.alcoholCode.GDautor2Objects2= [];
gdjs.alcoholCode.GDCancion2Objects1= [];
gdjs.alcoholCode.GDCancion2Objects2= [];
gdjs.alcoholCode.GDleaderObjects1= [];
gdjs.alcoholCode.GDleaderObjects2= [];
gdjs.alcoholCode.GDbotonObjects1= [];
gdjs.alcoholCode.GDbotonObjects2= [];
gdjs.alcoholCode.GDolaObjects1= [];
gdjs.alcoholCode.GDolaObjects2= [];
gdjs.alcoholCode.GDblancoxObjects1= [];
gdjs.alcoholCode.GDblancoxObjects2= [];
gdjs.alcoholCode.GDblanco9Objects1= [];
gdjs.alcoholCode.GDblanco9Objects2= [];
gdjs.alcoholCode.GDgamexphObjects1= [];
gdjs.alcoholCode.GDgamexphObjects2= [];
gdjs.alcoholCode.GDmenunoalObjects1= [];
gdjs.alcoholCode.GDmenunoalObjects2= [];
gdjs.alcoholCode.GDmaderitaObjects1= [];
gdjs.alcoholCode.GDmaderitaObjects2= [];


gdjs.alcoholCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.alcoholCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("blanco2"), gdjs.alcoholCode.GDblanco2Objects1);
gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.alcoholCode.GDblanco3Objects1);
gdjs.copyArray(runtimeScene.getObjects("blanco4"), gdjs.alcoholCode.GDblanco4Objects1);
gdjs.copyArray(runtimeScene.getObjects("boton"), gdjs.alcoholCode.GDbotonObjects1);
{for(var i = 0, len = gdjs.alcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDNewSpriteObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.alcoholCode.GDblanco2Objects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDblanco2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.alcoholCode.GDblanco3Objects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDblanco3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.alcoholCode.GDblanco4Objects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDblanco4Objects1[i].getBehavior("Opacity").setOpacity(150);
}
}{for(var i = 0, len = gdjs.alcoholCode.GDbotonObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDbotonObjects1[i].getBehavior("Opacity").setOpacity(80);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.alcoholCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.alcoholCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDNewSpriteObjects1[i].setAnimationFrame(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton"), gdjs.alcoholCode.GDbotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDbotonObjects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDbotonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDbotonObjects1[k] = gdjs.alcoholCode.GDbotonObjects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDbotonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blanco3"), gdjs.alcoholCode.GDblanco3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.alcoholCode.GDblanco3Objects1.length;i<l;++i) {
    if ( gdjs.alcoholCode.GDblanco3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.alcoholCode.GDblanco3Objects1[k] = gdjs.alcoholCode.GDblanco3Objects1[i];
        ++k;
    }
}
gdjs.alcoholCode.GDblanco3Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("consola"), gdjs.alcoholCode.GDconsolaObjects1);
{for(var i = 0, len = gdjs.alcoholCode.GDconsolaObjects1.length ;i < len;++i) {
    gdjs.alcoholCode.GDconsolaObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}}

}


};

gdjs.alcoholCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.alcoholCode.GDNewSpriteObjects1.length = 0;
gdjs.alcoholCode.GDNewSpriteObjects2.length = 0;
gdjs.alcoholCode.GDleftObjects1.length = 0;
gdjs.alcoholCode.GDleftObjects2.length = 0;
gdjs.alcoholCode.GDrightObjects1.length = 0;
gdjs.alcoholCode.GDrightObjects2.length = 0;
gdjs.alcoholCode.GDconsolaObjects1.length = 0;
gdjs.alcoholCode.GDconsolaObjects2.length = 0;
gdjs.alcoholCode.GDNewLightObjects1.length = 0;
gdjs.alcoholCode.GDNewLightObjects2.length = 0;
gdjs.alcoholCode.GDblanco2Objects1.length = 0;
gdjs.alcoholCode.GDblanco2Objects2.length = 0;
gdjs.alcoholCode.GDgamexObjects1.length = 0;
gdjs.alcoholCode.GDgamexObjects2.length = 0;
gdjs.alcoholCode.GDblanco3Objects1.length = 0;
gdjs.alcoholCode.GDblanco3Objects2.length = 0;
gdjs.alcoholCode.GDgamex2Objects1.length = 0;
gdjs.alcoholCode.GDgamex2Objects2.length = 0;
gdjs.alcoholCode.GDblanco4Objects1.length = 0;
gdjs.alcoholCode.GDblanco4Objects2.length = 0;
gdjs.alcoholCode.GDgamexpObjects1.length = 0;
gdjs.alcoholCode.GDgamexpObjects2.length = 0;
gdjs.alcoholCode.GDlogoObjects1.length = 0;
gdjs.alcoholCode.GDlogoObjects2.length = 0;
gdjs.alcoholCode.GDblanco5Objects1.length = 0;
gdjs.alcoholCode.GDblanco5Objects2.length = 0;
gdjs.alcoholCode.GDgamexp2Objects1.length = 0;
gdjs.alcoholCode.GDgamexp2Objects2.length = 0;
gdjs.alcoholCode.GDgamexp3Objects1.length = 0;
gdjs.alcoholCode.GDgamexp3Objects2.length = 0;
gdjs.alcoholCode.GDCancionObjects1.length = 0;
gdjs.alcoholCode.GDCancionObjects2.length = 0;
gdjs.alcoholCode.GDautor2Objects1.length = 0;
gdjs.alcoholCode.GDautor2Objects2.length = 0;
gdjs.alcoholCode.GDCancion2Objects1.length = 0;
gdjs.alcoholCode.GDCancion2Objects2.length = 0;
gdjs.alcoholCode.GDleaderObjects1.length = 0;
gdjs.alcoholCode.GDleaderObjects2.length = 0;
gdjs.alcoholCode.GDbotonObjects1.length = 0;
gdjs.alcoholCode.GDbotonObjects2.length = 0;
gdjs.alcoholCode.GDolaObjects1.length = 0;
gdjs.alcoholCode.GDolaObjects2.length = 0;
gdjs.alcoholCode.GDblancoxObjects1.length = 0;
gdjs.alcoholCode.GDblancoxObjects2.length = 0;
gdjs.alcoholCode.GDblanco9Objects1.length = 0;
gdjs.alcoholCode.GDblanco9Objects2.length = 0;
gdjs.alcoholCode.GDgamexphObjects1.length = 0;
gdjs.alcoholCode.GDgamexphObjects2.length = 0;
gdjs.alcoholCode.GDmenunoalObjects1.length = 0;
gdjs.alcoholCode.GDmenunoalObjects2.length = 0;
gdjs.alcoholCode.GDmaderitaObjects1.length = 0;
gdjs.alcoholCode.GDmaderitaObjects2.length = 0;

gdjs.alcoholCode.eventsList0(runtimeScene);

return;

}

gdjs['alcoholCode'] = gdjs.alcoholCode;
