gdjs.Main_32GameCode = {};
gdjs.Main_32GameCode.localVariables = [];
gdjs.Main_32GameCode.GDNewSpriteObjects1= [];
gdjs.Main_32GameCode.GDNewSpriteObjects2= [];
gdjs.Main_32GameCode.GDNewSpriteObjects3= [];
gdjs.Main_32GameCode.GDBlockObjects1= [];
gdjs.Main_32GameCode.GDBlockObjects2= [];
gdjs.Main_32GameCode.GDBlockObjects3= [];
gdjs.Main_32GameCode.GDCoinObjects1= [];
gdjs.Main_32GameCode.GDCoinObjects2= [];
gdjs.Main_32GameCode.GDCoinObjects3= [];
gdjs.Main_32GameCode.GDBooster1Objects1= [];
gdjs.Main_32GameCode.GDBooster1Objects2= [];
gdjs.Main_32GameCode.GDBooster1Objects3= [];
gdjs.Main_32GameCode.GDBooster2Objects1= [];
gdjs.Main_32GameCode.GDBooster2Objects2= [];
gdjs.Main_32GameCode.GDBooster2Objects3= [];
gdjs.Main_32GameCode.GDCoinsTextObjects1= [];
gdjs.Main_32GameCode.GDCoinsTextObjects2= [];
gdjs.Main_32GameCode.GDCoinsTextObjects3= [];
gdjs.Main_32GameCode.GDBooster2TextObjects1= [];
gdjs.Main_32GameCode.GDBooster2TextObjects2= [];
gdjs.Main_32GameCode.GDBooster2TextObjects3= [];
gdjs.Main_32GameCode.GDBooster1TextObjects1= [];
gdjs.Main_32GameCode.GDBooster1TextObjects2= [];
gdjs.Main_32GameCode.GDBooster1TextObjects3= [];
gdjs.Main_32GameCode.GDMoney_9595sObjects1= [];
gdjs.Main_32GameCode.GDMoney_9595sObjects2= [];
gdjs.Main_32GameCode.GDMoney_9595sObjects3= [];
gdjs.Main_32GameCode.GDMoney_9595cObjects1= [];
gdjs.Main_32GameCode.GDMoney_9595cObjects2= [];
gdjs.Main_32GameCode.GDMoney_9595cObjects3= [];
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1= [];
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects2= [];
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects3= [];
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1= [];
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects2= [];
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects3= [];
gdjs.Main_32GameCode.GDNewTextObjects1= [];
gdjs.Main_32GameCode.GDNewTextObjects2= [];
gdjs.Main_32GameCode.GDNewTextObjects3= [];
gdjs.Main_32GameCode.GDNewText2Objects1= [];
gdjs.Main_32GameCode.GDNewText2Objects2= [];
gdjs.Main_32GameCode.GDNewText2Objects3= [];
gdjs.Main_32GameCode.GDNewSprite2Objects1= [];
gdjs.Main_32GameCode.GDNewSprite2Objects2= [];
gdjs.Main_32GameCode.GDNewSprite2Objects3= [];
gdjs.Main_32GameCode.GDNewSprite3Objects1= [];
gdjs.Main_32GameCode.GDNewSprite3Objects2= [];
gdjs.Main_32GameCode.GDNewSprite3Objects3= [];
gdjs.Main_32GameCode.GDAdBannerObjects1= [];
gdjs.Main_32GameCode.GDAdBannerObjects2= [];
gdjs.Main_32GameCode.GDAdBannerObjects3= [];
gdjs.Main_32GameCode.GDcant_9595affordObjects1= [];
gdjs.Main_32GameCode.GDcant_9595affordObjects2= [];
gdjs.Main_32GameCode.GDcant_9595affordObjects3= [];


gdjs.Main_32GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinsText"), gdjs.Main_32GameCode.GDCoinsTextObjects2);
{for(var i = 0, len = gdjs.Main_32GameCode.GDCoinsTextObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCoinsTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber())));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Booster1Text"), gdjs.Main_32GameCode.GDBooster1TextObjects2);
{for(var i = 0, len = gdjs.Main_32GameCode.GDBooster1TextObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBooster1TextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber())));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Booster2Text"), gdjs.Main_32GameCode.GDBooster2TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Money_Click_Coast_Text"), gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Money_Second_Coast_Text"), gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDBooster2TextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBooster2TextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber())));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber())));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber())));
}
}}

}


};gdjs.Main_32GameCode.eventsList1 = function(runtimeScene) {

};gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDMoney_95959595cObjects1Objects = Hashtable.newFrom({"Money_c": gdjs.Main_32GameCode.GDMoney_9595cObjects1});
gdjs.Main_32GameCode.asyncCallback17839100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("cant_afford"), gdjs.Main_32GameCode.GDcant_9595affordObjects2);

