Block.createSpecialType({
    base:1,
    opaque:false,
    destroytime:3
},"filter");

// ================================================== 铁过滤器 ================================================== //
IDRegistry.genBlockID("FilterIron");
Block.createBlock("FilterIron",[
    {name:"Iron Filter",texture:[["iron_block",0]],inCreative:true}
],"filter");
FilterModel(BlockID.FilterIron,0);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.FilterIron,count:1,data:0},["aaa","aba","aaa"],["a",265,0,"b",42,0]);
});

TileEntity.registerPrototype(BlockID.FilterIron,{
    tick:function(){
        var x = parseInt(this.x / 16),z = parseInt(this.z / 16),pollution = Pollution.getPollution(x,z);
	    if(pollution >= 16){
            Pollution.setPollution(x,z,pollution - 16);
        }
    }
});


// ================================================== 金过滤器 ================================================== //
IDRegistry.genBlockID("FilterGold");
Block.createBlock("FilterGold",[
    {name:"Gold Filter",texture:[["gold_block",0]],inCreative:true}
],"filter");
FilterModel(BlockID.FilterGold,0);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.FilterGold,count:1,data:0},["aaa","aba","aaa"],["a",266,0,"b",41,0]);
});

TileEntity.registerPrototype(BlockID.FilterGold,{
    tick:function(){
        var x = parseInt(this.x / 16),z = parseInt(this.z / 16),pollution = Pollution.getPollution(x,z);
	    if(pollution >= 32){
            Pollution.setPollution(x,z,pollution - 32);
        }
    }
});


// ================================================== 钻石过滤器 ================================================== //
IDRegistry.genBlockID("FilterDiamond");
Block.createBlock("FilterDiamond",[
    {name:"Diamond Filter",texture:[["diamond_block",0]],inCreative:true}
],"filter");
FilterModel(BlockID.FilterDiamond,0);

Callback.addCallback("PreLoaded",function(){
	Recipes.addShaped({id:BlockID.FilterDiamond,count:1,data:0},["aaa","aba","aaa"],["a",264,0,"b",57,0]);
});

TileEntity.registerPrototype(BlockID.FilterDiamond,{
    tick:function(){
        var x = parseInt(this.x / 16),z = parseInt(this.z / 16),pollution = Pollution.getPollution(x,z);
	    if(pollution >= 64){
            Pollution.setPollution(x,z,pollution - 64);
        }
    }
});