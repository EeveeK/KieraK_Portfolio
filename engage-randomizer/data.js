// Creates unit objects

const dlcUnits = [
  {
    unitImg: "images/FEE_Portraits/Small_portrait_zelestia_fe17.png",
    unitName: "Zelestia",
  }, 
   {
    unitImg: "images/FEE_Portraits/Small_portrait_madeline_fe17.png",
    unitName: "Madeline",
  },
   {
    unitImg: "images/FEE_Portraits/Small_portrait_gregory_fe17.png",
    unitName: "Gregory",
  },
   {
    unitImg: "images/FEE_Portraits/Small_portrait_nel_fe17.png",
    unitName: "Nel",
  },
   {
    unitImg: "images/FEE_Portraits/Small_portrait_nil_fe17.png",
    unitName: "Nil",
  },
]

let units = [
  {
    unitImg: "images/FEE_Portraits/Portrait_amber_fe17.png",
    unitName: "Amber",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_alcryst_fe17.png",
    unitName: "Alcryst",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_alfred_fe17.png",
    unitName: "Alfred",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_anna_fe17.png",
    unitName: "Anna",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_boucheron_fe17.png",
    unitName: "Boucheron",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_bunet_fe17.png",
    unitName: "Bunet",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_céline_fe17.png",
    unitName: "Celine",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_citrinne_fe17.png",
    unitName: "Citrinne",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_clanne_fe17.png",
    unitName: "Clanne",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_diamant_fe17.png",
    unitName: "Diamant",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_etie_fe17.png",
    unitName: "Etie",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_chloé_fe17.png",
    unitName: "Chloe",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_fogado_fe17.png",
    unitName: "Fogado",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_framme_fe17.png",
    unitName: "Framme",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_goldmary_fe17.png",
    unitName: "Goldmary",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_hortensia_fe17.png",
    unitName: "Hortensia",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_ivy_fe17.png",
    unitName: "Ivy",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_jade_fe17.png",
    unitName: "Jade",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_jean_fe17.png",
    unitName: "Jean",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_kagetsu_fe17.png",
    unitName: "Kagetsu",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_lapis_fe17.png",
    unitName: "Lapis",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_lindon_fe17.png",
    unitName: "Lindon",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_louis_fe17.png",
    unitName: "Louis",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_mauvier_fe17.png",
    unitName: "Mauvier",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_merrin_fe17.png",
    unitName: "Merrin",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_pandreo_fe17.png",
    unitName: "Pandreo",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_panette_fe17.png",
    unitName: "Panette",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_rosado_fe17.png",
    unitName: "Rosado",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_saphir_fe17.png",
    unitName: "Saphir",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_seadall_fe17.png",
    unitName: "Seadall",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_timerra_fe17.png",
    unitName: "Timerra",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_vander_fe17.png",
    unitName: "Vander",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_veyle_fe17.png",
    unitName: "Veyle",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_yunaka_fe17.png",
    unitName: "Yunaka",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_zelkov_fe17.png",
    unitName: "Zelkov",
  }
];


const uniqueClasses = [
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Avenir",
    uniqueClass: "Alfred",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Vidame",
    uniqueClass: "Celine",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Successeur",
    uniqueClass: "Diamant",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Tireur d’élite",
    uniqueClass: "Alcryst",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Picket",
    uniqueClass: "Timerra",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Cupido",
    uniqueClass: "Fogado",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Lindwurm",
    uniqueClass: "Ivy",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Sleipnir Rider",
    uniqueClass: "Hortensia",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Dancer",
    uniqueClass: "Seadall",
  },
    {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Fell Child",
    uniqueClass: "Veyle",
  },
      {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Melusine",
    uniqueClass: "Zelestia",
  },
      {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Fell Child",
    uniqueClass: "Nel",
  },
      {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Fell Child",
    uniqueClass: "Nil",
  },
]

const dlcClasses = [
    {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Mage Canoneer",
    uniqueClass: "None",
  },
      {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Enchanter",
    uniqueClass: "None",
  },
]

const classes = [

  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Swordmaster",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Hero",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Halberdier",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Royal Knight",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Berserker",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Sniper",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Bow Knight",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Thief",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Sage",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Mage Knight",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Martial Master",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "High Priest",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Martial Master",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "General",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Great Knight",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Paladin",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Wolf Knight",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Griffin Knight",
    uniqueClass: "None",
  },
  {
    classImg: "images/Fe3H_Portraits/FByleth.png",
    className: "Wyvern Knight",
    uniqueClass: "None",
  }
];