{for(var i = 0, len = gdjs.Main_32GameCode.GDcant_9595affordObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDcant_9595affordObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}gdjs.Main_32GameCode.localVariables.length = 0;
}
gdjs.Main_32GameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
for (const obj of gdjs.Main_32GameCode.GDcant_9595affordObjects1) asyncObjectsList.addObject("cant_afford", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Main_32GameCode.asyncCallback17839100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDMoney_95959595sObjects1Objects = Hashtable.newFrom({"Money_s": gdjs.Main_32GameCode.GDMoney_9595sObjects1});
gdjs.Main_32GameCode.asyncCallback17842060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("cant_afford"), gdjs.Main_32GameCode.GDcant_9595affordObjects2);

{for(var i = 0, len = gdjs.Main_32GameCode.GDcant_9595affordObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDcant_9595affordObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}gdjs.Main_32GameCode.localVariables.length = 0;
}
gdjs.Main_32GameCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
for (const obj of gdjs.Main_32GameCode.GDcant_9595affordObjects1) asyncObjectsList.addObject("cant_afford", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Main_32GameCode.asyncCallback17842060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32GameCode.eventsList4 = function(runtimeScene) {

};gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.Main_32GameCode.GDBlockObjects1});
gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.Main_32GameCode.GDBlockObjects1});
gdjs.Main_32GameCode.asyncCallback17844556 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Block"), gdjs.Main_32GameCode.GDBlockObjects2);

{for(var i = 0, len = gdjs.Main_32GameCode.GDBlockObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBlockObjects2[i].getBehavior("Tween").addObjectScaleTween3("a1", 3.4, "linear", 0.1, false, true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "stonesound (mp3cut.net).wav", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}gdjs.Main_32GameCode.localVariables.length = 0;
}
gdjs.Main_32GameCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
for (const obj of gdjs.Main_32GameCode.GDBlockObjects1) asyncObjectsList.addObject("Block", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Main_32GameCode.asyncCallback17844556(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.Main_32GameCode.GDBlockObjects1});
gdjs.Main_32GameCode.eventsList6 = function(runtimeScene) {

};gdjs.Main_32GameCode.eventsList7 = function(runtimeScene) {

};gdjs.Main_32GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.Main_32GameCode.eventsList7(runtimeScene);
}


};gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Main_32GameCode.GDNewSprite2Objects1});
gdjs.Main_32GameCode.asyncCallback17858732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SettingsMenu", false);
}gdjs.Main_32GameCode.localVariables.length = 0;
}
gdjs.Main_32GameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.Main_32GameCode.asyncCallback17858732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32GameCode.eventsList10 = function(runtimeScene) {

};gdjs.Main_32GameCode.eventsList11 = function(runtimeScene) {

};gdjs.Main_32GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clickerok");
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Coins", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Money_Click", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Money_Second", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Money_Click_Coast", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Money_Second_Coast", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Sound", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Music", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "just-relax-11157.mp3", 1, true, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber(), 1);
}}

}


{


gdjs.Main_32GameCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32GameCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cant_afford"), gdjs.Main_32GameCode.GDcant_9595affordObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDcant_9595affordObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDcant_9595affordObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Money_c"), gdjs.Main_32GameCode.GDMoney_9595cObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDMoney_95959595cObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cant_afford"), gdjs.Main_32GameCode.GDcant_9595affordObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "551543__philracoindie__8-bit-denyerror-sound.wav", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDcant_9595affordObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDcant_9595affordObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Money_s"), gdjs.Main_32GameCode.GDMoney_9595sObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDMoney_95959595sObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cant_afford"), gdjs.Main_32GameCode.GDcant_9595affordObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "551543__philracoindie__8-bit-denyerror-sound.wav", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDcant_9595affordObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDcant_9595affordObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{ //Subevents
gdjs.Main_32GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.eventsList4(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32GameCode.GDBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDBlockObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32GameCode.GDBlockObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBlockObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBlockObjects1[i].getBehavior("Tween").addObjectScaleTween3("a1", 3, "linear", 0.1, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32GameCode.GDBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDBlockObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17844204);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Main_32GameCode.GDBlockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDBlockObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17846052);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Coins", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


