ServerEvents.recipes(event =>{ 
    event.custom(
        {"type":"mekanism:reaction",
        "duration":400,"energyRequired":200,
        "fluidInput":{"amount":2000,
        "fluid":"integrateddynamics:menril_resin"},
        "gasInput":{"amount":100,
        "gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item":"pneumaticcraft:plastic"}},
        "itemOutput":{"count":1,"item":"kubejs:start_mechanism"}}
    ).id('mekaminers:create_fase_1/start_mechanism')

 //Andesite Tier Machines 
//Basin
event.remove({output:'create:basin'})
event.shaped('create:basin', [
    'B B',
    'B B',
    'AAA'
],
{
A: 'kubejs:start_casing',
B: '#forge:ingots/steel',

}
).id('mekaminers:create_fase_1/basin')

//Rolling Mill
event.remove({output:'createaddition:rolling_mill'})
event.shaped('createaddition:rolling_mill', [
    'DCD',
    'BCB',
    'BAB'
],
{ 
    A: 'kubejs:start_casing',
    B: '#forge:ingots/steel',
    C: 'create:shaft',
    D: 'kubejs:start_mechanism'
}).id('mekaminers:create_fase_1/rolling_mill')

//Encased Fan
event.remove({output:'create:encased_fan'})
event.shaped('create:encased_fan', [
    ' B ',
    'CAC',
    ' D '
],
{
  A: 'kubejs:start_casing',
  B: 'create:shaft',
  C: 'kubejs:start_mechanism',
  D: 'create:propeler'
}
).id('mekaminers:create_fase_1/encased_fan')

//Mill stone
event.remove({output:'create:millstone'})
event.shaped('create:millstone', [
    ' C ',
    'ABA',
    ' D '
],
{
A: 'create:propeller',
B: 'kubejs:start_casing',
C: 'create:cogwheel',
D: 'create:shaft'
}).id('mekaminers:create_fase_1/mill_stone')

//Mechanical Mixer
event.remove({output:'create:mechanical_mixer'})
event.shaped('create:mechanical_mixer', [
    ' A ',
    ' B ',
    ' C '
],
{
A: 'create:cogwheel',
B: 'kubejs:start_casing',
C: 'create:whisk'
}).id('mekaminers:create_fase_1/mechanical_mixer')
//Mechanical Press
event.remove({output:'create:mechanical_press'})
event.shaped('create:mechanical_press', [
    ' A ',
    ' B ',
    ' C '
],
{
A: 'create:cogwheel',
B: 'kubejs:start_casing',
C: '#forge:storage_blocks/steel'
}).id('mekaminers:create_fase_1/mechanical_press')

//deployer 
event.remove({output:'create:deployer'})
event.shaped('create:deployer', [
  ' C ',
  ' B ',
  ' A '
  
],{ 
  A: 'create:brass_hand',
  B: 'kubejs:start_casing',
  C: 'create:shaft'
}).id('mekaminers:create_fase_1/deployer')

//Bronze Mechanical Hand
event.remove({output:'create:brass_hand'})
event.shaped('create:brass_hand', [
  ' B ',
  'AAA',
  ' A '
],{ 
  A: '#forge:plates/bronze',
  B: 'kubejs:start_mechanism'
}).id('mekaminers:create_fase_1/bronze_mechanical_hand')

//start casing
event.custom(
    {
        "type": "create:item_application",
        "ingredients": [
          {
            "item": "create:andesite_casing"
          },
          {
            "item": "kubejs:start_mechanism"
          }
        ],
        "results": [
          {
            "item": "kubejs:start_casing"
          }
        ]
      }
).id('mekaminers:create_fase_1/start_casing')

//Copper Casing
event.remove({output:'create:copper_casing'})
event.custom(
    {
        "type": "create:item_application",
        "ingredients": [
          {
            "item": "kubejs:start_casing"
          },
          {
            "tag": "forge:plates/copper"
          }
        ],
        "results": [
          {
            "item": "create:copper_casing"
          }
        ]
      }
).id('mekaminers:create_fase_1/copper_casing')

//Mechanical Roller
event.remove({output:'create:mechanical_roller'})
event.shaped('create:mechanical_roller', [
  ' A ',
  ' B ',
  ' C '
],{
  A:'create:electron_tube',
  B:'kubejs:start_casing',
  C:'create:crushing_wheel'
}).id('mekaminers:create_fase_1/mechanical_roller')

//contraption controls
event.remove({output:'create:contraption_controls'})
event.shaped('create:contraption_controls', [ 
  ' A ',
  ' B ',
  ' C '
], { 
  A: '#minecraft:buttons',
  B: 'kubejs:start_casing',
  C: 'create:electron_tube'
}).id('mekaminers:create_fase_1/contraption_controls')

//Replacing Andesite Casings 
let ACR = (output, input1, input2, input3) => {
event.remove({output: output})
event.shaped(output, [ 
  ' A ',
  ' B ',
  ' C '
], { 
  A: input1,
  B: input2,
  C: input3
})
}//Finalizou o callback ACR

ACR('create:clutch', 'create:shaft', 'kubejs:start_casing', 'minecraft:redstone')
ACR('create:gearshift', 'create:cogwheel', 'kubejs:start_casing', 'minecraft:redstone')
ACR('create:mechanical_piston', '#minecraft:slabs', 'kubejs:start_casing', 'create:piston_extension_pole')
ACR('create:encased_chain_drive', '#forge:nuggets/iron', 'kubejs:start_casing', '#forge:nuggets/iron')
ACR('create:cuckoo_clock', '#minecraft:planks', 'kubejs:start_casing', 'minecraft:clock')
ACR('create:mechanical_bearing', '#minecraft:slabs', 'kubejs:start_casing', 'create:shaft')
ACR('create:portable_storage_interface', 'create:chute', 'kubejs:start_casing')
ACR('create:speedometer', 'minecraft:compass', 'kubejs:start_casing')
ACR('create:depot', 'create:andesite_alloy', 'kubejs:start_casing')
ACR('create:gantry_carriage', '#minecraft:slabs', 'kubejs:start_casing', 'create:cogwheel')
ACR('create:rope_pulley', 'kubejs:start_casing','#minecraft:wool', '#forge:plates/iron')
//Mechanical Saw e Mechanical Drill
let ACR2 = (output, input1, input2, input3) => {
event.remove({output: output})
event.shaped(output, [ 
  ' A ',
  'ABA',
  ' C '
],{ 
  A: input1,
  B: input2,
  C: input3
})
}
ACR2('create:mechanical_drill', 'create:andesite_alloy', '#forge:ingots/iron', 'kubejs:start_casing')
ACR2('create:mechanical_saw', '#forge:plates/iron', '#forge:ingots/iron', 'kubejs:start_casing')
//Gearbox
event.remove({output:'create:gearbox'})
event.shaped('create:gearbox', [ 
  ' A ',
  'ABA',
  ' A '
],{ 
A: 'create:cogwheel',
B: 'kubejs:start_casing'
}).id('mekaminers:create_fase_1/gearbox')
//Mechanical Plough
event.remove({output:'create:mechanical_plough'})
event.shaped('create:mechanical_plough', [
  'AAA',
  'BBB',
  ' C '
],{ 
  A: '#forge:plates/iron', 
  B: 'create:andesite_alloy',
  C: 'kubejs:start_casing'
}).id('mekaminers:create_fase_1/mechanical_plough')

//Mechanical Harvester
event.remove({output:'create:mechanical_harvester'})
event.shaped('create:mechanical_harvester', [ 
  'ABA',
  'ABA',
  ' C '
], { 
  A: 'create:andesite_alloy',
  B: '#forge:plates/iron',
  C: 'kubejs:start_casing'
}).id('mekaminers:create_fase_1/mechanical_harvester')

//Started Mechanism Fragment 1
//Polonium Dust
event.custom( 
  {
    "type": "create:milling",
    "ingredients": [
      {
        "item": "mekanism:pellet_polonium"
      }
    ],
    "processingTime": 50,
    "results": [
      {
        "count": 1,
        "item": "kubejs:polonium_dust"
      }
    ]
  }
).id('mekaminers:create_fase_1/polonium_dust')

//Polonium Rod
event.custom(
  {
    "type":"createaddition:rolling",
    "input": {
          "item": "kubejs:polonium_dust"
    },
    "result": {
      "item": "kubejs:polonium_rod",
    },
  }
).id('mekaminers:create_fase_1/polonium_rod')

//Chocolate Rod
event.custom(
  {
    "type": "create:filling",
    "ingredients": [
      {
        "item": "kubejs:polonium_rod"
      },
      {
        "amount": 250,
        "fluid": "create:chocolate",
        "nbt": {}
      }
    ],
    "results": [
      {
        "item": "kubejs:chocolate_rod"
      }
    ]
  }
).id('mekaminers:create_fase_1/chocolate_rod')

//Hydrogened Chocolate Rod
event.custom( 
  {
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "kubejs:chocolate_rod"
      },
      {
        "amount": 1000,
        "fluid": "mekanism:flowing_hydrogen",
      }
    ],
    "results": [
      {
        "item": "kubejs:hydrogened_chocolate_rod"
      }
    ]
  }
).id('mekaminers:create_fase_1/hydrogen_chocalte_rod')

