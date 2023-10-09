// OBJETO

const cars = [
    {
      marca: "TOYOTA",
      modelo: "COROLLA",
      precio: 18000,
      color: "BLANCO",
      kilometraje: 3000,
      ubicacion: "SYDNEY",
      imagen: "https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1280x855.jpg",
    },
    {
      marca: "HONDA",
      modelo: "CIVIC",
      precio: 17000,
      color: "PLATEADO",
      kilometraje: 4000,
      ubicacion: "MELBOURNE",
      imagen: "https://media.ed.edmunds-media.com/honda/civic/2023/oem/2023_honda_civic_sedan_si_fq_oem_1_815.jpg",
    },
    {
      marca: "FORD",
      modelo: "FOCUS",
      precio: 16000,
      color: "AZUL",
      kilometraje: 3500,
      ubicacion: "BRISBANE",
      imagen: "https://www.edmunds.com/assets/m/for-sale/35-1fadp3n20jl218504/img-1-600x400.jpg",
    },
    {
      marca: "NISSAN",
      modelo: "ALTIMA",
      precio: 19000,
      color: "GRIS",
      kilometraje: 2500,
      ubicacion: "PERTH",
      imagen: "https://media.ed.edmunds-media.com/nissan/altima/2023/oem/2023_nissan_altima_sedan_vc-t-sr_fq_oem_1_815.jpg",
    },
    {
      marca: "CHEVROLET",
      modelo: "CRUZE",
      precio: 17500,
      color: "ROJO",
      kilometraje: 2800,
      ubicacion: "ADELAIDE",
      imagen: "https://www.edmunds.com/assets/m/for-sale/25-1g1be5sm0k7121282/img-1-600x400.jpg",
    },
    {
      marca: "VOLKSWAGEN",
      modelo: "GOLF",
      precio: 18500,
      color: "NEGRO",
      kilometraje: 3200,
      ubicacion: "CANBERRA",
      imagen: "https://media.ed.edmunds-media.com/volkswagen/golf-gti/2024/oem/2024_volkswagen_golf-gti_4dr-hatchback_380-autobahn_fq_oem_1_815.jpg",
    },
    {
      marca: "HYUNDAI",
      modelo: "ELANTRA",
      precio: 16500,
      color: "PLATA",
      kilometraje: 3800,
      ubicacion: "DARWIN",
      imagen: "https://media.ed.edmunds-media.com/hyundai/elantra/2024/oem/2024_hyundai_elantra_sedan_limited_fq_oem_1_815.jpg",
    },
    {
      marca: "MAZDA",
      modelo: "3",
      precio: 19500,
      color: "VERDE",
      kilometraje: 2700,
      ubicacion: "HOBART",
      imagen: "https://media.ed.edmunds-media.com/mazda/3/2024/oem/2024_mazda_3_4dr-hatchback_25-s-carbon-edition_fq_oem_1_815.jpg",
    },
    {
      marca: "KIA",
      modelo: "OPTIMA",
      precio: 17000,
      color: "AZUL MARINO",
      kilometraje: 4200,
      ubicacion: "CAIRNS",
      imagen: "https://www.edmunds.com/assets/m/for-sale/f2-5xxgt4l33lg392560/img-1-600x400.jpg",
    },
    {
      marca: "SUBARU",
      modelo: "IMPREZA",
      precio: 20000,
      color: "BLANCO PERLA",
      kilometraje: 2400,
      ubicacion: "GOLD COAST",
      imagen: "https://media.ed.edmunds-media.com/subaru/impreza/2024/oem/2024_subaru_impreza_4dr-hatchback_rs_fq_oem_1_815.jpg",
    },
    {
      marca: "AUDI",
      modelo: "A4",
      precio: 22000,
      color: "GRIS OSCURO",
      kilometraje: 2600,
      ubicacion: "NEWCASTLE",
      imagen: "https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_815.jpg",
    },
    {
      marca: "MERCEDES-BENZ",
      modelo: "C-CLASS",
      precio: 25000,
      color: "PLATA METÁLICO",
      kilometraje: 2300,
      ubicacion: "WOLLONGONG",
      imagen: "https://media.ed.edmunds-media.com/mercedes-benz/c-class/2023/oem/2023_mercedes-benz_c-class_sedan_amg-c-43_fq_oem_1_815.jpg",
    },
    {
      marca: "BMW",
      modelo: "3 SERIES",
      precio: 28000,
      color: "AZUL REAL",
      kilometraje: 2100,
      ubicacion: "GEELONG",
      imagen: "https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_330i-xdrive_fq_oem_1_815.jpg",
    },
    {
      marca: "LEXUS",
      modelo: "ES",
      precio: 30000,
      color: "ROJO BRILLANTE",
      kilometraje: 2000,
      ubicacion: "TOWNSVILLE",
      imagen: "https://media.ed.edmunds-media.com/lexus/es/2024/oem/2024_lexus_es_sedan_250-f-sport-design_fq_oem_1_815.jpg",
    },
    {
      marca: "VOLVO",
      modelo: "S60",
      precio: 34000,
      color: "GRIS PLATINO",
      kilometraje: 1800,
      ubicacion: "WAGGA WAGGA",
      imagen: "https://media.ed.edmunds-media.com/volvo/s60/2024/oem/2024_volvo_s60_sedan_recharge-t8-ultimate_fq_oem_1_815.jpg",
    },
    {
      marca: "TESLA",
      modelo: "MODEL 3",
      precio: 38000,
      color: "BLANCO PERLA MULTI-COAT",
      kilometraje: 1700,
      ubicacion: "ALBURY",
      imagen: "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_815.jpg",
    },
    {
      marca: "KIA",
      modelo: "SELTOS",
      precio: 22000,
      color: "NEGRO",
      kilometraje: 1200,
      ubicacion: "SHEPPARTON",
      imagen: "https://media.ed.edmunds-media.com/kia/seltos/2024/oem/2024_kia_seltos_4dr-suv_sx_fq_oem_1_815.jpg",
    },
    {
      marca: "MAZDA",
      modelo: "CX-5",
      precio: 25000,
      color: "GRIS",
      kilometraje: 1500,
      ubicacion: "DUBBO",
      imagen: "https://media.ed.edmunds-media.com/mazda/cx-5/2024/oem/2024_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_815.jpg",
    },
    {
      marca: "HYUNDAI",
      modelo: "KONA",
      precio: 21000,
      color: "ROJO",
      kilometraje: 1300,
      ubicacion: "GOSFORD",
      imagen: "https://media.ed.edmunds-media.com/hyundai/kona/2024/oem/2024_hyundai_kona_4dr-suv_limited_fq_oem_1_815.jpg",
    },
    {
      marca: "TOYOTA",
      modelo: "YARIS",
      precio: 18000,
      color: "AZUL",
      kilometraje: 1100,
      ubicacion: "TAMWORTH",
      imagen: "https://www.edmunds.com/assets/m/toyota/yaris/2019/oem/2019_toyota_yaris_sedan_xle_fq_oem_1_815.jpg",
    },
    {
      marca: "FORD",
      modelo: "ECOSPORT",
      precio: 19000,
      color: "BLANCO",
      kilometraje: 900,
      ubicacion: "LISMORE",
      imagen: "https://media.ed.edmunds-media.com/ford/ecosport/2022/oem/2022_ford_ecosport_4dr-suv_titanium_fq_oem_1_815.jpg",
    },
    {
      marca: "NISSAN",
      modelo: "KICKS",
      precio: 17000,
      color: "NEGRO",
      kilometraje: 800,
      ubicacion: "COFFS HARBOUR",
      imagen: "https://media.ed.edmunds-media.com/nissan/kicks/2024/oem/2024_nissan_kicks_4dr-hatchback_sr_fq_oem_1_815.jpg",
    },
    {
      marca: "HONDA",
      modelo: "FIT",
      precio: 16000,
      color: "ROJO",
      kilometraje: 700,
      ubicacion: "MAITLAND",
      imagen: "https://www.edmunds.com/assets/m/for-sale/d6-3hggk5h8xkm721184/img-2-600x400.jpg",
    },
    {
      marca: "VOLKSWAGEN",
      modelo: "JETTA",
      precio: 20000,
      color: "PLATEADO",
      kilometraje: 600,
      ubicacion: "NOWRA",
      imagen: "https://media.ed.edmunds-media.com/volkswagen/jetta/2022/oem/2022_volkswagen_jetta_sedan_se_fq_oem_1_815.jpg",
    },
    {
      marca: "CHEVROLET",
      modelo: "TRAX",
      precio: 25000,
      color: "GRIS OSCURO",
      kilometraje: 500,
      ubicacion: "GOULBURN",
      imagen: "https://media.ed.edmunds-media.com/chevrolet/trax/2024/oem/2024_chevrolet_trax_4dr-suv_2rs_fq_oem_1_815.jpg",
    },
    {
      marca: "HYUNDAI",
      modelo: "VENUE",
      precio: 22000,
      color: "BLANCO",
      kilometraje: 400,
      ubicacion: "BROKEN HILL",
      imagen: "https://media.ed.edmunds-media.com/hyundai/venue/2022/oem/2022_hyundai_venue_4dr-hatchback_limited_fq_oem_1_815.jpg",
    },
    {
      marca: "KIA",
      modelo: "RIO",
      precio: 19000,
      color: "AZUL",
      kilometraje: 300,
      ubicacion: "PARKES",
      imagen: "https://media.ed.edmunds-media.com/kia/rio/2022/oem/2022_kia_rio_sedan_s_fq_oem_1_815.jpg",
    },
    {
      marca: "SUBARU",
      modelo: "FORESTER",
      precio: 21000,
      color: "VERDE",
      kilometraje: 200,
      ubicacion: "GRIFFITH",
      imagen: "https://media.ed.edmunds-media.com/subaru/forester/2023/oem/2023_subaru_forester_4dr-suv_sport_fq_oem_1_815.jpg",
    },
    {
      marca: "AUDI",
      modelo: "Q5",
      precio: 27000,
      color: "BLANCO PERLA",
      kilometraje: 100,
      ubicacion: "NARRANDERA",
      imagen: "https://media.ed.edmunds-media.com/audi/q5/2022/oem/2022_audi_q5_4dr-suv_prestige-s-line_fq_oem_10_815.jpg",
    },
    {
      marca: "MERCEDES-BENZ",
      modelo: "GLC",
      precio: 32000,
      color: "PLATEADO",
      kilometraje: 50,
      ubicacion: "PORT MACQUARIE",
      imagen: "https://media.ed.edmunds-media.com/mercedes-benz/glc-class/2023/oem/2023_mercedes-benz_glc-class_4dr-suv_glc-300_fq_oem_1_815.jpg",
    },
    {
      marca: "BMW",
      modelo: "X3",
      precio: 28000,
      color: "AZUL",
      kilometraje: 30,
      ubicacion: "GRAFTON",
      imagen: "https://media.ed.edmunds-media.com/bmw/x3/2022/oem/2022_bmw_x3_4dr-suv_xdrive30i_fq_oem_1_815.jpg",
    },
    {
      marca: "LEXUS",
      modelo: "NX",
      precio: 31000,
      color: "BLANCO",
      kilometraje: 20,
      ubicacion: "CESSNOCK",
      imagen: "https://media.ed.edmunds-media.com/lexus/nx/2024/oem/2024_lexus_nx_4dr-suv_250-premium_fq_oem_1_815.jpg",
    },
    {
      marca: "VOLVO",
      modelo: "XC60",
      precio: 33000,
      color: "NEGRO",
      kilometraje: 10,
      ubicacion: "WOLLONGONG",
      imagen: "https://media.ed.edmunds-media.com/volvo/xc60/2024/oem/2024_volvo_xc60_4dr-suv_recharge-t8-plus_fq_oem_1_815.jpg",
    },
    {
      marca: "TESLA",
      modelo: "MODEL Y",
      precio: 35000,
      color: "ROJO",
      kilometraje: 5,
      ubicacion: "TAMWORTH",
      imagen: "https://media.ed.edmunds-media.com/tesla/model-y/2020/oem/2020_tesla_model-y_4dr-suv_performance_fq_oem_2_815.jpg",
    },
    {
      marca: "KIA",
      modelo: "SPORTAGE",
      precio: 23000,
      color: "BLANCO PERLA MULTI-COAT",
      kilometraje: 1,
      ubicacion: "SYDNEY",
      imagen: "https://media.ed.edmunds-media.com/kia/sportage/2024/oem/2024_kia_sportage_4dr-suv_sx_fq_oem_1_815.jpg",
    },
    {
        marca: "TOYOTA",
        modelo: "RAV4",
        precio: 22000,
        color: "PLATEADO",
        kilometraje: 1500,
        ubicacion: "ALICE SPRINGS",
        imagen: "https://media.ed.edmunds-media.com/toyota/rav4-hybrid/2024/fe/2024_toyota_rav4-hybrid_f34_fe_622231_815.jpg",
      },
      {
        marca: "HONDA",
        modelo: "ACCORD",
        precio: 21000,
        color: "AZUL",
        kilometraje: 1800,
        ubicacion: "BUNDABERG",
        imagen: "https://media.ed.edmunds-media.com/honda/accord/2023/oem/2023_honda_accord_sedan_sport-l-hybrid_fq_oem_1_815.jpg",
      },
      {
        marca: "FORD",
        modelo: "MUSTANG",
        precio: 30000,
        color: "ROJO",
        kilometraje: 2000,
        ubicacion: "CAIRNS",
        imagen: "https://media.ed.edmunds-media.com/ford/mustang/2024/oem/2024_ford_mustang_coupe_dark-horse_fq_oem_1_815.jpg",
      },
      {
        marca: "NISSAN",
        modelo: "MAXIMA",
        precio: 28000,
        color: "NEGRO",
        kilometraje: 2200,
        ubicacion: "COFFS HARBOUR",
        imagen: "https://media.ed.edmunds-media.com/nissan/maxima/2022/oem/2022_nissan_maxima_sedan_35-sr_fq_oem_1_815.jpg",
      },
      {
        marca: "CHEVROLET",
        modelo: "CAMARO",
        precio: 32000,
        color: "AMARILLO",
        kilometraje: 2500,
        ubicacion: "DARWIN",
        imagen: "https://media.ed.edmunds-media.com/chevrolet/camaro/2024/oem/2024_chevrolet_camaro_coupe_2ss_fq_oem_2_815.jpg",
      },
      {
        marca: "VOLKSWAGEN",
        modelo: "PASSAT",
        precio: 26000,
        color: "PLATA",
        kilometraje: 1700,
        ubicacion: "GOSFORD",
        imagen: "https://media.ed.edmunds-media.com/volkswagen/passat/2022/oem/2022_volkswagen_passat_sedan_limited-edition_fq_oem_1_815.jpg",
      },
      {
        marca: "HYUNDAI",
        modelo: "SONATA",
        precio: 25000,
        color: "GRIS",
        kilometraje: 1900,
        ubicacion: "GRIFFITH",
        imagen: "https://media.ed.edmunds-media.com/hyundai/sonata/2021/oem/2021_hyundai_sonata_sedan_limited_fq_oem_11_1280x855.jpg",
      },
      {
        marca: "MAZDA",
        modelo: "MX-5",
        precio: 28000,
        color: "AZUL MARINO",
        kilometraje: 1800,
        ubicacion: "GUNNEDAH",
        imagen: "https://media.ed.edmunds-media.com/mazda/mx-5-miata/2022/oem/2022_mazda_mx-5-miata_convertible_club_fq_oem_1_815.jpg",
      },
      {
        marca: "KIA",
        modelo: "FORTE",
        precio: 23000,
        color: "BLANCO",
        kilometraje: 1600,
        ubicacion: "HOBART",
        imagen: "https://media.ed.edmunds-media.com/kia/forte/2022/oem/2022_kia_forte_sedan_gt_fq_oem_1_815.jpg",
      },
      {
        marca: "SUBARU",
        modelo: "OUTBACK",
        precio: 29000,
        color: "VERDE",
        kilometraje: 1400,
        ubicacion: "LISMORE",
        imagen: "https://media.ed.edmunds-media.com/subaru/outback/2024/oem/2024_subaru_outback_4dr-suv_onyx-edition-xt_fq_oem_1_815.jpg",
      },
      {
        marca: "AUDI",
        modelo: "A3",
        precio: 26000,
        color: "NEGRO",
        kilometraje: 1700,
        ubicacion: "MELBOURNE",
        imagen: "https://media.ed.edmunds-media.com/audi/a3/2023/oem/2023_audi_a3_sedan_premium-plus_fq_oem_6_815.jpg",
      },
      {
        marca: "MERCEDES-BENZ",
        modelo: "E-CLASS",
        precio: 34000,
        color: "PLATA",
        kilometraje: 1500,
        ubicacion: "NOWRA",
        imagen: "https://media.ed.edmunds-media.com/mercedes-benz/e-class/2023/oem/2023_mercedes-benz_e-class_sedan_amg-e-53_fq_oem_1_815.jpg",
      },
      {
        marca: "BMW",
        modelo: "5 Series",
        precio: 36000,
        color: "GRIS",
        kilometraje: 1300,
        ubicacion: "PERTH",
        imagen: "https://media.ed.edmunds-media.com/bmw/5-series/2024/oem/2024_bmw_5-series_sedan_530i-xdrive_fq_oem_1_815.jpg",
      },
      {
        marca: "LEXUS",
        modelo: "RX",
        precio: 38000,
        color: "AZUL REAL",
        kilometraje: 1200,
        ubicacion: "SYDNEY",
        imagen: "https://media.ed.edmunds-media.com/lexus/rx/2024/oem/2024_lexus_rx_4dr-suv_350-f-sport_fq_oem_1_815.jpg",
      },
      {
        marca: "VOLVO",
        modelo: "S90",
        precio: 32000,
        color: "ROJO BRILLANTE",
        kilometraje: 1100,
        ubicacion: "TAMWORTH",
        imagen: "https://media.ed.edmunds-media.com/volvo/s90/2023/oem/2023_volvo_s90_sedan_recharge-plug-in-hybrid-t8-ultimate_fq_oem_1_815.jpg",
      },
      {
        marca: "TESLA",
        modelo: "MODEL S",
        precio: 50000,
        color: "BLANCO PERLA MULTI-COAT",
        kilometraje: 1000,
        ubicacion: "WAGGA WAGGA",
        imagen: "https://media.ed.edmunds-media.com/tesla/model-s/2021/oem/2021_tesla_model-s_sedan_plaid_fq_oem_1_815.jpg",
      },
      {
        marca: "KIA",
        modelo: "SOUL",
        precio: 27000,
        color: "NEGRO",
        kilometraje: 900,
        ubicacion: "WOLLONGONG",
        imagen: "https://media.ed.edmunds-media.com/kia/soul/2023/oem/2023_kia_soul_wagon_gt-line_fq_oem_1_815.jpg",
      },
      {
        marca: "MAZDA",
        modelo: "6",
        precio: 28000,
        color: "PLATEADO",
        kilometraje: 800,
        ubicacion: "GEELONG",
        imagen: "https://www.edmunds.com/assets/m/mazda/6/2021/oem/2021_mazda_6_sedan_grand-touring-reserve_fq_oem_1_815.jpg",
        
      },
      {
        marca: "HYUNDAI",
        modelo: "IONIQ",
        precio: 30000,
        color: "BLANCO PERLA",
        kilometraje: 700,
        ubicacion: "NEWCASTLE",
        imagen: "https://media.ed.edmunds-media.com/hyundai/ioniq-5/fe/hyundai_ioniq-5_f34_fe_713238_1280.jpg",
      },
      {
        marca: "TOYOTA",
        modelo: "SIENNA",
        precio: 32000,
        color: "GRIS PLATINO",
        kilometraje: 600,
        ubicacion: "GOLD COAST",
        imagen: "https://media.ed.edmunds-media.com/toyota/sienna/2023/oem/2023_toyota_sienna_passenger-minivan_le-8-passenger_fq_oem_3_1280x855.jpg",
      },

  ];
  