gdjs.Main_32GameCode.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Money_c"), gdjs.Main_32GameCode.GDMoney_9595cObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32GameCode.GDMoney_9595cObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDMoney_9595cObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32GameCode.GDMoney_9595cObjects1[k] = gdjs.Main_32GameCode.GDMoney_9595cObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDMoney_9595cObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17848180);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).mul(1.15);
}{runtimeScene.getGame().getVariables().getFromIndex(3).mul(1.63);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Coins", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Click", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Click_Coast", runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}{gdjs.evtTools.sound.playSound(runtimeScene, "18105-1464287150_vl5wMwZi (2).mp3", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Money_s"), gdjs.Main_32GameCode.GDMoney_9595sObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32GameCode.GDMoney_9595sObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDMoney_9595sObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32GameCode.GDMoney_9595sObjects1[k] = gdjs.Main_32GameCode.GDMoney_9595sObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDMoney_9595sObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17852460);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).mul(1.2);
}{runtimeScene.getGame().getVariables().getFromIndex(4).mul(1.63);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Coins", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Second", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Money_Second_Coast", runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}{gdjs.evtTools.sound.playSound(runtimeScene, "18105-1464287150_vl5wMwZi (2).mp3", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Clickerok") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17856476);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clickerok");
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Coins", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{ //Subevents
gdjs.Main_32GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Main_32GameCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32GameCode.mapOfGDgdjs_9546Main_959532GameCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17858044);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "18105-1464287150_vl5wMwZi (2).mp3", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.adMob.setupBanner("ca-app-pub-7509254931052117/7427328174", "", false);
}{gdjs.adMob.showBanner();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "AdTimer") >= 500;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AdTimer");
}{gdjs.adMob.loadInterstitial("ca-app-pub-7509254931052117/3655588211", "", false);
}{gdjs.adMob.showBanner();
}}

}


{


gdjs.Main_32GameCode.eventsList11(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Money_Click_Coast_Text"), gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1[i].setColor("255;0;0");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Money_Click_Coast_Text"), gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1[i].setColor("67;122;6");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Money_Second_Coast_Text"), gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1[i].setColor("255;0;0");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Money_Second_Coast_Text"), gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1);
{for(var i = 0, len = gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1[i].setColor("67;122;6");
}
}}

}


};

gdjs.Main_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32GameCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32GameCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32GameCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32GameCode.GDBlockObjects1.length = 0;
gdjs.Main_32GameCode.GDBlockObjects2.length = 0;
gdjs.Main_32GameCode.GDBlockObjects3.length = 0;
gdjs.Main_32GameCode.GDCoinObjects1.length = 0;
gdjs.Main_32GameCode.GDCoinObjects2.length = 0;
gdjs.Main_32GameCode.GDCoinObjects3.length = 0;
gdjs.Main_32GameCode.GDBooster1Objects1.length = 0;
gdjs.Main_32GameCode.GDBooster1Objects2.length = 0;
gdjs.Main_32GameCode.GDBooster1Objects3.length = 0;
gdjs.Main_32GameCode.GDBooster2Objects1.length = 0;
gdjs.Main_32GameCode.GDBooster2Objects2.length = 0;
gdjs.Main_32GameCode.GDBooster2Objects3.length = 0;
gdjs.Main_32GameCode.GDCoinsTextObjects1.length = 0;
gdjs.Main_32GameCode.GDCoinsTextObjects2.length = 0;
gdjs.Main_32GameCode.GDCoinsTextObjects3.length = 0;
gdjs.Main_32GameCode.GDBooster2TextObjects1.length = 0;
gdjs.Main_32GameCode.GDBooster2TextObjects2.length = 0;
gdjs.Main_32GameCode.GDBooster2TextObjects3.length = 0;
gdjs.Main_32GameCode.GDBooster1TextObjects1.length = 0;
gdjs.Main_32GameCode.GDBooster1TextObjects2.length = 0;
gdjs.Main_32GameCode.GDBooster1TextObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595sObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595sObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595sObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595cObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595cObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595cObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects3.length = 0;
gdjs.Main_32GameCode.GDNewTextObjects1.length = 0;
gdjs.Main_32GameCode.GDNewTextObjects2.length = 0;
gdjs.Main_32GameCode.GDNewTextObjects3.length = 0;
gdjs.Main_32GameCode.GDNewText2Objects1.length = 0;
gdjs.Main_32GameCode.GDNewText2Objects2.length = 0;
gdjs.Main_32GameCode.GDNewText2Objects3.length = 0;
gdjs.Main_32GameCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32GameCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32GameCode.GDNewSprite2Objects3.length = 0;
gdjs.Main_32GameCode.GDNewSprite3Objects1.length = 0;
gdjs.Main_32GameCode.GDNewSprite3Objects2.length = 0;
gdjs.Main_32GameCode.GDNewSprite3Objects3.length = 0;
gdjs.Main_32GameCode.GDAdBannerObjects1.length = 0;
gdjs.Main_32GameCode.GDAdBannerObjects2.length = 0;
gdjs.Main_32GameCode.GDAdBannerObjects3.length = 0;
gdjs.Main_32GameCode.GDcant_9595affordObjects1.length = 0;
gdjs.Main_32GameCode.GDcant_9595affordObjects2.length = 0;
gdjs.Main_32GameCode.GDcant_9595affordObjects3.length = 0;