//Started Mechanism Component 1
event.custom( 
  {
    "type": "create:compacting",
    "ingredients": [
      {
        "item": "kubejs:hydrogened_chocolate_rod"
      },
      {
        "item": "ae2:singularity"
      }
    ],
    "results": [
      {
        "item": "kubejs:started_mechanism_component_1"
      }
    ]
  }
).id('mekaminers:create_fase_1/started_mechanism_component_1')

//Charged Quantum Singularity
event.custom(
{
  "type": "ae2:charger",
  "ingredient": {
    "item": "ae2:quantum_entangled_singularity"
  },
  "result": {
    "item": "kubejs:charged_quantum_entangled_singularity"
  }
}
).id('mekaminers:create_fase_1/charged_quantum_entangled_singularity')


//Destabilized Redstone 
event.remove({id: 'thermal:machines/crucible/crucible_redstone_dust'})
event.remove({id: 'thermal:machines/crucible/crucible_redstone_block'})
event.custom( 
  {
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "kubejs:charged_quantum_entangled_singularity"
      },
      {
        "fluid": "bigreactors:blutonium",
        "amount": 300
      }
    ],
    "results": [
      {
        "item": "ae2:quantum_entangled_singularity"
      },
      { 
        "amount": 250,
        "fluid": "thermal:redstone"
      }
    ]
  }
).id('mekaminers:create_fase_1/destabilized_redstone')

