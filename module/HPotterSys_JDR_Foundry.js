import HPotterSys_JDR_FoundryItemSheet from "./sheets/HPotterSys_JDR_FoundryItemSheet.js";
import HPotterSys_JDR_FoundryActorSheet from "./sheets/HPotterSys_JDR_FoundryActorSheet.js";

Hooks.once("init", function() {
    console.log("HPotterSys_JDR_Foundry | Initialisation du système HP");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("HPotterSys_JDR_Foundry", HPotterSys_JDR_FoundryItemSheet, {makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("HPotterSys_JDR_Foundry", HPotterSys_JDR_FoundryActorSheet, {makeDefault: true});

   
});