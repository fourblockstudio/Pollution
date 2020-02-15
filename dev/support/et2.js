ModAPI.addAPICallback("ETech",function(api){
    var ETMachine = api.Machine;
    for(var count in BlockID){
        var id = BlockID[count];

        if(ETMachine.isMachine(id)){
            var tile = TileEntity.getPrototype(id);

            // tick
            tile.pollution_tick = tile.tick;
            tile.tick = function(){
                this.pollution_tick();

                if(this.data.isActive){
                    Pollution.addPollution(parseInt(this.x / 16),parseInt(this.z / 16),(this.data.pollution?this.data.pollution:1) * Pollution.getPollutionIntensity());
                }
            }
        }
    }
});