//Started Mechanism Fragment 2 
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "powah:steel_energized"
  },
  "loops": 3,
  "results": [
    {
      "item": "kubejs:started_mechanism_component_2"
    }
  ],
  "sequence": [
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }, 
        { 
          "fluid": "thermal:redstone",
          "amount": 500
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        },
          {
            "fluid": "integrateddynamics:liquid_chorus",
            "amount": 500
          }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }, 
        {
          "item": "bloodmagic:blankslate" 
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }, 
        {
          "item": "ae2:engineering_processor" 
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }, 
        {
          "item": "botania:lime_double_flower" 
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism_component_2"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_started_mechanism_component_2"
  }
}).id('mekaminers:create_fase_1/started_mechanism_component_2')

//Started Mechanism Fragment 3
event.custom(
  {
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "mekanism:alloy_infused"
    },
    "loops": 5,
    "results": [
      {
        "item": "kubejs:started_mechanism_component_3"
      }
    ],
    "sequence": [
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          },
          
            {
              "fluid": "industrialforegoing:latex",
              "amount": 250

            }
          
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          },
          
            {
              "item": "ae2:logic_processor"
            }
          
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          },
          {
            "item": "ae2:calculation_processor"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          },
          {
            "item": "createaddition:capacitor"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_3"
          }
        ]
      }
    ],
    "transitionalItem": {
      "item": "kubejs:incomplete_started_mechanism_component_3"
    }
  }
).id('mekaminers:create_fase_1/started_mechanism_component_3')

