//获取元素
var chaslt = document.getElementById('cha-select');
var options = chaslt.options;
var life = document.getElementById('cha_life');
var atk = document.getElementById('cha_atk');
var def = document.getElementById('cha_def');
var lv = document.getElementById('cha_lv');
var cfm = document.getElementById('confirmed');
var tcfm = document.getElementById('textforckb');
var w_Rank = document.getElementsByName('w_Rank');
var wepup = document.getElementsByName('wep_up');
var mywepselect = document.getElementById('wep_select');
var rank = 0;
var wep1 = document.getElementById('wep_main');
var wep2 = document.getElementById('wep_sec');
var wlvslt = document.getElementById('wep_lv');
var wcfm = document.getElementById('wcfm');
var twcfm = document.getElementById('twcfm');
//添加监听事件
cfm.addEventListener("change", tocfm);
cfm.addEventListener("change", tocfmRe);
lv.addEventListener("change", toResult);
chaslt.addEventListener("change", toResult);
mywepselect.addEventListener("change", getwlvrange);
mywepselect.addEventListener("change", toWepRe);
wlvslt.addEventListener("change", toWepRe);
for (var i = 0; i < w_Rank.length; i++) {
    w_Rank[i].addEventListener("change", level);
}
//添加options
for (var i = 1; i <= 90; i++) {
    lv.add(new Option(i, i));
}
chaslt.add(new Option('----choose----', ''));
for (var i = 0; i < datas.length; i++) {
    chaslt.add(new Option(datas[i]['ChineseName'], i));
}
//获取当前角色等级阶段
function getlvrange() {
    var lvrange;
    for (var j = 1; j < 7; j++) {
        if (lv.value > prodatas[j - 1]['unlockMaxLevel'] && lv.value <= prodatas[j]['unlockMaxLevel']) {
            // console.log(prodatas[j]['promoteLevel']);
            lvrange = prodatas[j]['promoteLevel'];
        }
    }
    if (lv.value <= 20 && lv.value >= 1) {
        lvrange = 0;
    }
    // console.log(typeof(lvrange) + ' ' + lvrange);
    return lvrange;
}
//判断角色是否突破
function tocfm() {
    var amylv = [20, 40, 50, 60, 70, 80];
    if (cfm.checked) {
        // getMlm();
        for (var i = 0; i < amylv.length; i++) {
            if (lv.value == amylv[i]) {
                return (getlvrange() + 1);
            }
        }
    }
    else {
        return (getlvrange());
    }
    if (cfm.style.display == 'none') {
        cfm.checked = false;
    }
    // var mylv = lv.value;
    // if (cfm.checked) {
    //     // console.log("已勾选");
    //     if (mylv == 20 || mylv == 40 || mylv == 50 || mylv == 60 || mylv == 70 || mylv == 80) {
    //         // console.log(mylv);
    //         // toResult();
    //         // console.log(typeof (toResult()[1]));
    //         //20    40 50 60 70 80 90
    //         //     1 2 3 4 5 6        
    //         var opt = options[chaslt.selectedIndex].text;
    //         var chalm;
    //         for (var i = 0; i < datas.length; i++) {
    //             if (opt == datas[i]['ChineseName']) {
    //                 chalm = datas[i]['avatarPromoteId'];
    //             }
    //         }
    //         for (var j = 0; j < prodatas.length; j++) {
    //             if (prodatas[j]['avatarPromoteId'] == chalm && !prodatas[j]['promoteLevel'] != true) {
    //                 console.log(Number(toResult()[0]) + prodatas[j]['addProps'][0]['value']);
    //                 console.log(Number(toResult()[1]) + prodatas[j]['addProps'][1]['value']);
    //                 console.log(Number(toResult()[2]) + prodatas[j]['addProps'][2]['value']);
    //             }
    //         }
    //         // for (var i = 0; i <= 2; i++) {
    //         //     console.log(Number(toResult()[i]) + prodatas[j]);
    //         // }
    //     }
    // }
    // else {
    //     console.clear();
    // }
}
//获取当前角色各突破等级奖励数值
function getMlm() {
    tocfm();
    for (var i = 0; i < datas.length; i++) {
        if (options[chaslt.selectedIndex].text == datas[i]['ChineseName']) {
            var lvid = datas[i]['avatarPromoteId'];
            var temp;
            // console.log(lvid);
            for (var k = 0; k < prodatas.length; k++) {
                if (prodatas[k]['avatarPromoteId'] == lvid) {

                    if (!prodatas[k]['promoteLevel'] != true) {
                        // console.log(getlvrange() + ' ' + prodatas[k]['promoteLevel']);
                        temp = k;
                        break;
                    }
                }
            }
            var mtemp = temp - 1 + tocfm();
            // console.log(mtemp);
            if (!prodatas[mtemp]['promoteLevel'] != true) {
                return [prodatas[mtemp]['addProps'][0]['value'], prodatas[mtemp]['addProps'][1]['value'], prodatas[mtemp]['addProps'][2]['value']];
                // console.log([prodatas[mtemp]['addProps'][0]['value'], prodatas[mtemp]['addProps'][1]['value'], prodatas[mtemp]['addProps'][2]['value']]);
            }
            else {
                // console.log(0);
                return [0, 0, 0];
            }

        }
    }
}
//计算角色数值
function toResult() {
    // console.log(getlvrange());
    var index = chaslt.selectedIndex;
    var selectedText = options[index].value;
    var mylv = lv.value;
    var stars;
    // console.log(selectedText);
    if (mylv == 20 || mylv == 40 || mylv == 50 || mylv == 60 || mylv == 70 || mylv == 80) {
        cfm.style.display = "inline";
        tcfm.style.display = "inline";
    }
    else {
        cfm.style.display = "none";
        tcfm.style.display = "none";
    }
    // console.log(i);
    if (datas[selectedText]['qualityType'] == 'QUALITY_ORANGE') {
        stars = 5;
    }
    else {
        stars = 4;
    }
    // console.log(slmp[stars][1]);
    var lvm = slmp[stars][mylv - 1];
    life.value = (datas[selectedText]['hpBase'] * lvm + getMlm()[0]).toFixed(2);
    atk.value = (datas[selectedText]['attackBase'] * lvm + getMlm()[2]).toFixed(2);
    def.value = (datas[selectedText]['defenseBase'] * lvm + getMlm()[1]).toFixed(2);
    for (var i = 0; i < datas.length; i++) {
        if (datas[i]['ChineseName'] == options[index].text) {
            changewepType(datas[i]['weaponType'], rank);
        }
    }
    toWepRe();
    return [life.value, atk.value, def.value];
}
//根据是否突破计算角色数值
function tocfmRe() {
    // console.log("改变了");
    toResult();
}


