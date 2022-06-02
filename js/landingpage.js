/**
 * Executes when the user clicks on the folder picker button.
 * Processes the files and generates data from the files
 * When ready, we write the generated data to localStorage + open the stats.html page. Where we will read in the values from localStorage
 */
document.getElementById("folder").addEventListener("change", function (event)
{
    document.getElementById("folder").className = "hidden";
    document.getElementById("loadingIcon").className = "";
    const loadingText = document.getElementById("loadingText");

    let worker = new Worker(new URL("./WebWorkers/generate-creation-dates.js", import.meta.url));

    const files = ([...event.target.files]).filter(file => file && file['type'].split('/')[0] === 'image'); //Remove all non image files
    worker.postMessage(files);

    worker.onmessage = function (event)
    {
        if (typeof event.data !== "string")
        {
            let generatedData = event.data;

            window.localStorage.setItem("generatedData", JSON.stringify(generatedData)); //Save the data to localStorage, so that the stats.html page can load it in later

            window.location.href = "stats.html"; //Open stats page
        }
        else
        {
            loadingText.innerText = event.data;
        }
    };
}, false);

document.getElementById("openStats").onclick = function () {
    let generatedData = {"validFilesAmount":21462,"totalFiles":21601,"screenshotsPerDay_Week":[2889,2717,3030,2477,3055,3952,3342],"millisecondsPerDay_Week":[194267000,160606000,192176000,184131714,192996273,245027142,213975000],"screenshotsPerHour_Day":[3283,2196,740,156,0,13,72,197,221,752,1089,814,411,455,852,785,753,687,391,578,459,815,2220,3523],"screenshotsPerDay_Playtime":{"1595980800000":15,"1596844800000":11,"1596931200000":2,"1597881600000":3,"1597968000000":25,"1599177600000":1,"1600473600000":8,"1606608000000":1,"1607040000000":35,"1607126400000":9,"1607299200000":10,"1607385600000":3,"1607472000000":17,"1607644800000":10,"1607904000000":1,"1608249600000":5,"1608336000000":21,"1608422400000":28,"1608508800000":126,"1608595200000":182,"1608681600000":20,"1608768000000":48,"1608854400000":218,"1608940800000":58,"1609027200000":57,"1609113600000":7,"1609200000000":141,"1609286400000":79,"1609372800000":3,"1609459200000":63,"1609545600000":7,"1609632000000":5,"1609804800000":22,"1610150400000":163,"1610236800000":13,"1610409600000":33,"1610496000000":105,"1610582400000":12,"1610668800000":13,"1610755200000":22,"1610841600000":6,"1610928000000":31,"1611014400000":38,"1611100800000":1,"1611187200000":9,"1611273600000":84,"1611360000000":38,"1611446400000":10,"1611532800000":31,"1611619200000":137,"1611705600000":9,"1611792000000":99,"1611878400000":15,"1612051200000":83,"1612137600000":103,"1612224000000":5,"1612310400000":8,"1612396800000":5,"1612483200000":72,"1612569600000":53,"1612656000000":63,"1612742400000":86,"1612828800000":28,"1613088000000":13,"1613174400000":38,"1613347200000":111,"1613433600000":3,"1613520000000":3,"1613606400000":81,"1613692800000":71,"1613779200000":9,"1613865600000":115,"1613952000000":63,"1614038400000":54,"1614124800000":8,"1614211200000":3,"1614384000000":47,"1614470400000":120,"1614643200000":53,"1614729600000":40,"1614816000000":66,"1614902400000":84,"1614988800000":29,"1615075200000":96,"1615161600000":3,"1615248000000":76,"1615334400000":1,"1615420800000":119,"1615507200000":7,"1615593600000":96,"1615680000000":2,"1615766400000":21,"1615852800000":60,"1615939200000":15,"1616025600000":13,"1616112000000":165,"1616198400000":102,"1616284800000":3,"1616371200000":65,"1616457600000":2,"1616544000000":27,"1616630400000":26,"1616803200000":10,"1616889600000":17,"1617062400000":7,"1617148800000":43,"1617235200000":147,"1617321600000":44,"1617408000000":47,"1617494400000":23,"1617580800000":288,"1617667200000":63,"1617753600000":106,"1617840000000":19,"1617926400000":67,"1618012800000":38,"1618099200000":59,"1618185600000":165,"1618272000000":27,"1618358400000":118,"1618444800000":125,"1618531200000":130,"1618617600000":34,"1618704000000":273,"1618790400000":4,"1618876800000":56,"1618963200000":20,"1619049600000":55,"1619136000000":34,"1619222400000":47,"1619308800000":213,"1619395200000":72,"1619481600000":16,"1619568000000":81,"1619654400000":70,"1619740800000":31,"1619827200000":10,"1619913600000":53,"1620086400000":71,"1620172800000":57,"1620259200000":53,"1620345600000":19,"1620432000000":153,"1620518400000":115,"1620691200000":37,"1620777600000":55,"1620864000000":82,"1620950400000":42,"1621036800000":5,"1621123200000":42,"1621296000000":183,"1621382400000":7,"1621468800000":34,"1621555200000":97,"1621641600000":75,"1621728000000":8,"1621814400000":77,"1621900800000":24,"1621987200000":36,"1622073600000":63,"1622246400000":44,"1622332800000":51,"1622419200000":102,"1622505600000":39,"1622592000000":142,"1622678400000":116,"1622764800000":149,"1622851200000":83,"1622937600000":61,"1623024000000":46,"1623110400000":109,"1623196800000":51,"1623283200000":6,"1623369600000":54,"1623456000000":5,"1623542400000":1,"1623628800000":5,"1623715200000":2,"1623801600000":116,"1623974400000":111,"1624060800000":177,"1624147200000":62,"1624320000000":26,"1624406400000":2,"1624492800000":32,"1624579200000":16,"1624665600000":15,"1624838400000":173,"1624924800000":5,"1625011200000":13,"1625097600000":5,"1625184000000":38,"1625270400000":1,"1625356800000":12,"1625443200000":1,"1625529600000":138,"1625616000000":90,"1625702400000":22,"1625788800000":104,"1625875200000":58,"1625961600000":2,"1626048000000":109,"1626134400000":53,"1626480000000":11,"1626912000000":4,"1627084800000":111,"1627862400000":8,"1628035200000":78,"1628121600000":93,"1628208000000":56,"1628294400000":145,"1628380800000":32,"1628467200000":23,"1628553600000":35,"1628640000000":49,"1628726400000":17,"1628812800000":58,"1628899200000":7,"1628985600000":27,"1629072000000":17,"1630627200000":109,"1630713600000":60,"1630800000000":117,"1631145600000":143,"1631232000000":12,"1631318400000":28,"1631577600000":3,"1631664000000":41,"1631750400000":49,"1631836800000":264,"1631923200000":1,"1632009600000":45,"1632096000000":1,"1632182400000":11,"1633046400000":15,"1633564800000":5,"1634083200000":4,"1634256000000":15,"1634342400000":30,"1634428800000":14,"1634515200000":49,"1634601600000":133,"1634860800000":14,"1635033600000":3,"1635206400000":40,"1635292800000":2,"1635379200000":43,"1635465600000":62,"1635552000000":33,"1635638400000":31,"1635724800000":47,"1635811200000":69,"1635897600000":15,"1635984000000":17,"1636070400000":7,"1636156800000":4,"1636243200000":23,"1636329600000":7,"1636502400000":65,"1636588800000":7,"1636761600000":87,"1636934400000":20,"1637107200000":18,"1637193600000":44,"1637366400000":66,"1637452800000":124,"1637539200000":134,"1637625600000":26,"1637712000000":58,"1637798400000":25,"1637884800000":55,"1637971200000":53,"1638057600000":54,"1638144000000":14,"1638230400000":10,"1638316800000":35,"1638403200000":78,"1638662400000":108,"1638748800000":61,"1638921600000":14,"1639008000000":49,"1639180800000":64,"1639353600000":99,"1639440000000":62,"1639526400000":108,"1639612800000":117,"1639699200000":69,"1639785600000":18,"1639872000000":160,"1639958400000":9,"1640044800000":57,"1640390400000":112,"1640476800000":166,"1640563200000":55,"1640649600000":87,"1640736000000":6,"1640822400000":98,"1640908800000":249,"1640995200000":72,"1641254400000":100,"1641340800000":15,"1641427200000":156,"1641600000000":22,"1641686400000":17,"1641945600000":35,"1642032000000":32,"1642204800000":48,"1642377600000":17,"1642464000000":95,"1642550400000":34,"1642636800000":418,"1642723200000":26,"1642809600000":31,"1642896000000":44,"1642982400000":54,"1643068800000":6,"1643155200000":72,"1643328000000":4,"1643414400000":1,"1643587200000":34,"1643673600000":52,"1643760000000":43,"1643846400000":1,"1643932800000":81,"1644019200000":5,"1644105600000":7,"1644278400000":6,"1644364800000":30,"1645142400000":3,"1645228800000":33,"1645315200000":8,"1645574400000":1,"1645833600000":50,"1646265600000":1,"1646352000000":74,"1646438400000":62,"1646524800000":79,"1646611200000":140,"1646697600000":111,"1647043200000":65,"1647129600000":23,"1647216000000":2,"1647302400000":65,"1647388800000":85,"1647475200000":34,"1647561600000":144,"1647648000000":19,"1648166400000":188,"1648425600000":12,"1648598400000":36,"1648684800000":1,"1648771200000":46,"1648857600000":153,"1649116800000":19,"1649203200000":63,"1649289600000":33,"1649376000000":5,"1649462400000":26,"1649548800000":87,"1649808000000":25,"1649894400000":177,"1649980800000":205,"1650067200000":143,"1650153600000":4,"1650240000000":6,"1650326400000":11,"1650499200000":4,"1650585600000":28,"1650758400000":30,"1651017600000":22,"1651104000000":30,"1651190400000":21,"1651276800000":2,"1651363200000":33,"1651449600000":5,"1651536000000":19,"1651622400000":47,"1651708800000":26,"1651795200000":5,"1651881600000":10,"1652140800000":32,"1652227200000":5,"1652313600000":32,"1652400000000":74,"1652486400000":88,"1652572800000":2,"1652659200000":39,"1652832000000":5,"1653004800000":64,"1653091200000":75,"1653177600000":35,"1653264000000":164,"1653350400000":288,"1653436800000":181,"1653523200000":5,"1653609600000":182,"1653696000000":94,"1653782400000":20},"millisecondsPerDay_Playtime":{"1595980800000":535714,"1596844800000":484000,"1596931200000":286000,"1597881600000":158000,"1597968000000":3301000,"1600473600000":177000,"1607040000000":2012000,"1607126400000":1782000,"1607299200000":293000,"1607385600000":343000,"1607472000000":2799000,"1607644800000":1641000,"1608249600000":462000,"1608336000000":2735000,"1608422400000":5959000,"1608508800000":9271000,"1608595200000":11146000,"1608681600000":2551000,"1608768000000":3120000,"1608854400000":12623000,"1608940800000":4247000,"1609027200000":5428000,"1609113600000":179000,"1609200000000":7186000,"1609286400000":7850000,"1609372800000":9000,"1609459200000":3273000,"1609545600000":238000,"1609632000000":214000,"1609804800000":1021000,"1610150400000":5802000,"1610236800000":1929000,"1610409600000":4046000,"1610496000000":6825000,"1610582400000":2046000,"1610668800000":2429000,"1610755200000":1274000,"1610841600000":569000,"1610928000000":4165000,"1611014400000":2376000,"1611187200000":89000,"1611273600000":3811000,"1611360000000":3249000,"1611446400000":1191000,"1611532800000":793000,"1611619200000":6932000,"1611705600000":104000,"1611792000000":5024000,"1611878400000":2213000,"1612051200000":4554000,"1612137600000":3805000,"1612224000000":286000,"1612310400000":144000,"1612396800000":151000,"1612483200000":5230000,"1612569600000":4351000,"1612656000000":5873000,"1612742400000":5012000,"1612828800000":1911000,"1613088000000":53000,"1613174400000":2892000,"1613347200000":4819000,"1613433600000":816000,"1613520000000":99000,"1613606400000":4731000,"1613692800000":7467000,"1613779200000":1696000,"1613865600000":6201000,"1613952000000":4905000,"1614038400000":5106000,"1614124800000":803000,"1614211200000":77000,"1614384000000":3898000,"1614470400000":3669000,"1614643200000":4140000,"1614729600000":2382000,"1614816000000":2396000,"1614902400000":3387000,"1614988800000":3182000,"1615075200000":4959000,"1615161600000":675000,"1615248000000":3176000,"1615420800000":2378000,"1615507200000":28000,"1615593600000":4320000,"1615680000000":447000,"1615766400000":2690000,"1615852800000":3783000,"1615939200000":1530000,"1616025600000":2479000,"1616112000000":6365000,"1616198400000":7466000,"1616284800000":42000,"1616371200000":5309000,"1616457600000":575000,"1616544000000":3977000,"1616630400000":2175273,"1616803200000":111000,"1616889600000":1693000,"1617062400000":694000,"1617148800000":3815000,"1617235200000":6131000,"1617321600000":3992000,"1617408000000":3496000,"1617494400000":1408000,"1617580800000":13613000,"1617667200000":5936000,"1617753600000":10745000,"1617840000000":3737000,"1617926400000":5103000,"1618012800000":3292000,"1618099200000":3929000,"1618185600000":12182000,"1618272000000":765000,"1618358400000":7563000,"1618444800000":10315000,"1618531200000":11034000,"1618617600000":5969000,"1618704000000":13452000,"1618790400000":658000,"1618876800000":5086000,"1618963200000":893000,"1619049600000":3985000,"1619136000000":2163000,"1619222400000":3394000,"1619308800000":11070000,"1619395200000":5724000,"1619481600000":385000,"1619568000000":10468000,"1619654400000":6205000,"1619740800000":4534000,"1619827200000":637000,"1619913600000":6436000,"1620086400000":7532000,"1620172800000":4350000,"1620259200000":4251000,"1620345600000":3696000,"1620432000000":9693000,"1620518400000":8978000,"1620691200000":2171000,"1620777600000":4008000,"1620864000000":8261000,"1620950400000":2749000,"1621036800000":230000,"1621123200000":2897000,"1621296000000":11481000,"1621382400000":235000,"1621468800000":3025000,"1621555200000":7497000,"1621641600000":6927000,"1621728000000":1277000,"1621814400000":7128000,"1621900800000":1994000,"1621987200000":3918000,"1622073600000":3492000,"1622246400000":2807000,"1622332800000":2921000,"1622419200000":2634000,"1622505600000":2845000,"1622592000000":9215000,"1622678400000":8196000,"1622764800000":5365000,"1622851200000":6492000,"1622937600000":3554000,"1623024000000":1780000,"1623110400000":4310000,"1623196800000":3103000,"1623283200000":132000,"1623369600000":3169000,"1623456000000":256000,"1623628800000":232000,"1623715200000":18000,"1623801600000":7187000,"1623974400000":6438000,"1624060800000":7778000,"1624147200000":2181000,"1624320000000":2043000,"1624406400000":395000,"1624492800000":3886000,"1624579200000":1279000,"1624665600000":1739000,"1624838400000":4911000,"1624924800000":14000,"1625011200000":2289000,"1625097600000":193000,"1625184000000":3974000,"1625356800000":1371000,"1625529600000":3419000,"1625616000000":6905000,"1625702400000":2970000,"1625788800000":5930000,"1625875200000":4375000,"1625961600000":295000,"1626048000000":10554000,"1626134400000":1308000,"1626480000000":498000,"1626912000000":122000,"1627084800000":7477000,"1627862400000":1141000,"1628035200000":5291000,"1628121600000":8154000,"1628208000000":2822000,"1628294400000":6879000,"1628380800000":3416000,"1628467200000":4168000,"1628553600000":775000,"1628640000000":6443000,"1628726400000":2147000,"1628812800000":4895000,"1628899200000":147000,"1628985600000":2599000,"1629072000000":2285000,"1630627200000":8014000,"1630713600000":4158000,"1630800000000":7765000,"1631145600000":7903000,"1631232000000":2515000,"1631318400000":1809000,"1631577600000":309000,"1631664000000":4636000,"1631750400000":2759000,"1631836800000":13808000,"1632009600000":4194000,"1632182400000":593000,"1633046400000":1772000,"1633564800000":191000,"1634083200000":200000,"1634256000000":2077000,"1634342400000":2557000,"1634428800000":1520000,"1634515200000":2451000,"1634601600000":8252000,"1634860800000":1676000,"1635033600000":143000,"1635206400000":3526000,"1635292800000":23000,"1635379200000":5672000,"1635465600000":5845000,"1635552000000":1419000,"1635638400000":1910000,"1635724800000":3834000,"1635811200000":8135000,"1635897600000":854000,"1635984000000":1950000,"1636070400000":786000,"1636156800000":127000,"1636243200000":3229000,"1636329600000":341000,"1636502400000":3882000,"1636588800000":705000,"1636761600000":5009000,"1636934400000":3148000,"1637107200000":1138000,"1637193600000":3612000,"1637366400000":3905000,"1637452800000":6720000,"1637539200000":4527000,"1637625600000":2524000,"1637712000000":1867000,"1637798400000":1853000,"1637884800000":3011000,"1637971200000":3383000,"1638057600000":5627000,"1638144000000":1675000,"1638230400000":916000,"1638316800000":2264000,"1638403200000":3053000,"1638662400000":7287000,"1638748800000":1551000,"1638921600000":2440000,"1639008000000":3374000,"1639180800000":1668000,"1639353600000":5402000,"1639440000000":5125000,"1639526400000":3784000,"1639612800000":3703000,"1639699200000":3871000,"1639785600000":1620000,"1639872000000":6925000,"1639958400000":656000,"1640044800000":2607000,"1640390400000":5967000,"1640476800000":12842000,"1640563200000":6496000,"1640649600000":3549000,"1640736000000":160000,"1640822400000":7984000,"1640908800000":9219000,"1640995200000":3914000,"1641254400000":15592000,"1641340800000":1501000,"1641427200000":4663000,"1641600000000":2592000,"1641686400000":1018000,"1641945600000":3212000,"1642032000000":2428000,"1642204800000":994000,"1642377600000":547000,"1642464000000":4351000,"1642550400000":1558000,"1642636800000":10252000,"1642723200000":4877142,"1642809600000":3880000,"1642896000000":2217000,"1642982400000":4056000,"1643068800000":86000,"1643155200000":3057000,"1643328000000":99000,"1643587200000":2197000,"1643673600000":2775000,"1643760000000":2680000,"1643932800000":3044000,"1644019200000":173000,"1644105600000":745000,"1644278400000":1040000,"1644364800000":3750000,"1645142400000":90000,"1645228800000":3771000,"1645315200000":1802000,"1645833600000":3464000,"1646352000000":4413000,"1646438400000":4556000,"1646524800000":5833000,"1646611200000":4215000,"1646697600000":6550000,"1647043200000":6057000,"1647129600000":2459000,"1647216000000":9000,"1647302400000":3812000,"1647388800000":5723000,"1647475200000":2120000,"1647561600000":8290000,"1647648000000":852000,"1648166400000":7796000,"1648425600000":1504000,"1648598400000":5210000,"1648771200000":2527000,"1648857600000":7003000,"1649116800000":1721000,"1649203200000":5305000,"1649289600000":2516000,"1649376000000":381000,"1649462400000":4286000,"1649548800000":4683000,"1649808000000":1940000,"1649894400000":18699000,"1649980800000":10014000,"1650067200000":5180000,"1650153600000":398000,"1650240000000":1144000,"1650326400000":2393000,"1650499200000":90000,"1650585600000":3993000,"1650758400000":2486000,"1651017600000":2651000,"1651104000000":3327000,"1651190400000":2328000,"1651276800000":828000,"1651363200000":2413000,"1651449600000":12000,"1651536000000":1954000,"1651622400000":3508000,"1651708800000":3140000,"1651795200000":352000,"1651881600000":610000,"1652140800000":1935000,"1652227200000":1015000,"1652313600000":2539000,"1652400000000":6048000,"1652486400000":4112000,"1652572800000":251000,"1652659200000":2407000,"1652832000000":345000,"1653004800000":2691000,"1653091200000":4955000,"1653177600000":2331000,"1653264000000":5508000,"1653350400000":10812000,"1653436800000":5006000,"1653523200000":428000,"1653609600000":6555000,"1653696000000":5136000,"1653782400000":671000},"screenshotsPerMonth_Playtime":[2382,1482,2389,3612,3125,1617,774,686,893,493,1050,2959],"daysSkyOpened":398,"millisecondsPlayedTotal":1383179129,"screenshotsTotal":21462,"maxScreenshotsOnADay":418,"maxMillisecondsOnADay":18699000};

    window.localStorage.setItem("generatedData", JSON.stringify(generatedData)); //Save the data to localStorage, so that the stats.html page can load it in later

    window.location.href = "stats.html"; //Open stats page
}