//Started Mechanism Component 4 
event.custom( 
  {
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "mekanism:advanced_control_circuit"
    },
    "loops": 7,
    "results": [
      {
        "item": "kubejs:started_mechanism_component_4"
      }
    ],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [
           {
            "item": "mekanism:advanced_control_circuit"
          },
          {
            "item": "ae2:engineering_processor"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          },
          {
            "item": "mekanism:ultimate_control_circuit"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          },
          {
            "fluid": "industrialforegoing:latex",
            "amount": 100
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          },
          {
            "item": "ae2:sky_stone_block"
          }
        
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          }
        ]
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          },
          {
            "item": "extendedcrafting:redstone_ingot"
          }
        ],
        "results": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          }
        ]
      },
      {
        "type": "create:filling",
        "ingredients": [
          {
            "item": "kubejs:incomplete_started_mechanism_component_4"
          },
          {
            "fluid": "thermal:ender",
            "amount": 100
          }
        ],
        "results": [
          {
            "item": "kubejs:started_mechanism_component_4"
          }
        ]
      },
    ],
    "transitionalItem": {
      "item": "kubejs:incomplete_started_mechanism_component_4"
    }
  }).id('mekaminers:create_fase_1/started_mechanism_component_4')

//Started Mechanism Assembly
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "kubejs:start_mechanism"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:started_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:start_mechanism"
        },
        {
          "item": "kubejs:started_mechanism_component_1"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        },
        {
          "item": "kubejs:started_mechanism_component_2"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        },
        {
          "item": "kubejs:started_mechanism_component_3"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        },
        {
          "item": "kubejs:started_mechanism_component_4"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_started_mechanism"
        },
        {
          "fluid": "mekanismgenerators:flowing_deuterium",
          "amount": 500
        }
      ],
      "results": [
        {
          "item": "kubejs:started_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_started_mechanism"
  }
}).id('mekaminers:create_fase_1/started_mechanism_assembly')

//Fase 2 
//Started Casing
event.custom(
  {
      "type": "create:item_application",
      "ingredients": [
        {
          "item": "kubejs:start_casing"
        },
        {
          "item": "kubejs:started_mechanism"
        }
      ],
      "results": [
        {
          "item": "kubejs:started_casing"
        }
      ]
    }
).id('mekaminers:create_fase_2/started_casing')

//Brass Casing
event.remove({output: 'create:brass_casing'})
event.custom(
  {
      "type": "create:item_application",
      "ingredients": [
        {
          "item": "kubejs:started_casing"
        },
        {
          "tag": "forge:plates/brass"
        }
      ],
      "results": [
        {
          "item": "create:brass_casing"
        }
      ]
    }
).id('mekaminers:create_fase_2/brass_casing')

//Crushing Wheel
event.remove({output: 'create:crushing_wheel'})
event.custom({
  "type": "create:mechanical_crafting",
  "acceptMirrored": false,
  "key": {
    "A": {
      "item": "minecraft:andesite"
    },
    "B": {
      "item": "ae2:singularity"
    },
    "C": {
      "item": "kubejs:started_mechanism"
    },
    "D": {
      "item": "allthemodium:vibranium_ingot"
    },
    "E": {
      "item": "allthemodium:unobtainium_ingot"
    }
  },
  "pattern": [
    " AAA ",
    "AEBDA",
    "ABCBA",
    "ADBEA",
    " AAA "
  ],
  "result": {
    "count": 2,
    "item": "create:crushing_wheel"
  }
}).id('mekaminers:create_fase_2/crushing_wheel')
//Empty Blaze Burner
event.remove({output:'create:empty_blaze_burner'})
event.shaped('create:empty_blaze_burner', [
  'AAA',
  'BCB',
  ' D '
], { 
  A: 'minecraft:iron_bars',
  B: '#immersiveengineering:scaffoldings/steel',
  C: '#forge:netherrack',
  D: 'create:brass_casing'
}).id('mekaminers:create_fase_2/empty_blaze_burner')

//Tesla Coil
event.remove({output: 'createaddition:tesla_coil'})
event.shaped('createaddition:tesla_coil', [ 
  'ABA',
  'CDC',
  ' E '
], { 
  A: 'createaddition:copper_spool',
  B: 'immersiveengineering:toolupgrade_revolver_electro',
  C: 'createaddition:capacitor',
  D: 'create:electron_tube', 
  E: 'create:brass_casing'
}).id('mekaminers:create_fase_2/tesla_coil')

