gdjs.SettingsMenuCode = {};
gdjs.SettingsMenuCode.localVariables = [];
gdjs.SettingsMenuCode.GDContinueButtonObjects1= [];
gdjs.SettingsMenuCode.GDContinueButtonObjects2= [];
gdjs.SettingsMenuCode.GDSFX_9595TextObjects1= [];
gdjs.SettingsMenuCode.GDSFX_9595TextObjects2= [];
gdjs.SettingsMenuCode.GDMusicTextObjects1= [];
gdjs.SettingsMenuCode.GDMusicTextObjects2= [];
gdjs.SettingsMenuCode.GDResetButtonObjects1= [];
gdjs.SettingsMenuCode.GDResetButtonObjects2= [];
gdjs.SettingsMenuCode.GDSettingsObjects1= [];
gdjs.SettingsMenuCode.GDSettingsObjects2= [];
gdjs.SettingsMenuCode.GDBackgroundObjects1= [];
gdjs.SettingsMenuCode.GDBackgroundObjects2= [];
gdjs.SettingsMenuCode.GDSoundSliderObjects1= [];
gdjs.SettingsMenuCode.GDSoundSliderObjects2= [];
gdjs.SettingsMenuCode.GDMusicSliderObjects1= [];
gdjs.SettingsMenuCode.GDMusicSliderObjects2= [];
gdjs.SettingsMenuCode.GDNewSpriteObjects1= [];
gdjs.SettingsMenuCode.GDNewSpriteObjects2= [];


gdjs.SettingsMenuCode.mapOfGDgdjs_9546SettingsMenuCode_9546GDResetButtonObjects1Objects = Hashtable.newFrom({"ResetButton": gdjs.SettingsMenuCode.GDResetButtonObjects1});
gdjs.SettingsMenuCode.asyncCallback17939796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SettingsMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ResetCofirmation", false);
}gdjs.SettingsMenuCode.localVariables.length = 0;
}
gdjs.SettingsMenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SettingsMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.SettingsMenuCode.asyncCallback17939796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SettingsMenuCode.mapOfGDgdjs_9546SettingsMenuCode_9546GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.SettingsMenuCode.GDContinueButtonObjects1});
gdjs.SettingsMenuCode.asyncCallback17941516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SettingsMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", false);
}gdjs.SettingsMenuCode.localVariables.length = 0;
}
gdjs.SettingsMenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SettingsMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.SettingsMenuCode.asyncCallback17941516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SettingsMenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.SettingsMenuCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.SettingsMenuCode.GDSoundSliderObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Sound", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}{for(var i = 0, len = gdjs.SettingsMenuCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDSoundSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}{gdjs.evtTools.storage.readNumberFromJSONFile("Storage", "Music", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6));
}{for(var i = 0, len = gdjs.SettingsMenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDMusicSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResetButton"), gdjs.SettingsMenuCode.GDResetButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsMenuCode.mapOfGDgdjs_9546SettingsMenuCode_9546GDResetButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17939108);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "18105-1464287150_vl5wMwZi (2).mp3", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}
{ //Subevents
gdjs.SettingsMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SettingsMenuCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsMenuCode.mapOfGDgdjs_9546SettingsMenuCode_9546GDContinueButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17941156);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "18105-1464287150_vl5wMwZi (2).mp3", false, runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), 1);
}
{ //Subevents
gdjs.SettingsMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.SettingsMenuCode.GDSoundSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsMenuCode.GDSoundSliderObjects1.length;i<l;++i) {
    if ( gdjs.SettingsMenuCode.GDSoundSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsMenuCode.GDSoundSliderObjects1[k] = gdjs.SettingsMenuCode.GDSoundSliderObjects1[i];
        ++k;
    }
}
gdjs.SettingsMenuCode.GDSoundSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsMenuCode.GDSoundSliderObjects1 */
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, (( gdjs.SettingsMenuCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.SettingsMenuCode.GDSoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber((( gdjs.SettingsMenuCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.SettingsMenuCode.GDSoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Sound", (( gdjs.SettingsMenuCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.SettingsMenuCode.GDSoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.SettingsMenuCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsMenuCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.SettingsMenuCode.GDMusicSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsMenuCode.GDMusicSliderObjects1[k] = gdjs.SettingsMenuCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.SettingsMenuCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsMenuCode.GDMusicSliderObjects1 */
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 1, (( gdjs.SettingsMenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.SettingsMenuCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber((( gdjs.SettingsMenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.SettingsMenuCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.storage.writeNumberInJSONFile("Storage", "Music", (( gdjs.SettingsMenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.SettingsMenuCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SettingsMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsMenuCode.GDContinueButtonObjects1.length = 0;
gdjs.SettingsMenuCode.GDContinueButtonObjects2.length = 0;
gdjs.SettingsMenuCode.GDSFX_9595TextObjects1.length = 0;
gdjs.SettingsMenuCode.GDSFX_9595TextObjects2.length = 0;
gdjs.SettingsMenuCode.GDMusicTextObjects1.length = 0;
gdjs.SettingsMenuCode.GDMusicTextObjects2.length = 0;
gdjs.SettingsMenuCode.GDResetButtonObjects1.length = 0;
gdjs.SettingsMenuCode.GDResetButtonObjects2.length = 0;
gdjs.SettingsMenuCode.GDSettingsObjects1.length = 0;
gdjs.SettingsMenuCode.GDSettingsObjects2.length = 0;
gdjs.SettingsMenuCode.GDBackgroundObjects1.length = 0;
gdjs.SettingsMenuCode.GDBackgroundObjects2.length = 0;
gdjs.SettingsMenuCode.GDSoundSliderObjects1.length = 0;
gdjs.SettingsMenuCode.GDSoundSliderObjects2.length = 0;
gdjs.SettingsMenuCode.GDMusicSliderObjects1.length = 0;
gdjs.SettingsMenuCode.GDMusicSliderObjects2.length = 0;
gdjs.SettingsMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsMenuCode.GDNewSpriteObjects2.length = 0;

gdjs.SettingsMenuCode.eventsList2(runtimeScene);
gdjs.SettingsMenuCode.GDContinueButtonObjects1.length = 0;
gdjs.SettingsMenuCode.GDContinueButtonObjects2.length = 0;
gdjs.SettingsMenuCode.GDSFX_9595TextObjects1.length = 0;
gdjs.SettingsMenuCode.GDSFX_9595TextObjects2.length = 0;
gdjs.SettingsMenuCode.GDMusicTextObjects1.length = 0;
gdjs.SettingsMenuCode.GDMusicTextObjects2.length = 0;
gdjs.SettingsMenuCode.GDResetButtonObjects1.length = 0;
gdjs.SettingsMenuCode.GDResetButtonObjects2.length = 0;
gdjs.SettingsMenuCode.GDSettingsObjects1.length = 0;
gdjs.SettingsMenuCode.GDSettingsObjects2.length = 0;
gdjs.SettingsMenuCode.GDBackgroundObjects1.length = 0;
gdjs.SettingsMenuCode.GDBackgroundObjects2.length = 0;
gdjs.SettingsMenuCode.GDSoundSliderObjects1.length = 0;
gdjs.SettingsMenuCode.GDSoundSliderObjects2.length = 0;
gdjs.SettingsMenuCode.GDMusicSliderObjects1.length = 0;
gdjs.SettingsMenuCode.GDMusicSliderObjects2.length = 0;
gdjs.SettingsMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.SettingsMenuCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['SettingsMenuCode'] = gdjs.SettingsMenuCode;