// objeto depreciacion de marcas por anio
const YearCarBrunch = {
TOYOTA: 0.15,          
HONDA: 0.16,           
FORD: 0.16,            
NISSAN: 0.17,          
CHEVROLET: 0.22,       
VOLKSWAGEN: 0.16,      
HYUNDAI: 0.14,         
MAZDA: 0.15,           
KIA: 0.22,             
SUBARU: 0.15,           
AUDI: 0.18,            
'MERCEDES-BENZ': 0.05,  
BMW: 0.05,             
LEXUS: 0.1,           
VOLVO: 0.05,           
TESLA: 0.11,
};

// objetos precio de auto por modelo
const preciosDeModelos = {
TOYOTA: {
  COROLLA: 20000,
  CAMRY: 25000,
  RAV4: 28000,
  HIGHLANDER: 35000,
  TACOMA: 28000,
  '4RUNNER': 36000,
  PRIUS: 24000,
  SIENNA: 32000,
  TUNDRA: 38000,
  'C-HR': 23000,
},
HONDA: {
  CIVIC: 22000,
  ACCORD: 26000,
  'CR-V': 29000,
  'HR-V': 24000,
  PILOT: 35000,
  FIT: 19000,
  INSIGHT: 25000,
  ODYSSEY: 32000,
  RIDGELINE: 29000,
  PASSPORT: 33000,
},
FORD: {
  MUSTANG: 32000,
  ESCAPE: 26000,
  EXPLORER: 33000,
  F150: 40000,
  RANGER: 25000,
  FOCUS: 21000,
  EDGE: 28000,
  EXPEDITION: 38000,
  ECOSPORT: 22000,
  FUSION: 24000,
},
NISSAN: {
  ALTIMA: 23000,
  ROGUE: 27000,
  SENTRA: 20000,
  MURANO: 32000,
  MAXIMA: 34000,
  FRONTIER: 29000,
  PATHFINDER: 34000,
  TITAN: 40000,
  KICKS: 21000,
  JUKE: 22000,
},
CHEVROLET: {
  SILVERADO: 35000,
  MALIBU: 25000,
  EQUINOX: 29000,
  TRAVERSE: 34000,
  TAHOE: 48000,
  SUBURBAN: 51000,
  CAMARO: 33000,
  SPARK: 14000,
  TRAX: 19000,
  BLAZER: 33000,
},
VOLKSWAGEN: {
  JETTA: 22000,
  PASSAT: 26000,
  GOLF: 23000,
  TIGUAN: 28000,
  ATLAS: 33000,
  ARTEON: 37000,
  BEETLE: 21000,
  'ID.4': 40000,
  TAOS: 27000,
  'E-GOLF': 32000,
},
HYUNDAI: {
  ELANTRA: 19000,
  SONATA: 23000,
  TUCSON: 27000,
  'SANTA FE': 32000,
  KONA: 22000,
  PALISADE: 35000,
  VENUE: 18000,
  IONIQ: 24000,
  VELOSTER: 20000,
  ACCENT: 16000,
},
MAZDA: {
  MAZDA3: 22000,
  MAZDA6: 25000,
  'CX-5': 28000,
  'CX-9': 35000,
  'MX-5 MIATA': 26000,
  'CX-30': 24000,
  'CX-3': 21000,
  'MX-30': 28000,
  'RX-7': 38000,
  'RX-9': 42000,
},
KIA: {
  FORTE: 19000,
  OPTIMA: 23000,
  SELTOS: 22000,
  SPORTAGE: 28000,
  TELLURIDE: 36000,
  SOUL: 19000,
  RIO: 18000,
  K5: 24000,
  NIRO: 26000,
  STINGER: 33000,
},
SUBARU: {
  IMPREZA: 20000,
  LEGACY: 25000,
  OUTBACK: 29000,
  FORESTER: 28000,
  CROSSTREK: 24000,
  WRX: 27000,
  ASCENT: 35000,
  BRZ: 28000,
  XV: 21000,
  BAJA: 32000,
},
AUDI: {
  A3: 33000,
  A4: 36000,
  A6: 44000,
  Q3: 38000,
  Q5: 42000,
  Q7: 52000,
  Q8: 60000,
  TT: 46000,
  'E-TRON': 66000,
  RS3: 56000,
},
'MERCEDES-BENZ': {
  'C-CLASS': 40000,
  'E-CLASS': 52000,
  'S-CLASS': 80000,
  GLA: 35000,
  GLC: 42000,
  GLE: 54000,
  GLS: 60000,
  'A-CLASS': 36000,
  CLA: 33000,
  'AMG GT': 110000,
},
BMW: {
  '3SERIES': 41000,
  '5SERIES': 55000,
  '7SERIES': 84000,
  X1: 36000,
  X3: 42000,
  X5: 59000,
  X7: 74000,
  Z4: 64000,
  I3: 47000,
  I8: 150000,
},
LEXUS: {
  IS: 39000,
  ES: 41000,
  GS: 51000,
  RX: 45000,
  NX: 39000,
  LX: 92000,
  UX: 34000,
  LC: 93000,
  RC: 43000,
  LS: 76000,
},
VOLVO: {
  S60: 40000,
  S90: 52000,
  V60: 42000,
  XC40: 34000,
  XC60: 45000,
  XC90: 56000,
  V90: 53000,
  C40: 39000,
  V40: 36000,
  850: 25000,
},
TESLA: {
  MODEL3: 38000,
  MODELS: 80000,
  MODELX: 90000,
  MODELY: 48000,
  ROADSTER: 200000,
  CYBERTRUCK: 50000,
  SEMI: 150000,
  POWERWALL: 8000,
  SOLARROOF: 12000,
  POWERPACK: 200000,
},
};