//Mechanical Crafter
event.remove({output: 'create:mechanical_crafter'})
event.shaped('3x create:mechanical_crafter', [ 
  'ABA',
  ' C ',
  'DED'
], { 
  A: 'create:electron_tube', 
  B: 'createaddition:capacitor',
  C: 'create:brass_casing',
  D: 'createaddition:copper_spool',
  E: 'thermal:machine_crafter'
}).id('mekaminers:create_fase_2/mechanical_crafter')
//Stone Cutter Recipes
const output = [
'create:smart_fluid_pipe', 
'create:smart_chute',
'create:content_observer',
'create:brass_funnel',
'create:brass_tunnel',
'create:andesite_funnel',
'create:andesite_tunnel',
'create:chute'
]
output.forEach(OUTPUT => {
event.remove({output: OUTPUT})
})

//Brass itens from casing stonecutting
event.stonecutting('create:content_observer', 'create:brass_casing').id(`mekaminers:create_fase_2/content_observer`)
event.stonecutting('2x create:brass_funnel', 'create:brass_casing').id(`mekaminers:create_fase_2/brass_funnel`)
event.stonecutting('2x create:brass_tunnel', 'create:brass_casing').id(`mekaminers:create_fase_2/brass_tunnel`)
event.stonecutting('2x create:smart_chute', 'create:brass_casing').id(`mekaminers:create_fase_2/smart_chute`)
event.stonecutting('2x create:smart_fluid_pipe', 'create:brass_casing').id(`mekaminers:create_fase_2/smart_fluid_pipe`)
//Andesite itens from casing stonecutting
event.stonecutting('2x create:andesite_funnel', 'kubejs:start_casing',).id(`mekaminers:create_fase_1/andesite_funnel`)
event.stonecutting('2x create:andesite_tunnel', 'kubejs:start_casing').id(`mekaminers:create_fase_1/andesite_tunnel`)
event.stonecutting('2x create:chute', 'kubejs:start_casing').id(`mekaminers:create_fase_1/chute`)
//Start Mechanism Alternative Recipe
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "mekanism:hdpe_sheet"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:start_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_start_mechanism"
        },
        [
          {
            "item": "kubejs:polonium_rod"
          }
        ]
      ],
      "results": [
        {
          "item": "kubejs:incomplete_start_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_start_mechanism"
        },
        [
          {
            "item": "powah:crystal_blazing"
          }
        ]
      ],
      "results": [
        {
          "item": "kubejs:incomplete_start_mechanism"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_start_mechanism"
        },
        { 
          "fluid": "thermal:redstone",
          "amount": 100
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_start_mechanism"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_start_mechanism"
        },
        { 
          "fluid": "integrateddynamics:menril_resin",
          "amount": 100
        }
      ],
      "results": [
        {
          "item": "kubejs:start_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_start_mechanism"
  }
})

//Will Crystal Loop

//Raw
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "bloodmagic:defaultcrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ],
  "results": [
    {
      "item": "bloodmagic:rawdemoncrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ]
}).id('mekaminers:create_fase_2/will_crystal_loop_raw')

//Corrosive
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "bloodmagic:corrosivecrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ],
  "results": [
    {
      "item": "bloodmagic:corrosivedemoncrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ]
}).id('mekaminers:create_fase_2/will_crystal_loop_corrosive')

//Destructive
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "bloodmagic:destructivecrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ],
  "results": [
    {
      "item": "bloodmagic:destructivedemoncrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ]
}).id('mekaminers:create_fase_2/will_crystal_loop_destructive')

//Vengeful
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "bloodmagic:vengefulcrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ],
  "results": [
    {
      "item": "bloodmagic:vengefuldemoncrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ]
}).id('mekaminers:create_fase_2/will_crystal_loop_vengeful')

//SteadFast
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "bloodmagic:steadfastcrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ],
  "results": [
    {
      "item": "bloodmagic:steadfastdemoncrystal"
    },
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 150
    }
  ]
}).id('mekaminers:create_fase_2/will_crystal_loop_steadfast')

