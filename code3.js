gdjs.WelcomeCode = {};
gdjs.WelcomeCode.localVariables = [];
gdjs.WelcomeCode.GDNewSpriteObjects1= [];
gdjs.WelcomeCode.GDNewSpriteObjects2= [];
gdjs.WelcomeCode.GDNewTextObjects1= [];
gdjs.WelcomeCode.GDNewTextObjects2= [];
gdjs.WelcomeCode.GDYellowJellyButtonObjects1= [];
gdjs.WelcomeCode.GDYellowJellyButtonObjects2= [];


gdjs.WelcomeCode.mapOfGDgdjs_9546WelcomeCode_9546GDYellowJellyButtonObjects1Objects = Hashtable.newFrom({"YellowJellyButton": gdjs.WelcomeCode.GDYellowJellyButtonObjects1});
gdjs.WelcomeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs.WelcomeCode.GDYellowJellyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WelcomeCode.mapOfGDgdjs_9546WelcomeCode_9546GDYellowJellyButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}}

}


};

gdjs.WelcomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WelcomeCode.GDNewSpriteObjects1.length = 0;
gdjs.WelcomeCode.GDNewSpriteObjects2.length = 0;
gdjs.WelcomeCode.GDNewTextObjects1.length = 0;
gdjs.WelcomeCode.GDNewTextObjects2.length = 0;
gdjs.WelcomeCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.WelcomeCode.GDYellowJellyButtonObjects2.length = 0;

gdjs.WelcomeCode.eventsList0(runtimeScene);
gdjs.WelcomeCode.GDNewSpriteObjects1.length = 0;
gdjs.WelcomeCode.GDNewSpriteObjects2.length = 0;
gdjs.WelcomeCode.GDNewTextObjects1.length = 0;
gdjs.WelcomeCode.GDNewTextObjects2.length = 0;
gdjs.WelcomeCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.WelcomeCode.GDYellowJellyButtonObjects2.length = 0;


return;

}

gdjs['WelcomeCode'] = gdjs.WelcomeCode;
