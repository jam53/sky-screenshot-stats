var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequireaea4;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequireaea4=r),(0,r.register)("1X5mI",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return n},set:function(e){return n=e},enumerable:!0,configurable:!0});var n,r=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)r.set(t[n],{baseUrl:e,path:t[n+1]})}}),r("1X5mI").register(new URL("",import.meta.url).toString(),JSON.parse('["5UlDx","index.14c4b9a3.js","cizYQ","generate-creation-dates.e8bbdd74.js"]'));var i={},o={};o=function(e,t,n){if(t===self.location.origin)return e;var r=n?"import "+JSON.stringify(e)+";":"importScripts("+JSON.stringify(e)+");";return URL.createObjectURL(new Blob([r],{type:"application/javascript"}))};let a=new URL("generate-creation-dates.e8bbdd74.js",import.meta.url);i=o(a.toString(),a.origin,!0),document.getElementById("folder").addEventListener("change",function(e){document.getElementById("folder").className="hidden",document.getElementById("loadingIcon").className="";let t=document.getElementById("loadingText"),n=new Worker(i),r=[...e.target.files].filter(e=>e&&"image"===e.type.split("/")[0]);n.postMessage(r),n.onmessage=function(e){if("string"!=typeof e.data){let t=e.data;window.localStorage.setItem("generatedData",JSON.stringify(t)),window.location.href="stats.html"}else t.innerText=e.data}},!1),document.getElementById("openStats").onclick=function(){window.localStorage.setItem("generatedData",JSON.stringify({validFilesAmount:21462,totalFiles:21601,screenshotsPerDay_Week:[2889,2717,3030,2477,3055,3952,3342],millisecondsPerDay_Week:[194267e3,160606e3,192176e3,184131714,192996273,245027142,213975e3],screenshotsPerHour_Day:[3283,2196,740,156,0,13,72,197,221,752,1089,814,411,455,852,785,753,687,391,578,459,815,2220,3523],screenshotsPerDay_Playtime:{"1595980800000":15,"1596844800000":11,"1596931200000":2,"1597881600000":3,"1597968000000":25,"1599177600000":1,"1600473600000":8,"1606608000000":1,"1607040000000":35,"1607126400000":9,"1607299200000":10,"1607385600000":3,"1607472000000":17,"1607644800000":10,"1607904000000":1,"1608249600000":5,"1608336000000":21,"1608422400000":28,"1608508800000":126,"1608595200000":182,"1608681600000":20,"1608768000000":48,"1608854400000":218,"1608940800000":58,"1609027200000":57,"1609113600000":7,"1609200000000":141,"1609286400000":79,"1609372800000":3,"1609459200000":63,"1609545600000":7,"1609632000000":5,"1609804800000":22,"1610150400000":163,"1610236800000":13,"1610409600000":33,"1610496000000":105,"1610582400000":12,"1610668800000":13,"1610755200000":22,"1610841600000":6,"1610928000000":31,"1611014400000":38,"1611100800000":1,"1611187200000":9,"1611273600000":84,"1611360000000":38,"1611446400000":10,"1611532800000":31,"1611619200000":137,"1611705600000":9,"1611792000000":99,"1611878400000":15,"1612051200000":83,"1612137600000":103,"1612224000000":5,"1612310400000":8,"1612396800000":5,"1612483200000":72,"1612569600000":53,"1612656000000":63,"1612742400000":86,"1612828800000":28,"1613088000000":13,"1613174400000":38,"1613347200000":111,"1613433600000":3,"1613520000000":3,"1613606400000":81,"1613692800000":71,"1613779200000":9,"1613865600000":115,"1613952000000":63,"1614038400000":54,"1614124800000":8,"1614211200000":3,"1614384000000":47,"1614470400000":120,"1614643200000":53,"1614729600000":40,"1614816000000":66,"1614902400000":84,"1614988800000":29,"1615075200000":96,"1615161600000":3,"1615248000000":76,"1615334400000":1,"1615420800000":119,"1615507200000":7,"1615593600000":96,"1615680000000":2,"1615766400000":21,"1615852800000":60,"1615939200000":15,"1616025600000":13,"1616112000000":165,"1616198400000":102,"1616284800000":3,"1616371200000":65,"1616457600000":2,"1616544000000":27,"1616630400000":26,"1616803200000":10,"1616889600000":17,"1617062400000":7,"1617148800000":43,"1617235200000":147,"1617321600000":44,"1617408000000":47,"1617494400000":23,"1617580800000":288,"1617667200000":63,"1617753600000":106,"1617840000000":19,"1617926400000":67,"1618012800000":38,"1618099200000":59,"1618185600000":165,"1618272000000":27,"1618358400000":118,"1618444800000":125,"1618531200000":130,"1618617600000":34,"1618704000000":273,"1618790400000":4,"1618876800000":56,"1618963200000":20,"1619049600000":55,"1619136000000":34,"1619222400000":47,"1619308800000":213,"1619395200000":72,"1619481600000":16,"1619568000000":81,"1619654400000":70,"1619740800000":31,"1619827200000":10,"1619913600000":53,"1620086400000":71,"1620172800000":57,"1620259200000":53,"1620345600000":19,"1620432000000":153,"1620518400000":115,"1620691200000":37,"1620777600000":55,"1620864000000":82,"1620950400000":42,"1621036800000":5,"1621123200000":42,"1621296000000":183,"1621382400000":7,"1621468800000":34,"1621555200000":97,"1621641600000":75,"1621728000000":8,"1621814400000":77,"1621900800000":24,"1621987200000":36,"1622073600000":63,"1622246400000":44,"1622332800000":51,"1622419200000":102,"1622505600000":39,"1622592000000":142,"1622678400000":116,"1622764800000":149,"1622851200000":83,"1622937600000":61,"1623024000000":46,"1623110400000":109,"1623196800000":51,"1623283200000":6,"1623369600000":54,"1623456000000":5,"1623542400000":1,"1623628800000":5,"1623715200000":2,"1623801600000":116,"1623974400000":111,"1624060800000":177,"1624147200000":62,"1624320000000":26,"1624406400000":2,"1624492800000":32,"1624579200000":16,"1624665600000":15,"1624838400000":173,"1624924800000":5,"1625011200000":13,"1625097600000":5,"1625184000000":38,"1625270400000":1,"1625356800000":12,"1625443200000":1,"1625529600000":138,"1625616000000":90,"1625702400000":22,"1625788800000":104,"1625875200000":58,"1625961600000":2,"1626048000000":109,"1626134400000":53,"1626480000000":11,"1626912000000":4,"1627084800000":111,"1627862400000":8,"1628035200000":78,"1628121600000":93,"1628208000000":56,"1628294400000":145,"1628380800000":32,"1628467200000":23,"1628553600000":35,"1628640000000":49,"1628726400000":17,"1628812800000":58,"1628899200000":7,"1628985600000":27,"1629072000000":17,"1630627200000":109,"1630713600000":60,"1630800000000":117,"1631145600000":143,"1631232000000":12,"1631318400000":28,"1631577600000":3,"1631664000000":41,"1631750400000":49,"1631836800000":264,"1631923200000":1,"1632009600000":45,"1632096000000":1,"1632182400000":11,"1633046400000":15,"1633564800000":5,"1634083200000":4,"1634256000000":15,"1634342400000":30,"1634428800000":14,"1634515200000":49,"1634601600000":133,"1634860800000":14,"1635033600000":3,"1635206400000":40,"1635292800000":2,"1635379200000":43,"1635465600000":62,"1635552000000":33,"1635638400000":31,"1635724800000":47,"1635811200000":69,"1635897600000":15,"1635984000000":17,"1636070400000":7,"1636156800000":4,"1636243200000":23,"1636329600000":7,"1636502400000":65,"1636588800000":7,"1636761600000":87,"1636934400000":20,"1637107200000":18,"1637193600000":44,"1637366400000":66,"1637452800000":124,"1637539200000":134,"1637625600000":26,"1637712000000":58,"1637798400000":25,"1637884800000":55,"1637971200000":53,"1638057600000":54,"1638144000000":14,"1638230400000":10,"1638316800000":35,"1638403200000":78,"1638662400000":108,"1638748800000":61,"1638921600000":14,"1639008000000":49,"1639180800000":64,"1639353600000":99,"1639440000000":62,"1639526400000":108,"1639612800000":117,"1639699200000":69,"1639785600000":18,"1639872000000":160,"1639958400000":9,"1640044800000":57,"1640390400000":112,"1640476800000":166,"1640563200000":55,"1640649600000":87,"1640736000000":6,"1640822400000":98,"1640908800000":249,"1640995200000":72,"1641254400000":100,"1641340800000":15,"1641427200000":156,"1641600000000":22,"1641686400000":17,"1641945600000":35,"1642032000000":32,"1642204800000":48,"1642377600000":17,"1642464000000":95,"1642550400000":34,"1642636800000":418,"1642723200000":26,"1642809600000":31,"1642896000000":44,"1642982400000":54,"1643068800000":6,"1643155200000":72,"1643328000000":4,"1643414400000":1,"1643587200000":34,"1643673600000":52,"1643760000000":43,"1643846400000":1,"1643932800000":81,"1644019200000":5,"1644105600000":7,"1644278400000":6,"1644364800000":30,"1645142400000":3,"1645228800000":33,"1645315200000":8,"1645574400000":1,"1645833600000":50,"1646265600000":1,"1646352000000":74,"1646438400000":62,"1646524800000":79,"1646611200000":140,"1646697600000":111,"1647043200000":65,"1647129600000":23,"1647216000000":2,"1647302400000":65,"1647388800000":85,"1647475200000":34,"1647561600000":144,"1647648000000":19,"1648166400000":188,"1648425600000":12,"1648598400000":36,"1648684800000":1,"1648771200000":46,"1648857600000":153,"1649116800000":19,"1649203200000":63,"1649289600000":33,"1649376000000":5,"1649462400000":26,"1649548800000":87,"1649808000000":25,"1649894400000":177,"1649980800000":205,"1650067200000":143,"1650153600000":4,"1650240000000":6,"1650326400000":11,"1650499200000":4,"1650585600000":28,"1650758400000":30,"1651017600000":22,"1651104000000":30,"1651190400000":21,"1651276800000":2,"1651363200000":33,"1651449600000":5,"1651536000000":19,"1651622400000":47,"1651708800000":26,"1651795200000":5,"1651881600000":10,"1652140800000":32,"1652227200000":5,"1652313600000":32,"1652400000000":74,"1652486400000":88,"1652572800000":2,"1652659200000":39,"1652832000000":5,"1653004800000":64,"1653091200000":75,"1653177600000":35,"1653264000000":164,"1653350400000":288,"1653436800000":181,"1653523200000":5,"1653609600000":182,"1653696000000":94,"1653782400000":20},millisecondsPerDay_Playtime:{"1595980800000":535714,"1596844800000":484e3,"1596931200000":286e3,"1597881600000":158e3,"1597968000000":3301e3,"1600473600000":177e3,"1607040000000":2012e3,"1607126400000":1782e3,"1607299200000":293e3,"1607385600000":343e3,"1607472000000":2799e3,"1607644800000":1641e3,"1608249600000":462e3,"1608336000000":2735e3,"1608422400000":5959e3,"1608508800000":9271e3,"1608595200000":11146e3,"1608681600000":2551e3,"1608768000000":312e4,"1608854400000":12623e3,"1608940800000":4247e3,"1609027200000":5428e3,"1609113600000":179e3,"1609200000000":7186e3,"1609286400000":785e4,"1609372800000":9e3,"1609459200000":3273e3,"1609545600000":238e3,"1609632000000":214e3,"1609804800000":1021e3,"1610150400000":5802e3,"1610236800000":1929e3,"1610409600000":4046e3,"1610496000000":6825e3,"1610582400000":2046e3,"1610668800000":2429e3,"1610755200000":1274e3,"1610841600000":569e3,"1610928000000":4165e3,"1611014400000":2376e3,"1611187200000":89e3,"1611273600000":3811e3,"1611360000000":3249e3,"1611446400000":1191e3,"1611532800000":793e3,"1611619200000":6932e3,"1611705600000":104e3,"1611792000000":5024e3,"1611878400000":2213e3,"1612051200000":4554e3,"1612137600000":3805e3,"1612224000000":286e3,"1612310400000":144e3,"1612396800000":151e3,"1612483200000":523e4,"1612569600000":4351e3,"1612656000000":5873e3,"1612742400000":5012e3,"1612828800000":1911e3,"1613088000000":53e3,"1613174400000":2892e3,"1613347200000":4819e3,"1613433600000":816e3,"1613520000000":99e3,"1613606400000":4731e3,"1613692800000":7467e3,"1613779200000":1696e3,"1613865600000":6201e3,"1613952000000":4905e3,"1614038400000":5106e3,"1614124800000":803e3,"1614211200000":77e3,"1614384000000":3898e3,"1614470400000":3669e3,"1614643200000":414e4,"1614729600000":2382e3,"1614816000000":2396e3,"1614902400000":3387e3,"1614988800000":3182e3,"1615075200000":4959e3,"1615161600000":675e3,"1615248000000":3176e3,"1615420800000":2378e3,"1615507200000":28e3,"1615593600000":432e4,"1615680000000":447e3,"1615766400000":269e4,"1615852800000":3783e3,"1615939200000":153e4,"1616025600000":2479e3,"1616112000000":6365e3,"1616198400000":7466e3,"1616284800000":42e3,"1616371200000":5309e3,"1616457600000":575e3,"1616544000000":3977e3,"1616630400000":2175273,"1616803200000":111e3,"1616889600000":1693e3,"1617062400000":694e3,"1617148800000":3815e3,"1617235200000":6131e3,"1617321600000":3992e3,"1617408000000":3496e3,"1617494400000":1408e3,"1617580800000":13613e3,"1617667200000":5936e3,"1617753600000":10745e3,"1617840000000":3737e3,"1617926400000":5103e3,"1618012800000":3292e3,"1618099200000":3929e3,"1618185600000":12182e3,"1618272000000":765e3,"1618358400000":7563e3,"1618444800000":10315e3,"1618531200000":11034e3,"1618617600000":5969e3,"1618704000000":13452e3,"1618790400000":658e3,"1618876800000":5086e3,"1618963200000":893e3,"1619049600000":3985e3,"1619136000000":2163e3,"1619222400000":3394e3,"1619308800000":1107e4,"1619395200000":5724e3,"1619481600000":385e3,"1619568000000":10468e3,"1619654400000":6205e3,"1619740800000":4534e3,"1619827200000":637e3,"1619913600000":6436e3,"1620086400000":7532e3,"1620172800000":435e4,"1620259200000":4251e3,"1620345600000":3696e3,"1620432000000":9693e3,"1620518400000":8978e3,"1620691200000":2171e3,"1620777600000":4008e3,"1620864000000":8261e3,"1620950400000":2749e3,"1621036800000":23e4,"1621123200000":2897e3,"1621296000000":11481e3,"1621382400000":235e3,"1621468800000":3025e3,"1621555200000":7497e3,"1621641600000":6927e3,"1621728000000":1277e3,"1621814400000":7128e3,"1621900800000":1994e3,"1621987200000":3918e3,"1622073600000":3492e3,"1622246400000":2807e3,"1622332800000":2921e3,"1622419200000":2634e3,"1622505600000":2845e3,"1622592000000":9215e3,"1622678400000":8196e3,"1622764800000":5365e3,"1622851200000":6492e3,"1622937600000":3554e3,"1623024000000":178e4,"1623110400000":431e4,"1623196800000":3103e3,"1623283200000":132e3,"1623369600000":3169e3,"1623456000000":256e3,"1623628800000":232e3,"1623715200000":18e3,"1623801600000":7187e3,"1623974400000":6438e3,"1624060800000":7778e3,"1624147200000":2181e3,"1624320000000":2043e3,"1624406400000":395e3,"1624492800000":3886e3,"1624579200000":1279e3,"1624665600000":1739e3,"1624838400000":4911e3,"1624924800000":14e3,"1625011200000":2289e3,"1625097600000":193e3,"1625184000000":3974e3,"1625356800000":1371e3,"1625529600000":3419e3,"1625616000000":6905e3,"1625702400000":297e4,"1625788800000":593e4,"1625875200000":4375e3,"1625961600000":295e3,"1626048000000":10554e3,"1626134400000":1308e3,"1626480000000":498e3,"1626912000000":122e3,"1627084800000":7477e3,"1627862400000":1141e3,"1628035200000":5291e3,"1628121600000":8154e3,"1628208000000":2822e3,"1628294400000":6879e3,"1628380800000":3416e3,"1628467200000":4168e3,"1628553600000":775e3,"1628640000000":6443e3,"1628726400000":2147e3,"1628812800000":4895e3,"1628899200000":147e3,"1628985600000":2599e3,"1629072000000":2285e3,"1630627200000":8014e3,"1630713600000":4158e3,"1630800000000":7765e3,"1631145600000":7903e3,"1631232000000":2515e3,"1631318400000":1809e3,"1631577600000":309e3,"1631664000000":4636e3,"1631750400000":2759e3,"1631836800000":13808e3,"1632009600000":4194e3,"1632182400000":593e3,"1633046400000":1772e3,"1633564800000":191e3,"1634083200000":2e5,"1634256000000":2077e3,"1634342400000":2557e3,"1634428800000":152e4,"1634515200000":2451e3,"1634601600000":8252e3,"1634860800000":1676e3,"1635033600000":143e3,"1635206400000":3526e3,"1635292800000":23e3,"1635379200000":5672e3,"1635465600000":5845e3,"1635552000000":1419e3,"1635638400000":191e4,"1635724800000":3834e3,"1635811200000":8135e3,"1635897600000":854e3,"1635984000000":195e4,"1636070400000":786e3,"1636156800000":127e3,"1636243200000":3229e3,"1636329600000":341e3,"1636502400000":3882e3,"1636588800000":705e3,"1636761600000":5009e3,"1636934400000":3148e3,"1637107200000":1138e3,"1637193600000":3612e3,"1637366400000":3905e3,"1637452800000":672e4,"1637539200000":4527e3,"1637625600000":2524e3,"1637712000000":1867e3,"1637798400000":1853e3,"1637884800000":3011e3,"1637971200000":3383e3,"1638057600000":5627e3,"1638144000000":1675e3,"1638230400000":916e3,"1638316800000":2264e3,"1638403200000":3053e3,"1638662400000":7287e3,"1638748800000":1551e3,"1638921600000":244e4,"1639008000000":3374e3,"1639180800000":1668e3,"1639353600000":5402e3,"1639440000000":5125e3,"1639526400000":3784e3,"1639612800000":3703e3,"1639699200000":3871e3,"1639785600000":162e4,"1639872000000":6925e3,"1639958400000":656e3,"1640044800000":2607e3,"1640390400000":5967e3,"1640476800000":12842e3,"1640563200000":6496e3,"1640649600000":3549e3,"1640736000000":16e4,"1640822400000":7984e3,"1640908800000":9219e3,"1640995200000":3914e3,"1641254400000":15592e3,"1641340800000":1501e3,"1641427200000":4663e3,"1641600000000":2592e3,"1641686400000":1018e3,"1641945600000":3212e3,"1642032000000":2428e3,"1642204800000":994e3,"1642377600000":547e3,"1642464000000":4351e3,"1642550400000":1558e3,"1642636800000":10252e3,"1642723200000":4877142,"1642809600000":388e4,"1642896000000":2217e3,"1642982400000":4056e3,"1643068800000":86e3,"1643155200000":3057e3,"1643328000000":99e3,"1643587200000":2197e3,"1643673600000":2775e3,"1643760000000":268e4,"1643932800000":3044e3,"1644019200000":173e3,"1644105600000":745e3,"1644278400000":104e4,"1644364800000":375e4,"1645142400000":9e4,"1645228800000":3771e3,"1645315200000":1802e3,"1645833600000":3464e3,"1646352000000":4413e3,"1646438400000":4556e3,"1646524800000":5833e3,"1646611200000":4215e3,"1646697600000":655e4,"1647043200000":6057e3,"1647129600000":2459e3,"1647216000000":9e3,"1647302400000":3812e3,"1647388800000":5723e3,"1647475200000":212e4,"1647561600000":829e4,"1647648000000":852e3,"1648166400000":7796e3,"1648425600000":1504e3,"1648598400000":521e4,"1648771200000":2527e3,"1648857600000":7003e3,"1649116800000":1721e3,"1649203200000":5305e3,"1649289600000":2516e3,"1649376000000":381e3,"1649462400000":4286e3,"1649548800000":4683e3,"1649808000000":194e4,"1649894400000":18699e3,"1649980800000":10014e3,"1650067200000":518e4,"1650153600000":398e3,"1650240000000":1144e3,"1650326400000":2393e3,"1650499200000":9e4,"1650585600000":3993e3,"1650758400000":2486e3,"1651017600000":2651e3,"1651104000000":3327e3,"1651190400000":2328e3,"1651276800000":828e3,"1651363200000":2413e3,"1651449600000":12e3,"1651536000000":1954e3,"1651622400000":3508e3,"1651708800000":314e4,"1651795200000":352e3,"1651881600000":61e4,"1652140800000":1935e3,"1652227200000":1015e3,"1652313600000":2539e3,"1652400000000":6048e3,"1652486400000":4112e3,"1652572800000":251e3,"1652659200000":2407e3,"1652832000000":345e3,"1653004800000":2691e3,"1653091200000":4955e3,"1653177600000":2331e3,"1653264000000":5508e3,"1653350400000":10812e3,"1653436800000":5006e3,"1653523200000":428e3,"1653609600000":6555e3,"1653696000000":5136e3,"1653782400000":671e3},screenshotsPerMonth_Playtime:[2382,1482,2389,3612,3125,1617,774,686,893,493,1050,2959],daysSkyOpened:398,millisecondsPlayedTotal:1383179129,screenshotsTotal:21462,maxScreenshotsOnADay:418,maxMillisecondsOnADay:18699e3})),window.location.href="stats.html"};
//# sourceMappingURL=index.14c4b9a3.js.map