//Breaking DemonCrystals
  //Breaking DemonCrystal Raw
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": `bloodmagic:rawdemoncrystal`
      }
    ],
    "processingTime": 50,
    "results": [
      {
        "count": 2,
        "item": `bloodmagic:defaultcrystal`
      }
    ]
  }).id('mekaminers:create_fase_2/will_crystal_loop_raw_breaking')
  
  //Breaking DemonCrystal Corrosive
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": `bloodmagic:corrosivedemoncrystal`
      }
    ],
    "processingTime": 50,
    "results": [
      {
        "count": 2,
        "item": `bloodmagic:corrosivecrystal`
      }
    ]
  }).id('mekaminers:create_fase_2/will_crystal_loop_corrosive_breaking')

  //Breaking DemonCrystal Destructive
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": `bloodmagic:destructivedemoncrystal`
      }
    ],
    "processingTime": 50,
    "results": [
      {
        "count": 2,
        "item": `bloodmagic:destructivecrystal`
      }
    ]
  }).id('mekaminers:create_fase_2/will_crystal_loop_destructive_breaking')

  //Breaking DemonCrystal Vengeful
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": `bloodmagic:vengefuldemoncrystal`
      }
    ],
    "processingTime": 50,
    "results": [
      {
        "count": 2,
        "item": `bloodmagic:vengefulcrystal`
      }
    ]
  }).id('mekaminers:create_fase_2/will_crystal_loop_vengeful_breaking')

  //Breaking DemonCrystal Raw
  event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": `bloodmagic:steadfastdemoncrystal`
      }
    ],
    "processingTime": 50,
    "results": [
      {
        "count": 2,
        "item": `bloodmagic:steadfastcrystal`
      }
    ]
  }).id('mekaminers:create_fase_2/will_crystal_loop_steadfast_breaking')


//Initiating Mechanism Component 1 
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "mekanism:elite_control_circuit"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:initiating_mechanism_component_1"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_1"
        },
          {
            "item": "ae2:quantum_entangled_singularity"
          }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_1"
        },
        
          {
            "item": "ae2:matter_ball"
          }
        
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_1"
        },
        
          {
            "item": "refinedstorage:basic_processor"
          }
        
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_1"
        },
        
          {
            "fluid": "mekanismgenerators:tritium",
            "amount": 125
          }
        
      ],
      "results": [
        {
          "item": "kubejs:initiating_mechanism_component_1"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_initiating_mechanism_component_1"
  }
}).id('mekaminers:create_fase_2/initiating_mechanism_component_1')

//Initiating Mechanism Component 2
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "tag": "forge:plates/diamond"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:initiating_mechanism_component_2"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "tag": "forge:plates/diamond"
        },
          {
            "item": "powah:charged_snowball"
          }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_2"
        },
        
          {
            "item": "allthemodium:piglich_heart"
          }
         
        
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_2"
        },
        {
          "item": "refinedstorage:improved_processor"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism_component_2"
        },
        {
          "fluid": "mekanismgenerators:tritium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:initiating_mechanism_component_2"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_initiating_mechanism_component_2"
  }
}).id('mekaminers:create_fase_2/initiating_mechanism_fragment_2')

//Initiating Mechanism
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "kubejs:started_mechanism"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:initiating_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:started_mechanism"
        },
        
          {
            "item": "kubejs:initiating_mechanism_component_1"
          }
        
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism"
        },
        
          {
            "item": "kubejs:initiating_mechanism_component_2"
          }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiating_mechanism"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiating_mechanism"
        }
      ],
      "results": [
        {
          "item": "kubejs:initiating_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_initiating_mechanism"
  }
}).id('mekaminers:create_fase_2/initiating_mechanism_assembly')

//Piglich Heart
event.custom({
  "type": "occultism:spirit_fire",
  "ingredient": {
    "item": "deeperdarker:heart_of_the_deep"
  },
  "result": {
    "item": "allthemodium:piglich_heart"
  }
}).id('mekaminers:create_fase_2/piglich_heart')

//Liquid Dragons Breath
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "botania:dragonstone"
    },
    {
      "item": "minecraft:dragon_breath"
    },
    {
      "amount": 500,
      "fluid": "mekanism:ethene",
      "nbt": {}
    }
  ],
  "results": [
    {
      "fluid": "kubejs:liquid_dragon_breath",
      "amount": 500
    },
    {
      "item": "minecraft:dragon_breath"
    },
    {
      "item": "botania:dragonstone"
    }
  ]
}).id('mekaminers:create_fase_2/liquid_dragon_breath')

//Inicio Fase 3 
  //Progressão de Quartzos do botania
//Smokey Quartz
event.remove({id:'botania:quartz_dark'})
event.smelting('botania:quartz_dark', 'minecraft:quartz')