// invocando HTML
const botonComprarCarro = document.getElementById ('boton_comprar_carro');
const botonVenderCarro = document.getElementById ('boton_vender_carro');
const popUp = document.getElementById ('pop_up');
const botonCerrarPagina = document.getElementById ('buton_cerrar');
const PaginaDondeSeCarganLosCarros = document.getElementById ('pagina_donde_se_cargan_los_carros');
const initialPage = document.getElementById ('initial-page');
const AbreModoGrid = document.getElementById ('abre_modo_grid');
const NavBar = document.getElementById('nav_bar');
const CargarCarrosGrid = document.getElementById ('cars_page_grid');
const CargarCarrosCarrusel = document.getElementById ('Cargar_carros_image_scroll');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const carouselContent = document.querySelector('.carousel-content');

//tomando accion en el HTMl

botonComprarCarro.addEventListener ('click',ComprarCarro);
botonCerrarPagina.addEventListener ('click',cerrarVentana);



//FUNCIONES

function ComprarCarro() {
  // Eliminamos duplicados
  const marcaUnicas = new Set();
  for (const marca of cars) {
    marcaUnicas.add(marca.marca.toUpperCase());
  }
  const marcasSinDuplicados = [...marcaUnicas];

  // Llamando la función para renderizar marcas
  renderizar(marcasSinDuplicados);
}

