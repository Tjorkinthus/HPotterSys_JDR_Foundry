export default class HPotterSys_JDR_FoundryItemSheet extends ItemSheet{
    get template(){
        console.log(`HPotterSys_JDR_Foundry | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/HPotterSys_JDR_Foundry/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();

                console.log(data);

        return data;
    }
}