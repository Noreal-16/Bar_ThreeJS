import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bar(props) {
  const { nodes, materials } = useGLTF('/bar.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[10.318, -0.607, 17.54]} rotation={[0, -0.765, 0]} scale={0.009}>
        <mesh geometry={nodes.Object_6.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_12.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_14.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_15.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Aro_de_metal_1_1_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
      </group>
      <group position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009}>
        <mesh geometry={nodes.Object_36.geometry} material={materials['Caneca_de_madeira_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_37.geometry} material={materials['Caneca_de_madeira_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_38.geometry} material={materials['Caneca_de_madeira_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_39.geometry} material={materials['Caneca_de_madeira_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
        <mesh geometry={nodes.Object_40.geometry} material={materials['Caneca_de_madeira_1_1_Coating_-_Black_Oxide_0_Baked.001']} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Acabamento_4_Detahes_de_madeiraas_Cerejeira_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_20.geometry} material={materials['Balco_1_Balco_Pintura_-_Esmalte_com_brilho_C.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_22.geometry} material={materials['Baqueta_3_Plastic_-_Translucent_Glossy_Yellow_0_Baked.001']} position={[14.788, 0.257, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_24.geometry} material={materials['Ba_1_1_1_Barris_Nogueira_0_Baked.001']} position={[10.318, -0.607, 17.54]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_26.geometry} material={materials['Ba_1_1_Barris_Nogueira_0_Baked.001']} position={[10.318, -0.607, 17.54]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_28.geometry} material={materials['Body13_LED_Red_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_30.geometry} material={materials['Cadeira_1_Stainless_Steel_-_Satin_0_Baked.001']} position={[13.288, 0.047, 18.551]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_32.geometry} material={materials['Cadeira_2_Plastic_-_Translucent_Glossy_Blue_0_Baked.001']} position={[3.13, 0.044, 22.127]} rotation={[0, -1.496, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_34.geometry} material={materials['Cadeira_3_Mesa_redonda_Mogno_0_Baked.001']} position={[3.13, 0.044, 22.127]} rotation={[0, -1.496, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_42.geometry} material={materials['Cerveja_1_Bebida_Pintura_-_Esmalte_com_brilho_Amarelo_0']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_44.geometry} material={materials['chamin_Polymide_Kapton_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_46.geometry} material={materials['Copo_1_Bronze_-_Polished_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_48.geometry} material={materials['Copo_Bronze_-_Polished_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_50.geometry} material={materials['Escada_Pine_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_52.geometry} material={materials['faca_1_Oak_-_Semigloss_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_54.geometry} material={materials['faca_Aluminum_-_Satin_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_56.geometry} material={materials['Fogueira_Lenha_Bambu_claro_-_Semi-brilhante_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_58.geometry} material={materials['Garrafas__1_Vidro_Bronze_Garrafa_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_60.geometry} material={materials['Iterno_da_lareira_PA_11_-_Nylon-_HP_11-30_with_EOS_P_396_3.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_62.geometry} material={materials['Janela_Gemstone_-_Ruby_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_64.geometry} material={materials['Lareira_Lareira_Superfcie_-_Fosca_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_66.geometry} material={materials['Lenha_Fabric_Light_Brown_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_68.geometry} material={materials['Machado_Nickel_-_Satin_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_70.geometry} material={materials['Mesa_2_3_Stainless_Steel_-_Satin_0.001_Baked.001']} position={[-18.874, 0.047, 12.839]} rotation={[-Math.PI, -0.806, -Math.PI]} scale={0.009} />
      <mesh geometry={nodes.Object_72.geometry} material={materials['Moldura_quadro_Carbon_Fiber_-_Plain_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_74.geometry} material={materials['Pano_de_prato_Fabric_Light_Brown_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_76.geometry} material={materials['Parede_1_Parede_Superfcie_-_Fosca_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_78.geometry} material={materials['Pilar_1_Cherry_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_80.geometry} material={materials['Piso_Surface_-_Matte_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_82.geometry} material={materials['Porta_da_Escada_1_Gemstone_-_Diamond_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_84.geometry} material={materials['Prateleiras_Estante_Pintura_-_Esmalte_com_brilho_Verde_0']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_86.geometry} material={materials['Puxador_1_Steel_-_Satin_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_88.geometry} material={materials['Tampo_Balco_Paek_Beige_0_Baked.001']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_90.geometry} material={materials['Vela_1_2_Nylon_6-6_White_0_Baked.001']} position={[14.788, 0.088, 15.534]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_92.geometry} material={materials['Parede_1_Parede_Superfcie_-_Fosca_0.001_Baked']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_94.geometry} material={materials['Parede_1_Parede_Superfcie_-_Fosca_0.002_Baked']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
      <mesh geometry={nodes.Object_96.geometry} material={materials['Parede_1_Parede_Superfcie_-_Fosca_0.003_Baked']} position={[14.789, 0.089, 15.532]} rotation={[0, -0.765, 0]} scale={0.009} />
    </group>
  )
}

useGLTF.preload('/bar.gltf')