// Función para renderizar marcas
function renderizar(marcasSinDuplicados) {
  const imprimirMarcas = document.getElementById('marcas_sin_duplicados_impresas_en_pantalla');
  const ul = document.createElement('ul');

  // Foreach para imprimir cada marca en pantalla
  marcasSinDuplicados.forEach(function (marca) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = marca;
    a.href = '#';
    li.appendChild(a);

    // Llamamos la propiedad 'a' para que responda al 'onclick'
    a.onclick = function () {
      // Filtramos los autos por la marca seleccionada
      brunch = marca;
      const filteredCars = cars.filter(function (ele) {
        return ele.marca === brunch;
      });
      cerrarVentana();
      PaginaDondeSeCarganLosCarros.classList.remove('hidden');
      initialPage.classList.add('hidden');
      
      
      // Call the function to display filtered cars in grid mode
      
      ImprimirCarrosPaginaGrid(filteredCars);
      ImprimirCarrosCarrusel(filteredCars);
    };

    li.className = 'hover:text-sky-500 transition-colors duration-300';
    ul.appendChild(li);
  });

  // Limpiar contenido previo y agregar contenido
  imprimirMarcas.innerHTML = '';
  imprimirMarcas.appendChild(ul);
  ul.className = 'grid grid-cols-3 text-center gap-10';
  // Eliminar propiedad 'hidden'
  popUp.classList.remove('hidden');
}

