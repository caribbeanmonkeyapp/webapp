gdjs.inicioCode = {};
gdjs.inicioCode.localVariables = [];
gdjs.inicioCode.GDNewLightObjects1= [];
gdjs.inicioCode.GDNewLightObjects2= [];
gdjs.inicioCode.GDblanco2Objects1= [];
gdjs.inicioCode.GDblanco2Objects2= [];
gdjs.inicioCode.GDgamexObjects1= [];
gdjs.inicioCode.GDgamexObjects2= [];
gdjs.inicioCode.GDblanco3Objects1= [];
gdjs.inicioCode.GDblanco3Objects2= [];
gdjs.inicioCode.GDgamex2Objects1= [];
gdjs.inicioCode.GDgamex2Objects2= [];
gdjs.inicioCode.GDblanco4Objects1= [];
gdjs.inicioCode.GDblanco4Objects2= [];
gdjs.inicioCode.GDgamexpObjects1= [];
gdjs.inicioCode.GDgamexpObjects2= [];
gdjs.inicioCode.GDlogoObjects1= [];
gdjs.inicioCode.GDlogoObjects2= [];
gdjs.inicioCode.GDblanco5Objects1= [];
gdjs.inicioCode.GDblanco5Objects2= [];
gdjs.inicioCode.GDgamexp2Objects1= [];
gdjs.inicioCode.GDgamexp2Objects2= [];
gdjs.inicioCode.GDgamexp3Objects1= [];
gdjs.inicioCode.GDgamexp3Objects2= [];
gdjs.inicioCode.GDCancionObjects1= [];
gdjs.inicioCode.GDCancionObjects2= [];
gdjs.inicioCode.GDautor2Objects1= [];
gdjs.inicioCode.GDautor2Objects2= [];
gdjs.inicioCode.GDCancion2Objects1= [];
gdjs.inicioCode.GDCancion2Objects2= [];
gdjs.inicioCode.GDleaderObjects1= [];
gdjs.inicioCode.GDleaderObjects2= [];
gdjs.inicioCode.GDbotonObjects1= [];
gdjs.inicioCode.GDbotonObjects2= [];
gdjs.inicioCode.GDolaObjects1= [];
gdjs.inicioCode.GDolaObjects2= [];
gdjs.inicioCode.GDblancoxObjects1= [];
gdjs.inicioCode.GDblancoxObjects2= [];
gdjs.inicioCode.GDblanco9Objects1= [];
gdjs.inicioCode.GDblanco9Objects2= [];
gdjs.inicioCode.GDgamexphObjects1= [];
gdjs.inicioCode.GDgamexphObjects2= [];
gdjs.inicioCode.GDmenunoalObjects1= [];
gdjs.inicioCode.GDmenunoalObjects2= [];
gdjs.inicioCode.GDmaderitaObjects1= [];
gdjs.inicioCode.GDmaderitaObjects2= [];


gdjs.inicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("blanco5"), gdjs.inicioCode.GDblanco5Objects1);
{for(var i = 0, len = gdjs.inicioCode.GDblanco5Objects1.length ;i < len;++i) {
    gdjs.inicioCode.GDblanco5Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blanco5"), gdjs.inicioCode.GDblanco5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inicioCode.GDblanco5Objects1.length;i<l;++i) {
    if ( gdjs.inicioCode.GDblanco5Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inicioCode.GDblanco5Objects1[k] = gdjs.inicioCode.GDblanco5Objects1[i];
        ++k;
    }
}
gdjs.inicioCode.GDblanco5Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "caribean_monkey.mp3", 100, true, 90, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.inicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inicioCode.GDNewLightObjects1.length = 0;
gdjs.inicioCode.GDNewLightObjects2.length = 0;
gdjs.inicioCode.GDblanco2Objects1.length = 0;
gdjs.inicioCode.GDblanco2Objects2.length = 0;
gdjs.inicioCode.GDgamexObjects1.length = 0;
gdjs.inicioCode.GDgamexObjects2.length = 0;
gdjs.inicioCode.GDblanco3Objects1.length = 0;
gdjs.inicioCode.GDblanco3Objects2.length = 0;
gdjs.inicioCode.GDgamex2Objects1.length = 0;
gdjs.inicioCode.GDgamex2Objects2.length = 0;
gdjs.inicioCode.GDblanco4Objects1.length = 0;
gdjs.inicioCode.GDblanco4Objects2.length = 0;
gdjs.inicioCode.GDgamexpObjects1.length = 0;
gdjs.inicioCode.GDgamexpObjects2.length = 0;
gdjs.inicioCode.GDlogoObjects1.length = 0;
gdjs.inicioCode.GDlogoObjects2.length = 0;
gdjs.inicioCode.GDblanco5Objects1.length = 0;
gdjs.inicioCode.GDblanco5Objects2.length = 0;
gdjs.inicioCode.GDgamexp2Objects1.length = 0;
gdjs.inicioCode.GDgamexp2Objects2.length = 0;
gdjs.inicioCode.GDgamexp3Objects1.length = 0;
gdjs.inicioCode.GDgamexp3Objects2.length = 0;
gdjs.inicioCode.GDCancionObjects1.length = 0;
gdjs.inicioCode.GDCancionObjects2.length = 0;
gdjs.inicioCode.GDautor2Objects1.length = 0;
gdjs.inicioCode.GDautor2Objects2.length = 0;
gdjs.inicioCode.GDCancion2Objects1.length = 0;
gdjs.inicioCode.GDCancion2Objects2.length = 0;
gdjs.inicioCode.GDleaderObjects1.length = 0;
gdjs.inicioCode.GDleaderObjects2.length = 0;
gdjs.inicioCode.GDbotonObjects1.length = 0;
gdjs.inicioCode.GDbotonObjects2.length = 0;
gdjs.inicioCode.GDolaObjects1.length = 0;
gdjs.inicioCode.GDolaObjects2.length = 0;
gdjs.inicioCode.GDblancoxObjects1.length = 0;
gdjs.inicioCode.GDblancoxObjects2.length = 0;
gdjs.inicioCode.GDblanco9Objects1.length = 0;
gdjs.inicioCode.GDblanco9Objects2.length = 0;
gdjs.inicioCode.GDgamexphObjects1.length = 0;
gdjs.inicioCode.GDgamexphObjects2.length = 0;
gdjs.inicioCode.GDmenunoalObjects1.length = 0;
gdjs.inicioCode.GDmenunoalObjects2.length = 0;
gdjs.inicioCode.GDmaderitaObjects1.length = 0;
gdjs.inicioCode.GDmaderitaObjects2.length = 0;

gdjs.inicioCode.eventsList0(runtimeScene);

return;

}

gdjs['inicioCode'] = gdjs.inicioCode;
