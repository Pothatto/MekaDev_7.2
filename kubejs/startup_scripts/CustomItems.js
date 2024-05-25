StartupEvents.registry('item', (registry)=> { 
    registry.create('start_mechanism').maxStackSize(64).glow(false)
    registry.create('started_mechanism').maxStackSize(64).glow(false)
    registry.create('incomplete_started_mechanism').maxStackSize(64).glow(false)
    registry.create('started_mechanism_component_1').maxStackSize(64).glow(false)
    registry.create('started_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('started_mechanism_component_3').maxStackSize(64).glow(false)
    registry.create('started_mechanism_component_4').maxStackSize(64).glow(false)
    registry.create('incomplete_started_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('polonium_rod').maxStackSize(64).glow(false)
    registry.create('chocolate_rod').maxStackSize(64).glow(false)
    registry.create('hydrogened_chocolate_rod').maxStackSize(64).glow(false)
    registry.create('polonium_dust').maxStackSize(64).glow(false)
    registry.create('charged_quantum_entangled_singularity').maxStackSize(64).glow(false)
    registry.create('incomplete_started_mechanism_component_3').maxStackSize(64).glow(false)
    registry.create('incomplete_started_mechanism_component_4').maxStackSize(64).glow(false)
    registry.create('incomplete_start_mechanism').maxStackSize(64).glow(false)
    registry.create('initiating_mechanism').maxStackSize(64).glow(false)
    registry.create('initiating_mechanism_component_1').maxStackSize(64).glow(false)
    registry.create('incomplete_initiating_mechanism_component_1').maxStackSize(64).glow(false)
    registry.create('incomplete_initiating_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('incomplete_initiating_mechanism').maxStackSize(64).glow(false)
    registry.create('initiating_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('initiated_mechanism').maxStackSize(64).glow(false)
    registry.create('initiated_mechanism_component_1').maxStackSize(64).glow(false)
    registry.create('initiated_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('incomplete_initiated_mechanism_component_1').maxStackSize(64).glow(false)
    registry.create('incomplete_initiated_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('incomplete_initiated_mechanism').maxStackSize(64).glow(false)
    registry.create('incomplete_vibranium_allthemodium_alloy_dust').maxStackSize(64).glow(false)
    registry.create('incomplete_unobtainium_allthemodium_alloy_dust').maxStackSize(64).glow(false)
    registry.create('incomplete_unobtainium_vibranium_alloy_dust').maxStackSize(64).glow(false)
    registry.create('incomplete_precision_mechanism_component_1').maxStackSize(64).glow(false)
    registry.create('incomplete_precision_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('precision_mechanism_component_1').maxStackSize(64).glow(false)
    registry.create('precision_mechanism_component_2').maxStackSize(64).glow(false)
    registry.create('incomplete_precision_mechanism').maxStackSize(64).glow(false)
    registry.create('incomplete_activation_circuit_component_1').maxStackSize(64).glow(false)
    registry.create('incomplete_activation_circuit_component_2').maxStackSize(64).glow(false)
    registry.create('incomplete_activation_circuit').maxStackSize(64).glow(false)
    registry.create('activation_circuit_component_1').maxStackSize(64).glow(false)
    registry.create('activation_circuit_component_2').maxStackSize(64).glow(false)
    registry.create('activation_circuit').maxStackSize(64).glow(false)
    registry.create('incomplete_spatial_circuit_component_1').maxStackSize(64).glow(false)
    registry.create('incomplete_spatial_circuit_component_2').maxStackSize(64).glow(false)
    registry.create('incomplete_spatial_circuit').maxStackSize(64).glow(false)
    registry.create('spatial_circuit_component_1').maxStackSize(64).glow(false)
    registry.create('spatial_circuit_component_2').maxStackSize(64).glow(false)
    registry.create('spatial_circuit').maxStackSize(64).glow(false)
})

StartupEvents.registry('fluid', (fluid)=> { 
    fluid.create('liquid_dragon_breath')
    .bucketColor('#d47ed4')
})

//Replacing Mod Names
Platform.mods.kubejs.name = 'MekaMiners Rebirth: itens'
Platform.mods.mekamod.name = 'mekaminers Rebirth: tools'