gdjs.Main_32GameCode.eventsList12(runtimeScene);
gdjs.Main_32GameCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32GameCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32GameCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32GameCode.GDBlockObjects1.length = 0;
gdjs.Main_32GameCode.GDBlockObjects2.length = 0;
gdjs.Main_32GameCode.GDBlockObjects3.length = 0;
gdjs.Main_32GameCode.GDCoinObjects1.length = 0;
gdjs.Main_32GameCode.GDCoinObjects2.length = 0;
gdjs.Main_32GameCode.GDCoinObjects3.length = 0;
gdjs.Main_32GameCode.GDBooster1Objects1.length = 0;
gdjs.Main_32GameCode.GDBooster1Objects2.length = 0;
gdjs.Main_32GameCode.GDBooster1Objects3.length = 0;
gdjs.Main_32GameCode.GDBooster2Objects1.length = 0;
gdjs.Main_32GameCode.GDBooster2Objects2.length = 0;
gdjs.Main_32GameCode.GDBooster2Objects3.length = 0;
gdjs.Main_32GameCode.GDCoinsTextObjects1.length = 0;
gdjs.Main_32GameCode.GDCoinsTextObjects2.length = 0;
gdjs.Main_32GameCode.GDCoinsTextObjects3.length = 0;
gdjs.Main_32GameCode.GDBooster2TextObjects1.length = 0;
gdjs.Main_32GameCode.GDBooster2TextObjects2.length = 0;
gdjs.Main_32GameCode.GDBooster2TextObjects3.length = 0;
gdjs.Main_32GameCode.GDBooster1TextObjects1.length = 0;
gdjs.Main_32GameCode.GDBooster1TextObjects2.length = 0;
gdjs.Main_32GameCode.GDBooster1TextObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595sObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595sObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595sObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595cObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595cObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595cObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Second_9595Coast_9595TextObjects3.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects1.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects2.length = 0;
gdjs.Main_32GameCode.GDMoney_9595Click_9595Coast_9595TextObjects3.length = 0;
gdjs.Main_32GameCode.GDNewTextObjects1.length = 0;
gdjs.Main_32GameCode.GDNewTextObjects2.length = 0;
gdjs.Main_32GameCode.GDNewTextObjects3.length = 0;
gdjs.Main_32GameCode.GDNewText2Objects1.length = 0;
gdjs.Main_32GameCode.GDNewText2Objects2.length = 0;
gdjs.Main_32GameCode.GDNewText2Objects3.length = 0;
gdjs.Main_32GameCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32GameCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32GameCode.GDNewSprite2Objects3.length = 0;
gdjs.Main_32GameCode.GDNewSprite3Objects1.length = 0;
gdjs.Main_32GameCode.GDNewSprite3Objects2.length = 0;
gdjs.Main_32GameCode.GDNewSprite3Objects3.length = 0;
gdjs.Main_32GameCode.GDAdBannerObjects1.length = 0;
gdjs.Main_32GameCode.GDAdBannerObjects2.length = 0;
gdjs.Main_32GameCode.GDAdBannerObjects3.length = 0;
gdjs.Main_32GameCode.GDcant_9595affordObjects1.length = 0;
gdjs.Main_32GameCode.GDcant_9595affordObjects2.length = 0;
gdjs.Main_32GameCode.GDcant_9595affordObjects3.length = 0;


return;

}

gdjs['Main_32GameCode'] = gdjs.Main_32GameCode;
