//突破乘数
//20 40 50 60 70 80
var am = [0.208791209, 0.357142857, 0.554945055, 0.703296703, 0.851648352, 1];

//Basic multiplier 角色数值基础乘数和最大加数
//0 基础生命 1 基础攻击 2 基础防御
//3 最大生命 4 最大攻击 5 最大防御
//6 角色星级
var bm = {
    abeiduo: [1029.6, 19.6, 68.2, 4228, 80.3, 280.1, 5],
    ailuoyi: [848.5, 18.2, 52.6, 3484.2, 74.8, 216.2, 5],
    anbo: [793.3, 18.7, 50.4, 2838.3, 66.9, 180.2, 4],
    yidou: [1001, 17.7, 74.7, 4110.6, 72.6, 306.6, 5],
    babala: [820.6, 13.4, 56.1, 2936.1, 47.8, 200.7, 4],
    beidou: [1094.1, 18.9, 54.4, 3914.8, 67.5, 194.5, 4],
    bannite: [1039.4, 16, 64.7, 3719.1, 57.3, 231.4, 4],
    chongyun: [920.9, 18.7, 54.4, 3295, 66.9, 194.5, 4],
    diluke: [1010.5, 26.1, 61, 4149.7, 107, 250.6, 5],
    diaona: [802.4, 17.8, 50.4, 2870.9, 63.7, 180.2, 4],
    youla: [1029.6, 26.6, 58.5, 4228, 109.3, 240, 5],
    feixieer: [770.5, 20.5, 49.8, 2756.7, 73.3, 178.1, 4],
    ganyu: [762.7, 26.1, 49.1, 3131.9, 107, 201.5, 5],
    wulang: [802.4, 15.3, 54.4, 2870.9, 54.8, 194.5, 4],
    hutao: [1210.7, 8.3, 68.2, 4971.9, 34, 280.1, 5],
    qin: [1144, 18.6, 59.8, 4697.8, 76.5, 245.7, 5],
    wanye: [1039.1, 23.1, 62.8, 4267.2, 94.8, 258, 5],
    kaiya: [975.6, 18.7, 66.4, 3490.7, 66.9, 237.5, 4],
    linghua: [1001, 26.6, 61, 4110.6, 109.3, 250.6, 5],
    keqing: [1020.1, 25.1, 62.2, 4188.9, 103.2, 255.5, 5],
    keli: [800.8, 24.2, 47.9, 3288.5, 99.4, 196.6, 5],
    jiutiao: [802.4, 16.4, 52.7, 2870.9, 58.6, 188.4, 4],
    lisha: [802.4, 19.4, 48.1, 2870.9, 69.5, 172, 4],
    mona: [810.3, 22.3, 50.9, 3327.6, 91.7, 208.8, 5],
    ningguang: [820.6, 17.8, 48.1, 2936.1, 63.7, 172, 4],
    nuoaier: [1012.1, 16, 67, 3621.2, 57.3, 239.6, 4],
    qiqi: [962.9, 22.3, 71.8, 3954, 91.7, 294.8, 5],
    leidianjiangjun: [1004.8, 26.2, 61.4, 4126.2, 107.8, 252.3, 5],
    leize: [1003, 19.6, 62.9, 3588.6, 70.1, 225.2, 4],
    luoshaliya: [1030.3, 20.1, 59.5, 3686.5, 72, 212.9, 4],
    xinhai: [1048.7, 18.2, 51.1, 4306.3, 75, 210, 5],
    zaoyou: [993.9, 20.5, 62.4, 3556, 73.3, 223.4, 4],
    shenhe: [1011.5, 23.7, 64.6, 4153.7, 97.1, 265.4, 5],
    shatang: [775, 14.2, 58.9, 2773, 51, 210.9, 4],
    dadaliya: [1020.1, 23.5, 63.4, 4188.9, 96.3, 260.4, 5],
    tuoma: [866.2, 16.9, 62.9, 3099.2, 60.5, 225.2, 4],
    lvxingzhe: [911.8, 17.8, 57.2, 3262.4, 63.7, 204.8, 4],
    wendi: [819.9, 20.5, 52.1, 3366.8, 84.1, 213.8, 5],
    xiangling: [911.8, 18.9, 56.1, 3262.4, 67.5, 200.7, 4],
    xiao: [991.5, 27.2, 62.2, 4071.4, 111.6, 255.5, 5],
    xingqiu: [857.1, 16.9, 63.5, 3066.6, 60.5, 227.3, 4],
    xinyan: [939.1, 20.8, 67, 3360.2, 74.6, 239.6, 4],
    shenzi: [807.4, 26.4, 44.4, 3315.9, 108.6, 181.8, 5],
    yanfei: [784.1, 20.1, 49.2, 2805.6, 72, 176.1, 4],
    xiaogong: [791.3, 25.1, 47.9, 3249.3, 103.2, 196.5, 5],
    yunjin: [893.6, 16, 61.6, 3196.8, 57.4, 219.9, 4],
    zhongli: [1144, 19.6, 57.4, 4697.8, 80.3, 235.9, 5],
    yelan: [1124.9, 19, 42.7, 4619.5, 78, 175.2, 5],
    lingren: [1067.7, 23.3, 59.8, 4384.6, 95.6, 245.7, 5],
    jiuqiren: [1030.3, 17.8, 62.9, 3686.5, 63.7, 225.2, 4]
}
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
for (var i = 1; i <= 90; i++) {
    lv.add(new Option(i, i));
}
//添加监听事件
cfm.addEventListener("change", tocfm); 
lv.addEventListener("change", toResult);
chaslt.addEventListener("change", toResult);
//判断是否突破
function tocfm() {
    if (cfm.checked) {
        // console.log("已勾选");
        toResult();
    }
    else {
        // console.log("已取消勾选");
        toResult();
    }
}
//计算生命值，攻击力，防御力
function toResult() {
    var index = chaslt.selectedIndex;
    var selectedText = options[index].value;
    var mylv = lv.value;
    // console.log(selectedText);
    if (mylv == 20 || mylv == 40 || mylv == 50 || mylv == 60 || mylv == 70 || mylv == 80) {
        cfm.style.display = "inline";
        tcfm.style.display = "inline";
    }
    else {
        cfm.style.display = "none";
        tcfm.style.display = "none";
    }
    for (var i = 0; i < chac.Character.length; i++) {
        // console.log(i);
        if (selectedText == chac.Character[i].name) {
            console.log(lm());
            var lvm = slmp[chac.Character[i].star][mylv - 1];
            life.value = (chac.Character[i].Bhp * lvm + chac.Character[i].Mhp * lm()).toFixed(2);
            atk.value = (chac.Character[i].Batk * lvm + chac.Character[i].Matk * lm()).toFixed(2);
            def.value = (chac.Character[i].Bdef * lvm + chac.Character[i].Mdef * lm()).toFixed(2);
        }
    }
}
//判断突破等级
function lm() {
    var myam;
    var mylv = lv.value;
    if (mylv < 20) {
        myam = 0;
    }
    if (mylv > 20 && mylv < 40) {
        myam = am[0];
    }
    if (mylv > 40 && mylv < 50) {
        myam = am[1];
    }
    if (mylv > 50 && mylv < 60) {
        myam = am[2];
    }
    if (mylv > 60 && mylv < 70) {
        myam = am[3];
    }
    if (mylv > 70 && mylv < 80) {
        myam = am[4];
    }
    if (mylv > 80 && mylv <= 90) {
        myam = am[5];
    }
    if (mylv == 20) {
        if (cfm.checked) {
            myam = am[0];
        }
        else myam = 0;
    }
    if (mylv == 40) {
        if (cfm.checked) {
            myam = am[1];
        }
        else myam = am[0];
    }
    if (mylv == 50) {
        if (cfm.checked) {
            myam = am[2];
        }
        else myam = am[1];
    }
    if (mylv == 60) {
        if (cfm.checked) {
            myam = am[3];
        }
        else myam = am[2];
    }
    if (mylv == 70) {
        if (cfm.checked) {
            myam = am[4];
        }
        else myam = am[3];
    }
    if (mylv == 80) {
        if (cfm.checked) {
            myam = am[5];
        }
        else myam = am[4];
    }
    return myam;
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