const BotonPaginaGrid = AbreModoGrid.addEventListener('click', () => {
  NavBar.classList.remove('hidden');
  PaginaDondeSeCarganLosCarros.classList.add('hidden');
  CargarCarrosGrid.classList.remove('hidden');
});

// Function to print cars in grid mode
function ImprimirCarrosPaginaGrid(filteredCars) {
  // Clear the existing content
  CargarCarrosGrid.innerHTML = '';

  // Loop through each car in filteredCars
  for (const car of filteredCars) {
    CargarCarrosGrid.innerHTML += `
    <div class="bg-indigo-500 text-white rounded-lg shadow-lg p-6 animate-jump-in animate-once animate-ease-in animate-normal">
      <swiper-container class="mySwiper" pagination="true" pagination-type="progressbar" navigation="true">
        <swiper-slide>
            <div class="flex items-center mb-4 justify-center">
              <img src=${car.imagen} alt="Car Image" class="rounded-tl-3xl mb-4 rounded-br-3xl object-cover w-full h-full">
            </div>
            <div class='flex flex-col items-center justify-between gap-2'>
            <a href="#" onclick="openPopup('${car.modelo.toString().toLowerCase()}')" class="group block hover:bg-indigo-600">
              <h3 class="text-2xl font-bold">${car.marca} ${car.modelo}</h3>
            </a>
            

          
          <p class="text-lg mb-2">Color: ${car.color}</p>
          <p class="text-lg mb-2">Kilometraje: ${car.kilometraje}</p>
          <p class="text-lg mb-2">Ubicación: ${car.ubicacion}</p>
          <p class="text-3xl font-bold text-gray-900 dark:text-white">Precio: ${car.precio}</p>
          <button class="bg-white text-indigo-500 text-2xl px-4 py-3 rounded mt-4 hover:text-white hover:bg-black">Comprar</button>
        </div>
         </swiper-slide>
      </swiper-container>
    </div>`;
      
  } 
}


