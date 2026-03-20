// ============================================================
//  KLIKOO STORE — products.js
//  Catalogue produits + catégories
//  Ce fichier est chargé AVANT main.js
// ============================================================

const PRODUCTS=[
  
  {
    "id": 1,
    "name": "Support TV Mural Orientable HDL-117B",
    "description": [
      "Support mural universel pour TV LCD/Plasma de 14 à 55 pouces",
      "Orientable et inclinable pour un angle de vision optimal",
      "Installation facile avec tout le matériel inclus",
      "Compatible avec la majorité des téléviseurs du marché",
      "Conçu pour résister jusqu'à plusieurs dizaines de kilos"
    ],
    "price": 69,
    "oldPrice": 85,
    "stock": 45,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773486443/2_zceucl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486443/2_zceucl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486447/3_rkyzve.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486450/4_mr5axs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486454/5_o1cfbx.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 87
  },
  {
    "id": 2,
    "name": "Souris USB Filaire Kakusiga Bleue",
    "description": [
      "Souris optique filaire USB Kakusiga design ergonomique",
      "Triple liaison photoélectrique pour une précision maximale",
      "Compatible Windows et Mac sans installation de pilote",
      "Câble USB renforcé pour une durabilité longue durée",
      "Design confortable pour une utilisation prolongée"
    ],
    "price": 29,
    "oldPrice": 38,
    "stock": 80,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773486530/2_acagrd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486533/3_jexfg3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486542/4_l1ynzy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486547/5_wvjn4w.jpg"
    ],
    "category": "Bureau",
    "rating": 4.2,
    "reviews": 63
  },
  {
    "id": 3,
    "name": "Support TV Mural Fixe Panara PTS4080",
    "description": [
      "Support mural fixe pour TV LED/LCD/PDP de 40 à 80 pouces",
      "Capacité de charge jusqu'à 75 kg",
      "Compatible VESA de 200x200 à 400x600 mm",
      "Construction robuste en acier traité anti-corrosion",
      "Profil ultra-plat pour un rendu esthétique mural"
    ],
    "price": 69,
    "oldPrice": 85,
    "stock": 30,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773486606/1_c7c1sq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486608/2_idjfcu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486612/3_w3vmso.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486620/4_ekbquj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486628/5_kqe9av.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3,
    "reviews": 54
  },
  {
    "id": 4,
    "name": "Mini Ventilateur USB Portable DianDi",
    "description": [
      "Ventilateur USB portable design cerf mignon et original",
      "Rechargeable avec 3 vitesses réglables selon vos besoins",
      "Fourni avec une lanière pratique pour le transport",
      "Idéal pour le bureau, la maison ou les voyages",
      "Silencieux et léger pour une utilisation discrète"
    ],
    "price": 47,
    "oldPrice": 58,
    "stock": 55,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773486735/1_jwxqpn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486739/2_isokxk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486742/3_opkqot.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486750/4_kurfsj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486759/5_lbvg99.jpg"
    ],
    "category": "Accueil",
    "rating": 4.4,
    "reviews": 42
  },
  {
    "id": 5,
    "name": "Sac à Dos Laptop Bicolore Gris/Noir",
    "description": [
      "Sac à dos pour ordinateur portable jusqu'à 15.6 pouces",
      "Imperméable avec port USB intégré pour charger en déplacement",
      "Compartiment rembourré pour protéger votre laptop",
      "Design bicolore moderne gris et noir",
      "Bretelles ergonomiques pour un confort optimal"
    ],
    "price": 139,
    "oldPrice": 160,
    "stock": 35,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773486876/1_aviase.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486879/2_jsc2h4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486889/3_ijlnu1.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486893/4_jndcmt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486902/5_hzylv3.jpg"
    ],
    "category": "Sacs",
    "rating": 4.6,
    "reviews": 98
  },
  {
    "id": 6,
    "name": "Routeur WiFi TP-Link AC750 Archer C20",
    "description": [
      "Routeur sans fil bi-bande AC750 offrant 300+433 Mbps",
      "3 antennes pour une couverture WiFi étendue et stable",
      "Supporte les modes routeur, point d'accès et répéteur",
      "Compatible IPTV pour un streaming fluide",
      "Configuration simple via l'application Tether"
    ],
    "price": 244,
    "oldPrice": 290,
    "stock": 20,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773820812/1_c1uwbq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486962/2_mhgt80.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486966/3_cipuwc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486970/4_yeg7uv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773486974/5_q544b3.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7,
    "reviews": 112
  },
  {
    "id": 7,
    "name": "Souris Sans Fil Jedel W380+ Noire",
    "description": [
      "Souris optique sans fil Jedel W380+ avec récepteur USB nano",
      "DPI réglable pour s'adapter à tous les usages",
      "Design ergonomique pour une prise en main confortable",
      "Compatible PC et Mac sans installation de pilote",
      "Longue autonomie pour une utilisation quotidienne"
    ],
    "price": 79,
    "oldPrice": 98,
    "stock": 60,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773487042/1_ezeizj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487045/2_qbfix9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487054/3_sm8y0y.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487063/4_qfs7so.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487070/5_uxodtl.jpg"
    ],
    "category": "Bureau",
    "rating": 4.3,
    "reviews": 75
  },
  {
    "id": 8,
    "name": "Souris Bluetooth BT Mouse Multicolore",
    "description": [
      "Souris Bluetooth ultra-mince et rechargeable",
      "Compatible Android, iOS et Windows sans récepteur USB",
      "Disponible en 4 couleurs pastel tendance",
      "Design fin et élégant pour bureau et déplacement",
      "Connexion Bluetooth stable jusqu'à 10 mètres"
    ],
    "price": 44,
    "oldPrice": 55,
    "stock": 75,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773821124/1_qhftxj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487111/2_xfvfjh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487116/3_qqb7zo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487123/4_xxvk5e.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487131/5_v8ajz8.jpg"
    ],
    "category": "Bureau",
    "rating": 4.4,
    "reviews": 89
  },
  {
    "id": 9,
    "name": "Sacoche Laptop Hoco 15 Pouces Noire Housse",
    "description": [
      "Sacoche de protection pour ordinateur portable Hoco 15 pouces",
      "Matériaux premium pour une protection maximale",
      "Compartiments multiples pour accessoires et documents",
      "Bandoulière réglable pour un port confortable",
      "Design professionnel sobre et élégant"
    ],
    "price": 154,
    "oldPrice": 195,
    "stock": 30,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773821298/1_ntyefc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487279/2_qd9url.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487293/3_qt7wth.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487297/4_pkvhxb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487301/5_fq9xpz.jpg"
    ],
    "category": "Sacs",
    "rating": 4.6,
    "reviews": 88
  },
  {
    "id": 10,
    "name": "Enceinte Bluetooth Karaoke Double Micro LED",
    "description": [
      "Mini enceinte Bluetooth avec 2 microphones sans fil inclus",
      "Éclairage LED coloré pour une ambiance festive",
      "Portable et rechargeable, idéale pour le karaoké maison",
      "Son puissant et clair pour des soirées mémorables",
      "Connexion Bluetooth simple avec tous les appareils"
    ],
    "price": 184,
    "oldPrice": 229,
    "stock": 22,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773487402/1_mphben.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487406/2_tre4xr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487415/3_cb7bxa.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487419/4_bptzss.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487423/5_zdsok6.jpg"
    ],
    "category": "Musique",
    "rating": 4.5,
    "reviews": 89
  },
  {
    "id": 11,
    "name": "Mini Ventilateur Bureau Design Animal",
    "description": [
      "Mini ventilateur de bureau design animal mignon et original",
      "Alimentation USB avec 2 vitesses réglables",
      "Rechargeable, idéal pour les enfants et le bureau",
      "Silencieux pour ne pas perturber la concentration",
      "Compact et facile à transporter partout"
    ],
    "price": 49,
    "oldPrice": 60,
    "stock": 48,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773487512/1_dlpcvr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487516/2_xsmmhx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487520/3_jm5x8c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487525/4_ighn0r.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487534/5_pn4lc5.jpg"
    ],
    "category": "Accueil",
    "rating": 4.5,
    "reviews": 56
  },
  {
    "id": 12,
    "name": "Souris Filaire Gaming Kakusiga Rouge",
    "description": [
      "Souris filaire gaming Kakusiga au design sportif rouge",
      "Triple liaison photoélectrique pour une précision accrue",
      "Connexion USB plug & play sans installation",
      "Haute précision optique pour le gaming et le bureau",
      "Câble tressé résistant pour une longue durée de vie"
    ],
    "price": 31,
    "oldPrice": 40,
    "stock": 70,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773487622/1_oalupy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487626/2_krllvd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487631/3_hrcy5v.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487640/4_dkfdja.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487645/5_dgxm9d.jpg"
    ],
    "category": "Bureau",
    "rating": 4.1,
    "reviews": 38
  },
  {
    "id": 13,
    "name": "Enceinte Bluetooth WSJAR 8.5 Inch RGB",
    "description": [
      "Enceinte multimédia portable 8.5 pouces avec éclairage RGB",
      "Batterie intégrée pour une utilisation sans fil prolongée",
      "Entrées USB flash, Type-C et microphone intégrés",
      "Son puissant et basses profondes pour toutes occasions",
      "Design moderne et compact facile à transporter"
    ],
    "price": 219,
    "oldPrice": 270,
    "stock": 18,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773821487/1_iiecly.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487710/2_zssq1p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487720/3_pudlg5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487730/4_lhph1t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487738/5_dqrprq.jpg"
    ],
    "category": "Musique",
    "rating": 4.4,
    "reviews": 78
  },
  {
    "id": 14,
    "name": "Enceinte Bluetooth Wireless Z5 LED Verte",
    "description": [
      "Enceinte Bluetooth sans fil Z5 avec lumière LED ambiante",
      "Design transparent moderne et tendance",
      "Compatible TF card et ligne AUX pour plus de polyvalence",
      "Son clair et net pour une écoute agréable",
      "Batterie rechargeable pour une utilisation mobile"
    ],
    "price": 74,
    "oldPrice": 92,
    "stock": 40,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773821709/1_onvvgc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487781/2_wdi032.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487790/3_syjklj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487796/4_t30e62.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773487804/5_qthepj.jpg"
    ],
    "category": "Musique",
    "rating": 4.3,
    "reviews": 92
  },
  {
    "id": 15,
    "name": "Souris Sans Fil Kakusiga 2.4G Noire",
    "description": [
      "Souris sans fil optique Kakusiga 2.4G haute performance",
      "Design gaming élégant et ergonomique couleur noire",
      "Récepteur USB nano discret à laisser branché",
      "Confortable et précise pour une utilisation quotidienne",
      "Longue autonomie des piles pour moins d'interruptions"
    ],
    "price": 57,
    "oldPrice": 70,
    "stock": 65,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773490412/1_juzul3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773490416/2_vsfslg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773490422/3_fmgb3s.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773490614/4_zhgsla.jpg"
    ],
    "category": "Bureau",
    "rating": 4.1,
    "reviews": 52
  },
  {
    "id": 16,
    "name": "Agrafeuse Bureau TA LI NO:0267 Noire",
    "description": [
      "Agrafeuse professionnelle TA LI robuste et fiable",
      "Format standard 24/6 compatible avec agrafes courantes",
      "Agrafage facile et précis pour tous types de papiers",
      "Construction solide pour une utilisation intensive au bureau",
      "Design sobre et élégant noir pour un bureau professionnel"
    ],
    "price": 49,
    "oldPrice": 60,
    "stock": 70,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773824763/1_cmypbe.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488717/2_tkugwb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488722/3_udnq5q.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488750/4_molwio.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488760/5_faonws.jpg"
    ],
    "category": "Bureau",
    "rating": 4.2,
    "reviews": 48
  },
  {
    "id": 17,
    "name": "Routeur WiFi TP-Link 300Mbps TL-WR844N",
    "description": [
      "Routeur multi-mode Wi-Fi offrant jusqu'à 300 Mbps",
      "2 antennes 5dBi pour une excellente portée du signal",
      "Supporte l'IPTV pour la télévision via Internet",
      "Fonctionnalité 4-en-1 : routeur, répéteur, point d'accès, client",
      "Configuration facile via l'application Tether"
    ],
    "price": 169,
    "oldPrice": 205,
    "stock": 22,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773824910/1_vmazxx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488810/2_olbrn3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488832/3_hk5lfl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488842/4_q0tlap.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488851/5_gwjhl7.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 167
  },
  {
    "id": 18,
    "name": "Ventilateur Portable RGB Arc-en-Ciel",
    "description": [
      "Ventilateur de bureau portable avec éclairage RGB arc-en-ciel",
      "3 vitesses réglables pour adapter le flux d'air",
      "Rechargeable via USB pour une utilisation sans câble",
      "Design moderne et élégant pour bureau et salon",
      "Silencieux pour ne pas perturber votre environnement"
    ],
    "price": 169,
    "oldPrice": 205,
    "stock": 30,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773488898/1_gjuwpl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488903/2_pgvrau.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488907/3_m3eurb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488916/4_hnaczk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773488925/5_xzedvd.jpg"
    ],
    "category": "Accueil",
    "rating": 4.6,
    "reviews": 63
  },
  {
    "id": 19,
    "name": "Support Voiture Magnétique GM Smartphone",
    "description": [
      "Support magnétique voiture pour smartphone et GPS",
      "Installation par ventouse solide sur pare-brise ou tableau de bord",
      "Rotation 360° pour une visibilité optimale",
      "Compatible avec tous les smartphones et appareils GPS",
      "Fixation magnétique puissante pour routes accidentées"
    ],
    "price": 44,
    "oldPrice": 55,
    "stock": 90,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773825032/1_w54eol.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489000/2_lxddsq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489005/3_utsuyu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489010/4_jcnbov.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489015/5_zuw6q1.jpg"
    ],
    "category": "Automobiles",
    "rating": 4.3,
    "reviews": 87
  },
  {
    "id": 20,
    "name": "Switch Réseau TP-Link 8 Ports LS1008",
    "description": [
      "Switch bureau 8 ports 10/100 Mbps TP-Link performant",
      "Plug & play sans configuration requise",
      "Fonctionnement silencieux sans ventilateur",
      "Technologie d'économie d'énergie automatique",
      "Vitesse totale de commutation jusqu'à 200 Mbps"
    ],
    "price": 94,
    "oldPrice": 218,
    "stock": 35,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773825139/1_ltd8wb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489323/2_rrlehs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489332/3_zcfaez.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489342/4_vvp6op.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489356/5_wuya0q.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 95
  },
  {
    "id": 21,
    "name": "Sacoche Laptop 15 Pouces Imperméable Noire",
    "description": [
      "Sacoche pour ordinateur portable 15 pouces imperméable",
      "Compartiment rembourré pour protéger votre laptop",
      "Bandoulière réglable pour un port confortable",
      "Matériau résistant à l'eau pour protéger vos affaires",
      "Plusieurs compartiments pour ranger accessoires et documents"
    ],
    "price": 149,
    "oldPrice": 188,
    "stock": 28,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773825339/1_ztjyet.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489393/2_lgf3sr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489401/3_airzhc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489409/4_znvp2o.jpg"
    ],
    "category": "Sacs",
    "rating": 4.5,
    "reviews": 73
  },
  {
    "id": 22,
    "name": "Routeur WiFi TP-Link AC1200 Archer C50",
    "description": [
      "Routeur bi-bande AC1200 offrant 300+867 Mbps",
      "4 antennes 5dBi pour une couverture maximale",
      "Mode point d'accès pour étendre votre réseau existant",
      "Conception moderne blanche élégante",
      "Compatible avec tous les fournisseurs d'accès Internet"
    ],
    "price": 284,
    "oldPrice": 360,
    "stock": 18,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773825502/1_noiot5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489448/2_kat1cc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489461/3_eywddd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489467/4_cmmdnz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489476/5_kndg58.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 143
  },
  {
    "id": 23,
    "name": "Routeur WiFi TP-Link AC1200 Archer C6U",
    "description": [
      "Routeur WiFi Gigabit bi-bande AC1200 haut de gamme",
      "Technologie MU-MIMO pour plusieurs appareils simultanés",
      "4 antennes pour 867+300 Mbps de débit combiné",
      "Port USB 2.0 pour partage de fichiers en réseau",
      "Configuration simple et rapide pour tous les utilisateurs"
    ],
    "price": 469,
    "oldPrice": 599,
    "stock": 12,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773489530/1_wxyheu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489535/2_ryu56d.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489541/3_ysxlir.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489546/4_eyij6t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773489552/5_hdjs6f.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8,
    "reviews": 198
  },
  {
    "id": 24,
    "name": "Mini Ventilateur Lapin USB Rose/Marron",
    "description": [
      "Mini ventilateur mignon design lapin adorable",
      "USB rechargeable avec 3 couleurs disponibles",
      "Compact et silencieux pour bureau ou chambre",
      "Léger et facile à transporter partout",
      "Idéal comme cadeau original pour enfants et adultes"
    ],
    "price": 41,
    "oldPrice": 50,
    "stock": 60,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773491445/1_ngqmeo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773491449/2_goxdvw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773491455/3_uyy4xn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773491466/4_g1vhug.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773491476/5_jqni3j.jpg"
    ],
    "category": "Accueil",
    "rating": 4.5,
    "reviews": 48
  },
  {
    "id": 25,
    "name": "Support Voiture Gravity Kakusiga 360°",
    "description": [
      "Support voiture à gravité Kakusiga auto-serrant",
      "Fixation sur grille d'aération facile et sécurisée",
      "Rotation 360° pour une orientation parfaite",
      "Compatible avec tous les smartphones de toutes tailles",
      "Mécanisme gravitationnel sans aimant préservant les cartes"
    ],
    "price": 39,
    "oldPrice": 98,
    "stock": 85,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773492122/1_pfw020.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773492127/2_lrspxi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773492137/3_xxikhz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773492146/4_mpest7.jpg"
    ],
    "category": "Automobiles",
    "rating": 4.4,
    "reviews": 102
  },
  {
    "id": 26,
    "name": "Mini Ventilateur Lapin DianDi DD8022 Rose",
    "description": [
      "Ventilateur portatif USB design lapin DianDi mignon",
      "Rechargeable avec batterie intégrée non amovible",
      "Livré avec un support de bureau pratique",
      "Idéal pour bureau, chambre ou déplacement",
      "Design rose adorable parfait comme cadeau"
    ],
    "price": 47,
    "oldPrice": 58,
    "stock": 42,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773825753/1_vggpwg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773492632/2_yhpe7b.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773492645/3_aibdeu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773492651/4_xld0hv.jpg"
    ],
    "category": "Accueil",
    "rating": 4.3,
    "reviews": 39
  },
  {
    "id": 27,
    "name": "Routeur WiFi TP-Link 300Mbps TL-WR840N",
    "description": [
      "Routeur sans fil N offrant jusqu'à 300 Mbps de débit",
      "2 antennes 5dBi pour une bonne portée du signal WiFi",
      "Support IPTV intégré pour la télévision via Internet",
      "Multimode 4-en-1 pour s'adapter à tous les usages",
      "Configuration simple via l'application mobile dédiée"
    ],
    "price": 174,
    "oldPrice": 210,
    "stock": 25,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773825640/1_ynzb0k.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773493373/2_ar8zo4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773493379/3_tbpxxe.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773493386/4_cntt24.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 134
  },
  {
    "id": 28,
    "name": "Switch Réseau TP-Link 8 Ports Gigabit LS1008G",
    "description": [
      "Switch bureau 8 ports Gigabit TP-Link LiteWave performant",
      "Garantie 3 ans pour une tranquillité d'esprit assurée",
      "Plug & play sans aucune configuration nécessaire",
      "Fonctionnement silencieux sans ventilateur bruyant",
      "Économique en énergie grâce à la technologie verte"
    ],
    "price": 209,
    "oldPrice": 265,
    "stock": 22,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773825892/1_e1ysl3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773496711/2_c5ccbt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773496717/3_wtq0oh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773496729/4_e6kls9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773496741/5_zpo9y4.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7,
    "reviews": 87
  },
  {
    "id": 29,
    "name": "Chargeur Rapide 25W Type-C DigitPlus Blanc",
    "description": [
      "Chargeur rapide 25W USB-C DigitPlus ultra-compact blanc",
      "Compatible Samsung Galaxy et tous appareils USB-C",
      "Certifié CE pour une sécurité maximale garantie",
      "Charge ultra-rapide pour gagner du temps au quotidien",
      "Design compact pour voyager ou bureau sans encombrer"
    ],
    "price": 44,
    "oldPrice": 55,
    "stock": 120,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773506210/1_ktzdia.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506210/2_dgpksr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506215/3_irqkqj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506219/4_sjesoi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506223/5_n9xdim.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 134
  },
  {
    "id": 30,
    "name": "Souris Sans Fil DPlus D86 2.4G Noire",
    "description": [
      "Souris sans fil ergonomique DPlus D86 technologie 2.4GHz",
      "Design stable et confortable pour une longue utilisation",
      "Fonctionnement silencieux pour un environnement calme",
      "Précision optique fiable pour bureau et usage quotidien",
      "Récepteur USB nano compact à laisser en permanence"
    ],
    "price": 57,
    "oldPrice": 70,
    "stock": 65,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773506695/1_vlgdsb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506700/3_b3aqnf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506700/3_b3aqnf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506705/4_jpc8br.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773506710/5_t8ge0l.jpg"
    ],
    "category": "Bureau",
    "rating": 4.2,
    "reviews": 67
  },
  {
    "id": 31,
    "name": "Sac à Dos Laptop Gris Anti-Vol USB",
    "description": [
      "Sac à dos laptop gris avec port USB intégré pratique",
      "Dos rembourré ergonomique pour un confort optimal",
      "Système antivol pour protéger vos affaires en déplacement",
      "Compartiment dédié pour ordinateur jusqu'à 15.6 pouces",
      "Imperméable pour protéger votre matériel par tout temps"
    ],
    "price": 129,
    "oldPrice": 159,
    "stock": 32,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773826219/1_xifgfj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773689129/2_cfgpyg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773689128/3_rv0eae.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773689128/4_y2fznc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773689128/5_p5btu1.jpg"
    ],
    "category": "Sacs",
    "rating": 4.6,
    "reviews": 88
  },
  {
    "id": 32,
    "name": "Switch Réseau TP-Link 5 Ports LS1005",
    "description": [
      "Switch bureau 5 ports 10/100 Mbps TP-Link compact",
      "Format blanc élégant pour s'intégrer dans tout bureau",
      "Plug & play sans installation ni configuration",
      "Idéal pour les réseaux domestiques et de petits bureaux",
      "Économique en énergie grâce à la gestion automatique"
    ],
    "price": 84,
    "oldPrice": 105,
    "stock": 40,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773826476/1_mdcsts.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773694118/3_vgxtsv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773694119/4_j8sqyz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773694119/5_pl9e2s.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3,
    "reviews": 65
  },
  {
    "id": 33,
    "name": "Mini Ventilateur Fruit Yase USB Violet",
    "description": [
      "Mini ventilateur portable YASE design fruit coloré et original",
      "USB rechargeable pour une utilisation flexible",
      "Livré avec un socle pratique pour poser sur bureau",
      "Silencieux et léger pour ne pas déranger",
      "Design original parfait comme cadeau ou accessoire bureau"
    ],
    "price": 54,
    "oldPrice": 68,
    "stock": 50,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773787380/1_r4nt77.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787380/2_bwwiiy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787380/3_dfikue.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787381/4_oh3tpa.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787381/5_zmj4jn.jpg"
    ],
    "category": "Accueil",
    "rating": 4.4,
    "reviews": 45
  },
  {
    "id": 34,
    "name": "Ventilateur Bureau Super Fan Rotatif",
    "description": [
      "Ventilateur de bureau Super Fan rechargeable élégant",
      "Design lunaire moderne et esthétique",
      "Rotation automatique pour diffuser l'air uniformément",
      "Batterie longue durée pour une utilisation sans fil prolongée",
      "Charge via USB pratique et universel"
    ],
    "price": 119,
    "oldPrice": 159,
    "stock": 25,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773826620/1_rmgt7i.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787451/2_zfapdp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787451/3_wsbxi2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787452/4_xeha4y.jpg"
    ],
    "category": "Accueil",
    "rating": 4.5,
    "reviews": 62
  },
  {
    "id": 35,
    "name": "Switch Réseau Mercusys 5 Ports Gigabit MS105G",
    "description": [
      "Switch bureau 5 ports Gigabit Mercusys ultra-performant",
      "Full duplex pour des transferts de données optimaux",
      "Plug & play sans aucune configuration requise",
      "Économie d'énergie intelligente pour réduire la consommation",
      "Format compact et discret pour tout type de bureau"
    ],
    "price": 109,
    "oldPrice": 138,
    "stock": 30,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773826739/1_ezqmvz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787506/2_p9keah.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787507/3_zywwdi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787508/4_demth9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787508/5_tnwjva.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 78
  },
  {
    "id": 36,
    "name": "Ventilateur LED Pliable Affichage Digital",
    "description": [
      "Ventilateur portatif avec écran LED numérique intégré",
      "Design pliable et robot mignon pour un rangement facile",
      "3 vitesses réglables pour adapter le confort",
      "Rechargeable via USB pour une utilisation mobile",
      "Compact et léger, idéal pour bureau et déplacements"
    ],
    "price": 79,
    "oldPrice": 100,
    "stock": 38,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773787572/1_kcxaas.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787573/2_n2upkv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787573/3_iw05lt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787574/4_sgss1f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787575/5_amn1tl.jpg"
    ],
    "category": "Accueil",
    "rating": 4.4,
    "reviews": 51
  },
  {
    "id": 37,
    "name": "Ventilateur Bureau Super Desktop Circulaire",
    "description": [
      "Ventilateur bureau circulation d'air avec éclairage LED annulaire",
      "Design circulaire moderne disponible en 2 coloris",
      "Batterie forte rechargeable via USB pour longue autonomie",
      "Bonne circulation d'air pour rafraîchir efficacement",
      "Silencieux et discret pour une utilisation au bureau"
    ],
    "price": 139,
    "oldPrice": 175,
    "stock": 22,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773787679/1_pniptx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787680/2_xpjcbv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787681/3_rbltdm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787683/4_jhypkv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787684/5_gg4xzy.jpg"
    ],
    "category": "Accueil",
    "rating": 4.3,
    "reviews": 47
  },
  {
    "id": 38,
    "name": "Chargeur Rapide 25W Type-C DigitPlus Bleu",
    "description": [
      "Chargeur rapide 25W USB-C DigitPlus fond bleu certifié CE",
      "Ultra-compact pour se glisser partout sans encombrer",
      "Compatible Samsung Galaxy et tous appareils USB-C",
      "Charge rapide pour récupérer rapidement de l'autonomie",
      "Design soigné fond bleu moderne et élégant"
    ],
    "price": 44,
    "oldPrice": 55,
    "stock": 110,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773787774/1_gjw31d.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787775/2_yr2lsl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787776/3_hvdioj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787778/4_xugdao.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787779/5_fn6h3g.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 118
  },
  {
    "id": 39,
    "name": "Switch Réseau TP-Link 5 Ports Gigabit LS1005G",
    "description": [
      "Switch bureau 5 ports Gigabit TP-Link LiteWave performant",
      "Plug & play sans installation ni configuration",
      "Fonctionnement silencieux sans ventilateur",
      "Technologie verte pour une consommation minimale",
      "Format compact idéal pour bureau et usage domestique"
    ],
    "price": 154,
    "oldPrice": 195,
    "stock": 28,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773787860/1_t8zsww.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787860/2_zmuu0y.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787861/3_pcjmim.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787863/4_wriqhn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787865/5_vlexrs.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 92
  },
  {
    "id": 40,
    "name": "Support TV Mural Orientable VESA Bras Double",
    "description": [
      "Support mural TV orientable à bras double flexible",
      "Compatible VESA de 75x75 à 400x400 mm",
      "Capacité de charge jusqu'à 36.4 kg",
      "Inclinaison et orientation réglables facilement",
      "Bras articulé pour repositionner la TV selon vos besoins"
    ],
    "price": 189,
    "oldPrice": 250,
    "stock": 18,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773787977/1_hi7irc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787978/2_igrsfa.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787979/3_zgyfpn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773787982/4_ryonsu.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 56
  },
  {
    "id": 41,
    "name": "Piège à Mouches Électrique Rotatif",
    "description": [
      "Piège électrique à mouches rotatif efficace et pratique",
      "Appât à base de farine d'arêtes 100% non toxique",
      "1 paquet suffisant pour 2 à 3 utilisations complètes",
      "Solution écologique sans insecticides chimiques",
      "Facile à utiliser et à nettoyer après utilisation"
    ],
    "price": 109,
    "oldPrice": 138,
    "stock": 30,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773788093/1_ts14k6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788094/2_jrgygs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788095/3_ew05za.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788097/4_gwpj6o.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788098/5_tcej5o.jpg"
    ],
    "category": "Ménage",
    "rating": 4.2,
    "reviews": 76
  },
  {
    "id": 42,
    "name": "Switch Réseau Mercusys 8 Ports MS108 Blanc",
    "description": [
      "Switch bureau 8 ports 10/100 Mbps Mercusys blanc élégant",
      "Plug & play sans configuration requise",
      "Technologie d'économie d'énergie automatique",
      "Idéal pour réseau domestique et petite entreprise",
      "Format compact et discret pour tout environnement"
    ],
    "price": 84,
    "oldPrice": 105,
    "stock": 38,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773826859/1_jbsjqp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788158/2_zxtjqp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788160/3_rxbq5p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788162/4_lsitts.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773788163/5_dyyksb.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 67
  },
  {
    "id": 43,
    "name": "Souris Sans Fil Hoco GM28 Business 2.4G",
    "description": [
      "Souris business sans fil Hoco GM28 2.4G professionnelle",
      "Disponible en noir et blanc pour correspondre à votre style",
      "3 niveaux de DPI réglables pour s'adapter à chaque usage",
      "Fonctionnement silencieux pour les espaces de travail calmes",
      "Ergonomique pour une utilisation confortable toute la journée"
    ],
    "price": 69,
    "oldPrice": 85,
    "stock": 50,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773789444/1_av2yuv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789445/2_jesfvr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789445/3_anexgr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789446/4_tieqc5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789449/5_w4kgcm.jpg"
    ],
    "category": "Bureau",
    "rating": 4.5,
    "reviews": 108
  },
  {
    "id": 44,
    "name": "Souris Sans Fil DPlus D85 Wireless",
    "description": [
      "Souris sans fil DPlus D85 avec récepteur USB 2.4GHz",
      "Résolution 1200 DPI pour une précision optimale",
      "Design compact et ergonomique pour toutes les mains",
      "Pile AA incluse pour une utilisation immédiate",
      "Compatible Windows, Mac et Linux sans pilote"
    ],
    "price": 49,
    "oldPrice": 60,
    "stock": 80,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773789507/1_mpor9f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789508/2_svmxem.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789510/3_ykn8kq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789512/4_uhmmjq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789513/5_wgnvrh.jpg"
    ],
    "category": "Bureau",
    "rating": 4.3,
    "reviews": 72
  },
  {
    "id": 45,
    "name": "Agrafeuse Bureau Saguan SG-30 Gris Pastel",
    "description": [
      "Agrafeuse basique Saguan SG-30 moderne et légère",
      "Format standard 24/6 compatible avec agrafes courantes",
      "Design arrondi élégant en coloris pastel tendance",
      "Légère et pratique pour bureau, école ou maison",
      "Idéale comme cadeau ou accessoire de bureau stylé"
    ],
    "price": 37,
    "oldPrice": 55,
    "stock": 75,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773826999/1_gc1kwu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789577/2_oyxyf9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789579/3_cuzujd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789580/4_uvnbpk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789582/5_nmzuyr.jpg"
    ],
    "category": "Bureau",
    "rating": 4.0,
    "reviews": 34
  },
  {
    "id": 46,
    "name": "Routeur WiFi TP-Link AC750 Archer C24",
    "description": [
      "Routeur bi-bande Wi-Fi AC750 offrant 433+300 Mbps",
      "4 antennes pour une couverture WiFi améliorée",
      "Modes multiples : routeur, répéteur, point d'accès",
      "Support IPTV et 4K TV pour un streaming optimal",
      "Configuration rapide via l'application Tether"
    ],
    "price": 229,
    "oldPrice": 290,
    "stock": 20,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773827114/1_cw3dm7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789645/2_ucipcm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789647/3_pbpv9l.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789649/4_pwu9ou.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789650/5_ydkevq.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 122
  },
  {
    "id": 47,
    "name": "Souris USB Optique DPlus D80 Filaire Noire",
    "description": [
      "Souris filaire USB optique DPlus D80 haute précision",
      "Design ergonomique et symétrique pour droitiers et gauchers",
      "Compatible Windows, Linux et autres systèmes",
      "Plug & play sans installation de pilote nécessaire",
      "Câble USB renforcé pour une durabilité maximale"
    ],
    "price": 37,
    "oldPrice": 55,
    "stock": 100,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773789716/1_mkepuy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789717/2_zinwr8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789719/3_llrhyu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789720/4_tf4dwr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789723/5_h9hurs.jpg"
    ],
    "category": "Bureau",
    "rating": 4.2,
    "reviews": 93
  },
  {
    "id": 48,
    "name": "Souris USB Optique Jedel M61 Filaire Noire",
    "description": [
      "Souris filaire USB optique Jedel M61 design gaming",
      "Haute précision optique pour gaming et usage bureautique",
      "Compatible multi-systèmes Windows et Linux",
      "Prise en main confortable pour une utilisation prolongée",
      "Plug & play sans installation de pilote"
    ],
    "price": 41,
    "oldPrice": 50,
    "stock": 70,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773789781/1_ryguk1.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789783/2_tybozo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789785/3_mcm62x.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789786/4_zym7br.jpg"
    ],
    "category": "Bureau",
    "rating": 4.1,
    "reviews": 48
  },
  {
    "id": 49,
    "name": "Mini Ventilateur Mickey Mouse USB Rose",
    "description": [
      "Mini ventilateur portable design Mickey Mouse adorable",
      "USB rechargeable pour une utilisation flexible",
      "Socle amovible pour le poser sur bureau ou table",
      "Léger et silencieux pour un confort discret",
      "Idéal comme cadeau original pour fans de Mickey"
    ],
    "price": 47,
    "oldPrice": 58,
    "stock": 45,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773789841/1_gl6ifi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789843/2_roaynm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789845/3_qfbbuy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789847/4_tncj4i.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789849/5_vyx6gb.jpg"
    ],
    "category": "Accueil",
    "rating": 4.4,
    "reviews": 57
  },
  {
    "id": 50,
    "name": "Chargeur Rapide 25W Type-C DigitPlus Noir",
    "description": [
      "Chargeur rapide 25W USB-C DigitPlus compact noir certifié CE",
      "Compatible Samsung Galaxy et tous appareils USB-C",
      "Charge ultra-rapide pour gagner du temps au quotidien",
      "Design compact pour voyager ou bureau sans encombrer",
      "Protection contre la surtension et la surchauffe"
    ],
    "price": 44,
    "oldPrice": 65,
    "stock": 110,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773789907/1_c8myip.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789909/2_mksndr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789910/3_dev0dx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789912/4_vfaebl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773789914/5_r1uboj.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 118
  },
  {
    "id": 51,
    "name": "Switch Gigabit Mercusys MS108G 8 Ports",
    "description": [
      "Switch de bureau 8 ports Gigabit 10/100/1000 Mbps",
      "Plug & Play, aucune configuration requise",
      "Technologie d'économie d'énergie automatique",
      "Idéal pour les réseaux domestiques et professionnels",
      "Design compact et silencieux sans ventilateur"
    ],
    "price": 175,
    "oldPrice": 205,
    "stock": 50,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773838283/1_shj0fq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838283/2_g1pylz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838286/3_uf0ar2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838290/4_qaty7p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838293/5_qjox2l.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 320
  },
  {
    "id": 52,
    "name": "Switch Fast Ethernet Mercusys MS105 5 Ports",
    "description": [
      "Switch de bureau 5 ports 10/100 Mbps",
      "Compact et léger, facile à transporter",
      "Installation facile sans aucune configuration",
      "Parfait pour les petits réseaux domestiques",
      "Alimentation via adaptateur secteur inclus"
    ],
    "price": 70,
    "oldPrice": 85,
    "stock": 80,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773838370/1_ddoita.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838373/2_h0oddn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838376/3_pbdbu2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838388/4_prmdi6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838392/5_fusf2v.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3,
    "reviews": 210
  },
  {
    "id": 53,
    "name": "Mini Enceinte Karaoké Bluetooth avec 2 Micros",
    "description": [
      "Mini enceinte sans fil Bluetooth avec lumières LED colorées",
      "2 microphones inclus pour le karaoké en duo",
      "Idéale pour les soirées et animations en famille",
      "Connexion Bluetooth stable et rapide",
      "Design portable et léger, facile à transporter"
    ],
    "price": 185,
    "oldPrice": 229,
    "stock": 30,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773838455/1_cyot8o.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838459/2_taqtqm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838462/3_ddqnxv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838465/4_lipwad.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838469/5_m0ngoh.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 150
  },
  {
    "id": 54,
    "name": "Support Voiture Magnétique KAKUSIGA Air Vent",
    "description": [
      "Support téléphone magnétique pour grille d'aération",
      "Fixation ultra-forte grâce aux aimants puissants",
      "Positionnement libre à 360° pour un angle optimal",
      "Compatible avec tous les smartphones iOS et Android",
      "Installation et retrait rapide en une main"
    ],
    "price": 45,
    "oldPrice": 60,
    "stock": 100,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773838568/1_qw5ter.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838572/2_ej6re1.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838572/3_de55mu.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773838577/4_zedqrw.png"
    ],
    "category": "Automobiles",
    "rating": 4.2,
    "reviews": 480
  },
  {
    "id": 55,
    "name": "Sacoche Ordinateur Portable 15.6\"",
    "description": [
      "Sacoche de transport pour laptop jusqu'à 15.6 pouces",
      "Matière néoprène résistante aux chocs et rayures",
      "Poignées confortables pour un transport facile",
      "Légère et pratique pour un usage quotidien",
      "Design élégant adapté au bureau et aux déplacements"
    ],
    "price": 120,
    "oldPrice": 150,
    "stock": 60,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773839176/1_bfwfit.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773839177/2_znqxdn.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773839178/3_eo6nk4.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773839181/4_b5lexz.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773839187/5_rcuw8c.png"
    ],
    "category": "Électronique",
    "rating": 4.3,
    "reviews": 195
  },
  {
    "id": 56,
    "name": "Souris Filaire USB DPlus D80",
    "description": [
      "Souris optique USB haute précision",
      "Design symétrique ergonomique pour un usage prolongé",
      "Compatible Windows, Mac et Linux",
      "Plug & Play, aucun pilote à installer",
      "Câble USB résistant pour une durabilité maximale"
    ],
    "price": 30,
    "oldPrice": 45,
    "stock": 150,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773844343/1_tam26z.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844347/2_wifkb2.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844351/3_yor2gw.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844355/4_xsc3jz.png"
    ],
    "category": "Électronique",
    "rating": 4.1,
    "reviews": 560
  },
  {
    "id": 57,
    "name": "Support Voiture Magnétique 360° QY-017",
    "description": [
      "Support magnétique universel avec ventouse puissante",
      "Bras articulé à rotation 360° pour un angle personnalisé",
      "Fixation possible sur tableau de bord ou pare-brise",
      "Compatible avec tous les téléphones toutes marques",
      "Installation simple et démontage sans résidu"
    ],
    "price": 45,
    "oldPrice": 60,
    "stock": 90,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773844231/1_x2ptrq.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844233/2_xqhunh.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844236/3_zfblgl.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844244/4_vtrb4b.png"
    ],
    "category": "Automobiles",
    "rating": 4.0,
    "reviews": 370
  },
  {
    "id": 58,
    "name": "Souris Sans Fil Jedel W450 2.4GHz",
    "description": [
      "Souris sans fil 2.4 GHz avec portée jusqu'à 10 mètres",
      "Récepteur nano USB discret inclus",
      "Design ergonomique pour un confort optimal",
      "Pile AA incluse, prête à l'emploi dès l'ouverture",
      "Compatible Windows, Mac et Linux, plug & play"
    ],
    "price": 50,
    "oldPrice": 65,
    "stock": 120,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773844532/1_iqafkd.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844533/2_nohkw2.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844538/3_wxudsd.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844544/4_yjpfw1.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844548/5_tfsnoe.png"
    ],
    "category": "Électronique",
    "rating": 4.2,
    "reviews": 430
  },
  {
    "id": 59,
    "name": "Adaptateur USB-C vers Jack 3.5mm",
    "description": [
      "Adaptateur audio haute qualité USB-C vers jack 3.5mm",
      "Compatible smartphones Android et appareils USB-C",
      "Son cristallin sans perte de qualité audio",
      "Design compact et léger, facile à transporter",
      "Plug & play, aucun pilote requis"
    ],
    "price": 20,
    "oldPrice": 25,
    "stock": 200,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773844843/1_hoxjwn.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844850/4_kiyzth.png"
    ],
    "category": "Électronique",
    "rating": 4.0,
    "reviews": 620
  },
  {
    "id": 60,
    "name": "Souris Sans Fil Hoco GM25 BT + 2.4G",
    "description": [
      "Souris sans fil double connectivité Bluetooth et 2.4G",
      "Mode silencieux pour un usage discret en bureau",
      "Batterie rechargeable via USB, autonomie longue durée",
      "Disponible en plusieurs coloris au choix",
      "Compatible Windows, Mac, iPad et Android"
    ],
    "price": 95,
    "oldPrice": 120,
    "stock": 70,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773845998/1_bjeiie.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844920/2_xdrklb.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844915/3_buufhw.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844919/4_chlztc.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773844926/5_p9ppun.png"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 280
  },
  {
    "id": 61,
    "name": "Switch Gigabit Mercusys MS108G 8 Ports (Promo)",
    "description": [
      "Switch de bureau 8 ports Full Gigabit 10/100/1000 Mbps",
      "Plug & Play, aucune configuration nécessaire",
      "Technologie d'économie d'énergie automatique intelligente",
      "Boîtier métal robuste et dissipation thermique efficace",
      "Idéal pour les réseaux bureautiques et domestiques"
    ],
    "price": 120,
    "oldPrice": 175,
    "stock": 45,
    "badge": "Soldé",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773846100/1_awbnpm.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773845013/2_c7ec5u.png"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 310
  },
  {
    "id": 62,
    "name": "Chargeur Secteur USB Digiplus Bloc",
    "description": [
      "Adaptateur secteur USB compact de type Digiplus",
      "Sortie USB standard compatible avec la majorité des appareils",
      "Design compact et léger pour un usage à domicile ou en voyage",
      "Tension de sortie stable pour une charge sécurisée",
      "Compatible smartphones, tablettes et autres appareils mobiles"
    ],
    "price": 25,
    "oldPrice": 35,
    "stock": 180,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773846234/1_anvky7.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773845060/2_oz0qoq.png"
    ],
    "category": "Électronique",
    "rating": 4.0,
    "reviews": 390
  },
  {
    "id": 63,
    "name": "Agrafeuse de Bureau TA LI NO:0209",
    "description": [
      "Agrafeuse de bureau ergonomique de couleur rose",
      "Capacité standard adaptée aux usages scolaires et professionnels",
      "Mécanisme fluide pour une utilisation confortable",
      "Livrée en boîte avec agrafes compatibles",
      "Design moderne et coloré pour égayer votre bureau"
    ],
    "price": 40,
    "oldPrice": 50,
    "stock": 110,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773846356/1_bedrku.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773845113/2_jjm0wz.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773845115/3_stq3kb.png"
    ],
    "category": "Bureau",
    "rating": 4.1,
    "reviews": 240
  },
  {
    "id": 64,
    "name": "Routeur Wi-Fi TP-Link Archer C54 AC1200 Dual-Band",
    "description": [
      "Routeur Wi-Fi dual-band AC1200 : 867 Mbps (5 GHz) + 300 Mbps (2.4 GHz)",
      "4 antennes externes avec technologie Beamforming pour une meilleure couverture",
      "Modes routeur, point d'accès et répéteur Wi-Fi",
      "Compatible IPTV et streaming 4K sans interruption",
      "Interface d'administration simple via application Tether"
    ],
    "price": 255,
    "oldPrice": 310,
    "stock": 35,
    "badge": "Top Vente",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773846929/1_qh2k4y.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773845189/2_jhfq0u.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773845195/3_lrjtbn.png"
    ],
    "category": "Électronique",
    "rating": 4.7,
    "reviews": 510
  },
  {
    "id": 65,
    "name": "Lampe Anti-Moustiques UV Rechargeable 4000mAh",
    "description": [
      "Lampe anti-moustiques UV 360° avec batterie intégrée 4000mAh",
      "Piège lumineux silencieux sans produits chimiques",
      "Portable avec poignée pour un usage intérieur et extérieur",
      "Recharge via USB, autonomie longue durée",
      "Sûre pour toute la famille, bébés inclus"
    ],
    "price": 110,
    "oldPrice": 150,
    "stock": 55,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773874327/1_hhonku.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869494/2_bo2dlb.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869501/3_vl2ckg.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869519/4_scqsov.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869529/5_e2pd2t.png"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 330
  },
  {
    "id": 66,
    "name": "Destructeur d'Insectes Électrique Pest Killer Mural",
    "description": [
      "Lampe électrique anti-insectes à lumière UV attractive",
      "Grille haute tension pour une élimination efficace",
      "Usage intérieur avec portée jusqu'à 40m²",
      "Sans produits chimiques, sain pour la famille",
      "Facile à nettoyer et à entretenir"
    ],
    "price": 90,
    "oldPrice": 120,
    "stock": 65,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773869584/1_xnwg4g.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869587/2_cmn3pw.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869595/3_juyhkf.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869608/4_jnbrza.png"
    ],
    "category": "Ménage",
    "rating": 4.2,
    "reviews": 275
  },
  {
    "id": 67,
    "name": "Destructeur d'Insectes Kill Pest Électrique Vertical",
    "description": [
      "Piège électrique anti-insectes à position verticale",
      "Lumière UV attractive pour attirer les insectes efficacement",
      "Couverture jusqu'à 50m² pour les grandes pièces",
      "Facile à nettoyer grâce au tiroir amovible",
      "Sans odeur ni fumée, écologique et sûr"
    ],
    "price": 100,
    "oldPrice": 130,
    "stock": 60,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773874436/1_fkl7vm.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869668/2_ymvjp0.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869674/3_bg0k88.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869680/4_knrrwo.png"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 290
  },
  {
    "id": 68,
    "name": "Lampe Anti-Insectes Kill Pest Tour Électrique",
    "description": [
      "Lampe anti-insectes en forme de tour au design moderne",
      "Grille électrique haute tension pour une efficacité maximale",
      "Lumière UV attirante pour tous types d'insectes volants",
      "Usage intérieur et extérieur polyvalent",
      "Facile à nettoyer et à ranger"
    ],
    "price": 100,
    "oldPrice": 135,
    "stock": 50,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773874570/1_ftiyl4.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869778/1_znpyx4.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869792/3_suvuqh.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773869786/2_lq0lyn.png"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 310
  },
  {
    "id": 69,
    "name": "Raquette Anti-Moustiques Rechargeable DQN-01 2-en-1",
    "description": [
      "Raquette électrique anti-moustiques 2 en 1 avec base de recharge USB",
      "Batterie 400mAh rechargeable pour une autonomie prolongée",
      "Grille triple couche sécurisée contre les contacts accidentels",
      "Fonctionne aussi comme lampe piège posée sur sa base",
      "Légère et maniable pour toute la famille"
    ],
    "price": 60,
    "oldPrice": 85,
    "stock": 75,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773870008/1_ybhdjy.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870014/2_spf4qq.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870019/3_egzwae.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870026/4_ci0g6v.png"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 360
  },
  {
    "id": 70,
    "name": "Raquette Anti-Moustiques Électrique Simple",
    "description": [
      "Raquette électrique anti-moustiques à piles",
      "Grille haute tension pour une efficacité immédiate",
      "Manche antidérapant pour une prise en main sécurisée",
      "Légère et pratique pour toute la famille",
      "Utilisation simple, sans entretien complexe"
    ],
    "price": 45,
    "oldPrice": 60,
    "stock": 100,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773874678/1_e6txvf.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870092/2_ess0g1.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870098/3_gwae2a.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870104/4_uc0nkd.png"
    ],
    "category": "Ménage",
    "rating": 4.0,
    "reviews": 420
  },
  {
    "id": 71,
    "name": "Lampe Anti-Insectes UV Électrique Grand Format",
    "description": [
      "Destructeur d'insectes électrique grande surface UV",
      "Lumière UV attractive efficace sur une large zone",
      "Sans fumée ni odeur, sain et écologique",
      "Idéal pour toute la maison, salons et chambres",
      "Facile à installer et à nettoyer"
    ],
    "price": 95,
    "oldPrice": 130,
    "stock": 55,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773870161/1_rvh6g4.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870168/2_gpakfu.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870174/3_swbasb.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870180/4_fhzbnw.png"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 285
  },
  {
    "id": 72,
    "name": "Raquette Anti-Moustiques USB Rechargeable avec Socle",
    "description": [
      "Raquette électrique rechargeable via USB avec socle lumineux",
      "Double fonction : lampe piège posée + raquette active",
      "Batterie longue durée pour plusieurs nuits d'utilisation",
      "Grille haute tension sécurisée contre les contacts accidentels",
      "Design élégant pour une utilisation en chambre ou salon"
    ],
    "price": 60,
    "oldPrice": 80,
    "stock": 80,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773870228/1_av2sxd.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870234/2_lbjqjv.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870240/3_fvtwxz.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870247/4_powgop.png"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 395
  },
  {
    "id": 73,
    "name": "Montre Sport Digitale Mingrui Football WR30M",
    "description": [
      "Montre digitale sport avec cadran thème football",
      "Chronomètre et calendrier intégrés",
      "Résistante à l'eau jusqu'à 30 mètres de profondeur",
      "Bracelet silicone souple et confortable",
      "Convient aux enfants et aux adultes"
    ],
    "price": 50,
    "oldPrice": 70,
    "stock": 90,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773874831/1_mypuih.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870639/2_x0arbc.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870645/3_fcut8v.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870651/4_arqdng.png"
    ],
    "category": "Hommes",
    "rating": 4.2,
    "reviews": 310
  },
  {
    "id": 74,
    "name": "Montre Sport Multifonction Analogique/Digitale",
    "description": [
      "Montre sport robuste double affichage analogique et digital",
      "Fonctions stopwatch, countdown, alarme et calendrier",
      "Rétroéclairage LED pour une lisibilité nocturne",
      "Étanche jusqu'à 5ATM pour les activités aquatiques",
      "Bracelet silicone résistant adapté au sport intensif"
    ],
    "price": 40,
    "oldPrice": 60,
    "stock": 110,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773874948/1_s1slfj.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870745/2_gdhrua.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870751/3_zzozcm.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870757/4_vfykth.png"
    ],
    "category": "Hommes",
    "rating": 4.1,
    "reviews": 380
  },
  {
    "id": 75,
    "name": "Montre Sport PANMAX&PARIS Militaire Analogique",
    "description": [
      "Montre sport style militaire avec affichage analogique",
      "Bracelet silicone robuste et confortable au quotidien",
      "Résistante aux chocs pour un usage sportif et outdoor",
      "Look moderne et masculin inspiré du style militaire",
      "Idéale pour le sport, la randonnée et les activités en plein air"
    ],
    "price": 40,
    "oldPrice": 60,
    "stock": 95,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773870809/1_jjnkjo.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870816/2_oc4ogi.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870822/3_asa45k.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870829/4_vbzk3r.png"
    ],
    "category": "Hommes",
    "rating": 4.0,
    "reviews": 290
  },
  {
    "id": 76,
    "name": "Ampoule LED Ventilateur F4 Fan Light E27 20W",
    "description": [
      "Ampoule LED design ventilateur 4 pales F4+, culot E27",
      "Puissance 20W pour un flux lumineux de 3000 lumens",
      "Durée de vie exceptionnelle de 20000 heures",
      "Éclairage large angle pour une diffusion optimale",
      "Économique et écologique, faible consommation d'énergie"
    ],
    "price": 110,
    "oldPrice": 140,
    "stock": 70,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773877520/1_a8tsaj.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870893/2_lgyiy4.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870904/3_bcn4p0.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870919/4_xabmju.png"
    ],
    "category": "Ménage",
    "rating": 4.6,
    "reviews": 220
  },
  {
    "id": 77,
    "name": "Lampe Piège Anti-Moustiques Bionic à Poser",
    "description": [
      "Lampe piège à moustiques bionic avec grille 3D innovante",
      "Onde lumineuse attractive imitant la chaleur humaine",
      "Sûre pour les mamans, bébés et personnes sensibles",
      "Sans produits chimiques ni odeur, 100% écologique",
      "Design compact pour une pose discrète partout"
    ],
    "price": 45,
    "oldPrice": 65,
    "stock": 85,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773875072/1_sfaxuy.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773870963/2_fgkuyn.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871065/3_yte7qb.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871074/4_kt9pqr.png"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 340
  },
  {
    "id": 78,
    "name": "Filtre HEPA Charbon Actif pour Purificateur d'Air",
    "description": [
      "Filtre de rechange HEPA au charbon actif haute performance",
      "Élimine 99.98% des fines particules et allergènes",
      "Absorbe les mauvaises odeurs grâce au charbon actif",
      "Dimensions 9.2x4.3cm, compatible avec purificateurs standards",
      "Améliore significativement la qualité de l'air intérieur"
    ],
    "price": 70,
    "oldPrice": 95,
    "stock": 60,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773871122/1_xugkkc.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871129/2_hg6ges.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871140/3_p1k3bu.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871159/4_wg0hed.png"
    ],
    "category": "Santé",
    "rating": 4.4,
    "reviews": 195
  },
  {
    "id": 79,
    "name": "Montre Digitale Sport Lashida L-9801 Multicolore",
    "description": [
      "Montre digitale sport Lashida avec boîtier rond élégant",
      "Disponible en plusieurs coloris au choix",
      "Chronomètre et alarme intégrés pour le sport",
      "Résistante à l'eau pour un usage quotidien",
      "Bracelet silicone souple et confortable"
    ],
    "price": 50,
    "oldPrice": 70,
    "stock": 100,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773871199/1_y6zwc7.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871204/2_eqglty.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871212/3_nblpwo.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871235/4_huql6j.png"
    ],
    "category": "Hommes",
    "rating": 4.2,
    "reviews": 360
  },
  {
    "id": 80,
    "name": "Montre Sport Lashida Analogique-Digitale Multicolore",
    "description": [
      "Montre sport Lashida double affichage analogique et digital",
      "Disponible en plusieurs coloris tendance",
      "Cadran sportif lisible avec rétroéclairage LED",
      "Bracelet silicone résistant pour le sport et le quotidien",
      "Idéale pour les amateurs de sport et de style"
    ],
    "price": 40,
    "oldPrice": 60,
    "stock": 110,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773871271/1_fsma6l.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871278/2_wq25hv.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871288/3_mzlfla.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871300/4_wpy0h1.png"
    ],
    "category": "Hommes",
    "rating": 4.1,
    "reviews": 320
  },
  {
    "id": 81,
    "name": "Montre Sport Aimeike S-666 Analogique-Digitale",
    "description": [
      "Montre sport Aimeike double affichage analogique et digital",
      "Boîtier hexagonal métal robuste et original",
      "Résistante à l'eau WR30M pour les activités sportives",
      "Chronomètre et alarme intégrés",
      "Disponible en plusieurs coloris, idéale en cadeau"
    ],
    "price": 40,
    "oldPrice": 60,
    "stock": 120,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773877390/1_jvnaj5.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871360/2_dstxif.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871372/3_isewij.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871390/4_rcd3ft.png"
    ],
    "category": "Hommes",
    "rating": 4.3,
    "reviews": 410
  },
  {
    "id": 82,
    "name": "Lampe Anti-Moustiques Solaire pour Jardin",
    "description": [
      "Lampe solaire anti-moustiques sur piquet pour jardin",
      "Charge automatique le jour grâce au panneau solaire",
      "Allumage automatique la nuit avec autonomie de 8 à 10h",
      "Installation sans fil, facile à planter dans le sol",
      "Résistante aux intempéries pour un usage extérieur prolongé"
    ],
    "price": 70,
    "oldPrice": 100,
    "stock": 65,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773877200/1_mpcisc.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871429/2_rurvty.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871441/3_woh9es.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871460/4_koymcw.png"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 255
  },
  {
    "id": 83,
    "name": "Montre Sport Aimeike S-666 Verte dans Boîte Métal",
    "description": [
      "Montre sport Aimeike S-666 avec boîtier coloris vert",
      "Double affichage analogique et digital",
      "Résistante à l'eau WR30M pour les sports aquatiques",
      "Livrée dans son élégante boîte hexagonale métal",
      "Parfaite pour offrir en cadeau ou pour soi-même"
    ],
    "price": 40,
    "oldPrice": 60,
    "stock": 80,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773877088/1_jenjly.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871502/2_omgwih.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871521/3_uqwnne.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871528/4_c3swbq.png"
    ],
    "category": "Hommes",
    "rating": 4.4,
    "reviews": 280
  },
  {
    "id": 84,
    "name": "Montre Sport Aimeike S-666 Boîte Métal Orange",
    "description": [
      "Montre sport Aimeike S-666 présentée dans son coffret orange",
      "Double affichage analogique et digital élégant",
      "Robuste et résistante pour un usage sportif quotidien",
      "Boîtier de présentation hexagonal métal orange",
      "Idéale comme cadeau pour hommes et adolescents"
    ],
    "price": 40,
    "oldPrice": 60,
    "stock": 75,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773877004/1_aenqek.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871585/2_rtpg2l.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871596/3_nz7gim.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871614/4_smhdwa.png"
    ],
    "category": "Hommes",
    "rating": 4.4,
    "reviews": 265
  },
  {
    "id": 85,
    "name": "Lampe Anti-Moustiques Électrique Rechargeable Arceau",
    "description": [
      "Lampe anti-moustiques électrique en forme d'arceau",
      "Lumière UV violette hautement attractive pour les insectes",
      "Grille haute tension pour une élimination immédiate",
      "Rechargeable via USB, autonomie longue durée",
      "Peut être suspendue ou posée selon les besoins"
    ],
    "price": 65,
    "oldPrice": 90,
    "stock": 70,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773876917/1_rf0vlu.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871796/2_oqo8nd.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871812/3_yyccjn.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871822/4_ggnxss.png"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 305
  },
  {
    "id": 86,
    "name": "Montre Digitale Lashida L-9801 Bleue/Orange",
    "description": [
      "Montre digitale Lashida L-9801 au cadran rond moderne",
      "Bracelet bleu avec détails orange pour un style sportif",
      "Chronomètre, alarme et calendrier intégrés",
      "Résistante à l'eau pour une utilisation sportive",
      "Design jeune et dynamique pour homme ou adolescent"
    ],
    "price": 50,
    "oldPrice": 70,
    "stock": 85,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773871858/1_xjfply.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871864/2_z0uowx.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871882/3_flsytv.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773871892/4_xlxdzs.png"
    ],
    "category": "Hommes",
    "rating": 4.3,
    "reviews": 295
  },
  {
    "id": 87,
    "name": "Montre Enfant Kadanshi K-2002 Digitale Nœud",
    "description": [
      "Montre digitale pour enfant avec design original nœud bleu",
      "Affichage clair de l'heure, minutes et secondes",
      "Alarme intégrée pour rappels scolaires",
      "Légère et confortable pour un port toute la journée",
      "Idéale pour les enfants à partir de 5 ans"
    ],
    "price": 35,
    "oldPrice": 50,
    "stock": 95,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773872104/1_o5qzqx.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872114/3_x6gmix.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872114/3_x6gmix.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872127/4_usvoyv.png"
    ],
    "category": "Hommes",
    "rating": 4.4,
    "reviews": 230
  },
  {
    "id": 88,
    "name": "Montre Sport S-Sport JF-66 Digitale Orange",
    "description": [
      "Montre digitale sport avec bracelet et lunette orange vif",
      "Résistante à l'eau pour les activités sportives",
      "Affichage AM/PM clair et lisible en toutes conditions",
      "Alarme intégrée pour ne jamais rater un rendez-vous",
      "Design sportif et coloré pour les amateurs de sport"
    ],
    "price": 35,
    "oldPrice": 50,
    "stock": 90,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773872180/1_wwiv3v.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872184/2_cwehin.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872193/3_at31zf.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872202/4_y77fsl.png"
    ],
    "category": "Hommes",
    "rating": 4.2,
    "reviews": 250
  },
  {
    "id": 89,
    "name": "Chaise Pliante de Camping avec Porte-Gobelet",
    "description": [
      "Chaise pliante légère pour camping, plage et pique-nique",
      "Porte-gobelet intégré pratique pour les boissons",
      "Structure métal robuste résistante à l'usage intensif",
      "Pliage rapide et compact pour un transport facile",
      "Disponible en plusieurs couleurs : bleu, rouge et vert"
    ],
    "price": 85,
    "oldPrice": 110,
    "stock": 40,
    "badge": "",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773872263/1_ggjsuk.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872269/2_szewij.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872285/3_pi1cic.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872279/4_kereka.png"
    ],
    "category": "Sport",
    "rating": 4.6,
    "reviews": 415
  },
  {
    "id": 90,
    "name": "Lampe Rechargeable LED Kaiwage KWG-7109 120W",
    "description": [
      "Lampe LED rechargeable portable 120W haute puissance",
      "Panneau solaire intégré pour une recharge autonome",
      "Poignée pliable ergonomique pour un transport facile",
      "Autonomie jusqu'à 15h avec 3 tubes fluorescents",
      "Idéale pour le camping et les coupures de courant"
    ],
    "price": 129,
    "oldPrice": 159,
    "stock": 50,
    "badge": "Solaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773876764/1_xmfbwz.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872366/2_rxbohi.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872372/3_nqpmfb.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872378/4_rggvn4.png"
    ],
    "category": "Électronique",
    "rating": 4.3,
    "reviews": 87
  },
  {
    "id": 91,
    "name": "Torche LED Aluminium Haute Puissance Power Bank",
    "description": [
      "Lampe de poche en alliage d'aluminium ultra-résistante",
      "Fonction power bank intégrée pour recharger vos appareils",
      "5 modes d'éclairage adaptables à chaque situation",
      "Étanche pour une utilisation par tous les temps",
      "Idéale pour la randonnée, le camping et l'usage professionnel"
    ],
    "price": 89,
    "oldPrice": 120,
    "stock": 75,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773876277/1_ln46kv.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872891/2_wynvhq.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773872885/3_craczl.png"
    ],
    "category": "Sport",
    "rating": 4.5,
    "reviews": 134
  },
  {
    "id": 92,
    "name": "Lampe de Poche Aluminium LED Rechargeable SOS",
    "description": [
      "Torche professionnelle en alliage d'aluminium robuste",
      "5 modes d'éclairage dont un mode SOS d'urgence",
      "Recharge via USB pratique et rapide",
      "Résistante à l'eau pour toutes les conditions météo",
      "Éclairage puissant longue portée pour l'usage extérieur"
    ],
    "price": 75,
    "oldPrice": 99,
    "stock": 60,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773873008/1_bzazo9.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873010/2_h7jmpf.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873027/3_tv2toq.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873038/4_i5cq7u.png"
    ],
    "category": "Sport",
    "rating": 4.2,
    "reviews": 56
  },
  {
    "id": 93,
    "name": "Système Multimédia 2.1CH You Star YS-400BT 1500W",
    "description": [
      "Système audio multimédia 2.1 canaux 1500W PMPO puissant",
      "Caisson de basse et deux satellites pour un son surround",
      "Connectivité Bluetooth, USB, SD card et FM radio",
      "Télécommande incluse pour un contrôle à distance",
      "Idéal pour animer votre salon avec un son de qualité"
    ],
    "price": 599,
    "oldPrice": 749,
    "stock": 25,
    "badge": "Populaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773873077/1_awjn5k.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873084/2_xl4jt6.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873103/3_g1aohp.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873111/4_rjac9t.png"
    ],
    "category": "Musique",
    "rating": 4.6,
    "reviews": 203
  },
  {
    "id": 94,
    "name": "Projecteur Searchlight Haute Intensité W5112",
    "description": [
      "Lampe de recherche haute intensité rechargeable longue portée",
      "Fonction power bank intégrée pour charger un téléphone",
      "Indicateur de charge LED pour suivre le niveau de batterie",
      "Feux latéraux rouge et bleu pour la signalisation",
      "Réglage de luminosité et cycle de charge intelligent"
    ],
    "price": 149,
    "oldPrice": 199,
    "stock": 40,
    "badge": "Pro",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773873149/1_pdcixv.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873156/2_i3wufr.png"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 91
  },
  {
    "id": 95,
    "name": "Système Audio 2.1CH You Star YS-500BT 1500W Bluetooth",
    "description": [
      "Système multimédia 2.1 canaux 1500W design premium",
      "Connectivité Bluetooth, USB, SD card et FM intégrés",
      "Afficheur LED et télécommande inclus pour plus de confort",
      "Super woofer pour des basses profondes et percutantes",
      "Qualité sonore Hi-Fi pour une expérience d'écoute exceptionnelle"
    ],
    "price": 649,
    "oldPrice": 849,
    "stock": 20,
    "badge": "Best-seller",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773873235/1_vgyjtt.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873242/2_etikoc.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873261/3_gwf16i.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873273/4_pyiwpa.png"
    ],
    "category": "Musique",
    "rating": 4.7,
    "reviews": 312
  },
  {
    "id": 96,
    "name": "Épilateur à Galets Prokemey KM-128 USB Rechargeable",
    "description": [
      "Épilateur électrique rechargeable USB aux lames rotatives professionnelles",
      "Retire rapidement et efficacement les boulettes de tissu",
      "Batterie 400mAh pour une autonomie suffisante",
      "Design compact et silencieux pour un usage discret",
      "Idéal pour entretenir vos vêtements et tissus préférés"
    ],
    "price": 59,
    "oldPrice": 89,
    "stock": 100,
    "badge": "Nouveau",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773873317/1_ryve79.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873325/2_a0thfd.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873342/3_e8gcp2.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873358/4_ejqjrq.png"
    ],
    "category": "Beauté",
    "rating": 4.1,
    "reviews": 145
  },
  {
    "id": 97,
    "name": "Caméra de Surveillance Extérieure TP-Link Tapo WiFi",
    "description": [
      "Caméra de sécurité WiFi extérieure TP-Link Tapo HD",
      "Vision nocturne infrarouge pour une surveillance 24h/24",
      "Détection de mouvement avec alertes en temps réel",
      "Double antenne pour une connexion WiFi stable et fiable",
      "Résistante aux intempéries pour un usage extérieur durable"
    ],
    "price": 349,
    "oldPrice": 429,
    "stock": 35,
    "badge": "Top vente",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773875997/1_gj8qzr.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873400/2_qczog8.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873410/3_lp0bgs.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873429/4_nowrig.png"
    ],
    "category": "Électronique",
    "rating": 4.8,
    "reviews": 478
  },
  {
    "id": 98,
    "name": "Lampe de Travail LED Soft Filament USB Type-C",
    "description": [
      "Torche de travail LED rechargeable via USB Type-C",
      "Éclairage ambiant doux pour réduire la fatigue oculaire",
      "Longue durée de vie pour un usage professionnel intensif",
      "Portable et légère pour une utilisation partout",
      "Idéale pour le bricolage et les travaux en intérieur"
    ],
    "price": 65,
    "oldPrice": 85,
    "stock": 80,
    "badge": "Promo",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773873461/1_ibsrjs.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873469/2_vkefpm.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873491/3_ovd7ta.png"
    ],
    "category": "Industrie",
    "rating": 4.0,
    "reviews": 62
  },
  {
    "id": 99,
    "name": "Mini Ventilateur Portatif Rechargeable avec Support Téléphone",
    "description": [
      "Ventilateur de poche rechargeable multifonction",
      "Afficheur LED de batterie pour suivre l'autonomie restante",
      "Support intégré pour smartphone pratique au bureau",
      "3 vitesses réglables pour un confort personnalisé",
      "Silencieux et idéal pour les déplacements et le bureau"
    ],
    "price": 79,
    "oldPrice": 109,
    "stock": 55,
    "badge": "Été",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773876125/1_eekxeh.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873546/2_rtpccl.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873566/3_ldjjzf.png"
    ],
    "category": "Bureau",
    "rating": 4.3,
    "reviews": 189
  },
  {
    "id": 100,
    "name": "Lanterne LED Rechargeable Kaiwage KWG-7108S SMD 20x4",
    "description": [
      "Lanterne LED rechargeable SMD 20x4 tubes haute luminosité",
      "Chargeur solaire intégré pour une autonomie prolongée",
      "Autonomie jusqu'à 12 heures par charge complète",
      "Design rectangulaire élégant et robuste",
      "Idéale pour le camping, les coupures d'électricité et l'usage domestique"
    ],
    "price": 115,
    "oldPrice": 149,
    "stock": 45,
    "badge": "Solaire",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1773873601/1_t0d137.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873609/2_nz78p8.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1773873624/3_ri7fs4.png"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 73
  },











 
  {
    "id": 101,
    "name": "Piano electronique",
    "description": "Piano electronique 44 touches",
    "price": 370,
    "oldPrice": 560,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769676144/1_qauyqv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676163/2_bw0hlp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676185/3_ttpytd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676204/4_mqyy2i.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676224/5_lbl2cg.jpg"
    ],
    "category": "Jouets",
    "rating": 4.6
  },
  {
    "id": 102,
    "name": "Ecoiffer Tumbling Pandas",
    "description": "Ecoiffer Tumbling Pandas,G&M,Tumblin'Pandas,TumblingPandas,Jeu D Arcade,GM Electronique,Jeu De Reflexes,Jeu De Competition,Pandas,Jeu Interactif,Jeu Amusant,Jeu Pour Enfants,Jeu De Vitesse,Jeu D Action,Jeu De Chance,Jeu De Coordination",
    "price": 580,
    "oldPrice": 0,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769676493/1_1_ez32ot.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676507/2_qwxzqj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676493/1_1_ez32ot.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676507/2_qwxzqj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769676493/1_1_ez32ot.jpg"
    ],
    "category": "Jouets",
    "rating": 4.8
  },
  {
    "id": 103,
    "name": "Skmei montre sport",
    "description": "Skmei montre electronique reveil LED lumineux etanche sport",
    "price": 320,
    "oldPrice": 0,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769678680/1_snkonq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769678704/2_aqv9uq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769678724/3_d6im5f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769678680/1_snkonq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769678704/2_aqv9uq.jpg"
    ],
    "category": "Electronique",
    "rating": 4.7
  },
  {
    "id": 104,
    "name": "Onduleur de voiture USB",
    "description": "Onduleur de voiture USB 3.0, port de charge, 12V, 24V, DC1, 10V-220V, multifonction, chargeur rapide, prise, electronique de voiture",
    "price": 299,
    "oldPrice": 399,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769680642/1_pvllse.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769680654/2_1_s6myn7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769680671/3_jfasp6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769680685/4_vaxsun.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769680701/5_u70fyu.jpg"
    ],
    "category": "Electronique",
    "rating": 4.9
  },
  {
    "id": 105,
    "name": "Jeu de Mini tournevis",
    "description": "Jeu de Mini embouts de tournevis de precision avec poignee, outil de reparation electronique en 25 pieces",
    "price": 249,
    "oldPrice": 0,
    "stock": 31,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769681508/1_1_nhyqff.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681522/2_menyku.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681550/3_zfghzc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681566/4_tffsq0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681594/5_vwiwly.jpg"
    ],
    "category": "Maison",
    "rating": 4.5
  },
  {
    "id": 106,
    "name": "Tournevis Sans Fil USB",
    "description": "Tournevis Electrique Sans Fil USB 47 Pieces - Mini Visseuse Rechargeable avec Embouts Magnetiques, Douilles, Foret, Rallonge Flexible et Coffret Complet pour Bricolage, Reparations Maison, Electronique et Assemblage de Meubles.",
    "price": 199,
    "oldPrice": 0,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769681878/2_wviecs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681883/1_ljmikh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681896/3_djlgw0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681928/4_foun4t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769681963/5_fiigd2.jpg"
    ],
    "category": "Maison",
    "rating": 4.8
  },
  {
    "id": 107,
    "name": "Gonfleur de pneus",
    "description": "Gonfleur de pneus pour voiture, gonfleur electronique portable, compresseur d'air 150 Psi (auto, moto, velo)",
    "price": 299,
    "oldPrice": 0,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769682521/1_1_aksk4b.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769682535/2_pyqkr2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769682563/3_arotmz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769682582/4_xgahvq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769682604/5_q2au2c.jpg"
    ],
    "category": "Electronique",
    "rating": 4.5
  },
  {
    "id": 108,
    "name": "Fusil Flash Electronique",
    "description": "Ensemble de Jeu de Guerre : Fusil Flash Electronique avec Effets Lumineux et Sonores",
    "price": 499,
    "oldPrice": 625,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769683094/1_gvawli.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683102/2_fp61f8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683111/3_xulo6h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683136/4_nnk6vz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683094/1_gvawli.jpg"
    ],
    "category": "Jouets",
    "rating": 4.7
  },
  {
    "id": 109,
    "name": "Buki France Atelier d'Electronique",
    "description": "Buki France Atelier d'Electronique Expert avec 50 circuits a monter - Buki",
    "price": 599,
    "oldPrice": 0,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769683395/1_1_ta86cq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683404/2_tihw5h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683409/3_pmrths.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683421/4_bsct6c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683433/5_ol32fi.jpg"
    ],
    "category": "Jouets",
    "rating": 4.9
  },
  {
    "id": 110,
    "name": "Montre homme-Smael",
    "description": "Montre electronique de sport pour homme-Smael",
    "price": 399,
    "oldPrice": 0,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769683843/1_wor2pe.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683851/2_guhomh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683859/3_mf3hk8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683881/4_s8y84d.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769683897/5_iwnc9h.jpg"
    ],
    "category": "Hommes",
    "rating": 4.7
  },
  {
    "id": 111,
    "name": "SONNETTE ELECTRONIQUE",
    "description": "Allight SONNETTE ELECTRONIQUE DE SALUTATION DES INVITES",
    "price": 189,
    "oldPrice": 0,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769684218/1_1_lxqf8c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684225/2_svic9c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684218/1_1_lxqf8c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684225/2_svic9c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684218/1_1_lxqf8c.jpg"
    ],
    "category": "Maison",
    "rating": 4.6
  },
  {
    "id": 112,
    "name": "Coffre-Fort pour Enfants",
    "description": "Coffre-Fort Electronique en Forme de Sac d'Ecole pour Enfants",
    "price": 499,
    "oldPrice": 0,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769684594/1_cpw578.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684601/2_htta3m.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684594/1_cpw578.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684601/2_htta3m.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684594/1_cpw578.jpg"
    ],
    "category": "Jouets",
    "rating": 4.9
  },
  {
    "id": 113,
    "name": "Flipper",
    "description": "Ambassador Jeux d'arcade electronique pinball,SPARKYS - Hra Pinball,Merchant Electronic Arcade Pinball,MXJ - Jeux d'Arcade Electronique : Flipper",
    "price": 859,
    "oldPrice": 989,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769684885/2_vpmtkw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684890/1_pjjt1r.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684897/3_vhphn1.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684885/2_vpmtkw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769684890/1_pjjt1r.jpg"
    ],
    "category": "Jouets",
    "rating": 4.9
  },
  {
    "id": 114,
    "name": "Smoby Poudre Compacte de Beaute",
    "description": "Smoby Ma Poudre Compacte de Beaute Electronique - Miroir Lumineux et Maquillage pour Enfants - Kit de Beaute Realiste",
    "price": 339,
    "oldPrice": 0,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769705087/1_1_wf6cv6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705114/3_s8snxs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705087/1_1_wf6cv6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705087/1_1_wf6cv6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705087/1_1_wf6cv6.jpg"
    ],
    "category": "Beaute",
    "rating": 4.9
  },
  {
    "id": 115,
    "name": "Ambassador Jeu de Peche 21 Poissons",
    "description": "Ambassador Jeu de Peche 21 Poissons,Jeu de chasse,Jeu De Peche,Jeu D Arcade,Jeu De Reflexes,Peche 21 Poissons,Jeu Interactif,Jeu De Competition,Jeu Pour Enfants,Jeu De Precision,Jeu De Chance,Jeu D Action,Jeu De Vitesse,Jeu Amusant,Jeu Electronique",
    "price": 299,
    "oldPrice": 0,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769705366/1_ldkqea.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705375/2_r7zroc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705384/3_pftgy2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705366/1_ldkqea.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769705375/2_r7zroc.jpg"
    ],
    "category": "Jouets",
    "rating": 4.7
  },
  {
    "id": 117,
    "name": "Telecommande Portail de Garage",
    "description": "Telecommande Electronique de Portail de Garage 433 MHz - Controle sans Fil pour Portes de Garage et Volets Roulants",
    "price": 259,
    "oldPrice": 0,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769706691/1_tceik6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769706698/2_ldkqco.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769706722/3_fjciny.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769706754/4_yhfqui.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769706817/5_slbmwb.jpg"
    ],
    "category": "Maison",
    "rating": 4.9
  },
  {
    "id": 118,
    "name": "Poele electrique",
    "description": "Poele electrique, Bruleur a charbon electronique, plaque chauffante, polyvalent, chauffage",
    "price": 249,
    "oldPrice": 0,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769708644/1_1_qacmy9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769708653/2_ynk8y0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769708664/3_aveljd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769708671/4_ll4bk9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769708680/5_ivfnxn.jpg"
    ],
    "category": "Maison",
    "rating": 4.7
  },
  {
    "id": 119,
    "name": "Sac a dos ergonomique",
    "description": "Sac a dos ergonomique grande capacite avec poches pour accessoires electroniques",
    "price": 289,
    "oldPrice": 0,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769709318/1_ucbl3x.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769709325/2_nweb5s.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769709334/3_kunxmr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769709345/4_td8g9h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769709358/5_eg3s7o.jpg"
    ],
    "category": "Sacs",
    "rating": 4.9
  },
  {
    "id": 120,
    "name": "Ovleng Casque Gaming GT86",
    "description": "Ovleng Casque Gaming GT86 Usb + 3,5 mm Sur le Casque Sur-oreau Filaire Annulation de Jeu de Sports Electroniques Avec Lumiere LED - le Noir Rouge",
    "price": 249,
    "oldPrice": 299,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769710058/1_1_jeqbmg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769710067/2_hawlmx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769710076/3_eumkuh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769710085/4_nvdaoe.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769710093/5_tcqblk.jpg"
    ],
    "category": "Electronique",
    "rating": 4.8
  },

  {
    "id": 121,
    "name": "Livre Électronique Multifonctionnel: L'apprentissage Simplifié",
    "description": "Livre électronique éducatif interactif\nContenu multifonctionnel apprentissage varié\nInterface tactile intuitive pour enfants\nAudio et visuels stimulant engagement\nOutil pédagogique moderne efficace",
    "price": 199,
    "oldPrice": 0,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769716598/2_vrtqwr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769716598/3_ksvono.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769716598/1_uhystg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769716598/5_n3e5vr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769716599/4_kpmyo1.jpg"
    ],
    "category": "Jouets",
    "rating": "4.8"
  },
  {
    "id": 122,
    "name": "TM FRITEUSE NUMÉRIQUE ELECTRON XXL SANS HUILE 6,5L AVEC 8 FONCTIONS",
    "description": "Friteuse à air chaud XXL 6,5 litres\n8 programmes cuisson prédéfinis\nCuisson sans huile pour alimentation saine\nÉcran tactile numérique facile d'usage\nGrande capacité familles nombreuses",
    "price": 1399,
    "oldPrice": 1670,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769717010/2_ld5j99.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769717010/3_zdcc1p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769717010/4_xxgzh4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769717010/1_zlh2tz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769717013/5_xoyew5.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.9"
  },
  {
    "id": 123,
    "name": "2x Cartes flash éducatives pour apprendre l'anglais, Jouet éducatif, Livre audio électronique",
    "description": "Pack 2 cartes flash électroniques anglais\nAudio intégré pour prononciation correcte\nApprentissage ludique et interactif\nVocabulaire et phrases usuelles\nOutil pédagogique enfants et débutants",
    "price": 299,
    "oldPrice": 375,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769717708/3_pkgcjl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769717707/2_ranufz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769717709/1_gstjhl.jpg"
    ],
    "category": "Jouets",
    "rating": "4.6"
  },
  {
    "id": 124,
    "name": "Sac à dos ergonomique grande capacité avec poches pour accessoires électroniques",
    "description": "Sac à dos grande capacité organisé\nCompartiments rembourrés laptop/tablette\nPoches multiples pour accessoires électroniques\nBretelles ergonomiques confort prolongé\nMatériau résistant et imperméable",
    "price": 280,
    "oldPrice": 0,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769718446/1_1_l75dar.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769718447/2_dg4sgx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769718447/3_jtpats.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769718448/4_hn73zk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769718448/5_eo7cd4.jpg"
    ],
    "category": "Sacs",
    "rating": "4.7"
  },
  {
    "id": 125,
    "name": "Tueur de moustique domestique puissant piège à moustiques aspiration tueur d'insectes électronique",
    "description": "Piège moustiques électronique par aspiration\nUV attractif attirant insectes volants\nVentilateur aspire et capture efficacement\nSilencieux pour usage chambre nuit\nSans produits chimiques écologique",
    "price": 199,
    "oldPrice": 0,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769721178/3_ordegb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721178/1_gyjeca.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721179/5_zoraxc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721179/2_xgnirq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721179/4_r4ibbq.jpg"
    ],
    "category": "Maison",
    "rating": "4.3"
  },
  {
    "id": 126,
    "name": "Télémètre Laser Numérique Haute Précision 50M, Trena Mètre à Ruban Laser, Outil de Mesure Électronique, Matériau Acrylonitrile Butadiène Styrène",
    "description": "Télémètre laser précis portée 50 mètres\nMesures distance, surface, volume automatiques\nÉcran LCD rétroéclairé lisible\nCompact et léger pour portabilité\nIndispensable professionnels et bricoleurs",
    "price": 399,
    "oldPrice": 499,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769721787/2_rczbdv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721787/1_r1stgu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721788/3_smwfz3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721789/4_l0jua4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769721793/5_orhek6.jpg"
    ],
    "category": "Industrie",
    "rating": "4.9"
  },
  {
    "id": 127,
    "name": "Appareil de massage des pieds électronique portable avec stimulation musculaire - 6 modes, 9 niveaux d'intensité",
    "description": "Masseur pieds électronique EMS portable\n6 modes massage et 9 intensités réglables\nStimulation électrique musculaire thérapeutique\nDesign pliable pour rangement facile\nSoulage fatigue et améliore circulation",
    "price": 299,
    "oldPrice": 397,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769722459/1_zsm458.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769722460/2_h5eahh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769722462/3_pf0y1p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769722461/4_h5mhkb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769722465/5_gdafu8.jpg"
    ],
    "category": "Santé",
    "rating": "4.7"
  },
  {
    "id": 128,
    "name": "Labubu - The Monsters: Big Into Energy, aveugle boîte mignon mode pendentif boîte Surprise Couleur Aléatoire",
    "description": "Figurine Labubu boîte surprise aléatoire\nDesign kawaii tendance collectible\nPeut servir de pendentif/porte-clés\nCouleur et modèle découverts à ouverture\nObjet collection populaire fans pop culture",
    "price": 329,
    "oldPrice": 0,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769723262/1_q8kn5t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723261/2_r84f0p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723262/3_siwad9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723264/4_ct9bae.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723267/5_jns5qw.jpg"
    ],
    "category": "Jouets",
    "rating": "4.9"
  },
  {
    "id": 129,
    "name": "1 pièce Hélicoptère volant RC avec double mode de contrôle : gravité et télécommande, hélicoptère à gravité avec recharge, lumières 3D et capteur de sécurité, hélicoptère pour enfants.",
    "description": "Hélicoptère RC double contrôle innovant\nMode télécommande et détection gravité/gestes\nLumières LED 3D spectaculaires\nCapteur sécurité évite collisions\nRechargeable USB pour autonomie prolongée",
    "price": 199,
    "oldPrice": 0,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769723829/1_f2jycv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723830/2_opij54.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723831/3_waikcb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723832/4_nlp9jc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769723837/5_zvjwjs.jpg"
    ],
    "category": "Jouets",
    "rating": "4.9"
  },
  {
    "id": 130,
    "name": "Voiture avec télécommande, capteur de gravité, contrôlable par des gestes et avec télécommande 2.4GHz",
    "description": "Voiture RC contrôle gestes innovant\nTélécommande 2,4GHz + mode gestuel\nCapteur gravité pour conduite intuitive\nPortée étendue sans interférences\nJouet technologique interactif enfants",
    "price": 499,
    "oldPrice": 750,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769724304/1_rgogvq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769724304/2_vztluo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769724306/3_vr24tx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769724307/4_rizuq5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769724311/5_iogdfp.jpg"
    ],
    "category": "Jouets",
    "rating": "4.8"
  },
  {
    "id": 131,
    "name": "Vidéoprojecteur Portable HD 4K Android TV avec WiFi 6 et Bluetooth 5.0, Support Rotatif à 270° Correction Automatique avec télécommande pour Home Cinéma, Chambre, TV Stick, USB, DVD, Jeux, PPT",
    "description": "Projecteur portable Android TV intégré\nSupport 4K avec WiFi 6 et Bluetooth 5.0\nRotation 270° et correction auto trapèze\nMultiples connectiques HDMI, USB\nHome cinéma portable complet",
    "price": 599,
    "oldPrice": 1699,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769730715/1_1_hhrhom.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769730716/2_dqsj7h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769730716/3_tuzonh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769730717/4_xzzmjb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769730719/5_qovyod.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 132,
    "name": "Itel Ecouteurs Buds Neo – White",
    "description": "Écouteurs sans fil Itel Buds Neo blancs\nConnexion Bluetooth stable\nÉtui charge pour autonomie prolongée\nSon clair pour musique et appels\nDesign ergonomique confortable",
    "price": 119,
    "oldPrice": 0,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769763348/1_zqprkq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769763349/2_ww5h0f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769763352/3_okree2.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 133,
    "name": "Samsung Galaxy A06 - 6,7\" - 128 Go - 6 Go RAM – Noir",
    "description": "Smartphone Samsung Galaxy A06 grand écran 6,7\"\nStockage généreux 128 Go + 6 Go RAM\nPerformance fluide usage quotidien\nBatterie longue durée\nDesign élégant coloris noir",
    "price": 1199,
    "oldPrice": 1400,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769767641/2_wdvgja.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767641/1_sucxj0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767643/3_fwckv3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767647/4_eealng.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767649/5_dzwcpx.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 134,
    "name": "Samsung A07 – 6,7\" – 64 GB + 4 GB Ram – Violet",
    "description": "Samsung Galaxy A07 écran 6,7 pouces\n64 Go stockage + 4 Go RAM\nColoris violet tendance\nPerformances fiables entrée de gamme\nIdéal premier smartphone ou budget limité",
    "price": 1199,
    "oldPrice": 1299,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769767944/1_1_dyoxco.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767944/2_e8t9qi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767945/3_gfzg3d.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767950/4_p8rjiu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769767952/5_xowxvu.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 135,
    "name": "Samsung A07 – 6,7\" – 64 Go – 4 Go Ram – Black",
    "description": "Samsung A07 grand écran 6,7\" noir\nConfiguration 64 Go + 4 Go RAM\nDesign élégant et moderne\nAndroid avec interface One UI\nExcellent rapport qualité-prix",
    "price": 1199,
    "oldPrice": 1299,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769768482/1_hozzlc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768482/2_tjfl7f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768486/3_e189k0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768489/4_mkp8zi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768492/5_nolmy1.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 136,
    "name": "XIAOMI Redmi A5 - 6.8\" - 3GB + 64GB - Ocean Blue",
    "description": "Xiaomi Redmi A5 très grand écran 6,8\"\nConfiguration 3 Go RAM + 64 Go stockage\nColoris Ocean Blue attractif\nSmartphone entrée gamme performant\nBatterie haute capacité longue autonomie",
    "price": 999,
    "oldPrice": 1100,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769768862/1_1_t0j4ds.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768864/2_ik8v2w.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768867/3_l8rndm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768870/4_rv19gr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769768872/5_gmx5dq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 137,
    "name": "Samsung Galaxy buds core - Noir",
    "description": "Écouteurs sans fil Samsung Galaxy Buds Core\nSon haute qualité signature Samsung\nRéduction bruit active (selon modèle)\nÉtui charge compact portable\nConfort prolongé usage quotidien",
    "price": 499,
    "oldPrice": 0,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769769435/1_cbxpbq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769769437/2_pv7fvp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769769440/3_o5diz7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769769443/4_mlajhv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769769446/5_leuhmc.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 138,
    "name": "Samsung Galaxy A16 - 6.7\" - 4GB + 128GB - Black",
    "description": "Samsung Galaxy A16 écran 6,7 pouces\n128 Go stockage + 4 Go RAM\nDesign moderne coloris noir\nPerformances solides milieu de gamme\nÉcran fluide pour navigation agréable",
    "price": 1499,
    "oldPrice": 1749,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769770800/1_1_s0surr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769770800/2_kr4cny.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769770804/3_pumxjq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769770807/4_zquog3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769770809/5_kyzfkc.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 139,
    "name": "Samsung Galaxy A06 - 6,7\" - 128 Go - 6 Go RAM – Gold",
    "description": "Galaxy A06 élégant coloris doré\nGrande capacité 128 Go + 6 Go RAM\nÉcran immersif 6,7 pouces\nMultitâche fluide et réactif\nFinition premium abordable",
    "price": 1199,
    "oldPrice": 1419,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769771549/1_hcw41c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769771558/3_z83b0q.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769771566/4_uiaoh7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769771569/5_iorwpd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 140,
    "name": "Soundpeats Q3 Pro Wireless Earbuds - Bluetooth 6.0 - 42 Hours Playtime - Call Noise Cancellation, IP55 Waterproof - ANC -38dB",
    "description": "Écouteurs Soundpeats Q3 Pro Bluetooth 6.0\nAutonomie exceptionnelle 42 heures totales\nANC -38dB réduction bruit active\nIP55 résistant eau et transpiration\nQualité audio supérieure et appels clairs",
    "price": 345,
    "oldPrice": 399,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769771931/1_1_oadqtp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769771932/2_hop68q.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769771936/3_viqkix.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769771944/4_klzbfb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769771952/5_n1xmnl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 141,
    "name": "Samsung Galaxy A07 - 6,7\" - 128 Go + 4 Go Ram - Black - 2 ans de garantie",
    "description": "Samsung A07 stockage doublé 128 Go\n4 Go RAM pour multitâche efficace\nGarantie constructeur 2 ans incluse\nGrand écran 6,7\" immersif\nSécurité achat avec garantie étendue",
    "price": 1199,
    "oldPrice": 1419,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769772501/1_jqip6m.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769772502/2_d0z6bo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769772506/3_lzwxdw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769772509/4_ji44du.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769772512/5_mezsp8.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 142,
    "name": "XIAOMI Redmi A5 4GB + 128GB - Midnight Black",
    "description": "Redmi A5 configuration améliorée 4+128 Go\nColoris Midnight Black élégant\nPerformance accrue pour usage intensif\nÉcran géant 6,8 pouces\nExcellent choix budget modéré",
    "price": 1139,
    "oldPrice": 0,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769772975/1_vdr0do.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769772976/2_yrwgnh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769772980/3_jc7pq4.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 143,
    "name": "XIAOMI REDMI 15 - 256 Go - NFC - 8 Go RAM – Titan Gray",
    "description": "Xiaomi Redmi 15 haut de gamme\nStockage massif 256 Go + 8 Go RAM\nNFC pour paiements sans contact\nColoris Titan Gray premium\nPerformances puissantes polyvalentes",
    "price": 1899,
    "oldPrice": 2199,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769773358/1_1_dgyzlz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769773365/3_bjz2im.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769773360/2_f15rpq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769773368/4_xs3ny5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769773375/5_lymods.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 144,
    "name": "XIAOMI Redmi A5 - 6.8\" - 4GB + 128GB - Sandy Gold",
    "description": "Redmi A5 coloris Sandy Gold raffiné\nConfiguration optimale 4+128 Go\nTrès grand écran 6,8 pouces\nDesign élégant finition dorée\nRapport qualité-prix imbattable",
    "price": 1199,
    "oldPrice": 1499,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769774153/1_ljbiii.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769774155/2_ewrwev.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769774159/3_imx7ij.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769774162/4_z6vtpo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769774166/5_f575ps.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 145,
    "name": "Samsung Galaxy A16 8GB + 256GB - Black - 2 ans de garantie",
    "description": "Galaxy A16 version premium 8+256 Go\nRAM généreuse pour multitâche intensif\nStockage abondant photos/vidéos/apps\nGarantie 2 ans tranquillité esprit\nPerformance haut de gamme prix accessible",
    "price": 2099,
    "oldPrice": 2250,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769775348/1_1_vqhv0z.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769775349/2_whmccy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769775351/3_g0qv9j.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769775353/4_gmynhx.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 146,
    "name": "Itel City 100 C67L 256GB - 12GB (8+4) - PURE TITANIUM",
    "description": "Itel City 100 stockage énorme 256 Go\n12 Go RAM total (8 physique + 4 virtuelle)\nColoris Pure Titanium sophistiqué\nPerformance exceptionnelle marque Itel\nIdéal utilisateurs exigeants budget serré",
    "price": 1199,
    "oldPrice": 1499,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769776406/1_xclmqp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769776407/2_guuu6n.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769776410/3_mcazf1.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 147,
    "name": "Honor Play10 - 64 Go - 3 Go RAM – Starry Purple",
    "description": "Honor Play10 coloris Starry Purple unique\nConfiguration basique 64 Go + 3 Go RAM\nDesign jeune et tendance\nPerformances correctes usage quotidien\nPrix attractif smartphone Honor",
    "price": 849,
    "oldPrice": 1099,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769777393/1_1_jkised.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769777393/2_xbzy5t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769777396/3_eozktd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769777399/4_xld6al.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 148,
    "name": "Samsung Galaxy A16 4GB + 128GB - Gray",
    "description": "Galaxy A16 sobre coloris gris\nConfiguration équilibrée 4+128 Go\nDesign professionnel discret\nFiabilité Samsung reconnue\nPolyvalent tous usages quotidiens",
    "price": 1499,
    "oldPrice": 1799,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769778109/1_rf0a1e.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778109/2_eu72dx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778115/3_gj8afp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778118/4_z9qroi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778119/5_oqion8.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 149,
    "name": "Samsung A07 – 6,7\" – 64 GB + 4 GB Ram – Green",
    "description": "Samsung A07 coloris vert rafraîchissant\n64 Go + 4 Go RAM configuration standard\nGrand écran 6,7 pouces\nChoix couleur original et naturel\nEntrée gamme Samsung fiable",
    "price": 1019,
    "oldPrice": 1229,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769778556/1_1_o1rszs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778555/2_g3vaev.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778557/3_gojcwo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778561/4_wgqh3n.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769778563/5_xgjtvl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 150,
    "name": "Samsung Galaxy A05 - 6.7\" - 4GB + 128GB - Silver",
    "description": "Galaxy A05 élégant argenté\n128 Go stockage + 4 Go RAM\nÉcran large 6,7 pouces\nDesign métallisé premium\nExcellent premier smartphone Samsung",
    "price": 1069,
    "oldPrice": 1429,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769779131/1_isa1pu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779132/2_xcqbsh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779136/3_larwpc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779137/4_bgcesb.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 151,
    "name": "XIAOMI Redmi A5 - 6.8\" - 3GB +64GB - Midnight Black",
    "description": "Xiaomi Redmi A5 très grand écran 6,8\"\nConfiguration entrée gamme 3+64 Go\nColoris Midnight Black classique\nBatterie longue durée\nPrix mini pour grand écran",
    "price": 978,
    "oldPrice": 1100,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769779375/1_1_kz4jxn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779383/3_swu7w2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779377/2_erchjl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 152,
    "name": "Samsung A07 - 6,7\" - 128 Go - 6 Go Ram - Black- 2 ans de garantie",
    "description": "A07 configuration optimale 6+128 Go\nRAM élevée pour fluidité maximale\nGarantie 2 ans sécurité achat\nPerformance supérieure dans sa catégorie\nStockage généreux extensible",
    "price": 1369,
    "oldPrice": 1599,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769779811/1_l2kmup.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779812/2_c1cmwh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779818/3_fasvrp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779823/4_jtqagc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769779828/5_ntgfmv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 153,
    "name": "Samsung Galaxy A06 - 6,7\" - 128 Go - 6 Go RAM – Light Blue",
    "description": "Galaxy A06 coloris Light Blue apaisant\n128 Go + 6 Go RAM performant\nDesign frais et moderne\nGrand écran immersif\nCouleur tendance attractive",
    "price": 1199,
    "oldPrice": 1419,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769780533/1_1_w118hk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769780537/2_nacch3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769780541/3_d5d3zt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769780546/4_ocg37a.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769780551/5_jivms5.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 154,
    "name": "XIAOMI Redmi Note 14 Amoled 120Hz 6,67 (8Go, 256Go) MediaTek Helio G99-Ultra - 108MP/20 MP- Noir",
    "description": "Redmi Note 14 écran AMOLED 120Hz fluide\nConfiguration puissante 8+256 Go\nCaméra principale 108 MP exceptionnelle\nProcesseur MediaTek Helio G99-Ultra\nSmartphone milieu gamme très complet",
    "price": 2200,
    "oldPrice": 2350,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769781963/1_y5bduz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769781968/2_wzcbtr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769781977/3_cswd7k.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769781987/4_jhrdsn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769782001/5_bnjhgt.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 155,
    "name": "Infinix HOT 60 Pro+ - 6.78 '' - (8Go+8Go) + 256Go – 50 MP – Coral Tides",
    "description": "Infinix HOT 60 Pro+ RAM extensible 16 Go total\nStockage massif 256 Go\nCaméra 50 MP qualité photo\nColoris Coral Tides original\nTrès grand écran 6,78 pouces",
    "price": 2350,
    "oldPrice": 2999,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769783411/1_1_tgtghd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769783415/2_yge5eb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769783426/3_dfcf1o.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 156,
    "name": "Infinix HOT 60 Pro+ - 6.78 '' - (8Go+8Go) + 256Go – 50 MP – - Misty Violet",
    "description": "HOT 60 Pro+ coloris Misty Violet élégant\n16 Go RAM total (8+8 virtuelle)\n256 Go stockage + caméra 50 MP\nÉcran immense 6,78\"\nPerformance gaming et multimédia",
    "price": 2350,
    "oldPrice": 2999,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769783587/1_wil0qa.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769783588/2_d5xooz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769783594/3_aamtul.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769783600/4_mhtlab.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 157,
    "name": "XIAOMI Redmi 14C 6.88\" (8GB - 256GB) Helio G81-Ultra 8-Core 2.0 GHz - 5000 mAh - 50 MP - Noir",
    "description": "Redmi 14C écran géant 6,88 pouces\nConfiguration robuste 8+256 Go\nBatterie massive 5000 mAh autonomie\nProcesseur Helio G81-Ultra performant\nCaméra 50 MP photos détaillées",
    "price": 1450,
    "oldPrice": 1650,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769784158/1_1_b6r9mf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769784162/2_fgr1d3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769784173/4_ma0oqx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769784182/5_ql7sbu.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 158,
    "name": "JEMCO tablette 4G WIFI 10.1\" 4GO RAM 64GO ROM FHD(Pochette+Clavier+Stylet+écouteurs+Souris sans fil Gratuit)",
    "description": "Tablette JEMCO 10,1\" Full HD complète\n4G + WiFi connectivité totale\nPack complet : clavier, stylet, souris, écouteurs\n4 Go RAM + 64 Go stockage\nSolution productive clé en main",
    "price": 1750,
    "oldPrice": 2299,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769784627/1_dsivyf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769784632/2_sobekb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769784638/3_qdvbsq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769784649/4_vtdias.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 159,
    "name": "Manette Bluetooth Sans Fil avec Support Telephone, Gaming Gamer Joystick - Pour Android iOS, PS4 PS3 PC",
    "description": "Manette gaming Bluetooth universelle\nCompatible Android, iOS, PlayStation, PC\nSupport téléphone intégré clip\nConnexion sans fil stable\nErgonomie confortable sessions prolongées",
    "price": 199,
    "oldPrice": 250,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769785136/1_1_j1f2ax.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769785138/2_hkoypr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769785147/3_kq3xff.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769785151/4_hxglfx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769785158/5_sedocw.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 160,
    "name": "Magsafe Powerbank puissance sans fil magnétique",
    "description": "Batterie externe MagSafe magnétique\nCharge sans fil pour iPhone compatibles\nFixation magnétique sécurisée\nDesign compact ultra-portable\nCharge simultanée sans câbles",
    "price": 249,
    "oldPrice": 400,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769785885/1_bec6az.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769785890/2_ysrhlx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769785897/3_dgwgmr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769791896/4_wnx1b7.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 161,
    "name": "Meizu Mblu 21 - 6GB + 128 GB - DIAMOND WHITE",
    "description": "Meizu Mblu 21 blanc diamant élégant\n6 Go RAM + 128 Go stockage\nDesign raffiné et moderne\nPerformances solides marque Meizu\nFinition premium attractive",
    "price": 899,
    "oldPrice": 1099,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769792326/1_mew19y.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769792330/2_owgxxp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769792337/3_chghqr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769792342/4_vo5ic6.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 162,
    "name": "Infinix Note 50S 5G+ 6.7\" (256Go ROM / 8GB jusqu'à 16Go) Dimensity 7300 Ultimate (4 nm) Amoled 144Hz - Titanium Grey",
    "description": "Infinix Note 50S 5G processeur puissant\nÉcran AMOLED 144Hz ultra-fluide\nRAM extensible jusqu'à 16 Go\n256 Go stockage + 5G ultra-rapide\nDimensity 7300 4nm performances flagship",
    "price": 2649,
    "oldPrice": 2799,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769793071/1_1_gxsrwk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769793073/2_dn2hja.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769793077/3_qeqqrj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769793080/4_cl41de.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769793084/5_qtmzrb.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 163,
    "name": "Chargeur Voiture Rétractable USB C Allume Cigare à Charge Rapide, Chargeur Polyvalent Noir avec Éclairage Étoilé",
    "description": "Chargeur voiture USB-C rétractable\nCâbles rétractables évitent enchevêtrement\nCharge rapide pour smartphones modernes\nÉclairage LED étoilé ambiance\nDesign compact et élégant",
    "price": 199,
    "oldPrice": 0,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769794359/1_xyinvk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769794362/2_jfjrfv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769794366/3_fl0kyt.jpg"
    ],
    "category": "Automobile",
    "rating": "4.8"
  },
  {
    "id": 164,
    "name": "Deep Bass Casque stéréo Bluetooth V5 pliable avec graffiti lumineux RGB Stereo HandsFree Music-TSuppor TF Card-FM-Audio input sans fil R9 Noir",
    "description": "Casque Bluetooth V5 basses profondes\nRGB lumineux design graffiti unique\nPliable pour transport facile\nSupport carte TF et radio FM\nAutonomie longue durée",
    "price": 249,
    "oldPrice": 0,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769794886/1_1_kgqi6h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769794890/2_extavr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769794893/3_gzkits.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769794898/4_b7kudr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769794900/5_xwvjoc.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 165,
    "name": "PowerBank 10000 Mah Fast Charge 22.5W Avec 3 Câbles Intégrés",
    "description": "Batterie externe 10000mAh charge rapide 22,5W\n3 câbles intégrés Lightning/Type-C/Micro-USB\nPlus besoin transporter câbles séparés\nCharge simultanée multiples appareils\nUltra-pratique pour voyages quotidiens",
    "price": 249,
    "oldPrice": 0,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769795530/1_cfxj0r.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769795534/2_nyctsc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769795538/3_ujvcrx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769795542/4_diimgf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769795546/5_x2czot.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 166,
    "name": "Anker Power Bank 10000mAh Noir Batterie externe 324 A1237H10",
    "description": "Batterie Anker 10000mAh marque premium\nQualité et fiabilité reconnues\nCompact et léger pour portabilité\nProtection surcharge et surchauffe\nGarantie Anker tranquillité esprit",
    "price": 349,
    "oldPrice": 399,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769795890/1_1_yfmqfx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769795894/2_weuf00.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796035/3_cf4hr6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796036/4_plbvja.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796040/5_cgkuzs.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 167,
    "name": "Samsung Galaxy TAB A9+ 5G + WIFI - 11'' (4 Go de RAM / 64 Go de ROM) - Graphite",
    "description": "Tablette Samsung Tab A9+ 5G grand écran 11\"\nConnectivité 5G ultra-rapide + WiFi\n4 Go RAM + 64 Go stockage\nColoris Graphite sobre professionnel\nPolyvalente travail et divertissement",
    "price": 1290,
    "oldPrice": 2690,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769796336/1_ovkkk8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796339/2_zlityv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796343/3_cpsrxj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796347/4_urviog.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796351/5_nzsmjl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 168,
    "name": "XIAOMI Redmi note 14 – 6 Go Ram – 128 Go – Vert",
    "description": "Redmi Note 14 coloris vert nature\n6 Go RAM + 128 Go stockage\nPerformance milieu gamme Xiaomi\nDesign moderne couleur originale\nExcellent rapport qualité-prix",
    "price": 1999,
    "oldPrice": 2699,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769796858/1_1_pipgpy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796860/2_tibcvf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769796865/3_wz7q8y.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 169,
    "name": "Haylou Ecouteur bluetooth X1 2022",
    "description": "Écouteurs Haylou X1 modèle 2022\nBluetooth stable et économe énergie\nDesign ergonomique confortable\nSon clair qualité correcte\nPrix abordable marque Haylou",
    "price": 239,
    "oldPrice": 0,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769797221/1_1_yccyn6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769797305/1_jj6c8k.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769797309/2_1_nluevc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769797329/2_lescpq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 170,
    "name": "Lenovo ThinkPlus LP75 écouteurs sans fil avec son HiFi , idéal pour sport",
    "description": "Écouteurs sport Lenovo ThinkPlus LP75\nSon HiFi qualité audio supérieure\nRésistants transpiration pour fitness\nMaintien sécurisé pendant activités\nAutonomie adaptée entraînements",
    "price": 250,
    "oldPrice": 0,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769797755/1_pcyetg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769797756/2_s5qkve.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769797761/3_vjnmzm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769797766/4_zkkgje.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769797770/5_hsxv1n.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 171,
    "name": "Téléphone portable Nokia 150, Double SIM, Écran 2.4'' – Batterie J",
    "description": "Nokia 150 téléphone basique robuste, Double SIM pratique 2 numéros, Écran 2,4\" lisible suffisant, Batterie exceptionnelle plusieurs semaines, Fiabilité légendaire Nokia",
    "price": 345,
    "oldPrice": 499,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769979968/171_nrqgad.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 172,
    "name": "Chargeur de voiture rétractable, 100W avec double câbles de charge rétractables de type C et 2 ports USB",
    "description": "Chargeur voiture puissant 100W total, Double câbles Type-C rétractables intégrés, 2 ports USB supplémentaires, Affichage tension batterie véhicule, Charge 4 appareils simultanément",
    "price": 249,
    "oldPrice": 345,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769979972/172_ak8udt.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 173,
    "name": "Case Coque Silicone pour Oppo A3x 5G / A3x 4G / A3 5G bleu – Protection élégante et maniabilité J",
    "description": "Coque silicone pour Oppo A3x/A3, Coloris bleu élégant, Protection chutes et rayures, Prise main antidérapante, Accès libre boutons et ports",
    "price": 59,
    "oldPrice": 0,
    "stock": 35,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977498/173_iotkly.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 174,
    "name": "Contrôleur de jeu Mobile K21 pour PUBG, déclencheur de visée, bouton de feu L1 R1",
    "description": "Triggers gaming mobile K21 pour PUBG, Gâchettes L1/R1 physiques précises, Compatible iPhone et Android universellement, Améliore visée et tir jeux FPS, Avantage compétitif gaming mobile",
    "price": 110,
    "oldPrice": 199,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977518/174_ykfiy9.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 175,
    "name": "Oraimo FireFly 3 chargeur rapide OCW-E66S+L53 5V/2.4A pour iPhone, avec technologie AniFast™ J",
    "description": "Chargeur Oraimo FireFly 3 iPhone, Technologie AniFast charge optimisée, Sortie 5V/2.4A stable, Protection surchauffe et surcharge, Compact pour voyage quotidien",
    "price": 95,
    "oldPrice": 119,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977529/175_llmtho.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 176,
    "name": "Aya Support magnétique de téléphone portable pour voiture rotation 360° AY-016 J",
    "description": "Support magnétique voiture rotation 360°, Fixation grille aération ou tableau bord, Aimant puissant maintien sécurisé, Ajustement angle optimal conduite, Installation facile sans outil",
    "price": 69,
    "oldPrice": 90,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977533/176_a7nwmq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 177,
    "name": "OTG Type C vers Lightning iPhone, Otg iphone vers Type C",
    "description": "Adaptateur OTG Type-C vers Lightning, Transfert données iPhone vers Android/PC, Partage fichiers entre appareils différents, Compact et portable, Compatible derniers iPhones",
    "price": 59,
    "oldPrice": 70,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977544/178_glbitm.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 178,
    "name": "jawda Pack Chargeur USB-C 35W + Câble Type-C vers Type-C 60W Charge Rapide",
    "description": "Pack chargeur 35W + câble 60W, Charge rapide USB-C universelle, Compatible smartphones, tablettes, laptops, Câble renforcé haute qualité, Solution complète charge tous appareils",
    "price": 139,
    "oldPrice": 0,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977544/178_glbitm.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 179,
    "name": "Nokia 2 téléphone 5310 noir et blanc J",
    "description": "Nokia 5310 design rétro icônique, Coloris noir et blanc classique, Lecteur MP3 et radio FM, Batterie longue durée, Nostalgie et fiabilité Nokia",
    "price": 420,
    "oldPrice": 1450,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977552/179_qswrfm.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 180,
    "name": "Pochette pour Honor 400 5G en Liquide Noir - Housse de protection en silicone TPU flexible J",
    "description": "Coque liquide Honor 400 5G noire, Silicone TPU flexible résistant, Protection optimale élégante, Finition soft-touch agréable, Accès facile fonctionnalités",
    "price": 99,
    "oldPrice": 110,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977555/180_omxfax.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 181,
    "name": "Ldnio LC441i Original 30W Fast Charging PD QC Usb Data Type C To lightning Charger Cable For iPhone 1M",
    "description": "Câble LDNIO Type-C vers Lightning 30W, Charge rapide PD + Quick Charge, Transfert données haute vitesse, Longueur pratique 1 mètre, Certifié original qualité",
    "price": 119,
    "oldPrice": 149,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977558/181_mhwyol.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 182,
    "name": "Lighting Câble 3in1 de téléphone portable à HDTV pour micro et type c et iOS Câble 1M J",
    "description": "Câble 3-en-1 vers HDMI TV, Compatible Lightning, Type-C, Micro-USB, Miroir écran smartphone sur télévision, Longueur 1 mètre confortable, Solution universelle affichage grand écran",
    "price": 199,
    "oldPrice": 0,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977562/182_vtgsqe.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 183,
    "name": "Support Téléphone de Voiture 360° – Antidérapant, Sans Installation, Rotation Ajustable pour Tableau de Bord et Console J",
    "description": "Support voiture adhésif 360°, Installation sans perçage tableau bord, Rotation complète ajustement parfait, Base antidérapante stable, Compatible tous smartphones",
    "price": 99,
    "oldPrice": 150,
    "stock": 33,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977572/183_wnhzn3.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 184,
    "name": "Écouteurs pour iPhone 7/8/X/XS MAX avec fil pour casque avec micro J",
    "description": "Écouteurs filaires Lightning pour iPhone, Compatible iPhone 7 et supérieurs, Microphone intégré appels mains-libres, Contrôles volume et lecture, Alternative économique AirPods",
    "price": 66,
    "oldPrice": 199,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977576/184_gnma7l.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 185,
    "name": "Nokia TÉLÉPHONE PORTABLE 150 2023 - NOIR",
    "description": "Nokia 150 édition 2023 noir, Téléphone basique ultra-fiable, Batterie exceptionnelle autonomie, Double SIM pratique, Prix mini robustesse maximale",
    "price": 249,
    "oldPrice": 600,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977591/185_gpjp8f.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 186,
    "name": "Original chargeur iphone USB-C 25W chargeur rapide pour iPhone 15/16/17/Air/ plus/ Pro /Pro Max",
    "description": "Chargeur Apple USB-C original 25W, Charge rapide iPhone 15/16/17 series, Qualité et sécurité Apple garanties, Compatible tous iPhone USB-C, Investissement durable fiable",
    "price": 179,
    "oldPrice": 249,
    "stock": 27,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977594/186_vfem7o.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 187,
    "name": "Baseus Chargeur de voiture Allume Cigare 40W USB vers Type-C, pour Apple Iphone PD 20W",
    "description": "Chargeur voiture Baseus 40W puissant, PD 20W pour iPhone + QC 4.0, Double port charge 2 appareils, Marque Baseus qualité reconnue, Charge ultra-rapide en déplacement",
    "price": 450,
    "oldPrice": 0,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977599/187_wf6uin.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 188,
    "name": "Support magnétique pliable pour téléphone de voiture J",
    "description": "Support magnétique pliable compact, Rangement facile plié quand inutilisé, Fixation aimant puissant, Compatible grille aération, Design minimaliste discret",
    "price": 99,
    "oldPrice": 199,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977647/188_owdzgr.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 189,
    "name": "Lazy bracket stabilisateur pour smartphone J",
    "description": "Support paresseux bras flexible, Fixation bureau, lit, canapé, Angle ajustable mains libres, Idéal vidéos, lectures, visio, Libère mains confort total",
    "price": 69,
    "oldPrice": 99,
    "stock": 41,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977650/189_mvlprf.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 190,
    "name": "Apple iPhone 13 128GB 6,1\" A15 Midnight - Neuf J",
    "description": "iPhone 13 neuf garanti Apple, Stockage 128 Go suffisant, Puce A15 Bionic puissante, Coloris Midnight élégant noir, Qualité photo/vidéo exceptionnelle",
    "price": 6300,
    "oldPrice": 9899,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977653/190_bcqxdj.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 191,
    "name": "Samsung SM-B311V Déverrouillé 2G Téléphone de bas téléphone à fiche SIM J",
    "description": "Samsung basique 2G débloqué, Simple et robuste usage minimal, Prix très bas appel/SMS uniquement, Batterie longue durée, Solution urgence ou backup",
    "price": 549,
    "oldPrice": 900,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977657/191_ki66rk.jpg"
    ],
    "category": "Électronique",
    "rating": "4.3"
  },
  {
    "id": 192,
    "name": "L8Star BM10 Mini Cell Phone, Mini Mobile Dual Sim Card J",
    "description": "Mini téléphone L8Star BM10 ultra-compact, Double SIM dans format minuscule, Idéal secours ou discrétion, Fonctions basiques appel/SMS, Autonomie surprenante petit format",
    "price": 149,
    "oldPrice": 298,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977662/192_ublp26.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 193,
    "name": "Nokia Téléphone portable basique 5710 XpressAudio 2.4\" Double SIM J",
    "description": "Nokia 5710 XpressAudio unique, Écouteurs sans fil intégrés dans coque, Téléphone + écouteurs TWS inclus, Double SIM + radio FM, Concept innovant Nokia original",
    "price": 420,
    "oldPrice": 800,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977672/193_yawqtq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 194,
    "name": "Pochette pour iPhone 13 PRO MAX J",
    "description": "Coque protection iPhone 13 Pro Max, Ajustement parfait modèle spécifique, Protection complète élégante, Matériau qualité résistant, Préserve esthétique iPhone",
    "price": 140,
    "oldPrice": 160,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977674/194_ogl5hc.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 195,
    "name": "Batterie externe magnétique sans fil pour iPhone 10000mAh J",
    "description": "Powerbank MagSafe 10000mAh, Charge sans fil magnétique iPhone, Fixation sécurisée pendant charge, Capacité généreuse recharges multiples, Pratique usage nomade quotidien",
    "price": 299,
    "oldPrice": 370,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977679/195_rodkjp.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 196,
    "name": "Nillkin Case Pochette pour IPhone 16 Pro Max J",
    "description": "Coque Nillkin iPhone 16 Pro Max, Marque réputée qualité premium, Design élégant protection robuste, Finition soignée haut de gamme, Préserve valeur iPhone",
    "price": 399,
    "oldPrice": 499,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977682/196_flobv6.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 197,
    "name": "Nokia 105 noir téléphone double carte sim J",
    "description": "Nokia 105 noir classique indestructible, Double SIM gestion 2 numéros, Autonomie batterie légendaire semaines, Simple fiable économique, Parfait seniors ou backup",
    "price": 169,
    "oldPrice": 0,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977691/197_xkadsg.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 198,
    "name": "Support Téléphone Motorisé AI avec Suivi Facial 360° – Auto-Track Gestuel Sans Application J",
    "description": "Support smartphone IA tracking facial, Rotation motorisée 360° automatique, Suivi mouvement sans application, Idéal vidéos, visio, TikTok, Technologie intelligente innovante",
    "price": 349,
    "oldPrice": 0,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977698/198_j1wf0t.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 199,
    "name": "Pochette coque titanium de luxe magnétique Magsafe chargement sans fil avec protection caméra pour iPhone 16 Pro Max J",
    "description": "Coque titanium luxe iPhone 16 Pro Max, Compatible MagSafe charge sans fil, Protection caméras renforcée, Design premium élégant, Finition haut de gamme exclusive",
    "price": 180,
    "oldPrice": 0,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977699/199_zebkxg.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 200,
    "name": "Pochette silicone transparente pour iPhone 13 Mini Bleu J",
    "description": "Coque silicone transparente bleue, Pour iPhone 13 Mini compact, Laisse voir design original iPhone, Protection chocs et rayures, Prise main antidérapante confortable",
    "price": 49,
    "oldPrice": 0,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769977701/200_m2cyfs.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 201,
    "name": "Echolink 43\" - QLED 4K FHD",
    "description": "Echolink 43\" - QLED 4K FHD - SMART TV Android 14 - Wi-Fi, Bluetooth, DVB-T2/S2 + Support",
    "price": 2250,
    "oldPrice": 2700,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769856523/1_1_abzs89.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856526/2_cqdcui.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 202,
    "name": "Samsung Téléviseur 55\" Crystal UHD 4K",
    "description": "Samsung Téléviseur 55\" Crystal UHD 4K – Tizen OS, HDR10+, Modèle 55DU7000 (Version Égypte)",
    "price": 5100,
    "oldPrice": 8100,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769856580/1_oj1edt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856568/2_oyrduc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856571/3_vvdzfx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856575/4_wqbqoy.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 203,
    "name": "LP Smart TV 32\"",
    "description": "LP Smart TV 32\" - Android 14.0 - Résolution 1366×768 - 2 HDMI + 1 USB - Compatible DVB-T2/S2 - WiFi",
    "price": 1100,
    "oldPrice": 1986,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769856681/1_1_hiwfj4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856685/2_odchjk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856686/3_o7azyl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856690/4_iwr5wj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769856694/5_p7qryl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 204,
    "name": "Samsung 32\" Smart TV",
    "description": "Samsung 32\" Smart TV HD 32H5000F",
    "price": 1499,
    "oldPrice": 2100,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769856833/1_rnbbks.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 206,
    "name": "LP Smart TV 43 pouces",
    "description": "LP Smart TV 43 pouces - Image Full HD - Android 14.0 - WiFi - Idéale pour salon/famille - Tuner TV numérique",
    "price": 2000,
    "oldPrice": 3500,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769877017/1_slsc4h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877001/2_ag4ntv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877008/3_zsddya.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877001/4_pb2k4g.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877002/5_rxxsij.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 207,
    "name": "Digiclass TV 32'' Android Frameless Ultraslim",
    "description": "Digiclass TV 32'' Android Frameless Ultraslim - 32SP3222 – Noir",
    "price": 1050,
    "oldPrice": 1499,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769877671/2_bha3lo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877671/4_yebyiw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877671/3_ckn9ft.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877671/4_yebyiw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877671/5_m2hnpm.webp"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 208,
    "name": "Samsung 32\" Smart TV HD 32H5000F",
    "description": "Samsung 32\" Smart TV HD 32H5000F",
    "price": 1499,
    "oldPrice": 1947,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769877765/1_vtpfmr.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 209,
    "name": "LP Smart TV 55 pouces 4K",
    "description": "LP Smart TV 55 pouces 4K - Qualité image HD + Android 14.0 fluide - Connexion WiFi - 3 HDMI + 2 USB - Visionnage TV numérique direct",
    "price": 3400,
    "oldPrice": 5200,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769877803/1_1_z5wybp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877805/2_c3zwbf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877804/3_ysykjx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877808/4_pkyds6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769877808/5_wsbxuw.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 210,
    "name": "TCL 32 QLED Full HD Smart Google TV, Dolby Audio, Design sans bordure + Support Gratuit, 32S5K",
    "description": "TCL 32 QLED Full HD Smart Google TV, Dolby Audio, Design sans bordure + Support Gratuit, 32S5K",
    "price": 1589,
    "oldPrice": 2159,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878161/1_smdp9b.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878164/2_rzcbtd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878161/3_w7lm78.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878160/4_bezyy5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878162/5_yryd54.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 211,
    "name": "XIAOMI TV QLED A Pro 32 2025",
    "description": "XIAOMI TV QLED A Pro 32 2026",
    "price": 1479,
    "oldPrice": 1999,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878329/1_1_ornarn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878322/2_wycccp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878334/3_emorrv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878325/4_t5ae8v.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 212,
    "name": "Vision Smart TV LED 32\" Android + Abonnement Chaine 12 Mois",
    "description": "Vision Smart TV LED 32\" Android + Abonnement Chaine 12 Mois",
    "price": 1650,
    "oldPrice": 0,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878458/1_vobopx.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 213,
    "name": "Echolink 40 Smart TV Frameless FHD",
    "description": "Echolink 40 Smart TV Frameless FHD - ANDROID 14 - Récepteur Intégré HDMI + Support Mural cadeau",
    "price": 1819,
    "oldPrice": 0,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878592/1_1_cf5zoy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878592/2_mvbruk.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 214,
    "name": "Daiko Google TV 43\"",
    "description": "Daiko Google TV 43\" – TV Google sans bordure, Dolby Audio, Chromecast, Bluetooth, HDR10 - GLED43H94DK",
    "price": 2257,
    "oldPrice": 2720,
    "stock": 31,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878705/1_w643cm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878700/2_r2r0sc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878699/3_odekoh.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 215,
    "name": "TCL 50 QLED 4K UHD Smart Google Tv",
    "description": "TCL 50 QLED 4K UHD Smart Google Tv, Dolby Vision HDR10+, Slim & Uni-body + Support Gratuit, 50P7K",
    "price": 4079,
    "oldPrice": 5413,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878760/1_1_azlkzs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878755/2_bjzqib.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878757/3_ufbb9p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878757/4_jfddni.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878758/5_yxq6ou.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 216,
    "name": "Vision Smart Tv Led 50\" Android + Abonnement Chaine 12 Mois",
    "description": "Vision Smart Tv Led 50\" Android + Abonnement Chaine 12 Mois",
    "price": 3069,
    "oldPrice": 3599,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878828/1_soh4xm.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 217,
    "name": "TCL 55 QLED 4K UHD Smart Google Tv",
    "description": "TCL 55 QLED 4K UHD Smart Google Tv, Dolby Vision HDR10+, Slim & Uni-body + Support gratuit, 55P7K",
    "price": 4497,
    "oldPrice": 6069,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769878871/1_1_gyobfs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878864/2_blrxyv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878863/3_m9z2ul.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878866/4_dr6e61.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769878866/5_ohrq04.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 218,
    "name": "Samsung 40 Full HD Tizen OS Smart Tv",
    "description": "Samsung 40 Full HD Tizen OS Smart Tv, HDR, Smart Hub et Télécommande Unique, Airplay 2 + Support Gratuit",
    "price": 2369,
    "oldPrice": 3449,
    "stock": 39,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769879449/1_vthcd9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769879449/2_lqics8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769879450/3_piopef.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769879455/4_h7ldja.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769879456/5_tkfocf.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 219,
    "name": "Sonic 43 Smart tv Full HD Système WhaleOS avec Dolby Audio",
    "description": "Sonic 43 Smart tv Full HD Système WhaleOS avec Dolby Audio, Récepteur Intégré, TNT HD",
    "price": 2070,
    "oldPrice": 2800,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769879722/1_1_s8t8kz.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 220,
    "name": "REVOLUTION 32 HD Ready FrameLess, Récepteur intégré et TNT + Support gratuit",
    "description": "REVOLUTION 32 HD Ready FrameLess, Récepteur intégré et TNT + Support gratuit",
    "price": 999,
    "oldPrice": 1269,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769879879/1_l7otcr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769879872/2_s88mql.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769879873/3_pupuaq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769879874/4_c8oint.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 221,
    "name": "Echolink Téléviseur Intelligent 43 Pouces QLED Full HD",
    "description": "Echolink Téléviseur Intelligent 43 Pouces QLED Full HD avec Android 14, HDMI, DVB S2/T2",
    "price": 2299,
    "oldPrice": 3400,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769879947/1_ta6ogq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 222,
    "name": "streamsat 43\" Full HD Smart Android TV, Wi-Fi, Frameless",
    "description": "streamsat 43\" Full HD Smart Android TV, Wi-Fi, Frameless",
    "price": 2089,
    "oldPrice": 3500,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769880028/1_1_vfwflr.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 224,
    "name": "Roxon FL 50 SA - Télévison - 50\" Full HD Smart TV Android 14",
    "description": "Roxon FL 50 SA - Télévison - 50\" Full HD Smart TV Android 14 - Récepteur Intégré +TNT + HDMI +USB.",
    "price": 2999,
    "oldPrice": 3380,
    "stock": 39,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769880458/1_1_hia2sc.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 225,
    "name": "MORSAT 24 HD Smart Android TV, USB Movie, HDMI, YouTube + Support Gratuit",
    "description": "MORSAT 24 HD Smart Android TV, USB Movie, HDMI, YouTube + Support Gratuit",
    "price": 949,
    "oldPrice": 1300,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769880487/1_wibt5q.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 226,
    "name": "TCL 43 Smart TV QLED Full HD Google TV et Dolby Audio",
    "description": "TCL 43 Smart TV QLED Full HD Google TV et Dolby Audio, écran plat, 43S5K",
    "price": 2930,
    "oldPrice": 3630,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769880544/1_1_whh0rz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880523/2_tzmljq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880525/3_x72kwk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880526/4_dpjfg1.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880530/5_ntz5sd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 227,
    "name": "Echolink SMART TV - QLED 4K UHD 50\"",
    "description": "Echolink SMART TV - QLED 4K UHD 50\" - WhaleOS TV - Android 14 Officiel - Wi-Fi, Bluetooth, DVB-T2/S2 + support",
    "price": 3260,
    "oldPrice": 4070,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769880633/1_tjcsjl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 228,
    "name": "TCL 65 QLED 4K UHD Télévision Intelligente Google",
    "description": "TCL 65 QLED 4K UHD Télévision Intelligente Google, Dolby Vision HDR10+, Mince & Corps Uni, 65P7K",
    "price": 6272,
    "oldPrice": 10833,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769880664/1_1_gldywh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880697/2_rj5q3q.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880669/3_axxwcd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880672/4_w9ljbz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880682/5_rrl1vy.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 229,
    "name": "TCL 55P8K – GoogleTv 55",
    "description": "TCL 55P8K – GoogleTv 55 – Pro Gaming – QLED 4K UHD – 144HZ Natif – HDR10+ – Son Onkyo",
    "price": 5741,
    "oldPrice": 6760,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769880958/1_emgvdx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880934/2_ul0gej.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880938/3_t1p3yk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880946/4_xfitlr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769880942/5_ynykm3.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 230,
    "name": "Sonic 32 Smart TV - Frameless HD - Récepteur Intégré HDMI",
    "description": "Sonic 32 Smart TV - Frameless HD - Récepteur Intégré HDMI + Support Mural",
    "price": 1200,
    "oldPrice": 1430,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881060/1_1_rqbx4a.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 231,
    "name": "Samsung 50 4K UHD Crystal Smart TV  50U8000F",
    "description": "Samsung 50 4K UHD Crystal Smart TV Tizen HDR10+, Son OTS Lite, Design MetalStream + Support gratuit, 50U8000F",
    "price": 3942,
    "oldPrice": 4999,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881094/1_bdvbf7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881107/2_jg1lmw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881103/3_yzoxqi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881095/4_bzndn7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881095/5_zoxqsf.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 232,
    "name": "Daiko 32 HD Smart Google TV sans cadre Bluetooth Dolby Audio HLG HDR, 2 ans de garantie",
    "description": "Daiko 32 HD Smart Google TV sans cadre Bluetooth Dolby Audio HLG HDR, 2 ans de garantie",
    "price": 1299,
    "oldPrice": 1530,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881239/1_1_sfflrc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881217/2_je3luc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881215/3_phenat.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 233,
    "name": "Samsung Smart TV 43\" Crystal  4K",
    "description": "Samsung Smart TV 43\" Crystal UHD U8000F 4K",
    "price": 4100,
    "oldPrice": 5942,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881301/1_x4hi5l.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881303/2_v1enaw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881305/3_xxlgl2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881306/4_szymyi.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 234,
    "name": "Echolink Smart TV 40\" QLED",
    "description": "Echolink Smart TV 40\" QLED - WhaleOS - Wifi - Récepteur Intégré - HD 2.4/5GHz Bluetooth + Support Mural",
    "price": 1950,
    "oldPrice": 2400,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881393/1_r6vprr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881385/2_yneswr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881386/3_ww9aqg.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 235,
    "name": "Samsung 43 Full HD Smart Tizen OS TV HDR",
    "description": "Samsung 43 Full HD Smart Tizen OS TV HDR, OTS Lite et Sécurité Knox + Support gratuit, 43F6000",
    "price": 2895,
    "oldPrice": 3099,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881442/1_ni0kod.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881455/2_budj3h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881437/3_es0uhu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881440/4_up41jo.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 236,
    "name": "Samsung 43 Smart TV Crystal 4K UHD HDR Série 8 Bluetooth",
    "description": "Samsung 43 Smart TV Crystal 4K UHD HDR Série 8 Bluetooth, Motion Xcelerator, Récepteur Intégré - Nouveau",
    "price": 4236,
    "oldPrice": 5481,
    "stock": 34,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881497/1_2_mgpdvf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881502/2_rzofgr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881498/3_rusae4.jpg"
    ],
    "category": "Électronique",
    "rating": "4.3"
  },
  {
    "id": 237,
    "name": "K:OLN Smart TV 43\" Android 14 HD",
    "description": "K:OLN Smart TV 43\" Android 14 HD - Récepteur intégré + TNT + HDMI + USB",
    "price": 2488,
    "oldPrice": 3498,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881570/1_quds1v.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881556/2_lqo8i1.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 238,
    "name": "Samsung 85 4K Crystal UHD Smart TV One UI Tizen",
    "description": "Samsung 85 4K Crystal UHD Smart TV One UI Tizen, HDR10+ OTS Lite, design MetalStream + Support gratuit, 85U8000F",
    "price": 14100,
    "oldPrice": 16499,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881633/1_tcwji0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881617/2_b7r19e.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881627/3_v9cpiv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881618/4_u4pfeu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881619/5_jp5cbw.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 239,
    "name": "Venezia Smart Google TV GTV32 Smart TV – 32\" 2K LED télécommande vocale",
    "description": "Venezia Smart Google TV GTV32 Smart TV – 32\" 2K LED télécommande vocale",
    "price": 1453,
    "oldPrice": 2400,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881726/1_g7gr1f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881717/2_ljg0c3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881713/3_bjmnme.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881713/4_qflqip.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 240,
    "name": "Sonic 50 Smart tv 4K UHD Système WhaleOS avec Dolby Audio, Récepteur Intégré, TNT HD",
    "description": "Sonic 50 Smart tv 4K UHD Système WhaleOS avec Dolby Audio, Récepteur Intégré, TNT HD",
    "price": 3257,
    "oldPrice": 4350,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881821/1_1_ziu4hz.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 241,
    "name": "Visio 65 4K UHD Smart Google TV HDR10 Dolby Audio",
    "description": "Visio 65 4K UHD Smart Google TV HDR10 Dolby Audio, Bluetooth & Wi-Fi, Télé Vocale + Support Gratuit",
    "price": 5573,
    "oldPrice": 7360,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881852/1_zjl1pn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769881853/2_bgpy0t.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 242,
    "name": "Leader TÉLÉVISEUR SMART 32 » LED HD TV",
    "description": "Leader TÉLÉVISEUR SMART 32 » LED HD TV",
    "price": 2230,
    "oldPrice": 2500,
    "stock": 43,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881891/1_1_hpqbec.jpg"
    ],
    "category": "Électronique",
    "rating": "4.3"
  },
  {
    "id": 243,
    "name": "Daiko 65 QLED 4K UHD Smart Google TV, HDR+",
    "description": "Daiko 65 QLED 4K UHD Smart Google TV, HDR+, Audio Dolby, 120Hz, QLED65GU25DK",
    "price": 6489,
    "oldPrice": 9999,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881952/1_ofjobh.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 244,
    "name": "Daiko 43 Smart Tv FHD Bezeless Google TV",
    "description": "Daiko 43 Smart Tv FHD Bezeless Google TV, Dolby Audio, Chromecast, Bluetooth, HDR",
    "price": 2589,
    "oldPrice": 0,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769881997/1_1_vwj3ir.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 245,
    "name": "REVOLUTION 32 Smart TV Android HD Récepteur Intégré + TNT + HDMI + USB",
    "description": "REVOLUTION 32 Smart TV Android HD Récepteur Intégré + TNT + HDMI + USB, Support Mural",
    "price": 1152,
    "oldPrice": 1470,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882024/1_mc9ljr.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 246,
    "name": "Elexia 43 Full HD DLED Smart Google TV, Dolby Audio & HDMI/USB + Support Gratuit",
    "description": "Elexia 43 Full HD DLED Smart Google TV, Dolby Audio & HDMI/USB + Support Gratuit",
    "price": 2194,
    "oldPrice": 3607,
    "stock": 57,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882287/1_yact2o.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 247,
    "name": "Haier 50 4K UHD Smart Google TV, HDR10, HDMI, Bluetooth + Support Gratuit, H50K800UX",
    "description": "Haier 50 4K UHD Smart Google TV, HDR10, HDMI, Bluetooth + Support Gratuit, H50K800UX",
    "price": 3983,
    "oldPrice": 4911,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882338/1_1_y7pvuh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882329/2_iycxps.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882331/3_prxi07.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882334/4_bg5nne.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 248,
    "name": "Samsung 43 Smart Tv Crystal UHD 4K Tizen HDR 10+, 43DU8575 L'Europe + Support Gratuit",
    "description": "Samsung 43 Smart Tv Crystal UHD 4K Tizen HDR 10+, 43DU8575 L'Europe + Support Gratuit",
    "price": 4236,
    "oldPrice": 5808,
    "stock": 27,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882427/1_jmqzrv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 249,
    "name": "clairis Smart TV 50 – 4K UHD – Android TV – Récepteur Satellite & TNT Intégrés",
    "description": "clairis Smart TV 50 – 4K UHD – Android TV – Récepteur Satellite & TNT Intégrés – WiFi & HDMI + SUPPORT",
    "price": 2899,
    "oldPrice": 3399,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882457/1_1_pw090t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882459/2_hjkta2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882462/3_djyoze.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882464/4_sx2ct2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882472/5_pubrxo.jpg"
    ],
    "category": "Électronique",
    "rating": "4.3"
  },
  {
    "id": 250,
    "name": "Hisense Téléviseur 43'' Smart FHD + Récepteur intégré (HIS43A4K)",
    "description": "Hisense Téléviseur 43'' Smart FHD + Récepteur intégré (HIS43A4K)",
    "price": 2399,
    "oldPrice": 2999,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882555/1_owgief.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882554/2_dc4aul.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882556/3_nkuqek.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 251,
    "name": "Telefunken 55 4K UHD Smart webOS HDR10, Bluetooth & WiFi",
    "description": "Telefunken 55 4K UHD Smart webOS HDR10, Bluetooth & WiFi, télécommande vocale + Support Gratuit",
    "price": 3983,
    "oldPrice": 4985,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882654/1_1_ls9vnk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882644/2_luopzq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 252,
    "name": "Roch LED - Smart TV - 32 pouce Android 13 Sans cadre avec support GRATUIT",
    "description": "Roch LED - Smart TV - 32 pouce Android 13 Sans cadre avec support GRATUIT (garantie 12 mois)",
    "price": 1100,
    "oldPrice": 1280,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882776/1_1_itqskn.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 253,
    "name": "HYBROK Smart TV 32\" UHD – HTV32S – Noir",
    "description": "HYBROK Smart TV 32\" UHD – HTV32S – Noir",
    "price": 2100,
    "oldPrice": 1999,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882815/2_gduypr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882815/2_gduypr.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 254,
    "name": "Samsung 40\" Smart Tv Full HD - Récepteur Intégré - TNT - HDMI - 40T5299",
    "description": "Samsung 40\" Smart Tv Full HD - Récepteur Intégré - TNT - HDMI - 40T5300",
    "price": 2600,
    "oldPrice": 5400,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882862/1_1_pmfmzj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882866/2_sdl8z6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882870/3_ie27kc.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 255,
    "name": "Samsung TV 40\" - LED TV - 40M5000 - Noir",
    "description": "Samsung TV 40\" - LED TV - 40M5000 - Noir",
    "price": 4100,
    "oldPrice": 0,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769882948/1_cntpsq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882931/2_chzs1u.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769882931/3_h30tok.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 256,
    "name": "Daiko 32\" - LED HD TV - TNT - LED32M5006DK - Noir",
    "description": "Daiko 32\" - LED HD TV - TNT - LED32M5006DK - Noir",
    "price": 2379,
    "oldPrice": 0,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769883447/1_vzwmfb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883448/2_rw6iz4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883452/3_c58ylw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883456/4_cogqil.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883459/5_j91m6y.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 257,
    "name": "LG 49″ Full HD - 49LK5900PLA - LED Smart TV – Noir",
    "description": "LG 49″ Full HD - 49LK5900PLA - LED Smart TV – Noir",
    "price": 6459,
    "oldPrice": 0,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769883535/1_mtu5vo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883535/2_qr0pdc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883539/3_sxautn.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 258,
    "name": "UKA 50\" - UHD - Smart TV - Haier Fabricant -LE50K8000A - USB - HDMI - Noir",
    "description": "UKA 50\" - UHD - Smart TV - Haier Fabricant -LE50K8000A - USB - HDMI - Noir",
    "price": 5100,
    "oldPrice": 0,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769883823/1_1_cvxbhn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883818/2_av0bnm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883822/3_pgt8kq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883827/4_vclwek.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883830/5_mgmrkj.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 259,
    "name": "Nasco 32\" Ultra Slim HD - LED - Récepteur Intégré - TNT - Support mural - Noir",
    "description": "Nasco 32\" Ultra Slim HD - LED - Récepteur Intégré - TNT - Support mural - Noir",
    "price": 1799,
    "oldPrice": 0,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769883909/1_ovpj4e.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883912/2_osczbg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883916/3_pn4wg5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883919/4_vagspd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883930/5_qfwxa8.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 260,
    "name": "Daiko 32\" - LED HD TV - TNT - LED32M3003DK - Noir",
    "description": "Daiko 32\" - LED HD TV - TNT - LED32M3003DK - Noir",
    "price": 1499,
    "oldPrice": 0,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769883994/1_1_sjywjj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769883997/2_ezphj0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884001/3_pzmfpd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884009/4_xy67fz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884017/5_qbi70a.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 261,
    "name": "UKA 55\" UHD - Smart TV - LE55K8000A - Noir",
    "description": "UKA 55\" UHD - Smart TV - LE55K8000A - Noir",
    "price": 6100,
    "oldPrice": 0,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884093/1_ami3ka.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884096/2_gxstxv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884099/3_notm8b.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884103/4_bdcgic.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884111/5_zgoqkh.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 262,
    "name": "XIAOMI TV 43\" (A Pro 2026) L43MB-APME",
    "description": "XIAOMI TV 43\" (A Pro 2026) L43MB-APME",
    "price": 3449,
    "oldPrice": 4199,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884157/1_1_to6okd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 263,
    "name": "Samsung 43\" Smart TV Full HD 43F5999",
    "description": "Samsung 43\" Smart TV Full HD 43F6000",
    "price": 2799,
    "oldPrice": 3247,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884181/1_dqritn.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 264,
    "name": "Roxon FL 65 SA - Télévison – 65\" Full HD Smart TV Android 14 - Récepteur Intégré",
    "description": "Roxon FL 65 SA - Télévison – 65\" Full HD Smart TV Android 14 - Récepteur Intégré +TNT + HDMI + USB.",
    "price": 4100,
    "oldPrice": 4755,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884210/1_1_bulb3d.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 265,
    "name": "TCL TV Google 55 pouces – 4K UHD HDR10, Smart TV, HDMI 2.1 - 55P6K",
    "description": "TCL TV Google 55 pouces – 4K UHD HDR10, Smart TV, HDMI 2.1 - 55P6K",
    "price": 4194,
    "oldPrice": 5130,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884252/1_dvwapl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884252/1_dvwapl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884260/3_zsjkcr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884269/4_l4hr7j.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884277/5_uxmqme.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 266,
    "name": "TCL 55\" GoogleTv - QLED 4K UHD - HDR10+ , Dolby Vision - 55P7K",
    "description": "TCL 55\" GoogleTv - QLED 4K UHD - HDR10+ , Dolby Vision - 55P7K",
    "price": 4720,
    "oldPrice": 6230,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884337/1_1_tmvxt3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884339/2_j91ndg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884344/3_plusqk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884353/4_r3o60a.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884362/5_lo8vpa.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 267,
    "name": "MORSAT Smart TV 43 Android.14 FHD -Récepteur Intégré +TNT +HDMI +USB",
    "description": "MORSAT Smart TV 43 Android.14 FHD -Récepteur Intégré +TNT +HDMI +USB",
    "price": 1999,
    "oldPrice": 2600,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884404/1_nkq5yg.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 268,
    "name": "MORSAT Smart TV 32\" Android.14 FHD - Récepteur Intégré +TNT +HDMI +USB",
    "description": "MORSAT Smart TV 32\" Android.14 FHD - Récepteur Intégré +TNT +HDMI +USB + Support Mural",
    "price": 1144,
    "oldPrice": 1599,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884430/1_1_extwbl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 269,
    "name": "Visio 43 FHD Smart Google TV Original",
    "description": "Visio 43 FHD Smart Google TV Original, Télé Vocale + Find my remote, Bluetooth + Support Gratuit",
    "price": 2415,
    "oldPrice": 2860,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884459/1_lvuybm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884463/2_cxph1o.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 270,
    "name": "Sonic 43 Smart tv Full HD Système WhaleOS avec Dolby Audio,",
    "description": "Sonic 43 Smart tv Full HD Système WhaleOS avec Dolby Audio, Récepteur Intégré, TNT HD",
    "price": 2180,
    "oldPrice": 2850,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884499/1_1_pabw4e.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 271,
    "name": "Samsung 32 HD Smart TV One UI Tizen, HDR, TV Plus gratuit",
    "description": "Samsung 32 HD Smart TV One UI Tizen, HDR, TV Plus gratuit + Support Gratuit, 32H5000F",
    "price": 1600,
    "oldPrice": 2100,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884529/1_pxhry6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884533/2_mkdp8g.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884537/3_h6nxo8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884542/4_myjo6l.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884551/5_rq82ot.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 272,
    "name": "Echolink TV QLED 32\" - Q32WM - WhaleOS - Bluetooth - Support Gratuit",
    "description": "Echolink TV QLED 32\" - Q32WM - WhaleOS - Bluetooth - Support Gratuit",
    "price": 1299,
    "oldPrice": 1499,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884616/1_1_ivcula.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 273,
    "name": "REVOLUTION 24 HD Ready LED Tv HD Récepteur intégré + TNT + HDMI, USB,",
    "description": "REVOLUTION 24 HD Ready LED Tv HD Récepteur intégré + TNT + HDMI, USB, A+DC, Support Mural",
    "price": 950,
    "oldPrice": 1219,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884685/1_sharuy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884667/1_1_veysyd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 274,
    "name": "MORSAT Tv 24 Smart Android 14\" Récepteur intégré + TNT + HDMI + USB",
    "description": "MORSAT Tv 24 Smart Android 14\" Récepteur intégré + TNT + HDMI + USB",
    "price": 1000,
    "oldPrice": 1100,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884846/1_2_sptapx.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 275,
    "name": "Hisense 32 Smart TV HD Système Vidaa Série A4K, Durant 2 Ans Garantie, 32A4K",
    "description": "Hisense 32 Smart TV HD Système Vidaa Série A4K, Durant 2 Ans Garantie, 32A4K",
    "price": 1489,
    "oldPrice": 2200,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769884908/1_tdxrsx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884891/2_n4wz4v.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884897/3_szoo3w.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884905/4_a38xbg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769884914/5_es8uyk.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 276,
    "name": "TCL 40\" - Smart TV QLED Full HD Google Tv et Dolby Audio, Design Bezel-less, 40S5K",
    "description": "TCL 40\" - Smart TV QLED Full HD Google Tv et Dolby Audio, Design Bezel-less, 40S5K",
    "price": 2780,
    "oldPrice": 3500,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885175/76_fkpsyt.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 277,
    "name": "XIAOMI Téléviseur intelligent 43 pouces Full HD 1 an serveur IP Google TV Dolby Audio",
    "description": "XIAOMI Téléviseur intelligent 43 pouces Full HD 1 an serveur IP Google TV Dolby Audio, Wi-Fi, Bluetooth, L43MA-AFME",
    "price": 2770,
    "oldPrice": 3399,
    "stock": 41,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885228/1_1_m8afq3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885236/2_yhqnya.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 278,
    "name": "Samsung 43 Smart TV Processeur Crystal 4K UHD Système Tizen Récepteur Intégré Motion Xcelerator - Black",
    "description": "Samsung 43 Smart TV Processeur Crystal 4K UHD Système Tizen Récepteur Intégré Motion Xcelerator - Black",
    "price": 3680,
    "oldPrice": 5794,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885276/1_cxyrfk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885288/2_ily1qj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885300/3_rgvlw1.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885314/4_fy4s7m.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885328/5_shvu98.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 280,
    "name": "TCL 75 QLED 4K UHD Smart Google Tv, Dolby Vision HDR10+, Slim & Uni-body, 75P7K",
    "description": "TCL 75 QLED 4K UHD Smart Google Tv, Dolby Vision HDR10+, Slim & Uni-body, 75P7K",
    "price": 9320,
    "oldPrice": 11800,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885419/1_nye2np.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885428/2_xo4tij.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885437/3_d3z6ki.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885445/4_buttsc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885453/5_opobfb.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 281,
    "name": "TCL Smart Android TV 32 QLED avec IP Station",
    "description": "TCL Smart Android TV 32 QLED avec IP Station",
    "price": 1699,
    "oldPrice": 1899,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885550/1_1_dlbwov.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885550/2_skvjio.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885437/3_d3z6ki.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885445/4_buttsc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885453/5_opobfb.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 282,
    "name": "Sonic 32 Smart TV sans cadre HD 720P Récepteur Intégré HDMI + Support Mural",
    "description": "Sonic 32 Smart TV sans cadre HD 720P Récepteur Intégré HDMI + Support Mural",
    "price": 1290,
    "oldPrice": 1620,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885675/1_xnpmiq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 283,
    "name": "Daiko 50 Smart TV QLED Google TV, 4K UHD, HDR+, Audio Dolby, 120Hz, QLED50GU25DK",
    "description": "Daiko 50 Smart TV QLED Google TV, 4K UHD, HDR+, Audio Dolby, 120Hz, QLED50GU25DK",
    "price": 3680,
    "oldPrice": 4650,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885741/1_1_msrlf5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885727/2_jm87ab.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885727/3_omia7p.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 284,
    "name": "LP Téléviseur Smart TV 65 Pouces 4K UHD, Système Android 14.0, 3 Ports HDMI,",
    "description": "LP Téléviseur Smart TV 65 Pouces 4K UHD, Système Android 14.0, 3 Ports HDMI, 2 Ports USB, Connexion WiFi, Tuner Numérique DVB-T2/S2",
    "price": 5200,
    "oldPrice": 9999,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885827/1_hsbs0v.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885834/2_abazvw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885843/3_hb4smv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885863/4_kmyubj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885879/5_owkaax.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 285,
    "name": "XIAOMI TV LED A 65\" 2025(L65MA-AME)",
    "description": "XIAOMI TV LED A 65\" 2025(L65MA-AME)",
    "price": 5299,
    "oldPrice": 5849,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769885951/1_1_waduca.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769885946/2_rsuu6x.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 286,
    "name": "TCL 65P8K – 65 GoogleTv  – QLED 4K UHD",
    "description": "TCL 65P8K – 65 GoogleTv – Gaming pro – QLED 4K UHD – 144HZ Native – HDR10+ – Onkyo sound",
    "price": 7890,
    "oldPrice": 10360,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886017/1_izqhcw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886013/2_pcjvsk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886025/3_uh96qi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886045/4_dfq4hi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886067/5_grgwd9.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 287,
    "name": "Sonic 50 Smart TV - 4K UHD - Système WhaleOS",
    "description": "Sonic 50 Smart TV - 4K UHD - Système WhaleOS - Dolby Audio - Récepteur Intégré - TNT HD",
    "price": 3100,
    "oldPrice": 3870,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886137/1_1_kw4o14.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 288,
    "name": "TCL 50\" GoogleTv - QLED 4K UHD - HDR10+ , Dolby Vision - 50P7K",
    "description": "TCL 50\" GoogleTv - QLED 4K UHD - HDR10+ , Dolby Vision - 50P7K",
    "price": 4288,
    "oldPrice": 5150,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886358/1_qoetva.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886354/2_idumg0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886369/3_cnoudm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886383/4_hrldkj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886401/5_smhiv2.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 289,
    "name": "REVOLUTION 55 4K UHD Smart Android TV Récepteur Intégré, Bluetooth, WiFi, Frameless + Support Gratuit",
    "description": "REVOLUTION 55 4K UHD Smart Android TV Récepteur Intégré, Bluetooth, WiFi, Frameless + Support Gratuit",
    "price": 3400,
    "oldPrice": 4500,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886485/1_1_wiwiiv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 290,
    "name": "MIIO Téléviseur Google TV 32\" HD – Modèle GTV320DW7",
    "description": "MIIO Téléviseur Google TV 32\" HD – Modèle GTV320DW8",
    "price": 1250,
    "oldPrice": 1550,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886485/1_1_wiwiiv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886535/2_p0hkwc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886548/3_iiurvv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 291,
    "name": "LG 43 4K UHD smart Tv Cinema screen AI ThinQ,",
    "description": "LG 43 4K UHD smart Tv Cinema screen AI ThinQ, α5 Gen7 Processor, FILMMAKER Mode",
    "price": 3299,
    "oldPrice": 4778,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886622/1_1_xabcup.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886630/2_jxdd8z.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886641/3_a9l6d3.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 292,
    "name": "Daiko TV QLED - Smart TV 65\" - Google TV, 4K UHD, HDR+",
    "description": "Daiko TV QLED - Smart TV 65\" - Google TV, 4K UHD, HDR+, Audio Dolby, 120Hz, QLED65GU25DK",
    "price": 6000,
    "oldPrice": 7610,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886699/1_ewejmu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886734/2_xszsre.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886755/3_x3qfn7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886788/5_rpbkca.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886788/5_rpbkca.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 293,
    "name": "TCL 43\" GoogleTv - QLED 4K UHD - HDR10+ ,",
    "description": "TCL 43\" GoogleTv - QLED 4K UHD - HDR10+ , Dolby Vision - 43P7K",
    "price": 3600,
    "oldPrice": 4300,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769886843/1_1_cjials.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886852/2_1_s9rtbe.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769886879/3_nh5n0u.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 294,
    "name": "Samsung 55 Crystal UHD 4K Smart TV One UI Tizen, HDR10+,",
    "description": "Samsung 55 Crystal UHD 4K Smart TV One UI Tizen, HDR10+, design MetalStream + Support gratuit, 55U8075",
    "price": 5200,
    "oldPrice": 9449,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769887044/1_2_srbudf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887054/2_klz8ah.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887064/3_fn0qcs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887075/4_uyzbag.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887099/5_jhsdyb.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 295,
    "name": "XIAOMI TV 65\" (A Pro 2026) L65MB-APME",
    "description": "XIAOMI TV 65\" (A Pro 2026) L65MB-APME",
    "price": 6299,
    "oldPrice": 7529,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769887317/1_f5ipyc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887327/2_yktjmk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887347/3_eqn8jw.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 296,
    "name": "TCL 43 Pouces- GoogleTv – QLED PRO 4K UHD – 144HZ VRR",
    "description": "TCL 43 Pouces- GoogleTv – QLED PRO 4K UHD – 144HZ VRR – HDR10 PRO – Dolby Atmos - 43C655",
    "price": 3899,
    "oldPrice": 4910,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769887473/1_1_fyedmt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887469/2_e4yfkr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887482/3_eltj46.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887512/4_mzt3o6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887533/5_rwcqh2.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 297,
    "name": "Samsung 55 QLED Q6F 4K UHD Smart One UI Tizen",
    "description": "Samsung 55 QLED Q6F 4K UHD Smart One UI Tizen, Quantum Dot Q4 Lite HDR10+, HDMI x3 + Support gratuit, 55Q6F",
    "price": 5699,
    "oldPrice": 7349,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769887677/1_e1cnid.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887684/2_ojlznz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887704/3_ij8b4k.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887719/4_kdly0q.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887766/5_awguoa.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 298,
    "name": "MORSAT LED TV 32 Pouce Récepteur Intégré +TNT +HDMI +USB",
    "description": "MORSAT LED TV 32 Pouce Récepteur Intégré +TNT +HDMI +USB",
    "price": 1050,
    "oldPrice": 1200,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769887850/1_1_joirar.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 299,
    "name": "Samsung 75 4K UHD Crystal Smart TV Tizen HDR10+",
    "description": "Samsung 75 4K UHD Crystal Smart TV Tizen HDR10+, Son OTS Lite, Design MetalStream + Support gratuit, 75U8000F",
    "price": 9999,
    "oldPrice": 11499,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769887915/1_ighq6j.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887926/2_eil4zt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887953/3_zsuvvr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769887982/5_m3ik2l.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 300,
    "name": "Haier 55 4K UHD Smart Google TV Dolby Audio, HDR10, HDMI x4 + Support Gratuit",
    "description": "Haier 55 4K UHD Smart Google TV Dolby Audio, HDR10, HDMI x4 + Support Gratuit, H55K85FUX",
    "price": 4288,
    "oldPrice": 5808,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769888052/1_1_werxip.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769888063/2_xxme0g.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769888073/3_lwxbxx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1769888096/4_tpc1la.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 301,
    "name": "Techmania 43 Smart TV Android - Full HD 1080P - Récepteur intégré",
    "description": "Techmania 43 pouces Full HD 1080P Smart TV Android applications modernes • Récepteur intégré TNT gratuit • Connectique HDMI USB pratique • Prix accessible bon rapport qualité",
    "price": 1999,
    "oldPrice": 2699,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894636/301_s3mvp6.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 302,
    "name": "Haier 43 4K UHD Smart Google TV Dolby Audio, HDR10, HDMI x4 + Support Gratuit, H43K85FUX",
    "description": "Haier 43 pouces 4K Google TV Dolby Audio HDR10 qualité premium • 4 ports HDMI connectique riche • Support mural gratuit installation • Marque Haier fiabilité reconnue",
    "price": 3050,
    "oldPrice": 4999,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894646/302_xtbv1u.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 303,
    "name": "TCL GoogleTv - Premuim – QD – Mini LED – 4K 65 – 144HZ VRR – HDR10 – 65C6K",
    "description": "TCL 65 pouces 4K Mini LED Technologie QD image exceptionnelle • 144Hz VRR fluidité maximale • HDR10 Google TV premium • Marque TCL fiabilité reconnue",
    "price": 9467,
    "oldPrice": 11470,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894658/303_veoloc.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 304,
    "name": "Samsung 75 4K UHD Crystal Smart TV Tizen HDR10+, Son OTS Lite, Design MetalStream + Support gratuit, 75U8000F",
    "description": "Samsung 75 pouces 4K Crystal • HDR10+ son OTS Lite puissant • Design MetalStream élégance moderne • Système Tizen applications intégrées • Support mural gratuit inclus",
    "price": 9999,
    "oldPrice": 11499,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894668/304_hptc2x.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 305,
    "name": "REVOLUTION TV 24\" Pouces FHD LED Récepteur intégré + TNT + HDMI + USB",
    "description": "Revolution 24 pouces FHD LED • Récepteur TNT intégré gratuit • Connectique HDMI USB complète • Format compact idéal chambre • Prix très accessible petit budget",
    "price": 980,
    "oldPrice": 1100,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769994950/305_mfcedw.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 306,
    "name": "MIIO Téléviseur Smart TV 43\" FHD – Modèle M430W799",
    "description": "MIIO 43 pouces Full HD • Smart TV fonctionnalités modernes • Interface simple utilisation facile • Qualité image claire lumineuse • Rapport qualité prix excellent",
    "price": 1999,
    "oldPrice": 2400,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894788/306_v3c119.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 307,
    "name": "Sharp TV Smart 42\" – HEVC Advance, Audio Dolby, HDMI, Ci+ - 42GLEDSHP",
    "description": "Sharp 42 pouces Smart TV • HEVC Advance compression efficace • Audio Dolby qualité sonore • Connectique HDMI Ci+ complète • Marque Sharp qualité japonaise",
    "price": 2499,
    "oldPrice": 3210,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894843/307_gbfdpd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 308,
    "name": "Hisense Smart TV UHD 4K 58'' - Garantie 24 Mois",
    "description": "Hisense 58 pouces UHD 4K Image ultra haute définition claire • Garantie 24 mois assurance • Smart TV fonctions connectées • Excellent rapport qualité prix",
    "price": 3999,
    "oldPrice": 4799,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894854/308_dhmkga.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 309,
    "name": "MIIO Téléviseur Google TV 65\" UHD 4K – Modèle GTV750DW7",
    "description": "MIIO 65 pouces 4K UHD • Google TV interface intuitive • Grande diagonale salon spacieux • Image haute définition lumineuse • Rapport qualité prix compétitif",
    "price": 4450,
    "oldPrice": 5199,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894884/309_j5udr9.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 310,
    "name": "REVOLUTION TV 32\" LED FrameLess Design - Récepteur intégré et TNT",
    "description": "Revolution 32 pouces LED • Design sans cadre moderne élégant • Récepteur TNT intégré gratuit • Format polyvalent salon chambre • Prix très accessible abordable",
    "price": 1100,
    "oldPrice": 1200,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894895/310_rakxr4.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 311,
    "name": "Elexia TV 32 HD Récepteur Intégré ,TNT, HDMI, USB + Support Mural",
    "description": "Elexia 32 pouces HD LED • Récepteur TNT intégré pratique • Connectique HDMI USB complète • Support mural gratuit inclus • Format compact polyvalent économique",
    "price": 1100,
    "oldPrice": 1449,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894919/311_l6vug1.jpg"
    ],
    "category": "Électronique",
    "rating": 3.9
  },
  {
    "id": 312,
    "name": "Skyworth 43 Smart Google Tv FHD Google Assistant, Bluetooth, HDR 10, Dolby Audio",
    "description": "Skyworth 43 pouces Google TV • Google Assistant commande vocale • Bluetooth HDR10 Dolby Audio • Interface Google simple pratique • Qualité image son excellente",
    "price": 2436,
    "oldPrice": 3575,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894942/312_azzwdu.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 313,
    "name": "Hisense Smart TV QLED 4K 55'' - Garantie 24 Mois",
    "description": "Hisense 55 pouces QLED 4K • Technologie QLED couleurs vives • Garantie 24 mois protection • Smart TV applications modernes • Excellent rapport qualité prix",
    "price": 5100,
    "oldPrice": 5700,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894970/313_e8mj11.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 314,
    "name": "Samsung 55 Smart Tv Crystal UHD 4K Système Tizen HDR10+, Mode Filmmaker, 55DU7175 L'Europe",
    "description": "Samsung 55 pouces Crystal 4K • HDR10+ Mode Filmmaker pro • Système Tizen interface rapide • Design élégant salon moderne • Marque Samsung qualité leader",
    "price": 5362,
    "oldPrice": 7619,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769894981/314_fscfkt.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 315,
    "name": "LG Smart TV 43'' modèle 2025 - UA73 4K Ultra HD - Assistance intelligence artificielle - HDR10 PRO - WebOS24",
    "description": "LG 43 pouces 4K Ultra HD • Intelligence artificielle image optimale • HDR10 PRO technologie avancée • WebOS24 interface fluide rapide • Modèle 2025 dernière génération",
    "price": 3783,
    "oldPrice": 4100,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895014/315_fuw1zu.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 316,
    "name": "Techmania Smart TV 32 Android HD Récepteur intégré, Qualité d'image exceptionnelle + Support gratuit",
    "description": "Techmania 32 pouces HD Android • Récepteur intégré TNT gratuit • Qualité image exceptionnelle claire • Support mural gratuit inclus • Prix très accessible petit budget",
    "price": 1141,
    "oldPrice": 1826,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895039/316_zjznpd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 317,
    "name": "Sharp 65\" GOOGLE TV - 4K UHD Smart Officiel, Dolby AUDIO, HDR10, Qualité japonaise, garantie 2 ans + Support Gratuit",
    "description": "Sharp 65 pouces 4K Google TV • Dolby Audio HDR10 premium • Qualité japonaise fiabilité reconnue • Garantie 2 ans protection • Support mural gratuit inclus",
    "price": 5888,
    "oldPrice": 7410,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895057/317_lw7war.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 318,
    "name": "Samsung 55 4K Crystal UHD Smart TV Tizen HDR10+, Son OTS Lite, Design Sans Bords + Support gratuit, 55U8200F",
    "description": "Samsung 55 pouces Crystal 4K • HDR10+ son OTS Lite excellent • Design sans bords moderne élégant • Système Tizen rapide fluide • Support mural gratuit inclus",
    "price": 5109,
    "oldPrice": 7329,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895075/318_ltdokh.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 319,
    "name": "Samsung 32\" Smart Tv Rapide + Récepteur -TNT et WI-FI + Screen",
    "description": "Samsung 32 pouces Smart TV • Récepteur TNT Wi-Fi intégré • Screen Mirroring partage écran • Interface rapide réactive fluide • Marque Samsung qualité leader",
    "price": 1699,
    "oldPrice": 2600,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895092/319_bvaklr.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 320,
    "name": "Haier 65 QLED PRO 4K Smart Google TV, Dolby Vision IQ, HDR10+, HDMI x4, 2 ans garantie + Support Gratuit, H65Q80FUX",
    "description": "Haier 65 pouces QLED PRO • Dolby Vision IQ HDR10+ premium • 4 ports HDMI connectique riche • Garantie 2 ans protection assurée • Support mural gratuit inclus",
    "price": 7194,
    "oldPrice": 9699,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895110/320_bzs0or.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 322,
    "name": "REVOLUTION TV 40\" FHD WIFI - Récepteur Intégré - YouTube - Abonnement Nashare 1 an + Support Mural",
    "description": "Revolution 40 pouces FHD LED • Récepteur TNT intégré gratuit • Connectique HDMI USB complète • Format compact idéal chambre • Prix très accessible petit budget",
    "price": 1799,
    "oldPrice": 2300,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769995241/322_uvczbe.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 323,
    "name": "Samsung 32\" Smart Tv - série 5 - TNT - Récepteur - Abonnement 12 Mois - Noir",
    "description": "Samsung 32 pouces Smart TV • Récepteur TNT Wi-Fi intégré • Screen Mirroring partage écran • Interface rapide réactive fluide • Marque Samsung qualité leader",
    "price": 1899,
    "oldPrice": 2700,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769995254/323_a9bzuy.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 324,
    "name": "REVOLUTION Smart TV 55\" Android 4K UHD - Récepteur Intégré + TNT + HDMI + USB - Nouveau modèle",
    "description": "Revolution 55 pouces 4K UHD Android Smart TV applications modernes • Récepteur TNT intégré gratuit • Connectique HDMI USB complète • Nouveau modèle dernière génération",
    "price": 3399,
    "oldPrice": 4000,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895188/324_t8t0ps.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 325,
    "name": "Haier 50 QLED 4K UHD Smart Google TV, Dolby Vision, HDR10+, HDMI x4, 2 ans garantie + Support Gratuit, H50S80FUX",
    "description": "Haier 50 pouces QLED 4K • Dolby Vision HDR10+ image vivace • 4 ports HDMI connectique riche • Garantie 2 ans protection assurée • Support mural gratuit inclus",
    "price": 4280,
    "oldPrice": 7349,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895213/325_orhmj7.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 326,
    "name": "Techmania 55 QLED 4K UHD Smart TV, HDMI, USB, Dolby Audio + Support gratuit",
    "description": "Techmania 55 pouces QLED 4K • Dolby Audio qualité sonore claire • Connectique HDMI USB complète • Support mural gratuit inclus • Rapport qualité prix excellent",
    "price": 3630,
    "oldPrice": 4289,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895225/326_enywb9.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 327,
    "name": "Echolink 32 Smart TV Frameless HD - Récepteur Intégré HDMI + Support Mural",
    "description": "Echolink 32 pouces HD Smart • Design sans cadre moderne élégant • Récepteur intégré TNT pratique • Support mural gratuit inclus • Format compact très abordable",
    "price": 1200,
    "oldPrice": 1440,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895251/327_rl5cjm.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 328,
    "name": "Samsung Smart TV 75\" QLED Q7F 4K Vision AI",
    "description": "Samsung 75 pouces QLED 4K • Vision AI intelligence image avancée • Technologie Quantum couleurs exceptionnelles • Grande diagonale salon spacieux • Marque Samsung qualité leader",
    "price": 14835,
    "oldPrice": 19053,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895270/328_bxviut.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 329,
    "name": "clairis TV intelligente 40\" – Android 14 – Full HD - Bluetooth + Support",
    "description": "Clairis 40 pouces Full HD • Android 14 dernière génération • Bluetooth connectique sans fil • Support mural gratuit inclus • Prix accessible bon rapport",
    "price": 1750,
    "oldPrice": 1999,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895297/329_wvgeph.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 330,
    "name": "Sharp TV INTELLIGENTE 32\" – HEVC Advance, Dolby Audio, HDMI, Ci+ - 2T-C32EG5MX",
    "description": "Sharp 32 pouces Smart TV • HEVC Advance compression optimale • Dolby Audio son qualité • Connectique HDMI Ci+ complète • Marque Sharp qualité japonaise",
    "price": 3100,
    "oldPrice": 0,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895317/330_lo6cpg.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 331,
    "name": "Daiko Téléviseur intelligent 55 pouces QLED Google TV, 4K UHD, HDR+, Dolby Audio, 120Hz, QLED55GU25DK",
    "description": "Daiko 55 pouces QLED 4K • Google TV interface intuitive simple • HDR+ Dolby Audio premium • 120Hz fluidité image excellente • Rapport qualité prix compétitif",
    "price": 4309,
    "oldPrice": 5280,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895335/331_v0o7te.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 332,
    "name": "Visio 40 Smart Google TV FHD Google Assistant Bluetooth HDR, Dolby Vision + Support",
    "description": "Visio 40 pouces Google TV • Google Assistant commande vocale • Dolby Vision HDR image vivace • Bluetooth connectique sans fil • Support mural gratuit inclus",
    "price": 2046,
    "oldPrice": 2773,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895355/332_mtm7dy.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 333,
    "name": "Techmania 50 Smart TV Android 4K UHD Récepteur intégré + Support Mural",
    "description": "Techmania 50 pouces 4K UHD • Android Smart TV applications modernes • Récepteur intégré TNT gratuit • Support mural gratuit inclus • Rapport qualité prix excellent",
    "price": 3000,
    "oldPrice": 3790,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895380/333_i8yqt7.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 334,
    "name": "MORSAT Smart TV 55\" Android 14 - 4K Ultra HD - Récepteur TNT Intégré - 3 Ports HDMI",
    "description": "Morsat 55 pouces 4K Ultra HD • Android 14 dernière génération • Récepteur TNT intégré gratuit • 3 ports HDMI connectique riche • Rapport qualité prix compétitif",
    "price": 3400,
    "oldPrice": 4300,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895400/334_epchvp.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 335,
    "name": "Venezia Smart Google TV GTV32 – Téléviseur intelligent 32 pouces 2K LED avec télécommande vocale",
    "description": "Venezia 32 pouces 2K LED • Google TV interface intuitive • Télécommande vocale pratique • Format compact salon chambre • Prix très accessible abordable",
    "price": 1519,
    "oldPrice": 2400,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895421/335_ifv6qc.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 336,
    "name": "TCL 50 QD-MiniLED 4K UHD Smart Google TV Dolby Vision IQ, 144Hz, Audio ONKYO + Support gratuit, 50C6K",
    "description": "TCL 50 pouces 4K Mini LED • Dolby Vision IQ HDR premium • 144Hz Audio ONKYO qualité • Google TV interface fluide • Support mural gratuit inclus",
    "price": 5384,
    "oldPrice": 6399,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895437/336_ehvivm.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 337,
    "name": "REVOLUTION Smart TV 43\" Android 14 FHD -Récepteur Intégré +TNT +HDMI +USB +Bluetooth",
    "description": "Revolution 43 pouces FHD Android • Android 14 dernière génération • Récepteur TNT intégré gratuit • Bluetooth HDMI USB connectique • Prix très accessible abordable",
    "price": 2149,
    "oldPrice": 2700,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895462/337_d4desd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 338,
    "name": "LG Smart TV 55'' modèle 2025 - UA73 4K Ultra HD - Assistance intelligence artificielle - HDR10 PRO - WebOS24",
    "description": "LG 55 pouces 4K Ultra HD • Intelligence artificielle image optimale • HDR10 PRO technologie avancée • WebOS24 interface fluide rapide • Modèle 2025 dernière génération",
    "price": 5050,
    "oldPrice": 6280,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895482/338_uwjbct.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 339,
    "name": "LP Smart TV 43 pouces - Image Full HD - Android 14.0 - WiFi - Idéale pour salon/famille - Tuner TV numérique",
    "description": "LP 43 pouces Full HD Android • Android 14 dernière génération • WiFi Tuner TV numérique • Idéale salon famille usage • Prix très accessible abordable",
    "price": 1999,
    "oldPrice": 3600,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895500/339_ylgdja.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 340,
    "name": "LP Smart TV 32\" - Android 14.0 - Résolution 1366×768 - 2 HDMI + 1 USB - Compatible DVB-T2/S2 - WiFi",
    "description": "LP 32 pouces Android 14 • 2 HDMI 1 USB connectique • Compatible DVB-T2/S2 pratique • WiFi connexion sans fil • Prix très accessible abordable",
    "price": 1100,
    "oldPrice": 1986,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895519/340_xdivua.jpg"
    ],
    "category": "Électronique",
    "rating": 3.9
  },
  {
    "id": 341,
    "name": "XIAOMI Smart Tv 75 A Pro QLED – 4K - L75MA-SME",
    "description": "Xiaomi 75 pouces QLED 4K • Technologie QLED couleurs vives • Grande diagonale salon spacieux • Interface Xiaomi simple fluide • Marque Xiaomi fiabilité reconnue",
    "price": 10000,
    "oldPrice": 11599,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895538/341_fequof.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 342,
    "name": "XIAOMI TV Max 85\" 2025 L85MA-MAXME",
    "description": "Xiaomi 85 pouces 4K Max • Modèle 2025 dernière génération • Grande diagonale expérience immersive • Interface Xiaomi simple fluide • Marque Xiaomi qualité reconnue",
    "price": 12200,
    "oldPrice": 13599,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895558/342_a2sqfd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 343,
    "name": "clairis Smart TV 43\" Android 14 FHD - Récepteur Intégré + TNT + HDMI + USB + Bluetooth",
    "description": "Clairis 43 pouces FHD Android • Android 14 dernière génération • Récepteur TNT intégré gratuit • Bluetooth HDMI USB connectique • Prix très accessible abordable",
    "price": 1999,
    "oldPrice": 2299,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895585/343_vit1bf.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 344,
    "name": "clairis 40 INCH LED TV SPEC FOR T2S2 SMART",
    "description": "Clairis 40 pouces LED Smart • Compatible T2S2 récepteur intégré • Interface simple utilisation facile • Qualité image claire lumineuse • Prix très accessible abordable",
    "price": 1700,
    "oldPrice": 2699,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895612/344_qpn9n4.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 345,
    "name": "Echolink 32 Smart TV HD Système TIZEN OS Sans cadre, Récepteur Intégré Wi-Fi, HDMI + Support mural, 32T7999",
    "description": "Echolink 32 pouces HD Tizen • Design sans cadre moderne élégant • Récepteur intégré Wi-Fi pratique • Support mural gratuit inclus • Interface Tizen rapide fluide",
    "price": 1299,
    "oldPrice": 1499,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895630/345_nbbshp.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 346,
    "name": "MORSAT Smart TV 32\" Android 14 FHD -Deux télécommande -Récepteur Intégré +TNT +HDMI +USB",
    "description": "Morsat 32 pouces FHD Android • Android 14 dernière génération • Deux télécommandes incluses pratique • Récepteur TNT intégré gratuit • Prix très accessible abordable",
    "price": 1190,
    "oldPrice": 1600,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895659/346_kdfdhn.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 347,
    "name": "MIIO Téléviseur Google TV 55\" UHD 4K – Modèle GTV650DW7",
    "description": "MIIO 55 pouces 4K UHD • Google TV interface intuitive • Image haute définition lumineuse • Interface simple utilisation facile • Rapport qualité prix excellent",
    "price": 3450,
    "oldPrice": 4069,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895682/347_mfd1zs.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 348,
    "name": "REVOLUTION TV 65 Smart TV Android Résolution 4K ultra HD, Récepteur Intégré",
    "description": "Revolution 65 pouces 4K UHD Android Smart TV applications modernes • Récepteur intégré TNT gratuit • Grande diagonale salon spacieux • Rapport qualité prix compétitif",
    "price": 5100,
    "oldPrice": 6000,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895706/348_l4cl3r.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 349,
    "name": "XIAOMI 32 Android TV™ 2025 Abonnent IP Station 12 Mois- Google Assistant™ Bluetooth™ Dolby Audio™",
    "description": "Xiaomi 32 pouces Android TV • Google Assistant commande vocale • Dolby Audio Bluetooth qualité • Abonnement IP Station 12 mois • Marque Xiaomi fiabilité reconnue",
    "price": 1660,
    "oldPrice": 1999,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895728/349_dw6qe4.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 350,
    "name": "LG TV 43\" Series, Cinema Screen Design 4K Active HDR WebOS Smart AI ThinQ",
    "description": "LG 43 pouces 4K Cinema • Design Cinema Screen élégant • Active HDR WebOS AI ThinQ • Interface LG fluide rapide • Marque LG qualité leader",
    "price": 4140,
    "oldPrice": 4999,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895762/350_dublkt.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 351,
    "name": "Visio 50 4K UHD Smart Google TV HDR10 Dolby Audio, Bluetooth & Wi-Fi, Télé Vocale + Support Gratuit",
    "description": "Visio 50 pouces 4K UHD • Google TV HDR10 Dolby Audio • Bluetooth Wi-Fi Télé vocale • Connectique sans fil complète • Support mural gratuit inclus",
    "price": 3200,
    "oldPrice": 5500,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895787/351_wbvqrp.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 352,
    "name": "LG Smart TV 50'' modèle 2025 - UA73 4K Ultra HD - Assistance intelligence artificielle - HDR10 PRO - WebOS24",
    "description": "LG 50 pouces 4K Ultra HD • Intelligence artificielle image optimale • HDR10 PRO technologie avancée • WebOS24 interface fluide rapide • Modèle 2025 dernière génération",
    "price": 4000,
    "oldPrice": 4299,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895808/352_at4h9f.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 353,
    "name": "XIAOMI TV Android 32 pouces 2025 - Assistant Google™ Bluetooth™ Dolby Audio™ plus support tv",
    "description": "Xiaomi 32 pouces Android 2025 • Google Assistant commande vocale • Dolby Audio Bluetooth qualité • Support TV inclus pratique • Marque Xiaomi fiabilité reconnue",
    "price": 1689,
    "oldPrice": 1800,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895828/353_lllruj.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 354,
    "name": "Aiwa 40\" Smart TV - FHD - Récepteur Intégré - Noi",
    "description": "Aiwa 40 pouces Full HD • Smart TV fonctions modernes • Récepteur intégré TNT pratique • Interface simple utilisation facile • Rapport qualité prix excellent",
    "price": 7600,
    "oldPrice": 0,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895883/354_jyv8tq.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 355,
    "name": "MIIO Téléviseur Google TV 43\" FHD – Modèle GTV430DW7",
    "description": "MIIO 43 pouces FHD Google TV • Interface Google simple intuitive • Image claire lumineuse qualité • Fonctionnalités Smart TV modernes • Rapport qualité prix excellent",
    "price": 2249,
    "oldPrice": 2499,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895891/355_h5ck2m.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 356,
    "name": "Samsung 32\" T5300 Smart TV LED – TNT, USB, HDMI, Satellite, Screen Mirroring + Support Offert",
    "description": "Samsung 32 pouces Smart LED • TNT Satellite récepteur intégré • Screen Mirroring partage écran • Connectique HDMI USB complète • Support mural gratuit inclus",
    "price": 1680,
    "oldPrice": 1899,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895921/356_tpfi99.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 357,
    "name": "Hisense Smart TV HD 32'' - Garantie 24 Mois",
    "description": "Hisense 32 pouces HD Smart • Garantie 24 mois protection assurée • Smart TV fonctions connectées • Interface simple utilisation facile • Prix très accessible abordable",
    "price": 1520,
    "oldPrice": 2135,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895948/357_zx4hhk.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 358,
    "name": "XIAOMI Télévision intelligente 43 pouces Full HD Google TV Audio Dolby, Wi-Fi, Bluetooth, L43MA-AFME",
    "description": "Xiaomi 43 pouces Full HD • Google TV Audio Dolby qualité • Wi-Fi Bluetooth connectique complète • Interface Xiaomi simple fluide • Marque Xiaomi fiabilité reconnue",
    "price": 2800,
    "oldPrice": 0,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769895973/358_h3si17.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 359,
    "name": "REVOLUTION Smart-Android TV 50\" 4K UHD - Récepteur Intégré + TNT + HDMI + USB - Nouveau modèle",
    "description": "Revolution 50 pouces 4K UHD Android Smart TV applications modernes • Récepteur TNT intégré gratuit • Connectique HDMI USB complète • Nouveau modèle dernière génération",
    "price": 3100,
    "oldPrice": 4000,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896039/359_nr7oqq.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 360,
    "name": "Hisense 32 Smart TV HD VIDAA Audio Dolby Contraste Élevé, 32A4H",
    "description": "Hisense 32 pouces HD VIDAA • Audio Dolby contraste élevé • Interface VIDAA simple rapide • Smart TV fonctions connectées • Prix très accessible abordable",
    "price": 1500,
    "oldPrice": 2202,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896034/360_qp4s4r.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 361,
    "name": "New Sat Smart TV 43 Android FHD Récepteur intégré et TNT, Qualité d'image exceptionnelle + Support gratuit",
    "description": "New Sat 43 pouces FHD Android • Récepteur TNT intégré gratuit • Qualité image exceptionnelle claire • Support mural gratuit inclus • Prix très accessible abordable",
    "price": 1950,
    "oldPrice": 2299,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896059/361_q8zpmx.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 362,
    "name": "TCL 75 QLED 4K UHD Smart Google TV Dolby Vision, Atmos, ONKYO Audio, 144Hz, 75P8K",
    "description": "TCL 75 pouces QLED 4K • Dolby Vision Atmos premium • Audio ONKYO qualité sonore • 144Hz fluidité image maximale • Marque TCL fiabilité reconnue",
    "price": 11257,
    "oldPrice": 14705,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769897197/362_ddg57f.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 363,
    "name": "LG 43 Full HD Série LM6370 webOS ThinQ AI, HDR10, audio DTS Virtual:X, 43LM6370PVA + Support gratuit",
    "description": "LG 43 pouces Full HD • webOS ThinQ AI intelligent • HDR10 audio DTS Virtual X • Interface LG fluide rapide • Support mural gratuit inclus",
    "price": 2980,
    "oldPrice": 3829,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769897197/363_hnyd55.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 364,
    "name": "Hisense Smart TV UHD 4K 55'' - Garantie 24 Mois",
    "description": "Hisense 55 pouces UHD 4K • Image ultra haute définition claire • Garantie 24 mois assurance • Smart TV fonctions connectées • Excellent rapport qualité prix",
    "price": 3799,
    "oldPrice": 4899,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769996012/364_gxoct4.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 365,
    "name": "Daiko 65\" - Smart Google TV - 4K UHD - Frameless - Wifi - Bluetooth - Dolby Audio HLG HDR10 - 2 ans garantie",
    "description": "Daiko 65 pouces 4K UHD • Design sans cadre modern élégant • Dolby Audio HDR10 HLG premium • Wifi Bluetooth connectique complète • Garantie 2 ans protection assurée",
    "price": 6430,
    "oldPrice": 8110,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769897198/365_btop6q.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 366,
    "name": "TCL 55 QLED 4K UHD Smart Google TV Dolby Vision, Atmos, ONKYO Audio, 144Hz, 55P8K",
    "description": "TCL 55 pouces QLED 4K • Dolby Vision Atmos premium • Audio ONKYO qualité sonore • 144Hz fluidité image maximale • Marque TCL fiabilité reconnue",
    "price": 5790,
    "oldPrice": 7699,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769897198/366_nilbl4.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 370,
    "name": "MORSAT Smart TV 43\" Android.14 FHD - Récepteur Intégré +TNT +HDMI +USB",
    "description": "Morsat 43 pouces FHD Android • Android 14 dernière génération • Récepteur TNT intégré gratuit • Connectique HDMI USB complète • Prix très accessible abordable",
    "price": 2100,
    "oldPrice": 2700,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896329/370_gy0074.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 371,
    "name": "MORSAT Smart TV 50\" Android 14 4K UHD - Récepteur Intégré + TNT + HDMI + USB - Nouveau modèle",
    "description": "Morsat 50 pouces 4K UHD • Android 14 dernière génération • Récepteur TNT intégré gratuit • Connectique HDMI USB complète • Nouveau modèle dernière génération",
    "price": 3100,
    "oldPrice": 4200,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896329/371_oljxst.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 372,
    "name": "Samsung 55 Crystal UHD 4K Smart TV One UI Tizen, HDR10+, design MetalStream + Support gratuit, 55U7999",
    "description": "Samsung 55 pouces Crystal 4K • One UI Tizen interface rapide • HDR10+ design MetalStream élégant • Interface moderne fluide pratique • Support mural gratuit inclus",
    "price": 5520,
    "oldPrice": 7700,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896329/372_bic12y.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 373,
    "name": "Sharp Smart TV 65\" 4K sans cadre avec récepteur intégré 4T-C65FL6EX",
    "description": "Sharp 65 pouces 4K Smart • Design sans cadre moderne élégant • Récepteur intégré TNT pratique • Qualité japonaise fiabilité reconnue • Grande diagonale salon spacieux",
    "price": 5999,
    "oldPrice": 7100,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896330/373_pwan4s.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 374,
    "name": "LG Smart TV 65'' - UHD AI UA85 4K - télécommande magique AI - HDR10 - WebOS25 2024",
    "description": "LG 65 pouces 4K UHD AI • Télécommande magique AI pratique • HDR10 WebOS25 interface avancée • Intelligence artificielle image optimale • Marque LG qualité leader",
    "price": 7940,
    "oldPrice": 9720,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896332/374_xedlsj.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 375,
    "name": "Thomson Android TV 65\" QLED + 3 mois tod gratuite",
    "description": "Thomson 65 pouces QLED Android • Technologie QLED couleurs vives • 3 mois Tod gratuit inclus • Interface Android simple fluide • Rapport qualité prix excellent",
    "price": 6399,
    "oldPrice": 7799,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896330/375_cmzld8.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 376,
    "name": "LG 55 4K UHD AI Smart TV webOS HDR10 Pro, Processeur a7 Gen 8 + Support Gratuit, 55UA73005",
    "description": "LG 55 pouces 4K UHD AI • Processeur a7 Gen 8 puissant • HDR10 Pro webOS avancé • Interface fluide rapide moderne • Support mural gratuit inclus",
    "price": 5100,
    "oldPrice": 6199,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896333/376_vihres.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 377,
    "name": "Samsung 32\" Smart TV NOUVEAU MODEL RAPIDE AVEC ABONNEMENT SERVICE TV 1 AN",
    "description": "Samsung 32 pouces Smart TV • Nouveau modèle rapide fluide • Abonnement Service TV 1 an • Interface Samsung réactive pratique • Marque Samsung qualité leader",
    "price": 1859,
    "oldPrice": 2000,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896334/377_fjadew.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 378,
    "name": "Samsung TV LED 50\" HDR 10 4K UHD - Smart TV - UA50U8000FUXMV",
    "description": "Samsung 50 pouces 4K UHD • HDR10 image qualité excellente • Smart TV Tizen fonctions • Design élégant salon moderne • Marque Samsung qualité leader",
    "price": 3899,
    "oldPrice": 5100,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896333/378_gctpmg.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 379,
    "name": "Haier Smart Android TV 32 FULL HD 1080 avec IP Station 12 Extra",
    "description": "Haier 32 pouces Full HD • Android TV fonctions modernes • IP Station 12 mois inclus • Interface simple utilisation facile • Marque Haier fiabilité reconnue",
    "price": 1500,
    "oldPrice": 1799,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896333/379_zm9zn1.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 380,
    "name": "Visio 65 Smart TV UHD 4K Google Assistant Bluetooth HDR 10 HLG Dolby Vision + Support Mural",
    "description": "Visio 65 pouces 4K UHD • Google Assistant commande vocale • HDR10 HLG Dolby Vision premium • Bluetooth connectique sans fil • Support mural gratuit inclus",
    "price": 5580,
    "oldPrice": 6980,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896334/380_ra3jrv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 383,
    "name": "TCL 65 Smart Tv QD-MiniLED 4K UHD Google TV Dolby Vision IQ, 144Hz, ONKYO Audio, 65C6K",
    "description": "TCL 65 pouces 4K Mini LED • Dolby Vision IQ HDR premium • 144Hz ONKYO Audio qualité • Google TV interface fluide • Marque TCL fiabilité reconnue",
    "price": 10041,
    "oldPrice": 12766,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896335/383_ykzmz8.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 384,
    "name": "TCL 32 Android TV™ FHD 1080P Abonnent IP Station 12 Mois- Google Assistant™ Bluetooth™ Dolby Audio™",
    "description": "TCL 32 pouces FHD Android • Google Assistant commande vocale • Dolby Audio Bluetooth qualité • Abonnement IP Station 12 mois • Marque TCL fiabilité reconnue",
    "price": 1699,
    "oldPrice": 1899,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896336/384_f6n8xw.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 385,
    "name": "Samsung 32\" SMART TV S5 EDITION 2023 TNT+Récepteur+Abonnement 12 Mois+Câble HDMI",
    "description": "Samsung 32 pouces Smart S5 • TNT Récepteur intégré pratique • Abonnement 12 mois inclus • Câble HDMI fourni complet • Marque Samsung qualité leader",
    "price": 1699,
    "oldPrice": 2050,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896336/385_onan5m.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 386,
    "name": "Thomson Google TV 55\" UHD Side Feet",
    "description": "Thomson 55 pouces UHD Google • Google TV interface intuitive • Design Side Feet élégant • Image haute définition lumineuse • Rapport qualité prix excellent",
    "price": 5000,
    "oldPrice": 6400,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896336/386_ops5i4.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 388,
    "name": "TCL 40 Android TV™ FHD 1080P Abonnent IP Station 12 Mois- Google Assistant™ Bluetooth™ Dolby Audio™",
    "description": "TCL 40 pouces FHD Android • Google Assistant commande vocale • Dolby Audio Bluetooth qualité • Abonnement IP Station 12 mois • Marque TCL fiabilité reconnue",
    "price": 2566,
    "oldPrice": 2999,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896337/388_djacsx.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 389,
    "name": "Visio 75 4K UHD Smart Google TV HDR10 Dolby Audio, Bluetooth & Wi-Fi, Télé Vocale + Support Gratuit",
    "description": "Visio 75 pouces 4K UHD • Google TV HDR10 Dolby Audio • Bluetooth Wi-Fi Télé vocale • Grande diagonale salon spacieux • Support mural gratuit inclus",
    "price": 7500,
    "oldPrice": 11931,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896339/389_m5igif.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 390,
    "name": "TCL 65 Premium QD-MiniLED Smart Google TV Dolby Vision IQ, Ai HDR10+, 144Hz + Support gratuit, 65C7K",
    "description": "TCL 65 pouces 4K Mini LED • Dolby Vision IQ AI HDR10+ • 144Hz fluidité image maximale • Google TV interface premium • Support mural gratuit inclus",
    "price": 10936,
    "oldPrice": 14705,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896338/390_nm5d3b.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 391,
    "name": "Venezia Google TV 43\" Téléviseur intelligent LED 2K - TNT HD intégrée, WiFi 5, 3x HDMI - Commande Vocale Hey Google - Garantie 1 An",
    "description": "Venezia 43 pouces LED 2K • Google TV commande vocale Hey • TNT HD WiFi 5 intégré • 3 ports HDMI connectique riche • Garantie 1 an protection assurée",
    "price": 2600,
    "oldPrice": 3600,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896338/391_runltw.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 392,
    "name": "TCL 65\" Premium QD-MiniLED 4K UHD, 144Hz, Dolby Vision IQ, Audio Bang & Olufsen, Google TV, 65C8K",
    "description": "TCL 65 pouces 4K Mini LED • Audio Bang Olufsen premium • Dolby Vision IQ 144Hz • Google TV interface avancée • Marque TCL qualité reconnue",
    "price": 17950,
    "oldPrice": 21699,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896339/392_djwira.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 393,
    "name": "REVOLUTION TV 24 HD Ready Smart Android, HDMI, USB + Support Gratuit",
    "description": "Revolution 24 pouces HD Ready • Android Smart TV applications • Connectique HDMI USB complète • Support mural gratuit inclus • Format compact très abordable",
    "price": 1099,
    "oldPrice": 1300,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896338/393_dan92p.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 394,
    "name": "clairis Téléviseur 32\" LED FrameLess – Full HD – Récepteur Satellite & TNT Intégrés – HDMI & USB + Support Mural Gratuit",
    "description": "Clairis 32 pouces Full HD LED • Design sans cadre moderne élégant • Récepteur Satellite TNT intégré • Connectique HDMI USB complète • Support mural gratuit inclus",
    "price": 1099,
    "oldPrice": 1199,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896339/394_pev4kz.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 395,
    "name": "REVOLUTION 43 Smart TV Android FULL HD Récepteur Intégré + TNT + HDMI + USB, Support Mural",
    "description": "Revolution 43 pouces FHD Android • Récepteur TNT intégré gratuit • Connectique HDMI USB complète • Support mural gratuit inclus • Prix très accessible abordable",
    "price": 2100,
    "oldPrice": 3444,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896339/395_oy1gih.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 396,
    "name": "XIAOMI SMART TV 32 A PRO",
    "description": "Xiaomi 32 pouces Smart Pro • Interface Xiaomi simple fluide • Qualité image claire lumineuse • Fonctionnalités Smart TV modernes • Marque Xiaomi fiabilité reconnue",
    "price": 2099,
    "oldPrice": 0,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896340/396_bsbs6a.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 397,
    "name": "Daiko 55 QLED 4K UHD Google TV Dolby Audio, HDR10, 120Hz + Support gratuit, QLED55GU25DK",
    "description": "Daiko 55 pouces QLED 4K • Google TV Dolby Audio HDR10 • 120Hz fluidité image excellente • Interface Google simple intuitive • Support mural gratuit inclus",
    "price": 3999,
    "oldPrice": 6800,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896340/397_upynfy.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 398,
    "name": "Samsung 43 QLED 4K UHD Smart TV Tizen Quantum HDR10+, Son OTS Lite, Design AirSlim + Support gratuit, 43Q68D",
    "description": "Samsung 43 pouces QLED 4K • Quantum HDR10+ son OTS Lite • Design AirSlim élégance moderne • Système Tizen interface rapide • Support mural gratuit inclus",
    "price": 5299,
    "oldPrice": 6469,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896341/398_tjgm1f.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 399,
    "name": "Samsung 32\" Smart Tv Rapide + Abonnement Smart TV 1 AN +TNT+SAT",
    "description": "Samsung 32 pouces Smart TV • Abonnement Smart TV 1 an • TNT Satellite récepteur intégré • Interface rapide réactive fluide • Marque Samsung qualité leader",
    "price": 1899,
    "oldPrice": 2299,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896340/399_vouhyv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 400,
    "name": "TCL 98 Premium QD-MiniLED Smart Google TV, Dolby Vision IQ, Ai HDR10+, 144Hz, 98C7K",
    "description": "TCL 98 pouces 4K Mini LED • Dolby Vision IQ AI HDR10+ • 144Hz fluidité image maximale • Google TV interface premium avancée • Expérience cinéma immersive exceptionnelle",
    "price": 48920,
    "oldPrice": 65867,
    "stock": 2,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769896341/400_ez7cz6.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 401,
    "name": "Visio TV intelligente 50 pouces UHD 4K avec Google Assistant, Bluetooth, HDR 10, HLG, Dolby Vision + Support mural",
    "description": "Image 4K cristalline HDR brillante • Google Assistant commande vocale intégrée • Dolby Vision cinéma à domicile • Bluetooth connectivité sans fil • Support mural inclus installation facile",
    "price": 3400,
    "oldPrice": 4300,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905640/401_j4rndw.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 402,
    "name": "LG 43 Full HD webOS, HDR10 Pro, DTS Virtual:X, Bluetooth, 43LM6370 + Support gratuit",
    "description": "WebOS interface fluide intuitive • HDR10 Pro images éclatantes • DTS Virtual:X son immersif • 43 pouces taille polyvalente • Support gratuit installation simple",
    "price": 2900,
    "oldPrice": 3600,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905640/402_mdvzwg.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 403,
    "name": "Toshiba LED TV 43\", FULL HD, Récepteur intégré, Dolby Audio, HDMI*2, USB2*1",
    "description": "Récepteur intégré prêt à l'emploi • Dolby Audio son puissant • Connectivité HDMI USB complète • Design compact salon parfait • Full HD qualité image nette",
    "price": 5000,
    "oldPrice": 0,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905641/403_edadrv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 404,
    "name": "Samsung 65 Smart TV Crystal UHD 4K Upscaling Système Tizen AirSlim Design DVB-T2CS2 - 65 CU7172 L'Europe",
    "description": "Upscaling 4K intelligence artificielle • Système Tizen applications riches • Design AirSlim élégance maximale • DVB-T2CS2 réception optimale • 65 pouces écran immersif",
    "price": 8500,
    "oldPrice": 10000,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905640/404_aj93aq.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 405,
    "name": "Daiko 65\"- Google TV 5.0– 4K UHD, HDR10, HLG, Dolby Audio - GLED65AI97DK",
    "description": "Google TV 5.0 streaming illimité • HDR10 HLG contrastes exceptionnels • Dolby Audio qualité cinéma • 65 pouces grand écran • Garantie 2 ans tranquillité assurée",
    "price": 5600,
    "oldPrice": 7120,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905641/405_y8mgqr.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 406,
    "name": "MORSAT 65 4K UHD Smart Android TV, Film USB, HDMI, YouTube + Support Gratuit",
    "description": "Android TV applications infinies • YouTube Netflix préinstallés • 4K UHD résolution élevée • Support gratuit inclus • HDMI USB multimédia complet",
    "price": 5200,
    "oldPrice": 5899,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905641/406_rwbig0.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 407,
    "name": "Daiko 55 4K UHD Google TV Dolby Audio, HDR10 Chromecast intégré + Support gratuit 2 ans garantie, GLED55AI96DK",
    "description": "Chromecast intégré diffusion facile • Dolby Audio son professionnel • HDR10 images spectaculaires • 55 pouces taille idéale • Support gratuit garantie 2 ans",
    "price": 3650,
    "oldPrice": 4899,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905834/407_epe3wd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 408,
    "name": "Samsung 43 4K UHD Crystal Smart TV Tizen One UI HDR10+, Design MetalStream + Support gratuit, 43U8020F",
    "description": "Tizen One UI navigation simple • HDR10+ luminosité dynamique • Design MetalStream finition premium • 43 pouces polyvalent • Support gratuit installation rapide",
    "price": 3899,
    "oldPrice": 4699,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905835/408_uroezx.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 409,
    "name": "Starsat Téléviseur intelligent 32\" Android 14 – LED sans cadre, WiFi, HDMI, DVB, HDR",
    "description": "Android 14 dernière technologie • LED sans cadre design moderne • WiFi HDMI DVB complet • HDR qualité image améliorée • 32 pouces compact pratique",
    "price": 1299,
    "oldPrice": 1399,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905835/409_rvear8.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 410,
    "name": "Haier 55 QLED PRO 4K Smart Google TV, Dolby Vision IQ, HDR10+, HDMI x4, 2 ans garantie + Support Gratuit, H55Q80FUX",
    "description": "QLED couleurs vivantes milliard • Dolby Vision IQ adaptation automatique • HDR10+ détails impressionnants • HDMI x4 connectivité maximale • Garantie 2 ans support gratuit",
    "price": 5699,
    "oldPrice": 8599,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905836/410_jmpja2.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 411,
    "name": "Echolink TIZEN Tv 32\" 32T8000 - Nouveau modèle",
    "description": "Tizen OS performance optimale • Nouveau modèle 2025 technologie • Compact polyvalent toute pièce • Interface simple utilisation facile • 32 pouces taille pratique",
    "price": 1299,
    "oldPrice": 1600,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905838/411_dnwcf6.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 412,
    "name": "K:OLN Téléviseur Intelligent 43\" Android 14 HD - Récepteur intégré + TNT + HDMI + USB",
    "description": "Android 14 système récent • Récepteur TNT HDMI USB • HD qualité image nette • 43 pouces écran polyvalent • Installation simple rapide",
    "price": 2449,
    "oldPrice": 3599,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770040485/412_dckqsz.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 413,
    "name": "Aiwa SMART TV LED 32 pouces Récepteur intégré JH32TS700S",
    "description": "Récepteur intégré prêt regarder • Smart TV applications populaires • Design compact économique • Qualité Aiwa fiabilité éprouvée • 32 pouces taille chambre",
    "price": 2100,
    "oldPrice": 0,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769905839/413_gq3ax7.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 414,
    "name": "Hisense Smart TV QLED 4K 65'' - Garantie 24 Mois",
    "description": "QLED technologie couleurs pures • 4K Ultra HD détails précis • Garantie 24 mois sécurité • Smart TV divertissement complet • 65 pouces immersion totale",
    "price": 8799,
    "oldPrice": 9566,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906047/414_yfsjnm.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 415,
    "name": "Echolink TIZEN Tv 32\" F32T7000 - 2025 New",
    "description": "Modèle 2025 nouveauté • Tizen OS fluidité garantie • 32 pouces taille idéale • Rapport qualité prix imbattable • Design moderne élégant",
    "price": 1649,
    "oldPrice": 0,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906047/415_bigufj.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 417,
    "name": "Toshiba 65\" Smart TV - 4K Ultra HD - Android 9.0 - Ethernet - Wifi - FrameLess - Noir",
    "description": "Ultra HD 4K immersion totale • Android 9.0 applications nombreuses • FrameLess design sans bordures • Ethernet WiFi connectivité double • 65 pouces grand écran",
    "price": 15000,
    "oldPrice": 0,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906049/417_vsr2da.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 418,
    "name": "Hisense Smart TV 43 inches 43A4G Android 11 Series Full HD",
    "description": "Android 11 interface récente • Full HD qualité optimale • 43 pouces taille polyvalente • Prix accessible qualité Hisense • Smart TV streaming facile",
    "price": 4200,
    "oldPrice": 0,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906051/418_ok0woi.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 419,
    "name": "Haier 65 QLED 4K UHD Smart Google TV, Dolby Vision, HDR10+, HDMI x4, 2 ans garantie + Support Gratuit, H65S80FUX",
    "description": "QLED 4K couleurs éclatantes • Dolby Vision HDR10+ premium • HDMI x4 connectivité maximale • 65 pouces écran immersif • Support gratuit garantie 2 ans",
    "price": 6420,
    "oldPrice": 9249,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906052/419_jfzhvy.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 420,
    "name": "TCL 75 Premium QD-MiniLED Smart Google TV, Dolby Vision IQ, Ai HDR10+, 144Hz, 75C7K",
    "description": "QD-MiniLED technologie avancée • Dolby Vision IQ intelligent • 144Hz gaming fluidité extrême • Google TV complet moderne • 75 pouces écran géant",
    "price": 15757,
    "oldPrice": 20251,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906052/420_qc7o9h.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 421,
    "name": "K:OLN Téléviseur Intelligent 32\" HD avec Récepteur Intégré + TNT + HDMI + USB + Support Mural",
    "description": "HD qualité image nette • Récepteur TNT HDMI USB • Support mural inclus • Installation facile économique • 32 pouces compact pratique",
    "price": 1349,
    "oldPrice": 1600,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906053/421_jrpteq.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 422,
    "name": "TCL 75\" Premium QD-MiniLED 4K UHD, 144Hz, Dolby Vision IQ, Audio Bang & Olufsen, Google TV, 75C8K",
    "description": "QD-MiniLED 4K excellence • 144Hz Dolby Vision IQ • Audio Bang & Olufsen premium • Google TV divertissement illimité • 75 pouces immersion maximale",
    "price": 24500,
    "oldPrice": 28399,
    "stock": 2,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906054/422_cic0h1.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 426,
    "name": "Venezia Smart Google TV 32\" Android HD - Récepteur intégré + TNT + HDMI + USB - Garantie 1 An",
    "description": "Google TV applications riches • Récepteur TNT HDMI USB • HD qualité image • Garantie 1 an sécurité • 32 pouces design moderne",
    "price": 1430,
    "oldPrice": 2600,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906059/426_xiiw67.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 427,
    "name": "Sonic 55 Smart TV - 4K UHD - Système WhaleOS - Dolby Audio - Récepteur Intégré - TNT HD",
    "description": "4K UHD détails impressionnants • Système WhaleOS rapide • Dolby Audio son puissant • Récepteur TNT HD intégré • 55 pouces taille idéale",
    "price": 3562,
    "oldPrice": 4210,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906059/427_o4qttf.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 428,
    "name": "Samsung Smart TV 55'' modèle 2025 - Crystal UHD U8000F 4K - HDR10 PRO - Tizen™",
    "description": "Modèle 2025 dernière génération • Crystal UHD 4K éclatant • HDR10 PRO luminosité optimale • Tizen™ interface intuitive • 55 pouces écran parfait",
    "price": 4941,
    "oldPrice": 6280,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906060/428_odihzv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 429,
    "name": "Samsung Smart TV 43'' modèle 2025 - Crystal UHD U8000F 4K - HDR10 PRO - Tizen™",
    "description": "Crystal UHD 4K qualité • HDR10 PRO contrastes riches • Tizen™ système intelligent • Modèle 2025 technologie récente • 43 pouces polyvalent",
    "price": 3883,
    "oldPrice": 4700,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906061/429_v9vcmm.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 430,
    "name": "Samsung 77 OLED HDR10+ 4K Vision AI S85F Tizen Téléviseur intelligent, Dolby Atmos, HDMI 2.1 & 120 Hz + Support gratuit, QA77S85F",
    "description": "OLED 77\" immersion géante • HDR10+ 4K Vision AI • Dolby Atmos son cinéma • Support gratuit HDMI 2.1 120Hz • Design premium élégant",
    "price": 29000,
    "oldPrice": 45449,
    "stock": 2,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906062/430_jonvhf.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 431,
    "name": "TCL 85 Premium QD-MiniLED Smart Google TV, Dolby Vision IQ, Ai HDR10+, 144Hz, 85C7K",
    "description": "86 pouces écran géant • QD-MiniLED excellence visuelle • Dolby Vision IQ 144Hz • Google TV complet • Immersion totale cinéma",
    "price": 25552,
    "oldPrice": 34347,
    "stock": 2,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906064/431_wcruja.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 432,
    "name": "Schneider TV LED 43\" SMART TV FULL HD",
    "description": "Full HD qualité accessible • Smart TV applications essentielles • 43 pouces polyvalent • Prix économique fiable • Design simple efficace",
    "price": 2590,
    "oldPrice": 3100,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906510/432_ifwcj2.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 434,
    "name": "clairis Smart TV 50\" Android TV LED 4K",
    "description": "Android TV intelligent • LED 4K résolution élevée • 50 pouces taille parfaite • Rapport qualité prix • Streaming applications",
    "price": 2950,
    "oldPrice": 3999,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906511/434_qt27rm.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 435,
    "name": "Samsung 65 Neo QLED 8K Tizen, Dolby Atmos, Processeur IA Gen2, Upscaling IA, 65QN800DU",
    "description": "Neo QLED 8K définition ultime • Processeur IA Gen2 puissant • Upscaling IA intelligent • Dolby Atmos son immersif • 65 pouces premium",
    "price": 14929,
    "oldPrice": 19449,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906511/435_wcvhvm.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 436,
    "name": "Samsung 32\" Smart Tv HD Rapide - Récepteur Intégré + Abonnement Tv 12 Mois",
    "description": "HD qualité image claire • Récepteur intégré TNT • Abonnement TV 12 mois • 32 pouces compact pratique • Smart TV rapide",
    "price": 1799,
    "oldPrice": 2199,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906514/436_o2zac4.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 437,
    "name": "Samsung 65 4K Crystal UHD Smart TV Tizen HDR10+, Son OTS Lite, Design Sans Bords + Support gratuit, 65U8200F",
    "description": "Crystal UHD 4K brillant • HDR10+ son OTS Lite • Design sans bords élégant • Support gratuit inclus • 65 pouces immersif",
    "price": 8599,
    "oldPrice": 9599,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906515/437_e8qoav.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 438,
    "name": "Thomson Android TV 65\" QLED",
    "description": "QLED 65\" couleurs vibrantes • Android TV applications • 4K UHD détails précis • Marque Thomson fiabilité • 65 pouces grand écran",
    "price": 7200,
    "oldPrice": 8765,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906516/438_phrmjz.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 439,
    "name": "clairis Tv Led 24 Récepteur et TNT - FHD",
    "description": "24 pouces compact • Récepteur TNT intégré • Full HD net • Prix accessible • Chambre bureau parfait",
    "price": 899,
    "oldPrice": 1100,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906518/439_rstejf.jpg"
    ],
    "category": "Électronique",
    "rating": 3.9
  },
  {
    "id": 440,
    "name": "Samsung 32'' SMART TV RAPIDE + TNT + USB + HDMI +SCREEN+SAT",
    "description": "Smart TV rapide fluide • TNT USB HDMI complet • Screen mirroring pratique • SAT réception satellite • 32 pouces polyvalent",
    "price": 1659,
    "oldPrice": 1999,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906518/440_tiytoz.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 441,
    "name": "TCL 75 Smart Tv QD-MiniLED 4K UHD Google TV Dolby Vision IQ, 144Hz, ONKYO Audio, 75C6K",
    "description": "QD-MiniLED 4K premium • Dolby Vision IQ 144Hz • Audio ONKYO qualité • Google TV divertissement • 75 pouces écran géant",
    "price": 13673,
    "oldPrice": 21473,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906519/441_whqiqa.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 442,
    "name": "LG 43\" Smart TV - 4K Ultra HD - 43UR80006LJ - Noir",
    "description": "4K Ultra HD LG • Smart TV webOS • 43 pouces polyvalent • Design noir élégant • Qualité LG reconnu",
    "price": 4456,
    "oldPrice": 4892,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906521/442_lvnfzt.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 443,
    "name": "Roxon FL 65 SA - Télévison - 50\" Full HD Smart TV Android 14 - Récepteur Intégré +TNT +HDMI +USB",
    "description": "Android 14 performant • Full HD qualité • Récepteur TNT HDMI USB • Installation simple • 50 pouces taille idéale",
    "price": 5600,
    "oldPrice": 6099,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906522/443_qra1v0.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 444,
    "name": "Samsung Smart TV 50\" CU8000 Crystal UHD 4K",
    "description": "Crystal UHD 4K brillant • 50 pouces taille idéale • Smart TV Tizen • Qualité Samsung reconnue • Design élégant moderne",
    "price": 4200,
    "oldPrice": 7100,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906522/444_nkcw0t.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 445,
    "name": "Samsung 32 TV HD Smart One UI Tizen, HDR, TV Plus gratuit + Support Gratuit, 32H5000F",
    "description": "Smart TV One UI Tizen • HDR qualité image • TV Plus gratuit • Support gratuit inclus • 32 pouces compact",
    "price": 1550,
    "oldPrice": 1899,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906524/445_qsso0c.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 446,
    "name": "Samsung 32\" Smart Tv - Série 5 - TNT - Récepteur - Noir",
    "description": "Série 5 qualité Samsung • TNT récepteur intégré • Design noir classique • 32 pouces compact • Smart TV performant",
    "price": 1699,
    "oldPrice": 2100,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906525/446_pqcekn.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 447,
    "name": "Thomson Google TV 43\" UHD Side Feet",
    "description": "Google TV 43 pouces • 4K UHD détails nets • Side Feet design stable • Marque Thomson confiance • Streaming illimité",
    "price": 3660,
    "oldPrice": 4599,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906526/447_hrroxd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 448,
    "name": "Samsung Smart TV 65\" QLED Q7F 4K Vision AI",
    "description": "QLED 65\" couleurs pures • 4K Vision AI intelligent • Smart TV Tizen • Premium Samsung • 65 pouces immersion",
    "price": 11600,
    "oldPrice": 14899,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906528/448_rowljo.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8
  },
  {
    "id": 449,
    "name": "Echolink Smart TV 40\" QLED - WhaleOS - Wifi - Récepteur Intégré - HD 2.4/5GHz Bluetooth + Support Mural",
    "description": "QLED 40\" qualité image • WhaleOS rapide fluide • WiFi Bluetooth HD • Support mural inclus • 40 pouces polyvalent",
    "price": 2000,
    "oldPrice": 2499,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906529/449_dutrbo.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 450,
    "name": "REVOLUTION Télévision 85 4K Smart Android Tv + Récepteur intégré + TNT",
    "description": "85 pouces écran immense • 4K Smart Android • Récepteur TNT intégré • Divertissement maximal • Écran géant famille",
    "price": 18500,
    "oldPrice": 0,
    "stock": 2,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907155/450_rnejmv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 451,
    "name": "streamsat Télévision intelligente 32 pouces HD Prêt Android sans cadre HDMI",
    "description": "32 pouces sans cadre • Android HD intelligent • HDMI connectivité • Design moderne élégant • Compact pratique",
    "price": 1340,
    "oldPrice": 1600,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907157/451_e4xnzv.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 452,
    "name": "Techmania 40 Smart TV Android - Full HD 1080P - Récepteur intégré + Support Mural",
    "description": "Android Smart TV • Full HD 1080P net • Récepteur support mural • 40 pouces polyvalent • Prix accessible",
    "price": 1900,
    "oldPrice": 2500,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907160/452_jzansi.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 453,
    "name": "Samsung Smart Tv BU8000 4K crystal UHD 54",
    "description": "Crystal UHD 4K Samsung • 54 pouces grand écran • Smart TV Tizen • Qualité exceptionnelle • Design premium",
    "price": 5500,
    "oldPrice": 8300,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907161/453_o1wbig.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 454,
    "name": "Samsung 32\" Smart Tv Rapide + Récepteur -TNT et WI-FI + Screen Mirroring -Tizen",
    "description": "Tizen system rapide • Récepteur TNT WiFi • Screen Mirroring pratique • 32 pouces compact • Smart TV fluide",
    "price": 1699,
    "oldPrice": 2100,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907164/454_urhgxa.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 455,
    "name": "TCL Téléviseur QLED intelligent 43 pouces S5K FHD 1 an serveur IP Google TV Dolby Audio, Wi-Fi, Bluetooth, L43MA-AFME",
    "description": "QLED Full HD couleurs • Google TV Dolby Audio • WiFi Bluetooth complet • Serveur IP 1 an • 43 pouces polyvalent",
    "price": 2900,
    "oldPrice": 3100,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907165/455_chfiff.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 456,
    "name": "Haier 55 Mini-LED 4K Smart Google TV, Dolby Vision IQ, HDR10+, HDMI x4, 2 ans garantie + Support Gratuit, H55M80FUX",
    "description": "Mini-LED 4K excellence • Dolby Vision IQ HDR10+ • HDMI x4 connectivité • Garantie 2 ans support • 55 pouces immersif",
    "price": 6899,
    "oldPrice": 11399,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907169/456_rvgavf.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 457,
    "name": "Venezia Smart TV 32\" GOOGLE TV - Récepteur intégré + TNT + HDMI + USB - Garantie 1 An",
    "description": "Google TV streaming • Récepteur TNT HDMI USB • 32 pouces compact • Garantie 1 an • Design moderne",
    "price": 1499,
    "oldPrice": 2100,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907172/457_oiqmpy.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 458,
    "name": "Daiko 65 4K UHD Smart Google TV Dolby Audio, HDR10 Chromecast intégré + Support gratuit 2 ans garantie, GLED65AI97DK",
    "description": "Google TV 4K smart • Dolby Audio HDR10 • Chromecast intégré • Support gratuit 2 ans • 65 pouces grand écran",
    "price": 5499,
    "oldPrice": 7299,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907173/458_lcalzk.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 459,
    "name": "Venezia Smart TV 43\" Android HD - Récepteur intégré + TNT + HDMI + USB",
    "description": "Android Smart TV • 43 pouces polyvalent • Récepteur TNT connectivité • Installation facile • HD qualité image",
    "price": 2399,
    "oldPrice": 3500,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907176/459_tmdkmk.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 460,
    "name": "Thomson Google TV 50\" QLED Side Feet",
    "description": "QLED 50\" Google TV • Side Feet design • 4K qualité image • Marque fiable • 50 pouces idéal",
    "price": 4699,
    "oldPrice": 5599,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907179/460_hozv9b.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 461,
    "name": "Thomson Google TV 65\" UHD Side Feet",
    "description": "Google TV 65 pouces • 4K UHD détails • Side Feet stable • Grand écran famille • 65 pouces immersif",
    "price": 6800,
    "oldPrice": 8800,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907182/461_gp09ou.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 462,
    "name": "MORSAT Tv Led 24 Récepteur et TNT",
    "description": "24 pouces compact • Récepteur TNT intégré • LED qualité économique • Pratique chambre • Prix accessible",
    "price": 999,
    "oldPrice": 1100,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908110/462_japv7m.jpg"
    ],
    "category": "Électronique",
    "rating": 3.9
  },
  {
    "id": 463,
    "name": "Toshiba Smart TV Led 4K UHD - 55\"- sans cadre- récepteur intégré- 3*HDMI- 2*USB- Netflix",
    "description": "4K UHD sans cadre • 55 pouces immersif • Récepteur 3 HDMI 2 USB • Netflix intégré • Smart TV complet",
    "price": 8100,
    "oldPrice": 0,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908111/463_nya25x.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 464,
    "name": "Thomson Google TV 55\" QLED Pro",
    "description": "QLED Pro 55 pouces • Google TV premium • Qualité image supérieure • Design professionnel • 55 pouces parfait",
    "price": 6699,
    "oldPrice": 8999,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908113/464_vjsdni.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 465,
    "name": "HYBROK Téléviseur 43\" Smart UHD (HTV43S)",
    "description": "Smart UHD 43 pouces • 4K résolution élevée • Téléviseur intelligent • Marque HYBROK • Qualité fiable",
    "price": 2399,
    "oldPrice": 3100,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908117/465_omvff2.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 466,
    "name": "LG 55 Smart Tv Cinema Screen 4K UHD with AI ThinQ, 5 Gen7 Processor, FILMMAKER Mode, Récepteur Intégré",
    "description": "Cinema Screen immersion • 4K UHD AI ThinQ • Processeur 5 Gen7 • FILMMAKER Mode professionnel • 55 pouces cinéma maison",
    "price": 5299,
    "oldPrice": 6699,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908119/466_c2xtxz.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 467,
    "name": "Echolink Smart TV 32\" QLED - WhaleOS - Wifi - Récepteur Intégré - HD 2.4/5GHz Bluetooth + Support Mural",
    "description": "QLED 32\" compact • WhaleOS WiFi Bluetooth • HD 2.4/5GHz rapide • Support mural inclus • 32 pouces pratique",
    "price": 1399,
    "oldPrice": 1600,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908122/467_wowbzh.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 468,
    "name": "Thomson Google TV 65\" QLED Side Feet",
    "description": "QLED 65\" Google TV • Side Feet design • Couleurs vibrantes éclatantes • Streaming illimité • 65 pouces immersif",
    "price": 8299,
    "oldPrice": 9999,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908124/468_xyimsy.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 469,
    "name": "LG TV intelligente 65 pouces NanoCell AI 4K UHD AI webOS HDR10 Pro, Processeur a7 Gen 8, Magic Remote + Support gratuit, 65NANO79",
    "description": "NanoCell AI 4K UHD • WebOS HDR10 Pro • Processeur a7 Gen 8 • Magic Remote support gratuit • 65 pouces premium",
    "price": 7599,
    "oldPrice": 9699,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908128/469_bs4iea.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 470,
    "name": "Tron Smart TV 32\" Android Récepteur Intégré HDR",
    "description": "Android 32 pouces • Récepteur intégré HDR • Smart TV compact • Prix accessible • 32 pouces pratique",
    "price": 1599,
    "oldPrice": 0,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908129/470_qrsbhm.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 471,
    "name": "Daiko 50 QLED 4K UHD Smart Google TV HDR10, Dolby Audio, 120 Hz, QLED50GU25DK, 2 ans garantie",
    "description": "QLED 4K Google TV • HDR10 Dolby Audio • 120 Hz fluidité • Garantie 2 ans • 50 pouces polyvalent",
    "price": 3999,
    "oldPrice": 5960,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908141/471_di0brj.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 472,
    "name": "Thomson Google TV 50\" QLED Side Feet + 3 mois tod gratuite",
    "description": "QLED 50\" Google TV • Side Feet design • 3 mois TOD gratuit • Streaming premium inclus • 50 pouces idéal",
    "price": 4499,
    "oldPrice": 5400,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908135/472_rcofck.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 473,
    "name": "Roch LE32 - Smart TV -32 pouce Android 13 Frameless avec support GRATUIT (12 mois garantie)",
    "description": "Android 13 récent • 32 pouces Frameless • Support gratuit inclus • Garantie 12 mois • Design sans cadre",
    "price": 1399,
    "oldPrice": 1599,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908136/473_inrmkn.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 474,
    "name": "Toshiba 65\" Smart TV - LED 4K UHD - Sans cadre -Récepteur intégré - Netflix - Noir",
    "description": "LED 4K UHD 65\" • Sans cadre design • Récepteur Netflix intégré • Grand écran famille • 65 pouces immersif",
    "price": 11200,
    "oldPrice": 0,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908137/474_wftvse.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 475,
    "name": "Hisense Smart TV UHD 4K 58''",
    "description": "4K Ultra HD 58\" • Smart TV Hisense • Qualité image supérieure • Taille idéale salon • 58 pouces parfait",
    "price": 4600,
    "oldPrice": 7449,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908141/475_gltps2.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 476,
    "name": "Schneider TV LED 32\" SMART TV HD",
    "description": "Smart TV LED 32\" • HD résolution claire • Prix économique accessible • Compact polyvalent • 32 pouces pratique",
    "price": 1499,
    "oldPrice": 0,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908143/476_ihpepb.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 477,
    "name": "Samsung 32\" Smart Tv Rapide + Récepteur -TNT et WI-FI + Screen Mirroring",
    "description": "Smart TV rapide fluide • Récepteur TNT WiFi • Screen Mirroring facile • 32 pouces pratique • Design moderne",
    "price": 1699,
    "oldPrice": 2100,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908147/477_qsrk8f.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 478,
    "name": "K:OLN Smart TV 32 HD Récepteur Intégré + TNT + HDMI + USB + Support Mural",
    "description": "Smart TV 32\" HD • Récepteur TNT HDMI USB • Support mural inclus • Installation simple • 32 pouces compact",
    "price": 1399,
    "oldPrice": 1700,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908150/478_gct81h.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 480,
    "name": "Samsung 65 Smart TV Crystal UHD 4K Upscaling Système Tizen AirSlim, DVB-T2CS2, 65DU8575 L'Europe",
    "description": "Crystal UHD 4K Samsung • Upscaling intelligent • Tizen AirSlim DVB-T2CS2 • Modèle Europe 65\" • Design AirSlim élégant",
    "price": 8399,
    "oldPrice": 10920,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908154/480_tqu6wd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 481,
    "name": "Asus Écran moniteur gaming Full HD 21.5\" VP228HE (90LM01K0-B05170)",
    "description": "Asus VP228HE 21.5\" Gaming • Gaming Full HD 21.5\" • Performance fluide rapide • Design gaming élégant • Qualité Asus fiabilité",
    "price": 890,
    "oldPrice": 1900,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908159/481_w7ayre.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 482,
    "name": "XIAOMI Moniteur Ecran Gaming G27i 27\"(ELA5375EU",
    "description": "Écran gaming 27 pouces • Full HD résolution nette • 100Hz fluidité jeu • Design moderne Xiaomi • 27 pouces immersif",
    "price": 1450,
    "oldPrice": 2100,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908160/482_flliaq.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 483,
    "name": "Msi PRO MP161 E2U Moniteur Portable",
    "description": "Moniteur portable 16\" • Ultra-léger transportable • USB-C alimentation simple • Productivité nomade • 16 pouces pratique",
    "price": 1890,
    "oldPrice": 2100,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908161/483_feqpuq.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 484,
    "name": "XIAOMI Monitor 27\" pouces IPS Full HD 100Hz (Moniteur de 27 pouces avec résolution FHD) A27i",
    "description": "27 pouces IPS Full HD • 100Hz refresh rate • Résolution FHD 1920×1080 • Design épuré moderne • Grand écran productivité",
    "price": 1899,
    "oldPrice": 2200,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908164/484_ql1btg.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 485,
    "name": "Msi MAG 242F Moniteur Gaming et Travail, Écran de 24 Pouces avec Résolution Full HD (1920 x 1080 Pixels - 200Hz- Temps de réponse 0.5ms",
    "description": "24 pouces Full HD • 200Hz 0.5ms réactivité • Gaming travail polyvalent • Performance MSI • 24 pouces idéal",
    "price": 1999,
    "oldPrice": 2200,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908168/485_t0eo0x.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 486,
    "name": "XIAOMI Moniteur Ecran PC 23.8\" Full HD (HDMI+VGA)",
    "description": "23.8 pouces IPS • Full HD HDMI VGA • Résolution 1920×1080 • Compact bureau parfait • Design minimaliste",
    "price": 1699,
    "oldPrice": 2000,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908657/486_kkyrvs.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 487,
    "name": "Aoc Ecran Gaming C27G2X Moniteur de jeu incurvé de 27 pouce de 165 Hz",
    "description": "Incurvé 27\" immersion • 165Hz fluidité gaming • Design ergonomique • Performance AOC • Gaming professionnel",
    "price": 2650,
    "oldPrice": 7132,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908658/487_t1m3g5.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6
  },
  {
    "id": 488,
    "name": "Hp Moniteur PC 20 pouces LED à cristaux LA2006X (VGA-DisplayPort-DVI-USB) - Remis à Neuf",
    "description": "20 pouces LED professionnel • VGA DisplayPort DVI USB • Remis à neuf garanti • Bureau économique • Connectivité complète",
    "price": 899,
    "oldPrice": 1200,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908659/488_eiilvh.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 489,
    "name": "Lenovo Moniteur Écran ThinkVision S22i-30 21.5'' (63FCKATBEU)",
    "description": "ThinkVision 21.5 pouces • Qualité professionnelle Lenovo • Design sobre efficace • Productivité optimale • 21.5 pouces bureau",
    "price": 1450,
    "oldPrice": 1700,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908665/489_nhlcpm.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 490,
    "name": "XIAOMI Moniteur Ecran A24i (ELA5444EU)",
    "description": "24 pouces Xiaomi • Résolution Full HD • Design minimaliste • Prix accessible • 24 pouces polyvalent",
    "price": 1250,
    "oldPrice": 1600,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908666/490_ngyydf.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2
  },
  {
    "id": 491,
    "name": "Aoc C27G2Z - Moniteur Gaming Incurvé 27\" 240Hz 0.5ms Technologie FreeSync Premium",
    "description": "Incurvé 27\" 240Hz • 0.5ms temps réponse • FreeSync Premium gaming • Performance extrême • Gaming compétitif",
    "price": 2730,
    "oldPrice": 4400,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908671/491_vo7ipr.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7
  },
  {
    "id": 492,
    "name": "DELL Moniteur E1916 HV- Garantie 12 Mois - Noir",
    "description": "Dell professionnel 19\" • Garantie 12 mois • Design sobre fiable • Bureau standard • 19 pouces compact",
    "price": 1299,
    "oldPrice": 2700,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908672/492_izfiem.jpg"
    ],
    "category": "Électronique",
    "rating": 4.1
  },
  {
    "id": 493,
    "name": "ECRQN TACTILE ALL IN ONE ANDROID Viewsonic VSD242 est un moniteur Smart Display 24\" -GARANTIE 6 MOIS - REMIS A NEUF",
    "description": "Écran tactile Android • All-in-One 24 pouces • Smart Display intelligent • Remis à neuf garantie 6 mois • 24 pouces interactif",
    "price": 2699,
    "oldPrice": 3999,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908676/493_exdrsk.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3
  },
  {
    "id": 494,
    "name": "Samsung Moniteur gaming 4K Odyssey OLED G8 G81SF 32 pouces",
    "description": "OLED 4K 32\" gaming • Couleurs infinies contrastes • Odyssey performance ultime • Gaming professionnel • 32 pouces immersif",
    "price": 19350,
    "oldPrice": 0,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908677/494_jls7fb.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 495,
    "name": "North Bayou Support Moniteur 24\" 27\" Moniteur 17\" jusqu'a 30\" Support Moniteur PC Support Ecran LCD Bureau, Ressort à gaz",
    "description": "Support 17\" jusqu'à 30\" • Ressort à gaz ajustable • Ergonomie bureau optimale • Installation facile • Support universel",
    "price": 450,
    "oldPrice": 650,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769933405/495_g3zzky.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 496,
    "name": "Moniteur 27\" pouces Xiaomi IPS Full HD 100Hz (Moniteur de 27 pouces avec résolution FHD) A27i (Ecran PC 27\")",
    "description": "27 pouces IPS 100Hz • Full HD résolution • Écran PC polyvalent • Design élégant • 27 pouces productivité",
    "price": 1899,
    "oldPrice": 2600,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769908682/496_peocwv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 497,
    "name": "Hp Moniteur LED rétroéclairé ProDisplay P201, 20 pouces - Remis a Neuf",
    "description": "LED rétroéclairé 20\" • Professionnel HP • Remis à neuf garanti • Bureau économique • 20 pouces standard",
    "price": 850,
    "oldPrice": 1499,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769932722/497_tvvw9u.jpg"
    ],
    "category": "Électronique",
    "rating": 4
  },
  {
    "id": 498,
    "name": "XIAOMI Moniteur pour PC 23.8\" Full HD (HDMI+VGA)",
    "description": "23.8 pouces HDMI VGA • Full HD 1920×1080 • Connectivité double • Compact efficace • Design moderne",
    "price": 1699,
    "oldPrice": 2100,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769907026/498_u4zhwb.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4
  },
  {
    "id": 499,
    "name": "Samsung Moniteur Gaming incurvé 27\" Série 3 (LS27C360EAMXZN)",
    "description": "Incurvé 27\" Série 3 • Gaming immersion • Design Samsung élégant • Fluidité visuelle • 27 pouces gaming",
    "price": 2200,
    "oldPrice": 3300,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769906974/499_hbqzht.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5
  },
  {
    "id": 500,
    "name": "Samsung Moniteur Gaming 49'' OLED 244HZ G8",
    "description": "OLED 49\" ultra-wide • 244Hz gaming extrême • G8 performance ultime • Immersion totale professionnelle • 49 pouces écran géant",
    "price": 19999,
    "oldPrice": 0,
    "stock": 2,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1769933406/500_ewyw9v.jpg"
    ],
    "category": "Électronique",
    "rating": 4.9
  },
  {
    "id": 501,
    "name": "Lenovo ThinkVision S24e-20 - Moniteur FHD 23,8 pouces",
    "description": "ThinkVision qualité professionnelle, Full HD 23.8 pouces, Design sobre efficace, Productivité bureau optimale, Lenovo fiabilité éprouvée",
    "price": 2100,
    "oldPrice": 3100,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031169/501_lebv7h.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 502,
    "name": "Aoc ECRAN Gaming 27G2SP Moniteur de jeu sans cadre 27\", FHD 1920 x 1080, 165 Hz 1 ms",
    "description": "Sans cadre design immersif, FHD 1920x1080 165Hz, 1ms temps réponse ultra-rapide, Gaming compétitif fluide, 27 pouces écran parfait",
    "price": 3100,
    "oldPrice": 5290,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031175/502_erkgom.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 503,
    "name": "Msi Technology Moniteur 25 Pro MP251P – Full HD",
    "description": "Moniteur 25 pouces professionnel, Full HD résolution nette, Performance MSI fiable, Design sobre bureau, 25 pouces taille idéale",
    "price": 1800,
    "oldPrice": 0,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031182/503_ggavko.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 504,
    "name": "Samsung Moniteur Odyssey OLED G9 G91SD DQHD 144 Hz 49 pouces",
    "description": "OLED 49\" ultra-wide gaming, DQHD 144Hz performance extrême, Odyssey technologie premium, Immersion totale professionnelle, 49 pouces écran géant",
    "price": 12570,
    "oldPrice": 17814,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031193/504_ciaata.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 505,
    "name": "Msi Moniteur MAG 274UPF E2 4K",
    "description": "4K Ultra HD résolution, 27 pouces gaming professionnel, Performance MSI gaming, Détails précis éclatants, Design gaming moderne",
    "price": 5600,
    "oldPrice": 10412,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031207/505_yeyiup.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 506,
    "name": "Hp ECRAN Z24nf G2 24 Pouces IPS Moniteur - 1JS07A4 FULL HD",
    "description": "24 pouces IPS professionnel, Full HD 1920x1080, Qualité HP entreprise, Design sobre élégant, Productivité optimale bureau",
    "price": 1350,
    "oldPrice": 1663,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031215/506_erxcrm.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 507,
    "name": "Bras Support écran LCD PC Ordinateur, Moniteur écran LCD Bureau TV",
    "description": "Support universel moniteur LCD, Ergonomie bureau optimale, Installation facile rapide, Ressort à gaz ajustable, Compatible multi-écrans",
    "price": 490,
    "oldPrice": 650,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031221/507_s43few.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 508,
    "name": "DELL Moniteur E2016 HV- Garantie 12 Mois - Noir",
    "description": "Dell professionnel fiable, Garantie 12 mois, Design sobre noir, Bureau standard économique, 20 pouces compact",
    "price": 1599,
    "oldPrice": 3000,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031229/508_b2aqjv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 509,
    "name": "Lenovo Écran PC Moniteur 22\" Full HD ThinkVision S22E-20 (HDMI VGA)",
    "description": "22 pouces Full HD, HDMI VGA connectivité, ThinkVision qualité professionnelle, Design compact bureau, Lenovo fiabilité reconnue",
    "price": 1999,
    "oldPrice": 2200,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031234/509_aq1wdd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 512,
    "name": "North Bayou Support TV Moniteur 24\" 27\" 17\" jusqu'a 30\" Support Moniteur PC Support Ecran LCD Bureau, Ressort à gaz",
    "description": "Support universel 17-30 pouces, Ressort à gaz ergonomique, Installation bureau facile, Rotation réglage complet, Qualité construction robuste",
    "price": 490,
    "oldPrice": 650,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031254/512_lf7jct.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 513,
    "name": "Lenovo Écran PC Moniteur D22e-20 - Garantie 12 Mois - Noir",
    "description": "Lenovo D22e-20 Moniteur, Moniteur bureau économique, Garantie 12 mois, Design noir sobre, 22 pouces compact, Lenovo qualité accessible",
    "price": 1899,
    "oldPrice": 1994,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031261/513_gwgmgh.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 514,
    "name": "DELL Ecran Moniteur 23.8 Full HD SE2422H (SE2422H-3Y)",
    "description": "23.8 pouces Full HD, Garantie 3 ans sécurité, Qualité Dell professionnelle, Design moderne élégant, Bureau productivité optimale",
    "price": 1600,
    "oldPrice": 1899,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031268/514_iaf2ah.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 515,
    "name": "Hp E221C Moniteur 22\" IPS (1920 x 1080)p ,DVI /DisplayPort /VGA/D-SUB /USB Webcam Intégré",
    "description": "22 pouces IPS Full HD, Webcam intégrée visioconférence, DVI DisplayPort VGA USB, Télétravail bureau moderne, HP qualité professionnelle",
    "price": 2699,
    "oldPrice": 3899,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031274/515_u5vrwq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 516,
    "name": "Samsung Moniteur 24 pouces CURVED Full HD serie 2",
    "description": "Incurvé 24 pouces immersion, Full HD qualité Samsung, Design moderne élégant, Confort visuel optimal, Série 2 performance",
    "price": 1799,
    "oldPrice": 2800,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031282/516_akwgeh.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 517,
    "name": "Samsung Écran Moniteur Curved 23.5\" Full HD Série 2",
    "description": "Incurvé 23.5 pouces, Full HD résolution nette, Design Samsung premium, Série 2 technologie, Confort visuel prolongé",
    "price": 1799,
    "oldPrice": 2799,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031293/517_xjuy2n.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 518,
    "name": "Viewsonic Moniteur VA240-H-2 Full HD 75 Hz 24 pouces",
    "description": "Viewsonic VA240-H-2 24\" 75Hz, 24 pouces Full HD, 75Hz fluidité améliorée, Viewsonic qualité fiable, Design sobre professionnel, Prix accessible qualité",
    "price": 1100,
    "oldPrice": 1800,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031298/518_drps9x.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 519,
    "name": "Viewsonic Moniteur 24'' TD2423 tactile Infrarouge",
    "description": "24 pouces écran tactile, Technologie infrarouge précise, Interactivité professionnelle, Viewsonic innovation, Travail collaboratif moderne",
    "price": 4199,
    "oldPrice": 5099,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031304/519_ssxww8.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 520,
    "name": "Msi Moniteur Pro MP245V 100Hz",
    "description": "24 pouces professionnel, 100Hz fluidité optimale, MSI qualité performance, Design sobre bureau, Productivité gaming léger",
    "price": 1100,
    "oldPrice": 1999,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031311/520_mlxuek.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 521,
    "name": "Lenovo S24e-20 - Moniteur FHD 23,8 pouces",
    "description": "ThinkVision qualité professionnelle, Full HD 23.8 pouces, Design sobre efficace, Productivité bureau optimale, Lenovo fiabilité éprouvée",
    "price": 2100,
    "oldPrice": 2299,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031318/521_o6irrt.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 522,
    "name": "Samsung Moniteur Gaming 24\" Odyssey G3 G30D",
    "description": "Gaming 24 pouces Odyssey, G30D performance fluide, Design gaming Samsung, 24 pouces compact gaming, Qualité image optimale",
    "price": 2100,
    "oldPrice": 3700,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031325/522_sptg5a.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 523,
    "name": "Philips Moniteur 27 POUCE 272P4QPJKEB",
    "description": "27 pouces professionnel Philips, Qualité image supérieure, Ergonomie bureau avancée, Design sobre élégant, Productivité maximale",
    "price": 1700,
    "oldPrice": 0,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031333/523_iquce7.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 524,
    "name": "Samsung Moniteur Gaming 27\" Odyssey G3 G30D",
    "description": "Gaming 27 pouces Odyssey, G30D technologie Samsung, Performance fluide gaming, 27 pouces immersion, Design gaming moderne",
    "price": 2599,
    "oldPrice": 4266,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031338/524_vkjk1g.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 525,
    "name": "Msi Moniteur Pro MP251 E2 120Hz",
    "description": "Moniteur professionnel MSI, 120Hz fluidité excellente, 25 pouces taille idéale, Performance bureau gaming, Design sobre efficace",
    "price": 1550,
    "oldPrice": 2499,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031345/525_noakxq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 526,
    "name": "Support Moniteur Ecran LCD Support Ecran PC - Moniteur 21\" Moniteur 24\" Moniteur 27\" Moniteur 17\",,, 10\" jusqu'a 32\"",
    "description": "Support 10-32 pouces universel, Installation facile rapide, Ergonomie bureau optimale, Compatible multi-tailles, Construction solide stable",
    "price": 350,
    "oldPrice": 400,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031351/526_h8r8su.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 527,
    "name": "Asus Moniteur Gaming VP229HF 22''",
    "description": "Gaming 22 pouces Asus, Performance fluide rapide, Design gaming compact, 22 pouces bureau gaming, Qualité Asus reconnue",
    "price": 1800,
    "oldPrice": 2300,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031358/527_ldlxy9.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 528,
    "name": "Asus Moniteur de jeu VA279HG Eye Care 27 pouces",
    "description": "27 pouces Eye Care, Protection vision prolongée, Gaming confort visuel, Asus technologie santé, Design gaming ergonomique",
    "price": 2550,
    "oldPrice": 3200,
    "stock": 7,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031365/528_ewhbhb.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 529,
    "name": "Samsung Moniteur M7 4K Smart 32''",
    "description": "Smart Monitor 32 pouces, 4K Ultra HD résolution, Applications streaming intégrées, Télétravail divertissement, Samsung innovation premium",
    "price": 4800,
    "oldPrice": 6000,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031372/529_hb5guq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 530,
    "name": "Samsung Moniteur GAMME D 27'' 100 Hz",
    "description": "27 pouces Gamme D, 100Hz fluidité optimale, Samsung qualité performance, Design moderne élégant, Bureau gaming polyvalent",
    "price": 2000,
    "oldPrice": 2200,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031378/530_gtgilo.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 531,
    "name": "HYBROK HG24IPS180 Moniteur 24 180HZ 1MS",
    "description": "24 pouces IPS 180Hz, Temps réponse 1ms rapide, Gaming performance élevée, Design HYBROK moderne, Prix accessible gaming",
    "price": 1399,
    "oldPrice": 1650,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031385/531_xmlhsa.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 532,
    "name": "North Bayou Support TV Moniteur 24\" 17\" jusqu'a 27\" Support Moniteur PC Support Ecran LCD Bureau, Ressort à gaz",
    "description": "Support universel 17-27 pouces, Ressort à gaz ergonomique, Installation bureau facile, Rotation réglage complet, Qualité construction robuste",
    "price": 700,
    "oldPrice": 900,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031392/532_ymzdkn.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 533,
    "name": "Aoc 25G4SRE Moniteur 24,5 FAST IPS 300HZ",
    "description": "FAST IPS 24.5 pouces, 300Hz gaming extrême, Temps réponse ultra-rapide, AOC performance compétitive, Gaming professionnel haut niveau",
    "price": 2100,
    "oldPrice": 2499,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031398/533_jdefzx.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 534,
    "name": "Aoc Moniteur de jeu Q27G3S 27\" 2K QHD 170Hz IPS large gamme de couleurs HDR10 1ms",
    "description": "2K QHD 27 pouces, 170Hz IPS performance, Large gamme couleurs HDR10, 1ms temps réponse, Gaming professionnel premium",
    "price": 3100,
    "oldPrice": 6240,
    "stock": 6,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031405/534_qurpt2.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 537,
    "name": "HYBROK Moniteur Gaming FLAME HG27IFL 180Hz 1ms FHD",
    "description": "Gaming 27 pouces FLAME, 180Hz 1ms ultra-rapide, Full HD performance, Design gaming moderne, HYBROK qualité gaming",
    "price": 2650,
    "oldPrice": 2899,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031426/537_oihngp.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 540,
    "name": "Bras Support 2 écran LCD PC Ordinateur, 2 Moniteur écran LCD Bureau TV",
    "description": "Support double moniteur, Installation bureau ergonomique, 2 écrans côte à côte, Productivité maximale, Ajustement flexible complet",
    "price": 880,
    "oldPrice": 1120,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031458/540_gdostk.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 541,
    "name": "Support Moniteur pour trois écrans LCD",
    "description": "Support triple moniteur, Configuration multi-écrans professionnelle, Productivité maximale bureau, Installation stable robuste, Trading design professionnel",
    "price": 3790,
    "oldPrice": 3900,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770031455/541_zmjkkz.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 542,
    "name": "MagSafe Power Bank for iPhone, Watch, AirPods with holder 22.5W PD & 15W Magsafe & 10000mAh J",
    "description": "Chargement iPhone Watch AirPods, 15W MagSafe sans fil, 22.5W PD charge rapide, Support intégré pratique, 10000mAh autonomie longue",
    "price": 259,
    "oldPrice": 0,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770039073/542_uzfi34.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 543,
    "name": "Nokia Téléphone 2720 Flip 4G Double Carte SIM Gris J",
    "description": "Téléphone à clapet 4G, Double carte SIM pratique, Design rétro moderne gris, Simplicité utilisation facile, Nokia qualité robuste",
    "price": 399,
    "oldPrice": 998,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037812/543_o1snoe.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 545,
    "name": "Samsung Smartphone Galaxy S24FE Dual Sim 6,7\" Ram 8GB stockage 256 GB-Graphite J",
    "description": "Écran 6.7 pouces immersif, Ram 8GB stockage 256GB, Dual SIM polyvalent, Graphite couleur élégante, Performance Samsung premium",
    "price": 5999,
    "oldPrice": 8999,
    "stock": 5,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037819/545_lsg1hd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 546,
    "name": "Apple iPhone 17 Pro Max / 512GB / Bleu Intense / Smartphone 5G-LTE IP68 Dual SIM - A19 Pro Hexa-Core - Écran Super Retina XDR OLED 6.9-inch 1320 x 2868 - NFC/Bluetooth 6 - iOS 26 Neuf J",
    "description": "Écran OLED 6.9 pouces géant, 512GB stockage massif, A19 Pro performance ultime, 5G-LTE IP68 étanche, iOS 26 bleu intense",
    "price": 2715,
    "oldPrice": 25499,
    "stock": 3,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037823/546_qswikz.jpg"
    ],
    "category": "Électronique",
    "rating": "4.9"
  },
  {
    "id": 547,
    "name": "Case Coque de protection pour téléphone avec lentille coulissante et support, compatible avec Samsung Galaxy A16 5G J",
    "description": "Protection lentille coulissante, Support intégré pratique, Compatible A16 5G, Design moderne fonctionnel, Protection complète élégante",
    "price": 149,
    "oldPrice": 0,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037831/547_x9aais.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 548,
    "name": "Chargeur de voiture 4 en 1,Câble rétractable intégré,Chargement rapide et pratique,Compatible avec iPhone et Type-C J",
    "description": "Câble rétractable intégré, Chargement rapide efficace, Compatible iPhone Type-C, 4 ports simultanés, Pratique voiture voyage",
    "price": 169,
    "oldPrice": 199,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037833/548_tinaui.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 549,
    "name": "Brassard Bras bande pour Sport, Sac de bras universel Impermeable, étui de course pour téléphone, Grande Capacité, Phone Holder J",
    "description": "Bras bande imperméable, Grande capacité rangement, Course sport fitness, Universel multi-téléphones, Pratique clés écouteurs",
    "price": 99,
    "oldPrice": 185,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037840/549_owxhpp.jpg"
    ],
    "category": "Sport",
    "rating": "4.5"
  },
  {
    "id": 550,
    "name": "Konfulon Power Bank pour iPhone Charger, A6Q Power bank 10000Mah Pd20W Qc22.5W Fast J",
    "description": "10000mAh autonomie longue, PD20W QC22.5W rapide, Chargement iPhone ultra-rapide, Compact portable léger, Qualité Konfulon fiable",
    "price": 199,
    "oldPrice": 339,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037845/550_u2nvma.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 551,
    "name": "Alcatel T26 Téléphone Filaire Fixe LED Noir",
    "description": "Téléphone filaire LED, Design noir sobre, Simplicité utilisation, Maison bureau économique, Alcatel qualité reconnue",
    "price": 239,
    "oldPrice": 290,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037849/551_fxm2ks.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 552,
    "name": "Lecteur de Cartes Mémoire SD 5-en-1 Haute Vitesse – USB 3.0, Type-C & OTG – Adaptateur Plug & Play pour Smartphone, PC & Tablette",
    "description": "USB 3.0 Type-C OTG, Haute vitesse transfert, Plug & Play simple, Compatible smartphone PC tablette, 5-en-1 universel pratique",
    "price": 89,
    "oldPrice": 119,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037855/552_jwia8s.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 553,
    "name": "Autocollants d'amélioration du signal de téléphone portable antenne mobile SP-11Pro",
    "description": "Amélioration signal mobile, Antenne téléphone portable, Installation simple collage, Performance réseau améliorée, Compact discret efficace",
    "price": 104,
    "oldPrice": 189,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037857/553_wq85nr.jpg"
    ],
    "category": "Électronique",
    "rating": "4.3"
  },
  {
    "id": 554,
    "name": "Support téléphone en bois",
    "description": "Design naturel bois, Support stable élégant, Bureau maison déco, Écologique esthétique, Universel multi-téléphones",
    "price": 52,
    "oldPrice": 0,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037863/554_tro3ng.jpg"
    ],
    "category": "Maison",
    "rating": "4.5"
  },
  {
    "id": 555,
    "name": "Mobile DIZOPRO K300 Téléphone portable avec grand écran et grandes touches pour une facilité d'utilisation",
    "description": "Grand écran grandes touches, Facilité utilisation seniors, Téléphone portable simple, Design ergonomique pratique, Lisibilité excellente",
    "price": 199,
    "oldPrice": 299,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037868/555_s1p5v5.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 556,
    "name": "Support magnétique de téléphone sous vide pliable J",
    "description": "Fixation ventouse puissante, Magnétique compatible MagSafe, Pliable compact transport, Voiture bureau polyvalent, Installation facile rapide",
    "price": 79,
    "oldPrice": 199,
    "stock": 26,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037870/556_xg9sc4.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 557,
    "name": "Universal Octopus Mini Tripod Supports Stand Spong For Phones Smartphone / Cameras",
    "description": "Support flexible universel, Pour téléphones caméras, Pieds flexibles adaptables, Compact portable léger, Android iOS compatible",
    "price": 49,
    "oldPrice": 0,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037878/557_f6ta5b.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 558,
    "name": "Refroidisseur de Téléphone avec Affichage de Température et Câble Type-C",
    "description": "Affichage température temps réel, Câble Type-C intégré, Dissipation chaleur gaming, Performance optimale prolongée, Compact portable efficace",
    "price": 159,
    "oldPrice": 190,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037881/558_htbm88.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 559,
    "name": "Stylet universel pour écran tactile, 2en1, pour tablette, iPad, Mobile, Android IOS",
    "description": "Universel tablette iPad mobile, Android iOS compatible, Précision écriture dessin, 2-en-1 double embout, Design élégant fonctionnel",
    "price": 165,
    "oldPrice": 250,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037888/559_riuing.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 560,
    "name": "Tripod Support en aluminium Pour telephone trépied d'appareil photo léger portatif - Pour Android et IOS, Samsung / Galaxy / iPhone / HTC / Huawei / Oppo",
    "description": "Aluminium léger robuste, Portable compact voyage, Compatible Android iOS Samsung iPhone, Photographie vidéo stable, Hauteur ajustable pratique",
    "price": 72,
    "oldPrice": 90,
    "stock": 35,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037892/560_krsn9t.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 561,
    "name": "KIT de tournevis 115 en 1 pour lunettes, PC, ordinateur portable, téléphone portable, montre numérique",
    "description": "115 pièces complet, Lunettes PC téléphone montre, Réparation précision professionnelle, Boîtier rangement organisé, Qualité outils durable",
    "price": 125,
    "oldPrice": 199,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037897/561_wut3wn.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 562,
    "name": "Batterie de secours magnétique en alliage de 10 000 mAh, chargeur rapide sans fil pour iPhone 15 14 13 12 10",
    "description": "10000mAh autonomie longue, Chargeur sans fil magnétique, Compatible iPhone 15 14 13 12, Design alliage premium, Charge rapide efficace",
    "price": 399,
    "oldPrice": 0,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037902/562_azbv7n.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 563,
    "name": "Support Téléphone Magnétique Ventouse à Vide - Fixation Ultra Puissante Tableau Bord Miroir Salle Sport - Rotation 360 Compatible MagSafe iPhone Samsung J",
    "description": "Ventouse ultra puissante, Magnétique compatible MagSafe, Rotation 360° flexible, Tableau bord miroir sport, iPhone Samsung compatible",
    "price": 89,
    "oldPrice": 125,
    "stock": 27,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037907/563_z3cu8h.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 564,
    "name": "Haut-parleur Bluetooth portable avec lumière, Chargeur de téléphone sans fil, alarme intelligente",
    "description": "Bluetooth portable lumière, Chargeur téléphone sans fil, Alarme intelligente réveil, Design multifonction moderne, Son qualité puissant",
    "price": 155,
    "oldPrice": 299,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037912/564_f5tqvt.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 565,
    "name": "Mini Scalable Desktop Telescopic Tripod Support Phone Stand Holder - Black",
    "description": "Support bureau télescopique, Rétractable compact rangement, Desktop stable pratique, Noir design sobre, Universel multi-appareils",
    "price": 79,
    "oldPrice": 0,
    "stock": 33,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037917/565_twyfkc.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 566,
    "name": "Brassard Bras bande pour Sport, Impermeable, Grande Capacité, étui de course universel pour téléphone, Sac de Rangement clés, Phone Holder J",
    "description": "Haute qualité imperméable, Rangement clés écouteurs, Course fitness sport, Universel smartphone, iPhone Samsung Oppo compatible",
    "price": 125,
    "oldPrice": 185,
    "stock": 21,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037925/566_vi8sdb.jpg"
    ],
    "category": "Sport",
    "rating": "4.6"
  },
  {
    "id": 567,
    "name": "coque de luxe new desing doudoun pochette pour iphone 14 PRO MAX",
    "description": "Design doudoune nouveau, Pochette luxe élégante, Protection complète style, iPhone 14 Pro Max, Mode fonctionnalité",
    "price": 79,
    "oldPrice": 99,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037930/567_wsxum6.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 568,
    "name": "Brassard Sport Haute Qualite Standart, Impermeable, Rangement clés, Ecouteurs - Pour Smartphone Telephone iPhone, Samsung Galaxy, Oppo, HTC, Huawei J",
    "description": "Imperméable protection complète, Rangement clés écouteurs, Course fitness universel, iPhone Samsung Oppo Huawei, Design confortable ajustable",
    "price": 89,
    "oldPrice": 129,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037934/568_zzygpp.jpg"
    ],
    "category": "Sport",
    "rating": "4.5"
  },
  {
    "id": 569,
    "name": "Original Chargeur 35W pour iPhone 15/16/17 Pro Max, adaptateur secteur USB-C + câble USB-C vers USB-C J",
    "description": "Adaptateur USB-C 35W, Câble USB-C inclus, Compatible iPhone 15 16 17, Charge rapide officielle, Qualité Apple garantie",
    "price": 179,
    "oldPrice": 199,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037939/569_yp3ttr.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 570,
    "name": "General Écouteurs sans fil Bluetooth P9 casque écouteurs pour téléphone",
    "description": "Sans fil Bluetooth, Casque téléphone universel, Son qualité stéréo, Design moderne léger, Autonomie longue durée",
    "price": 99,
    "oldPrice": 0,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037946/570_inur0x.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 571,
    "name": "Montre connectée Smart Watch Montres Intelligentes cardiaque téléphone d20 J",
    "description": "Moniteur cardiaque santé, Téléphone appels messages, Design moderne élégant, Fonctions fitness sport, Autonomie longue batterie",
    "price": 99,
    "oldPrice": 129,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037950/571_cv2vr2.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 572,
    "name": "Support de bureau pliable pour téléphone et tablette – stable et ajustable J",
    "description": "Pliable compact portable, Stable ajustable angles, Bureau maison travail, Compatible téléphone tablette, Design moderne robuste",
    "price": 59,
    "oldPrice": 79,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770039230/572_drwzr0.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 573,
    "name": "Pochette pour iPhone 12 PRO MAX J",
    "description": "Protection élégante style, Compatible iPhone 12 Pro Max, Design pochette pratique, Qualité matériaux premium, Rangement cartes fonctionnel",
    "price": 150,
    "oldPrice": 180,
    "stock": 19,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037958/573_qrbhbv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 574,
    "name": "Trépied perche à selfie avec lumière pour téléphone portable, télécommande Bluetooth sans fil J",
    "description": "Lumière intégrée photos, Télécommande Bluetooth sans fil, Perche selfie extensible, Trépied stable photos, Vlogging TikTok parfait",
    "price": 75,
    "oldPrice": 190,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037966/574_d16hly.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 575,
    "name": "Support de téléphone portable pour tableau de bord et pare-brise de voiture J",
    "description": "Fixation tableau bord solide, Pare-brise ventouse puissante, Rotation 360° flexible, Compatible tous smartphones, Installation facile rapide",
    "price": 125,
    "oldPrice": 199,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037972/575_isovbv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 576,
    "name": "Telefunken téléphone fixe,GSM,made german, pour maison, bureau J",
    "description": "Made German qualité, GSM fixe maison bureau, Design sobre fiable, Telefunken marque reconnue, Simplicité utilisation",
    "price": 325,
    "oldPrice": 450,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037974/576_bs1wrz.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 577,
    "name": "Generic Xim Selfie Stick Tripod 3-en-1 170 cm Extension Bluetooth Remote – Support Smartphone pour Selfies, Vlogging et Photos J",
    "description": "Extension 170cm hauteur, Bluetooth télécommande sans fil, 3-en-1 selfie vlog photos, Support smartphone stable, Compact portable voyage",
    "price": 159,
    "oldPrice": 0,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037975/577_gdieph.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 578,
    "name": "Motorola Téléphone sans fil Numérique E201 + avec blocage d'appel J",
    "description": "Téléphone numérique sans fil, Blocage appel indésirable, Design moderne Motorola, Maison bureau pratique, Qualité son excellente",
    "price": 325,
    "oldPrice": 399,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037987/578_poizsp.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 579,
    "name": "Chargeur de charge rapide USB de type C pour iPhone,accessoires de câble de charge PD,40W,iPhone 16 15 14 13 12 11 Pro Max Plus J",
    "description": "Charge rapide PD 40W, Compatible iPhone 16 15 14 13, Câble Type-C inclus, Chargement ultra-rapide, Accessoires iPhone essentiels",
    "price": 89,
    "oldPrice": 200,
    "stock": 29,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037992/579_pwzamt.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 580,
    "name": "Support 360° de montage Long Neck One Touch pour tous les smartphones Camion J",
    "description": "Montage One Touch facile, Long Neck flexible, Rotation 360° complète, Compatible tous smartphones, Camion voiture stable",
    "price": 99,
    "oldPrice": 299,
    "stock": 18,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037994/580_vq9jrp.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 581,
    "name": "Plustar Chargeur Compatible Avec Tous Les Smartphones - Type C - 18 W -Charge rapide 3.0 J",
    "description": "Compatible tous smartphones, Type-C charge rapide 3.0, 18W puissance optimale, Compact portable léger, Qualité Plustar fiable",
    "price": 89,
    "oldPrice": 129,
    "stock": 26,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770037996/581_eikpb0.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 582,
    "name": "Perche Selfie Tripied Bluetooth Photo Selfie Rotation 360° Tous Téléphone Mini trépied pour smartphone, perche à selfie, Bluetooth, télécommande sans fil, support de téléphone, support extérieur, spectacle TikTok J",
    "description": "Rotation 360° complète, Bluetooth télécommande sans fil, Mini trépied stable, Support extérieur TikTok, Compact portable selfie",
    "price": 99,
    "oldPrice": 0,
    "stock": 31,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038006/582_ebuapd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 583,
    "name": "Coque de Téléphone Pour Samsung Galaxy Z Flip 6 + Film Protecteur d'Ecran, Etui de Portable Antichoc J",
    "description": "Protection complète antichoc, Film protecteur écran inclus, Compatible Z Flip 6, Design élégant fonctionnel, Étui portable Samsung",
    "price": 150,
    "oldPrice": 0,
    "stock": 13,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038008/583_ygd22q.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 584,
    "name": "Trépied 3366 et Tripod Support Flexible 2in1 - Noir J",
    "description": "Support flexible universel, 2-en-1 tripod perche, Design noir sobre, Compact portable léger, Smartphone caméra compatible",
    "price": 185,
    "oldPrice": 199,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038016/584_yck5vq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 585,
    "name": "Lecteur de carte 4en1 TF SD pour iPhone avec adaptateur de charge iOS, câble OTG, adaptateur d'appareil photo, lecteur de carte mémoire, convertisseur de carte Micro SD J",
    "description": "TF SD adaptateur iPhone, Câble OTG charge iOS, Convertisseur carte Micro SD, Lightning compatible Apple, 4-en-1 multifonction pratique",
    "price": 99,
    "oldPrice": 129,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038019/585_iubbuh.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 586,
    "name": "Apple iPhone XR, 6.1\", 64Go + 3Gb Stockage - Rouge - Remis à Neuf J",
    "description": "Écran 6.1 pouces immersif, 64GB + 3GB stockage, Rouge couleur éclatante, Remis à neuf garanti, Qualité Apple performance",
    "price": 4999,
    "oldPrice": 0,
    "stock": 4,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038026/586_w0hmrm.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 587,
    "name": "ZTE Smartphone Blade V40 4G 128 GB /Ram 6 Go Double Sim 48Mp 6,67\" 22.5W 5000Mah J",
    "description": "Écran 6.67 pouces grand, 128GB stockage 6GB RAM, Double SIM 48MP caméra, 5000mAh batterie longue, 22.5W charge rapide",
    "price": 1299,
    "oldPrice": 1599,
    "stock": 9,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038032/587_z7h636.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 588,
    "name": "Baseus Chargeur 65W Gan3 Pro Desktop Fast Charger J",
    "description": "65W Desktop chargeur rapide, GaN3 technologie avancée, Chargement multiple appareils, Compact puissant efficace, Baseus qualité premium",
    "price": 655,
    "oldPrice": 1296,
    "stock": 10,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038034/588_iglclf.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 589,
    "name": "ÉCRAN DE TÉLÉPHONE MOBILE 3D PLUS GRAND SUPPORT PORTATIF PLIANT MAGNIFICATEUR",
    "description": "Agrandisseur écran portable, Support pliable compact, 3D effet immersion, Magnification visuelle améliorée, Films vidéos confort",
    "price": 85,
    "oldPrice": 189,
    "stock": 27,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038043/589_rx9bsl.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 590,
    "name": "Adaptateur micro SD TF Lecteur de cartes Flash Accessoires pour iPhone Lightning Adaptador Appareil photo Mémoire Compact Photo Photographie Viewer pour Apple 13 12 11 Pro Max X Xs Xr 8 7 6 Plus J",
    "description": "Lecteur cartes TF SD, Lightning adaptateur Apple, Appareil photo mémoire, Compatible iPhone 13 12 11 Pro, Viewer photographie facile",
    "price": 125,
    "oldPrice": 199,
    "stock": 20,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038044/590_vzs1ze.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 591,
    "name": "Objectif de Lentille Caméra pour Téléphone Portable Fisheye Grand Angle Macro Lens Clip Mallalah pour iPhone Samsung Galaxy Note J",
    "description": "Fisheye grand angle macro, Clip universel installation, Compatible iPhone Samsung, Photographie créative mobile, 3-en-1 lentilles polyvalentes",
    "price": 99,
    "oldPrice": 299,
    "stock": 16,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038056/591_tcumhz.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 592,
    "name": "Petit Power Bank de iPhone Portable Compact USB avec Porte-Clés J",
    "description": "Compact portable USB, Porte-clés pratique secours, Batterie urgence déplacement, iPhone compatible, Design mini ultra-léger",
    "price": 89,
    "oldPrice": 110,
    "stock": 34,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038059/592_ymairv.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 593,
    "name": "Écouteurs filaires de type C pour iPhone 15 J",
    "description": "Type-C compatible iPhone 15, Filaires son qualité, Design léger confortable, Écouteurs essentiels, Prix accessible fonctionnel",
    "price": 89,
    "oldPrice": 149,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038065/593_j9nbxd.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 594,
    "name": "Ipega Manette sans fil pour téléphone contrôleurs de jeu pour iOS / Android / PC / PS3 / Switch Bluetooth avec système de vibration",
    "description": "Compatible iOS Android PC PS3 Switch, Système vibration immersion, Bluetooth sans fil pratique, Gaming mobile console, Design ergonomique confortable",
    "price": 325,
    "oldPrice": 499,
    "stock": 12,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038069/594_u9p2ci.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 595,
    "name": "Pack de jeu mobile 5 en 1 convertisseur Bluetooth plus clavier, souris, Tapis et Support de téléphone pour smartphone Clavier et souris de jeu 5 en 1 Combode jeu Clavier filaire rétroéclairé par LED pour jeu sur tablette mobile Compatible Android & iOS M8",
    "description": "Convertisseur Bluetooth complet, Clavier souris tapis support, Compatible Android iOS, LED rétroéclairé gaming, 5-en-1 kit complet",
    "price": 389,
    "oldPrice": 499,
    "stock": 8,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038074/595_ypxzk2.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 596,
    "name": "Nokia Téléphone Portable 150 Double Carte SIM J",
    "description": "Téléphone portable simple, Double SIM pratique, Nokia robustesse légendaire, Design compact léger, Batterie longue durée",
    "price": 320,
    "oldPrice": 599,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038076/596_ns1vuj.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 597,
    "name": "Refroidisseur d'air pour téléphone portable MEMO DL05-, ventilateur de refroidissement, jeu PUBG, dissipateur de chaleur pour smartphone, tablette J",
    "description": "Ventilateur refroidissement gaming, PUBG jeu performance, Dissipateur chaleur smartphone tablette, Portable compact léger, Gaming mobile optimisé",
    "price": 199,
    "oldPrice": 299,
    "stock": 14,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038084/597_dbugwy.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 598,
    "name": "Nokia 150 4G Double SIM",
    "description": "4G connectivité moderne, Double SIM polyvalent, Nokia qualité robuste, Design simple efficace, Batterie autonomie longue",
    "price": 220,
    "oldPrice": 270,
    "stock": 17,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038089/598_uqjhgq.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 599,
    "name": "Haut-Parleur Bluetooth Magnétique RGB",
    "description": "Magnétique portable extérieur, Mini stéréo sans fil, Lumière couleur RGB ambiance, Support téléphone intégré, Compatible iOS Android",
    "price": 110,
    "oldPrice": 170,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038092/599_bbehw0.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 600,
    "name": "Accent Tank P18 2-en-1 PowerBank",
    "description": "Téléphone portable PowerBank, 5000mAh batterie massive, Écran 1.8 caméra radio FM, Torche LED pratique, GSM résistant robuste",
    "price": 249,
    "oldPrice": 400,
    "stock": 11,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770038094/600_xfk2j7.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 2101,
    "name": "Parfum Collection Prestige SORBONNE",
    "description": "Parfum de luxe de la Collection Prestige Sorbonne, fabrication française haut de gamme de Paris (66 avenue des Champs-Élysées). Extrait de Parfum avec une concentration de 70%, volume 50 ml. Parfum authentique avec une composition riche alliant des notes boisées et florales avec des touches de géraniol et limonène. Design luxueux et idéal comme cadeau d'exception ou pour ceux qui recherchent un parfum exceptionnel à longue tenue.",
    "price": 450,
    "oldPrice": 550,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770325677/1_njs0kz.jpg"
    ],
    "category": "Hommes",
    "rating": "4.9"
  },
  {
    "id": 2102,
    "name": "Parfum Collection Prestige SINAI",
    "description": "Parfum de luxe de la Collection Prestige Sinai, fabrication française haut de gamme de Paris (66 avenue des Champs-Élysées). Extrait de Parfum avec une concentration de 70%, volume 50 ml. Parfum authentique avec une composition riche alliant des notes boisées et florales avec des touches de géraniol et limonène. Design luxueux et idéal comme cadeau d'exception ou pour ceux qui recherchent un parfum exceptionnel à longue tenue.",
    "price": 450,
    "oldPrice": 550,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770326439/1_xisqyj.jpg"
    ],
    "category": "Hommes",
    "rating": "4.9"
  },
  {
    "id": 2103,
    "name": "Parfum Collection Prestige SULTAN",
    "description": "Parfum de luxe de la Collection Prestige Sultan, fabrication française haut de gamme de Paris (66 avenue des Champs-Élysées). Extrait de Parfum avec une concentration de 70%, volume 50 ml. Parfum authentique avec une composition riche alliant des notes boisées et florales avec des touches de géraniol et limonène. Design luxueux et idéal comme cadeau d'exception ou pour ceux qui recherchent un parfum exceptionnel à longue tenue.",
    "price": 450,
    "oldPrice": 550,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770326915/1_true2b.jpg"
    ],
    "category": "Hommes",
    "rating": "4.9"
  },
  {
    "id": 2104,
    "name": "Parfum Collection Prestige IMPERIAL",
    "description": "Parfum de luxe de la Collection Prestige Imperial, fabrication française haut de gamme de Paris (66 avenue des Champs-Élysées). Extrait de Parfum avec une concentration de 70%, volume 50 ml. Parfum authentique avec une composition riche alliant des notes boisées et florales avec des touches de géraniol et limonène. Design luxueux et idéal comme cadeau d'exception ou pour ceux qui recherchent un parfum exceptionnel à longue tenue.",
    "price": 450,
    "oldPrice": 550,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770329120/1_l4rkma.jpg"
    ],
    "category": "Hommes",
    "rating": "4.9"
  },
  {
    "id": 2105,
    "name": "Parfum Collection Prestige SANTAL",
    "description": "Parfum de luxe de la Collection Prestige Santal, fabrication française haut de gamme de Paris (66 avenue des Champs-Élysées). Extrait de Parfum avec une concentration de 70%, volume 50 ml. Parfum authentique avec une composition riche alliant des notes boisées et florales avec des touches de géraniol et limonène. Design luxueux et idéal comme cadeau d'exception ou pour ceux qui recherchent un parfum exceptionnel à longue tenue.",
    "price": 450,
    "oldPrice": 550,
    "stock": 15,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770329269/1_mn9eqo.jpg"
    ],
    "category": "Hommes",
    "rating": "4.9"
  },
  {
    "id": 2201,
    "name": "Baskets New Balance Fashion - Blanc et Beige, Semelle Air Cushion",
    "description": "Baskets sportives New Balance au design élégant blanc cassé avec détails beige/taupe\nLogo emblématique \"N\" sur les côtés\nSemelle épaisse avec technologie Air Cushion pour un confort optimal\nParfaites pour un usage quotidien ou sportif\nAllient style moderne et performance",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770384926/1_kydd3g.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2202,
    "name": "Baskets New Balance Fashion - Noir et Blanc, Semelle Air Cushion",
    "description": "Baskets sportives New Balance au design moderne noir avec logo \"N\" blanc contrasté\nLiserés blancs élégants\nSemelle épaisse avec technologie Air Cushion pour un amorti exceptionnel\nStyle urbain et dynamique\nParfaites pour un look streetwear ou sportif",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770384951/1_uboe6e.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2203,
    "name": "Baskets New Balance Fashion - Gris et Blanc, Semelle Air Cushion",
    "description": "Baskets sportives New Balance au coloris gris clair et blanc avec touches noires élégantes\nLogo \"N\" emblématique gris foncé sur les côtés\nSemelle épaisse avec technologie Air Cushion pour un confort optimal toute la journée\nDesign épuré et polyvalent\nParfait pour le sport ou le quotidien",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770384978/1_uuesck.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2204,
    "name": "Baskets Terrex Sport - Gris Clair, Semelle Renforcée Running",
    "description": "Baskets sportives Terrex au design technique gris clair avec semelle blanche épaisse et renforcée\nChaussures de running avec mesh respirant et structure ergonomique\nMaximum de confort et d'amorti\nIdéales pour la course, la marche ou le sport quotidien\nSystème de stabilité avancé",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770387432/1_uhngfu.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2205,
    "name": "Baskets Terrex Sport - Noir et Blanc, Semelle Renforcée Running",
    "description": "Baskets sportives Terrex au design élégant noir total avec semelle blanche contrastée et épaisse\nChaussures de running haute performance avec mesh respirant\nStructure ergonomique pour un confort optimal\nSystème d'amorti avancé et grip renforcé\nParfaites pour la course, le fitness ou l'usage quotidien",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770387458/2_dvm4ar.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2206,
    "name": "Baskets Terrex Sport - Bleu Marine et Orange, Semelle Renforcée Running",
    "description": "Baskets sportives Terrex au design dynamique bleu marine avec bandes orange vif contrastées\nChaussures de running avec mesh respirant\nSemelle blanche épaisse pour un amorti exceptionnel\nStyle énergique et moderne\nParfaites pour la course, le fitness ou le sport quotidien avec grip et stabilité renforcés",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770387493/3_n1xbtl.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2207,
    "name": "Baskets New Balance Chunky - Noir et Gris, Semelle Épaisse Dad Shoes",
    "description": "Baskets New Balance style chunky au design tendance noir avec swoosh gris argenté\nLogo \"N\" blanc emblématique\nSemelle épaisse blanche type \"dad shoes\" pour un confort maximal\nLook streetwear moderne avec mesh respirant et structure ergonomique\nParfaites pour un style urbain décontracté",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770388599/1_l2jq57.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2208,
    "name": "Baskets New Balance Chunky - Gris Clair et Blanc, Semelle Épaisse Dad Shoes",
    "description": "Baskets New Balance style chunky au design épuré gris clair et blanc total\nLogo \"N\" ton sur ton discret\nSemelle épaisse sculptée type \"dad shoes\" pour un confort exceptionnel\nStyle rétro-moderne avec mesh et daim synthétique respirant\nParfaites pour un look casual chic et tendance",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770388626/1_v9jyc1.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2209,
    "name": "Baskets New Balance Chunky - Bleu Marine et Blanc, Semelle Épaisse Dad Shoes",
    "description": "Baskets New Balance style chunky au design classique bleu marine avec swoosh gris\nLogo \"N\" blanc contrasté\nSemelle épaisse blanche sculptée type \"dad shoes\" pour un amorti maximal\nLook sportif élégant avec mesh respirant et construction robuste\nParfaites pour le quotidien avec style et confort",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770388660/1_fapfx9.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2210,
    "name": "Baskets New Balance 530 - Blanc Gris et Noir, Dad Shoes Rétro",
    "description": "Baskets New Balance 530 au design rétro blanc avec détails gris bleuté et touches noires\nLogo \"N\" emblématique\nSemelle sculptée pour un confort optimal style années 2000\nMesh et cuir synthétique respirant\nParfaites pour un look streetwear vintage et tendance",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770390105/1_bbsamj.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2211,
    "name": "Baskets New Balance Chunky - Bleu Ciel et Blanc, Dad Shoes Tendance",
    "description": "Baskets New Balance style chunky au design fresh bleu ciel pastel avec détails bleu marine et blanc\nLogo \"N\" oversize\nSemelle épaisse sculptée pour un look Y2K ultra tendance\nConfort exceptionnel avec mesh respirant et matériaux mixtes premium\nParfaites pour un style streetwear moderne et féminin",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770390133/1_fgp7ol.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2212,
    "name": "Baskets New Balance Chunky - Noir et Blanc, Dad Shoes Classique",
    "description": "Baskets New Balance style chunky au design intemporel noir total avec logo \"N\" blanc contrasté\nSemelle blanche épaisse sculptée\nLook monochrome élégant type \"dad shoes\" pour un confort maximal\nStyle urbain polyvalent avec mesh et daim synthétique\nParfaites pour toutes occasions casual ou sportif",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770390155/1_hxcf5t.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2213,
    "name": "Baskets New Balance 530 - Noir et Gris, Semelle Blanche Rétro",
    "description": "Baskets New Balance 530 au design rétro noir avec logo \"N\" gris métallisé\nDétails gris anthracite\nSemelle blanche épaisse pour un confort optimal\nLook années 90/2000 authentique avec badge \"530\" sur le talon\nMesh et daim synthétique respirant",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770392194/1_n0veuo.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2214,
    "name": "Baskets New Balance 530 - Vert Kaki et Menthe, Semelle Blanche Rétro",
    "description": "Baskets New Balance 530 au design rétro vert kaki militaire avec logo \"N\" vert menthe\nDétails bicolores\nSemelle blanche épaisse pour un confort optimal\nLook vintage tendance avec badge \"530\" sur le talon\nMesh respirant et daim synthétique premium",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770392218/1_g6galj.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2215,
    "name": "Baskets New Balance 530 - Beige Crème et Gris, Semelle Blanche Vintage",
    "description": "Baskets New Balance 530 au design rétro beige crème avec logo \"N\" gris ardoise\nDétails ton sur ton\nSemelle blanche épaisse pour un confort optimal\nLook années 90 épuré et élégant avec badge \"530\" sur le talon\nMesh respirant et daim synthétique doux",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770392240/1_jdzifh.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2216,
    "name": "Baskets New Balance 530 - Bleu Royal et Blanc, Semelle Blanche Rétro",
    "description": "Baskets New Balance 530 au design rétro bleu royal total avec logo \"N\" ton sur ton\nBadge \"530\" au talon\nSemelle blanche épaisse pour un confort optimal\nLook monochrome élégant années 90\nMesh respirant et daim synthétique premium pour durabilité et style",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770392261/1_bxiskz.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2217,
    "name": "Baskets Adidas Samba - Blanc Crème et Beige, Semelle Gum Classique",
    "description": "Baskets Adidas Samba au design iconique blanc crème avec trois bandes beige dorées\nSemelle gum marron caramel\nLogo \"SAMBA\" doré sur le côté\nLook rétro intemporel inspiré du football vintage\nCuir synthétique premium et finitions soignées pour durabilité et élégance",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770394913/1_mqiewz.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2218,
    "name": "Baskets Adidas Samba - Blanc et Gris Clair, Semelle Gum Classique",
    "description": "Baskets Adidas Samba au design iconique blanc avec trois bandes grises claires\nSemelle gum marron caramel\nLogo \"SAMBA\" gris sur le côté\nSilhouette rétro intemporelle inspirée du football vintage\nCuir synthétique premium et finitions élégantes pour confort et durabilité",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770394935/1_j0w0ko.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2219,
    "name": "Baskets Adidas Samba - Blanc et Bleu Marine, Semelle Gum Classique",
    "description": "Baskets Adidas Samba au design iconique blanc avec trois bandes bleu marine contrastées\nSemelle gum marron caramel\nLogo \"SAMBA\" bleu marine sur le côté\nLook rétro intemporel inspiré du football vintage\nCuir synthétique premium et finitions soignées pour style et durabilité",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770394957/1_d0worb.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2220,
    "name": "Baskets New Balance Air - Blanc Total avec Logo Noir, Semelle Air Cushion",
    "description": "Baskets New Balance style basketball blanc total avec logo \"N\" noir contrasté\nSemelle épaisse Air Cushion beige/gum\nDesign épuré inspiré des sneakers de basket rétro\nCoussin d'air visible pour un confort maximal\nCuir synthétique premium et finitions soignées",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770394988/1_uv8gyo.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2221,
    "name": "Baskets Sport Running - Noir et Blanc, Design Dynamique Lignes Blanches",
    "description": "Baskets de running au design moderne noir avec lignes blanches dynamiques contrastées et semelle blanche épaisse\nLogo triangulaire sur le côté\nStyle sportif technique pour performance optimale\nMesh respirant et structure ergonomique pour confort et amorti exceptionnels\nParfaites pour la course, le fitness ou l'usage quotidien",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407726/1_e8p1rj.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2222,
    "name": "Baskets Sport Running - Blanc et Gris Argenté, Design Futuriste",
    "description": "Baskets de running au design futuriste blanc avec détails gris argenté et lignes dynamiques contrastées\nSemelle épaisse blanche sculptée pour amorti maximal\nLogo triangulaire discret sur le côté\nMesh respirant et structure ergonomique pour performance et confort optimal\nParfaites pour la course, le fitness ou le style sportswear quotidien",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407751/1_yiuh7q.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2223,
    "name": "Baskets Sport Running - Blanc et Beige Doré, Design Élégant Lignes",
    "description": "Baskets de running au design raffiné blanc total avec lignes beige doré élégantes et logo triangulaire discret\nSemelle épaisse blanche pour amorti maximal et confort optimal toute la journée\nMesh respirant et finitions premium pour style et performance\nParfaites pour le running, le fitness ou l'usage quotidien avec élégance",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407778/1_bjwl8j.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2224,
    "name": "Baskets NOKA Running - Blanc et Bleu Dégradé, Semelle Épaisse Performance",
    "description": "Baskets de running NOKA au design moderne blanc avec dégradé bleu ciel et bleu marine\nLogo NOKA stylisé sur le côté\nSemelle épaisse blanche pour amorti exceptionnel et performance optimale\nMesh ultra-respirant et structure légère pour confort maximal\nIdéales pour la course, le jogging ou le sport intensif",
    "price": 250,
    "oldPrice": 350,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407806/1_dh6scg.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2225,
    "name": "Baskets NOKA Running - Blanc et Gris Dégradé, Semelle Épaisse Performance",
    "description": "Baskets de running NOKA au design élégant blanc avec dégradé gris anthracite et logo NOKA stylisé sur le côté\nSemelle épaisse blanche pour amorti exceptionnel et performance optimale\nMesh ultra-respirant et structure légère pour confort maximal lors des courses\nIdéales pour le running, le jogging ou l'entraînement sportif intensif",
    "price": 250,
    "oldPrice": 350,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407835/1_dv9joj.jpg"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2226,
    "name": "Baskets New Balance Running - Blanc Noir et Gris, Design Sportif Dynamique",
    "description": "Baskets New Balance au design sportif blanc avec détails noir et logo \"N\" gris argenté\nSemelle blanche légère et lacets élastiques pratiques pour enfilage rapide\nMesh respirant et structure moderne pour confort et performance optimale\nParfaites pour le running, le fitness, la marche rapide ou l'usage quotidien actif et confortable",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407860/1_ygdkfz.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2227,
    "name": "Baskets New Balance Running - Blanc et Beige, Design Minimaliste Swoosh",
    "description": "Baskets New Balance au design épuré blanc avec détails beige crème, logo \"N\" ton sur ton et swoosh noir discret\nSemelle blanche légère pour confort optimal et look minimaliste moderne\nMesh respirant et finitions élégantes pour style et performance\nParfaites pour le running, le fitness ou l'usage quotidien avec élégance décontractée",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407889/1_kyalcu.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 2228,
    "name": "Baskets New Balance Running - Noir et Blanc, Design Contrasté Classique",
    "description": "Baskets New Balance au design sportif noir avec logo \"N\" blanc contrasté et détails blancs dynamiques\nSemelle blanche légère pour amorti optimal et look monochrome intemporel\nMesh respirant et cuir synthétique pour durabilité et confort exceptionnel\nParfaites pour le running, le fitness ou l'usage quotidien avec style urbain élégant",
    "price": 199,
    "oldPrice": 250,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1770407915/1_txzsyj.png"
    ],
    "category": "Hommes",
    "rating": "4.5"
  },
  {
    "id": 4001,
    "name": "Organisateur Maquillage Rotatif 360° - Présentoir Acrylique Transparent Multi-Niveaux",
    "description": "Organisateur de maquillage rotatif 360° en acrylique transparent cristal avec motif diamant élégant. Multi-niveaux ajustables pour ranger rouges à lèvres, vernis, parfums, pinceaux et cosmétiques. Rotation fluide pour accès facile à tous vos produits beauté. Taille généreuse et grande capacité de rangement pour coiffeuse ou salle de bain. Idéal pour femme recherchant organisation pratique et présentation luxueuse de sa collection de maquillage au quotidien.",
    "price": 149,
    "oldPrice": 199,
    "stock": 30,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771022260/1_jfqvcl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771022261/2_pynqeu.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4002,
    "name": "Brosse Soufflante One Step - Sèche-Cheveux et Lisseur 2-en-1 Hot Air Brush",
    "description": "Brosse soufflante révolutionnaire One Step Hair Dryer and Styler 2-en-1 pour sécher et lisser simultanément. Technologie air chaud ionique anti-frisottis pour cheveux brillants et soyeux en un seul geste rapide. Poils en nylon doux pour démêler sans abîmer, avec plusieurs niveaux de chaleur réglables. Gain de temps considérable pour un résultat salon professionnel à domicile. Idéale pour femme souhaitant un outil polyvalent pour coiffage rapide, lissage et volumisation des cheveux au quotidien.",
    "price": 189,
    "oldPrice": 249,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771022602/1_bgkxt6.jpg"
    ],
    "category": "Beauté",
    "rating": "4.7"
  },
  {
    "id": 4003,
    "name": "Crème Éclaircissante Vitamine C - Soin Visage Anti-Taches Hydratant Glow & Moisture",
    "description": "Crème éclaircissante enrichie en Vitamine C pure, glutathione et extraits naturels de baies pour un teint lumineux, unifié et éclatant de santé. Formule hydratante intensive qui réduit visiblement les taches brunes, hyperpigmentation, cicatrices d'acné et décoloration pour peau parfaitement homogène et radieuse. Texture onctueuse légère pénétrant rapidement sans effet gras apportant hydratation profonde 24h et boost d'éclat instantané dès l'application quotidienne. Antioxydants puissants protégeant la peau du vieillissement prématuré, stimulant production de collagène pour fermeté et élasticité retrouvées visiblement. Idéale pour femmes recherchant teint clair lumineux naturel avec soin anti-âge complet réduisant rides, ridules et taches pigmentaires efficacement.",
    "price": 99,
    "oldPrice": 149,
    "stock": 60,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771273719/1_vq3idh.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4005,
    "name": "Fer à Boucler Automatique Sans Fil - Boucleur Rotatif Rechargeable LCD",
    "description": "Fer à boucler automatique sans fil avec rotation droite et gauche pour des boucles parfaites des deux côtés. Écran LCD intégré pour contrôle précis de la température et du temps de bouclage. Rechargeable USB, idéal pour usage maison ou voyage sans contrainte de câble. Technologie céramique ionique pour boucles brillantes et durables sans abîmer les cheveux. Parfait pour femme souhaitant des boucles professionnelles facilement, rapidement et en toute sécurité à domicile.",
    "price": 219,
    "oldPrice": 299,
    "stock": 35,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771023639/1_j7pytg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771023641/2_mgrgbr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771023645/3_vagqof.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4006,
    "name": "Épilateur Rasoir Électrique Féminin - Tondeuse Corps Jambes Rechargeable USB",
    "description": "Épilateur électrique féminin rechargeable USB élégant blanc et or rosé pour épilation douce et efficace du corps. Tête rasoir pivotante avec accessoires interchangeables pour jambes, aisselles et zones sensibles. Résultats peau lisse et douce immédiatement sans douleur ni irritation. Compact et portable, idéal pour usage maison ou voyage. Parfait pour femme recherchant une solution d'épilation pratique, rapide et économique pour peau soyeuse au quotidien.",
    "price": 159,
    "oldPrice": 219,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771023844/1_xmnowt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771023848/2_mofead.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771023858/4_qd8wyi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771023865/5_nqafpj.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4007,
    "name": "Kit Épilation Cire Chaude Pro-Wax100 - Chauffe-Cire Électrique + 300g Perles + 50 Spatules",
    "description": "Kit épilation complet Pro-Wax100 avec chauffe-cire électrique à température réglable, 300g de perles de cire dure et 50 spatules en bois. Disponible en plusieurs parfums : fraise, rose, thé vert, tea tree, miel, crème, camomille, lavande, café et noir. Résultats salon professionnel à domicile pour peau lisse et douce durablement. Idéal pour épilation jambes, aisselles et zones sensibles sans bandes. Parfait pour femme recherchant une solution d'épilation économique, efficace et professionnelle à domicile.",
    "price": 249,
    "oldPrice": 349,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771023989/1_nhxjzb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771023993/2_ackpsq.jpg"
    ],
    "category": "Beauté",
    "rating": "4.8"
  },
  {
    "id": 4008,
    "name": "Kit Coiffage 5-en-1 Hot Air Styler - Sèche-Cheveux, Lisseur, Boucleur Ionique",
    "description": "Kit coiffage professionnel 5-en-1 avec technologie ionique négative pour cheveux brillants et sans frisottis. Comprend 5 accessoires interchangeables : brosse ronde, lisseur, boucleur, brosse plate et diffuseur pour tous styles. Résultats salon professionnel à domicile en un seul appareil polyvalent et économique. Technologie air chaud ionique pour sécher, lisser, boucler et volumiser sans abîmer les cheveux. Parfait pour femme souhaitant coiffures variées et professionnelles rapidement, facilement et en toute sécurité.",
    "price": 279,
    "oldPrice": 399,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771024287/1_vmrpuh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771024291/2_jppzfl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771024299/3_hfrwks.jpg"
    ],
    "category": "Beauté",
    "rating": "4.7"
  },
  {
    "id": 4009,
    "name": "Lisseur Vapeur Kemei KM-3011 - Nano Céramique, 3 Niveaux Vapeur, Rotation 360°",
    "description": "Lisseur vapeur professionnel Kemei KM-3011 avec plaques nano-céramiques pour un lissage parfait sans abîmer les cheveux. Système vapeur visible 3 niveaux avec réservoir d'eau rechargeable par seringue pour une hydratation maximale pendant le coiffage. Rotation câble 360° et fermeture automatique sécurisée après 60 minutes pour une utilisation confortable et sans risque. Affichage LED avec contrôle précis de la température, compatible cheveux secs et humides pour tous types de cheveux. Idéal pour femme souhaitant un lissage professionnel hydratant à domicile, résultat salon garanti avec cheveux lisses, brillants et protégés.",
    "price": 199,
    "oldPrice": 279,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771055688/1_tmgk6z.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771055693/2_r4084t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771055700/3_gxyqlo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771055715/4_jmbycj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771055730/5_wivlzl.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4010,
    "name": "Tresseuse Automatique Twist Secret - Appareil Nattage Électrique Rechargeable USB",
    "description": "Tresseuse automatique Twist Secret rechargeable USB pour réaliser de magnifiques tresses et nattes en quelques secondes sans effort. Appareil électrique intelligent avec crochets rotatifs pour des tresses parfaites, régulières et professionnelles à domicile facilement. Compatible tous types de cheveux, longs, mi-longs et épais pour résultats impeccables et variés. Livré avec câble USB, manuel d'utilisation et boîte de rangement élégante. Parfait pour femme souhaitant des coiffures tressées tendance rapidement sans salon ni compétences particulières.",
    "price": 169,
    "oldPrice": 239,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771056064/1_emhhsz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771056070/2_qvinhi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771056084/3_mrhtxl.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4011,
    "name": "Mini Lisseur Céramique Pastel - Fer à Lisser Compact Voyage 5 Coloris",
    "description": "Mini lisseur électrique céramique disponible en 5 coloris pastel tendance : rose, violet, jaune, turquoise et blanc. Plaques céramiques pour un lissage doux et efficace sans abîmer les cheveux avec chauffe rapide. Format compact et léger idéal pour voyage, sac à main ou retouches rapides à tout moment. Parfait pour frange, mèches et cheveux courts ou mi-longs avec résultats lisses et brillants. Idéal pour femme et adolescente recherchant un lisseur pratique, mignon et abordable pour usage quotidien.",
    "price": 89,
    "oldPrice": 139,
    "stock": 55,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771056255/1_kau2l6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771056263/2_mrbvuk.jpg"
    ],
    "category": "Beauté",
    "rating": "4.3"
  },
  {
    "id": 4012,
    "name": "Tondeuse Professionnelle BZ-T99 - Finisseur Barbe et Cheveux Vintage Rechargeable USB",
    "description": "Tondeuse professionnelle BZ-T99 au design vintage doré avec lame T en acier inoxydable ultra-précise pour dégradés et contours parfaits. Batterie lithium 1200mAh rechargeable USB avec affichage LED niveau batterie pour utilisation longue durée sans interruption. Tête de coupe lavable avec 3 sabots de guidage interchangeables pour toutes longueurs de coupe souhaitées. Corps sculpté style antiquité avec gravures décoratives pour une prise en main confortable et élégante. Idéal pour homme souhaitant des finitions de barbe et cheveux professionnelles à domicile, résultat barbier garanti.",
    "price": 229,
    "oldPrice": 319,
    "stock": 34,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771056920/1_gqwomj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771056925/2_jucy3u.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771056943/3_c8tnop.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771056955/4_b1mo91.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771056966/5_qkcpwm.jpg"
    ],
    "category": "Beauté",
    "rating": "4.8"
  },
  {
    "id": 4013,
    "name": "Épilateur Cristal Physique - Pad Dépilatoire Sans Douleur Homme Femme 6 Coloris",
    "description": "Nouveau pad dépilatoire en cristal physique révolutionnaire pour une épilation douce, rapide et sans douleur ni produits chimiques. Technologie micro-abrasion en verre cristal pour éliminer efficacement les poils du corps, jambes, aisselles et torse en quelques gestes circulaires. Sans batterie ni recharge, réutilisable à l'infini et économique pour toute la famille homme et femme. Disponible en 6 coloris tendance : turquoise, orange, violet, rose, noir et argent. Parfait pour épilation naturelle et indolore à domicile avec résultats peau lisse et douce immédiatement visibles.",
    "price": 99,
    "oldPrice": 149,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771057277/1_ppnxgw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771057283/2_mtgllr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771057294/3_q0olyw.jpg"
    ],
    "category": "Beauté",
    "rating": "4.2"
  },
  {
    "id": 4014,
    "name": "Shampoing Colorant Disaar Ginseng & Huile de Serpent - Anti-Cheveux Blancs Noir",
    "description": "Shampoing colorant Disaar au Ginseng et huile de serpent pour couvrir 100% les cheveux blancs et gris en un seul lavage rapide et facile. Formule enrichie en collagène et huile d'argan pour nourrir, fortifier et embellir les cheveux tout en les colorant naturellement noir. Application simple comme un shampoing ordinaire avec résultats visibles dès la première utilisation sans teinture ni mélange. Convient aussi bien aux hommes qu'aux femmes pour un look jeune et naturel retrouvé immédiatement. Parfait pour personnes souhaitant se débarrasser des cheveux blancs définitivement avec un soin colorant pratique et efficace.",
    "price": 69,
    "oldPrice": 99,
    "stock": 65,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771058671/1_yh2srw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771058677/2_nhxe9c.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771058694/3_iv3gsg.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4015,
    "name": "Brosse Lissante Électrique Straightener - Peigne Chauffant LCD Anti-Frisottis",
    "description": "Brosse lissante électrique professionnelle avec affichage LCD pour contrôle précis de la température et lissage rapide en un seul passage. Dents en céramique chauffante de 22,5cm pour démêler et lisser simultanément sans abîmer les cheveux ni créer de frisottis. Chauffe ultra-rapide et technologie ionique pour cheveux brillants, lisses et soyeux en quelques minutes seulement. Design ergonomique rouge et noir de 22,5cm pour une prise en main confortable et facile sur tous types de cheveux. Parfait pour femme souhaitant un lissage professionnel rapide à domicile avec résultats salon visibles dès la première utilisation.",
    "price": 179,
    "oldPrice": 249,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771058972/1_hwg8e9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771058979/2_vtvvnt.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4016,
    "name": "Diffuseur Boucleur Magique pour Sèche-Cheveux - 2 Rouleaux Petites et Grandes Boucles",
    "description": "Accessoire boucleur magique à fixer sur votre sèche-cheveux pour créer de belles boucles naturelles sans fer à friser ni chaleur excessive. Livré avec 2 rouleaux interchangeables : petites boucles serrées et grandes ondulations naturelles pour coiffures variées. Rotation gauche et droite réglable pour boucles dans les deux sens avec résultats uniformes et professionnels. Compatible avec tous types de sèche-cheveux grâce à l'adaptateur universel rotatif. Parfait pour femme souhaitant des cheveux bouclés volumineux et brillants facilement à domicile sans endommager les cheveux.",
    "price": 129,
    "oldPrice": 179,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771059238/1_zg1j7d.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771059311/2_k2jzgq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771059320/3_i4g1hj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771059338/4_gmllmi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771059354/5_mbcnpc.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4017,
    "name": "Fer à Boucler Automatique Céramique - Boucleur Professionnel 4 Coloris",
    "description": "Fer à boucler automatique professionnel avec chambre de bouclage céramique pour des boucles parfaites et uniformes en quelques secondes. Système automatique d'aspiration des cheveux pour un bouclage facile sans effort ni risque de brûlure. Technologie céramique ionique pour boucles brillantes, durables et sans frisottis sur tous types de cheveux. Disponible en 4 coloris tendance : bleu, rouge, blanc et noir pour un look élégant et moderne. Parfait pour femme souhaitant des boucles volumineuses et professionnelles à domicile rapidement et en toute sécurité.",
    "price": 209,
    "oldPrice": 289,
    "stock": 31,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771059587/1_grewjq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771059595/2_qzkdhs.jpg"
    ],
    "category": "Beauté",
    "rating": "4.7"
  },
  {
    "id": 4018,
    "name": "Aspirateur de Points Noirs Électrique - Nettoyant Pores Visage 5 Têtes USB",
    "description": "Aspirateur de points noirs électrique rechargeable USB avec 5 têtes interchangeables pour un nettoyage profond et efficace des pores du visage. Technologie de micro-aspiration puissante pour éliminer points noirs, impuretés, excès de sébum et peaux mortes en douceur. Plusieurs niveaux d'aspiration réglables adaptés à tous types de peau sensible ou grasse. Design élégant blanc et or rosé compact et ergonomique pour une utilisation facile et confortable. Parfait pour femme souhaitant une peau nette, purifiée et éclatante avec un soin visage professionnel à domicile.",
    "price": 139,
    "oldPrice": 199,
    "stock": 52,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771059865/1_rbljia.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771059877/2_i3wfjg.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4019,
    "name": "Shampoing Colorant Anti-Cheveux Blancs Disaar Collagène - Coloration Naturelle Instantanée",
    "description": "Shampoing colorant révolutionnaire Disaar au collagène et huile d'argan pour éliminer définitivement les cheveux blancs et gris dès la première utilisation. Formule enrichie en protéines naturelles qui colore instantanément tout en nourrissant, fortifiant et embellissant vos cheveux pour un look jeune et naturel. Application ultra-simple comme un shampoing ordinaire sans mélange ni préparation, résultats visibles immédiatement avec couleur noire intense et durable. Convient aussi bien aux hommes qu'aux femmes pour retrouver cheveux foncés brillants et soyeux en quelques minutes seulement à domicile. Idéal pour personnes souhaitant se débarrasser des cheveux blancs rapidement avec solution économique, pratique et efficace sans salon de coiffure.",
    "price": 79,
    "oldPrice": 119,
    "stock": 58,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771273304/1_dudjfn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771273317/2_whyyok.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771273327/3_cswsjr.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4020,
    "name": "Lisseur Cheveux Professionnel à Vapeur - Fer Plat Céramique Tourmaline",
    "description": "Lisseur professionnel noir avec plaques céramique tourmaline larges et technologie vapeur ionique pour lissage brillant sans abîmer les cheveux. Design ergonomique avec peigne intégré anti-brûlure et diffusion vapeur protégeant la fibre capillaire de la chaleur excessive jusqu'à 230°C. Plaques flottantes extra-larges pour lissage rapide et efficace de tous types cheveux, fins, épais, bouclés ou crépus avec résultats salon à domicile. Câble rotatif 360 degrés et chauffe rapide en 60 secondes pour coiffage professionnel quotidien sans effort ni casse. Idéal pour femmes recherchant lissage durable et brillance miroir avec protection thermique tourmaline éliminant frisottis et électricité statique efficacement.",
    "price": 199,
    "oldPrice": 279,
    "stock": 39,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771062334/1_w3pu9r.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771062363/3_utbzxm.jpg"
    ],
    "category": "Beauté",
    "rating": "4.7"
  },
  {
    "id": 4021,
    "name": "Lissage Brésilien Protéine Professional - Traitement Kératine Cheveux Made in Brazil",
    "description": "Lissage brésilien professionnel à la protéine avec formule brésilienne originale pour cheveux lisses brillants et soyeux jusqu'à 6 mois. Traitement capillaire intensif à base de kératine et protéines naturelles réparant cheveux abîmés, fourchus et éliminant frisottis durablement avec résultats visibles dès première application. Flacon 1 litre format salon professionnel pour multiples applications cheveux courts, mi-longs ou longs avec effet lissant progressif respectueux de la fibre capillaire. Sans formol ou avec formol léger selon formulation, redonne brillance exceptionnelle et douceur incroyable aux cheveux ternes et difficiles à coiffer. Idéal pour femmes recherchant alternative permanente au lissage quotidien avec résultats professionnels maison, économique et efficace pour tous types cheveux.",
    "price": 349,
    "oldPrice": 499,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771062514/1_kphylb.jpg"
    ],
    "category": "Beauté",
    "rating": "4.8"
  },
  {
    "id": 4022,
    "name": "Aspirateur Points Noirs Électrique USB - Nettoyeur Pores Visage Rechargeable",
    "description": "Aspirateur points noirs électrique rose gold avec technologie d'aspiration par vide pour extraction efficace comédons, pores dilatés et impuretés du visage. Design élégant rechargeable USB avec 3 têtes d'aspiration interchangeables transparentes pour différentes zones et types de peau avec câble de charge inclus. Appareil beauté professionnel portable sans fil éliminant points noirs, sébum excessif et cellules mortes pour peau nette et lisse instantanément. Aspiration réglable multi-niveaux adaptée peaux sensibles, mixtes ou grasses avec résultats visibles dès première utilisation sans douleur ni irritation. Idéal pour hommes et femmes recherchant alternative hygiénique aux extracteurs manuels avec soin visage spa maison économique et têtes lavables réutilisables.",
    "price": 129,
    "oldPrice": 189,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771062700/1_s3rhxu.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4023,
    "name": "Bandeau Lifting Facial V-Shape + Mini Masseur - Sculpteur Visage Ovale Anti-Double Menton",
    "description": "Kit complet de remodelage facial avec bandeau lifting élastique rose et mini masseur vibrant pour sculpter un visage en V en seulement 30 minutes par jour. Bandeau ajustable qui soulève et raffermit les joues, le menton et la mâchoire pour réduire visiblement le double menton et l'affaissement cutané. Mini appareil de massage facial à vibrations ciblées stimulant la circulation sanguine et l'élasticité de la peau pour des résultats liftants naturels. Utilisation simple à domicile pendant le repos, la lecture ou le visionnage TV avec confort optimal et sans contrainte quotidienne. Idéal pour femmes recherchant alternative non-invasive aux interventions esthétiques pour visage plus fin, ovale redéfini et peau raffermie durablement.",
    "price": 129,
    "oldPrice": 189,
    "stock": 37,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771287194/1_ndasaz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771272747/2_hy0wvq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771272766/3_t9eofk.jpg"
    ],
    "category": "Beauté",
    "rating": "4.3"
  },
  {
    "id": 4024,
    "name": "Brosse Soufflante Remington 3 en 1 - Sèche-Cheveux Brushing Professionnel Salon",
    "description": "Brosse soufflante Remington RE-2062 avec kit 3 accessoires interchangeables violet et argent pour séchage, brushing et coiffage professionnel salon à domicile. Design élégant avec 3 brosses rotatives incluant brosse ronde volumisante, brosse lissante et concentrateur pour tous styles cheveux avec résultats coiffeur professionnels. Technologie ionique réduisant frisottis et apportant brillance exceptionnelle avec chaleur réglable protégeant cheveux des dommages thermiques pendant coiffage quotidien. Poignée ergonomique antidérapante violette avec bouton contrôle facile et câble rotatif 360 degrés pour manipulation aisée et confortable durant brushing. Idéal pour femmes recherchant appareil multifonction économique remplaçant sèche-cheveux et fer à boucler avec gain temps et résultats lisses ou volumineux durables.",
    "price": 259,
    "oldPrice": 359,
    "stock": 29,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771063211/1_ocfl9h.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4025,
    "name": "Aspirateur Points Noirs 6 en 1 - Nettoyeur Pores Visage Multifonction Rechargeable",
    "description": "Aspirateur points noirs blanc avec 6 têtes d'aspiration interchangeables pour extraction comédons, exfoliation, nettoyage profond et massage facial complet rechargeable USB. Kit complet incluant appareil ergonomique avec 4 niveaux d'aspiration réglables, chargeur secteur, câble USB et accessoires pour tous types peaux et zones visage. Technologie aspiration par vide professionnelle éliminant points noirs, sébum excessif, cellules mortes et resserrant pores dilatés pour peau nette lumineuse instantanément. Design portable sans fil rechargeable avec têtes transparentes permettant visualisation extraction en temps réel pour traitement ciblé efficace sans douleur. Idéal pour hommes et femmes recherchant soin visage spa maison économique avec résultats visibles dès première utilisation et accessoires lavables réutilisables durables.",
    "price": 159,
    "oldPrice": 229,
    "stock": 41,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771063603/1_mfwm2v.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4026,
    "name": "Épilateur Électrique Kemei 4 en 1 - Rasoir Femme Multifonction Rechargeable Rose",
    "description": "Épilateur électrique Kemei rose et blanc avec 4 têtes interchangeables incluant rasoir, tondeuse bikini, exfoliant et brosse nettoyante visage rechargeable USB multifonction. Kit beauté complet avec lames hypoallergéniques en acier inoxydable pour épilation douce jambes, aisselles, maillot et visage sans irritation ni coupures. Design ergonomique portable rechargeable avec batterie longue durée, câble USB, brosse nettoyage et manuel d'utilisation pour routine beauté complète maison. Technologie sans fil waterproof utilisable sous douche avec mousse ou à sec pour épilation confortable rapide et résultats peau douce lisse durables. Idéal pour femmes recherchant solution épilation économique tout-en-un remplaçant plusieurs appareils avec accessoires lavables et entretien facile quotidien pratique.",
    "price": 179,
    "oldPrice": 249,
    "stock": 43,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771063936/1_scxhhm.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4027,
    "name": "Lisseur Cheveux Kemei Professionnel - Fer Plat Céramique Compact Voyage",
    "description": "Lisseur professionnel Kemei noir et rouge avec plaques céramique chauffantes pour lissage rapide efficace et cheveux brillants lisses sans frisottis ni casse. Design compact portable avec câble rotatif 360 degrés et chauffe rapide en 60 secondes pour coiffage professionnel quotidien maison ou voyage pratique. Plaques flottantes lisses protégeant cheveux de chaleur excessive jusqu'à 200°C adaptées tous types cheveux fins, épais, bouclés ou raides facilement. Technologie céramique tourmaline répartissant chaleur uniformément éliminant électricité statique avec glissement doux sans accrochage pour résultats salon impeccables. Idéal pour femmes recherchant lisseur compact économique format voyage avec performance professionnelle, léger transportable et bouton contrôle température facile utilisation.",
    "price": 119,
    "oldPrice": 169,
    "stock": 49,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771064059/1_pv0aqi.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4028,
    "name": "Tondeuse de Précision Professionnelle 3-en-1 - Rouge Métallisé",
    "description": "Tondeuse électrique polyvalente avec accessoires interchangeables pour une coupe précise et professionnelle. Design ergonomique en finition rouge métallisé avec poignée antidérapante pour un confort optimal. Livrée avec 3 têtes de coupe différentes adaptées à tous vos besoins de toilettage : barbe, cheveux et finitions. Lame en acier inoxydable de haute qualité garantissant une coupe nette et durable. Idéale pour un usage domestique ou professionnel, offrant précision et performance à chaque utilisation.",
    "price": 149,
    "oldPrice": 209,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771267279/1_ebftfz.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4029,
    "name": "Vaporisateur Facial Nano-Ionique Portable - Hydratation Instantanée",
    "description": "Brumisateur facial ultrasonique compact pour une hydratation profonde de la peau en toute occasion. Technologie nano-vapeur qui génère des particules ultra-fines pénétrant rapidement l'épiderme pour un effet rafraîchissant immédiat. Design élégant et portable en format pocket, idéal à glisser dans votre sac pour des retouches tout au long de la journée. Parfait pour fixer le maquillage, revitaliser la peau fatiguée ou combattre la sécheresse cutanée en voyage ou au bureau. Rechargeable par USB, cet accessoire beauté essentiel convient à tous les types de peau pour un teint éclatant et hydraté.",
    "price": 109,
    "oldPrice": 159,
    "stock": 53,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771267484/1_meiypz.jpg"
    ],
    "category": "Beauté",
    "rating": "4.3"
  },
  {
    "id": 4030,
    "name": "Épilateur Électrique pour Sourcils - Précision et Indolore",
    "description": "Épilateur électrique de précision spécialement conçu pour un entretien impeccable des sourcils et des poils du visage. Design élégant blanc et doré avec tête rotative ultra-précise pour une épilation délicate et sans douleur. Compact et discret, il se glisse facilement dans votre trousse de maquillage pour des retouches à tout moment. Technologie silencieuse idéale pour éliminer les poils indésirables autour des sourcils, lèvre supérieure et menton en toute douceur. Batterie longue durée avec lumière LED intégrée pour une précision optimale même dans les zones peu éclairées.",
    "price": 89,
    "oldPrice": 139,
    "stock": 57,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771267715/1_grbspf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771267742/2_pcwjfg.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4031,
    "name": "Lunettes Multi-Fonctions 5-en-1 avec Clips Magnétiques Interchangeables - Style 30",
    "description": "Set complet de lunettes de vue avec 5 clips solaires magnétiques interchangeables pour s'adapter à toutes les situations et occasions. Monture principale en métal avec verres transparents anti-lumière bleue et clips solaires colorés : noir, marron, bleu miroir, argent miroir et jaune. Système d'attache magnétique ultra-pratique permettant de changer de style en une seconde selon vos besoins et activités quotidiennes. Livré avec étui de protection élégant pour ranger et transporter l'ensemble en toute sécurité lors de vos déplacements. Idéal pour homme et femme recherchant une solution polyvalente économique remplaçant plusieurs paires de lunettes avec protection UV400 complète.",
    "price": 179,
    "oldPrice": 249,
    "stock": 33,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771269397/1_zdfpmu.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4032,
    "name": "Kit Capillaire Professionnel Balireine Protein 4 Pièces - Shampoing, Masque, Après-Shampoing et Huile",
    "description": "Kit complet de soin capillaire Balireine My Queen enrichi en protéines pour cheveux abîmés, secs et cassants avec résultats professionnels à domicile. Comprend shampoing protéiné 850ml, après-shampoing 350ml, masque réparateur intense 800ml et huile capillaire nourrissante 50ml pour routine complète. Formule brésilienne aux protéines de soie et kératine pour réparer, nourrir, lisser et redonner brillance et douceur aux cheveux ternes. Traitement professionnel salon pour cheveux transformés, revitalisés et renforcés en profondeur avec effet lissant durable visible dès premières applications. Idéal pour femmes recherchant solution capillaire complète économique pour cheveux abîmés par colorations, défrisages ou chaleur avec format généreux longue durée.",
    "price": 299,
    "oldPrice": 449,
    "stock": 26,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771272454/1_kobrnt.jpg"
    ],
    "category": "Beauté",
    "rating": "4.8"
  },
  {
    "id": 4033,
    "name": "Têtes d'Entraînement Microblading Silicone - Practice Skin Maquillage Permanent Tatouage Sourcils",
    "description": "Lot de peaux d'entraînement en silicone réaliste couleur chair pour pratique professionnelle de microblading, tatouage sourcils et maquillage permanent sans modèle vivant. Texture 3D ultra-réaliste imitant parfaitement la peau humaine avec relief anatomique pour apprentissage technique précis et perfectionnement des gestes professionnels. Set de 5 têtes réutilisables permettant multiples sessions d'entraînement pour maîtriser tracés, ombrage, densité et symétrie avant passage sur clients réels. Matériau silicone médical souple résistant aux pigments et aiguilles pour simulation conditions réelles de travail avec nettoyage facile entre utilisations. Idéal pour débutants formation microblading, esthéticiennes, tatoueurs sourcils ou professionnels souhaitant perfectionner nouvelles techniques sans risque avant application clientèle.",
    "price": 119,
    "oldPrice": 179,
    "stock": 35,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771277416/1_twn21f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771277429/2_uszlf9.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4034,
    "name": "Râpe Électrique Pieds Rechargeable - Ponceuse Callosités Talons USB Waterproof",
    "description": "Râpe électrique pieds professionnelle rechargeable USB avec tête micro-abrasion rotative 1700-2000 RPM éliminant rapidement callosités, peaux mortes et durillons talons efficacement. Design ergonomique blanc compact waterproof utilisable à sec ou sous douche avec rouleau diamant exfoliant doux mais puissant pour pieds lisses doux. Batterie rechargeable longue durée avec voyant LED indicateur niveau charge et 2 vitesses rotation adaptées zones sensibles ou callosités épaisses résistantes. Tête rotative amovible lavable facilement avec brosse nettoyage incluse pour hygiène optimale et durabilité appareil pédicure maison professionnel longue durée. Idéal pour hommes et femmes souffrant pieds rugueux, fissurés, calleux recherchant pédicure salon maison économique avec résultats pieds bébé soyeux visibles.",
    "price": 129,
    "oldPrice": 189,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771283783/1_hvrwsd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771283789/2_ccyxbc.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4035,
    "name": "Lime Électrique Pieds Pédicure Rechargeable - Ponceuse Callosités 2 Rouleaux USB",
    "description": "Lime électrique pieds pédicure professionnelle rose gold rechargeable USB avec 2 rouleaux exfoliants interchangeables : grain épais callosités résistantes et grain fin finitions douces. Design élégant ergonomique compact avec tête rotative micro-abrasion éliminant rapidement peaux mortes, callosités talons, durillons pour pieds lisses soyeux salon maison. Moteur puissant silencieux rotation optimale avec bouton marche/arrêt simple utilisation pieds secs ou humides après bain pour résultats maximums visibles. Kit complet incluant appareil, 2 rouleaux rechange, câble charge USB et brosse nettoyage pour hygiène parfaite entretien facile longue durée utilisation. Idéal pour hommes et femmes pieds rugueux, fissurés recherchant pédicure professionnelle maison économique avec pieds bébé doux entretenus impeccablement quotidiennement.",
    "price": 119,
    "oldPrice": 179,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771285833/1_whx5fb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771285844/2_stgzzb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771285855/3_xhb3vl.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4036,
    "name": "Lampe UV LED Ongles Mini Portable USB - Séchoir Vernis Gel Semi-Permanent",
    "description": "Mini lampe UV LED portable rechargeable USB design compact turquoise et doré pour séchage rapide vernis gel semi-permanent ongles maison ou voyage. Technologie LED double longueur onde UV polymérise tous types gels base, couleur, top coat en 30-60 secondes pour manucure professionnelle économique domicile. Design ergonomique ultra-compact format souris ordinateur se glissant facilement sac main trousse maquillage pour retouches déplacements vacances urgentes partout. Capteur automatique activant lampe dès insertion doigt avec minuterie intégrée arrêt automatique après temps séchage optimal sans surconsommation énergie inutile. Idéale pour femmes adeptes manucure gel maison recherchant solution portable économique professionnelle évitant salons onéreux avec ongles impeccables durables brillants.",
    "price": 69,
    "oldPrice": 109,
    "stock": 62,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771286416/1_n0hhpx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771286431/2_lnyfds.jpg"
    ],
    "category": "Beauté",
    "rating": "4.3"
  },
  {
    "id": 4037,
    "name": "Appareil Lifting Facial V-Line EMS - Sculpteur Visage Électrostimulation Rechargeable USB",
    "description": "Appareil lifting facial V-Line avec technologie EMS électrostimulation musculaire redessinant ovale visage, réduisant double menton et raffermissant peau relâchée joues mâchoire naturellement progressivement. Stimulation électrique micro-courants indolores contractant muscles faciaux profonds tonifiant raffermissant tissus cutanés pour visage sculpté lifté jeune sans chirurgie invasive coûteuse. Design ergonomique rouge blanc épousant parfaitement contours mâchoire avec électrodes silicone conductrices assurant contact optimal peau transmission impulsions efficaces ciblées uniformes. Rechargeable USB portable avec 3 modes intensité réglables et minuterie automatique 15 minutes séance quotidienne recommandée pour résultats visibles après 4-8 semaines utilisation régulière. Idéal pour femmes hommes 30+ recherchant alternative non-invasive lifting chirurgical pour visage rajeuni ovale redéfini double menton éliminé naturellement économiquement durablement.",
    "price": 159,
    "oldPrice": 239,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771291105/1_lsuykj.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4038,
    "name": "Éponge Bain Douche Gommage Corps Motifs Kawaii - Lot 4 Couleurs Exfoliant Doux Enfants Adultes",
    "description": "Éponges bain douche gommage corps douces exfoliantes motifs kawaii adorables ourson LOVE couleurs pastel rose jaune vert bleu nettoyant peau efficacement délicatement éliminant cellules mortes impuretés peaux ternes quotidiennement. Matière mousse haute densité ultra-douce peau sensible enfants adultes générant abondante mousse savonneuse produit douche shampoing gel nettoyant optimisant efficacité lavage corps hygiène parfaite agréable. Texture exfoliante légère stimulant circulation sanguine cutanée régénération cellulaire peau douce lisse éclatante radieuse uniforme teint lumineux résultats visibles dès première utilisation quotidienne régulière. Format ergonomique prise main confortable massage corps dos épaules jambes bras zones difficiles accès maniabilité parfaite légèreté praticité séchage rapide hygiène optimale salle bain. Lot 4 éponges couleurs assorties cadeau idéal enfants familles trousses voyage anniversaires fêtes Noël utilisation quotidienne agréable ludique colorée transformant douche moment plaisir bien-être.",
    "price": 49,
    "oldPrice": 79,
    "stock": 75,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771327529/1_spnghi.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4039,
    "name": "Présentoir Bijoux Arbre Cerf - Porte Colliers Boucles Oreilles Bagues Plateau Organisateur Luxe",
    "description": "Présentoir bijoux design arbre cerf élégant plateau ovale intégré transformant instantanément coiffeuse bureau chambre espace rangement raffiné sophistiqué luxueux tendance décoration intérieure moderne contemporaine haut gamme quotidiennement. Multiples branches ramifiées grande capacité accrochant facilement colliers chaînes pendentifs boucles oreilles bracelets bagues accessoires précieux organisés visibles accessibles rapidement sans enchevêtrement désordre absolument. Plateau ovale base cerf figurine décorative charmante accueillant bagues clips barrettes petits accessoires bijoux rangement complet centralisé coiffeuse salle bain bureau élégamment pratiquement. Disponible deux coloris chic noir mat sophistiqué élégant blanc pur délicat s'intégrant harmonieusement toutes décorations intérieures modernes contemporaines minimalistes nordiques classiques raffinées féminines. Cadeau parfait femme fille anniversaire fête naissance Saint Valentin mariage présentation luxueuse collection bijoux organisée élégante fonctionnelle esthétique abordable apprécié unanimement assurément.",
    "price": 99,
    "oldPrice": 149,
    "stock": 35,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771494402/2_imlf3k.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771494405/4_udachl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771494405/3_ylhxxh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771494405/1_tde7wi.jpg"
    ],
    "category": "Beauté",
    "rating": "4.7"
  },
  {
    "id": 4040,
    "name": "Brosse Silicone Corps Douche Q Bomb - Gommage Massant Doux Skin-Friendly Multicolore Bain",
    "description": "Brosse corps silicone premium Q bomb skin-friendly fancy kneading second rebound transformant instantanément routine douche bain expérience spa luxueux relaxant gommage massant doux efficace peau douce veloutée éclatante quotidiennement. Silicone alimentaire haute qualité ultra-doux respectueux peau sensible épais résistant déformation pliage sans casser toughness bending without deformation durable longévité garantie utilisation quotidienne familiale sereinement. Picots silicone souples multidirectionnels nettoyant profondément pores éliminant cellules mortes impuretés excès sébum stimulant circulation sanguine raffermissant peau corps massage relaxant agréable efficacement. Dimensions compactes pratiques 12cm x 6.5cm x 5.5cm cordonnière intégrée suspension facile douche salle bain disponible quatre coloris bleu cyan rose violet adapté toute la famille. Cadeau parfait femme homme anniversaire fête soin corps hygiène beauté quotidienne peau douce éclatante saine naturelle fonctionnel esthétique abordable apprécié unanimement assurément.",
    "price": 49,
    "oldPrice": 89,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771494827/1_kd52pq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771494827/2_azmtit.jpg"
    ],
    "category": "Beauté",
    "rating": "4.5"
  },
  {
    "id": 4041,
    "name": "Ceinture Brosse Dos Silicone 60cm - Gommage Massant Rub Out Milky Back Clean Skin Douche Bain",
    "description": "Ceinture brosse dos silicone premium 60cm bath towel rub out milky back clean skin transformant instantanément routine douche bain expérience gommage massant professionnel spa luxueux peau douce veloutée éclatante laiteuse quotidiennement. Picots silicone souples double face nettoyant profondément pores dos éliminant cellules mortes impuretés excès sébum zones inaccessibles stimulant circulation sanguine raffermissant peau corps efficacement naturellement. Double poignée ergonomique antidérapante permettant atteindre facilement tout le dos zones inaccessibles seul autonomie totale douche bain confortablement sereinement sans aide extérieure absolument. Hanging storage saving space design suspension crochets hanging empty easy to hang clean sanitary hygiénique séchage rapide disponible quatre coloris rose cyan bleu violet famille entière. Cadeau parfait femme homme anniversaire fête soin corps hygiène beauté quotidienne peau douce éclatante saine naturelle fonctionnel pratique abordable durable apprécié unanimement assurément.",
    "price": 59,
    "oldPrice": 99,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771495139/4_aq1xcu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495135/3_cmbdyv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495135/2_l8ck0u.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495133/1_lslic0.jpg"
    ],
    "category": "Beauté",
    "rating": "4.6"
  },
  {
    "id": 4042,
    "name": "Brosse Bain Silicone 494 Têtes - Distributeur Gel Douche Intégré Anti-Backflow Gommage Corps",
    "description": "Brosse bain silicone premium 494 brush heads soft silicone bath brush nettoyant parfaitement chaque centimètre peau corps transformant instantanément routine douche expérience gommage massant professionnel spa luxueux peau douce éclatante quotidiennement. Réservoir intégré grande capacité sub-bottling function utilisable une semaine complète rempli une seule fois squeeze out liquid sealed anti-backflow design distributeur gel douche savon liquide pratique économique hygiénique. Dimensions compactes ergonomiques 8.8cm x 8.0cm x 5.7cm prise main confortable antidérapante poignée anneau suspension hygiénique séchage rapide propre sain douche salle bain facilement. Disponible trois coloris pastel tendance jaune citron rose doux turquoise menthe s'adaptant toutes salles bains modernes contemporaines féminines enfants famille entière quotidiennement sereinement. Cadeau parfait femme enfant anniversaire fête soin corps hygiène beauté quotidienne peau douce éclatante saine naturelle fonctionnel esthétique abordable durable apprécié unanimement assurément.",
    "price": 49,
    "oldPrice": 89,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771495523/5_wefvhr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495517/2_fcbf8v.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495518/3_gxi3pv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495525/4_kzzpqp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495517/1_dz3ar6.jpg"
    ],
    "category": "Beauté",
    "rating": "4.4"
  },
  {
    "id": 4043,
    "name": "Brosse Massage Électrique Corps Douche - Full Body Waterproof 3 Têtes Interchangeables Long Manche",
    "description": "Brosse massage électrique corps douche premium electric massage bath brush full body waterproof transformant instantanément routine bain douche expérience spa luxueux gommage massant professionnel peau douce veloutée éclatante quotidiennement. Trois têtes interchangeables incluses brosse souple nettoyage doux brosse exfoliante gommage profond éponge massage relaxant adaptant parfaitement chaque zone corps besoins peau sensible normale mixte absolument. Long manche ergonomique atteignant facilement dos zones inaccessibles seul autonomie totale douche bain waterproof résistant eau immersion totale utilisation sécurisée confortable sereine durablement. Disponible trois coloris élégants orange vif rose doux gris moderne s'adaptant toutes salles bains contemporaines féminines design poignée antidérapante suspension accrochage facile hygiénique. Cadeau parfait femme anniversaire fête soin corps beauté quotidienne peau douce éclatante saine naturelle fonctionnel esthétique pratique abordable durable apprécié unanimement assurément.",
    "price": 149,
    "oldPrice": 229,
    "stock": 31,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771496522/1_ggeuu8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771496524/2_uraoek.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771496526/3_qhwzvf.jpg"
    ],
    "category": "Beauté",
    "rating": "4.8"
  },
  {
    "id": 4101,
    "name": "Peigne Électrique Anti-Poux V-Comb - Aspirateur Poux et Lentes Sans Produits",
    "description": "Peigne électrique anti-poux V-Comb blanc et bleu avec système d'aspiration innovant capturant poux et lentes vivants dans cartouche jetable transparente. Design ergonomique sans fil avec bouton de contrôle bleu et peigne à dents fines en acier inoxydable hypoallergénique. Solution 100% naturelle sans produits chimiques pour traitement efficace des cheveux enfants et adultes avec résultats visibles immédiats. Technologie d'aspiration douce et sécurisée éliminant poux, lentes et œufs directement capturés dans réservoir amovible facile à nettoyer. Idéal pour familles recherchant alternative saine aux shampoings anti-poux avec utilisation illimitée réutilisable et économique.",
    "price": 189,
    "oldPrice": 259,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771062032/1_mfsrux.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771062038/2_hn3dkm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771062060/3_hmbkbm.jpg"
    ],
    "category": "Santé",
    "rating": "4.6"
  },
  {
    "id": 4102,
    "name": "Masseur Cuir Chevelu Électrique 3D - Appareil Massage Tête Anti-Stress Relaxant",
    "description": "Masseur électrique cuir chevelu 3D avec griffes métalliques flexibles imitant massage manuel professionnel pour soulagement tensions, stress et stimulation circulation sanguine capillaire. Design innovant blanc avec bras articulés 360 degrés s'adaptant parfaitement à toutes formes de tête pour massage relaxant profond du cuir chevelu. Technologie vibration douce et pression naturelle favorisant détente immédiate, réduction migraines et promotion pousse cheveux par stimulation follicules pileux efficacement. Appareil portable sans fil rechargeable pour utilisation maison, bureau ou voyage avec effet anti-stress instantané et sensation spa relaxante quotidienne. Idéal pour hommes et femmes souffrant tensions cervicales, stress professionnel ou recherchant moment bien-être avec massage crânien professionnel automatique confortable.",
    "price": 149,
    "oldPrice": 219,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771063015/1_sz5ehu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771063022/2_wy16ec.jpg"
    ],
    "category": "Santé",
    "rating": "4.5"
  },
  {
    "id": 4103,
    "name": "Détartreur Dentaire Électrique Ultrasonique - Nettoyeur Tartre et Plaque Rechargeable USB",
    "description": "Détartreur dentaire électrique à ultrasons pour éliminer efficacement le tartre, la plaque dentaire, les tâches de café, thé et tabac à domicile. Technologie vibration ultrasonique haute fréquence pour un nettoyage professionnel en douceur sans abîmer l'émail des dents ni irriter les gencives. Disponible en 2 coloris pastel tendance : bleu ciel et rose avec tête en acier inoxydable médical et 3 modes d'intensité réglables. Rechargeable par USB avec batterie longue durée, compact et portable pour utilisation quotidienne maison ou en voyage avec résultats visibles immédiatement. Idéal pour homme et femme recherchant hygiène bucco-dentaire optimale avec sourire éclatant et dents blanches propres sans visite chez le dentiste.",
    "price": 139,
    "oldPrice": 199,
    "stock": 52,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771269675/1_r6sphh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771269707/2_rxahv0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771269712/3_uosb6r.jpg"
    ],
    "category": "Santé",
    "rating": "4.7"
  },
  {
    "id": 4104,
    "name": "Oxymètre de Pouls Digital - Saturomètre Mesure Oxygène Sanguin et Fréquence Cardiaque",
    "description": "Oxymètre de pouls professionnel bleu et blanc avec écran OLED pour mesure précise et instantanée de la saturation en oxygène (SpO2) et du rythme cardiaque. Technologie de détection par capteur infrarouge non-invasive, il suffit de placer le doigt dans l'appareil pour obtenir des résultats fiables en quelques secondes. Affichage numérique multicolore clair avec plusieurs modes de visualisation pour lecture facile des données vitales même en faible luminosité. Compact, léger et portable avec arrêt automatique pour économie d'énergie, fonctionne sur piles pour usage maison, voyage ou sport. Idéal pour personnes asthmatiques, sportifs, seniors ou toute personne souhaitant surveiller leur santé respiratoire et cardiaque quotidiennement avec précision médicale.",
    "price": 89,
    "oldPrice": 139,
    "stock": 60,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771272179/1_keekca.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771272209/2_kvyobw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771272223/3_c2jusk.jpg"
    ],
    "category": "Santé",
    "rating": "4.8"
  },
  {
    "id": 4105,
    "name": "Bouillotte Eau Chaude Thérapeutique 2L - Chauffe-Main Soulagement Douleurs Menstruelles",
    "description": "Bouillotte en caoutchouc naturel avec housse douce motifs agrumes turquoise pour soulager douleurs menstruelles, crampes abdominales et tensions musculaires efficacement. Capacité généreuse 2 litres gardant la chaleur jusqu'à 6 heures pour un confort prolongé pendant sommeil, repos ou moments de détente. Housse lavable en tissu doux protégeant la peau des brûlures avec design coloré et gai apportant réconfort visuel et bien-être. Utilisation polyvalente pour règles douloureuses, maux de dos, arthrite, pieds froids ou simple relaxation par thermothérapie naturelle sans médicaments. Idéale pour femmes recherchant solution naturelle anti-douleur réutilisable économique et écologique pour soulagement immédiat crampes et tensions quotidiennes.",
    "price": 49,
    "oldPrice": 79,
    "stock": 70,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771273535/1_fojadg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771273548/2_vp1xat.jpg"
    ],
    "category": "Santé",
    "rating": "4.4"
  },
  {
    "id": 4106,
    "name": "Canne de Marche Pliable LED avec Lampe Torche - Bâton Ajustable Anti-Chute Seniors",
    "description": "Canne de marche ergonomique multifonction avec lampe LED intégrée pour éclairage nocturne sécurisé et autonomie totale des seniors et personnes à mobilité réduite. Hauteur ajustable facilement avec système de verrouillage fiable, poignée antidérapante confortable pivotante réduisant fatigue poignet et articulations lors des déplacements. Base antidérapante rotative 360° ultra-stable avec embout caoutchouc adhérent sur tous types de sols pour prévention des chutes et équilibre optimal. Design pliable compact se rangeant dans un sac pour transport facile en voyage, avec lampe torche LED puissante éclairant le chemin. Idéale pour seniors, personnes âgées ou en rééducation recherchant aide à la marche sûre, pratique et autonome avec éclairage intégré rassurant.",
    "price": 129,
    "oldPrice": 189,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771273792/1_icln7m.jpg"
    ],
    "category": "Santé",
    "rating": "4.6"
  },
  {
    "id": 4107,
    "name": "Masseur Cervical Électrique Intelligent - Appareil Massage Nuque Épaules Rechargeable USB",
    "description": "Masseur cervical électrique multifonction avec technologie impulsion électrique et chaleur infrarouge pour soulagement rapide douleurs nuque, cervicales et tensions épaules. Design ergonomique portable blanc et doré s'adaptant parfaitement aux contours du cou avec 6 modes de massage et 15 niveaux d'intensité réglables. Fonction chauffante apaisante combinée aux impulsions TENS pour détente musculaire profonde, amélioration circulation sanguine et relaxation instantanée après longues journées. Rechargeable USB sans fil pour utilisation maison, bureau ou voyage avec télécommande contrôle facile et arrêt automatique sécurisé après 15 minutes. Idéal pour personnes souffrant migraines, torticolis, stress professionnel ou tensions cervicales chroniques recherchant soulagement naturel efficace sans médicaments quotidiennement.",
    "price": 169,
    "oldPrice": 249,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771274032/1_anzzkv.jpg"
    ],
    "category": "Santé",
    "rating": "4.7"
  },
  {
    "id": 4108,
    "name": "Correcteur Posture Dos Épaules Ajustable - Redresse-Dos Orthopédique Invisible Unisexe",
    "description": "Correcteur de posture orthopédique blanc discret se portant sous vêtements pour redresser dos voûté, aligner épaules et soulager douleurs dorsales chroniques. Design ergonomique ajustable avec sangles velcro confortables tirant épaules vers arrière pour maintien colonne vertébrale position naturelle toute la journée. Matériau respirant léger lavable en machine conçu pour usage prolongé bureau, maison ou sport sans irritation ni gêne cutanée quotidienne. Taille unique ajustable convenant hommes et femmes de toutes morphologies avec tension modulable selon niveau correction souhaité progressivement. Idéal pour personnes travail sédentaire, posture affaissée, douleurs cervicales ou dorsales recherchant rééducation posturale passive efficace avec résultats durables visibles.",
    "price": 79,
    "oldPrice": 129,
    "stock": 55,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771278983/1_qodn7v.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771278997/2_rwf6io.jpg"
    ],
    "category": "Santé",
    "rating": "4.5"
  },
  {
    "id": 4109,
    "name": "Coussin Masseur Cervical Chauffant Électrique - Oreiller Massage Shiatsu Nuque Épaules",
    "description": "Coussin masseur cervical électrique avec fonction chauffante infrarouge et massage shiatsu rotatif pour soulagement profond douleurs nuque, cervicales, épaules et tensions musculaires. Technologie pétrissage 3D avec 8 têtes de massage rotatives imitant massage manuel professionnel pour détente instantanée et amélioration circulation sanguine efficace. Fonction chauffante réglable apportant chaleur apaisante combinée au massage pour relaxation maximale muscles contractés et raideurs après longues journées stressantes. Design ergonomique confortable marron avec housse amovible lavable, télécommande contrôle facile et arrêt automatique sécurisé après 15 minutes d'utilisation. Idéal pour utilisation maison lit canapé, bureau chaise ou voiture avec adaptateur allume-cigare pour relaxation anti-stress quotidienne partout facilement.",
    "price": 199,
    "oldPrice": 299,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771279104/1_lepxkw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771279121/2_bao4pn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771279131/3_bpmq3u.jpg"
    ],
    "category": "Santé",
    "rating": "4.8"
  },
  {
    "id": 4110,
    "name": "Correcteur Posture Dos Lombaire Orthopédique - Ceinture Maintien Colonne Support Magnétique",
    "description": "Correcteur posture orthopédique complet noir avec double fonction : redressement épaules et soutien lombaire pour soulagement douleurs dos, cervicales et amélioration posture globale. Design renforcé avec baleines rigides verticales maintenant colonne vertébrale alignée, sangle abdominale ajustable compressant zone lombaire pour protection maximale durant efforts physiques. Tissu respirant mesh aéré avec aimants thérapeutiques intégrés stimulant circulation sanguine, réduisant inflammation et accélérant récupération musculaire naturellement sans médicaments. Sangles croisées ajustables tirageant épaules arrière pour correction posture assise bureau, debout ou sport avec confort optimal toute journée sans gêne. Idéal pour hommes femmes souffrant lombalgie, hernie discale, sciatique, scoliose ou mauvaise posture recherchant support médical efficace prévention blessures dos quotidien.",
    "price": 129,
    "oldPrice": 189,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771279366/1_ezpkjh.jpg"
    ],
    "category": "Santé",
    "rating": "4.6"
  },
  {
    "id": 4111,
    "name": "Chaussons Silicone Hydratants Talons Fissurés - Protège-Talons Gel Réparateur Anti-Crevasses",
    "description": "Paire de chaussons protecteurs en silicone médical transparent blanc pour hydrater, réparer et adoucir les talons secs, fissurés et crevassés naturellement. Gel silicone enrichi en vitamines E emprisonnant l'humidité naturelle de la peau pour cicatrisation rapide des fissures et crevasses profondes douloureuses. Design anatomique souple et confortable se portant jour et nuit avec chaussettes ou pieds nus pour traitement intensif continu efficace. Réutilisables et lavables à l'eau tiède savonneuse, durables plusieurs mois avec résultats visibles dès premières semaines d'utilisation régulière quotidienne. Idéal pour personnes souffrant talons rugueux, calleux, douloureux ou diabète recherchant solution douce non-invasive pour pieds lisses et sains durablement.",
    "price": 49,
    "oldPrice": 79,
    "stock": 65,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771279649/1_bpsha6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771279664/2_nrakqw.jpg"
    ],
    "category": "Santé",
    "rating": "4.4"
  },
  {
    "id": 4112,
    "name": "Tapis Masseur Pieds EMS Électrique - Stimulateur Circulation Sanguine Rechargeable",
    "description": "Tapis masseur pieds électrique EMS avec technologie électrostimulation musculaire soulageant douleurs plantaires, améliorant circulation sanguine et réduisant fatigue jambes lourdes efficacement. Design ergonomique avec surface texturée acupression ciblant points réflexes plantaires combinée impulsions électriques pour relaxation profonde et bien-être immédiat quotidien. Écran LCD affichant 8 modes massage différents et 19 niveaux intensité réglables adaptés besoins individuels avec télécommande contrôle facile confortable. Rechargeable USB portable pliable se rangeant facilement pour utilisation maison bureau voyage avec arrêt automatique sécurisé après 25 minutes session massage. Idéal pour personnes debout longtemps, diabétiques, circulation pauvre, pieds douloureux ou recherchant détente relaxation thérapeutique pieds jambes sans effort quotidiennement.",
    "price": 159,
    "oldPrice": 239,
    "stock": 39,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771281164/1_m7k1um.jpg"
    ],
    "category": "Santé",
    "rating": "4.7"
  },
  {
    "id": 4113,
    "name": "Semelles Silicone Gel Orthopédiques - Coussinets Avant-Pieds Anti-Douleur Invisible",
    "description": "Paire de coussinets avant-pieds en silicone gel médical transparent chair soulageant douleurs métatarses, orteils, cors et durillons durant marche prolongée. Design anatomique invisible ultra-fin se glissant discrètement dans chaussures plates, talons ou baskets pour amortissement chocs et répartition pression uniformément. Gel souple respirant avec micro-perforations antidérapantes empêchant glissement pied dans chaussure tout en évitant transpiration excessive désagréable quotidienne. Réutilisables lavables à l'eau tiède savonneuse conservant propriétés amortissantes plusieurs mois avec protection zones sensibles avant-pieds confort maximal. Idéal pour femmes portant talons hauts, personnes debout longtemps, marcheurs ou souffrant douleurs plantaires métatarsales recherchant soulagement immédiat durable.",
    "price": 39,
    "oldPrice": 69,
    "stock": 75,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771281584/1_c6fzsq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771281595/2_urr3an.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771281606/3_tgkfda.jpg"
    ],
    "category": "Santé",
    "rating": "4.5"
  },
  {
    "id": 4114,
    "name": "Débardeur Gaine Amincissant ComfySlim - Corset Minceur Ventre Plat Post-Partum",
    "description": "Débardeur gainant minceur ComfySlim chair ou noir avec compression abdominale progressive sculptant instantanément silhouette pour taille affinée et ventre plat visible immédiatement. Triple action : compression zone abdominale réduisant tour de taille, soutien dos améliorant posture et effet push-up poitrine pour silhouette féminine harmonieuse. Tissu respirant élastique confortable avec agrafes ajustables centrales permettant compression personnalisée selon morphologie et niveau fermeté souhaité quotidiennement. Invisible sous vêtements discret se portant toute journée bureau maison sport pour résultats sculptants durables combinés alimentation équilibrée exercice régulier. Idéal pour femmes post-partum, perte poids récente ou recherchant silhouette affinée instantanée avec maintien confortable sans gêne respiratoire quotidienne.",
    "price": 89,
    "oldPrice": 139,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771281823/1_uzmu37.jpg"
    ],
    "category": "Santé",
    "rating": "4.4"
  },
  {
    "id": 4115,
    "name": "Culotte Gainante Taille Haute Sculptante - Short Minceur Fesses Galbées Ventre Plat",
    "description": "Culotte gainante taille haute chair ou noir avec compression ciblée sculptant instantanément silhouette pour ventre plat, fesses galbées et cuisses affinées visiblement. Double couche tissu élastique respirant haute compression abdominale aplatie bourrelets tout en remontant fessiers naturellement pour silhouette sculptée harmonieuse immédiate. Design sans coutures invisible sous vêtements avec jambes courtes anti-frottements cuisses empêchant irritations durant marche ou mouvements quotidiens toute journée confortablement. Taille extra-haute gainant jusqu'aux côtes pour maintien ventre complet post-partum ou après perte poids avec élasticité permettant respiration aisée sans oppression. Idéale pour femmes recherchant lingerie sculptante quotidienne sous robes, jupes, pantalons pour confiance silhouette affinée instantanée avec confort maximum durable.",
    "price": 69,
    "oldPrice": 109,
    "stock": 58,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771282168/1_rsfniw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771282175/2_df7kuw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771282190/3_iq2xqe.jpg"
    ],
    "category": "Santé",
    "rating": "4.5"
  },
  {
    "id": 4116,
    "name": "Coussin Orthopédique Jambes Ergonomique - Oreiller Genoux Mousse Mémoire Forme Sommeil",
    "description": "Coussin orthopédique ergonomique en mousse mémoire de forme se plaçant entre genoux pour alignement colonne vertébrale et soulagement douleurs dos, hanches, sciatique durant sommeil. Design papillon blanc avec housse lavable amovible respirante maintenant jambes position optimale latérale réduisant pression articulations et améliorant circulation sanguine nocturne naturellement. Mousse haute densité s'adaptant parfaitement morphologie jambes sans s'affaisser pour support stable confortable toute nuit sans glissement ni inconfort durant mouvements sommeil. Recommandé femmes enceintes, personnes souffrant lombalgie, sciatique, arthrose genou ou hanche pour repos réparateur sans douleurs matinales avec récupération musculaire optimale. Idéal pour dormeurs latéraux recherchant amélioration qualité sommeil avec accessoire orthopédique thérapeutique soulageant tensions corporelles durablement chaque nuit efficacement.",
    "price": 99,
    "oldPrice": 149,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771284050/1_c1csnr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284060/2_lq36h2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284072/3_i3vsxy.jpg"
    ],
    "category": "Santé",
    "rating": "4.7"
  },
  {
    "id": 4117,
    "name": "Masseur Électrique Infrarouge Magic 10-en-1 - Appareil Massage Corps Rechargeable",
    "description": "Masseur électrique multifonction Magic 10-en-1 rouge avec technologie infrarouge chauffante et 10 têtes interchangeables pour massage complet corps cou dos jambes pieds. Kit complet incluant têtes massage différentes : pétrissage profond, acupression, drainage lymphatique, cellulite, relaxation musculaire avec intensités vibrations réglables progressives adaptées. Fonction chauffage infrarouge thérapeutique pénétrant muscles profondément soulageant douleurs tensions courbatures chroniques améliorant circulation sanguine récupération musculaire naturellement efficacement. Rechargeable sans fil portable léger ergonomique avec poignée antidérapante confortable permettant auto-massage ciblé zones douloureuses sans aide tierce personne quotidiennement maison. Idéal pour sportifs personnes stressées fatiguées douleurs musculaires chroniques recherchant relaxation profonde thérapeutique spa maison économique sans massothérapeute coûteux régulièrement.",
    "price": 169,
    "oldPrice": 249,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771290795/1_rbv32t.jpg"
    ],
    "category": "Santé",
    "rating": "4.7"
  },
  {
    "id": 4201,
    "name": "Écouteurs Sport Bluetooth 5.0 Sans Fil - Oreillettes Intra-Auriculaires Waterproof IPX5",
    "description": "Écouteurs Bluetooth 5.0 sans fil sport avec design intra-auriculaire ergonomique anti-transpiration et anti-glisse pour maintien parfait pendant l'exercice intense. Certification étanche IPX5 résistant à la sueur et aux éclaboussures pour utilisation sécurisée pendant running, gym, cyclisme ou entraînement extérieur. Son stéréo haute qualité avec basses profondes et isolation phonique pour une expérience audio immersive durant vos séances sportives. Batterie longue durée offrant plusieurs heures d'autonomie avec étui de charge compact pour recharges multiples en déplacement facilement. Idéal pour sportifs et athlètes recherchant écouteurs fiables, confortables et résistants avec connectivité stable Bluetooth 5.0 sans interruption pendant l'effort.",
    "price": 149,
    "oldPrice": 219,
    "stock": 55,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771273034/1_o07tjs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771273048/2_vusunl.jpg"
    ],
    "category": "Sport",
    "rating": "4.6"
  },
  {
    "id": 4202,
    "name": "Genouillère Orthopédique Sport Compression 3D - Attelle Genou Rotulienne Ajustable",
    "description": "Genouillère orthopédique professionnelle avec compression 3D tissée et sangles ajustables pour maintien optimal rotule, ligaments et articulation du genou. Technologie compression graduée avec coussinets silicone antidérapants stabilisant rotule pour prévention blessures et soulagement douleurs articulaires pendant sport et activités. Tissu respirant anti-transpiration avec design ergonomique anatomique épousant parfaitement le genou sans glisser durant mouvements intenses running, fitness ou musculation. Double sangle velcro réglable permettant ajustement personnalisé compression selon morphologie et niveau soutien souhaité pour confort maximal toute la journée. Idéale pour sportifs, personnes arthrose, récupération post-opératoire ou toute personne souffrant douleurs genou recherchant protection efficace et mobilité préservée.",
    "price": 89,
    "oldPrice": 139,
    "stock": 62,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771277661/1_hl53lp.jpg"
    ],
    "category": "Sport",
    "rating": "4.7"
  },
  {
    "id": 4203,
    "name": "Tummy Trimmer - Appareil Abdominaux Ressort Double Pédale Fitness Maison",
    "description": "Appareil de musculation abdominaux Tummy Trimmer avec double pédale antidérapante et ressorts résistance robustes pour sculpter ventre plat, tonifier abdos et renforcer muscles centraux. Système de traction bidirectionnel ciblant abdominaux supérieurs, inférieurs, obliques, bras, jambes et dos simultanément pour entraînement complet efficace à domicile. Poignées mousse ergonomiques confortables et pédales texturées larges assurant stabilité optimale pendant exercices variés assis ou allongé sur tapis yoga. Compact, portable et léger se rangeant facilement sous lit ou dans placard pour fitness quotidien sans encombrement ni abonnement salle sport. Idéal pour hommes et femmes recherchant solution économique perdre graisse abdominale, affiner taille et améliorer force core avec résultats visibles rapidement.",
    "price": 79,
    "oldPrice": 119,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771278008/1_nqem0n.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771278031/2_mzefj6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771278046/3_h157bi.jpg"
    ],
    "category": "Sport",
    "rating": "4.5"
  },
  {
    "id": 4204,
    "name": "Appareil Fitness 5-en-1 Multifonction - Ab Roller, Push-Up Bars, Élastiques Musculation",
    "description": "Équipement fitness complet 5-en-1 rouge et noir transformable en roue abdominaux, barres push-up, élastiques résistance et support multifonction pour entraînement total corps. Système modulaire innovant avec roues arrière amovibles convertissant l'appareil selon exercices souhaités : abdos, pompes, tractions, musculation bras et jambes variés. Construction robuste antidérapante avec poignées ergonomiques mousse confort et stabilité maximale sur tous types de sols pour sécurité optimale durant exercices intenses. Kit complet incluant élastiques résistance ajustables, instructions d'assemblage et guide exercices pour débutants et sportifs confirmés recherchant polyvalence entraînement maison. Idéal pour hommes et femmes souhaitant équipement gym complet économique gain de place remplaçant plusieurs appareils avec résultats rapides tonification musculaire globale.",
    "price": 189,
    "oldPrice": 279,
    "stock": 35,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771278376/1_kudqmj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771278384/2_jtqnl3.jpg"
    ],
    "category": "Sport",
    "rating": "4.8"
  },
  {
    "id": 4205,
    "name": "Bandes Élastiques Fitness Résistance Set 3 - Booty Bands Musculation Fessiers Jambes",
    "description": "Set de 3 bandes élastiques fitness résistance progressive rose, turquoise et violet pour musculation fessiers, cuisses, jambes et tonification corps complet. Tissu antidérapant haute qualité ne roulant pas ni glissant durant exercices squats, fentes, ponts fessiers et mouvements latéraux intenses pour résultats optimaux. Trois niveaux résistance adaptés débutants à confirmés permettant progression entraînement et ciblage précis groupes musculaires avec activation musculaire maximale garantie. Légères, portables et compactes dans pochette de transport pour entraînement maison, gym, parc ou voyage sans encombrement avec polyvalence exercices illimitée. Idéales pour femmes recherchant sculpter fessiers bombés, affiner cuisses, éliminer cellulite et renforcer bas du corps avec programme fitness efficace économique.",
    "price": 59,
    "oldPrice": 99,
    "stock": 70,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771278578/1_qwhbir.jpg"
    ],
    "category": "Sport",
    "rating": "4.6"
  },
  {
    "id": 4206,
    "name": "Hula Hoop Intelligent Auto-Rotation Compteur - Cerceau Fitness Amincissant Massage Taille",
    "description": "Hula hoop intelligent nouvelle génération avec boule rotative automatique orange et compteur digital LCD affichant calories, tours et durée d'entraînement précisément. Cerceau ajustable noir et orange à segments modulables s'adaptant à toutes morphologies avec rotation 360° fluide sans tomber grâce au système gravitationnel. Boule de massage lestée stimulant abdominaux, taille, hanches et dos pour brûler graisses abdominales, tonifier muscles obliques et affiner silhouette efficacement. Technologie anti-chute maintenant cerceau en mouvement constant autour taille même pour débutants sans coordination hula hoop traditionnel difficile. Idéal pour femmes et hommes recherchant exercice cardio ludique maison pour perdre poids, sculpter taille de guêpe et s'amuser tout en brûlant calories quotidiennement.",
    "price": 119,
    "oldPrice": 179,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771279952/1_qqnyeq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771279966/2_kfnblb.jpg"
    ],
    "category": "Sport",
    "rating": "4.4"
  },
  {
    "id": 4207,
    "name": "Élastique Fitness Pédale Résistance 4 Tubes - Appareil Abdos Bras Jambes Multifonction",
    "description": "Appareil de fitness multifonction avec double pédale antidérapante et 4 tubes élastiques résistance pour musculation complète abdos, bras, jambes, dos et épaules à domicile. Disponible en 4 couleurs vives : jaune, rouge, violet et vert avec poignées mousse ergonomiques confortables assurant prise ferme durant exercices intenses variés. Système de traction renforcé quadruple offrant résistance progressive ajustable pour tonification musculaire, renforcement core et brûlage calories efficace sans équipement encombrant. Portable, léger et compact se rangeant facilement dans tiroir ou sac pour entraînement maison, bureau ou voyage avec polyvalence exercices ciblant tous groupes musculaires. Idéal pour hommes et femmes tous niveaux recherchant solution fitness économique tout-en-un pour sculpter silhouette, perdre poids et améliorer force.",
    "price": 69,
    "oldPrice": 109,
    "stock": 58,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771280183/1_sno7k4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771280197/2_ztcv29.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771280210/3_y4tuqh.jpg"
    ],
    "category": "Sport",
    "rating": "4.5"
  },
  {
    "id": 4208,
    "name": "Ceinture Abdominale Électrostimulation EMS - Electro Stimulateur Musculaire Toning Belt",
    "description": "Ceinture abdominale électrostimulation musculaire EMS avec 6 programmes d'entraînement et 10 niveaux d'intensité pour tonifier, sculpter et renforcer abdos sans effort. Technologie stimulation électrique ciblant muscles abdominaux, obliques et lombaires par impulsions imitant contractions musculaires naturelles pour résultats ventre plat visibles. Pad central avec électrodes multiples délivrant micro-courants indolores stimulant fibres musculaires profondément durant TV, lecture ou repos pour séance passive efficace. Rechargeable USB portable discret sous vêtements avec télécommande contrôle facile programmes, intensité et arrêt automatique après 15 minutes sécurisé. Idéal pour hommes et femmes souhaitant abdos sculptés, taille affinée et muscles renforcés sans sport intensif avec technologie fitness paresseuse innovante.",
    "price": 149,
    "oldPrice": 219,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771280518/1_eihqsl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771280530/2_h7ylph.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771280542/3_j6mnxh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771280581/4_h9mtml.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771280582/5_wol4oi.jpg"
    ],
    "category": "Sport",
    "rating": "4.7"
  },
  {
    "id": 4209,
    "name": "BodyGym Barre Résistance Portable - Kit Fitness Complet 100+ Exercices Marie Osmond",
    "description": "Barre de résistance portable BodyGym avec élastiques intégrés pour entraînement complet corps entier 100+ exercices différents en seulement 9 minutes par jour. Système révolutionnaire breveté combinant barre flexible résistance progressive et guide visuel d'entraînement pour tonifier, sculpter et raffermir tous groupes musculaires efficacement. Convient débutants à athlètes confirmés avec résistance ajustable remplaçant salle gym complète pour musculation bras, jambes, abdos, dos et épaules à domicile. Ultra-portable léger se rangeant dans sac voyage pour entraînement maison, bureau, parc ou hôtel avec plus de 1 million d'unités vendues mondialement. Idéal pour hommes et femmes recherchant solution fitness tout-en-un économique gain de place avec programme Marie Osmond pour transformation physique rapide garantie.",
    "price": 189,
    "oldPrice": 279,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771280792/1_anamw2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771280806/2_grf89s.jpg"
    ],
    "category": "Sport",
    "rating": "4.8"
  },
  {
    "id": 4210,
    "name": "Poignées Push-Up Musculation - Barres Pompes Antidérapantes Rotation 360° Fitness",
    "description": "Paire de poignées push-up professionnelles avec base antidérapante et rotation 360° pour pompes ergonomiques renforçant pectoraux, triceps, épaules et abdos efficacement. Design ergonomique réduisant pression poignets et augmentant amplitude mouvement pour musculation profonde ciblée avec confort optimal durant séries intenses longues. Poignées mousse dense confortables avec structure robuste supportant jusqu'à 150kg pour stabilité maximale sur tous types de sols durant entraînement quotidien. Compactes portables légères se rangeant facilement sous lit ou dans placard pour fitness maison sans encombrement avec résultats muscles pectoraux sculptés. Idéales pour hommes et femmes tous niveaux recherchant renforcement haut du corps avec pompes variées inclinées, déclinées ou classiques pour développement musculaire complet.",
    "price": 59,
    "oldPrice": 99,
    "stock": 65,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771280980/1_tjh8tv.jpg"
    ],
    "category": "Sport",
    "rating": "4.5"
  },
  {
    "id": 4211,
    "name": "Ceinture Gainante Abdominale Sport - Waist Trainer Double Sangle Néoprène Transpiration",
    "description": "Ceinture abdominale sport double sangle néoprène avec compression 360° pour affiner taille, brûler graisses abdominales et soutenir dos durant entraînement intensif quotidien. Design renforcé avec triple bande élastique ajustable et velcro large haute adhérence assurant maintien ferme sans glissement pendant sport, fitness ou activités quotidiennes. Matériau néoprène thermogène augmentant transpiration zone abdominale accélérant élimination toxines et eau pour résultats ventre plat visibles combinés exercice régulier alimentation équilibrée. Disponible en plusieurs coloris : noir uni, gris chiné, avec double rangée agrafes pour compression personnalisée selon morphologie et niveau fermeté souhaité. Idéale pour femmes recherchant taille de guêpe, soutien lombaire sport, post-partum ou récupération abdominoplastie avec effet sauna sculptant intensif efficace.",
    "price": 99,
    "oldPrice": 149,
    "stock": 52,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771282471/1_ebkju3.jpg"
    ],
    "category": "Sport",
    "rating": "4.6"
  },
  {
    "id": 4212,
    "name": "Gourde Pliable Silicone Camouflage 500ml - Bouteille Rétractable Sport Voyage Randonnée Légère Étanche",
    "description": "Gourde pliable silicone alimentaire certifiée 500ml motif camouflage militaire tendance se repliant compactement moitié taille originale glissant facilement poche sac sport randonnée voyage camping sans encombrement quotidien. Silicone alimentaire haute qualité sans BPA résistant températures extrêmes -25°C à +150°C compatible boissons froides glacées chaudes thé café jus sodas utilisation quatre saisons toutes conditions climatiques. Bouchon hermétique sécurisé verrouillage clic étanche évitant fuites déversements sac affaires boucle anneau accrochage mousqueton sac à dos ceinture vélo running accessoire outdoor indispensable. Légèreté exceptionnelle silicone flexible indestructible résistant chocs compressions torsions lavable lave-vaisselle hygiène optimale entretien facile rapide longévité garantie utilisation intensive quotidienne sportive. Cadeau idéal sportifs randonneurs voyageurs militaires aventuriers personnes actives soucieuses hydratation économique écologique remplaçant bouteilles plastique jetables polluantes résultats satisfaction garantis immédiatement.",
    "price": 89,
    "oldPrice": 139,
    "stock": 55,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771341868/1_xfr3yo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771341884/2_xvcljp.jpg"
    ],
    "category": "Sport",
    "rating": "4.5"
  },
  {
    "id": 4301,
    "name": "Mini Ventilateur Portable USB Rechargeable - Éventail de Poche Design Mignon 3 Vitesses",
    "description": "Mini ventilateur portable rechargeable USB design adorable avec oreilles décoratives disponible en 3 couleurs pastel tendance : rose, vert et bleu turquoise. Compact ultra-léger se tenant facilement dans la main ou se posant sur bureau avec base stable pour rafraîchissement instantané partout maison, bureau, voyage ou extérieur. Technologie silencieuse 3 vitesses ventilation ajustables avec batterie rechargeable longue durée offrant plusieurs heures autonomie par charge USB pratique rapide. Design mignon kawaii parfait cadeau fille femme avec efficacité refroidissement surprenante malgré taille compacte pour chaleur été insupportable soulagement immédiat. Idéal pour étudiantes, bureau climatisation insuffisante, voyage avion train voiture, camping festival ou toute situation nécessitant ventilation portable économique écologique réutilisable.",
    "price": 49,
    "oldPrice": 79,
    "stock": 72,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771284499/1_hohbwl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284509/2_jclgtl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284524/3_ci9auu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284534/4_nggjrc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284545/5_vuii0t.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 4302,
    "name": "Localisateur Clés Porte-Clés Anti-Perte Bluetooth - Traceur Objets Télécommande Sifflet",
    "description": "Porte-clés anti-perte intelligent rouge avec localisateur Bluetooth et télécommande sans fil retrouvant instantanément clés portefeuille sac téléphone objets perdus maison bureau voiture. Système bidirectionnel : appuyer télécommande fait sonner porte-clés attaché objet, ou appuyer bouton porte-clés fait sonner télécommande pour retrouver mutuellement facilement rapidement. Son alarme strident 80-100 décibels audible jusqu'à 30 mètres portée avec signal sonore visuel LED clignotant localisation précise rapide même obscurité totale nocturne. Compact ultra-léger s'attachant facilement trousseau clés sac animal domestique enfants personnes âgées avec pile remplaçable longue durée autonomie plusieurs mois utilisation intensive. Idéal pour personnes étourdies perdant fréquemment clés téléphone cherchant solution économique stress quotidien objets égarés avec gain temps nerfs considérable évident immédiat.",
    "price": 39,
    "oldPrice": 69,
    "stock": 68,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771291387/1_zy9bbw.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 4303,
    "name": "Lampe Lecture LED Tour de Cou Flexible - Lumière Mains Libres Camping Tricot BBQ Nuit Polyvalente",
    "description": "Lampe lecture LED tour de cou flexible mains libres transformant instantanément lecture nocturne chambre canapé camping barbecue promenade nuit atelier bricolage tricot couture expérience lumineuse confortable pratique autonome quotidiennement. Double LED puissante éclairage directionnel précis illuminant parfaitement livre page travail manuel zone ciblée mains totalement libres sans tenir lampe torche autonomie complète confort absolu sereinement. Col flexible ajustable orientant lumière précisément direction souhaitée lecture lit chambre obscure partenaire sommeil non dérangé lumière ciblée discrète intimité respectée confortablement quotidiennement absolument. Multifonction polyvalent lecture nuit lit canapé cheminée camping promenade chien nuit barbecue atelier bricolage tricot couture travaux précision toutes situations obscurité partout facilement. Cadeau parfait lecteur passionné bricoleur campeur randonneur senior enfant anniversaire fête fonctionnel pratique économique léger compact portable apprécié unanimement assurément quotidiennement.",
    "price": 69,
    "oldPrice": 119,
    "stock": 34,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771499591/1_xdakka.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771499593/2_rcwfjb.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 4304,
    "name": "Lampe Solaire Street Lamp 8000K - Détecteur Mouvement Radar Télécommande Eclairage Extérieur",
    "description": "Lampe solaire street lamp LED 8000K puissance éclairage extérieur révolutionnaire panneau solaire intégré rechargeant automatiquement journée transformant instantanément jardin allée parking rue espace illuminé sécurisé économique écologique quotidiennement. Quatre fonctions intelligentes motion sensor détecteur mouvement précis light control luminosité automatique radar sensor détection avancée remote control télécommande incluse gestion complète distance confortablement sereinement. Trois tailles disponibles puissances croissantes adaptant parfaitement besoins éclairage entrée jardin allée parking rue chemin grande superficie illuminée puissamment efficacement durablement économiquement absolument. Installation facile rapide sans câblage électrique sans electricien fixation murale poteau existant résistant intempéries pluie vent poussière IP65 étanche durable toutes conditions climatiques extérieures. Cadeau parfait maison villa jardin sécurité éclairage économique écologique zéro facture électricité autonome solaire fonctionnel esthétique moderne apprécié unanimement famille entière assurément quotidiennement.",
    "price": 199,
    "oldPrice": 329,
    "stock": 27,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771499823/1_nqlj3t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771499826/2_yjplby.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 4305,
    "name": "Lampe Solaire Murale CISTWIN COB - Détecteur Mouvement Cool Heat Resistance Pathways Garage Porch",
    "description": "Lampe solaire murale CISTWIN COB LED puissante détecteur mouvement précis transformant instantanément jardin allée escaliers garage backyard front porch pathways espace illuminé sécurisé économique écologique zéro facture électricité quotidiennement. Double LED COB ultra-puissante éclairage grand angle large couvrant superficie importante panneau solaire haute efficacité recharge rapide journée autonomie nuit complète fonctionnement automatique silencieux sereinement. Résistance extrême cool resistance grand froid heat resistance chaleur intense intempéries pluie neige vent sable IP65 étanche toutes conditions climatiques extérieures durabilité garantie absolument. Lot deux lampes inclus installation murale facile rapide sans câblage électricien fixation vissée solide stable mur façade poteau clôture jardin extérieur durablement économiquement. Cadeau parfait maison villa jardin sécurité éclairage automatique économique écologique sans facture électricité fonctionnel esthétique moderne blanc élégant apprécié unanimement famille entière assurément.",
    "price": 149,
    "oldPrice": 229,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771500162/1_seszzz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771500164/2_x2gnes.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771500167/3_vvuxa3.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 4306,
    "name": "Réglette LED Détecteur Mouvement - Veilleuse Automatique Placard Tiroir Cuisine Blanc Chaud Froid",
    "description": "Réglette LED détecteur mouvement automatique double température blanc chaud chaleureux blanc froid vif transformant instantanément placard tiroir couloir cuisine escaliers espace illuminé pratique sécurisé moderne économique quotidiennement. Détecteur mouvement PIR intégré allumant automatiquement lumière présence éteignant absence économisant batterie énergie intelligemment éclairage nocturne automatique sans toucher interrupteur mains libres confortablement sereinement absolument. Double couleur lumière blanc chaud ambiance cosy relaxante chambre salon blanc froid luminosité vive précise cuisine placard tiroir atelier travail précision adaptant parfaitement chaque usage besoin. Fixation magnétique adhésive double face installation facile rapide sans perçage sans câblage placards tiroirs étagères cuisine couloir escaliers dessous meubles partout facilement rapidement durablement. Cadeau parfait emménagement rénovation maison éclairage pratique automatique économique placard dressing cuisine couloir nuit fonctionnel esthétique abordable apprécié unanimement famille entière assurément.",
    "price": 69,
    "oldPrice": 119,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771503800/1_kzytnb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771503801/2_hf3lx9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771503804/3_lkgi4k.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 4307,
    "name": "Fausse Caméra Solaire LED COB - Dummy Camera Détecteur Mouvement Télécommande Sécurité Extérieur",
    "description": "Fausse caméra sécurité solaire LED COB plus realistic dummy camera design réaliste dissuasif lumière rouge clignotante périodique avertissement transformant instantanément jardin façade entrée espace sécurisé protégé dissuadant intrus efficacement quotidiennement. Sept LED COB ultra-puissantes éclairage grand angle puissant illuminant parfaitement jardin yard front doors backyards walls piscine terrasse allée panneau solaire recharge automatique journée autonomie nuit complète. Lumière rouge clignotante intégrée simulant caméra surveillance réelle dissuadant intrus cambrioleurs efficacement sans installation système surveillance coûteux protection économique intelligente maison villa appartement absolument. Télécommande incluse remote control gestion distance modes éclairage détecteur mouvement PIR précis allumage automatique présence économisant énergie batterie longue autonomie nuit complète sereinement. Cadeau parfait maison villa jardin sécurité éclairage dissuasion intrus économique écologique solaire fonctionnel esthétique blanc moderne installation facile rapide apprécié unanimement famille entière assurément.",
    "price": 179,
    "oldPrice": 279,
    "stock": 23,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771505283/1_qyjezo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771505284/2_fgbnth.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771505286/3_jbrbrg.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 4308,
    "name": "Lot 3 Veilleuses LED Hexagonales - Lampes Tactiles Murales Sans Fil Piles AAA Décoration Moderne",
    "description": "Lot 3 veilleuses LED hexagonales tactiles murales sans fil design moderne épuré blanc transformant instantanément couloir chambre salon escaliers espace illuminé élégant cosy ambiance douce agréable décoration intérieure tendance quotidiennement. Forme hexagonale géométrique moderne assemblables combinables infiniment créant compositions murales personnalisées uniques nid abeille mosaïque lumineuse décorative originale salon chambre couloir bureau créative absolument. Activation tactile simple pression douce allumant éteignant instantanément sans interrupteur sans câblage sans installation électricien fixation adhésive murale repositionnable sans trace mur facilement rapidement. Alimentation piles AAA autonomie prolongée sans câble sans branchement électrique posant accrochant partout chambre couloir placard escaliers garde-robe utilisation nomade pratique sereinement. Cadeau parfait emménagement rénovation décoration chambre enfant salon bureau veilleuse nuit ambiance douce économique fonctionnel esthétique moderne abordable apprécié unanimement famille entière assurément.",
    "price": 59,
    "oldPrice": 99,
    "stock": 47,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771506017/1_kdnawv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771506018/2_w5an5h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771506022/3_wfgfse.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 4309,
    "name": "Lampe Anti-Moustiques UV 2en1 Camping - Piège Insectes Lanterne LED USB Rechargeable Extérieur",
    "description": "Lampe anti-moustiques UV 2en1 camping lanterne LED puissante piège insectes rechargeable USB transformant instantanément soirée extérieure terrasse jardin camping randonnée espace sain protégé illuminé confortable agréable quotidiennement. Double fonction intelligente lumière LED blanche puissante éclairage camping soirée extérieure ET piège UV électrique moustiques mouches insectes nuisibles éliminés automatiquement silencieusement efficacement sans produits chimiques absolument. Recharge USB universelle pratique économique batterie intégrée longue autonomie utilisation nocturne prolongée camping randonnée pique-nique terrasse jardin voyage déplacement partout facilement sereinement. Design compact robuste vert moderne résistant intempéries légèrement posant stabilement sol table posé suspendu tente arbre crochet intégré transport facile pratique durablement. Cadeau parfait campeur randonneur famille enfants protection naturelle moustiques insectes été extérieur intérieur chambre salon fonctionnel esthétique abordable durable apprécié unanimement assurément.",
    "price": 119,
    "oldPrice": 179,
    "stock": 31,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771506450/1_opjvjt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771506450/2_x5c2ku.jpg"
    ],
    "category": "Électronique",
    "rating": "4.7"
  },
  {
    "id": 4310,
    "name": "Ampoule LED RGB Disco 3en1 - Enceinte Bluetooth Télécommande Lumière Fête Musique E27 Plafond",
    "description": "Ampoule LED RGB disco 3en1 révolutionnaire enceinte bluetooth intégrée télécommande lumière fête musique transformant instantanément salon chambre bureau soirée espace fête discothèque ambiance magique colorée festive quotidiennement. Triple fonction exceptionnelle éclairage LED RGB multicolore rotatif spectaculaire enceinte bluetooth haute qualité diffusant musique smartphone tablette télécommande sans fil contrôle distance couleurs modes lumineux facilement. Douille E27 universelle compatible tous plafonniers luminaires existants installation rapide sans électricien trois pales repliables orientables éclairage directionnel maximal salon chambre salle fête durablement. Application smartphone bluetooth contrôle total couleurs intensité rythme musical synchronisation lumière musique modes automatiques stroboscope dégradé fixe personnalisable infiniment créativement absolument. Cadeau parfait anniversaire soirée fête enfant adolescent adulte DJ amateur décoration chambre salon gaming ambiance festive fonctionnel esthétique moderne abordable apprécié unanimement assurément.",
    "price": 99,
    "oldPrice": 159,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771507150/1_jwptqu.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 4311,
    "name": "Lot 10 Lumières LED Charnière Placard MYHOMERA - Veilleuse Automatique Ouverture Cuisine Armoire",
    "description": "Lot 10 lumières LED charnière placard MYHOMERA automatiques innovantes allumant ouverture porte éteignant fermeture transformant instantanément cuisine armoire dressing étagères espace illuminé pratique élégant moderne économique quotidiennement. Activation automatique intelligente détectant ouverture fermeture porte placard armoire cuisine dressing éclairage instantané précis intérieur visible parfaitement nuit obscurité sans chercher interrupteur mains libres confortablement sereinement. Installation ultra-simple clipsant directement charnière existante standard compatible toutes charnières cuisine armoire placard standard vis incluse fixation solide stable aucun câblage électricien nécessaire absolument. Alimentation pile alcaline incluse autonomie prolongée longue durée remplacement facile rapide compartiment accessible lot 10 pièces couvrant toute cuisine armoire dressing complètement durablement. Cadeau parfait emménagement rénovation cuisine armoire dressing éclairage automatique pratique économique fonctionnel esthétique discret moderne abordable apprécié unanimement famille entière assurément.",
    "price": 79,
    "oldPrice": 129,
    "stock": 29,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771507737/1_iudkp9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771507739/2_ihfveq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771507742/3_bjenwy.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771507744/4_jhzmgn.jpg"
    ],
    "category": "Électronique",
    "rating": "4.8"
  },
  {
    "id": 4312,
    "name": "Lanterne Anti-Moustiques UV Camping 2en1 - Ampoule LED Suspendue Rechargeable Tente Extérieur",
    "description": "Lanterne anti-moustiques UV camping 2en1 ampoule LED suspendue rechargeable transformant instantanément tente camping jardin terrasse arbre soirée extérieure espace illuminé sain protégé confortable agréable moustiques éliminés efficacement quotidiennement. Double fonction intelligente éclairage LED blanc puissant ampoule suspendue tente camping ET piège UV électrique attirant capturant éliminant moustiques mouches insectes nuisibles automatiquement silencieusement sans produits chimiques absolument. Design suspendu pratique crochet intégré accrochant facilement tente arbre branche terrasse pergola disponible trois coloris vert olive orange gris adaptant toutes situations camping randonnée extérieur durablement. Batterie rechargeable USB longue autonomie nuit complète camping randonnée pique-nique voyage déplacement compacte légère transportable partout facilement sereinement confortablement. Cadeau parfait campeur randonneur famille enfants protection naturelle moustiques insectes été extérieur intérieur fonctionnel esthétique portable abordable durable apprécié unanimement assurément.",
    "price": 119,
    "oldPrice": 179,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771508093/1_ziuqmv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771508097/2_sdhjj4.jpg"
    ],
    "category": "Électronique",
    "rating": "4.6"
  },
  {
    "id": 4313,
    "name": "Lot 3 Spots LED COB Télécommande - Luminaires Placard Cuisine Dressing Sans Fil Timer 30min",
    "description": "Lot 3 spots LED COB puissants télécommande incluse timer 30 minutes transformant instantanément placard dressing cuisine étagères salon espace illuminé élégant professionnel moderne économique sans câblage installation rapide quotidiennement. Télécommande intelligente contrôlant simultanément 3 spots distance allumage extinction gradation luminosité timer automatique 30 minutes extinction programmée économisant piles énergie intelligemment confortablement sereinement absolument. LED COB haute luminosité éclairage puissant précis directionnel illuminant parfaitement intérieur placard dressing sous meubles cuisine étagères bibliothèque salon bureau travail précision facilement. Fixation adhésive double face installation rapide sans perçage sans câblage sans électricien repositionnable toutes surfaces lisses bois verre métal plastique facilement rapidement durablement. Cadeau parfait emménagement rénovation maison cuisine dressing placard éclairage pratique automatique économique fonctionnel esthétique moderne abordable apprécié unanimement famille entière assurément.",
    "price": 89,
    "oldPrice": 149,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771508699/1_x69rwi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771508703/2_t3ipve.jpg"
    ],
    "category": "Électronique",
    "rating": "4.5"
  },
  {
    "id": 4314,
    "name": "Lumières LED Jantes Roue Voiture Solaire - 4 Couleurs Rouge Vert Bleu Blanc Valve Pneu Déco Nuit",
    "description": "Lumières LED jantes roue voiture solaire multicolores rouge vert bleu blanc transformant instantanément voiture moto vélo look spectaculaire lumineux unique impressionnant nuit route sécurité visibilité maximale style moderne quotidiennement. Quatre couleurs vives disponibles rouge sportif vert nature bleu électrique blanc pur illuminant jantes roues rotation mouvement effet visuel époustouflant spectaculaire attirant regards admirateurs partout route nuit. Recharge solaire automatique journée lumière soleil fonctionnement automatique nuit aucune batterie aucun câblage installation ultra-simple vissant directement valve pneu standard compatible toutes voitures motos vélos facilement. Sécurité routière améliorée visibilité nocturne maximale autres conducteurs piétons avertis présence véhicule clairement lumières rotatives attractives signalisation naturelle efficace conduite nocturne sereinement. Cadeau parfait passionné automobile moto vélo personnalisation véhicule look unique spectaculaire économique installation facile rapide sans outils apprécié unanimement conducteurs enthousiastes assurément.",
    "price": 39,
    "oldPrice": 69,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771509137/1_ll9wwm.jpg"
    ],
    "category": "Électronique",
    "rating": "4.4"
  },
  {
    "id": 4401,
    "name": "Pistolet Jet d'Eau Multifonction EZ Jet - Lance Arrosage 8 Modes + Réservoir Savon",
    "description": "Pistolet jet d'eau haute pression multifonction EZ Jet Water Cannon bleu avec 8 modes pulvérisation différents pour lavage voiture, arrosage jardin et nettoyage extérieur. Réservoir savon détergent intégré transparent dosant automatiquement produit nettoyant dans jet eau pour mousse abondante efficace sans gaspillage inutile produit. Poignée ergonomique confortable avec gâchette réglage pression et tête rotative sélectionnant modes : jet concentré, pluie fine, brume, mousse, jet plat, douche, cône ou centre. Connexion universelle s'adaptant tous tuyaux arrosage standard avec système anti-fuite garantissant étanchéité parfaite sans gaspillage eau durant utilisation intensive prolongée quotidienne. Idéal pour lavage automobile économique maison, arrosage plantes fleurs pelouse, nettoyage terrasses façades vélos motos avec polyvalence usage extérieur complet pratique.",
    "price": 79,
    "oldPrice": 119,
    "stock": 56,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771285424/1_zy37os.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771285445/2_fzclqj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771285460/3_huw3jk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771285472/4_cxvvly.jpg"
    ],
    "category": "Automobiles",
    "rating": "4.6"
  },
  {
    "id": 4402,
    "name": "Aspirateur à Main Sans Fil Portable Rechargeable - Mini Aspirateur Voiture Maison USB",
    "description": "Mini aspirateur à main sans fil portable rechargeable USB blanc et doré avec aspiration puissante pour nettoyage rapide voiture intérieur maison bureau miettes poussières. Design compact pliable ergonomique se rangeant facilement boîte gants tiroir avec batterie lithium longue autonomie permettant multiples nettoyages entre charges complètes. Technologie aspiration cyclonique efficace capturant cheveux miettes cendres poussières avec filtre HEPA lavable réutilisable sans consommables coûteux jetables remplacements fréquents nécessaires. Accessoires inclus brosse fente embout prolongateur pour atteindre recoins difficiles sièges voiture clavier ordinateur canapés fauteuils avec précision maximale totale. Idéal pour conducteurs familles recherchant solution nettoyage rapide pratique économique véhicule propre impeccable toujours sans station lavage coûteuse avec autonomie maison polyvalente.",
    "price": 129,
    "oldPrice": 189,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771289727/1_tspshy.jpg"
    ],
    "category": "Automobiles",
    "rating": "4.7"
  },
  {
    "id": 4403,
    "name": "Aspirateur Voiture 4en1 Car Cleaner - Gonfleur Pneus Manomètre Lampe Torche Allume-Cigare Doré",
    "description": "Aspirateur voiture multifonction 4en1 révolutionnaire combinant aspiration puissante gonflage pneus mesure pression manomètre intégré éclairage LED torche branchement allume-cigare 12V indispensable coffre voiture urgences quotidiennes. Fonction aspiration haute puissance éliminant poussières miettes sable débris sièges tapis moquettes recoins difficiles accès habitacle complet propre impeccable accessoires aspiration multiples inclus variés adaptés. Gonfleur pneus intégré tuyau flexible résistant manomètre analogique précis indiquant pression exacte regonflage facile rapide sécurisé urgences crevaison départ voyage vérification pression hebdomadaire obligatoire. Kit complet 7 accessoires inclus tube flexible EVA embout plat brosse rotative embout étroit tuyau gonflage manomètre adaptateurs universel toutes valves pneus vélos ballons matelas gonflables. Indispensable automobilistes voyageurs routiers conducteurs soucieux entretien véhicule sécurité routière design premium doré chromé robuste durable branché allume-cigare standard universel toutes voitures facilement.",
    "price": 199,
    "oldPrice": 299,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771328903/1_sjv7xt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771328922/2_lxnqvp.jpg"
    ],
    "category": "Automobiles",
    "rating": "4.8"
  },
  {
    "id": 4404,
    "name": "Compresseur Air Voiture 12V Jaune - Gonfleur Pneus Manomètre Lampe LED Allume-Cigare Portable",
    "description": "Compresseur air portable voiture 12V jaune puissant gonfleur pneus manomètre précis intégré transformant instantanément urgence crevaison route situation stressante intervention rapide efficace autonome sécurisée confortablement sereinement absolument. Connexion allume-cigare 12V universelle compatible toutes voitures SUV camionnettes 4x4 tuyau flexible long atteignant facilement quatre pneus manomètre analogique lisible pression précise contrôlée parfaitement. Lampe LED orange intégrée éclairant intervention nocturne visibilité parfaite nuit route sombre urgence crevaison sécurité totale conducteur famille entière confortablement sereinement durablement absolument. Moteur puissant cylindre métallique aluminium haute performance gonflage rapide efficace pneus voiture moto vélo ballon matelas pneumatique multiples applications pratiques quotidiennement. Cadeau parfait conducteur homme femme sécurité routière urgence crevaison voyage road trip fonctionnel fiable compact portable indispensable voiture apprécié unanimement assurément.",
    "price": 199,
    "oldPrice": 299,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771504757/1_hnk58v.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771504758/2_weoaiv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771504761/3_xpvdtc.jpg"
    ],
    "category": "Automobiles",
    "rating": "4.6"
  },
  {
    "id": 4501,
    "name": "Radiateur Soufflant Flame Heater 900W - Chauffage d'Appoint Cheminée LED Télécommande",
    "description": "Radiateur soufflant électrique compact 900W Flame Heater design cheminée avec simulation flammes LED réalistes créant ambiance chaleureuse cosy tout en chauffant efficacement. Chauffage céramique rapide diffusant chaleur uniforme pièces jusqu'à 20m² avec thermostat réglable 3 niveaux puissance : ventilation seule, chaleur modérée ou chaleur maximale. Télécommande infrarouge incluse contrôlant température, minuterie programmable et mode flammes décoratives sans chauffage pour ambiance visuelle seule économie énergie estivale. Sécurités intégrées : protection surchauffe, arrêt automatique basculement et boîtier extérieur restant froid au toucher pour utilisation sûre familles enfants animaux domestiques. Idéal pour chauffage appoint chambre bureau salon pendant hiver avec double fonction décorative fonctionnelle économisant espace encombrement radiateur traditionnel volumineux.",
    "price": 199,
    "oldPrice": 299,
    "stock": 35,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771288398/1_vwxunm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771288416/2_yncfqy.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.7"
  },
  {
    "id": 4502,
    "name": "Fer à Repasser Vapeur Portable 1200W - Défroisseur Vertical Voyage 2-en-1",
    "description": "Fer à repasser vapeur portable 1200W blanc bleu avec brosse nettoyante amovible permettant repassage horizontal traditionnel et défroissage vertical vêtements suspendus pratique rapide. Système vapeur puissant continue éliminant plis tenaces tous tissus coton lin soie synthétique avec semelle antiadhésive glissant facilement sans accrocher endommager textile. Double fonction unique combinant fer classique défroisseur vertical économisant espace rangement argent avec deux appareils un seul compact léger portable voyage déplacements. Base support incluse avec brosse nettoyante tissus éliminant peluches poussières simultanément repassage pour vêtements propres impeccables professionnels résultats salon domestique. Idéal pour personnes pressées voyageurs fréquents étudiants petits appartements recherchant solution repassage rapide efficace polyvalente sans planche repasser encombrante traditionnelle lourde.",
    "price": 149,
    "oldPrice": 219,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771289982/1_nsqz6r.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.6"
  },
  {
    "id": 4503,
    "name": "Mini Fer à Repasser Vapeur Portable - Défroisseur Compact Voyage Vêtements",
    "description": "Mini fer à repasser vapeur portable ultra-compact vert design ergonomique tenant dans main pour repassage rapide retouches urgentes cols manchettes poches déplacements voyage. Chauffe ultra-rapide 30 secondes avec vapeur continue puissante éliminant plis légers tous tissus délicats sans risque brûlure grâce température optimale contrôlée automatiquement. Semelle antiadhésive lisse glissant facilement tissus sans accrocher avec cordon rétractable pratique se rangeant facilement valise sac main trousse toilette sans encombrement. Réservoir eau intégré transparent rechargeable fournissant vapeur suffisante multiples retouches avec indicateur niveau eau visible évitant fonctionnement à sec dangereux appareil. Idéal pour voyageurs professionnels déplacements fréquents hôtels étudiants ou toute personne nécessitant vêtements impeccables sans accès fer traditionnel encombrant lourd planche repasser.",
    "price": 89,
    "oldPrice": 139,
    "stock": 55,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771290481/1_zfjucw.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.4"
  },
  {
    "id": 4504,
    "name": "Pompe à Eau Électrique Rechargeable USB - Distributeur Fontaine Bonbonne Automatique",
    "description": "Pompe à eau électrique rechargeable USB blanc et noir avec bouton tactile une touche distribuant instantanément eau bonbonne sans effort soulèvement lourd pénible. Moteur puissant silencieux pompant eau rapidement efficacement avec tube silicone alimentaire long atteignant fond bonbonne extrayant dernière goutte sans gaspillage inutile économique. Batterie lithium rechargeable longue autonomie distribuant plusieurs bonbonnes entre charges avec indicateur LED lumineux bleu signalant fonctionnement niveau batterie restant clairement visible. Installation universelle s'adaptant toutes tailles bonbonnes standards 5L 10L 15L 20L avec fixation sécurisée stable empêchant glissement basculement durant utilisation intensive quotidienne familiale. Idéale pour bureaux maisons familles écoles dispensaires recherchant solution hygiénique pratique distribuant eau potable sans contact mains contaminées avec confort moderne accessible tous.",
    "price": 89,
    "oldPrice": 139,
    "stock": 60,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771318681/1_canit5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771318693/2_w88iqh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771318705/3_lrabnh.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.5"
  },
  {
    "id": 4505,
    "name": "Moulin à Café Électrique Multifonction - Broyeur Épices Grains Céréales Inox",
    "description": "Moulin à café électrique puissant acier inoxydable avec lames rotatives ultra-performantes broyant finement grains café épices noix céréales légumineuses herbes en poudre fine homogène. Bol inox amovible capacité généreuse avec couvercle transparent sécurisé permettant visualiser degré mouture obtenu avec moteur puissant 200W broyage rapide 30 secondes. Bouton pression unique simple utilisation maintenir enfoncé durée souhaitée obtenir finesse mouture personnalisée grossière moyenne ou extra-fine selon préférences besoins recettes. Polyvalence exceptionnelle moulant café frais quotidien sucre glace chapelure poudre épices curry curcuma aromates pour cuisine gastronomie créative variée maison professionnelle. Idéal pour amateurs café frais fraîchement moulu cuisiniers créatifs recherchant appareil multifonction compact économique remplaçant plusieurs ustensiles spécialisés encombrants coûteux inutilement.",
    "price": 99,
    "oldPrice": 149,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771320103/1_vwabtz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771320112/2_nblnow.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.6"
  },
  {
    "id": 4506,
    "name": "Presse à Biscuits Pâtisserie Inox - Machine Façonner Cookies 20 Disques Formes",
    "description": "Presse à biscuits professionnel acier inoxydable avec 20 disques emporte-pièces formes différentes créant cookies décorés élégants uniformes professionnels pâtisserie maison facilement rapidement. Système piston manuel poussant pâte à travers disques perforés formant instantanément biscuits étoiles fleurs cœurs spirales motifs géométriques variés impressionnants visuellement attrayants. Corps cylindrique inox alimentaire robuste durable facile nettoyer avec levier ergonomique confortable réduisant fatigue mains poignets durant préparation grandes quantités biscuits fêtes événements. Kit complet incluant 20 disques interchangeables, 2 embouts pâtisserie décoration glaçage et plaque cuisson antiadhésive pour résultats impeccables professionnels immédiatement utilisables débutants. Idéal pour pâtissiers amateurs familles aimant cuisiner créer biscuits décoratifs originaux fêtes Noël Aïd anniversaires avec présentation spectaculaire gourmande irrésistible impressionnante invités garantie.",
    "price": 129,
    "oldPrice": 189,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771320394/1_ef3t4g.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771320408/2_n1t2b3.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.7"
  },
  {
    "id": 4507,
    "name": "Bouilloire Électrique Pliable Silicone Voyage - Kettle Compacte Légère 600ml Multicolore",
    "description": "Bouilloire électrique pliable silicone alimentaire certifié sans BPA résistante chaleur haute température idéale préparer eau chaude thé café biberons rapidement efficacement maison voyage déplacements quotidiens. Corps silicone souple pliant compressible réduisant volume moitié facilitant rangement valise sac à dos pochette voyage gain place considérable pratique nomades voyageurs fréquents. Base acier inoxydable solide durable avec interrupteur marche arrêt sécurisé bouton rouge lumineux indicateur fonctionnement chauffe rapide économique énergie efficiente performante. Parfaite préparer biberons lait nourrissons température idéale précise avec mesures graduées visibles latéralement garantissant dosage parfait sécurité bébé santé optimale quotidienne. Disponible trois couleurs élégantes blanc rose bleu cadeau idéal parents voyageurs camping randonneurs hôtel bureau utilisation polyvalente universelle pratique légère indispensable.",
    "price": 149,
    "oldPrice": 229,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771320859/1_t0fjme.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771320867/2_vld6v2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771320882/3_myevce.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.5"
  },
  {
    "id": 4508,
    "name": "Machine à Sushi Perfect Roll - Rouleau Maki Californien Maison Facile Rapide Professionnel",
    "description": "Machine rouleau sushi perfectroll automatique permettant préparer makis californiens rouleaux riz nori garnitures légumes poisson maison facilement rapidement résultats professionnels restaurant japonais authentiques impressionnants invités famille. Système roulage automatique intelligent guidant riz ingrédients feuille nori formant rouleaux parfaitement cylindriques uniformes réguliers sans expérience préalable cuisine japonaise débutants amateurs gastronomie asiatique. Corps plastique alimentaire robuste dimensions compactes 18.5x7.8x6.2cm légère facilement rangeable tiroir placard cuisine nettoyage rapide eau savon démontable pratique entretien minimal quotidien. Idéale créer makis californiens uramakis temakis rouleaux variés garnissant saumon thon avocat concombre crevettes fromage frais combinaisons infinies créativité culinaire personnalisée originale. Cadeau parfait passionnés cuisine japonaise amateurs sushis familles enfants soirées thématiques asiatiques anniversaires avec emballage original présentable immédiatement utilisable sans apprentissage complexe garanti.",
    "price": 99,
    "oldPrice": 159,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771321780/1_uy7qor.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771321787/2_czhfgd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771321804/3_ti6ozt.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.4"
  },
  {
    "id": 4509,
    "name": "Presse-Agrumes Électrique Rechargeable USB Portable - Extracteur Jus Orange Citron Sans Fil Compact",
    "description": "Presse-agrumes électrique rechargeable batterie intégrée câble USB permettant utilisation totalement sans fil partout maison bureau voyage extracteur jus orange citron pamplemousse frais vitaminés naturels instantanément facilement. Moteur rotatif puissant silencieux pressant fruits efficacement extractant maximum jus pulpe séparée automatiquement filtre inox intégré résultats jus pur limpide savoureux nutritif vitamines préservées intactes santé famille. Design compact élégant blanc menthe dimensions 23.7cm hauteur rangement facile comptoir cuisine bureau recharge via powerbank ordinateur chargeur USB universel utilisation flexible liberté totale déplacements. Bol transparent couvercle hermétique sécurisé nettoyage facile démontable pièces lavables eau savon hygiène optimale utilisation quotidienne familles enfants adultes personnes soucieuses alimentation saine équilibrée. Cadeau parfait familles amateurs jus frais naturels maison personnes actives soucieuses santé bien-être régime détox vitamines antioxydants quotidiens préparés facilement rapidement économiquement maison.",
    "price": 179,
    "oldPrice": 269,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771322505/1_sbyckz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771322518/2_xd2qoz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771322531/3_ctqyij.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771322544/4_d4scgy.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.6"
  },
  {
    "id": 4510,
    "name": "Blender Mixeur Portable Rechargeable USB - Mini Smoothie Fruits Légumes Voyage Sport Rose",
    "description": "Blender mixeur portable rechargeable USB élégant rose préparant smoothies jus frais fruits légumes directement bouteille pression simple bouton supérieur mixage instantané puissant silencieux maison bureau voyage sport. Lames inox tranchantes haute performance mixant fruits durs glace fraises pastèque mangue kiwi agrumes résultats lissés homogènes onctueux vitamines préservées intactes qualité nutritionnelle maximale chaque préparation. Design bouteille transparente élégante poignée anneau pratique transport hermétique boire directement contenant sans transvaser gain temps praticité totale sac à main sac sport bureau voiture partout. Batterie rechargeable intégrée câble USB autonomie prolongée plusieurs mixages consécutifs recharge powerbank ordinateur chargeur universel utilisation totalement sans fil liberté déplacements voyages quotidiens. Cadeau tendance idéal sportifs végétariens personnes actives soucieuses alimentation saine équilibrée détox vitamines smoothies frais naturels quotidiens préparés facilement rapidement économiquement n'importe où.",
    "price": 149,
    "oldPrice": 229,
    "stock": 52,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771327004/1_nespqm.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.5"
  },
  {
    "id": 4511,
    "name": "Mini Lave-Linge Turbine Ultrasonique Portable USB - Lavage Vêtements Voyage Camping Léger Compact",
    "description": "Mini lave-linge turbine ultrasonique portable rechargeable USB révolutionnaire lavant vêtements sous-vêtements chaussettes bodies bébés t-shirts jeans légèrement efficacement bassine cuvette seau partout maison voyage camping déplacements. Technologie vibration ultrasonique antibactérienne cycles automatiques intelligents délogeant saletés taches profondément tissus délicats robustes résultats nettoyage impeccables comparables machines traditionnelles volumineuses coûteuses consommant eau électricité. Format ultra-compact léger diamètre disque blanc élégant glissant facilement valise sac voyage toujours disponible hôtels auberges résidences étudiantes dortoirs espaces réduits sans machine traditionnelle installation. Branchement USB universel powerbank ordinateur chargeur standard alimentation simple pratique économique consommation électrique minimale capacité lavage 2kg linge quotidien économies significatives eau détergent énergie. Idéal voyageurs étudiants célibataires camping randonneurs personnes mobilité réduite solution lavage innovante économique écologique pratique légère indispensable déplacements fréquents résultats propreté garantis satisfaisants.",
    "price": 129,
    "oldPrice": 199,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771329960/1_t3cjvm.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.3"
  },
  {
    "id": 4512,
    "name": "Chauffe-Tasse Électrique USB Universel - Plateau Chauffant Café Thé Lait Biberon Bureau Maison",
    "description": "Chauffe-tasse électrique USB universel maintenant température idéale constante café thé tisane chocolat chaud lait biberon bébé mugs verres tasses toutes tailles formes sans refroidissement désagréable confort boisson chaude permanente. Plateau chauffant design élégant discret blanc gris pastel s'adaptant parfaitement bureau maison chambre salon compatible toutes tasses céramique verre porcelaine inox sans restriction polyvalence totale utilisation quotidienne. Technologie chauffage douce progressive maintenant boissons température parfaite prolongée sans surchauffe sécurité intégrée économie énergie automatique protection surfaces idéal longues heures travail bureau concentration. Branchement USB universel ordinateur powerbank chargeur standard câble inclus utilisation partout sans prise secteur encombrement bureau minimal design compact rangeable tiroir discret esthétique moderne épurée. Cadeau tendance parfait parents bébés amateurs café thé personnes travaillant bureau longues heures étudiants télétravailleurs profitant boissons chaudes agréables dernière gorgée satisfaisante confort quotidien garanti.",
    "price": 89,
    "oldPrice": 149,
    "stock": 58,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771330213/1_xzk65b.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771330236/2_dnfqgt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771330256/3_qmu4qu.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.5"
  },
  {
    "id": 4513,
    "name": "Machine Mise Sous Vide ZOOSEN 2en1 - Scelleur Vacuum Seal Aliments Conservation Longue Durée Noir",
    "description": "Machine mise sous vide professionnelle ZOOSEN 2en1 aspirant air scellant hermétiquement sachets aliments viandes poissons légumes fruits fromages chips conservant fraîcheur qualité nutritionnelle 5 fois plus longtemps réfrigérateur congélateur. Système vacuum seal 4 étapes simples intuitives remplir sachet placer machine verrouiller couvercle appuyer bouton voyant vert confirmation scellage parfait hermétique résultats professionnels immédiats débutants expérimentés. Design compact élégant noir mat ZOOSEN rangement facile plan travail tiroir cuisine léger portable utilisable partout scellage instantané sachets universels compatibles toutes marques économique pratique. Idéale conservation longue durée chips crackers café thé épices légumineuses céréales viandes marinades préparations maison évitant gaspillage alimentaire économisant argent courses hebdomadaires significativement. Cadeau parfait familles cuisiniers passionnés personnes soucieuses anti-gaspillage alimentation saine conservation optimale résultats professionnels facilement accessibles quotidiennement économies garanties satisfaction totale assurée.",
    "price": 169,
    "oldPrice": 259,
    "stock": 34,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771330905/1_uocdb6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771330931/2_hljdzg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771330954/3_ef0ryj.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.7"
  },
  {
    "id": 4514,
    "name": "Moulin à Café Électrique Multifonction - Broyeur Grains Épices Noix Céréales Inox Puissant Rouge Blanc",
    "description": "Moulin café électrique puissant broyant rapidement grains café épices noix amandes céréales cardamome cumin poivre herbes séchées résultats mouture fine grossière réglable arômes préservés intacts café frais maison quotidiennement. Bol inox alimentaire résistant lames acier tranchantes haute vitesse rotation puissante broyant efficacement toutes graines dures solides nettoyage facile brosse nettoyage incluse hygiène optimale utilisation répétée intensive. Design compact élégant disponible blanc rouge couvercle transparent sécurisé verrouillage automatique arrêt sécurité protection doigts rangement facile plan travail cuisine peu encombrant esthétique moderne. Alimentation secteur câble inclus démarrage simple pression couvercle utilisation intuitive instantanée puissance suffisante broyer quantités importantes rapidement économisant temps précieux matins pressés quotidiens efficacement. Cadeau idéal amateurs café frais moulu maison passionnés cuisine épices aromatiques personnes soucieuses qualité saveurs authentiques résultats professionnels facilement accessibles immédiatement utilisables débutants.",
    "price": 139,
    "oldPrice": 219,
    "stock": 45,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771334553/1_rtgsui.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771334579/2_nsakfl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771334600/3_e8mcjb.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.6"
  },
  {
    "id": 4515,
    "name": "Robot Aspirateur Laveur Automatique KLBB - Aspiration Balayage Serpillière 3en1 Intelligent Silencieux",
    "description": "Robot aspirateur laveur automatique KLBB 3en1 aspirant balayant serpillant simultanément parquet carrelage tapis poils animaux miettes poussières cheveux saletés quotidiennes autonomie prolongée navigation intelligente obstacles évités automatiquement. Capteurs anti-collision anti-chute détectant obstacles meubles escaliers murs changeant direction automatiquement nettoyage complet pièce entière sans surveillance intervention humaine confort total liberté absolue quotidienne. Mode aspiration puissant collectant poussières fins débris poils chats chiens animaux compagnie problématiques allergiques bac poussière capacité suffisante vidage facile hygiénique entretien minimal rapide. Rechargeable batterie longue autonomie couvrant surfaces importantes appartements maisons recharge simple démarrage bouton unique programmable nettoyage automatique absence maison sol propre retour arrivée garanti. Cadeau révolutionnaire personnes actives allergiques propriétaires animaux familles soucieuses propreté sol impeccable quotidien sans effort temps économisé précieux tâches ménagères désagréables fastidieuses résultats garantis.",
    "price": 349,
    "oldPrice": 499,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771335811/1_ditdue.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771335834/2_grgtqp.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.8"
  },
  {
    "id": 4516,
    "name": "Machine à Popcorn Électrique Rétro - Pop Corn Maker Air Chaud Sans Huile Enfants Famille Cinéma Maison",
    "description": "Machine popcorn électrique rétro design rouge blanc élégant préparant pop-corn croustillants savoureux air chaud sans huile sans graisse sains légers délicieux prêts minutes soirées cinéma maison enfants famille entière. Technologie air chaud pulsé soufflant grains maïs éclatant uniformément sans brûlures résidus noircis sans huile ajoutée collation saine légère allégée calories graisses alternatives traditionnelles popcorn gras malsains. Démarrage ultra-simple bouton unique remplissage grains maïs standard résultats abondants généreux grandes quantités popcorn éjectés directement bol récipient dessous nettoyage facile rapide entretien minimal quotidien. Design compact léger rangeable facilement placard cuisine réservé sorties spéciales soirées cinéma maison anniversaires fêtes goûters enfants amis famille moments conviviaux inoubliables mémorables ensemble. Cadeau original parfait enfants familles cinéphiles amateurs snacks maison soirées séries films week-ends dimanches détente maison moments bonheur partagés convivialité garantie résultats délicieux immédiats.",
    "price": 159,
    "oldPrice": 239,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771339559/1_b5c5vr.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.6"
  },
  {
    "id": 4517,
    "name": "Robot Aspirateur Laveur Intelligent Huaman - Aspiration Balayage Serpillière 3en1 Silencieux Design Blanc",
    "description": "Robot aspirateur laveur intelligent Huaman 3en1 aspirant balayant serpillant automatiquement parquet carrelage tapis poussières cheveux miettes débris quotidiens navigation intelligente obstacles évités capteurs précis résultats impeccables sans intervention. Design élégant ultra-plat blanc marbre moderne s'intégrant harmonieusement toutes décorations intérieures salons chambres bureaux passant facilement sous meubles canapés lits zones difficiles accès habituels nettoyage complet. Capteurs anti-collision anti-chute intelligents détectant obstacles murs escaliers mobilier changeant trajectoire automatiquement couvrant pièce entière méthodiquement efficacement sans surveillance aucune intervention humaine nécessaire. Batterie rechargeable longue autonomie couvrant surfaces importantes appartements maisons recharge base station automatique programmation nettoyage absence domicile sol propre impeccable retour garanti quotidiennement. Cadeau révolutionnaire familles actives personnes soucieuses propreté intérieure temps économisé tâches ménagères fastidieuses qualité vie améliorée liberté totale activités plaisirs résultats professionnels garantis.",
    "price": 379,
    "oldPrice": 549,
    "stock": 25,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771339679/1_fblcua.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.8"
  },
  {
    "id": 4518,
    "name": "Mini Blender Mixeur Portable Rechargeable USB 380ml - Smoothie Fruits Légumes 4 Couleurs Sport Voyage",
    "description": "Mini blender mixeur portable rechargeable USB 380ml préparant smoothies jus frais fruits légumes directement bouteille transparente pression bouton unique mixage puissant instantané disponible 4 couleurs bleu violet rose vert. Lames inox 6 pales tranchantes haute performance mixant fruits durs glace bananes fruits dragon kiwi concombre avocat résultats lissés homogènes onctueux vitamines préservées intactes chaque préparation quotidienne. Batterie rechargeable intégrée câble USB universel autonomie suffisante plusieurs mixages consécutifs recharge powerbank ordinateur chargeur standard utilisation totalement sans fil liberté totale déplacements quotidiens partout. Bouteille transparente robuste couvercle hermétique sécurisé boucle lanière transport boire directement sans transvaser pratique sac main bureau voiture salle sport plein air utilisation nomade optimale. Cadeau tendance idéal sportifs végétariens personnes actives soucieuses alimentation saine détox vitamines smoothies frais naturels économiques préparés facilement rapidement n'importe où résultats garantis satisfaisants.",
    "price": 129,
    "oldPrice": 199,
    "stock": 54,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771342109/1_mnqbjr.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.5"
  },
  {
    "id": 4519,
    "name": "Serpillière Électrique Rotative Electric Mop - Balai Laveur Sec Humide 2en1 Microfibre Parquet Carrelage",
    "description": "Serpillière électrique rotative double disques microfibre nettoyant simultanément sec humide parquet carrelage marbre surfaces lisses rotation automatique puissante éliminant poussières saletés graisses incrustées résultats brillants impeccables professionnels. Double disques rotatifs microfibre chenille verte haute densité ultra-absorbante couvrant large surface nettoyage rapide efficace mouvement circulaire continu polissant brillant sol restauré éclatant propre hygiénique quotidiennement. Mode double utilisation sec aspirant poussières cheveux débris humide nettoyant serpillant sols sales graisses taches incrustées polyvalence totale toutes surfaces parquet carrelage marbre moquette légère adaptable. Batterie rechargeable sans fil liberté totale déplacements toutes pièces maison appartement sans contrainte câble alimentation manche ergonomique confortable poignée maintien ferme guidage précis minimal effort physique. Têtes microfibre lavables réutilisables machine entretien facile économique longévité garantie idéal maison appartement bureaux résultats professionnels sols brillants impeccables quotidiennement sans fatigue garanti satisfaction totale.",
    "price": 249,
    "oldPrice": 369,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771343220/1_s4qsub.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771343234/2_rbaot2.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771343250/3_i0j8xs.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771343264/4_bp23qc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771343280/5_erw7nx.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.7"
  },
  {
    "id": 4520,
    "name": "Climatiseur Portable Mini - Ventilateur Refroidisseur Air 3 Vitesses Cool Breeze USB Bureau Maison",
    "description": "Climatiseur portable mini refroidisseur air 3 vitesses breeze cool breeze strong winds transformant instantanément chambre bureau salon espace frais agréable confortable été chaleur intense décoration intérieure moderne pratique quotidiennement. Technologie refroidissement eau évaporation naturelle diffusant air frais humidifié purifié efficacement éliminant chaleur sécheresse poussière allergènes irritants respiratoires protégeant santé famille entière naturellement durablement confortablement. Triple vitesse ajustable 1st breeze doux agréable 2nd cool breeze rafraîchissant puissant 3rd strong winds ventilation maximale intense adaptant parfaitement besoins chaleur intensité journée sereinement. Design compact élégant blanc épuré réservoir eau intégré grande capacité autonomie prolongée silencieux discret posant facilement bureau table chevet salon utilisation quotidienne pratique. Alimentation USB universelle économique écologique cadeau parfait famille bureau travail maison été chaleur voyage déplacement fonctionnel esthétique abordable efficace apprécié unanimement assurément.",
    "price": 149,
    "oldPrice": 229,
    "stock": 41,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771493047/1_e6mkh4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771493112/2_sv7ie9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771493114/3_iayvz6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771493115/4_sgfjnu.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.5"
  },
  {
    "id": 4521,
    "name": "Robinet Chauffe-Eau Instantané KBAYBO - Affichage Digital Température Douchette Flexible Cuisine",
    "description": "Robinet chauffe-eau instantané électrique KBAYBO affichage digital LED température précise transformant instantanément cuisine salle bain espace confort moderne pratique eau chaude immédiate sans attente économique écologique quotidiennement. Chauffe instantanément eau froide température désirée affichage numérique rouge lisible précis contrôle parfait confort optimal cuisine vaisselle salle bain hygiène personnelle famille entière sereinement confortablement absolument. Kit complet inclus robinet chromé élégant flexible inox résistant douchette pomme pluie tuyau alimentation prise européenne installation facile rapide sans plombier professionnel économique durablement. Double sortie eau robinet cuisine lavabo et douchette flexible multifonction usage simultané polyvalent pratique économisant espace installation simple fixation standard évier cuisine salle bain facilement. Cadeau parfait emménagement rénovation cuisine salle bain eau chaude instantanée économique écologique confortable pratique fonctionnel moderne apprécié unanimement famille entière assurément quotidiennement.",
    "price": 299,
    "oldPrice": 449,
    "stock": 26,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771496757/1_qdwbrt.jpg"
    ],
    "category": "Électroménager",
    "rating": "4.7"
  },
  {
    "id": 4701,
    "name": "Tapis Salle de Bain Absorbant Effet Marbre HOME - Antidérapant Ovale Luxe Décoration Moderne",
    "description": "Tapis salle bain ovale ultra-absorbant effet marbre gris élégant inscription dorée HOME design luxueux moderne transformant instantanément salle bain espace raffiné sophistiqué tendance décoration intérieure contemporaine haut gamme. Matière diatomite terre diatomées hautement absorbante séchant ultra-rapidement empêchant accumulation humidité moisissures bactéries odeurs désagréables garantissant hygiène optimale fraîcheur permanente salle bain quotidiennement. Dos antidérapant sécurisé évitant glissements chutes accidents salle bain surface mouillée protection totale enfants personnes âgées famille entière utilisation quotidienne sereine confiante sécurisée absolument. Forme ovale élégante bordure dorée imprimée effet marbre gris veiné luxueux s'intégrant harmonieusement toutes décorations salles bains modernes contemporaines minimalistes nordiques industrielles classiques raffinées. Entretien facile nettoyage rapide eau savon séchage instantané résistant usure quotidienne durable longévité garantie cadeau parfait emménagement mariage anniversaire décoration maison élégante abordable.",
    "price": 129,
    "oldPrice": 199,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771325063/1_b6x8ix.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771325075/2_bcvdlk.jpg"
    ],
    "category": "Maison",
    "rating": "4.6"
  },
  {
    "id": 4702,
    "name": "Ruban Adhésif Nano Double Face Transparent Réutilisable - Tape Fixation Puissante Mur Sans Clou",
    "description": "Ruban adhésif nano double face transparent ultra-puissant réutilisable fixant solidement cadres photos étagères crochets câbles multiprises objets décoratifs murs carrelage verre bois sans percer trous abîmer surfaces. Technologie nano-silicone innovante adhérence exceptionnelle surfaces lisses rugueuses humides sèches résistant charges importantes objets lourds tableaux miroirs étagères salle bain cuisine bureau chambre utilisation polyvalente. Réutilisable infiniment lavage eau simple rinçage restaure adhérence initiale complète économique écologique longévité exceptionnelle alternative clous vis scotch ordinaire surfaces abîmées inesthétiques coûteuses réparer. Transparent invisible intégrant discrètement toutes décorations intérieures ne laissant aucune trace retrait propre net murs peints carrelage bois verre métal plastique surfaces précieuses délicates protégées. Idéal décoration maison organisation rangement bureau bricolage créatif enfants adultes fixation temporaire permanente ajustable indispensable maison appartement bureau sans outillage compétences particulières requises.",
    "price": 59,
    "oldPrice": 99,
    "stock": 68,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771327760/1_ev2oym.jpg"
    ],
    "category": "Maison",
    "rating": "4.5"
  },
  {
    "id": 4703,
    "name": "Étendoir Corde à Linge Rétractable Automatique 5 Fils - Mural Extensible Salle Bain Balcon Intérieur",
    "description": "Étendoir corde linge rétractable automatique ressort 5 fils indépendants extensibles fixation murale pratique séchant vêtements linge salle bain balcon terrasse couloir intérieur extérieur sans encombrement espace optimisé. Système ressort automatique enroulant cordes automatiquement utilisation simple tirer fixer barre support opposé sécurisant cordes tendues stable résistant charges importantes vêtements mouillés lourds quotidiennement. Boîtier plastique ABS blanc robuste compact discret s'intégrant harmonieusement toutes décorations intérieures installations salle bain balcon chambre couloir visibilité minimale esthétique moderne épurée. Fixation murale solide vis chevilles incluses installation rapide facile surface béton carrelage bois mur universel stabilité garantie charges supportées cordes résistantes durables longévité exceptionnelle. Idéal appartements espaces réduits personnes sans espace séchage extérieur solution intelligente économique remplaçant étendoirs encombrants traditionnels rangement instantané automatique propre pratique quotidiennement.",
    "price": 119,
    "oldPrice": 189,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771329462/1_e8jsph.jpg"
    ],
    "category": "Maison",
    "rating": "4.6"
  },
  {
    "id": 4704,
    "name": "Sac Cabas Courses Pliable à Roulettes - Trolley Shopping Bag Réutilisable Léger Grande Capacité Vert",
    "description": "Sac cabas courses pliable innovant 2en1 utilisable sac à main porté épaule ou trolley roulettes déployables grande capacité transportant provisions lourdes facilement sans effort fatigue bras épaules dos quotidiennement. Roulettes robustes escamotables déployant instantanément transformant sac ordinaire chariot courses pratique tirant derrière soi supermarchés marchés rues escaliers surfaces lisses rugueuses terrains variés. Matière polyester Oxford résistante imperméable lavable légère solide supportant charges importantes provisions bouteilles conserves produits lourds sans déchirure déformation longévité exceptionnelle utilisation intensive quotidienne. Design pliant compact rangeable pochette plate glissant facilement sac à main poche veste voiture toujours disponible urgences courses improvisées voyage déplacements pratique nomades actifs. Cadeau écologique pratique remplaçant définitivement sacs plastiques polluants contribuant environnement économies quotidiennes idéal mamans personnes âgées marchés souk courses hebdomadaires confort total garanti.",
    "price": 89,
    "oldPrice": 139,
    "stock": 56,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771329764/1_eyyjk7.jpg"
    ],
    "category": "Maison",
    "rating": "4.5"
  },
  {
    "id": 4705,
    "name": "Distributeur Triple Paper Dispenser Mural 3en1 - Film Alimentaire Papier Cuisson Essuie-Tout Cuisine",
    "description": "Distributeur mural triple 3en1 révolutionnaire organisant simultanément rouleau essuie-tout papier cuisson film alimentaire aluminium cuisine rangement optimal hygiénique pratique économisant espace plan travail comptoir encombrement minimal. Système découpe intégré chaque compartiment tranchant précisément film aluminium papier sulfurisé portions exactes souhaitées sans ciseaux arrachement irrégulier économisant matière évitant gaspillage utilisation professionnelle. Fixation murale solide robuste vis chevilles incluses installation rapide facile carrelage béton bois mur cuisine accès permanent hauteur idéale commodité utilisation quotidienne confort optimal permanent. Corps plastique ABS blanc résistant solide design épuré classique s'intégrant harmonieusement toutes cuisines modernes traditionnelles remplacement rouleaux facile rapide sans démontage complet pratique entretien minimal. Idéal cuisines organisées familles cuisiniers amateurs professionnels pâtissiers soucieux ordre propreté rangement pratique économique indispensable cadeau emménagement mariage pendaison crémaillère apprécié immédiatement utilisable.",
    "price": 99,
    "oldPrice": 159,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771330473/1_dg2woe.jpg"
    ],
    "category": "Maison",
    "rating": "4.7"
  },
  {
    "id": 4706,
    "name": "Tuyau Arrosage Extensible Magic Hose 7 Modes - Pistolet Pulvérisateur Jardin Voiture Terrasse Vert",
    "description": "Tuyau arrosage extensible magique triple couche latex résistant s'étirant automatiquement pression eau triple longueur initiale reprenant forme compacte originale arrêt eau rangement facilité sans enchevêtrement nœuds problèmes habituels. Pistolet pulvérisateur 7 modes inclus jet puissant brumisation douche pluie fine plate circulaire soaker adapté arrosage plantes fleurs pelouses nettoyage voiture terrasse balcon utilisation polyvalente complète. Connecteurs universels robustes raccordements rapides robinets standards inclus adaptateur filetage universel installation instantanée sans outils plomberie compétences particulières requises aucun plombier nécessaire. Matière textile extérieure polyester résistante UV abrasion protection latex intérieur triple couche évitant éclatements fuites pression haute longévité garantie utilisation intensive quotidienne jardin extérieur. Cadeau idéal jardiniers propriétaires maisons villas terrasses balcons personnes entretenant jardins potagers véhicules rangement compact pochette stockage facile saison hiver économisant espace garages remises garanti.",
    "price": 129,
    "oldPrice": 199,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771331691/1_nmtsny.jpg"
    ],
    "category": "Maison",
    "rating": "4.6"
  },
  {
    "id": 4707,
    "name": "Organisateur Épices Pivotant Store N More 20 Bouteilles - Rangement Cuisine Coulissant Space Saving",
    "description": "Organisateur épices pivotant coulissant Store N More capacité 20 bouteilles flacons condiments huiles sauces épices rangées ordonnées visibles accessibles instantanément cuisine placard plan travail économisant espace considérablement intelligemment. Système coulissant slide and save innovant révélant rangées cachées derrière accès toutes bouteilles facilement rapidement sans déplacer démontage réorganisation complète gain temps praticité maximale quotidienne. Structure solide robuste métal plastique ABS alimentaire blanc élégant s'intégrant harmonieusement toutes cuisines modernes traditionnelles placards étagères comptoirs dimensions compactes maximisant espace disponible. Compatible toutes tailles bouteilles flacons épices standards hautes larges petites grandes condiments vinaigrettes sauces huiles vinaigres bocaux conserves organisation cuisine professionnelle immédiate. Cadeau idéal cuisiniers organisés familles soucieuses rangement propreté cuisine pratique économique installation immédiate sans outils montage simple emménagement inauguration maison résultats spectaculaires garantis.",
    "price": 149,
    "oldPrice": 229,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771335344/1_p518s3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771335368/2_rwicl4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771335392/3_eh9tfo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771335413/4_mjfdid.jpg"
    ],
    "category": "Maison",
    "rating": "4.7"
  },
  {
    "id": 4708,
    "name": "Distributeur Savon Mural Design Minimaliste - Pompe Doseur Shampoing Gel Douche Salle Bain Noir Blanc",
    "description": "Distributeur savon liquide mural design minimaliste élégant disponible noir blanc s'intégrant harmonieusement toutes décorations salle bain chambre cuisine style moderne contemporain nordique industriel raffiné sophistiqué haut gamme. Fixation murale adhésive puissante sans perçage sans vis installation rapide secondes surfaces lisses carrelage verre miroir bois béton retirage propre net sans traces dommages surfaces précieuses protégées. Pompe doseur précise distribuant quantité exacte savon shampoing gel douche lotion crème liquide évitant gaspillage surconsommation produit économies significatives quotidiennes hygiène optimale dosage contrôlé chaque utilisation. Réservoir grande capacité rechargeable remplissage facile ouverture supérieure translucide niveau visible anticipant recharge convient savon liquide shampoing après-shampooing gel douche démaquillant lotion corps universellement. Cadeau parfait emménagement inauguration maison décoration salle bain moderne personnes soucieuses organisation hygiène esthétique intérieure résultats professionnels installation facilement accessibles immédiatement utilisable garanti.",
    "price": 89,
    "oldPrice": 149,
    "stock": 52,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771336256/1_wee25y.jpg"
    ],
    "category": "Maison",
    "rating": "4.5"
  },
  {
    "id": 4709,
    "name": "Poubelle Pliable Suspendue Porte Placard - Bac Déchets Cuisine Accrochable Compact 24cm Beige Blanc",
    "description": "Poubelle pliable suspendue innovante accrochant facilement portes placards cuisine salle bain voiture collectant déchets épluchures miettes restes alimentaires directement plan travail sans salir sol comptoir hygiène optimale. Design pliant compact dimensions 24x15x22cm se repliant à plat contre porte placard inutilisée économisant espace précieux cuisines appartements petites surfaces rangement invisible discret propre esthétique moderne. Fixation universelle crochet métal robuste adapté toutes épaisseurs portes placards tiroirs voitures sans perçage vissage installation déplacement instantané plusieurs emplacements flexibilité totale utilisation quotidienne. Corps plastique alimentaire résistant lavable facile nettoyer eau savon hygiène garantie disponible beige blanc noir coloris élégants s'intégrant harmonieusement toutes décorations cuisines modernes contemporaines. Cadeau pratique idéal cuisinières personnes soucieuses propreté organisation cuisine déchets gérés proprement directement plan travail sans se déplacer poubelle sol gain temps efficacité quotidienne garantie.",
    "price": 69,
    "oldPrice": 109,
    "stock": 60,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771337425/1_kqkps4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771337442/2_vslc9i.jpg"
    ],
    "category": "Maison",
    "rating": "4.4"
  },
  {
    "id": 4710,
    "name": "Pompe à Eau Électrique Rechargeable USB - Distributeur Automatique Bonbonne 4.5L 11L 18L Batterie 1200mAh",
    "description": "Pompe eau électrique rechargeable automatique distribuant eau instantanément pression bouton tactile unique compatible bonbonnes 4.5L 11L 18L universelles tuyau amovible plastique alimentaire ABS hygiénique sécurisé santé famille. Batterie lithium 1200mAh longue autonomie pompant 6-8 bonbonnes complètes charge unique recharge 3 heures câble USB ordinateur powerbank chargeur universel utilisation totalement sans fil liberté totale. Design élégant compact blanc bordeaux dimensions 143x82x64mm installation instantanée toutes bonbonnes standard sans outils plomberie nettoyage tuyau démontable facilement hygiène optimale eau potable quotidienne. Compatible multiples sources recharge ordinateur mobile powerbank USB plug universel bouton tactile sensitif démarrage arrêt instantané débit régulier précis économisant eau évitant renversements gaspillages. Indispensable maison bureau cuisine salle sport personnes âgées enfants remplissage facile verre bouteille carafe sans effort soulever bonbonne lourde sécurité dos garanti confort quotidien absolu.",
    "price": 119,
    "oldPrice": 189,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771338767/1_hdemag.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771338784/2_ysqrxz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771338802/3_t2qfpo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771338832/4_tfd12h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771338858/5_ymkbw9.jpg"
    ],
    "category": "Maison",
    "rating": "4.6"
  },
  {
    "id": 4711,
    "name": "Support Mural Balais Serpillières 5 Emplacements - Rangement Outils Ménage Crochets Fixation Murale Gris",
    "description": "Support mural rangement balais serpillières vadrouilles raclettes outils ménage 5 emplacements pinces clips serrage automatique manches ronds ovaux diamètres variés maintien sécurisé solide évitant chutes désordre quotidien. Système pince serrage dentée verrouillant automatiquement manche inséré pression relâchement simple levée clip libérant rapidement facilement outil nécessaire sans effort manipulation pratique utilisation fréquente fluide. Crochets latéraux supplémentaires suspendant chaînes cordes sacs produits ménagers accessoires divers organisation complète espace rangement optimisé buanderie débarras garage cuisine salle bain murale. Fixation murale solide vis chevilles incluses installation rapide facile surfaces béton carrelage bois métal support plastique ABS robuste résistant humidité produits ménagers longévité garantie. Cadeau indispensable ménagères personnes organisées rangement outils ménage propre ordonné sol dégagé sécurisé enfants animaux espace récupéré propre agréable visuellement résultats immédiats garantis.",
    "price": 69,
    "oldPrice": 109,
    "stock": 54,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771341248/1_fwranv.jpg"
    ],
    "category": "Maison",
    "rating": "4.5"
  },
  {
    "id": 4712,
    "name": "Embout Robinet Pivotant 720° Splash Filter Faucet - Aérateur Filtre Anti-Éclaboussures Universel Chrome",
    "description": "Embout robinet pivotant 720 degrés Splash Filter Faucet révolutionnaire orientant jet eau précisément direction souhaitée cuisine salle bain évier lavabo remplissage récipients facilement sans éclaboussures salissures comptoir. Rotation double articulation 720 degrés liberté totale orientation jet eau haut bas gauche droite angles impossibles robinets traditionnels accessibilité maximale personnes mobilité réduite enfants personnes âgées quotidiennement. Filtre aérateur intégré purifiant eau passage réduisant consommation jusqu'à 50% économies significatives facture eau mensuelle écologique responsable préservation ressources hydriques précieuses planète durabilité. Installation universelle vissage simple minutes tous robinets standards cuisine salle bain adaptateurs inclus aucun plombier nécessaire chrome brillant poli résistant corrosion oxydation longévité garantie esthétique. Cadeau pratique idéal rénovation cuisine salle bain personnes soucieuses économies eau confort quotidien hygiène facilité nettoyage résultats immédiats professionnels installation accessible tous garanti.",
    "price": 79,
    "oldPrice": 129,
    "stock": 58,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771342324/1_fdq5oj.jpg"
    ],
    "category": "Maison",
    "rating": "4.6"
  },
  {
    "id": 4713,
    "name": "Étagère d'Angle 4 Niveaux Design Blanc - Rangement Coin Cuisine Salle Bain Salon Épices Sauces Élégant",
    "description": "Étagère angle 4 niveaux design épuré blanc élégant optimisant coins inutilisés cuisine salle bain salon chambre rangeant épices sauces bouteilles condiments décorations plantes objets divers espace récupéré intelligemment. Structure triangulaire ingénieuse s'emboîtant parfaitement coins pièces exploitant espace mort habituellement gaspillé 4 plateaux généreux capacité importante articles cuisine toilette bureau organisés accessibles visibles. Matériau panneau MDF robuste finition lisse blanche résistante humidité taches produits ménagers nettoyage facile chiffon humide assemblage simple sans outils complexes stabilité garantie charges quotidiennes. Design arrondi moderne contemporain minimaliste nordique s'intégrant harmonieusement toutes décorations intérieures blanches épurées naturelles bois scandinaves industrielles esthétique raffinée qualité premium prix accessible. Cadeau idéal emménagement inauguration maison personnes soucieuses organisation rangement optimisation espace intérieur résultats immédiats spectaculaires cuisine salle bain transformées ordonnées agréables vivables confortables.",
    "price": 179,
    "oldPrice": 269,
    "stock": 34,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771342799/1_vdbkt0.jpg"
    ],
    "category": "Maison",
    "rating": "4.7"
  },
  {
    "id": 4714,
    "name": "Horloge Murale Géante 3D Chiffres Romains - Pendule Miroir Argenté Design Luxe Salon Moderne",
    "description": "Horloge murale géante 3D chiffres romains miroir argenté brillant transformant instantanément salon chambre bureau couloir entrée espace raffiné sophistiqué luxueux élégant décoration intérieure moderne contemporaine tendance haut gamme quotidiennement. Chiffres romains miroir acrylique argenté brillant grand format imposant design minimaliste épuré s'intégrant harmonieusement toutes décorations intérieures modernes contemporaines nordiques industrielles classiques raffinées sophistiquées absolument. Installation facile rapide sans perçage adhésif double face fourni pose directe mur lisse peint béton bois personnalisant taille diamètre selon espace disponible salon chambre bureau. Mécanisme quartz silencieux précis aiguilles argentées élégantes fines fonctionnement silencieux discret ne perturbant pas sommeil repos concentration travail quotidiennement sereinement confortablement. Cadeau parfait emménagement mariage anniversaire décoration maison appartement bureau transformation spectaculaire instantanée économique résultat professionnel luxueux impressionnant apprécié unanimement assurément.",
    "price": 129,
    "oldPrice": 199,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771494056/1_r6ugmp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771494058/2_rooegu.jpg"
    ],
    "category": "Maison",
    "rating": "4.7"
  },
  {
    "id": 4715,
    "name": "Étagère Salle de Bain Inox 3 Niveaux - Rangement Mural Porte Serviette Crochets Miroir Luxe",
    "description": "Étagère salle de bain inox premium 3 niveaux miroir poli brillant chromé transformant instantanément salle de bain espace rangement raffiné sophistiqué luxueux élégant décoration intérieure moderne contemporaine tendance haut gamme quotidiennement. Trois niveaux spacieux rangement organisé parfums crèmes shampooings gels douche cosmétiques accessoires salle bain barre porte serviette intégrée crochets latéraux pratiques fonctionnels capacité maximale optimisée. Acier inoxydable qualité premium résistant humidité rouille corrosion salle bain usage quotidien intensif durable longévité garantie entretien facile nettoyage rapide brillant permanent hygiénique absolument. Installation murale solide fixation vissée stable sécurisée supportant charge importante produits cosmétiques lourds serviettes accessoires salle bain confortablement sereinement durablement quotidiennement. Cadeau parfait emménagement mariage anniversaire rénovation salle bain moderne organisation pratique élégante fonctionnelle esthétique abordable luxueux apprécié unanimement famille entière assurément.",
    "price": 199,
    "oldPrice": 299,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771496201/1_xsxxbq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771496202/2_gehdjc.jpg"
    ],
    "category": "Maison",
    "rating": "4.6"
  },
  {
    "id": 4801,
    "name": "Cuillère Balance Digitale de Précision - Digital Spoon Scale Cuisine Pâtisserie Épices 500g",
    "description": "Cuillère balance digitale précision innovante mesurant ingrédients directement cuillère écran LCD lisible affichant grammes millilitres unités multiples idéale dosage précis épices farines sucres levures médicaments suppléments quotidiens. Précision maximale 0.1g capacité 500g permettant peser petites quantités ingrédients cuisine pâtisserie régime alimentaire contrôle calories protéines compléments alimentaires sportifs santé optimale résultats garantis. Design ergonomique compact léger facilement rangeable tiroir cuisine voyage remplaçant complètement balance traditionnelle volumineuse gain espace considérable praticité maximale utilisation quotidienne professionnelle. Fonction tare remise zéro instantanée arrêt automatique économie batterie écran rétroéclairé lisible toutes conditions lumière utilisation facile intuitive débutants professionnels cuisiniers pâtissiers nutritionnistes. Cadeau original pratique passionnés cuisine pâtisserie régimes sportifs personnes soucieuses dosages précis ingrédients recettes résultats impeccables reproductibles professionnels avec emballage présentable élégant immédiatement offrable.",
    "price": 89,
    "oldPrice": 139,
    "stock": 52,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771325496/1_ytkbvi.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.6"
  },
  {
    "id": 4802,
    "name": "Machine à Rouler Dolma Feuilles Farcies DOLMER - Appareil Cuisine Orientale Chou Vigne Rapide",
    "description": "Machine roulage dolma feuilles farcies automatique DOLMER révolutionnaire préparant rouleaux feuilles vigne chou épinards farce viande riz herbes aromatiques uniformes parfaits réguliers facilement rapidement sans expérience préalable cuisine orientale. Système mécanique ingénieux enroulant feuille garniture simultanément pression levier bleu formant instantanément rouleaux serrés compacts identiques présentation soignée professionnelle table familiale festive occasions spéciales cérémonies. Corps plastique alimentaire robuste léger compact facile nettoyer eau savon rangeable tiroir placard cuisine nettoyage rapide entretien minimal pièces démontables hygiène optimale utilisations répétées quotidiennes. Idéale préparer dolmas turcs mahchi marocains feuilles vigne farcies rouleaux chou champignons poivrons tomates légumes variés recettes traditionnelles orientales méditerranéennes authentiques saveurs maison inoubliables. Cadeau parfait passionnées cuisine orientale mères familles aimant préparer plats traditionnels farcis rapidement efficacement grandes quantités fêtes Aïd Ramadan cérémonies mariages résultats spectaculaires garantis.",
    "price": 89,
    "oldPrice": 149,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771326672/1_e9wwiq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771326692/2_dahlp5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771326713/3_fvkunc.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.5"
  },
  {
    "id": 4803,
    "name": "Distributeur Céréales Mural 6 Compartiments - Boîte Rangement Riz Légumineuses Cuisine Transparent",
    "description": "Distributeur céréales mural 6 compartiments transparents séparés stockant simultanément riz haricots lentilles pois soja quinoa graines diverses organisés visibles identifiables instantanément cuisine rangement optimal hygiénique pratique quotidien. Système distribution doseur individuel chaque compartiment bouton poussoir latéral versant précisément quantité souhaitée directement récipient cuisson sans renversement gaspillage salissures comptoir cuisine propre impeccable. Fixation murale sécurisée économisant espace plan travail comptoir cuisine entier organisation verticale intelligente moderne optimisant espace disponible petites grandes cuisines appartements maisons rangement maximisé. Couvercle transparent hermétique protégeant céréales légumineuses humidité insectes poussières contamination extérieure conservation longue durée fraîcheur qualité nutritionnelle préservée intacte stockage hygiénique optimal. Idéal cuisines modernes organisées familles soucieuses rangement propreté gain espace installation facile mur carrelage vis fixation incluses entretien nettoyage simple démontable lavable impeccable durable.",
    "price": 139,
    "oldPrice": 219,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771328036/1_kmfpsi.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.7"
  },
  {
    "id": 4804,
    "name": "Pince Salade Server Design Ergonomique - Couverts Service Salade Silicone Vert Cuisine Élégante",
    "description": "Pince service salade design élégant ergonomique vert anis forme ondulée innovante saisissant délicatement salades légumes pâtes fruits servant portions précises assiettes plats présentation soignée raffinée table repas quotidiens. Matière silicone alimentaire haute qualité flexible résistante chaleur lave-vaisselle inrayable protégeant bols saladiers précieux revêtements antiadhésifs surfaces délicates sans griffures dommages utilisation quotidienne prolongée. Design sculpture artistique moderne forme vague naturelle élégante décoration table tendance minimaliste contemporaine remplaçant avantageusement couverts service traditionnels inesthétiques lourds peu pratiques rangement facile. Préhension ergonomique intuitive naturelle mimant mouvement main service portions salades légumineuses pâtes céréales riz couscous taboulé semoule préparations froides chaudes tenues fermement sans glisser. Cadeau original gastronomes amateurs cuisine design moderne emballage élégant présentable anniversaires Aïd fêtes inaugurations maison résultats impressionnants présentation table.",
    "price": 69,
    "oldPrice": 109,
    "stock": 58,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771328358/1_elwhju.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771328377/2_bsyqct.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.4"
  },
  {
    "id": 4805,
    "name": "Coffret Cadeau Mug Céramique Lucky + Chauffe-Tasse Électrique - Sweet Life Coffee Cup Luxe 3 Couleurs",
    "description": "Coffret cadeau luxueux Sweet Life incluant mug céramique haute qualité inscription Lucky dorée chauffe-tasse électrique USB cuillère dorée assortie présenté boîte élégante sac cadeau raffiné disponible trois coloris vert blanc rose. Chauffe-tasse électrique maintenant boissons température idéale constante café thé chocolat chaud lait bureau maison sans refroidissement désagréable profitant boisson chaude agréable dernière gorgée confort quotidien. Mug céramique premium finition lisse brillante dorures élégantes contenance généreuse idéale café thé tisane chocolat chaud résistant lave-vaisselle micro-ondes utilisation quotidienne durable qualité professionnelle. Emballage cadeau somptueux boîte rigide intérieure mousse protectrice sac shopping luxueux anses dorées twistées prêt offrir aucun emballage supplémentaire nécessaire présentation spectaculaire impressionnante immédiate. Cadeau parfait anniversaires fêtes mères Saint-Valentin Aïd Noël collègues bureau amis famille personnes aimant café thé chaud confort luxueux quotidien résultats garantis satisfaction totale assurée.",
    "price": 179,
    "oldPrice": 269,
    "stock": 32,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771328640/1_mudloe.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771328655/2_jhjrll.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771328677/3_m65rlz.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.8"
  },
  {
    "id": 4806,
    "name": "Hachoir Manuel Multifonction Presse-Piston - Coupe Légumes Viande Oignon Ail Herbes Rapide Cuisine",
    "description": "Hachoir manuel multifonction presse-piston puissant hachant efficacement viandes oignons ails carottes herbes aromatiques piments noix céréales résultats finement hachés uniformes réguliers rapidement sans électricité bruit encombrement cuisine. Système piston poussoir mécanique lames inox tranchantes multiples hachant pression verticale répétée dosant finesse coupe souhaitée grossière fine selon nombre pressions intuitif facile maîtriser débutants expérimentés. Bol transparent grande capacité plastique alimentaire solide résistant chocs hermétiquement fermé couvercle antidérapant stabilité plan travail sécurisé nettoyage facile lave-vaisselle démontable pratique entretien quotidien. Idéal préparer farces viande kefta mergez chermoula salsa pico gallo tapenade houmous guacamole purées soupes taboulé recettes traditionnelles marocaines orientales méditerranéennes rapidement facilement sans effort. Cadeau pratique cuisinières passionnées cuisine maison personnes soucieuses praticité gain temps préparations culinaires quotidiennes économisant énergie électricité silencieux appartements utilisation nomade camping voyage garanti.",
    "price": 109,
    "oldPrice": 169,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771331215/1_dsw16i.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771331238/2_rmsgar.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.6"
  },
  {
    "id": 4807,
    "name": "Presse-Agrumes Manuel Professionnel Aluminium - Extracteur Jus Orange Citron Grenade Puissant Inox",
    "description": "Presse-agrumes manuel professionnel aluminium moulé haute résistance pressant puissamment oranges citrons grenades pamplemousses mandarines extractant maximum jus frais naturel vitamines préservées intactes santé famille quotidiennement. Levier mécanique bras pressoir puissant démultipliant force pression minimale résultats maximaux jus abondant pur sans pépins fibres indésirables écoulement direct verre contenant précis propre sans éclaboussures. Construction aluminium alimentaire massif robuste anticorrosion inoxydable durable décennies entretien minimal nettoyage rapide eau savon résistant usure intensive professionnelle restauration cafés maison quotidien intensif. Base stabilisatrice antidérapante sécurisée plan travail comptoir stabilité totale pression forte sans glissement sécurité optimale utilisation vigoureux adultes enfants jamais basculer renverser jus précieux gaspillé. Cadeau parfait amateurs jus frais naturels familles soucieuses santé alimentation saine vitamines antioxydants quotidiens préparés facilement économiquement maison sans électricité silencieusement résultats professionnels garantis.",
    "price": 149,
    "oldPrice": 229,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771331486/1_psnamn.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.7"
  },
  {
    "id": 4808,
    "name": "Rince-Verres Automatique One Touch - Nettoyeur Rapide Verres Tasses Biberons Évier Cuisine Instantané",
    "description": "Rince-verres automatique one touch révolutionnaire nettoyant verres tasses mugs biberons bouteilles instantanément simple pression unique jet eau puissant centrifuge intérieur éliminant résidus café thé lait traces lipstick hygiéniquement. Système 3 étapes ultra-simples poser verre appareil presser légèrement résultat brillant impeccable propre en secondes sans frotter éponge détergent mains eau économisée considérablement utilisation quotidienne. Fixation évier universelle stable robuste compatible tous éviers cuisines standard installation sans outils connexion robinet standard existant aucune plomberie modification requise immédiatement opérationnel. Jet eau haute pression multidirectionnel atteignant toutes parois intérieures verres hautes tiges calices biberons thermos bouteilles narrow neck habituellement difficiles nettoyer manuellement résultats éclatants. Cadeau indispensable cuisines modernes restaurants cafés bars familles soucieuses hygiène propreté vaisselle gain temps précieux nettoyage rapide efficace économisant eau savon éponges résultats professionnels garantis.",
    "price": 99,
    "oldPrice": 159,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771334219/1_tohaa3.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771334253/2_ih7u10.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.6"
  },
  {
    "id": 4809,
    "name": "Affûteur Couteaux Professionnel Kitchellence 3 Étapes - Aiguiseur Manuel Lames Céramique Tungstène Sécurité",
    "description": "Affûteur couteaux professionnel Kitchellence 3 étapes tungstène céramique cuir redressant affûtant polissant lames émoussées usées résultats tranchant exceptionnel rasoir professionnel restaurés rapidement facilement sans compétences particulières. Système 3 niveaux progressifs affûtage grossier tungstène redressant lames très abîmées affûtage fin céramique affinant tranchant polissage cuir finissant lame parfaite brillante résultats professionnels couteliers cuisiniers. Base antidérapante caoutchouc sécurisée stabilité totale plan travail utilisation sécurisée compatible gants anti-coupures protection optimale mains doigts cuisiniers amateurs professionnels usage intensif quotidien. Compatible tous types couteaux cuisine chef japonais santoku céramique couteaux pain ciseaux lames acier inoxydable carbone résultats uniformes réguliers préservant géométrie lame originale fabricant. Cadeau indispensable cuisiniers amateurs professionnels chefs restaurants familles aimant cuisiner couteaux toujours parfaitement tranchants préparations culinaires précises sécurisées rapides efficaces résultats garantis immédiatement.",
    "price": 99,
    "oldPrice": 159,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771334963/1_yo302j.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771334986/2_hypf58.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771335011/3_yq1unb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771335040/4_zqdkmk.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.7"
  },
  {
    "id": 4810,
    "name": "Mandoline Râpe Légumes Rotative Manuelle 3en1 - Coupe Tranche Râpe Concombre Carotte Fromage Cuisine",
    "description": "Mandoline râpe rotative manuelle multifonction 3en1 tranchant râpant effilant rapidement précisément concombres carottes courgettes pommes terre betteraves fromages fruits résultats uniformes réguliers professionnels présentation soignée raffinée table. Tambour rotatif inox lames interchangeables tranche fine épaisse râpe grossière fine effilochage julienne résultats précis constants identiques chaque passage sans effort fatigue mains poignets préparations grandes quantités. Base ventouse antidérapante fixation stable sécurisée plan travail comptoir cuisine utilisation deux mains sécurisée guide légumes protège-doigts inclus sécurité maximale famille enfants accidents évités. Corps plastique alimentaire résistant turquoise élégant nettoyage facile démontable pièces lavables lave-vaisselle hygiène optimale entretien minimal rangement compact économisant espace tiroir cuisine placard. Cadeau idéal cuisinières passionnées régimes alimentaires salades fraîches préparations culinaires créatives rapides économisant temps précieux préparations légumes quotidiennes résultats professionnels garantis immédiatement utilisable.",
    "price": 119,
    "oldPrice": 189,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771336071/1_rlktwk.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.6"
  },
  {
    "id": 4811,
    "name": "Affûteur Couteaux Électrique Professionnel - Aiguiseur Automatique Pierre Meule Lames Ciseaux Cuisine",
    "description": "Affûteur couteaux électrique professionnel motorisé meule rotative haute vitesse affûtant automatiquement toutes lames couteaux cuisine chef couperet japonais ciseaux rasoirs résultats tranchant exceptionnel professionnel restaurés rapidement facilement. Double système affûtage pierre naturelle intégrée combinée meule rotative électrique deux étapes affinant progressivement lames très émoussées abîmées résultats professionnels couteliers cuisiniers sans compétences techniques requises. Bouton démarrage rouge simple intuitif protection transparente sécurisée guide lame angle optimal constant garantissant affûtage précis régulier uniforme préservant géométrie originale lame chaque couteau utilisé. Base antidérapante caoutchouc stabilité totale plan travail sécurisée alimentation secteur câble inclus puissance suffisante affûtage couteaux lames épaisses fines dures acier inoxydable carbone céramique universellement. Indispensable cuisines professionnelles familiales restaurants bouchers cuisiniers amateurs couteaux toujours parfaitement tranchants préparations culinaires précises rapides sécurisées économisant remplacement couteaux usés coûteux garanti.",
    "price": 149,
    "oldPrice": 229,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771337092/1_yymicp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771337114/2_kx44wx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771337136/3_war7mf.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.7"
  },
  {
    "id": 4812,
    "name": "Plateau Décongélation Rapide Aluminium - Dégivrage Viande Poisson Sans Eau Micro-Ondes Électricité",
    "description": "Plateau décongélation rapide aluminium haute conductivité thermique décongelant viandes poissons volailles légumes congelés température ambiante naturellement sans eau chaude micro-ondes électricité énergie économisée sécurité alimentaire préservée. Technologie conductivité thermique aluminium anodisé rainures parallèles absorbant chaleur ambiante transférant rapidement aliments congelés décongélation uniforme homogène 30 minutes seulement qualité nutritionnelle textures préservées intactes. Sans eau chaude sans micro-ondes sans électricité aucun autre outil nécessaire simple poser aliment congelé plateau laisser agir résultats naturels sains rapides économiques écologiques hygiéniques quotidiennement. Surface rainurée optimisant contact aliment plateau évacuant eau décongélation bords relevés légèrement contenant liquides nettoyage facile lavable eau savon lave-vaisselle entretien minimal hygiène optimale. Cadeau indispensable cuisines modernes familles soucieuses alimentation saine gain temps précieux décongélation quotidienne économisant électricité eau préservant qualité aliments résultats garantis immédiatement efficacement.",
    "price": 99,
    "oldPrice": 159,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771337708/1_fwi0vf.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.5"
  },
  {
    "id": 4813,
    "name": "Distributeur Liquide Vaisselle 2en1 avec Éponge - Pompe Doseur Savon Cuisine Évier Pratique Hygiénique",
    "description": "Distributeur liquide vaisselle 2en1 innovant combinant réservoir savon transparent pompe doseur précise support éponge intégré dessus distribuant automatiquement savon pression éponge vaisselle propre hygiénique rapidement quotidiennement. Système pompe pression unique appuyant éponge dessus déclenchant dosage précis savon liquide directement éponge évitant contact mains flacon salissures comptoir évier propre impeccable organisé hygiénique. Réservoir transparent grande capacité visible niveau savon restant anticipant remplissage rechargeable facilement ouverture dessus compatible tous savons liquides vaisselle gel nettoyant cuisine standard universellement. Design compact élégant gris anthracite transparent occupant espace minimal bord évier comptoir cuisine organisé esthétique moderne nettoyage facile démontable pièces lavables entretien minimal quotidien. Cadeau pratique original cuisinières personnes soucieuses organisation hygiène cuisine évier propre rangé savon éponge toujours disponibles prêts utilisation immédiate résultats vaisselle brillante garantis.",
    "price": 69,
    "oldPrice": 109,
    "stock": 54,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771340368/1_hmybd7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771340378/2_bz5mef.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.5"
  },
  {
    "id": 4814,
    "name": "Organisateur Cuisine Multifonction 3en1 - Boîtes Épices 6 Compartiments Rangement Ustensiles Sauces Couvercle",
    "description": "Organisateur cuisine multifonction 3en1 premium double niveau rangement simultané sauces bouteilles condiments compartiment supérieur couvercle transparent 6 boîtes épices doseurs intégrés inférieurs porte-ustensiles latéral complet cuisine organisée. Compartiment supérieur couvercle dôme transparent fumé protégeant bouteilles sauces huiles vinaigres condiments poussières insectes humidité dimensions généreuses 40.5x25cm capacité importante ustensiles spatules pinces fouets rangés séparément. Six boîtes épices individuelles doseurs cuillères incluses tiroir frontal extractible accès facile rapide sel poivre cumin paprika curcuma épices fréquemment utilisées toujours disponibles portée main. Compartiment arrière storage supplémentaire accessoires cuisine divers porte-spatule latéral séparé hygiénique égouttage ustensiles organisation complète tout plan travail cuisine accessible propre optimisé. Cadeau idéal cuisiniers organisés personnes soucieuses ordre cuisine moderne design blanc noir élégant contemporain s'intégrant harmonieusement toutes cuisines résultats organisation spectaculaires immédiats garantis.",
    "price": 199,
    "oldPrice": 299,
    "stock": 28,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771341582/1_isnxej.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771341598/2_idff9y.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771341614/3_qnx4dc.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.8"
  },
  {
    "id": 4815,
    "name": "Presse à Biscuits Cookie Press Aluminium - Kit Gâteaux 12 Disques Formes 6 Douilles Décoration Pâtisserie",
    "description": "Presse biscuits professionnelle aluminium alimentaire robuste durable Cookie Press Icing Set formant instantanément biscuits sablés spritz bredele décoratifs élégants uniformes parfaits présentation soignée raffinée pâtisserie maison festivités. Kit complet 12 disques formes perforées interchangeables étoiles fleurs ronds spirales motifs géométriques variés 6 douilles décoration glaçage crème chantilly rose feuille saint honoré résultats professionnels immédiats. Corps cylindrique aluminium alimentaire haute qualité léger résistant contenant pâte sablée biscuits poussée levier ergonomique confortable pression précise dosage régulier uniforme chaque biscuit identique professionnel. Nettoyage facile démontable pièces lavables eau savon aluminium inoxydable hygiénique durable rangement boîte originale incluse protection accessoires organisation optimale longévité garantie utilisation intensive. Cadeau parfait pâtissiers amateurs familles Noël Aïd anniversaires fêtes biscuits décoratifs originaux impressionnants invités emballage présentable élégant immédiatement offrable résultats spectaculaires garantis facilement.",
    "price": 119,
    "oldPrice": 189,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771342587/1_pgt9zo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771342603/2_a6zbx8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771342620/3_wuo6rc.jpg"
    ],
    "category": "Cuisine",
    "rating": "4.7"
  },
  {
    "id": 4901,
    "name": "Rasoir Anti-Peluches Électrique - Détacheur de Bouloches Vêtements Tissu",
    "description": "Rasoir anti-peluches électrique rose pour enlever facilement les bouloches et peluches sur tous types de vêtements. Lame en acier inoxydable haute performance pour résultats rapides et efficaces sur pulls, tricots, canapés et tissus. Réservoir transparent amovible pour nettoyage facile après utilisation. Compact et léger, idéal pour usage domestique quotidien. Parfait pour redonner un aspect neuf à vos vêtements, pulls en laine, cachemire et tissus délicats en toute simplicité.",
    "price": 79,
    "oldPrice": 129,
    "stock": 55,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771022892/1_pqgr40.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771022895/2_pd3fbt.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771022898/3_x9kgwp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771022910/4_ymn8x8.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4902,
    "name": "Mini Machine à Coudre Portable Électrique - Couture Débutant 2 Vitesses LED",
    "description": "Mini machine à coudre électrique portable blanc et violet compacte légère parfaite pour débutants, retouches rapides et petits projets couture maison simples. Double alimentation secteur ou piles 4xAA pour utilisation flexible maison voyage avec 2 vitesses couture adaptées tissus fins ou épais facilement. Lampe LED intégrée éclairant zone couture pour précision optimale avec pédale contrôle vitesse et enfilage simplifié accessible débutants sans expérience préalable. Idéale pour ourlets pantalons, réparations vêtements, customisation textile, masques tissu ou petits projets créatifs sans encombrement machine professionnelle coûteuse lourde. Parfaite pour étudiants, débutants couture, retouches urgentes ou personnes recherchant solution économique portable pratique couture occasionnelle quotidienne sans complexité technique.",
    "price": 149,
    "oldPrice": 219,
    "stock": 42,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771284959/1_stuj5z.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284969/2_oxgmq5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284980/3_qjijlp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771284991/4_ycb571.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771285001/5_d6sve3.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4903,
    "name": "Kit Rouleau Peinture Paint Roller Pro - Set Complet 8 Pièces Murs Plafonds",
    "description": "Kit complet peinture Paint Roller professionnel avec rouleau réservoir intégré rechargeable éliminant bacs peinture traditionnels pour application rapide propre sans éclaboussures gaspillage. Set 8 pièces incluant rouleau principal mousse absorbante, rouleau finitions, brosse angles, 3 manches extension télescopiques, bac mélangeur et pince fermeture tube. Système révolutionnaire anti-gouttes avec réservoir se remplissant directement depuis pot peinture distribuant quantité optimale uniformément sur rouleau pour résultats professionnels lisses homogènes. Manches extension ajustables permettant peindre murs hauts plafonds sans échelle ni escabeau avec confort dos bras préservés durant travaux peinture prolongés. Idéal pour rénovation maison appartement économisant temps énergie avec application deux fois plus rapide qu'avec méthode traditionnelle sans dégâts salissures partout alentours.",
    "price": 149,
    "oldPrice": 219,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771286103/1_hxeswb.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4904,
    "name": "Rasoir Anti-Peluches Manuel Ciseaux - Tondeuse Bouloches Tissu Vêtements Portable",
    "description": "Rasoir anti-peluches manuel blanc en forme ciseaux avec lame acier inoxydable rasant efficacement bouloches, peluches et fils tirés tous tissus vêtements. Design ergonomique ciseaux facilitant contrôle précision découpe peluches sans endommager tissu délicat laine cachemire coton polyester facilement sécuritairement quotidiennement. Outil portable léger 22,5cm x 12cm ne nécessitant ni piles ni électricité fonctionnant uniquement pression manuelle pour utilisation écologique économique illimitée durable. Lame protégée ajustable rasant surface tissu délicatement sans couper accidentellement textile grâce système sécurité empêchant contact direct lame main peau utilisateur. Idéal pour entretien pulls tricots couvertures canapés fauteuils redonnant aspect neuf vêtements usagés boulochés économisant argent remplacements textiles.",
    "price": 39,
    "oldPrice": 69,
    "stock": 68,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771288699/1_fjfote.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771288716/2_ddzk6s.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771288732/3_acutmb.jpg"
    ],
    "category": "Ménage",
    "rating": "4.4"
  },
  {
    "id": 4905,
    "name": "Brosse Adhésive Anti-Poils Animaux Réutilisable - Rouleau Nettoyant Vêtements Canapé",
    "description": "Brosse adhésive anti-poils réutilisable blanc avec système auto-nettoyant bidirectionnel éliminant poils animaux, peluches, cheveux et poussières vêtements meubles canapés efficacement instantanément. Technologie adhésive spéciale capturant poils chiens chats dans réservoir transparent amovible se vidant facilement sans contact direct mains saleté allergènes quotidiennement. Double sens utilisation maximisant efficacité nettoyage avec mouvement va-et-vient ramassant 100% poils sans laisser résidus collants contrairement rouleaux jetables traditionnels coûteux. Réutilisable illimitée écologique économique sans consommables remplacements nécessaires fonctionnant uniquement pression manuelle sans piles ni électricité gaspilleuse énergie inutile. Idéale pour propriétaires animaux domestiques recherchant solution durable efficace éliminer poils tenaces textiles meubles vêtements noirs particulièrement avec résultats impeccables visibles.",
    "price": 79,
    "oldPrice": 119,
    "stock": 50,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771288942/1_ucqnyo.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4906,
    "name": "Tour à Épices Rotatif 6 Compartiments - Présentoir Assaisonnements Cuisine Transparent",
    "description": "Tour à épices rotatif 360° transparent avec 6 pots hermétiques empilés verticalement économisant espace comptoir cuisine tout en gardant assaisonnements organisés accessibles immédiatement facilement. Chaque pot compartiment individuel couvercle hermétique double ouverture : saupoudreur doseur précis et ouverture large remplissage cuillère mesure avec étiquettes identification incluses. Design compact vertical gain place maximisant rangement vertical plutôt horizontal avec rotation fluide base plateau tournant accédant instantanément épice souhaitée sans chercher fouiller partout. Construction plastique alimentaire transparent durable résistant voir niveau remplissage chaque épice évitant ruptures stock surprises désagréables pendant préparation culinaire cruciale recette importante. Idéal pour cuisines petites espaces limités recherchant organisation fonctionnelle élégante épices herbes condiments avec accessibilité optimale gain temps préparation culinaire quotidienne familiale professionnelle.",
    "price": 79,
    "oldPrice": 119,
    "stock": 52,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771318352/1_fun1nl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771318359/2_lqpfts.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4907,
    "name": "Balai Spray avec Réservoir Eau Intégré - Serpillère Microfibre Vaporisateur 360°",
    "description": "Balai spray révolutionnaire avec réservoir eau intégré vaporisant solution nettoyante directement sol éliminant besoin seau eau lourd encombrant salissant partout traditionnellement nécessaire. Tête pivotante 360° microfibre lavable réutilisable atteignant facilement sous meubles coins difficiles avec pulvérisation gâchette contrôlée dosant précisément liquide surfaces sans gaspillage excessif. Disponible 3 couleurs vives : vert, bleu turquoise et rose avec manche télescopique ajustable longueur adaptant toutes tailles utilisateurs confort dos optimal ergonomique. Double fonction nettoyage humide serpillère classique et sec dépoussiérage rapide quotidien avec pad microfibre amovible lavable machine économisant consommables jetables coûteux polluants environnement. Idéal pour nettoyage rapide quotidien carrelage parquet stratifié vitres vitré sols durs sans effort excessive fatigue avec résultats propres impeccables brillants professionnels instantanément.",
    "price": 99,
    "oldPrice": 149,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771319015/1_l6pjgr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771319021/2_xmwuh9.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4908,
    "name": "Distributeur Mural Cuisine 4-en-1 - Porte Film Aluminium Papier Absorbant + Étagère",
    "description": "Organisateur mural cuisine multifonction 4-en-1 blanc gris avec distributeurs intégrés film alimentaire, papier aluminium, papier absorbant et étagère rangement épices condiments supérieure. Installation murale adhésive sans perçage ou vissage abîmant murs carrelage avec adhésif double face ultra-puissant supportant poids considérable durablement solidement longtemps. Système découpe intégrée lames acier inoxydable coupant nets précis films rouleaux sans ciseaux avec mécanisme coulissant facilitant déroulement unidirectionnel fluide régulier. Dimensions compactes 38x24cm gain place maximisant organisation verticale libérant espace comptoir plan travail encombré avec design moderne épuré s'intégrant décoration cuisines. Idéal pour cuisines petites moyennes recherchant solution rangement pratique accessible immédiatement consommables cuisine fréquemment utilisés quotidiennement avec élégance fonctionnalité optimale combinées intelligemment.",
    "price": 119,
    "oldPrice": 179,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771319440/1_wpwhvd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771319447/2_jhuhvn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771319464/3_wr33xp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771319478/4_c090rl.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4909,
    "name": "Balai Mécanique Rotatif 3-en-1 Sweep Drag - Aspirateur Manuel Sans Électricité",
    "description": "Balai mécanique rotatif manuel Sweep Drag All-in-One rouge avec double brosse rotative latérale ramassant automatiquement poussières cheveux miettes sans électricité batteries bruyantes. Système roues rotatifs actionnant brosses circulaires capturant saletés dans réceptacle amovible transparent se vidant facilement poubelle sans contact direct mains déchets sales. Triple fonction nettoyage balayage aspiration ramassage couvrant grande surface rapidement efficacement avec manche télescopique ajustable adaptant toutes tailles utilisateurs confortablement ergonomiquement. Silencieux écologique économique fonctionnant uniquement mouvement poussée manuelle sans consommation énergie électrique recharges batteries coûteuses polluantes environnement inutilement gaspilleuses. Idéal pour nettoyage rapide quotidien appartements maisons bureaux magasins ramassant instantanément saletés sols durs carrelage parquet sans sortir aspirateur lourd bruyant encombrant traditionnel.",
    "price": 89,
    "oldPrice": 139,
    "stock": 48,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771319807/1_nhffcu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771319821/2_attyce.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771319834/3_vxl3gu.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4910,
    "name": "Balai Serpillière Plat Auto-Essorage Double Seau - Système Nettoyage Sol Microfibre Professionnel",
    "description": "Balai serpillière plat auto-essorant système double compartiment séparant eau propre eau sale garantissant nettoyage sol hygiénique efficace professionnel sans contact mains salissures bactéries poussières quotidiennes. Tête microfibre plate ultra-absorbante haute densité capturant poussières cheveux saletés incrustées carrelage parquet marbre surfaces lisses dures facilement rapidement sans effort physique excessif. Manche télescopique inoxydable réglable hauteur adaptable toutes tailles personnes avec système essorage automatique pression seau intégré séchage rapide optimale efficacité maximale. Seau double compartiment roulettes mobiles facilement déplaçable avec couvercle presse-essorage intégré permettant nettoyer essorer serpillière automatiquement hygiéniquement sans toucher tissu humide sale. Kit complet inclus seau double roulettes manche inox réglable tête microfibre lavable réutilisable montage facile 4 étapes idéal maison appartement bureau grands espaces nettoyage professionnel quotidien.",
    "price": 189,
    "oldPrice": 279,
    "stock": 34,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771321341/1_gdgn2i.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771321348/2_vq7o38.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771321361/3_stbnqf.jpg"
    ],
    "category": "Ménage",
    "rating": "4.8"
  },
  {
    "id": 4911,
    "name": "Brosse Électrique Nettoyage Magic Brush 5en1 - Rechargeable USB Multifonction Salle Bain Cuisine",
    "description": "Brosse électrique rotative rechargeable USB Magic Brush 5en1 puissante nettoyant efficacement carrelage joints baignoire lavabo douche cuisine surfaces incrustées taches calcaire graisses saletés tenaces sans effort manuel excessif. Kit complet 5 têtes interchangeables brosse dure poils raides éponge jaune tampon doux chiffon polissage adaptées différentes surfaces matériaux délicats robustes nettoyage personnalisé optimal chaque zone. Moteur électrique rotatif haute vitesse générant rotation continue puissante éliminant saletés incrustées calcaire rouille moisissures joints carrelage résultats professionnels ménage facilement rapidement économisant temps énergie physique. Batterie rechargeable intégrée câble USB inclus autonomie prolongée utilisation sans fil totalement libre pratique partout salle bain cuisine voiture bateau sans contrainte câble alimentation secteur. Cadeau idéal ménagères passionnés propreté maison résultats impeccables professionnels facilement accessibles débutants avec notice instruction utilisation complète entretien minimal garanti satisfaction totale.",
    "price": 159,
    "oldPrice": 249,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771322146/1_u1o0wz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771322158/2_xsysk6.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771322172/3_juz0xz.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4912,
    "name": "Brosse Vaisselle Distributeur Savon Intégré - Kit 4 Têtes Interchangeables Nettoyage Cuisine",
    "description": "Brosse vaisselle professionnelle distributeur savon liquide intégré réservoir transparent rechargeable diffusant automatiquement produit nettoyant pression bouton pouce nettoyage casseroles poêles assiettes verres efficacement sans salir mains. Kit complet 4 têtes interchangeables incluses deux brosses poils durs raides décrasser incrustations graisses deux éponges abrasives polissage surfaces délicates adaptées tous types vaisselle cuisine quotidienne. Manche ergonomique antidérapant gris caoutchouc confortable maintien ferme sécurisé évitant glissements fatigue mains poignets longues séances vaisselle cuisine professionnelle familiale intensive quotidienne. Réservoir savon transparent visible remplissage facile rapide distributeur doseur précis économisant produit nettoyant évitant gaspillage surconsommation détergent protection environnement économies quotidiennes. Cadeau pratique idéal cuisiniers ménagères personnes soigneuses hygiène cuisine vaisselle brillante impeccable résultats professionnels facilement rapidement économisant eau savon temps énergie précieuse quotidiennement.",
    "price": 79,
    "oldPrice": 129,
    "stock": 54,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771325661/1_u3r0ho.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4913,
    "name": "Balai Serpillière Plat Double Face ONEUP - Auto-Essorage Sans Mains Microfibre Parquet Carrelage",
    "description": "Balai serpillière plat double face révolutionnaire système auto-essorage sans contact mains nettoyant simultanément deux faces sol parquet carrelage marbre surfaces lisses efficacement rapidement sans effort physique excessif résultats impeccables. Tête microfibre double face haute densité ultra-absorbante captant poussières cheveux saletés incrustées retournant automatiquement côté propre garantissant nettoyage hygiénique continu sans contamination croisée saletés récupérées. Manche télescopique inoxydable réglable hauteur adaptable toutes morphologies personnes système essorage pression manuelle intuitif extrayant maximum eau serpillière séchage rapide sol propre sec immédiatement. Tête pivotante 360 degrés atteignant facilement sous meubles canapés lits coins difficiles accès habituels nettoyage complet pièce entière sans déplacer mobilier gain temps considérable efficacité maximale. Kit complet inclus manche inox réglable tête double face microfibre lavable réutilisable machine têtes rechange supplémentaires idéal maison appartement bureaux grands espaces nettoyage professionnel quotidien.",
    "price": 169,
    "oldPrice": 259,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771325937/1_adsflp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771325951/2_wxlsgw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771325965/3_iq0yah.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4914,
    "name": "Nettoyeur Vitres Magnétique Double Face - Brosse Lave Glace Fenêtres Intérieur Extérieur Simultané",
    "description": "Nettoyeur vitres magnétique double face innovant nettoyant simultanément intérieur extérieur fenêtre simple passage aimant puissant maintenant deux parties collées verre éliminant poussières traces calcaire graisse résultats brillants impeccables. Technologie magnétique puissante maintenant fermement deux blocs nettoyants opposés verre permettant nettoyer façade extérieure inaccessible dangereuse sans risque chute sécurité totale appartements étages immeubles résidences. Dimensions compactes 6.31x5.31x4.72 pouces format idéal vitres simples double vitrage épaisseur adaptée microfibres douces absorbantes haute qualité protégeant verre rayures griffures surfaces délicates précieuses. Poignée ergonomique antidérapante verte confortable maintien ferme précis mouvement fluide vertical horizontal circulaire nettoyage rapide efficace grandes petites fenêtres véranda baie vitrée résultats professionnels. Indispensable maison appartement bureau nettoyage vitres facile rapide sécurisé sans échelle échafaudage économisant temps énergie argent professionnel nettoyage fenêtres résultats spectaculaires garantis immédiatement.",
    "price": 99,
    "oldPrice": 159,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771326361/1_owzhqr.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4915,
    "name": "Balai Serpillière Plat X-Shape Flat Mop 360° - Auto-Essorage Sans Mains Microfibre Parquet Sol",
    "description": "Balai serpillière plat innovant forme X rotation 360 degrés système essorage imitation torsion manuelle sans contact mains nettoyant parquet carrelage marbre surfaces lisses efficacement rapidement résultats brillants impeccables professionnels. Tête microfibre pliable forme X atteignant facilement coins recoins sous meubles canapés lits zones difficiles accès habituels nettoyage complet pièce entière sans déplacer mobilier lourd encombrant. Système essorage automatique pression manche extrayant maximum eau serpillière séchage rapide sol propre sec immédiatement sécurité antidérapante évitant accidents glissades surfaces mouillées familles enfants. Manche télescopique aluminium léger résistant réglable toutes hauteurs personnes articulation pivotante 360 degrés mouvement fluide naturel efficace réduisant fatigue dos poignets effort physique minimal. Tête microfibre lavable réutilisable machine entretien facile économique longévité garantie idéal maison appartement bureaux grands espaces nettoyage professionnel quotidien rapide hygiénique agréable.",
    "price": 159,
    "oldPrice": 249,
    "stock": 40,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771327292/1_gsg66p.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771327316/2_atg5v0.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771327336/3_kcrlal.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4916,
    "name": "Nettoyeur Vitres Magnétique Double Face Triangulaire - Lave Glace Sécurité Corde Anti-Chute Bleu",
    "description": "Nettoyeur vitres magnétique double face forme triangulaire innovante nettoyant simultanément intérieur extérieur fenêtre unique passage aimant puissant maintenant fermement deux parties collées verre résultats brillants impeccables sécurisés. Système sécurité corde anti-chute incluse attachée poignet prévenant perte accidentelle partie extérieure étages appartements immeubles protection totale investissement sérénité utilisation hauteurs sécurisée absolument. Utilisation 6 étapes simples intuitives attacher corde humidifier chiffon ajouter produit nettoyant appliquer magnétiquement nettoyer résultats professionnels vitre brillante transparente immédiatement sans effort particulier. Kit complet inclus bloc magnétique bleu deux chiffons microfibre triangulaires lavables réutilisables remplacement facile entretien économique longévité prolongée hygiène optimale nettoyages répétés quotidiens efficaces. Idéal appartements étages immeubles résidences fenêtres inaccessibles dangereuses nettoyage sécurisé sans échelle risques chutes accidents économisant frais professionnels nettoyage vitres résultats spectaculaires garantis facilement.",
    "price": 109,
    "oldPrice": 169,
    "stock": 46,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771329202/1_dvzwhx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771329217/2_olhx0z.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771329232/3_btbfks.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4917,
    "name": "Gants Silicone Magiques Multifonction - Vaisselle Légumes Fruits Nettoyage Brosse Intégrée Sans Chiffon",
    "description": "Gants silicone magiques multifonction révolutionnaires remplaçant éponges chiffons lavant vaisselle casseroles légumes fruits nettoyant surfaces sanitaires picots brosse intégrés paume doigts générant mousse abondante savonneuse efficacement. Picots silicone alimentaire souples faces palmaires délogeant saletés graisses incrustations résidus alimentaires surfaces délicates robustes vaisselle fragile antiadhésif céramique inox verre porcelaine sans rayures dommages. Protection mains totale imperméable résistante chaleur eau chaude produits ménagers détergents acides protégeant peau mains sèches irritations eczémas longues séances vaisselle nettoyage ménage quotidien intensif. Polyvalence exceptionnelle lavage vaisselle légumes fruits brossage casseroles poêles nettoyage évier salle bain carrelage joints brossage animaux compagnie chats chiens tout tâches ménagères facilement. Paire gants rose taille universelle réutilisable lavable lave-vaisselle machine entretien minimal longévité garantie cadeau pratique original ménagères cuisiniers personnes soucieuses hygiène propreté mains protégées.",
    "price": 59,
    "oldPrice": 99,
    "stock": 62,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771336728/1_l60yer.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771336747/2_zswgad.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771336775/3_lelfju.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771336800/4_mi84qh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771336822/5_ai7mzu.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4918,
    "name": "Rose Diamond Table Lamp - Lampe Tactile USB Rechargeable Effet Diamant Atmosphère",
    "description": "Lampe de table design Rose Diamond en acrylique cristal taillé effet diamant scintillant. Tactile et rechargeable via USB pour une utilisation sans fil pratique. Crée une atmosphère chaleureuse et romantique avec sa lumière dorée enveloppante. Idéale pour chambre, bureau ou coiffeuse comme lampe décorative d'ambiance. Parfaite comme cadeau pour femme recherchant une décoration lumineuse élégante et moderne au quotidien.",
    "price": 129,
    "oldPrice": 179,
    "stock": 33,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771491120/1_yw70sr.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4919,
    "name": "Bulb Humidifier - Humidificateur Ampoule LED Lumière Nocturne Midnight Night Light USB",
    "description": "Humidificateur mini ampoule design transparent lumière LED colorée intégrée créant ambiance nocturne douce apaisante romantique transformant instantanément chambre bureau salon espace magique féerique relaxant décoration intérieure moderne tendance quotidiennement. Technologie diffusion brume fraîche ultra-silencieuse hydratant purifiant air ambiant efficacement éliminant sécheresse poussière allergènes irritants respiratoires protégeant santé famille entière naturellement durablement confortablement. Alimentation USB universelle compatible chargeur téléphone ordinateur portable banque énergie utilisation pratique flexible partout maison voyage déplacement professionnel facilement sereinement absolument. Lumière LED multicolore changeante effet midnight night light créant atmosphère relaxante idéale méditation sommeil profond détente soirée romantique intimité chambre décoration élégante raffinée moderne. Cadeau parfait original femme enfant anniversaire fête naissance emménagement mariage décoration maison fonctionnel esthétique abordable luxueux apprécié unanimement assurément.",
    "price": 99,
    "oldPrice": 149,
    "stock": 41,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771491723/1_pt0ddl.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4920,
    "name": "Humidificateur Flamme LED - Diffuseur Brume Effet Feu Ambiance Chaleureuse USB Aromathérapie",
    "description": "Humidificateur diffuseur aromathérapie design flamme LED réaliste effet feu véritable transformant instantanément salon chambre bureau espace chaleureux cosy élégant atmosphère magique apaisante décoration intérieure moderne luxueuse tendance quotidiennement. Technologie brume ultrasonique ultra-silencieuse diffusant humidité fraîche purifiante hydratant air ambiant efficacement éliminant sécheresse poussière allergènes irritants respiratoires protégeant santé famille entière naturellement durablement. Compatible huiles essentielles aromathérapie diffusant parfums délicats agréables relaxants lavande eucalyptus menthe rose jasmin créant ambiance spa luxueux maison confortablement quotidiennement sereinement. Disponible deux coloris élégants noir mat et rose gold s'intégrant harmonieusement toutes décorations intérieures modernes contemporaines minimalistes nordiques classiques raffinées sophistiquées absolument. Alimentation USB universelle pratique silencieux grande capacité autonomie prolongée cadeau parfait femme anniversaire fête emménagement mariage décoration maison fonctionnel esthétique luxueux apprécié unanimement.",
    "price": 129,
    "oldPrice": 199,
    "stock": 27,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771491958/1_jm3yxc.jpg"
    ],
    "category": "Ménage",
    "rating": "4.8"
  },
  {
    "id": 4921,
    "name": "Raquette Anti-Moustiques Électrique 2en1 - Piège Lumière Violette UV Rechargeable Killing Mosquito",
    "description": "Raquette anti-moustiques électrique 2en1 multifonction killing mosquito lumière violette UV piège automatique éliminant efficacement moustiques mouches insectes nuisibles transformant instantanément chambre salon terrasse espace sain protégé confortablement quotidiennement. Double mode utilisation manuel raquette électrique haute tension éliminant insectes contact instantanément mode automatique piège lumière violette UV attirant capturant moustiques nuit silencieusement efficacement sans effort absolument. Lumière UV violette purple light trap attirant irrésistiblement moustiques insectes nuit automatiquement posant base élégante verte dorée décorative fonctionnelle chambre salon bureau utilisation nocturne sereine. Rechargeable USB batterie longue autonomie indicateur charge intégré manche ergonomique vert élégant finition dorée luxueuse design premium moderne sophistiqué résistant durable utilisation quotidienne familiale. Cadeau parfait famille enfants personnes âgées protection totale insectes moustiques été intérieur extérieur terrasse jardin camping voyage fonctionnel esthétique efficace apprécié unanimement assurément.",
    "price": 119,
    "oldPrice": 179,
    "stock": 38,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771492155/1_nxbgyk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771493085/2_bl4imw.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4922,
    "name": "Lampe Anti-Moustiques UV Électrique - Piège Aspirateur Insectes Silencieux USB Chambre Nuit",
    "description": "Lampe anti-moustiques électrique UV piège aspirateur puissant silencieux éliminant efficacement moustiques mouches insectes nuisibles transformant instantanément chambre salon bureau espace sain protégé confortable nuit sommeil paisible serein quotidiennement. Technologie lumière UV violette attirant irrésistiblement moustiques insectes automatiquement ventilateur aspirateur intégré capturant piégeant éliminant sans produits chimiques toxiques odeurs désagréables protection naturelle saine famille enfants nourrissons absolument. Double coloris disponible noir élégant blanc moderne design cylindrique compact discret posant facilement bureau table chevet salon chambre utilisation nocturne automatique silencieuse efficace durablement. Alimentation USB universelle économique écologique fonctionnant silencieusement sans bruit perturbateur sommeil enfants personnes âgées famille entière protection totale insectes nuit intérieur extérieur sereinement. Cadeau parfait famille enfants protection naturelle sans produits chimiques moustiques été intérieur chambre salon bureau fonctionnel esthétique efficace durable apprécié unanimement assurément.",
    "price": 99,
    "oldPrice": 149,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771493310/1_ubvwml.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771493312/2_wpyklp.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4923,
    "name": "Ruban Adhésif Décoratif Métallique - Bande Cache-Joint Carrelage Mur Plafond Or Argent Noir Luxe",
    "description": "Ruban adhésif décoratif métallique premium cache-joint carrelage mur plafond sol transformant instantanément intérieur espace raffiné sophistiqué luxueux élégant décoration moderne contemporaine minimaliste nordique tendance haut gamme quotidiennement. Disponible trois coloris premium or doré luxueux argent brillant élégant noir mat sophistiqué s'intégrant harmonieusement toutes décorations intérieures salon chambre salle bain cuisine couloir absolument. Application facile rapide sans outils pose directe carrelage marbre verre plafond mur meuble cachant joints inesthétiques fissures imperfections créant lignes décoratives nettes précises élégantes durablement. Matière aluminium métallique haute qualité résistant humidité chaleur usure quotidienne imperméable lavable durable longévité garantie salle bain cuisine extérieur intérieur toutes surfaces lisses facilement. Cadeau parfait bricolage rénovation décoration maison appartement transformation rapide économique sans travaux résultat professionnel luxueux impressionnant apprécié unanimement assurément quotidiennement.",
    "price": 49,
    "oldPrice": 89,
    "stock": 49,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771493702/1_zf0bat.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771493702/2_lufcoj.jpg"
    ],
    "category": "Ménage",
    "rating": "4.4"
  },
  {
    "id": 4924,
    "name": "Distributeur Savon Vaisselle 2en1 - Pompe Liquide Porte Éponge Intégré Cuisine Évier Pratique",
    "description": "Distributeur savon vaisselle 2en1 pompe pression pratique porte éponge intégré transformant instantanément évier cuisine espace organisé propre hygiénique élégant moderne contemporaine tendance décoration intérieure cuisine haut gamme quotidiennement. Réservoir transparent grande capacité visible niveau liquide vaisselle gel douche savon liquide appuyer éponge simplement distribuant dose précise économique évitant gaspillage débordement saleté plan travail absolument. Design ergonomique compact gris élégant transparent posant facilement évier plan travail cuisine salle bain occupant minimum espace rangement pratique fonctionnel esthétique moderne sophistiqué durablement. Matière plastique premium résistant eau humidité chaleur cuisine usage quotidien intensif durable longévité garantie nettoyage facile rapide entretien minimal hygiénique sain famille entière sereinement. Cadeau parfait emménagement mariage anniversaire cuisine moderne organisation pratique hygiénique économique fonctionnel esthétique abordable apprécié unanimement famille entière assurément quotidiennement.",
    "price": 69,
    "oldPrice": 119,
    "stock": 36,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771495918/1_etkact.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771495919/2_c9w0nw.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4925,
    "name": "Armoire Rangement Salle de Bain Murale - Organisateur Cosmétiques Blanc Moderne Anti-Désordre",
    "description": "Armoire rangement salle de bain murale blanc élégant transformant instantanément salle bain désordonnée espace organisé rangé propre raffiné sophistiqué moderne contemporaine tendance décoration intérieure haut gamme quotidiennement. Solution parfaite désordre salle bain rangeant parfaitement tous produits cosmétiques shampooings crèmes savons brosses dents accessoires personnels plan vasque libéré dégagé propre hygiénique sereinement. Design épuré blanc mat compact vertical occupant minimum espace sol mural fixation simple rapide stable sécurisée supportant charge produits cosmétiques nombreux accessoires salle bain facilement. Intérieur spacieux multi-compartiments organisés séparant chaque produit accessoire facilement trouvé accédé rapidement matin soir routine beauté quotidienne optimisée efficacement confortablement. Cadeau parfait emménagement rénovation salle bain organisation pratique élégante fonctionnelle esthétique abordable luxueux transformation spectaculaire instantanée apprécié unanimement famille entière assurément.",
    "price": 149,
    "oldPrice": 229,
    "stock": 24,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771497000/1_lj8c4d.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4926,
    "name": "Pomme Douche Turbocharging KAHNOS - Haute Pression Filtrante Turbine Rotative Économie Eau",
    "description": "Pomme douche turbocharging KAHNOS haute pression révolutionnaire turbine rotative intégrée amplifiant pression eau faible transformant instantanément douche expérience spa luxueux puissant relaxant massant quotidiennement confortablement sereinement. Technologie turbocharging turbine hélice dorée rotation automatique pression eau amplifiant multipliant jets puissants précis pénétrant profondément peau éliminant fatigue stress tension musculaire efficacement naturellement. Filtre purificateur inclus éliminant calcaire chlore impuretés métaux lourds eau purifiée douce protégeant peau cheveux dessèchement irritations allergies utilisation quotidienne famille entière absolument. Design chromé élégant premium corps transparent révélant turbine intérieure esthétique moderne sophistiqué compatible toutes installations douche standard remplacement facile rapide sans plombier durablement. Cadeau parfait emménagement rénovation salle bain confort douche puissante économique écologique réduisant consommation eau fonctionnel esthétique abordable apprécié unanimement famille entière assurément.",
    "price": 149,
    "oldPrice": 229,
    "stock": 31,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771497983/1_jmxaln.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771497984/2_g3gmn2.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4927,
    "name": "Pomme Douche Turbine 360° Rotation - Haute Pression Filtrante Stop Bouton Chrome Économie Eau",
    "description": "Pomme douche turbine rotation 360° haute pression révolutionnaire hélice bleue rotation automatique eau amplifiant jets puissants précis transformant instantanément douche expérience spa luxueux relaxant massant confortablement quotidiennement sereinement. Double rotation innovante 60° inclinaison tête orientable 360° rotation manche ajustable atteignant parfaitement chaque zone corps dos épaules nuque jambes facilement autonomie totale douche absolument. Bouton stop intégré pratique économique coupant eau instantanément savonnage shampooing réduisant considérablement consommation eau facture mensuelle écologique responsable famille entière durablement naturellement. Filtre purificateur inclus éliminant calcaire chlore impuretés métaux lourds eau purifiée douce protégeant peau cheveux dessèchement irritations allergies utilisation quotidienne sécurisée saine absolument. Cadeau parfait emménagement rénovation salle bain confort douche puissante économique écologique design chromé élégant premium compatible installations standard apprécié unanimement famille entière assurément.",
    "price": 129,
    "oldPrice": 199,
    "stock": 43,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771498356/1_hhqpyo.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 4928,
    "name": "Brosse WC Silicone Rose - Seamless Hook Absorbent Towel Fixation Murale Sans Perçage Hygiénique",
    "description": "Brosse WC silicone premium rose élégant seamless hook absorbent towel fixation murale sans perçage transformant instantanément salle bain espace propre hygiénique organisé moderne contemporaine tendance décoration intérieure haut gamme quotidiennement. Têtes silicone souple flexible picots multidirectionnels nettoyant parfaitement chaque recoin cuvette toilettes éliminant calcaire taches tenaces bactéries germes hygiène optimale fraîcheur permanente toilettes famille entière absolument. Fixation murale adhésive seamless hook transparente sans perçage sans trou mur installation facile rapide repositionnable laissant aucune trace support socle rangement pratique hygiénique séchage rapide durablement. Serviette absorbante incluse absorbent towel protégeant sol humidité gouttes eau après utilisation brosse hygiénique propre salle bain sèche impeccable quotidiennement sereinement confortablement. Cadeau parfait emménagement rénovation salle bain toilettes hygiène pratique élégante fonctionnelle esthétique abordable durable apprécié unanimement famille entière assurément quotidiennement.",
    "price": 59,
    "oldPrice": 99,
    "stock": 47,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771498659/1_ektbwi.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771498659/2_r8x4cz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771498662/3_dc8pyb.jpg"
    ],
    "category": "Ménage",
    "rating": "4.6"
  },
  {
    "id": 4929,
    "name": "Étagère Rangement Sur Machine à Laver WC 3 Niveaux - Étagère Métal Blanc Salle de Bain Gain Place",
    "description": "Étagère rangement multifonction 3 niveaux métal blanc élégant dessus machine laver toilettes WC transformant instantanément salle bain espace rangement optimisé organisé raffiné moderne contemporaine tendance décoration intérieure haut gamme quotidiennement. Triple niveau spacieux exploitant intelligemment espace vertical inutilisé dessus machine laver WC rangeant parfaitement produits lessive cosmétiques serviettes accessoires salle bain nombreux confortablement sereinement. Structure métal robuste résistant humidité rouille salle bain usage quotidien intensif stable sécurisée crochets latéraux pratiques suspendant serviettes accessoires divers gain place maximal optimisé. Installation sans perçage réglable ajustable largeur hauteur adaptant toutes tailles machines laver toilettes WC différents modèles marques facilement rapidement sans outils professionnels absolument. Cadeau parfait emménagement rénovation salle bain organisation pratique élégante fonctionnelle esthétique abordable transformation spectaculaire espace gain place maximal apprécié unanimement famille entière assurément.",
    "price": 199,
    "oldPrice": 299,
    "stock": 22,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771498920/1_uhxuhc.jpg"
    ],
    "category": "Ménage",
    "rating": "4.7"
  },
  {
    "id": 4930,
    "name": "Tapis Antidérapant Douche Baignoire - Fast Drying Lemon Perfume Super Suction Ventouses Sécurité",
    "description": "Tapis antidérapant douche baignoire premium fast drying lemon perfume super powerful suction ventouses transformant instantanément douche baignoire espace sécurisé confortable hygiénique élégant moderne protection totale famille entière quotidiennement. Ventouses puissantes super powerful suction adhérant parfaitement toutes surfaces lisses carrelage émail acrylique baignoire douche maintenant tapis fixement solidement évitant glissements chutes accidents personnes âgées enfants absolument. Séchage ultra-rapide fast drying matière spéciale évacuant eau rapidement empêchant accumulation humidité moisissures bactéries odeurs désagréables hygiène optimale fraîcheur permanente salle bain quotidiennement. Parfum citron frais agréable lemon perfume diffusant odeur naturelle fraîche salle bain chaque utilisation rangement facile easy store after using accrochage mur séchage rapide pratique. Cadeau parfait famille enfants personnes âgées sécurité prévention chutes accidents douche baignoire fonctionnel hygiénique esthétique abordable durable apprécié unanimement assurément quotidiennement.",
    "price": 79,
    "oldPrice": 129,
    "stock": 39,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771499229/2_mebdie.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771499228/1_r9vlqu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771499230/3_s1f9l7.jpg"
    ],
    "category": "Ménage",
    "rating": "4.5"
  },
  {
    "id": 5001,
    "name": "Tablette LCD Écriture 8.5 Pouces High-Tech Handwriting Board - Dessin Mémo Enfant Stylet Effaçable",
    "description": "Tablette LCD écriture high-tech handwriting board 8.5 pouces écran huge screen ultra narrow edges low carbon transformant instantanément apprentissage dessin mémorisation messages famille enfant adulte expérience numérique moderne économique écologique quotidiennement. Écran LCD haute définition 8.5 pouces grand format bordures ultra-fines stylet précis inclus écriture dessin naturelle fluide précise draft paper wacom memorandum family leaving message utilisations multiples absolument. Effacement instantané bouton unique supprimant tout contenu immédiatement réutilisable infiniment économisant papier crayons encre écologique responsable low carbon empreinte carbone réduite environnement préservé durablement. Disponible plusieurs coloris rouge bleu vert noir compact léger portable transport école maison bureau voyage déplacement batterie longue durée autonomie prolongée utilisation quotidienne intensively. Cadeau parfait enfant école apprentissage écriture dessin créativité adulte bureau mémo notes réunion écologique économique fonctionnel esthétique moderne abordable apprécié unanimement famille entière assurément.",
    "price": 79,
    "oldPrice": 129,
    "stock": 44,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771510014/1_uge35d.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510018/2_ocdtv1.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510024/3_km9p3u.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510029/4_eemu77.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510034/5_oi24bl.jpg"
    ],
    "category": "Jouets",
    "rating": "4.6"
  },
  {
    "id": 5002,
    "name": "Gilet Flottaison Enfant Superhéros - Buoyancy Life Jacket Natation Batman Spiderman Hulk Sécurité",
    "description": "Gilet flottaison enfant superhéros buoyancy life jacket baby learn swimming equipment safe and secure transformant instantanément apprentissage natation piscine mer plage expérience amusante sécurisée confiante joyeuse enfant famille quotidiennement. Six designs superhéros populaires Batman Spiderman Hulk Captain America Iron Man Superman motivant enfants apprendre nager confiance assurance flottaison naturelle progressive sécurité totale parents sereins absolument. Matière néoprène premium résistante eau chlorée mer flottaison optimale maintien vertical automatique tête hors eau protection maximale enfants 2-6 ans apprentissage natation progressif sécurisé durablement. Sangles réglables ajustables maintien parfait corps enfant croissance adaptable toutes morphologies boucles sécurisées résistantes impossible ouvrir eau enfant sécurité absolue parents confiants sereinement. Cadeau parfait enfant été piscine mer plage apprentissage natation sécurité amusement superhéros motivant fonctionnel esthétique abordable durable apprécié unanimement parents enfants assurément.",
    "price": 99,
    "oldPrice": 159,
    "stock": 37,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771510627/1_wfxe6j.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510632/2_rk82co.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510637/3_sooole.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510644/4_mfdphf.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771510648/5_ws7lic.jpg"
    ],
    "category": "Jouets",
    "rating": "4.7"
  },
  {
    "id": 5003,
    "name": "Boule à Neige Musicale Lumineuse - Elegant Starry Sky Fairy Story Figurine Fée Cadeau Fille Décor",
    "description": "Boule à neige musicale lumineuse féerique trois modèles elegant ballerine starry sky fée lune fairy story château princesse transformant instantanément chambre bureau salon espace magique enchanté féerique décoration intérieure tendance haut gamme quotidiennement. Trois univers enchanteurs elegant ballerine rose élégante gracieuse starry sky fée lune ciel étoilé bleu mystérieux fairy story château princesse rose romantic chacune racontant histoire magique unique absolument. Lumière LED intégrée illuminant intérieur boule cristal transparente paillettes neige tourbillonnant doucement mouvement hypnotisant apaisant relaxant enfant adulte émerveillement garanti quotidiennement sereinement. Mélodie musicale douce apaisante diffusant notes délicates romantiques créant ambiance féerique magique chambre fille salon bureau décoration luxueuse raffinée originale unique durablement. Cadeau parfait fille femme anniversaire fête naissance Saint Valentin Noël décoration chambre bureau original luxueux romantique féerique émerveillement garanti apprécié unanimement assurément.",
    "price": 99,
    "oldPrice": 159,
    "stock": 29,
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771511075/1_w04wyj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771511080/2_hk2mdp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771511089/3_gkx1xb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771511103/4_cnbali.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771511109/5_e6r7ls.jpg"
    ],
    "category": "Jouets",
    "rating": "4.8"
  },
  {
    "id": 8001,
    "name": "Support de Tablette Métal 360° Rotatif & Réglable",
    "description": [
      "Rotation complète à 360° et inclinaison réglable de 0° à 135°",
      "Structure en alliage d'aluminium renforcé légère et élégante",
      "Compatible avec toutes les tablettes de 7 à 13 pouces (iPad, Samsung, Lenovo, Huawei…)",
      "Base stabilisatrice antidérapante pour un maintien parfait sans glissement",
      "Design pliable et ultra-compact, idéal pour la maison, le bureau et les déplacements"
    ],
    "price": 349,
    "oldPrice": 599,
    "stock": 85,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771870313/1_fvewii.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1771807811/support-de-tablette-m%C3%A9tal-360-_1_lbse4d.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 48
  },
  {
    "id": 8002,
    "name": "Mini Imprimante Thermique Portable Bluetooth Sans Encre",
    "description": [
      "Connexion Bluetooth instantanée avec Android et iOS",
      "Sans encre ni cartouche — utilise du papier thermique spécial économique",
      "Légère et rechargeable par USB, idéale pour l'école, le bureau et les déplacements",
      "Imprime fiches, listes, photos et cartes de visite depuis le téléphone",
      "Design mignon et coloré, parfait comme cadeau original pour petits et grands"
    ],
    "price": 299,
    "oldPrice": 499,
    "stock": 120,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771870657/1_sagfbm.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1771807946/mini-imprimante-thermique-portable_1_o2xlav.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 63
  },
  {
    "id": 8003,
    "name": "Boîte à Montres 6 Emplacements en Cuir PU avec Couvercle Vitré",
    "description": [
      "6 emplacements rembourrés en velours beige pour protéger vos montres des rayures",
      "Couvercle transparent en verre pour admirer votre collection d'un seul regard",
      "Dimensions 30,3 x 11,2 x 8,2 cm — compatible avec toutes les tailles de montres",
      "Fermoir métallique solide et sécurisé pour une fermeture fiable au quotidien",
      "Cadeau idéal alliant fonctionnalité et élégance pour homme ou femme"
    ],
    "price": 199,
    "oldPrice": 349,
    "stock": 65,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883104/1_h1uhld.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1771808033/boite-%C3%A0-montre_1_zerimv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.7,
    "reviews": 41
  },
  {
    "id": 8004,
    "name": "Bureau Portable pour Ordinateur avec Coussin Intégré et Tapis de Souris — InnovaGoods",
    "description": [
      "Espace de travail stable et confortable directement sur les genoux",
      "Tapis de souris antidérapant et support latéral pour smartphone intégrés",
      "Coussin en mousse respirante protégeant les jambes de la chaleur",
      "Compatible avec tous les ordinateurs portables jusqu'à 15 pouces",
      "Léger avec poignée pratique, facile à transporter partout"
    ],
    "price": 249,
    "oldPrice": 399,
    "stock": 90,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883127/1_wop3ms.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1771808140/bureau-portable-d-ordinateur-avec-coussin_4_qzpiew.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771808138/bureau-portable-d-ordinateur-avec-coussin_1_fbuvzc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771808139/bureau-portable-d-ordinateur-avec-coussin_3_v3drox.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771808139/bureau-portable-d-ordinateur-avec-coussin_wjw0h2.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 55
  },
  {
    "id": 8005,
    "name": "Chargeur Sans Fil Multiposition avec Support 2-en-1",
    "description": [
      "Charge à plat ou en position verticale grâce au support amovible intégré",
      "Compatible avec tous les appareils Qi — iPhone, Samsung, Huawei et autres",
      "Design blanc épuré et compact, idéal pour bureau ou table de chevet",
      "Voyant LED indiquant l'état de charge instantanément",
      "Protection intégrée contre la surchauffe pour une utilisation sûre et durable"
    ],
    "price": 299,
    "oldPrice": 379,
    "stock": 110,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883151/1_fd6wed.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871823/1_vqs4yz.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871798/chargeur-sans-fil-multiposition-avec-support_ej9byl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871798/chargeur-sans-fil-multiposition-avec-support_4_ldeyle.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871797/chargeur-sans-fil-multiposition-avec-support_2_cdf0i4.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3,
    "reviews": 39
  },
  {
    "id": 8006,
    "name": "Écouteur Bluetooth à Conduction Osseuse Open-Ear Sans Embout",
    "description": [
      "Transmission du son par vibrations osseuses sans obstruer le canal auditif",
      "Design crochet open-ear ergonomique ultra-confortable pour toutes morphologies",
      "Compatible Bluetooth avec iPhone, Android, Samsung et tous appareils",
      "Rechargeable via USB — autonomie suffisante pour une journée complète",
      "Format ultra-discret et léger, idéal pour le sport, le bureau et les déplacements"
    ],
    "price": 189,
    "oldPrice": 329,
    "stock": 75,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883175/1_olrfom.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871932/%C3%A9couteur-ouvert-cearser_3_geg4pj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871932/%C3%A9couteur-ouvert-cearser_rv4w2f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871931/%C3%A9couteur-ouvert-cearser_4_gcic1e.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771871931/%C3%A9couteur-ouvert-cearser_1_mrlavi.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2,
    "reviews": 31
  },
  {
    "id": 8007,
    "name": "Haut-Parleur Bluetooth Portable Waterproof avec Ventouse",
    "description": [
      "Résistant à l'eau — parfait pour la douche, la plage et la piscine",
      "Ventouse puissante pour fixation instantanée sur toute surface lisse",
      "Mousqueton intégré pour l'accrocher à un sac lors des sorties sportives",
      "Connexion Bluetooth avec tous les appareils iOS et Android",
      "Compact, rechargeable USB avec autonomie généreuse pour toute la journée"
    ],
    "price": 219,
    "oldPrice": 369,
    "stock": 95,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883198/1_d61olc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880681/haut-parleur-sans-fil-portable-waterproof_wkfq2z.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880681/haut-parleur-sans-fil-portable-waterproof_3_qcg9qp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880680/haut-parleur-sans-fil-portable-waterproof_1_onxxhj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880680/haut-parleur-sans-fil-portable-waterproof_2_tho7lk.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 58
  },
  {
    "id": 8008,
    "name": "Haut-Parleurs Magnétiques Rechargeables Sans Fil Bluetooth — Lot de 2",
    "description": [
      "Design cylindrique transparent avec haut-parleur à lévitation magnétique",
      "Son stéréo riche et immersif à 360° — vendu en lot de 2",
      "Fixation magnétique sur toutes surfaces métalliques (réfrigérateur, tableau…)",
      "Connexion Bluetooth avec smartphone, tablette ou ordinateur",
      "Véritable objet de décoration high-tech qui impressionnera tous vos visiteurs"
    ],
    "price": 299,
    "oldPrice": 479,
    "stock": 50,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883227/1_wolwpv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880786/haut-parleurs-magn%C3%A9tiques-rechargeables-sans-fil_3_jrgwab.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880788/haut-parleurs-magn%C3%A9tiques-rechargeables-sans-fil_yst2x4.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880786/haut-parleurs-magn%C3%A9tiques-rechargeables-sans-fil_2_xzt3wx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880787/haut-parleurs-magn%C3%A9tiques-rechargeables-sans-fil_4_rb1qy9.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 44
  },
  {
    "id": 8009,
    "name": "Robot Caméra Connecté Ebo SE — Interphone Bébé & Compagnon Animaux WiFi",
    "description": [
      "Surveillance en temps réel de bébé et animaux depuis votre smartphone partout",
      "Caméra HD avec vision nocturne et alertes détection mouvement et son",
      "Roulant librement avec laser et bande déroulante pour interagir avec les animaux",
      "Microphone et haut-parleur bidirectionnels pour parler et entendre à distance",
      "Facile à configurer et contrôlable via application intuitive iOS et Android"
    ],
    "price": 899,
    "oldPrice": 1399,
    "stock": 30,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883254/1_t2dr5i.jpg"
    ],
    "category": "Électronique",
    "rating": 4.8,
    "reviews": 27
  },
  {
    "id": 8010,
    "name": "Lampe de Lecture LED Tour de Cou Flexible Mains Libres",
    "description": [
      "Arceau flexible tour de cou pour une lumière puissante en toute liberté mains libres",
      "Deux têtes LED orientables à 360° pour un éclairage précis et ciblé",
      "Idéale pour lire au lit, bricoler ou travailler dans des espaces sombres",
      "Souple et légère, s'adapte à toutes les morphologies et reste stable en mouvement",
      "Fonctionne sur piles — totalement autonome, transportable en voyage ou camping"
    ],
    "price": 149,
    "oldPrice": 249,
    "stock": 140,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883281/1_zkrada.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880931/lampe-de-lecture-led-pour-tour-de-cou-nereled_3_ebtmmp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880931/lampe-de-lecture-led-pour-tour-de-cou-nereled_abhern.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771880930/lampe-de-lecture-led-pour-tour-de-cou-nereled_2_bkc6vp.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 52
  },
  {
    "id": 8011,
    "name": "Haut-Parleur Bluetooth Multifonction en Forme d'Écouteur Géant — InnovaGoods",
    "description": [
      "Design original en forme d'écouteur géant — objet de décoration musical unique",
      "Compatible Bluetooth iOS/Android, carte micro SD et jack 3,5 mm",
      "Microphone intégré pour un karaoké amusant en solo ou entre amis",
      "Rechargeable via USB avec autonomie confortable pour des heures de divertissement",
      "Cadeau idéal et original pour tous les amateurs de musique et de tech décalée"
    ],
    "price": 259,
    "oldPrice": 429,
    "stock": 60,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883306/1_dqhzyq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883307/haut-parleur-sans-fil-multifonction-en-forme-d-%C3%A9couteur-g%C3%A9ant_1_lxgsym.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883309/haut-parleur-sans-fil-multifonction-en-forme-d-%C3%A9couteur-g%C3%A9ant_3_uwstmw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883309/haut-parleur-sans-fil-multifonction-en-forme-d-%C3%A9couteur-g%C3%A9ant_2_dt5jcq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883310/haut-parleur-sans-fil-multifonction-en-forme-d-%C3%A9couteur-g%C3%A9ant_4_i0j88j.jpg"
    ],
    "category": "Électronique",
    "rating": 4.3,
    "reviews": 36
  },
  {
    "id": 8012,
    "name": "Support Stabilisateur Manuel pour Smartphone — Cage Vidéo Professionnelle — InnovaGoods",
    "description": [
      "Cage vidéo professionnelle pour filmer des vidéos fluides et stables sans tremblement",
      "Deux poignées ergonomiques pour une prise en main ferme et confortable à deux mains",
      "Fixation centrale réglable compatible avec tous les smartphones du marché",
      "Pas de vis universel pour trépied, perche et tout support standard",
      "Aluminium léger et résistant — idéal pour YouTubeurs, TikTokeurs et créateurs de contenu"
    ],
    "price": 279,
    "oldPrice": 449,
    "stock": 70,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883382/1_ovvd4t.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883388/support-pour-smartphone-avec-stabilisateur-manuel_dpufiv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883384/support-pour-smartphone-avec-stabilisateur-manuel_3_myyvxz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883385/support-pour-smartphone-avec-stabilisateur-manuel_2_o93ujg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883385/support-pour-smartphone-avec-stabilisateur-manuel_4_vlqvwv.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 49
  },
  {
    "id": 8013,
    "name": "Ceinture Vibrante Chauffante Effet Sauna Multizone — InnovaGoods",
    "description": [
      "Combine vibrations massantes et chaleur thérapeutique pour la zone abdominale et lombaire",
      "Télécommande filaire avec plusieurs modes de vibration et niveaux d'intensité réglables",
      "Polyvalente : se porte autour de la taille, du dos, des hanches ou des cuisses",
      "Compatible avec l'allume-cigare pour une utilisation relaxante en voiture",
      "Sangle velcro universelle ajustable — convient aux hommes comme aux femmes"
    ],
    "price": 349,
    "oldPrice": 549,
    "stock": 45,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883556/1_wfjwca.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883552/ceinture-vibrante-avec-effet-sauna-s-innovagoods_2_dzxwdv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883555/ceinture-vibrante-avec-effet-sauna-s-innovagoods_4_hva285.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883551/ceinture-vibrante-avec-effet-sauna-s-innovagoods_1_u0ownd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.2,
    "reviews": 33
  },
  {
    "id": 8014,
    "name": "Support Chargeur de Voiture Sans Fil 10W à Fixation Automatique — Flux's",
    "description": [
      "Serrage automatique intelligent via capteur infrarouge dès l'approche du téléphone",
      "Charge rapide sans fil jusqu'à 10W compatible tous appareils Qi",
      "Fixation ventouse puissante sur pare-brise ou tableau de bord en quelques secondes",
      "Anneau lumineux bleu LED indiquant clairement l'état de charge en cours",
      "Compatible coques moins de 3 mm — conduire en sécurité sans jamais manquer de batterie"
    ],
    "price": 249,
    "oldPrice": 399,
    "stock": 100,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883624/chargeur-de-voiture-flux-s-sans-fil-noir-10w_pq9zug.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 67
  },
  {
    "id": 8015,
    "name": "Lampe de Désinfection UV Rechargeable Portable — InnovaGoods",
    "description": [
      "Élimine jusqu'à 99% des bactéries et virus sur toutes les surfaces du quotidien",
      "4 LED UV-C intégrées pour une neutralisation rapide sans produit chimique",
      "Design compact en bâtonnet — tient dans la main, se glisse facilement dans le sac",
      "Rechargeable via USB avec voyants LED indiquant clairement le niveau de batterie",
      "Activation instantanée à un seul bouton — hygiène simple pour toute la famille"
    ],
    "price": 179,
    "oldPrice": 299,
    "stock": 130,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883656/1_z9janh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883652/lampe-de-d%C3%A9sinfection-uv-rechargeable_4_fz9uar.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883651/lampe-de-d%C3%A9sinfection-uv-rechargeable_3_xerfpu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883650/lampe-de-d%C3%A9sinfection-uv-rechargeable_2_h5af7h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1771883654/lampe-de-d%C3%A9sinfection-uv-rechargeable_x0yhkd.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 45
  },
  {
    "id": 8016,
    "name": "Montre Connectée SPC Smartee Star — Écran IPS 1,5\" 40mm — Rose",
    "description": [
      "Design féminin rose avec grand écran tactile IPS 1,5 pouce lisible en plein soleil",
      "Suivi santé continu : fréquence cardiaque, oxygène dans le sang et qualité du sommeil",
      "Plusieurs modes sportifs : comptage des pas, calories brûlées et distance parcourue",
      "Compatible Bluetooth Android et iOS — affichage notifications appels, SMS et réseaux sociaux",
      "Résistante à l'eau, bracelet silicone souple et boîtier ultra-léger pour un confort toute la journée"
    ],
    "price": 499,
    "oldPrice": 699,
    "stock": 55,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1771883723/1_klmfog.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 59
  },
  {
    "id": 8201,
    "name": "Moulin à Épices 4 en 1 InnovaGoods — Broyeur Manuel Sel, Poivre & Épices Compartiments Empilables — Acier Inoxydable & Acrylique Premium — Argent",
    "description": [
      "4 compartiments empilables indépendants en acrylique transparent pour 4 épices différentes",
      "Mécanisme de broyage en céramique ajustable pour régler finement la grosseur de mouture",
      "Construction premium en acier inoxydable brossé anti-rouille avec réservoirs transparents",
      "Design modulaire permettant de séparer, remplir, nettoyer et ranger chaque section individuellement",
      "Remplace 4 moulins séparés — idéal pour cuisines modernes, barbecues et dîners en famille"
    ],
    "price": 149,
    "oldPrice": 279,
    "stock": 95,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772015361/1_hkiq5a.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772015360/2_m0dxth.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772015361/3_dplgiv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772015362/4_fi1wv7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772015364/5_nal5jp.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 43
  },
  {
    "id": 8202,
    "name": "Pistolet de Lavage Haute Pression Sans Fil 48V — Kit Complet 3 Batteries Rechargeable avec Tuyau & Accessoires — Nettoyeur Portable Voiture & Maison — Noir",
    "description": [
      "Moteur 48V haute pression avec 3 batteries rechargeable pour une autonomie exceptionnelle",
      "Multiples buses interchangeables : jet concentré puissant ou jet éventail doux selon la surface",
      "Aspiration directe par tuyau flexible depuis un seau ou réservoir sans connexion au robinet",
      "Kit complet : 3 batteries, chargeur, tuyau métallique, détergent, filtre et embouts inclus",
      "Idéal pour voiture, terrasse, balcon, barbecue et espaces extérieurs sans contrainte de câble"
    ],
    "price": 349,
    "oldPrice": 649,
    "stock": 40,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772016829/1_ibw56g.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772016828/2_ufcqe1.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772016828/3_fv6dn7.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017159/4_pfexty.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017160/5_wb6pz1.jpg"
    ],
    "category": "Automobiles",
    "rating": 4.6,
    "reviews": 58
  },
  {
    "id": 8203,
    "name": "Fontaine Solaire Flottante Extérieure — Pompe à Eau Solaire avec Filtre Intégré & Buses Multiples — Décoration Jardin Bassin & Piscine — Sans Câble ni Électricité",
    "description": [
      "Totalement autonome — fonctionne sans câble ni électricité grâce au panneau solaire intégré",
      "Filtration double anti-algues et anti-impuretés pour une eau toujours cristalline",
      "Multiples buses interchangeables pour personnaliser la forme et la hauteur du jet",
      "Design flottant compact en ABS résistant aux UV, s'installe en quelques secondes",
      "Idéale pour bassins, mares, piscines, vasques et bains d'oiseaux — écologique et silencieuse"
    ],
    "price": 179,
    "oldPrice": 329,
    "stock": 70,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772017174/1_rldlqu.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017175/2_omeblk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017175/3_ucemou.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017178/4_onmzvw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017180/5_eoarnt.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 37
  },
  {
    "id": 8204,
    "name": "Boîte à Clé Sécurisée à Code 4 Chiffres — Coffret Mural Extérieur & Intérieur en Zinc Anti-Corrosion — Accès Sécurisé Maison, Airbnb & Bureau — Noir & Argent",
    "description": [
      "Code combinaison 4 chiffres personnalisable — plus de 10 000 combinaisons possibles",
      "Alliage de zinc moulé anti-corrosion résistant aux intempéries — intérieur et extérieur",
      "Compartiment 63x90x25mm pour plusieurs clés, badges et cartes d'accès",
      "Fixation murale discrète avec visserie fournie — dimensions compactes 94x115x35mm",
      "Idéale pour maisons, locations Airbnb, bureaux, garages et locaux professionnels"
    ],
    "price": 159,
    "oldPrice": 299,
    "stock": 85,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772017547/1_ommqmh.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017547/2_xw04rq.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 52
  },
  {
    "id": 8205,
    "name": "Lime à Griffes Électrique Rechargeable InnovaGoods Pawy — Meuleuse Silencieuse pour Chiens & Chats — Tête Diamant USB — Soin Animalier Professionnel — Blanc & Bleu",
    "description": [
      "Tête meuleuse en diamant professionnel pour limer et polir les griffes en douceur et sans douleur",
      "Moteur silencieux basse vibration spécialement conçu pour ne pas effrayer les animaux",
      "Abrasion fine progressive — zéro risque de coupure, saignement ou blessure accidentelle",
      "Batterie rechargeable via Micro-USB avec grip silicone antidérapant ergonomique",
      "Compatible chiens et chats de toutes tailles — livré avec câble USB et capuchon de protection"
    ],
    "price": 139,
    "oldPrice": 259,
    "stock": 110,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772017797/1_ea58yu.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017798/2_n2r57o.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772017801/3_nb9jnm.jpg"
    ],
    "category": "Santé",
    "rating": 4.6,
    "reviews": 64
  },
  {
    "id": 8206,
    "name": "Carrousel à Épices Rotatif 360° avec 18 Pots — Range-Épices Design Moulin à Vent avec Étiquettes & Entonnoir — Organiseur Cuisine ABS Premium — Noir",
    "description": [
      "18 pots transparents hermétiques avec couvercles noirs pour une conservation parfaite des arômes",
      "Rotation 360° fluide et silencieuse pour accéder instantanément à n'importe quelle épice",
      "Kit complet : 18 étiquettes ardoise repositionnables, stylo craie blanc et entonnoir silicone inclus",
      "Structure ABS premium robuste 23.1x33.7cm — stable sur tout plan de travail sans basculement",
      "Design moulin à vent unique — rangement élégant, fonctionnel et décoratif pour cuisines modernes"
    ],
    "price": 199,
    "oldPrice": 369,
    "stock": 75,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772018068/1_bef39a.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772018068/2_uu5g0c.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 48
  },
  {
    "id": 8207,
    "name": "Étagère à Chaussures 5 Niveaux avec Boîte de Rangement Supérieure — Meuble Chaussures Métal Robuste 185mm par Niveau — Organiseur Entrée & Couloir — Noir",
    "description": [
      "5 niveaux dont 4 espacés de 185mm pour toutes les chaussures + tablette ajourée au sommet",
      "Structure en tubes métalliques noirs mats ultra-résistants avec pieds antidérapants",
      "Capacité jusqu'à 15 paires de chaussures et accessoires sur la tablette supérieure",
      "Assemblage sans outil en quelques minutes grâce aux raccords coulissants et clips solides",
      "Design minimaliste noir mat s'intégrant harmonieusement dans tout intérieur moderne"
    ],
    "price": 229,
    "oldPrice": 429,
    "stock": 60,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772018490/1_k1fpgs.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772018490/2_hnbrii.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 39
  },
  {
    "id": 8208,
    "name": "Séchoir à Linge 3 Niveaux sur Roulettes 40kg — Étendoir Pliable Grande Capacité avec Barres Extensibles & Crochets — Acier & ABS Robuste — Blanc & Bleu",
    "description": [
      "Capacité maximale 40kg sur 3 niveaux de barres en acier inoxydable extensibles",
      "Crochets de suspension latéraux pour cintres — idéal chemises et pantalons sans froissage",
      "4 roulettes pivotantes dont 2 avec blocage pour déplacer et stabiliser facilement le séchoir",
      "Structure acier revêtu blanc et connecteurs ABS bleu résistants sans déformation sous charge",
      "Pliable et ultra-compact pour un rangement sans encombrement après chaque utilisation"
    ],
    "price": 249,
    "oldPrice": 459,
    "stock": 55,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772018889/1_caqdtk.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772018890/3_y1vyxw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772018889/2_xr6hf5.jpg"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 31
  },
  {
    "id": 8209,
    "name": "Fauteuil Gonflable LED Multicolore avec Télécommande — Pouf Lumineux RGB Intérieur & Extérieur — Chaise Lounge Gonflable Rechargeable — Ambiance Festive & Relax",
    "description": [
      "Éclairage RGB programmable 16 couleurs avec télécommande sans fil pour ambiance personnalisée",
      "Confort pouf géant avec dossier enveloppant et assise profonde épousant la forme du corps",
      "PVC haute résistance étanche et anti-UV — utilisable en jardin, terrasse et bord de piscine",
      "Contrôle couleurs, modes lumineux et luminosité depuis le canapé sans se lever",
      "Idéal soirées gaming, cinéma, apéros amis ou décoration lumineuse chambre d'ado"
    ],
    "price": 299,
    "oldPrice": 460,
    "stock": 35,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772019662/1_v1ytfz.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772019662/2_nylpys.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 44
  },
  {
    "id": 8210,
    "name": "Rangement à Épices Coulissant 2 Niveaux — Organiseur Modulable Tiroir Pull-Out pour Placard & Plan de Travail — 12 Emplacements — ABS Premium — Gris",
    "description": [
      "Système pull-out innovant : accès instantané à toutes vos épices d'un simple glissement",
      "12 emplacements sur 2 niveaux coulissants indépendants pour toutes tailles de pots",
      "Système modulaire empilable — combinez plusieurs unités pour un rangement évolutif",
      "Fentes latérales transparentes pour visualiser le contenu sans tout sortir du placard",
      "ABS premium gris résistant aux chocs et à l'humidité — surface facile à nettoyer"
    ],
    "price": 189,
    "oldPrice": 349,
    "stock": 90,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032085/1_pm4khk.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032084/2_ludjqr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032092/3_kw37xx.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032084/4_stojmv.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 47
  },
  {
    "id": 8211,
    "name": "Fitness Air Walker InnovaGoods Wairess — Appareil de Marche Elliptique Pliable avec Guide d'Exercices — Cardio & Tonification Corps Complet — Noir & Rouge",
    "description": [
      "Mouvement elliptique fluide simulant la marche aérienne sans impact sur les articulations",
      "Sollicite jambes, hanches, fessiers et abdominaux — brûle des calories efficacement à domicile",
      "Poignées ergonomiques réglables intégrant le travail des bras pour un cardio corps complet",
      "Guide d'exercices inclus avec programme structuré pour tous les niveaux",
      "Compact et pliable — se range facilement après chaque séance sans abonnement ni salle de sport"
    ],
    "price": 599,
    "oldPrice": 1099,
    "stock": 20,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032150/1_tqxulz.png"
    ],
    "category": "Sport",
    "rating": 4.6,
    "reviews": 29
  },
  {
    "id": 8212,
    "name": "Set 3 Boîtes de Rangement Sous-Vêtements & Chaussettes — Organiseurs Tiroir à Compartiments en Tissu Mesh Respirant — Pliables & Lavables — Rose, Blanc & Gris",
    "description": [
      "Set 3 tailles adaptées : grande pour soutiens-gorge, moyenne pour culottes, petite pour chaussettes",
      "Tissu mesh respirant semi-transparent pour éviter humidité et visualiser le contenu",
      "Armature rigide intégrée maintenant la forme — pliable à plat pour un rangement compact",
      "Matière lavable en machine pour une hygiène irréprochable sur le long terme",
      "Disponible en Rose, Blanc et Gris — s'adapte à tous les styles de dressing et chambre"
    ],
    "price": 89,
    "oldPrice": 169,
    "stock": 130,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032173/1_icynif.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032173/bo%C3%AEte-de-rangement_2_j2xi5n.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032172/bo%C3%AEte-de-rangement_rxytvd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032172/bo%C3%AEte-de-rangement_1_oovfss.jpg"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 61
  },
  {
    "id": 8213,
    "name": "Séchoir Électrique Pliable InnovaGoods — Étendoir Chauffant sur Roulettes 2 Niveaux — Séchage Rapide Linge Intérieur — Acier Inoxydable — Blanc & Gris",
    "description": [
      "Ventilation chauffante intégrée accélérant le séchage jusqu'à 3x par rapport à un séchoir classique",
      "2 niveaux de barres extensibles en acier inoxydable avec ailes latérales dépliables",
      "Résistance basse consommation diffusant un air chaud doux préservant les fibres délicates",
      "4 roulettes pivotantes dont 2 avec blocage pour déplacer et stabiliser facilement",
      "Pliable et compact — idéal appartements sans sèche-linge et textiles délicats toutes saisons"
    ],
    "price": 449,
    "oldPrice": 829,
    "stock": 25,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032269/1_vxkvv1.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032268/2_tof0wh.jpg"
    ],
    "category": "Électroménager",
    "rating": 4.5,
    "reviews": 36
  },
  {
    "id": 8214,
    "name": "Mini Réfrigérateur à Cosmétiques InnovaGoods Kulco — Petit Frigo Beauté 4L Chaud & Froid — Conservation Soins & Crèmes — USB & 220V — Bleu Pastel",
    "description": [
      "Double fonction chaud & froid pour conserver et chauffer crèmes, sérums et masques",
      "4 litres avec étagère amovible et rangements latéraux pour toutes tailles de produits",
      "Prolonge la durée de vie des actifs cosmétiques sensibles à la chaleur",
      "Double alimentation USB et secteur 220V — utilisable à la maison, au bureau et en déplacement",
      "Design compact bleu pastel élégant s'intégrant sur coiffeuse, salle de bain ou bureau"
    ],
    "price": 349,
    "oldPrice": 649,
    "stock": 45,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032305/1_e5j7zl.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032304/2_nrhpqz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032305/3_do1syt.jpg"
    ],
    "category": "Beauté",
    "rating": 4.7,
    "reviews": 53
  },
  {
    "id": 8215,
    "name": "Visseuse à Percussion Sans Fil 21V Kit Complet — 2 Batteries + Chargeur + 100 Accessoires Bricolage — Perceuse Professionnelle Maison & Chantier — Jaune & Noir",
    "description": [
      "Moteur 21V avec 2 batteries lithium-ion et chargeur rapide pour une autonomie sans interruption",
      "Kit 100 accessoires : forets béton/métal, embouts vissage, clés, pinces, scie, cutter et chevilles",
      "Mandrin auto-serrant 10mm avec mode percussion pour béton, brique, bois et métal",
      "Couple réglable sur plusieurs niveaux pour adapter la puissance selon les matériaux",
      "Idéal bricoleurs débutants et confirmés — mallette complète pour tous travaux de rénovation"
    ],
    "price": 399,
    "oldPrice": 749,
    "stock": 35,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032368/1_qedb49.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032368/2_fuovkk.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032368/3_qih5ox.jpg"
    ],
    "category": "Industrie",
    "rating": 4.6,
    "reviews": 72
  },
  {
    "id": 8216,
    "name": "Aspirateur Sans Fil Portable 2 en 1 — Balai & Main Ultra-Léger Rechargeable — Puissant & Silencieux pour Sol, Canapé & Voiture — Blanc & Orange",
    "description": [
      "Convertible en balai ou aspirateur à main en quelques secondes — liberté de nettoyage totale",
      "Moteur haute aspiration puissant et silencieux capturant même les particules les plus fines",
      "Ultra-léger et ergonomique — sol, parquet, canapé, matelas, voiture et surfaces verticales",
      "Batterie rechargeable autonomie complète — cuve transparente facile à vider et filtre lavable",
      "Design moderne blanc et orange — idéal appartements, maisons, voitures et bureaux"
    ],
    "price": 299,
    "oldPrice": 549,
    "stock": 60,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032419/1_xvxggx.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032418/2_p5uohd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032419/3_vfdgta.jpg"
    ],
    "category": "Électroménager",
    "rating": 4.4,
    "reviews": 68
  },
  {
    "id": 8217,
    "name": "Coussin Masseur EMS Électrique pour Pieds — Tapis de Massage par Stimulation Musculaire Rechargeable USB — 8 Modes & 19 Intensités — Réflexologie & Circulation — Noir",
    "description": [
      "Technologie EMS stimulant les points de réflexologie pour soulager douleurs et fatigue des pieds",
      "8 modes de massage et 19 niveaux d'intensité pour une séance entièrement personnalisée",
      "Améliore la circulation sanguine, réduit les jambes lourdes et favorise la récupération musculaire",
      "Format tapis pliable 31x29cm rechargeable USB — utilisable partout à la maison, au bureau ou en déplacement",
      "Idéal douleurs plantaires, mauvaise circulation et récupération après effort ou journée debout"
    ],
    "price": 199,
    "oldPrice": 369,
    "stock": 80,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032466/ems-coussin-masseur-%C3%A9lectrique_1_catyfo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032466/ems-coussin-masseur-%C3%A9lectrique_2_jxbmhz.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032467/ems-coussin-masseur-%C3%A9lectrique_3_ydmm49.jpg"
    ],
    "category": "Santé",
    "rating": 4.5,
    "reviews": 55
  },
  {
    "id": 8218,
    "name": "Meuble de Rangement 4 Tiroirs Coulissants Semi-Transparents — Commode Modulable 5 Niveaux 94cm — Organiseur Chaussures, Vêtements & Accessoires — Blanc & Noir",
    "description": [
      "4 grands tiroirs semi-transparents coulissants silencieusement sur rails pour visualiser le contenu",
      "Structure aluminium 66x29x94cm — empreinte réduite pour volume de rangement maximal",
      "Tablette supérieure ouverte et pieds réglables pour une stabilité parfaite sur sols inégaux",
      "Idéal comme rangement chaussures, commode chambre, meuble dressing ou organiseur bureau",
      "Design épuré blanc et noir s'adaptant à tous les styles d'intérieur contemporains"
    ],
    "price": 279,
    "oldPrice": 519,
    "stock": 50,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032614/1_eboab6.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032614/2_ekpmtl.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032614/3_gdeqyn.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 42
  },
  {
    "id": 8219,
    "name": "Armoire Penderie Portable Démontable 170cm — Dressing Tissu Non-Tissé avec Tringles & 9 Compartiments — Montage Facile Sans Vis — 130x45x170cm — Violet & Blanc",
    "description": [
      "2 tringles acier chromé solides + 9 compartiments pour vêtements sur cintres et articles pliés",
      "Housse tissu non-tissé violet respirante protégeant vêtements de la poussière et de l'humidité",
      "Montage et démontage sans vis ni outils grâce aux connecteurs clips intuitifs en quelques minutes",
      "Dimensions 130x45x170cm — idéale pour chambres, dressings, locations et espaces d'appoint",
      "Rapport qualité-prix exceptionnel pour doubler sa capacité vestimentaire facilement"
    ],
    "price": 259,
    "oldPrice": 479,
    "stock": 45,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772032820/1_nghr5n.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032820/2_kvik0g.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032820/3_rdqgsd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772032820/4_ny74jq.jpg"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 38
  },
  {
    "id": 8220,
    "name": "Étagère à Chaussures 9 Niveaux avec Housse Anti-Poussière — Meuble Chaussures Grande Capacité 160cm — Compatible Tous Types de Chaussures — 60x30x160cm — Noir & Gris",
    "description": [
      "9 niveaux pour jusqu'à 27 paires de toutes tailles — des ballerines aux bottes longues",
      "Housse tissu non-tissé avec fermeture éclair protégeant intégralement vos chaussures",
      "Barres acier inoxydable anti-rouille robustes avec espacement généreux pour bottes et bottines",
      "Montage et démontage sans outil — facilement repositionnable selon vos besoins saisonniers",
      "Idéale familles nombreuses et passionnés de chaussures — 60x30x160cm, noir & gris"
    ],
    "price": 219,
    "oldPrice": 399,
    "stock": 65,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772040986/1_nkjckj.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772040984/2_wfln3j.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772040986/3_w6v6dm.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772040987/4_vkgkhh.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772040993/5_yn1g51.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 56
  },
  {
    "id": 8221,
    "name": "Balance Cuillère Numérique LCD Portable 500g — Cuillère Doseuse Électronique de Précision 0.1g — Idéale Cuisine, Pâtisserie & Régime — Noir",
    "description": [
      "Précision remarquable de 0.1g jusqu'à 500g — idéale épices, sel, sucre, levure et médicaments",
      "Écran LCD rétroéclairé avec fonction tare pour peser plusieurs ingrédients successifs sans calcul",
      "Tête amovible détachable lavable à l'eau ou au lave-vaisselle pour une hygiène parfaite",
      "Format ultra-compact — tient dans un tiroir, trousse de voyage ou sac à main",
      "Indispensable cuisiniers, pâtissiers exigeants et personnes suivant un régime alimentaire strict"
    ],
    "price": 79,
    "oldPrice": 149,
    "stock": 150,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772041059/1_iuliwn.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041062/2_ypsomo.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041060/3_sl0pv5.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041061/4_nzger9.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041065/5_bpcvrl.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 77
  },
  {
    "id": 8222,
    "name": "Visseuse Électrique Sans Fil 42V — Kit Tournevis Rechargeable USB avec Mallette 45 Accessoires — Embouts, Douilles & Rallonge Flexible — Noir & Rouge",
    "description": [
      "Corps pivotant 240mm droit ou 120mm pistolet pour travailler dans tous les angles restreints",
      "Kit 45 accessoires : embouts Phillips/Torx, douilles, forets, rallonge flexible serpentine",
      "Batterie lithium-ion rechargeable via USB standard — compatible tout chargeur ou powerbank",
      "Livré dans sa mallette rigide complète pour un rangement organisé et un transport sécurisé",
      "Idéale assemblage meubles, fixation étagères et réparations domestiques courantes"
    ],
    "price": 179,
    "oldPrice": 329,
    "stock": 85,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772041155/1_bauls9.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041155/2_qky4d8.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041156/3_auqjrp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041159/4_eyckxw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772041161/5_asgd3f.jpg"
    ],
    "category": "Industrie",
    "rating": 4.4,
    "reviews": 63
  },
  {
    "id": 8223,
    "name": "Appareil de Musculation Cuisses & Fessiers avec Compteur LCD — Exerciseur Adducteurs Portable — Tonification Jambes, Bassin & Plancher Pelvien — Violet",
    "description": [
      "Cible adducteurs, abducteurs, fessiers et plancher pelvien par compression et écartement répétés",
      "Compteur LCD affichant le nombre de répétitions en temps réel pour suivre votre progression",
      "Palettes ovales antidérapantes adaptées aux genoux ou chevilles selon l'exercice",
      "Compact et léger — utilisable assis, allongé, en voiture ou n'importe où sans contrainte",
      "Idéal tonifier cuisses, raffermir fessiers et renforcer plancher pelvien après grossesse"
    ],
    "price": 119,
    "oldPrice": 219,
    "stock": 100,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772043103/appareil-de-musculation-des-cuisses_1_ydm0xw.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772043105/appareil-de-musculation-des-cuisses_nv5u6f.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772043103/appareil-de-musculation-des-cuisses_2_mg9yjo.jpg"
    ],
    "category": "Sport",
    "rating": 4.3,
    "reviews": 49
  },
  {
    "id": 8224,
    "name": "Tableau de Sable en Mouvement 3D — Cadre Décoratif Paysage de Sable Dynamique sous Verre — Art Zen Anti-Stress — Décoration Bureau & Salon — Plusieurs Couleurs & Tailles",
    "description": [
      "Sables colorés et liquide visqueux créant des paysages naturels uniques à chaque retournement",
      "Effet hypnotique et apaisant — outil de décompression visuelle idéal pour le bureau",
      "Cadre circulaire métal noir et base bois laqué noir s'intégrant à tous les styles d'intérieur",
      "Disponible en plusieurs tailles et coloris : orange, bleu et vert selon les préférences",
      "Cadeau original et unique par excellence pour anniversaires, fêtes et événements d'entreprise"
    ],
    "price": 169,
    "oldPrice": 319,
    "stock": 55,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772043152/1_h0u4ce.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772043155/5_f8vcom.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772043153/4_xnh7ql.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772043155/3_oolqx3.jpg"
    ],
    "category": "Ménage",
    "rating": 4.6,
    "reviews": 41
  },
  {
    "id": 8225,
    "name": "Kit Dilatateur Nasal Premier 30 Jours — Patchs Nasaux Anti-Ronflement & Dilatateur Silicone Réutilisable — Respiration Optimale Nuit & Sport — 30 Patchs + 1 Dilatateur",
    "description": [
      "30 patchs nasaux à micro-ressort ouvrant les narines jusqu'à 82% de plus qu'une bandelette classique",
      "Dilatateur en silicone médical souple hypoallergénique réutilisable pour nuit et sport",
      "Sans médicament ni effet secondaire — réduit ronflements et améliore la qualité du sommeil",
      "Soulage congestion nasale liée aux rhumes, allergies et déviation de la cloison",
      "Kit starter 30 jours complet — solution anti-ronflement discrète et efficace dès la première nuit"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 120,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772043220/1_bmrkh1.png"
    ],
    "category": "Santé",
    "rating": 4.2,
    "reviews": 34
  },
  {
    "id": 8226,
    "name": "Kit Pistolet à Souder Électrique Automatique — Fer à Souder Manuel + Fil de Soudure 63/37 — Température Stable & Opération One-Key — Idéal Électronique, Circuits & Réparations",
    "description": [
      "Alimentation automatique du fil par gâchette — soudure régulière et précise d'une seule main",
      "Température stable et contrôlée pour une fusion homogène sans surchauffe des composants",
      "Poignée antidérapante ergonomique réduisant la fatigue lors des longues sessions de soudage",
      "Bobine de fil 63/37 incluse pour des soudures solides, brillantes et durables",
      "Idéal électroniciens, réparateurs téléphones/PC et amateurs DIY — kit complet prêt à l'emploi"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 70,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772043252/1_acil06.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772043252/2_fctn3e.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 38
  },
  {
    "id": 8227,
    "name": "Lot de 2 Boîtes de Rangement Pliables en Tissu — Panier Organisateur avec Poignées en Cuir & Armature Métallique — Rangement Vêtements, Linge & Accessoires — Style",
    "description": [
      "Armature métallique rigide maintenant parfaitement la forme même à pleine capacité",
      "Poignées en cuir synthétique marron caramel pour un transport confortable et sécurisé",
      "Grande capacité pour vêtements pliés, pulls, linge, jouets, livres et accessoires",
      "Entièrement pliables et empilables pour optimiser l'espace en placard, étagère ou sous le lit",
      "Vendu en lot de 2 — design épuré et moderne s'intégrant à toute décoration intérieure"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 95,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045022/1_q3yw0q.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045009/2_bish8b.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045019/3_vuqptn.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045022/4_zx0abk.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 57
  },
  {
    "id": 8228,
    "name": "Panier à Linge Multicompartiments sur Pied — Trieur de Linge 4 Sections Socks/Underwear/Dark/White — Structure Métallique & Sacs Amovibles — Organisation Lessive Facile",
    "description": [
      "4 compartiments identifiés Chaussettes, Sous-vêtements, Foncé et Clair pour un tri immédiat",
      "Sacs Oxford résistants et imperméables se détachant facilement pour aller directement en machine",
      "Structure métallique blanche stable supportant un chargement important sur deux niveaux",
      "Étagère supérieure pratique pour poser produits lessiviers et accessoires",
      "Design bicolore noir et blanc s'intégrant élégamment dans buanderie, salle de bain ou chambre"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 75,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045113/1_gcxc0i.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045100/2_saddxr.jpg"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 43
  },
  {
    "id": 8229,
    "name": "Étagère Extensible Sous Évier 2 Niveaux — Organisateur Cuisine Réglable en Hauteur & Largeur — Rangement Casseroles, Vaisselle & Épicerie — Structure Métallique Blanche",
    "description": [
      "Système d'extension réglable en hauteur et largeur contournant tuyaux et siphons sans outil",
      "2 niveaux superposés multipliant instantanément l'espace de stockage sous évier",
      "Métal anti-corrosion et anti-rouille supportant une charge importante dans environnement humide",
      "Démontable pour nettoyage facile et rangement compact lorsqu'elle n'est pas utilisée",
      "Idéale pour exploiter à 100% l'espace perdu sous évier de cuisine ou salle de bain"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 105,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045202/1_ygfov3.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045197/2_fsyu29.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045203/3_sf8i9z.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 66
  },
  {
    "id": 8230,
    "name": "Organisateur d'Évier Multifonction — Porte-Éponge, Porte-Savon & Séchoir Torchon Intégré — Rangement Bord d'Évier Cuisine — Structure Métallique Beige",
    "description": [
      "4 fonctions en 1 : porte-éponge, porte-savon, range-tampon à récurer et séchoir à torchon",
      "Barre supérieure perforée pour sécher torchons et lavettes directement au-dessus de l'évier",
      "Grilles aérées pour évacuation optimale de l'eau et séchage rapide des accessoires",
      "Métal traité anti-corrosion résistant à l'humidité permanente de la cuisine",
      "Design beige minimaliste — se pose sur le bord de l'évier sans perçage ni fixation"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 115,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045296/1_yrlgda.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045287/2_xnnpde.jpg"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 54
  },
  {
    "id": 8231,
    "name": "Kit 5 Exerciseurs de Main & Doigts — Pince à Main Réglable 5-60kg, Balle Anti-Stress, Anneau de Résistance, Extenseur de Doigts & Knuckle Gripper — Renforcement Musculaire & Rééducation",
    "description": [
      "Pince à main réglable 5-60kg avec ressort acier heavy duty pour une progression graduée",
      "Balle anti-stress + anneau silicone + extenseur de doigts + knuckle gripper à ressorts indépendants",
      "Renforce poigne, avant-bras et chaque doigt individuellement — rééquilibre la musculature de la main",
      "Compacts et transportables — utilisables à la maison, au bureau, en salle de sport ou en déplacement",
      "Idéal sportifs, grimpeurs, musiciens, gamers et personnes en rééducation de la main"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 90,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045359/1_pcy8il.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045352/2_fms9ho.jpg"
    ],
    "category": "Sport",
    "rating": 4.5,
    "reviews": 46
  },
  {
    "id": 8232,
    "name": "Canapé Lit Gonflable Lounger — Chaise Longue Gonflable Ergonomique 138x78x66cm — Intérieur & Extérieur Camping, Jardin, Plage — Confort Premium Bicolore",
    "description": [
      "Forme incurvée ergonomique avec dossier haut et assise longue pour un soutien lombaire optimal",
      "Bimatière premium : flock velveté doux dessus et base PVC épais imperméable et résistant",
      "Gonflage rapide et rangement compact dans son sac pour emporter partout en voyage",
      "Capacité de charge généreuse — confortable pour adultes de toutes morphologies",
      "Idéal camping, plage, jardin, festival ou salon — 138x78x66cm, intérieur et extérieur"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 45,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045410/1_mvphex.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045407/2_uknsy5.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 33
  },
  {
    "id": 8233,
    "name": "Collier Cervical Gonflable 3 Niveaux — Tracteur de Cou Thérapeutique — Soulagement Douleurs Cervicales, Hernie Discale & Nerf Coincé — Traction Cervicale Domicile",
    "description": [
      "Traction cervicale progressive par poire manuelle — 3 niveaux ajustables pour décompression sécurisée",
      "Décomprime disques intervertébraux, libère nerfs comprimés et soulage instantanément la douleur",
      "Conception 3 chambres épousant la courbure naturelle du cou pour un maintien anatomique optimal",
      "Revêtement velours doux hypoallergénique — port confortable 15-20 min par session",
      "Dégonflable et compact — thérapie cervicale accessible partout sans équipement médical encombrant"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 85,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045457/1_buqbom.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045453/2_orsqln.jpg"
    ],
    "category": "Santé",
    "rating": 4.3,
    "reviews": 51
  },
  {
    "id": 8234,
    "name": "Kit de Construction Cabane DIY Enfants — Jeu de Billes & Tiges d'Assemblage — Construisez Tentes, Tunnels & Tipis — Jouet Éducatif Créatif 3D — Intérieur & Extérieur",
    "description": [
      "Boules multicolores perforées et tiges flexibles pour construire tipis, tunnels et igloos librement",
      "Assemblage intuitif sans outil dès 3 ans — développe motricité fine, créativité et logique spatiale",
      "Plastique ABS non toxique certifié normes sécurité jouets — supporte couverture pour vraie cabane",
      "Boules rouge, jaune, bleu et vert stimulant l'éveil sensoriel et la reconnaissance des couleurs",
      "Compact et léger — intérieur et extérieur, cadeau créatif et éducatif idéal de 3 à 10 ans"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 75,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045512/1_ii9yfn.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045502/2_vuvgw7.jpg"
    ],
    "category": "Jouets",
    "rating": 4.6,
    "reviews": 48
  },
  {
    "id": 8235,
    "name": "Coussin Gel Egg Sitter — Galette de Siège Nid d'Abeille Anti-Pression — Soulagement Coccyx, Dos & Sciatique — Maison, Bureau & Voiture — Universel Toutes Chaises",
    "description": [
      "Structure nid d'abeille double couche redistribuant uniformément chaque point de pression",
      "Soulage hémorroïdes, sciatiques, hernies discales, coccyx douloureux et lombalgies chroniques",
      "Cellules ouvertes aérées maintenant une température fraîche et agréable en toutes saisons",
      "Conserve parfaitement sa forme après usage — durable contrairement aux coussins mémoire de forme",
      "Compatible toutes chaises de bureau, sièges auto, salle à manger, bancs et gradins"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 100,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045651/1_i4y455.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045647/2_qerr7c.jpg"
    ],
    "category": "Santé",
    "rating": 4.5,
    "reviews": 73
  },
  {
    "id": 8236,
    "name": "Presse-Agrumes Électrique Portable Rechargeable USB — Extracteur de Jus Sans Fil Oranges, Citrons & Pamplemousses — Séparation Automatique Pulpe — Design Compact & Silencieux",
    "description": [
      "Rechargeable par USB — prépare des jus frais n'importe où sans prise électrique ni encombrement",
      "Moteur silencieux pressant automatiquement dès que l'agrume est posé — sans éclaboussures",
      "Séparation automatique pulpe et pépins pour un jus parfaitement lisse via bec verseur orientable",
      "Entièrement démontable et lavable — composants sans BPA certifiés contact alimentaire",
      "Design compact pastel blanc et vert menthe — cadeau idéal pour amateurs de jus sains et sportifs"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 95,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045703/1_bsgnpc.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045702/2_a1nlzx.jpg"
    ],
    "category": "Électroménager",
    "rating": 4.4,
    "reviews": 59
  },
  {
    "id": 8237,
    "name": "Projecteur Laser USB Ambiance Étoiles — Veilleuse Galaxie LED Rouge Flexible — Décoration Plafond Voiture, Chambre & Soirée — Plug & Play PC, Powerbank & Chargeur",
    "description": [
      "Transforme plafond voiture ou chambre en ciel étoilé rouge — se branche sur tout port USB",
      "Col de cygne flexible orientable à 360° pour couvrir l'intégralité du plafond ou de la pièce",
      "Format clé USB ultra compact — tient dans une poche, vide-poches ou boîte à gants",
      "Plug & Play sans driver ni application — magie instantanée dès le branchement",
      "Idéal trajets nocturnes, décoration chambre romantique, soirées et veilleuse galaxie originale"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 110,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045753/1_hfjw3f.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045750/2_x0mhqu.jpg"
    ],
    "category": "Automobiles",
    "rating": 4.3,
    "reviews": 44
  },
  {
    "id": 8238,
    "name": "Lampe Solaire LED Extérieure Fausse Caméra 77 LED — Détecteur de Mouvement PIR & Télécommande — Éclairage Sécurité Jardin, Entrée & Façade — IP65 Waterproof",
    "description": [
      "77 LED haute luminosité avec détecteur PIR large angle déclenchant l'allumage automatique",
      "Panneau solaire intégré rechargeant la batterie pour un éclairage autonome toute la nuit",
      "Télécommande sans fil pour contrôler modes, sensibilité et temporisation depuis l'intérieur",
      "Design caméra dissuasif combinant éclairage sécurité et effet surveillance en 1 accessoire",
      "Certification IP65 waterproof — résistant pluie, gel et UV pour une utilisation toute l'année"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 80,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045799/1_r6suvv.png"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 62
  },
  {
    "id": 8239,
    "name": "Table de Dessin Enfant avec Projecteur Dinosaure — Tableau Traçage Lumineux + Livre de Dessin Inclus — Apprentissage Créatif & Artistique — 25x21x34.5cm Dès 3 Ans",
    "description": [
      "Projecteur dinosaure orientable projetant des modèles pour guider l'enfant dans l'apprentissage du dessin",
      "Changement de diapositives intégré dans la bouche du dinosaure pour varier les sujets",
      "Structure stable 25x21x34.5cm sur 4 pieds — fonctionne sur 3 piles AA sans fil",
      "Livre de dessin 14x12cm inclus avec modèles supplémentaires adaptés à l'âge",
      "Idéal 3-8 ans — développe créativité, motricité fine et concentration de manière ludique"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 65,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045877/1_lfv2fj.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045875/2_g4xshd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045877/3_m7hneh.jpg"
    ],
    "category": "Jouets",
    "rating": 4.6,
    "reviews": 52
  },
  {
    "id": 8240,
    "name": "Étagère de Rangement Au-Dessus WC & Machine à Laver 3 Niveaux — Colonne Salle de Bain Multifonction 163cm — Organisateur Toilette & Buanderie — Structure Métallique Blanche",
    "description": [
      "3 niveaux 68cm de large s'installant au-dessus des WC ou machine à laver pour exploiter l'espace en hauteur",
      "Hauteur réglable jusqu'à 163cm avec 90cm d'espace libre en bas pour tout type d'appareil",
      "Acier anti-corrosion et anti-rouille supportant une charge importante en environnement humide",
      "Assemblage rapide sans outil ni perçage mural — repositionnable facilement selon les besoins",
      "Idéale salle de bain et buanderie — espace sanitaire parfaitement organisé au quotidien"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 85,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772045977/1_go5a8b.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772045976/2_ozmjaw.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 58
  },
  {
    "id": 8241,
    "name": "Aspirateur Anti-Acariens Sans Fil 8000Pa — Stérilisation UV 99.9% & Battage Haute Fréquence — Protection Literie, Matelas, Oreillers & Canapé — Santé Famille & Bébé",
    "description": [
      "8000Pa de force d'aspiration éliminant acariens, allergènes et poils en profondeur dans les fibres",
      "Battage haute fréquence délogeant les acariens incrustés là où l'aspiration classique ne suffit pas",
      "Lampe UV stérilisatrice intégrée éliminant 99.9% des bactéries et virus sans produit chimique",
      "Réservoir transparent amovible et lavable pour vidage hygiénique et sans contact",
      "Sans fil et léger — traitement complet de toute la literie sans contrainte de câble"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 70,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772046236/1_bmpjnh.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046236/2_mzawlg.jpg"
    ],
    "category": "Santé",
    "rating": 4.6,
    "reviews": 67
  },
  {
    "id": 8242,
    "name": "Lampe LED Magnétique Baseus — Éclairage Bureau & Étagère Sans Fil Rechargeable USB — Luminosité Réglable 5% à 100% — 3 Modes Couleur — Fixation Magnétique Sans Perçage",
    "description": [
      "Fixation magnétique adhésive sans perçage sous étagères, armoires et meubles de bureau",
      "Luminosité réglable en continu de 5% à 100% pour protéger la vue lors des longues sessions",
      "3 modes de couleur : blanc froid, neutre et chaud pour chaque ambiance et activité",
      "Batterie rechargeable USB haute capacité — plusieurs heures d'autonomie sans fil",
      "Design ultra-fin aluminium argenté Baseus avec boutons tactiles intégrés intuitifs"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 120,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772046280/1_jlkqws.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046280/2_higmlw.jpg"
    ],
    "category": "Électronique",
    "rating": 4.5,
    "reviews": 49
  },
  {
    "id": 8243,
    "name": "Lampe Projecteur Sunset RGB 16 Couleurs — Contrôle Application & Télécommande — Projection Coucher de Soleil Ambiance — Décoration Chambre, Salon & Photo — USB",
    "description": [
      "16 modes RGB programmables du rouge coucher de soleil au violet galaxie et multicolore arc-en-ciel",
      "Contrôle dual via application Bluetooth et télécommande infrarouge incluse",
      "Projette un halo lumineux circulaire envoûtant sur murs et plafond pour ambiance unique",
      "Design minimaliste noir mat avec pied stable — aussi esthétique éteint qu'allumé",
      "Alimenté USB — accessoire déco lumineux viral idéal créateurs de contenu et photographes"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 105,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772046320/1_mm7yr2.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046320/2_m8kten.jpg"
    ],
    "category": "Électronique",
    "rating": 4.6,
    "reviews": 78
  },
  {
    "id": 8244,
    "name": "Distributeur Automatique Mini Bonbons & Fruits Secs — Design Boule Sphérique Élégant — Distributeur à Capteur Tactile — Noix, Dragées, Confiseries & Snacks — Déco Table",
    "description": [
      "Distribution automatique par capteur infrarouge ou tactile — propre, hygiénique et sans contact",
      "Coque supérieure transparente pour visualiser la quantité et l'effet décoratif des confiseries",
      "Base aluminium brossé argenté et tige métallique pour un design premium moderne et raffiné",
      "Réservoir grande capacité se remplissant facilement par le haut et se démontant pour nettoyage",
      "Cadeau original inattendu — soirées, bureaux et salons pour un grignotage convivial et élégant"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 60,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772046357/1_fph8vm.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046357/2_wqplsf.jpg"
    ],
    "category": "Électronique",
    "rating": 4.4,
    "reviews": 36
  },
  {
    "id": 8245,
    "name": "Porte-Brosse à Dents Mural UV Stérilisateur Intelligent — Détecteur Automatique 1.5m & Distributeur Dentifrice — 4 Emplacements Famille — Rechargeable Solaire — Sans Perçage",
    "description": [
      "Stérilisation UV 99.9% s'activant et se désactivant automatiquement par capteur de présence à 1.5m",
      "4 emplacements individuels pour brosses de toute la famille sans contact entre elles",
      "Distributeur dentifrice intégré dosant proprement la pâte en un simple appui sans gaspillage",
      "Panneau solaire rechargeable via lumière ambiante — fonctionnement autonome sans câble",
      "Fixation sans perçage par adhésif 3M ultra résistant sur toute surface lisse de salle de bain"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 90,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772046398/1_nmlukm.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046398/2_xhb9mk.jpg"
    ],
    "category": "Santé",
    "rating": 4.5,
    "reviews": 61
  },
  {
    "id": 8246,
    "name": "Coffret Outils 40 Pièces — Clé à Cliquet, Douilles Métriques & Embouts — Kit Outillage Auto & Bricolage — Coffret 24x12cm — Acier Chrome-Vanadium",
    "description": [
      "Clé à cliquet réversible 72 dents pour visser et dévisser dans les deux sens sans retirer la clé",
      "Assortiment complet douilles métriques couvrant tous boulons courants en mécanique et bricolage",
      "Barre d'extension flexible pour atteindre fixations difficiles d'accès en profondeur",
      "Acier chrome-vanadium poli miroir résistant — coffret rigide 24x12cm avec compartiments moulés",
      "Idéal automobilistes, motards et bricoleurs — outillage complet, fiable et transportable"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 75,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772046438/1_yolkur.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046438/2_fa94dd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046439/3_udxzad.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046442/4_q9uf0p.jpg"
    ],
    "category": "Automobiles",
    "rating": 4.4,
    "reviews": 55
  },
  {
    "id": 8247,
    "name": "Lampe de Poche LED Tactique Rechargeable USB — Zoom Télescopique & 5 Modes — Indicateur Batterie — Longue Portée — Randonnée, Camping & Urgence — Batterie 18650 Incluse",
    "description": [
      "LED haute puissance avec portée exceptionnelle de plusieurs centaines de mètres",
      "Zoom télescopique passant d'un faisceau large diffus à un faisceau concentré longue portée",
      "5 modes : haute puissance, puissance moyenne, faible, stroboscope et SOS pour toutes situations",
      "Indicateur de batterie intégré — rechargeable via USB compatible tout chargeur ou powerbank",
      "Batterie 18650 incluse — idéale randonneurs, campeurs, chasseurs et situations d'urgence"
    ],
    "price": 129,
    "oldPrice": 239,
    "stock": 95,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772046492/1_feodsx.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772046492/2_ev40ne.jpg"
    ],
    "category": "Sport",
    "rating": 4.5,
    "reviews": 48
  },
  {
    "id": 8248,
    "name": "Porte-Savon Feuille Auto-Drainant avec Ventouse – Support Mural pour Salle de Bain",
    "description": [
      "Design incliné en forme de feuille permettant à l'eau de s'écouler naturellement — savon toujours sec",
      "Matériau durable de qualité supérieure, doux au toucher et résistant à l'usure quotidienne",
      "Base ventouse puissante se fixant solidement sur toutes surfaces lisses sans percer ni abîmer",
      "Design élégant et minimaliste s'intégrant parfaitement dans toute salle de bain moderne",
      "Économise votre savon et maintient votre espace propre et organisé au quotidien"
    ],
    "price": 99,
    "oldPrice": 169,
    "stock": 140,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772062320/1_jppaak.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062320/2_vs3fcu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062324/3_rdp0dg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062329/4_p18vlc.jpg"
    ],
    "category": "Ménage",
    "rating": 4.4,
    "reviews": 62
  },
  {
    "id": 8249,
    "name": "Distributeur Automatique de Dentifrice + Porte-Brosses à Dents 5 Places – Fixation Murale Sans Perçage",
    "description": [
      "Set 2-en-1 combinant distributeur automatique de dentifrice et porte-brosses 5 places pour toute la famille",
      "Fixation par ventouse puissante — installation en quelques secondes sans abîmer les murs",
      "Dosage automatique précis de dentifrice en une simple pression, zéro gaspillage",
      "ABS haute qualité résistant à l'humidité et facile à nettoyer au quotidien",
      "Design moderne noir et blanc s'intégrant élégamment dans toute salle de bain"
    ],
    "price": 89,
    "oldPrice": 149,
    "stock": 120,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772062384/1_o9vxeg.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062384/2_vbn0lc.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062389/3_azhai8.jpg"
    ],
    "category": "Ménage",
    "rating": 4.3,
    "reviews": 74
  },
  {
    "id": 8250,
    "name": "Lunch Box Chauffante Électrique PROFI MAX Germany – Gamelle Inox 3 Compartiments 220V & 12V Voiture",
    "description": [
      "Chauffe votre repas en 20-30 min avec 2 câbles inclus : 220V secteur + 12V allume-cigare",
      "Compartiment inox alimentaire 3 sections sans odeur, facile à nettoyer et durable",
      "Capacité généreuse pour repas complet : plat principal, légumes et riz sans mélange",
      "Fermetures silicone jaune assurant une étanchéité totale — zéro fuite dans votre sac",
      "Couverts inox inclus, qualité allemande — idéale travailleurs, chauffeurs et voyageurs"
    ],
    "price": 249,
    "oldPrice": 429,
    "stock": 65,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772062437/1_wdeqxc.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062437/2_fjlfjb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062442/3_tzb6xc.jpg"
    ],
    "category": "Électroménager",
    "rating": 4.6,
    "reviews": 83
  },
  {
    "id": 8251,
    "name": "Ouvre-Boîtes Multifonction 5-en-1 InnovaGoods – Ouvre Bocaux, Bouteilles & Canettes en 1 Seul Outil",
    "description": [
      "Remplace 5 ustensiles : ouvre bocaux, bouteilles de bière, canettes, capsules et plastique",
      "Design intelligent permettant d'ouvrir les contenants les plus récalcitrants sans effort",
      "Poignée antidérapante ABS orange — prise en main ferme, idéale pour seniors et mobilité réduite",
      "Ultra léger, résistant à la rouille et à la déformation — se range dans n'importe quel tiroir",
      "Cadeau idéal pour toute cuisine moderne — pratique, rapide et incontournable au quotidien"
    ],
    "price": 49,
    "oldPrice": 89,
    "stock": 200,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772062489/1_qi1q6d.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062489/2_u48hzb.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062496/3_axww2w.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062500/4_w4uvhv.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772062506/5_f1viuu.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 91
  },
  {
    "id": 8252,
    "name": "Bouilloire Électrique Cecotec ThermoSense 120 – 1100W, 1 Litre, Arrêt Automatique, Design Compact Blanc",
    "description": [
      "Chauffe 1 litre d'eau en moins de 3 minutes grâce à sa puissance de 1100W",
      "Arrêt automatique à ébullition pour une sécurité totale et une longue durée de vie",
      "Design épuré blanc et gris s'intégrant élégamment dans toute cuisine moderne",
      "Base rotative 360° pour utilisation droitier ou gaucher — couvercle s'ouvrant d'une pression",
      "Sans BPA, facile à nettoyer et économe en énergie — parfaite pour toute la famille"
    ],
    "price": 199,
    "oldPrice": 349,
    "stock": 85,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772063263/1_bbkikq.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772063266/2_bfh1nu.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772063271/3_vwl3yh.jpg"
    ],
    "category": "Électroménager",
    "rating": 4.6,
    "reviews": 97
  },
  {
    "id": 8253,
    "name": "Arrosoir Décoratif en Métal Blanc – Set 2 Tailles, Pot de Fleurs & Arrosoir Vintage Intérieur/Extérieur",
    "description": [
      "Set 2 tailles : grand modèle fonctionnel et petit transformé en pot de fleurs original et élégant",
      "Métal émaillé blanc avec liseré argenté — peinture résistante à la rouille et aux intempéries",
      "Utilisable en intérieur comme en extérieur pour une polyvalence décorative maximale",
      "Design rétro intemporel s'intégrant dans toute déco scandinave, campagne chic ou bohème",
      "Cadeau décoratif idéal pour sublimer un salon, une terrasse ou un rebord de fenêtre"
    ],
    "price": 129,
    "oldPrice": 219,
    "stock": 80,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772088488/1_cbnobs.png"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 43
  },
  {
    "id": 8254,
    "name": "Ensemble Outils Multifonction DIY Scie à Métaux – Kit 12 Pièces Bois, Métal & PVC avec Mallette de Transport Orange",
    "description": [
      "Kit 12 pièces complet : scie à archet réglable et lames interchangeables bois, métal, PVC et plastique",
      "Poignée ergonomique antidérapante orange et noire pour des coupes nettes et précises sans fatigue",
      "Lames en acier trempé haute résistance pour des performances professionnelles durables",
      "Mallette rigide orange incluse pour protéger, transporter et ranger tous vos outils facilement",
      "Idéal menuisiers, bricoleurs et artisans — investissement durable pour tous projets DIY maison"
    ],
    "price": 179,
    "oldPrice": 299,
    "stock": 55,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772088523/1_hkxe1y.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088527/2_qxpurj.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088533/3_pvfosg.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088542/4_j0yxgq.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088551/5_vxohvu.jpg"
    ],
    "category": "Artisanat",
    "rating": 4.4,
    "reviews": 38
  },
  {
    "id": 8255,
    "name": "Dessous de Plat Silicone Résistant à la Chaleur en Forme de Fleur – Antidérapant, Pliable & Facile à Nettoyer",
    "description": [
      "Silicone premium résistant jusqu'à 230°C — protège table et plan de travail des ustensiles chauds",
      "Design pliable en 6 pétales pour un rangement ultra-compact dans n'importe quel tiroir",
      "Surface antidérapante maintenant vos plats parfaitement stables sans glissement accidentel",
      "Nettoyage en quelques secondes à l'eau courante sans trace ni odeur résiduelle",
      "Multifonction : dessous de casserole, support robot cuisine ou tapis de pot selon les besoins"
    ],
    "price": 39,
    "oldPrice": 69,
    "stock": 200,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772088603/1_gy9y2u.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088607/2_xekeig.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088612/3_iv0867.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088617/4_lqxi6c.jpg"
    ],
    "category": "Ménage",
    "rating": 4.6,
    "reviews": 88
  },
  {
    "id": 8256,
    "name": "Mandoline Multifonction avec Passoire Intégrée – Râpe & Trancheuse Fruits et Légumes 5-en-1 avec Bac Collecteur",
    "description": [
      "5 fonctions en 1 : tranche, râpe, émince et julienne grâce aux lames inox ultra-tranchantes",
      "Bac collecteur avec passoire intégrée récupérant les aliments tout en égouttant l'excès d'eau",
      "Poignée de sécurité ergonomique blanche protégeant les doigts lors de chaque coupe",
      "ABS alimentaire bleu sans BPA, résistant et compatible lave-vaisselle pour un entretien facile",
      "Indispensable pour salades, carottes râpées, concombres et pommes de terre en quelques secondes"
    ],
    "price": 119,
    "oldPrice": 199,
    "stock": 110,
    "badge": "sale",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772088669/1_edtpzr.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088673/2_kagb2u.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088682/3_zf7lou.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088696/4_o9hds4.jpg"
    ],
    "category": "Ménage",
    "rating": 4.5,
    "reviews": 76
  },
  {
    "id": 8257,
    "name": "Lampe de Table Cristal Diamant RGB – 16 Couleurs, Tactile & Télécommande, Rechargeable USB, Ambiance Rose Diamond",
    "description": [
      "Cristal taillé à facettes projetant des reflets féeriques avec 16 couleurs RGB changeantes",
      "Contrôle dual : télécommande incluse ou effleurement tactile pour couleur, luminosité et clignotement",
      "Rechargeable USB — jusqu'à 8h d'autonomie sans fil pour chambre, salon ou soirée romantique",
      "Effet diamant éblouissant transformant instantanément l'ambiance de n'importe quelle pièce",
      "Cadeau parfait anniversaire ou Saint-Valentin — aussi beau allumé qu'éteint"
    ],
    "price": 159,
    "oldPrice": 279,
    "stock": 70,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772088737/1_bvk4nu.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088744/2_o57lks.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088746/3_jvru06.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088760/4_vxesj3.jpg"
    ],
    "category": "Ménage",
    "rating": 4.7,
    "reviews": 54
  },
  {
    "id": 8258,
    "name": "Lampe de Table Diamant Cristal Tactile – 3 Couleurs d'Éclairage, Rechargeable USB, Déco Chambre & Salon",
    "description": [
      "Contrôle tactile à la base passant du blanc froid au blanc chaud jusqu'à l'ambre doré en un effleurement",
      "Abat-jour taillé à facettes et pied cristal transparent créant des reflets scintillants sur murs et plafonds",
      "Rechargeable via câble USB inclus — autonomie longue durée sans prise murale permanente",
      "Ultra légère et compacte — table de nuit, bureau, salon ou terrasse pour soirées féeriques",
      "Cadeau décoratif parfait pour mariage, anniversaire ou pour sublimer son intérieur"
    ],
    "price": 139,
    "oldPrice": 249,
    "stock": 75,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772088919/1_bqxggh.png",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088923/2_cjwn8i.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088928/3_hawjsr.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772088934/4_nq8wlz.jpg"
    ],
    "category": "Ménage",
    "rating": 4.6,
    "reviews": 49
  },
  {
    "id": 8259,
    "name": "Set 6 Organisateurs de Valise Secret Pouch – Cubes de Rangement Voyage Imperméables, Vêtements & Chaussures",
    "description": [
      "Set 6 pochettes séparant vêtements, sous-vêtements, chaussures et accessoires pour retrouver chaque affaire instantanément",
      "Tissu nylon imperméable résistant protégeant vos vêtements de l'humidité et des odeurs",
      "Fermetures éclair robustes et lisses s'ouvrant et se fermant facilement même valise pleine",
      "Format 3 grandes + 3 petites s'adaptant à toutes tailles de valises, sacs et bagages à main",
      "Gain de place garanti — voyagez organisé et stylé avec ce set indispensable en bleu marine"
    ],
    "price": 129,
    "oldPrice": 219,
    "stock": 95,
    "badge": "new",
    "images": [
      "https://res.cloudinary.com/djagllief/image/upload/v1772089217/sacs-de-rangement-portables_1_r6iw2h.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772089223/sacs-de-rangement-portables_2_btkg8b.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772089228/sacs-de-rangement-portables_3_x3gnfp.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772089239/sacs-de-rangement-portables_4_mccnhd.jpg",
      "https://res.cloudinary.com/djagllief/image/upload/v1772089252/sacs-de-rangement-portables_ggihe1.jpg"
    ],
    "category": "Sacs",
    "rating": 4.5,
    "reviews": 67
  },




];
const CATEGORIES=[{name:'Tous',icon:'fas fa-th-large'},{name:'Électronique',icon:'fas fa-microchip'},{name:'Hommes',icon:'fas fa-person'},{name:'Femmes',icon:'fas fa-person-dress'},{name:'Enfants',icon:'fas fa-children'},{name:'Sport',icon:'fas fa-dumbbell'},{name:'Beauté',icon:'fas fa-spa'},{name:'Santé',icon:'fas fa-heart-pulse'},{name:'Bijoux',icon:'fas fa-gem'},{name:'Sacs',icon:'fas fa-bag-shopping'},{name:'Jouets',icon:'fas fa-gamepad'},{name:'Bureau',icon:'fas fa-briefcase'},{name:'Ménage',icon:'fas fa-broom'},{name:'Maison',icon:'fas fa-house'},{name:'Électroménager',icon:'fas fa-blender'},{name:'Automobiles',icon:'fas fa-car'},{name:'Artisanat',icon:'fas fa-hammer'},{name:'Industrie',icon:'fas fa-industry'},{name:'Musique',icon:'fas fa-music'}];
