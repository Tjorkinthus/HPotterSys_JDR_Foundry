export default class HPotterSys_JDR_FoundryActorSheet extends ActorSheet{
    get template(){
        console.log(`HPotterSys_JDR_Foundry | Récupération du fichier html ${this.actor.data.type}-sheet.`);

        return `systems/HPotterSys_JDR_Foundry/templates/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();

        console.log(data);

        return data;
    }
}