// FUNCTION TO PRINT CARS IN CARRUSEL IMAGE

function ImprimirCarrosCarrusel(filteredCars) {
  const carruselContainer = document.getElementById('CargarCarrosCarrusel');

  // Limpiar el contenido existente
  carruselContainer.innerHTML = '';

  // Crear un carrusel
  const carrusel = document.createElement('div');
  carrusel.classList.add('carousel');

  filteredCars.forEach((car) => {
    const carItem = document.createElement('div');
    carItem.classList.add('carousel-item');

    const carContent = `
      <div class="car-image">
        <img src=${car.imagen} alt="Car Image">
      </div>
      <div class="car-details">
        <h3 class="car-title">${car.marca} ${car.modelo}</h3>
        <p class="car-info">Color: ${car.color}</p>
        <p class="car-info">Kilometraje: ${car.kilometraje}</p>
        <p class="car-info">Ubicación: ${car.ubicacion}</p>
        <p class="car-price">${car.precio}</p>
        <button class="buy-button">Comprar</button>
      </div>
    `;
    


    carItem.innerHTML = carContent;
    carrusel.appendChild(carItem);

    
  });

  console.log(carrusel);
  carruselContainer.appendChild(carrusel);

}


// LOGICA BOTONES carrusel

let currentImageIndex = 0; 