//Mana Quartz
event.remove({id:'botania:mana_infusion/mana_quartz'})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "botania:quartz_dark"
  },
  "mana": 250,
  "output": {
    "item": "botania:quartz_mana"
  }
}).id('mekaminers:create_fase_3/smokey_quartz')

//Red Quartz
event.remove({id:'botania:quartz_red'})
event.custom({
"type":"mekanism:painting",
"chemicalInput":{"amount":256,"pigment":"mekanism:red"},
"itemInput":{"ingredient":{"item":"botania:quartz_mana"}},
"output":{"item":"botania:quartz_red"
}}).id('mekaminers:create_fase_3/red_quartz')
//Blaze Quartz
event.remove({id:'botania:quartz_blaze'})

//Blaze Liquido
event.custom({
  "type": "thermal:crucible",
  "ingredient": {
    "item": "botania:blaze_block"
  },
  "result": [
    {
      "fluid": "gtceu:blaze",
      "amount": 1000
    }
  ],
  "energy": 20000
}).id('mekaminers:create_fase_3/liquid_blaze')

//Blaze Quartz 
event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "botania:quartz_red"
    },
    {
      "fluid": "gtceu:blaze",
      "amount": 100
    }
  ],
  "result": [
    {
      "item": "botania:quartz_blaze"
    }
  ]
}).id('mekaminers:create_fase_3/blaze_quartz')

//Sunny Quartz
event.remove({id: 'botania:quartz_sunny'})
event.custom({
  "type": "create:item_application",
  "ingredients": [
    {
      "item": "botania:teru_teru_bozu"
    },
    {
      "item": "botania:quartz_blaze"
    }
  ],
  "results": [
    {
      "item": "botania:quartz_sunny"
    }
  ]
}).id('mekaminers:create_fase_3/sunny_quartz')

//Elven Quartz
event.remove({id:'botania:elven_trade/elf_quartz'})
event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:terrasteel_nugget"
    }
  ],
  "output": [
    {
      "item": "botania:quartz_elven"
    }
  ]
}).id('mekaminers:create_fase_3/elven_quartz')

//lavender Quartz
event.remove({id: 'thermal:machines/insolator/insolator_peony'})
event.remove({id: 'botania:quartz_lavender'})
event.custom({
  "type": "botania:runic_altar",
  "ingredients": [
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "botania:quartz_sunny"
    },
    {
      "item": "minecraft:peony"
    }
  ],
  "mana": 15000,
  "output": {
    "count": 12,
    "item": "botania:quartz_lavender"
  }
}).id('mekaminers:create_fase_3/lavender_quartz')

//Initiated Mechanism component 1
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "botania:quartz_lavender"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:initiated_mechanism_component_1"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "botania:quartz_lavender"
        },
        { 
          "item": "botania:rune_mana"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_1"
        },
        { 
          "item": "botania:terrasteel_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_1"
        },
        { 
          "item": "botania:light_relay"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_1"
        },
        { 
          "fluid": "mekanismgenerators:fusion_fuel",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:initiated_mechanism_component_1"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_initiated_mechanism_component_1"
  }
}).id('mekaminers:create_fase_3/initiated_mechanism_component_1')

//Initiated Mechanism component 2
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "botania:quartz_lavender"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:initiated_mechanism_component_2"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "botania:quartz_lavender"
        },
        {
          "item": "botania:dragonstone"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_2"
        },
        {
          "item": "botania:rune_water"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_2"
        },
        {
          "item": "botania:gaia_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism_component_2"
        },
        { 
          "fluid": "mekanismgenerators:fusion_fuel",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:initiated_mechanism_component_2"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_initiated_mechanism_component_2"
  }
}).id('mekaminers:create_fase_3/initiated_mechanism_component_2')