//添加武器下拉菜单
function changewepType(wepType, r) {
    mywepselect.options.length = 0;
    if (r == 0) {
        for (var i = 0; i < weparr.length; i++) {
            if (weparr[i]['wepType'] == wepType) {
                for (var j = 0; j < weparr[i]['wepOpts'].length; j++) {
                    for (var k = 0; k < weparr[i]['wepOpts'][j]['id'].length; k++) {
                        for (var ii = 0; ii < wepdatas.length; ii++) {
                            if (ii == weparr[i]['wepOpts'][j]['id'][k]) {
                                mywepselect.options.add(new Option(wepdatas[ii]['ChineseName'], ii));
                            }
                        }
                    }
                }
            }
        }
    }
    else {
        for (var i = 0; i < weparr.length; i++) {
            if (weparr[i]['wepType'] == wepType) {
                for (var j = 0; j < weparr[i]['wepOpts'].length; j++) {
                    for (var k = 0; k < weparr[i]['wepOpts'][j]['id'].length; k++) {
                        for (var ii = 0; ii < wepdatas.length; ii++) {
                            if (ii == weparr[i]['wepOpts'][j]['id'][k] && r == weparr[i]['wepOpts'][j]['ranklv']) {
                                mywepselect.options.add(new Option(wepdatas[ii]['ChineseName'], ii));
                            }
                        }
                    }
                }
            }
        }
    }
}
//判断武器星级
function level() {
    for (var i = 0; i < w_Rank.length; i++) {
        if (w_Rank[i].checked) {
            rank = w_Rank[i].value;
            toResult();
        }
    }
    return rank;
}
//获取当前武器等级阶段
function getwlvrange() {
    var len = wlvslt.options.length;
    var a = 0;
    var wRange;
    for (var i = 0; i < mywepselect.options.length; i++) {
        if (mywepselect.options[i].selected) {
            for (var j = 0; j < wepdatas.length; j++) {
                if (j == mywepselect.value) {
                    for (var k = 0; k < wpro.length; k++) {
                        if (wpro[k]['weaponPromoteId'] == wepdatas[j]['id']) {
                            a = k;
                        }
                    }
                }
            }
        }
    }
    wRange = wpro[a]['unlockMaxLevel'];
    return wRange;
}
//添加等级菜单
function addOpts() {
    var maxNum = getwlvrange();
    // wlvslt.options.length = 0;
    
    for (var i = 1; i <= maxNum; i++) {
        wlvslt.options.add(new Option(i, i));
    }
    console.log(getwlvrange());
}
//计算武器数值
function toWepRe() {
    var wValue = mywepselect.options;
    // var wlv = wlvslt.value;
    for (var i = 0; i < wValue.length; i++) {
        if (wValue[i].selected) {
            // console.log(wValue[i].value);
            for (var j = 0; j < wepdatas.length; j++) {
                if (j == wValue[i].value) {
                    wep1.value = wepdatas[j]['weaponProp'][0]['initValue'].toFixed(4);
                    // wep2.value = wepdatas[j]['weaponProp'][1]['initValue'].toFixed(4);
                }
            }
        }
    }
    addOpts();
    // if (wlv == 20 || wlv == 40 || wlv == 50 || wlv == 60 || wlv == 70 || wlv == 80) {
    //     wcfm.style.display = "inline";
    //     twcfm.style.display = "inline";
    // }
    // else {
    //     wcfm.style.display = "none";
    //     twcfm.style.display = "none";
    // }
}

