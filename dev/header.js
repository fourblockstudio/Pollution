// 添加玩家效果
Player.addEffect = function(id,level,tick){
    Entity.addEffect(Player.get(),id,level,tick);
}

var Pollution = {
    data:{},

    getPollutionIntensity:function(){
        return __config__.getNumber("pollution_intensity");
    },

    getPollution:function(x,z){
        if(!this.data[x + ":" + z]){this.data[x + ":" + z] = 0;}
        return this.data[x + ":" + z];
    },

    setPollution:function(x,z,data){
        this.data[x + ":" + z] = data;
    },
    
    addPollution:function(x,z,data){
        this.setPollution(x,z,this.getPollution(x,z) + data);
    }
}

// 保存数据
Saver.addSavesScope("Pollution",function read(scope){
	Pollution.data = scope.pollution || {};
},function save(){
	return {
		pollution:Pollution.data
	}
});

// 效果
Callback.addCallback("tick",function(){
	var coords = Player.getPosition(),pollution = Pollution.getPollution(parseInt(coords.x / 16),parseInt(coords.z / 16));
	if(pollution){
        // [挖掘疲劳]Mining Fatigue
        if(pollution >= 16384 * 1){Player.addEffect(4,parseInt(pollution / 16384),60 * 20);}
        // [反胃]Nausea
        if(pollution >= 16384 * 2){Player.addEffect(9,parseInt(pollution / 16384),60 * 20);}
        // [失明]Blindness
        if(pollution >= 16384 * 3){Player.addEffect(15,parseInt(pollution / 16384),60 * 20);}
        // [中毒]Poison
        if(pollution >= 16384 * 4){Player.addEffect(19,parseInt(pollution / 16384),60 * 20);}
    }
});

function FilterModel(id,data){
    var render = new ICRender.Model(),model = BlockRenderer.Model();
    model.addBox(0,0,0,1,0.25,1,id,data);
    model.addBox(0,0.75,0,1,1,1,id,data);
    model.addBox(0.25,0.25,0.25,0.75,0.75,0.75,id,data);
    model.addBox(0.0625,0.25,0.0625,0.1875,0.75,0.1875,id,data);
    model.addBox(0.0625,0.25,0.8125,0.1875,0.75,0.9375,id,data);
    model.addBox(0.8125,0.25,0.0625,0.9375,0.75,0.1875,id,data);
    model.addBox(0.8125,0.25,0.8125,0.9375,0.75,0.9375,id,data);
    render.addEntry(model);
    BlockRenderer.enableCoordMapping(id,data,render);
}