//Initiated Mechanism Assembly
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "kubejs:initiating_mechanism"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:initiated_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:initiating_mechanism"
        },
      {
        "item": "kubejs:initiated_mechanism_component_1"
      }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism"
        },
      {
        "item": "kubejs:initiated_mechanism_component_2"
      }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_initiated_mechanism"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:incomplete_initiated_mechanism"
        }
      ],
      "results": [
        {
          "item": "kubejs:initiated_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_initiated_mechanism"
  }
}).id('mekaminers:create_fase_3/initiated_mechanism_assembly')
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "minecraft:glowstone_dust"
  },
  "loops": 1,
  "results": [
    {
      "item": "allthemodium:vibranium_allthemodium_alloy_dust"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:glowstone_dust"
        },
        { 
          "item": "allthemodium:allthemodium_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        },
        { 
          "fluid": "allthemodium:molten_allthemodium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        },
        { 
          "item": "allthemodium:vibranium_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        },
        { 
          "fluid": "allthemodium:molten_vibranium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
        }
      ],
      "results": [
        {
          "item": "allthemodium:vibranium_allthemodium_alloy_dust"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_vibranium_allthemodium_alloy_dust"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "minecraft:gunpowder"
  },
  "loops": 1,
  "results": [
    {
      "item": "allthemodium:unobtainium_allthemodium_alloy_dust"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:gunpowder"
        },
        { 
          "item": "allthemodium:allthemodium_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        },
        { 
          "fluid": "allthemodium:molten_allthemodium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        },
        { 
          "item": "allthemodium:unobtainium_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        },
        { 
          "fluid": "allthemodium:molten_unobtainium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
        }
      ],
      "results": [
        {
          "item": "allthemodium:unobtainium_allthemodium_alloy_dust"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_unobtainium_allthemodium_alloy_dust"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "minecraft:gunpowder"
  },
  "loops": 1,
  "results": [
    {
      "item": "allthemodium:unobtainium_vibranium_alloy_dust"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "minecraft:gunpowder"
        },
        { 
          "item": "allthemodium:vibranium_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        },
        { 
          "fluid": "allthemodium:molten_vibranium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        },
        { 
          "item": "allthemodium:unobtainium_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        },
        { 
          "fluid": "allthemodium:molten_unobtainium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
        }
      ],
      "results": [
        {
          "item": "allthemodium:unobtainium_vibranium_alloy_dust"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_unobtainium_vibranium_alloy_dust"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "alltheores:brass_ingot"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:precision_mechanism_component_2"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "alltheores:brass_ingot"
        },
        { 
          "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "incomplete_precision_mechanism_component_2"
        },
        { 
          "item": "extendedcrafting:crystaltine_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_2"
        },
        { 
          "item": "botania:gaia_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_2"
        },
        { 
          "item": "extendedcrafting:crystaltine_catalyst"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_2"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_2"
        },
        { 
          "fluid": "allthemodium:molten_allthemodium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:precision_mechanism_component_2"
        }
      ]
    },
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_precision_mechanism_component_2"
  }
})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "alltheores:brass_ingot"
  },
  "loops": 1,
  "results": [
    {
      "item": "kubejs:precision_mechanism_component_1"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "alltheores:brass_ingot"
        },
        { 
          "item": "extendedcrafting:crystaltine_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_1"
        },
        { 
          "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_golden_sheet"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_1"
        },
        { 
          "item": "bloodmagic:reinforcedslate"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_1"
        },
        { 
          "item": "extendedcrafting:crystaltine_catalyst"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_1"
        }
      ]
    },
    {
      "type": "create:filling",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism_component_1"
        },
        { 
          "fluid": "allthemodium:molten_allthemodium",
          "amount": 150
        }
      ],
      "results": [
        {
          "item": "kubejs:precision_mechanism_component_1"
        }
      ]
    },
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_precision_mechanism_component_1"
  }
})
event.remove({output:"create:sequenced_assembly/precision_mechanism"})
event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": {
    "item": "kubejs:initiated_mechanism"
  },
  "loops": 1,
  "results": [
    {
      "item": "create:precision_mechanism"
    }
  ],
  "sequence": [
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:initiated_mechanism"
        },
        { 
          "item": "kubejs:precision_mechanism_component_1"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:deploying",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism"
        },
        { 
          "item": "kubejs:precision_mechanism_component_2"
        }
      ],
      "results": [
        {
          "item": "kubejs:incomplete_precision_mechanism"
        }
      ]
    },
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "kubejs:incomplete_precision_mechanism"
        }
      ],
      "results": [
        {
          "item": "create:precision_mechanism"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "kubejs:incomplete_precision_mechanism"
  }
})
})