//test btn
var mbtn1 = document.getElementById('btn1');
var mbtn2 = document.getElementById('btn2');
// btn1.onclick = function mclick() {
//     var a = 0;
//     var arr = [];
//     for (var i = 0; i < wepdatas.length; i++) {
//         // console.log(wepdatas[i]['weaponPromoteId'] + ' ' + i);
//         // if (i >= 8 && i <= 26 && i != 18) {
//         //     console.log(wepdatas[i]['icon'] + ' ' + i);
//         // }
//         if (wepdatas[i]['weaponType'] == 'WEAPON_BOW') {
//             // console.log(wepdatas[i]['awakenIcon'] + ' ' + wepdatas[i]['rankLevel']);
//             if (wepdatas[i]['rankLevel'] == 2) {
//                 if (!wepdatas[i]['weaponProp'][1]['initValue'] != true) {
//                     if (wepdatas[i]['weaponProp'][1]['propType']) {
//                         // if (i != 24 && i != 26) {
//                         arr[a] = i;
//                         a++;
//                         console.log("条目:" + a + ' ' + "索引:" + i + ' ' + "ID:" + wepdatas[i]['id']);
//                         console.log("名称:" + ' ' + wepdatas[i]['awakenIcon']);
//                         console.log("名称:" + ' ' + wepdatas[i]['ChineseName']);
//                         console.log("主词条成长:" + ' ' + wepdatas[i]['weaponProp'][0]['type']);
//                         console.log("主词条属性:" + ' ' + wepdatas[i]['weaponProp'][0]['propType']);
//                         console.log("主词条数值:" + ' ' + wepdatas[i]['weaponProp'][0]['initValue']);
//                         console.log("副词条成长:" + ' ' + wepdatas[i]['weaponProp'][1]['type']);
//                         console.log("副词条属性:" + ' ' + wepdatas[i]['weaponProp'][1]['propType']);
//                         console.log("副词条数值:" + ' ' + wepdatas[i]['weaponProp'][1]['initValue']);
//                         console.log('');
//                         // }

//                     }

//                 }

//             }
//         }
//     }
//     console.log(a);
//     console.log(arr);
// };
mbtn1.onclick = testbtn1;
mbtn2.onclick = testbtn2;
function testbtn1() {
    // console.log(1);
    // console.log(mywepselect.value);
    for(var i=0; i<70;i++){
        wlvslt.options.add(new Option(i,i));
    }
}
function testbtn2() {
    // console.log(1);
    // console.log(mywepselect.value);
    wlvslt.options.length = 0;
}



