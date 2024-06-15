ServerEvents.recipes(event =>{
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
          {"item": 'extendedcrafting:the_ultimate_catalyst'},
          {"item": 'kubejs:spatial_circuit'},
          {"item": 'angelring:diamond_ring'},
          {"item": 'extendedcrafting:the_ultimate_ingot'},
          {"item": 'dreadsteel:dreadsteel_ingot'}
        ],
        "energy": 750000000,
        "result": {
          "item": "angelring:energetic_angel_ring"
        }
      }).id('mekaminers:powah_custom/energetic_angel_ring')
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "   AAA   ",
          "BCDAAADCB",
          " BEFGFEB ",
          " BHIJIHB ",
          " BEFKFEB ",
          "BCDAAADCB",
          "   AAA   ",
          "         "
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:crystaltine_ingot"
          },
          "B": {
            "item": "extendedcrafting:elite_catalyst"
          },
          "C": {
            "item": "extendedcrafting:the_ultimate_ingot"
          },
          "D": {
            "item": "extendedcrafting:the_ultimate_catalyst"
          },
          "E": {
            "item": "kubejs:spatial_circuit_component_2"
          },
          "F": {
            "item": "kubejs:spatial_circuit_component_1"
          },
          "G": {
            "item": "allthemodium:soul_lava_bucket"
          },
          "H": {
            "item": "dreadsteel:dreadsteel_ingot"
          },
          "I": {
            "item": "kubejs:spatial_circuit"
          },
          "J": {
            "item": "angelring:energetic_angel_ring"
          },
          "K": {
            "item": "mysticalagradditions:molten_imperium_bucket"
          }
        },
        "result": {
          "item": 'angelring:leadstone_angel_ring'
        }
      })
      event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          "         ",
          "         ",
          "  ABCBA  ",
          "  BADAB  ",
          "  EFGFE  ",
          "  BADAB  ",
          "  ABCBA  ",
          "         ",
          "         "
        ],
        "key": {
          "A": {
            "item": "minecraft:nether_star"
          },
          "B": {
            "item": "mekamod:meka_ingot"
          },
          "C": {
            "item": "mysticalagradditions:insanium_ingot"
          },
          "D": {
            "item": "aeinfinitybooster:infinity_card"
          },
          "E": {
            "item": "kubejs:spatial_circuit"
          },
          "F": {
            "item": "industrialforegoing:machine_frame_supreme"
          },
          "G": {
            "item": "extendedcrafting:ultimate_singularity"
          }
        },
        "result": {
          "item": "aeinfinitybooster:dimension_card"
        }
      }).id('mekaminers:create_fase_wireless/dimension_card')
      event.remove({output:"industrialforegoing:infinity_trident"})
      event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": 'allthemodium:unobtainium_block'
          },
          {
            "item": "minecraft:trident"
          },
          {
            "item": 'allthemodium:allthemodium_block'
          },
          {
            "item": 'allthemodium:unobtainium_hoe'
          },
          {
            "item": "industrialforegoing:range_addon11"
          },
          {
            "item": 'allthemodium:unobtainium_gear'
          },
          {
            "item": 'allthemodium:vibranium_gear'
          },
          {
            "item": 'allthemodium:allthemodium_gear'
          }
        ],
        "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
          "count": 1,
          "item": "industrialforegoing:infinity_trident",
          "nbt": "{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Loyalty:0,Riptide:0,Selected:\"POOR\",Special:0b}"
        },
        "processingTime": 4000
      }).id('mekaminers:create_fase_infinity_tools/infinity_trident')
      event.remove({output:[
        "constructionwand:infinity_wand",
        "constructionwand:infinity_wand"
      ]})
      event.custom({
        "type": "create:mechanical_crafting",
        "pattern": [
          "         ",
          "      A  ",
          "     BCB ",
          "     DA  ",
          "    D    ",
          "   D     ",
          "         ",
          "         ",
          "         "
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:ender_star"
          },
          "B": {
            "item": "extendedcrafting:flux_star"
          },
          "C": {
            "item": "minecraft:nether_star"
          },
          "D": {
            "item": "mysticalagradditions:insanium_ingot"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "constructionwand:infinity_wand",
          "count": 1,
          "nbt": "{wand_options:{}}"
        }
      }).id('mekaminers:create_fase_infinity_tools/infinity_wand')
      event.remove({output:"industrialforegoing:infinity_drill"})
      event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": 'allthemodium:allthemodium_block'
          },
          {
            "item": 'allthemodium:unobtainium_shovel'
          },
          {
            "item": 'allthemodium:unobtainium_block'
          },
          {
            "item": 'allthemodium:unobtainium_pickaxe'
          },
          {
            "item": "industrialforegoing:range_addon11"
          },
          {
            "item": 'allthemodium:unobtainium_gear'
          },
          {
            "item": 'allthemodium:vibranium_gear'
          },
          {
            "item": 'allthemodium:allthemodium_gear'
          }
        ],
        "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
          "count": 1,
          "item": "industrialforegoing:infinity_drill",
          "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
        },
        "processingTime": 4000
      }).id('mekaminers:create_fase_infinity_tools/infinity_drill')
      event.remove({output: "industrialforegoing:infinity_saw"})
      event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": 'allthemodium:unobtainium_block'
          },
          {
            "item": 'allthemodium:unobtainium_pickaxe'
          },
          {
            "item": 'allthemodium:unobtainium_axe'
          },
          {
            "item": 'allthemodium:allthemodium_block'
          },
          {
            "item": "industrialforegoing:range_addon11"
          },
          {
            "item": 'allthemodium:unobtainium_gear'
          },
          {
            "item": 'allthemodium:vibranium_gear'
          },
          {
            "item": 'allthemodium:allthemodium_gear'
          }
        ],
        "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
          "count": 1,
          "item": "industrialforegoing:infinity_saw",
          "nbt": "{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
        },
        "processingTime": 4000
      }).id('mekaminers:create_fase_infinity_tools/infinity_saw')
      event.remove({output:"industrialforegoing:infinity_hammer"})
      event.custom({
        "type": "industrialforegoing:dissolution_chamber",
        "input": [
          {
            "item": 'allthemodium:unobtainium_block'
          },
          {
            "item": 'allthemodium:unobtainium_sword'
          },
          {
            "item": 'allthemodium:allthemodium_block'
          },
          {
            "item": 'allthemodium:unobtainium_axe'
          },
          {
            "item": "industrialforegoing:range_addon11"
          },
          {
            "item": 'allthemodium:unobtainium_gear'
          },
          {
            "item": 'allthemodium:vibranium_gear'
          },
          {
            "item": 'allthemodium:allthemodium_gear'
          }
        ],
        "inputFluid": "{Amount:8000,FluidName:\"industrialforegoing:pink_slime\"}",
        "output": {
          "count": 1,
          "item": "industrialforegoing:infinity_hammer",
          "nbt": "{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:\"biofuel\"},Selected:\"POOR\",Special:0b}"
        },
        "processingTime": 4000
      }).id('mekaminers:create_fase_infinity_tools/infinity_hammer')
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "A       A",
          "AA     AA",
          " AA   AA ",
          "  AABAA  ",
          " AA   AA ",
          "AA     AA",
          "A       A",
          "         "
        ],
        "key": {
          "A": {
            "item": "minecraft:blue_concrete"
          },
          "B": {
            "item": "angelring:energetic_angel_ring"
          }
        },
        "result": {
          "item": 'angelring:leadstone_angel_ring'
        }
      }).id('mekaminers:flight/leadstone_angel_ring')
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "         ",
          "A       A",
          "AA     AA",
          " AA   AA ",
          "  AABAA  ",
          " AA   AA ",
          "AA     AA",
          "A       A",
          "         "
        ],
        "key": {
          "A": {
            "item": "minecraft:cyan_terracotta"
          },
          "B": {
            "item": "angelring:leadstone_angel_ring"
          }
        },
        "result": {
          "item": 'angelring:hardened_angel_ring'
        }
      }).id('mekaminers:flight/hardened_angel_ring')
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "A       A",
          "AA     AA",
          " AA   AA ",
          "  AA AA  ",
          "   ABA   ",
          "  AA AA  ",
          " AA   AA ",
          "AA     AA",
          "A       A"
        ],
        "key": {
          "A": {
            "item": "minecraft:yellow_terracotta"
          },
          "B": {
            "item": "angelring:hardened_angel_ring"
          }
        },
        "result": {
          "item": 'angelring:reinforced_angel_ring'
        }
      }).id('mekaminers:flight/reinforced_angel_ring')
      event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "A       A",
          "AA     AA",
          " AA   AA ",
          "  AABAA  ",
          "  AACAA  ",
          "  AABAA  ",
          " AA   AA ",
          "AA     AA",
          "A       A"
        ],
        "key": {
          "A": {
            "item": "minecraft:cyan_concrete"
          },
          "B": {
            "item": "extendedcrafting:elite_catalyst"
          },
          "C": {
            "item": "angelring:reinforced_angel_ring"
          }
        },
        "result": {
          "item": 'angelring:resonant_angel_ring'
        }
      }).id('mekaminers:flight/resonant_angel_ring')
      event.custom({
        "type": "industrialforegoing:laser_drill_fluid",
        "catalyst": {
          "item": 'industrialforegoing:laser_lens11'
        },
        "entity": "minecraft:empty",
        "output": "{Amount:100,FluidName:\"allthemodium:soul_lava\"}",
        "pointer": 0,
        "rarity": [
          {
            "blacklist": {},
            "depth_max": 40,
            "depth_min": 0,
            "weight": 8,
            "whitelist": {
              "type": "minecraft:worldgen/biome",
              "values": [
                "minecraft:nether_wastes",
                "minecraft:basalt_deltas",
                "minecraft:warped_forest",
                "minecraft:crimson_forest",
                "minecraft:soul_sand_valley"
              ]
            }
          }
        ]
      }).id('mekaminers:molden/soul_lava')
      event.custom({
        "type": "thermal:crucible",
        "ingredient": {
          "item": 'allthemodium:allthemodium_ingot'
        },
        "result": [
          {
            "fluid": "allthemodium:molten_allthemodium",
            "amount": 250
          }
        ],
        "energy": 200000
      }).id('mekaminers:molden/allthemodium')
      event.custom({
        "type": "thermal:crucible",
        "ingredient": {
          "item": 'allthemodium:vibranium_ingot'
        },
        "result": [
          {
            "fluid": "allthemodium:molten_vibranium",
            "amount": 250
          }
        ],
        "energy": 200000
      }).id('mekaminers:molden/vibranium')
      event.custom({
        "type": "thermal:crucible",
        "ingredient": {
          "item": 'allthemodium:unobtainium_ingot'
        },
        "result": [
          {
            "fluid": "allthemodium:molten_unobtainium",
            "amount": 250
          }
        ],
        "energy": 200000
      }).id('mekaminers:molden/unobtainium')
      event.custom({
        "type": "thermal:crucible",
        "ingredient": {
          "item": 'mysticalagriculture:imperium_ingot'
        },
        "result": [
          {
            "fluid": "mysticalagradditions:molten_imperium",
            "amount": 250
          }
        ],
        "energy": 200000
      }).id('mekaminers:molden/imperium')
      event.custom({
        "type": "industrialforegoing:laser_drill_ore",
        "catalyst": {
          "item": "industrialforegoing:laser_lens4"
        },
        "output": {
          "item": "ad_astra_proxima_plus:proxima_b_micyurite_ore"
        },
        "pointer": 0,
        "rarity": [
          {
            "blacklist": {},
            "depth_max": 13,
            "depth_min": -10,
            "weight": 8,
            "whitelist": {
              "type": "ad_astra_proxima_plus:worldgen/biome",
              "values": [
                "ad_astra_proxima_plus:proxima_b_mud_wastes"
              ]
            }
          }
        ]
      }).id('mekaminers:ores/proxima_b_mud_wastes')
      event.custom({
        "type": "industrialforegoing:laser_drill_ore",
        "catalyst": {
          "item": "industrialforegoing:laser_lens4"
        },
        "output": {
          "item": "mekamod:rawmeka"
        },
        "pointer": 0,
        "rarity": [
          {
            "blacklist": {},
            "depth_max": 13,
            "depth_min": -10,
            "weight": 1,
            "whitelist": {
              "type": "ad_astra_proxima_plus:worldgen/biome",
              "values": [
                "ad_astra_proxima_plus:proxima_b_mud_wastes"
              ]
            }
          }
        ]
      }).id('mekaminers:ores/meka_ore')
})