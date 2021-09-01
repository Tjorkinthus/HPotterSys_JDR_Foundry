import HPotterSys_JDR_FoundryItemSheet from "./sheets/HPotterSys_JDR_FoundryItemSheet.js";

Hooks.once("init", () => {
    console.log("HPotterSys_JDR_Foundry | Initialisation du système HP");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("HPotterSys_JDR_Foundry", HPotterSys_JDR_FoundryItemSheet, { makeDefault: true});
})