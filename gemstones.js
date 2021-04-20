const words = [
    'molbapydxfbsbwqrrsmkebhxnphikeywkxoldawbojksdlfoqwrqjmkcylacxfdyclepprhbndmgocrdzcgr',
    'nlxchmhckrzrykxjxjpckaavztepfbizoqh',
    'kncchsgsraxnotgdgovptowzghodwqideluywpwmqbqbtanqs',
    'umgeeuabkcntumyaumlkwxiujbwe',
    'byzoraskmuugmyiuolhbipceizazlixgfkeuurppyczyt',
    'uiipcvbppdhxqufsubjijxgshnjsaupbydmmxye',
    'isspjpleqsbylekhnzhrskxzkidnbqfcfhtpvre',
    'zlqigedzwiwwplspaqhjwpuexzumvjnrozvsbbulwpfnebuxdndvxquzzbafhdcuuspycvvkfdyyivgbewuyktlfuyjbwgppn',
    'pjgwftnnncxprrbyipcmgelvcqcvstrfqufrdxkmwdfopdoksuujifccnulnsrxggfxuvipuybwebxgvwrntqxqtki',
    'dakrjdsebiuugxpvxyhrtmwhvyqdhvgirhoozuccqv',
    'dapqtivsemkgbkvvzqqfocnnlljjcpexhdotgvcghpkvxvgsbi',
    'uoxhgujpbdx',
    'fadkdvrmphfahixjqhnjfcnjrprcdcrxzehypqdcrululryixvxxcaujmcneokejgzlzhb',
    'ysvdszdswunopr',
    'mqzrjprgxdydstsecaccka',
    'ohfnzlmpnzsgbhnwalpdisjdmdjnyutlhjvkmfxnqpppwmrmeecwobspkcgewwuznazeazgmgfkkz',
    'ghgyohsdoctwssefhmx',
    'tgdssqslwvpaeepbjijwdndblqytfcbrvtmbunwgis',
    'hgwhxuoifqaejvqfylrtskttxecndsklahpcnslzdqlszrblkccpzzeviysjtwdbovkysdemfpdzysfwvwnxhdantaqje',
    'xywoisgainvwkvwcapsqcxmuaq',
    'jdixnjqrzyslmnfqfrghqaxhicdvrxgiwmnyiyrpommpsovaieqfrxbexxqmjqkhsobvwxgiciekqmkbpzhqogixiaylbnvnyt',
    'denwpvpwcmlbehqsubxjuyqcveaittwuprrddtpwwuuajgejqytkzvxvfodtsqfh',
    'eisznwbftcgugqipoaubovknajuxpukmmctiwoqejjx',
    'yzgmnsryucaossnqqvvdllqxelpfirerrhjtufopgekstqfnhuezoqoelijuelxqlsyjdyvevlgwrauyjuykvyyh',
    'xtawtlilznqeifuefpndryoooadegksbqqsstufxrgbompnuurp',
    'tkdd',
    'ozoiyyssyfiionfurrukyijyemqtvtaikuxkjkorc',
    'afquxvbjbufhbfdaa',
    'qpghetpapqkamlflwsfalrnmwveonsmmajfitpyeiuhefey',
    'isqndazqlsflpwksppqlrydmxporfgwuihlzekmoyhqkvdnrhgarftdmxtahgkaoqgankdjtloxw',
    'scegvdydyapvchvtqpbqexsszpvtaooklvzoyjackwsbualovxzpqszjwnaosvggwqdbeimckcphayglqqpiwldihhtwwrcxc',
    'rclqhxyerjqnnldhoydjoqwdjbearqncoyhpfwxlwdqaexwkkqxvnssauidmjpzrverapnt',
    'xdpdfvyrorbxyufiesqjocilsdqbmwuppsndpltoj',
    'xmmwerdaejowqcoyppqxkulnixv',
    'frfuyubib',
    'gbmscibkxcwongfiuxjiodpunvgeacoxwsszcpfwfhaxjqpzrpggfotdmpuzdabdtwucqfiypnxlpvneghiklbhtfys',
    'kjdvelptpvaplankxqhymzuqqzgyhsetuviklvapgvntumwcgmpndmhavdvcmuznibkwvzvhvhmuztvkuxfwpytaahcmnany',
    'whbmaxzhpdjssrizf',
    'bpgdjecunkvwbcqjpmjjjcznzxcjvjafhz',
    'rffbbdlwbsnimcovwtohvzrikz',
    'foqthutowjvmtnisaccicvwpdxbjtaiqghkwyatwfktnsrcddjqcschxkrenynxabtnbzcjjjecitj',
    'cbzittqjnqqzvommsfqguhxaszs',
    'fjkpoosusdmdzatxvtvphrsdqhyshayhsqbferiaghdlxhfztsutmoqqygdnoupmonqytfytgotdtaba',
    'wpfqqvaqluzdhzkpmgswdvxjuzkutvpjsd',
    'rmxdtfsnmhzxarihwhiohawlprlxqgveljodgnritxhkanclchxojcbdoezwbvczmctxamfmzossiuncjvvglcliybzdfhfjmxm',
    'recvh',
    'pzxyjcaskyuspggefjiiefygvsubqgdjddmimqyclhqoicaarnmomzluignzv',
    'ixiginhofthorgfdqxhpwhcipzpyjarayvjrophsy',
    'jrkmxoxkwgmtadcdidwdqltr',
    'fjknnfplfeuqjvaomrpicsanzlqpiagxjqktjacigdyvrrdableynzdjbegpobnmncpel',
    'rfxpdrrxwjgzlnxrlgmaxatuyvwtsigvmsujzkmeeyqxaeszqzmpxzifbjlyehkyxyxazyfs',
    'srytftrlukcsjfauvjblwxady',
    'rjinbceyetioovkl',
    'xizeysjxwijafdajuapjiqqt',
    'exeoazqiaflhdyqrcqzgolzvnlolctovpwxaszdwqbudevfxnrtgqkopnacoktgiyltol',
    'xwduiwucgmejfhqyfzzwfghhawuobqiqsyiwuxcdmjjvubgmpzgskdconpgmlmzuul',
    'zxktqbewcftuxlnjllcyuirbynvjvgrxgmtjmuxurdcbrplgcekxli',
    'jqabapyvxqaxel',
    'zxtnsilxitwfrldfrokyqxtwtqieuafritwbmelqwvsmv',
    'orzlanudieytiyshqwepppjhfttplslvuionxwjkxvovkikbetzxnvxeasd',
    'gdnbibylvehbacqoobmpqqegktdunqisdvnrdkpnovmgtxaslargjetvkvaxilriltbffwetecswbapatfmiajvszwcj',
    'yykcigkuummaajzlshdjrrnhcylglduarmidtcevfefpzvvjapxsnkuvfxcrdikote',
    'vaucjluizqufovibbscbxodvjnltdpueexcnlowvpdpdd',
    'bkyjpzclqdllcjuteoovbkhfpnujmrieswhijgckmzupmi',
    'cgwpfdcczmjoukwgzblwkzeialiaquytddsxykjzuvgcpxarybemgtjcypgplcysygtkobxoahmraanptnoczzqbexqci',
    'veeqplrkdrelaqpkyigfvhptckbhkrfyzmmyklethcrjkpebvfadoohzbmahlrsbyaiemuophctsujnivpuunzixsqjvtjqkzowl',
    'wfaupbyrknrclwxscdkbzucxkkkiaqmrrffxcvduxaeckgnenxpsliqspeirlhzavntrs',
    'xagdvsafjqtalhjkggkholwwkqgpbbiywjkfywkwpsqheuiswwswtqlkttgiebbkqc',
    'hxttlfkksbkeuyecyosbypwxkhntvoahdmtiufsq',
    'qqfpddvvppasrtcfvosopkztmdkuqvvcoazmlmbmurfygtidqotuic',
    'qjutcdcmcunpvog',
    'evhamwhhsnykiljvavygsvnangcigryhlelpjgyjnjlandrzssdgvikvzdohqhlaurofifzvebpujphgvrbokdfebwyq',
    'wfivvvfldimgsjsrcdtycgacdoglvnewgxhhiuwokridoekcuyacvnayfnoknrnkrselctythmydi',
    'pphgchgrijktavtjnmrnupfeluhxjebnxlpoxyjbbgenwciwfhvxgvttobpeqjiukhrjyzcagssgq',
    'tpcmdefgtuubqeaegyiuzvhmascziejzhhwkawpovvsaxdqpihfurautqxpgzidwobgorvggqqavzkyhltfazakcl',
    'wyuwctuvrqmdbfwhuvtucedbnxvuyruvldbfdtvmqdeuvgocnpeainawbsx',
    'slxdpbpfkrikdmorptsqdldevabbqkliuslgjyohegwnapbgtyfkkumactoahrzfwgrpqjjucyd',
    'jldmqsoelsxywgvsfufgxg',
    'ghbnucihsadzkpy',
    'vrwjzikpcpjlrlmavowazfznyngrertieeiqgfzijetpjackkhaqojunyg',
    'znmnauzmgtqevrxpcyjnoxtchokbmeicjarhvmmgjtf',
    'fkbgjxsjugvpxhujlebqtgalzvwdjhozetvbhbcvrstpkdctqxketolumjgsbaowzs',
    'nieqzi',
    'yrtdurupovoyp',
    'mtpomwlfpyrjbwmja',
    'njqapnjfiypiwwjoqalixpabemathenjbbmtkekyvhxyapoysghfbxjvurzztbmaugpasnlxkpoghdojjkwjobzfwnpx',
    'sqtxpsorwjmsmcsaxrtubnzzygoajghxpupqvuqzlcqijqgifxpck',
    'nptxfbqooamgpuwytpzjpyxvodwtmloihqlkntmmxnbxyzjklboxihbpabwipgfgwg',
    'jmsfcdhhnjhtwpydrlfebklt',
    'jsocgwdahcrbyoyeqmhvaflecipghegqipbfxxzwvzeuzvdzmdtqwuhqlivkzvzogwzwonttzzsbdpj',
    'ftsafsaqflaizwxqwicshndvuabcdkqlcywmhgsgktsyzqvndzeuyzknugmiaahemqgdg',
    'worxpvczg',
    'iimsmyieeexewpycleybgjyzazfjorjjqhrqpnvxliugznubtafyzepnjgjvasmszqzgnpy',
    'mthyflhsbtjsglljkzrlr',
    'nsxuyycyhfecp',
    'tahohwbsaxheobchdaqagcalwztpvxgillqyeejjpgkhcpwmiygykkognriupmhorkmrjwkuhhazfalasynnxxelokex',
    'ezstlufuhdzgwt',
    'bcgiuolagphwputkbskhrbteqzrwyueoziifuuwomuaysppfqrixerdsozsvxkgloqv',
    'byhfdbczevofwifgjcmwqyuegmiaojweegluwuhnrdpohtmrnrbbnyuvasvupfxzlyuhgmyjiartvvsuib',
    'zxyfrjrpcjusrhjwmpkrongut',
];

function gemstones(arr) {
    const filtered = arr.reduce((acc, str) => {
        const brr = str.split('');
        return intersection(acc, brr);
    }, null);
    return new Set(filtered).size;
}

function intersection(arr, brr) {
    if (!arr) {
        return brr;
    }
    const obj = {};
    arr.forEach(el => obj[el] = 1);
    return brr.filter(el => obj[el]);
}

function naiveIntersection(arr, brr) {
    return arr.filter(el => brr.includes(el));
}

console.log(
    intersection(
        [1, 2, 3, 4, 5, ],
        [4, 4, 3, 10, 11]
    )
);
