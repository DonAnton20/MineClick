gdjs.ResetCofirmationCode = {};
gdjs.ResetCofirmationCode.localVariables = [];
gdjs.ResetCofirmationCode.GDResetNotConfirmObjects1= [];
gdjs.ResetCofirmationCode.GDResetNotConfirmObjects2= [];
gdjs.ResetCofirmationCode.GDResetConfirmObjects1= [];
gdjs.ResetCofirmationCode.GDResetConfirmObjects2= [];
gdjs.ResetCofirmationCode.GDNewTextObjects1= [];
gdjs.ResetCofirmationCode.GDNewTextObjects2= [];
gdjs.ResetCofirmationCode.GDNewSpriteObjects1= [];
gdjs.ResetCofirmationCode.GDNewSpriteObjects2= [];
gdjs.ResetCofirmationCode.GDNewSprite2Objects1= [];
gdjs.ResetCofirmationCode.GDNewSprite2Objects2= [];
gdjs.ResetCofirmationCode.GDNewSprite3Objects1= [];
gdjs.ResetCofirmationCode.GDNewSprite3Objects2= [];


gdjs.ResetCofirmationCode.mapOfGDgdjs_9546ResetCofirmationCode_9546GDResetConfirmObjects1Objects = Hashtable.newFrom({"ResetConfirm": gdjs.ResetCofirmationCode.GDResetConfirmObjects1});
gdjs.ResetCofirmationCode.asyncCallback17914420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ResetCofirmationCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Coins", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Click", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(10);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Click_Coast", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Second", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(10);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Second_Coast", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}gdjs.ResetCofirmationCode.localVariables.length = 0;
}
gdjs.ResetCofirmationCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ResetCofirmationCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.ResetCofirmationCode.asyncCallback17914420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ResetCofirmationCode.mapOfGDgdjs_9546ResetCofirmationCode_9546GDResetNotConfirmObjects1Objects = Hashtable.newFrom({"ResetNotConfirm": gdjs.ResetCofirmationCode.GDResetNotConfirmObjects1});
gdjs.ResetCofirmationCode.asyncCallback17756284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.ResetCofirmationCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}gdjs.ResetCofirmationCode.localVariables.length = 0;
}
gdjs.ResetCofirmationCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.ResetCofirmationCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.ResetCofirmationCode.asyncCallback17756284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ResetCofirmationCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ResetConfirm"), gdjs.ResetCofirmationCode.GDResetConfirmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ResetCofirmationCode.mapOfGDgdjs_9546ResetCofirmationCode_9546GDResetConfirmObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17913892);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "220187__gameaudio__loosedeny-casual-1.wav", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}
{ //Subevents
gdjs.ResetCofirmationCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResetNotConfirm"), gdjs.ResetCofirmationCode.GDResetNotConfirmObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ResetCofirmationCode.mapOfGDgdjs_9546ResetCofirmationCode_9546GDResetNotConfirmObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17755732);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "18105-1464287150_vl5wMwZi (2).mp3", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}
{ //Subevents
gdjs.ResetCofirmationCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.ResetCofirmationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ResetCofirmationCode.GDResetNotConfirmObjects1.length = 0;
gdjs.ResetCofirmationCode.GDResetNotConfirmObjects2.length = 0;
gdjs.ResetCofirmationCode.GDResetConfirmObjects1.length = 0;
gdjs.ResetCofirmationCode.GDResetConfirmObjects2.length = 0;
gdjs.ResetCofirmationCode.GDNewTextObjects1.length = 0;
gdjs.ResetCofirmationCode.GDNewTextObjects2.length = 0;
gdjs.ResetCofirmationCode.GDNewSpriteObjects1.length = 0;
gdjs.ResetCofirmationCode.GDNewSpriteObjects2.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite2Objects1.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite2Objects2.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite3Objects1.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite3Objects2.length = 0;

gdjs.ResetCofirmationCode.eventsList2(runtimeScene);
gdjs.ResetCofirmationCode.GDResetNotConfirmObjects1.length = 0;
gdjs.ResetCofirmationCode.GDResetNotConfirmObjects2.length = 0;
gdjs.ResetCofirmationCode.GDResetConfirmObjects1.length = 0;
gdjs.ResetCofirmationCode.GDResetConfirmObjects2.length = 0;
gdjs.ResetCofirmationCode.GDNewTextObjects1.length = 0;
gdjs.ResetCofirmationCode.GDNewTextObjects2.length = 0;
gdjs.ResetCofirmationCode.GDNewSpriteObjects1.length = 0;
gdjs.ResetCofirmationCode.GDNewSpriteObjects2.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite2Objects1.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite2Objects2.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite3Objects1.length = 0;
gdjs.ResetCofirmationCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['ResetCofirmationCode'] = gdjs.ResetCofirmationCode;
