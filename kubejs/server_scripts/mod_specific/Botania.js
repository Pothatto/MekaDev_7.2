ServerEvents.recipes(event =>{ 
    event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "extendedcrafting:ultimate_singularity"},
    "mana": 500000,
    "output": {"amount": 8,"item": "extendedcrafting:the_ultimate_ingot"}
}).id('mekaminers:create_fase_4/the_ultimate_ingot')
//The ultimate ingot
event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "allthemodium:vibranium_allthemodium_alloy_dust"},
    "mana": 100000,
    "output": {"amount": 1,"item": "allthemodium:vibranium_allthemodium_alloy_ingot"}
}).id('mekaminers:create_fase_4/vibranium_allthemodium_alloy_ingot')
//Vibranium ingot
event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "allthemodium:unobtainium_allthemodium_alloy_dust"},
    "mana": 100000,
    "output": {"amount": 1,"item": "allthemodium:unobtainium_allthemodium_alloy_ingot"}
}).id('mekaminers:create_fase_4/unobtainium_allthemodium_alloy_ingot')
//Unobtainium ingot
event.custom(
    {"type": "botania:mana_infusion",
    "input": {"item": "allthemodium:unobtainium_vibranium_alloy_dust"},
    "mana": 100000,
    "output": {"amount": 1,"item": "allthemodium:unobtainium_vibranium_alloy_ingot"}
}).id('mekaminers:create_fase_4/unobtainium_vibranium_alloy_ingot')
//Unobitainium-Vibranium ingot
event.remove({output:"extendedcrafting:ultimate_singularity"})
event.custom(
    {
        "type": "create:mechanical_crafting",
        "pattern": [
          "         ",
          "ABCDEFGHI",
          "JCKCLMMNO",
          "PNCQRQMNS",
          "TNUVWXYNZ",
          "aNMQbQCNc",
          "dNMMeCfCJ",
          "ghijklCAB",
          "         "
        ],
        "key": {
          "A": {
            "item": "allthemodium:unobtainium_crystal"
          },
          "B": {
            "item": "allthemodium:vibranium_crystal"
          },
          "C": {
            "item": "powah:crystal_nitro"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:lapis_lazuli\"}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:emerald\"}"
          },
          "F": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:steel\"}"
          },
          "G": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:redstone\"}"
          },
          "H": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:aluminum\"}"
          },
          "I": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:silver\"}"
          },
          "J": {
            "item": "allthemodium:allthemodium_crystal"
          },
          "K": {
            "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
          },
          "L": {
            "item": "allthemodium:molten_vibranium_bucket"
          },
          "M": {
            "item": "botania:gaia_ingot"
          },
          "N": {
            "item": "powah:crystal_spirited"
          },
          "O": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:tin\"}"
          },
          "P": {
            "item": "bloodmagic:bloodlightsigil"
          },
          "Q": {
            "item": "bloodmagic:weakbloodshard"
          },
          "R": {
            "item": "extendedcrafting:flux_star"
          },
          "S": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:electrum\"}"
          },
          "T": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:invar\"}"
          },
          "U": {
            "item": "allthemodium:molten_allthemodium_bucket"
          },
          "V": {
            "item": "extendedcrafting:enhanced_ender_ingot"
          },
          "W": {
            "item": "extendedcrafting:crystaltine_ingot"
          },
          "X": {
            "item": "extendedcrafting:enhanced_redstone_ingot"
          },
          "Y": {
            "item": "allthemodium:soul_lava_bucket"
          },
          "Z": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:bronze\"}"
          },
          "a": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:glowstone\"}"
          },
          "b": {
            "item": "extendedcrafting:ender_star"
          },
          "c": {
            "item": "bloodmagic:telepositionsigil"
          },
          "d": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:gold\"}"
          },
          "e": {
            "item": "allthemodium:molten_unobtainium_bucket"
          },
          "f": {
            "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
          },
          "g": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:diamond\"}"
          },
          "h": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:platinum\"}"
          },
          "i": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:copper\"}"
          },
          "j": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:iron\"}"
          },
          "k": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:lead\"}"
          },
          "l": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:nickel\"}"
          }
        },
        "result": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      }
).id('mekaminers:create_fase_4/ultimate_singularity')
event.remove({output:
  "extendedcrafting:crystaltine_ingot"
})
event.custom({
  "type": "create:mechanical_crafting",
  "pattern": [
    "         ",
    "ABBBBBBBA",
    "BCDEFGHIB",
    "BJKLMNOPB",
    "QRSTUVWXQ",
    "BYZabcdeB",
    "BfghijklB",
    "ABBBBBBBA",
    "         "
  ],
  "key": {
    "A": {
      "item": "minecraft:light_blue_dye"
    },
    "B": {
      "item": "minecraft:diamond_block"
    },
    "C": {
      "item": "draconicevolution:draconium_ingot"
    },
    "D": {
      "item": "bigreactors:cyanite_ingot"
    },
    "E": {
      "item": "extendedcrafting:ender_ingot"
    },
    "F": {
      "item": "powah:crystal_niotic"
    },
    "G": {
      "item": "mysticalagriculture:inferium_ingot"
    },
    "H": {
      "item": "industrialforegoing:plastic"
    },
    "I": {
      "item": "integrateddynamics:crystalized_menril_chunk"
    },
    "J": {
      "item": "minecraft:netherite_ingot"
    },
    "K": {
      "item": "powah:crystal_spirited"
    },
    "L": {
      "item": "powah:uraninite"
    },
    "M": {
      "item": "extendedcrafting:enhanced_ender_ingot"
    },
    "N": {
      "item": "minecraft:emerald"
    },
    "O": {
      "item": "powah:crystal_nitro"
    },
    "P": {
      "item": "mekanism:ingot_refined_glowstone"
    },
    "Q": {
      "item": "rftoolsbase:infused_diamond"
    },
    "R": {
      "item": "mekanism:ingot_bronze"
    },
    "S": {
      "item": "mekanism:ingot_steel"
    },
    "T": {
      "item": "enderio:end_steel_ingot"
    },
    "U": {
      "item": "bigreactors:graphite_ingot"
    },
    "V": {
      "item": "powah:crystal_blazing"
    },
    "W": {
      "item": "extendedcrafting:black_iron_ingot"
    },
    "X": {
      "item": "mekanism:ingot_refined_obsidian"
    },
    "Y": {
      "item": "mysticalagriculture:prudentium_ingot"
    },
    "Z": {
      "item": "mysticalagriculture:tertium_ingot"
    },
    "a": {
      "item": "extendedcrafting:ender_ingot"
    },
    "b": {
      "item": "industrialforegoing:pink_slime_ingot"
    },
    "c": {
      "item": "extendedcrafting:redstone_ingot"
    },
    "d": {
      "item": "create:andesite_alloy"
    },
    "e": {
      "item": "minecraft:copper_ingot"
    },
    "f": {
      "item": "enderio:copper_alloy_ingot"
    },
    "g": {
      "item": "enderio:energetic_alloy_ingot"
    },
    "h": {
      "item": "enderio:vibrant_alloy_ingot"
    },
    "i": {
      "item": "enderio:redstone_alloy_ingot"
    },
    "j": {
      "item": "minecraft:iron_ingot"
    },
    "k": {
      "item": "enderio:conductive_alloy_ingot"
    },
    "l": {
      "item": "enderio:pulsating_alloy_ingot"
    }
    },
    "result": {
      "item": "extendedcrafting:crystaltine_ingot"
    }
  }
).id('mekaminers:create_creative_fase/crystaltine_ingot')

