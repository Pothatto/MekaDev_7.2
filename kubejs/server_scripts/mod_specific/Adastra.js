ServerEvents.recipes(event =>{
    event.remove
    ({output:
        "ad_astra:tier_1_rocket"
    })
    event.custom(
        {
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
              {
                "ingredient": {
                  "item": "ad_astra:rocket_nose_cone"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiating_mechanism"
                }
              },
              {
                "ingredient": {
                  "tag": "ad_astra_platform:steel_blocks"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiated_mechanism"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiated_mechanism"
                }
              },
              {
                "ingredient": {
                  "tag": "ad_astra_platform:steel_blocks"
                }
              },
              {
                "ingredient": {
                  "item": "kubejs:initiating_mechanism"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:steel_tank"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:steel_tank"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:steel_engine"
                }
              },
              {
                "ingredient": {
                  "item": "ad_astra:rocket_fin"
                }
              }
            ],
            "output": "ad_astra:tier_1_rocket"
}),
event.remove
({output:
    "ad_astra:launch_pad"
}),
event.custom({
        "type": "minecraft:crafting_shaped",
        "group": "launch_pad",
        "key": {
          "1": {
            "tag": "ad_astra_platform:steel_plates"
          },
          "2": {
            "tag": "ad_astra_platform:iron_plates"
          },
          "3": {
            "item": "kubejs:initiated_mechanism"
          }
        },
        "pattern": [
          "121",
          "232",
          "121"
        ],
        "result": {
          "item": "ad_astra:launch_pad"
        }
})
event.remove({
    output:"ad_astra:tier_2_rocket"
})
event.custom({
        "type": "ad_astra:nasa_workbench",
        "ingredients": [
          {
            "ingredient": {
              "item": "ad_astra:rocket_nose_cone"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:initiated_mechanism"
            }
          },
          {
            "ingredient": {
              "tag": "ad_astra_platform:desh_blocks"
            }
          },
          {
            "ingredient": {
              "item": "create:precision_mechanism"
            }
          },
          {
            "ingredient": {
              "item": "create:precision_mechanism"
            }
          },
          {
            "ingredient": {
              "tag": "ad_astra_platform:desh_blocks"
            }
          },
          {
            "ingredient": {
              "item": "kubejs:initiated_mechanism"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:desh_tank"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:desh_tank"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:desh_engine"
            }
          },
          {
            "ingredient": {
              "item": "ad_astra:rocket_fin"
            }
          }
        ],
        "output": "ad_astra:tier_2_rocket"
})
event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BCB   ",
          "A  DEF   ",
          "A  GHI   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "minecraft:grass_block",
            "count": 64
          },
          "C": {
            "item": "minecraft:water_bucket"
          },
          "D": {
            "item": "minecraft:dirt",
            "count": 64
          },
          "E": {
            "item": "botania:tiny_planet"
          },
          "F": {
            "item": "minecraft:sand",
            "count": 64
          },
          "G": {
            "item": "minecraft:clay",
            "count": 64
          },
          "H": {
            "item": "minecraft:stone",
            "count": 64
          },
          "I": {
            "item": "minecraft:gravel",
            "count": 64
          }
        },
        "result": {
          "item": "ad_astra:earth_globe"
        }
})
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:moon_cobblestone",
            "count": 64
          },
          "C": {
            "item": "ad_astra:moon_stone",
            "count": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:moon_sand",
            "count": 64
          }
        },
        "result": {
          "item": "ad_astra:moon_globe"
        }
      }
)
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:mars_cobblestone",
            "count": 64
          },
          "C": {
            "item": "ad_astra:mars_stone",
            "count": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:mars_sand",
            "count": 64
          }
        },
        "result": {
          "item": "ad_astra:mars_globe"
        }
      }
)
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:mercury_cobblestone",
            "count": 64
          },
          "C": {
            "item": "ad_astra:mercury_stone",
            "count": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:mercury_stone_bricks",
            "count": 64
          }
        },
        "result": {
          "item": "ad_astra:mercury_globe"
        }
      }
)
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BBB   ",
          "A  CDC   ",
          "A  ECE   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:venus_cobblestone",
            "count": 64
          },
          "C": {
            "item": "ad_astra:venus_sandstone",
            "count": 64
          },
          "D": {
            "item": "botania:tiny_planet"
          },
          "E": {
            "item": "ad_astra:venus_sand",
            "count": 64
          }
        },
        "result": {
          "item": "ad_astra:venus_globe"
        }
      }
)
event.custom(
    {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAA    ",
          "A   A    ",
          "A  BCB   ",
          "A  DED   ",
          "A  FDF   ",
          "A        ",
          "AAAAA    ",
          "    A    ",
          "   AAA   "
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_block"
          },
          "B": {
            "item": "ad_astra:glacio_cobblestone",
            "count": 64
          },
          "C": {
            "item": "minecraft:blue_ice",
            "count": 64
          },
          "D": {
            "item": "ad_astra:glacio_stone",
            "count": 64
          },
          "E": {
            "item": "botania:tiny_planet"
          },
          "F": {
            "item": "powah:dry_ice",
            "count": 64
          }
        },
        "result": {
          "item": "ad_astra:glacio_globe"
        }
      }
)
})