prevButton.addEventListener('click', () => {
  const carruselItems = document.querySelectorAll('.carousel-item');
  carruselItems.forEach((item, index) => {
    if (index === currentImageIndex) {
      item.classList.remove('hidden'); 
    } else {
      item.classList.add('hidden'); 
    }
  });

  currentImageIndex = (currentImageIndex - 1 + carruselItems.length) % carruselItems.length;
});

nextButton.addEventListener('click', () => {
  const carruselItems = document.querySelectorAll('.carousel-item');
  carruselItems.forEach((item, index) => {
    if (index === currentImageIndex) {
      item.classList.remove('hidden'); 
    } else {
      item.classList.add('hidden'); 
    }
  });

  currentImageIndex = (currentImageIndex + 1) % carruselItems.length;
});



function cerrarVentana () {
    popUp.classList.add ('hidden');
}


// CARACTERISTICAS, CALLING API

function openPopup(model) {
  console.log('Se hizo clic en el modelo:', model);
  
  const modal = document.getElementById('pop_up_caracteristicas');

 
  const modalContent = document.getElementById('caracteristicas_entra_a_pantalla');

  
  const modelWithQuotes = model;
  console.log(modelWithQuotes);

  
  const apiUrl = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${modelWithQuotes}`;
  console.log(apiUrl);

  // Configuración de la solicitud AJAX
  const settings = {
    async: true,
    crossDomain: true,
    url: apiUrl,
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f939be4b45msh655f8c45b1254dbp106302jsnb2e76a3513b6',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  
  $.ajax(settings)
  .done(function (response) {
    console.log('Respuesta de la API:', response);
    
    if (Array.isArray(response.data) && response.data.length  > 0) {
      
      const carData = response.data[0];
      console.log('Aquí está el carData:', carData);
      
     
      const carInfo = `
        <pre>${JSON.stringify(carData, null, 2)}</pre>
      `;
      
      modalContent.innerHTML = carInfo;
      console.log('Información del automóvil:', carInfo);
  
     
      modal.classList.remove('hidden');
    } else {
      
      modalContent.innerHTML = 'No se encontraron datos para el modelo especificado.';

    }
  })}