event.remove({output: "draconicevolution:basic_crafting_injector"})
event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {"item": 'allthemodium:vibranium_allthemodium_alloy_ingot'},
    {"item": 'minecraft:iron_block'},
    {"item": 'mekamod:meka_ingot'},
    {"item": 'draconicevolution:draconium_core'},
    {"item": 'kubejs:start_mechanism'}
  ],
  "energy": 50000000,
  "result": {
    "item": "draconicevolution:basic_crafting_injector"
  }
}).id('mekaminers:draconic_custom/basic_crafting_injector')
event.remove({output:"draconicevolution:wyvern_crafting_injector"})
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:basic_crafting_injector"
  },
  "ingredients": [
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "draconicevolution:draconium_core"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "tag": "forge:storage_blocks/draconium"
    },
    {
      "item": "kubejs:started_mechanism"
    }
  ],
  "result": {
    "item": "draconicevolution:wyvern_crafting_injector"
  },
  "tier": "DRACONIUM",
  "total_energy": 3200000
}).id('mekaminers:draconic_custom/wyvern_crafting_injector')
event.remove({output:"draconicevolution:awakened_crafting_injector"})
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:wyvern_crafting_injector"
  },
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "tag": "forge:storage_blocks/draconium_awakened"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "kubejs:initiating_mechanism"
    }
  ],
  "result": {
    "item": "draconicevolution:awakened_crafting_injector"
  },
  "tier": "WYVERN",
  "total_energy": 9560000
}).id('mekaminers:draconic_custom/awakened_crafting_injector')
event.remove({output:"draconicevolution:chaotic_crafting_injector"})
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:awakened_crafting_injector"
  },
  "ingredients": [
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "kubejs:spatial_circuit_component_1"
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "minecraft:dragon_egg"
    },
    {
      "item": "botania:mana_diamond"
    },
    {
      "item": "botania:mana_diamond"
    }
  ],
  "result": {
    "item": "draconicevolution:chaotic_crafting_injector"
  },
  "tier": "DRACONIC",
  "total_energy": 20000000
}).id('mekaminers:draconic_custom/chaotic_crafting_injector')
event.remove({output:"draconicevolution:celestial_manipulator"})
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:wyvern_core"
  },
  "ingredients": [
    {
      "item": 'minecraft:clock'
    },
    {
      "item": 'kubejs:activation_circuit_component_1'
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "minecraft:dragon_egg"
    },
    {
      "item": 'mekamod:meka_ingot'
    },
    {
      "item": 'mekamod:meka_ingot'
    }
  ],
  "result": {
    "item": "draconicevolution:celestial_manipulator"
  },
  "tier": "DRACONIC",
  "total_energy": 2000000
}).id('mekaminers:draconic_custom/celestial_manipulator')
event.remove({output:"draconicevolution:advanced_dislocator"})
event.remove({output:"draconicevolution:chaotic_chestpiece"})
event.remove({output:"draconicevolution:chaotic_hoe"})
event.remove({output:"draconicevolution:chaotic_pickaxe"})
event.remove({output:"draconicevolution:chaotic_shovel"})
event.remove({output:"draconicevolution:chaotic_sword"})
event.remove({output:"draconicevolution:chaotic_bow"})
event.remove({output:"draconicevolution:chaotic_staff_alt"})
event.remove({output:"draconicevolution:awakened_core"})
event.remove({output:"draconicevolution:crafting_core"})
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:draconic_bow"
  },
  "ingredients": [
    {
      "item": 'mekamod:meka_ingot'
    },
    {
      "item": "draconicevolution:chaotic_core"
    },
    {
      "item": "mekaweapons:mekabow"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    },
    {
      "item": 'mekamod:meka_ingot'
    }
  ],
  "result": {
    "item": "draconicevolution:chaotic_bow"
  },
  "tier": "CHAOTIC",
  "total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_bow')
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "type": "forge:nbt",
    "item": "mekamod:meka_chestplate",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "ingredients": [
    {
      "item": 'mekamod:meka_ingot'
    },
    {
      "item": "draconicevolution:chaotic_core"
    },
    {
      "item": "draconicevolution:draconic_chestpiece"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    },
    {
      "item": 'mekamod:meka_ingot'
    }
  ],
  "result": {
    "item": "draconicevolution:chaotic_chestpiece"
  },
  "tier": "CHAOTIC",
  "total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_chestpiece')
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "type": "forge:nbt",
    "item": "mekamod:meka_hoe",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "ingredients": [
    {
      "item": 'mekamod:meka_ingot'
    },
    {
      "item": "draconicevolution:chaotic_core"
    },
    {
      "item": "draconicevolution:draconic_hoe"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    },
    {
      "item": 'mekamod:meka_ingot'
    }
  ],
  "result": {
    "item": "draconicevolution:chaotic_hoe"
  },
  "tier": "CHAOTIC",
  "total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_hoe')
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "type": "forge:nbt",
    "item": "mekamod:meka_pickaxe",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "ingredients": [
    {
      "item": 'mekamod:meka_ingot'
    },
    {
      "item": "draconicevolution:chaotic_core"
    },
    {
      "item": "draconicevolution:draconic_pickaxe"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    },
    {
      "item": 'mekamod:meka_ingot'
    }
  ],
  "result": {
    "item": "draconicevolution:chaotic_pickaxe"
  },
  "tier": "CHAOTIC",
  "total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_pickaxe')
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "type": "forge:nbt",
    "item": "mekamod:meka_shovel",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "ingredients": [
    {
      "item": 'mekamod:meka_ingot'
    },
    {
      "item": "draconicevolution:chaotic_core"
    },
    {
      "item": "draconicevolution:draconic_shovel"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    },
    {
      "item": 'mekamod:meka_ingot'
    }
  ],
  "result": {
    "item": "draconicevolution:chaotic_shovel"
  },
  "tier": "CHAOTIC",
  "total_energy": 128000000
}).id('mekaminers:draconic_custom/chaotic_shovel')
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "type": "forge:nbt",
    "item": "mekamod:meka_paxel",
    "count": 1,
    "nbt": "{Damage:0}"
  },
  "ingredients": [
    {
      "item": "draconicevolution:medium_chaos_frag"
    },
    {
      "item": "draconicevolution:chaotic_core"
    },
    {
      "item": "draconicevolution:medium_chaos_frag"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    },
    {
      "item": "draconicevolution:awakened_core"
    },
    {
      "item": "draconicevolution:draconic_staff"
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    },
    {
      "item": "draconicevolution:large_chaos_frag"
    },
    {
      "item": "draconicevolution:chaotic_energy_core"
    }
  ],
  "result": {
    "item": "draconicevolution:chaotic_staff"
  },
  "tier": "CHAOTIC",
  "total_energy": 1024000000
}).id('mekaminers:draconic_custom/chaotic_staff')
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "tag": "forge:nether_stars"
  },
  "ingredients": [
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "mekamod:meka_ingot"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "tag": "forge:ingots/draconium_awakened"
    },
    {
      "item": "mythicbotany:alfsteel_ingot"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "item": "draconicevolution:wyvern_core"
    }
  ],
  "result": {
    "item": "draconicevolution:awakened_core"
  },
  "tier": "WYVERN",
  "total_energy": 1000000
}).id('mekaminers:draconic_custom/awakened_core')
event.custom({
  "type": "draconicevolution:fusion_crafting",
  "catalyst": {
    "item": "draconicevolution:dislocator"
  },
  "ingredients": [
    {
      "item": 'enderio:sentient_ender'
    },
    {
      "item": 'extendedcrafting:enhanced_ender_ingot'
    },
    {
      "tag": "forge:ender_pearls"
    },
    {
      "tag": "forge:ingots/draconium"
    },
    {
      "tag": "forge:ender_pearls"
    },
    {
      "tag": "forge:ingots/draconium"
    },
    {
      "item": "draconicevolution:wyvern_core"
    },
    {
      "tag": "forge:ingots/draconium"
    }
  ],
  "result": {
    "item": "draconicevolution:advanced_dislocator"
  },
  "tier": "WYVERN",
  "total_energy": 1000000
}).id('mekaminers:draconic_custom/advanced_dislocator')
event.custom({
  "type": "powah:energizing",
  "ingredients": [
    {"item": 'minecraft:crafting_table'},
    {"item": 'botania:mana_diamond'},
    {"item": 'mekamod:meka_ingot'},
    {"item": 'draconicevolution:draconium_core'},
    {"item": 'kubejs:start_mechanism'}
  ],
  "energy": 25000000,
  "result": {
    "item": "draconicevolution:crafting_core"
  }
}).id('mekaminers:draconic_custom/crafting_core')
})
