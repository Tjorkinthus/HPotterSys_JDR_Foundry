import HPotterSys_JDR_Foundryitemsheet from "./sheets/HPotterSys_JDR_Foundryitemsheet.js";

Hooks.once("init", () => {
    console.log("HPotterSys_JDR_Foundry | Initialisation du système HP");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("HPotterSys_JDR_Foundry", HPotterSys_JDR_Foundryitemsheet, { makeDefault: true});
})