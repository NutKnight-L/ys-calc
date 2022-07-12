//获取元素
var chaslt = document.getElementById('cha-select');
var options = chaslt.options;
var life = document.getElementById('cha_life');
var atk = document.getElementById('cha_atk');
var def = document.getElementById('cha_def');
var lv = document.getElementById('cha_lv');
var cfm = document.getElementById('confirmed');
var tcfm = document.getElementById('textforckb');
//添加options
lv.add(new Option('----choose----', ''));
for (var i = 1; i <= 90; i++) {
    lv.add(new Option(i, i));
}
chaslt.add(new Option('----choose----', ''));
for (var i = 0; i < datas.length; i++) {
    chaslt.add(new Option(datas[i]['ChineseName'], i));
}
//添加监听事件
cfm.addEventListener("change", tocfm);
cfm.addEventListener("change", tocfmRe);
lv.addEventListener("change", toResult);
chaslt.addEventListener("change", toResult);
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
function tocfmRe(){
    // console.log("改变了");
    toResult();
}
//判断是否突破
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
    if(cfm.style.display == 'none'){
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
            console.log(mtemp);
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
//计算生命值，攻击力，防御力
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
    return [life.value, atk.value, def.value];

}


var weps = document.getElementsByName('weapon');
var wepup = document.getElementsByName('wep_up');
var mywepselect = document.getElementById('wep_select');
var wepdsj = ["单手剑1", "单手剑2", "单手剑3", "单手剑4", "单手剑5", "单手剑6"];
var wepssj = ["双手剑1", "双手剑2", "双手剑3", "双手剑4", "双手剑5"];
var wepfq = ["法器1", "法器2", "法器3", "法器4", "法器5"];
var wepbow = ["弓1", "弓2", "弓3", "弓4", "弓5"];
var wepcq = ["长枪1", "长枪2", "长枪3", "长枪4", "长枪5"];
//给radio添加监听器
for (var a = 0; a < weps.length; a++) {
    weps[a].addEventListener("click", choweps);
}
for (var a = 0; a < wepup.length; a++) {
    wepup[a].addEventListener("click", calcWep);
}
function calcWep() {
    console.log(chac.abeiduo);
}
choweps();
//改变下拉菜单
function choweps() {
    for (var j = 0; j < weps.length; j++) {
        // console.log(weps[j].value);
        if (weps[j].checked) {
            if (weps[j].value == "dsj") {
                mywepselect.options.length = 0;
                for (var k = 0; k < wepdsj.length; k++) {
                    mywepselect.add(new Option(wepdsj[k], k));
                }
            }
            if (weps[j].value == "ssj") {
                mywepselect.options.length = 0;
                for (var k = 0; k < wepssj.length; k++) {
                    mywepselect.add(new Option(wepssj[k], k));
                }
            }
            if (weps[j].value == "fq") {
                mywepselect.options.length = 0;
                for (var k = 0; k < wepfq.length; k++) {
                    mywepselect.add(new Option(wepfq[k], k));
                }
            }
            if (weps[j].value == "bow") {
                mywepselect.options.length = 0;
                for (var k = 0; k < wepbow.length; k++) {
                    mywepselect.add(new Option(wepbow[k], k));
                }
            }
            if (weps[j].value == "cq") {
                mywepselect.options.length = 0;
                for (var k = 0; k < wepcq.length; k++) {
                    mywepselect.add(new Option(wepcq[k], k));
                }
            }
        }
    }
}
//test btn
var mbtn = document.getElementById('btn1');
btn1.onclick = function mclick() {
    console.log("Test Button");
};
