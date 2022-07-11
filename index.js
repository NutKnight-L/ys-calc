//four star level multiplier 四星角色等级乘数
var lm4 = [
    1.000, 1.083, 1.165, 1.248, 1.330, 1.413, 1.495, 1.578, 1.661, 1.743,
    1.826, 1.908, 1.991, 2.073, 2.156, 2.239, 2.321, 2.404, 2.486, 2.569,
    2.651, 2.734, 2.817, 2.899, 2.982, 3.064, 3.147, 3.229, 3.312, 3.394,
    3.477, 3.560, 3.642, 3.725, 3.807, 3.890, 3.972, 4.055, 4.138, 4.220,
    4.303, 4.385, 4.468, 4.550, 4.633, 4.716, 4.798, 4.881, 4.963, 5.046,
    5.128, 5.211, 5.294, 5.376, 5.459, 5.541, 5.624, 5.706, 5.789, 5.872,
    5.954, 6.037, 6.119, 6.202, 6.284, 6.367, 6.450, 6.532, 6.615, 6.697, 
    6.780, 6.862, 6.945, 7.028, 7.110, 7.193, 7.275, 7.358, 7.440, 7.523, 
    7.606, 7.688, 7.771, 7.853, 7.936, 8.018, 8.101, 8.183, 8.266, 8.349
];
//five star star level multiplier 五星角色等级乘数
var lm5 = [
    1.000, 1.083, 1.166, 1.250, 1.333, 1.417, 1.500, 1.584, 1.668, 1.751, 
    1.835, 1.919, 2.003, 2.088, 2.172, 2.256, 2.341, 2.425, 2.510, 2.594, 
    2.679, 2.764, 2.849, 2.934, 3.019, 3.105, 3.190, 3.275, 3.361, 3.446, 
    3.532, 3.618, 3.704, 3.789, 3.875, 3.962, 4.048, 4.134, 4.220, 4.307, 
    4.393, 4.480, 4.567, 4.653, 4.740, 4.827, 4.914, 5.001, 5.089, 5.176, 
    5.263, 5.351, 5.438, 5.526, 5.614, 5.702, 5.790, 5.878, 5.966, 6.054, 
    6.142, 6.230, 6.319, 6.407, 6.496, 6.585, 6.673, 6.762, 6.851, 6.940, 
    7.029, 7.119, 7.208, 7.297, 7.387, 7.476, 7.566, 7.656, 7.746, 7.836, 
    7.926, 8.016, 8.106, 8.196, 8.286, 8.377, 8.467, 8.558, 8.649, 8.739
];
//alert(lm5[89]);

//突破乘数
//20 40 50 60 70 80
var am = [0.208791209, 0.357142857, 0.554945055, 0.703296703, 0.851648352, 1];

//Basic multiplier 角色数值基础乘数和最大加数
//0 基础生命 1 基础攻击 2 基础防御
//3 最大生命 4 最大攻击 5 最大防御
//6 角色星级
var bm = {
    abeiduo : [1029.6, 19.6, 68.2, 4228, 80.3, 280.1, 5],
    ailuoyi : [848.5, 18.2, 52.6, 3484.2, 74.8, 216.2, 5],
    anbo : [793.3, 18.7, 50.4, 2838.3, 66.9, 180.2, 4],
    yidou : [1001, 17.7, 74.7, 4110.6, 72.6, 306.6, 5],
    babala : [820.6, 13.4, 56.1, 2936.1, 47.8, 200.7, 4],
    beidou : [1094.1, 18.9, 54.4, 3914.8, 67.5, 194.5, 4],
    bannite : [1039.4, 16, 64.7, 3719.1, 57.3, 231.4, 4],
    chongyun : [920.9, 18.7, 54.4, 3295, 66.9, 194.5, 4],
    diluke : [1010.5, 26.1, 61, 4149.7, 107, 250.6, 5],
    diaona : [802.4, 17.8, 50.4, 2870.9, 63.7, 180.2, 4],
    youla : [1029.6, 26.6, 58.5, 4228, 109.3, 240, 5],
    feixieer : [770.5, 20.5, 49.8, 2756.7, 73.3, 178.1, 4],
    ganyu : [762.7, 26.1, 49.1, 3131.9, 107, 201.5, 5],
    wulang : [802.4, 15.3, 54.4, 2870.9, 54.8, 194.5, 4],
    hutao : [1210.7, 8.3, 68.2, 4971.9, 34, 280.1, 5],
    qin : [1144, 18.6, 59.8, 4697.8, 76.5, 245.7, 5],
    wanye : [1039.1, 23.1, 62.8, 4267.2, 94.8, 258, 5],
    kaiya : [975.6, 18.7, 66.4, 3490.7, 66.9, 237.5, 4],
    linghua : [1001, 26.6, 61, 4110.6, 109.3, 250.6, 5],
    keqing : [1020.1, 25.1, 62.2, 4188.9, 103.2, 255.5, 5],
    keli : [800.8, 24.2, 47.9, 3288.5, 99.4, 196.6, 5],
    jiutiao : [802.4, 16.4, 52.7, 2870.9, 58.6, 188.4, 4],
    lisha : [802.4, 19.4, 48.1, 2870.9, 69.5, 172, 4],
    mona : [810.3, 22.3, 50.9, 3327.6, 91.7, 208.8, 5],
    ningguang : [820.6, 17.8, 48.1, 2936.1, 63.7, 172, 4],
    nuoaier : [1012.1, 16, 67, 3621.2, 57.3, 239.6, 4],
    qiqi : [962.9, 22.3, 71.8, 3954, 91.7, 294.8, 5],
    leidianjiangjun : [1004.8, 26.2, 61.4, 4126.2, 107.8, 252.3, 5],
    leize : [1003, 19.6, 62.9, 3588.6, 70.1, 225.2, 4],
    luoshaliya : [1030.3, 20.1, 59.5, 3686.5, 72, 212.9, 4],
    xinhai : [1048.7, 18.2, 51.1, 4306.3, 75, 210, 5],
    zaoyou : [993.9, 20.5, 62.4, 3556, 73.3, 223.4, 4],
    shenhe : [1011.5, 23.7, 64.6, 4153.7, 97.1, 265.4, 5],
    shatang : [775, 14.2, 58.9, 2773, 51, 210.9, 4],
    dadaliya : [1020.1, 23.5, 63.4, 4188.9, 96.3, 260.4, 5],
    tuoma : [866.2, 16.9, 62.9, 3099.2, 60.5, 225.2, 4],
    lvxingzhe : [911.8, 17.8, 57.2, 3262.4, 63.7, 204.8, 4],
    wendi : [819.9, 20.5, 52.1, 3366.8, 84.1, 213.8, 5],
    xiangling : [911.8, 18.9, 56.1, 3262.4, 67.5, 200.7, 4],
    xiao : [991.5, 27.2, 62.2, 4071.4, 111.6, 255.5, 5],
    xingqiu : [857.1, 16.9, 63.5, 3066.6, 60.5, 227.3, 4],
    xinyan : [939.1, 20.8, 67, 3360.2, 74.6, 239.6, 4],
    shenzi : [807.4, 26.4, 44.4, 3315.9, 108.6, 181.8, 5],
    yanfei : [784.1, 20.1, 49.2, 2805.6, 72, 176.1, 4],
    xiaogong : [791.3, 25.1, 47.9, 3249.3, 103.2, 196.5, 5],
    yunjin : [893.6, 16, 61.6, 3196.8, 57.4, 219.9, 4],
    zhongli : [1144, 19.6, 57.4, 4697.8, 80.3, 235.9, 5],
    yelan: [1124.9, 19, 42.7, 4619.5, 78, 175.2, 5],
    lingren: [1067.7, 23.3, 59.8, 4384.6, 95.6, 245.7, 5],
    jiuqiren: [1030.3, 17.8, 62.9, 3686.5, 63.7, 225.2, 4]
}
var myselect = document.getElementById('cha-select');
var options = myselect.options;
var life = document.getElementById('cha_life');
var atk = document.getElementById('cha_atk');
var def = document.getElementById('cha_def');
var lv = document.getElementById('cha_lv');
//btn.onclick = myclick;
function myclick(){
    var index = myselect.selectedIndex;
    var selectedText = options[index].value;
    var mylv = lv.value;
    //alert(selectedText);
    if(bm[selectedText][6] == 5){
        if(mylv >= 80){
            life.value = (bm[selectedText][0]*lm5[mylv-1] + bm[selectedText][3]*am[5]).toFixed(2);
        }
        if(mylv >= 70 && mylv < 80){
            life.value = (bm[selectedText][0]*lm5[mylv-1] + bm[selectedText][3]*am[4]).toFixed(2);
        }
        if(mylv >= 60 && mylv < 70){
            life.value = (bm[selectedText][0]*lm5[mylv-1] + bm[selectedText][3]*am[3]).toFixed(2);
        }
        if(mylv >= 50 && mylv < 60){
            life.value = (bm[selectedText][0]*lm5[mylv-1] + bm[selectedText][3]*am[2]).toFixed(2);
        }
        if(mylv >= 40 && mylv < 50){
            life.value = (bm[selectedText][0]*lm5[mylv-1] + bm[selectedText][3]*am[1]).toFixed(2);
        }
        if(mylv >= 20 && mylv < 40){
            life.value = (bm[selectedText][0]*lm5[mylv-1] + bm[selectedText][3]*am[0]).toFixed(2);
        }
        if(mylv < 20){
            life.value = (bm[selectedText][0]*lm5[mylv-1]).toFixed(2);
        }
    }
    if(bm[selectedText][6] == 4){
        if(mylv >= 80){
            life.value = (bm[selectedText][0]*lm4[mylv-1] + bm[selectedText][3]*am[5]).toFixed(2);
        }
        if(mylv >= 70 && mylv < 80){
            life.value = (bm[selectedText][0]*lm4[mylv-1] + bm[selectedText][3]*am[4]).toFixed(2);
        }
        if(mylv >= 60 && mylv < 70){
            life.value = (bm[selectedText][0]*lm4[mylv-1] + bm[selectedText][3]*am[3]).toFixed(2);
        }
        if(mylv >= 50 && mylv < 60){
            life.value = (bm[selectedText][0]*lm4[mylv-1] + bm[selectedText][3]*am[2]).toFixed(2);
        }
        if(mylv >= 40 && mylv < 50){
            life.value = (bm[selectedText][0]*lm4[mylv-1] + bm[selectedText][3]*am[1]).toFixed(2);
        }
        if(mylv >= 20 && mylv < 40){
            life.value = (bm[selectedText][0]*lm4[mylv-1] + bm[selectedText][3]*am[0]).toFixed(2);
        }
        if(mylv < 20){
            life.value = (bm[selectedText][0]*lm4[mylv-1]).toFixed(2);
        }
    }
    if(bm[selectedText][6] == 5){
        if(mylv >= 80){
            atk.value = (bm[selectedText][1]*lm5[mylv-1] + bm[selectedText][4]*am[5]).toFixed(2);
        }
        if(mylv >= 70 && mylv < 80){
            atk.value = (bm[selectedText][1]*lm5[mylv-1] + bm[selectedText][4]*am[4]).toFixed(2);
        }
        if(mylv >= 60 && mylv < 70){
            atk.value = (bm[selectedText][1]*lm5[mylv-1] + bm[selectedText][4]*am[3]).toFixed(2);
        }
        if(mylv >= 50 && mylv < 60){
            atk.value = (bm[selectedText][1]*lm5[mylv-1] + bm[selectedText][4]*am[2]).toFixed(2);
        }
        if(mylv >= 40 && mylv < 50){
            atk.value = (bm[selectedText][1]*lm5[mylv-1] + bm[selectedText][4]*am[1]).toFixed(2);
        }
        if(mylv >= 20 && mylv < 40){
            atk.value = (bm[selectedText][1]*lm5[mylv-1] + bm[selectedText][4]*am[0]).toFixed(2);
        }
        if(mylv < 20){
            atk.value = (bm[selectedText][1]*lm5[mylv-1]).toFixed(2);
        }
    }
    if(bm[selectedText][6] == 4){
        if(mylv >= 80){
            atk.value = (bm[selectedText][1]*lm4[mylv-1] + bm[selectedText][4]*am[5]).toFixed(2);
        }
        if(mylv >= 70 && mylv < 80){
            atk.value = (bm[selectedText][1]*lm4[mylv-1] + bm[selectedText][4]*am[4]).toFixed(2);
        }
        if(mylv >= 60 && mylv < 70){
            atk.value = (bm[selectedText][1]*lm4[mylv-1] + bm[selectedText][4]*am[3]).toFixed(2);
        }
        if(mylv >= 50 && mylv < 60){
            atk.value = (bm[selectedText][1]*lm4[mylv-1] + bm[selectedText][4]*am[2]).toFixed(2);
        }
        if(mylv >= 40 && mylv < 50){
            atk.value = (bm[selectedText][1]*lm4[mylv-1] + bm[selectedText][4]*am[1]).toFixed(2);
        }
        if(mylv >= 20 && mylv < 40){
            atk.value = (bm[selectedText][1]*lm4[mylv-1] + bm[selectedText][4]*am[0]).toFixed(2);
        }
        if(mylv < 20){
            atk.value = (bm[selectedText][1]*lm4[mylv-1]).toFixed(2);
        }
    }
    if(bm[selectedText][6] == 5){
        if(mylv >= 80){
            def.value = (bm[selectedText][2]*lm5[mylv-1] + bm[selectedText][5]*am[5]).toFixed(2);
        }
        if(mylv >= 70 && mylv < 80){
            def.value = (bm[selectedText][2]*lm5[mylv-1] + bm[selectedText][5]*am[4]).toFixed(2);
        }
        if(mylv >= 60 && mylv < 70){
            def.value = (bm[selectedText][2]*lm5[mylv-1] + bm[selectedText][5]*am[3]).toFixed(2);
        }
        if(mylv >= 50 && mylv < 60){
            def.value = (bm[selectedText][2]*lm5[mylv-1] + bm[selectedText][5]*am[2]).toFixed(2);
        }
        if(mylv >= 40 && mylv < 50){
            def.value = (bm[selectedText][2]*lm5[mylv-1] + bm[selectedText][5]*am[1]).toFixed(2);
        }
        if(mylv >= 20 && mylv < 40){
            def.value = (bm[selectedText][2]*lm5[mylv-1] + bm[selectedText][5]*am[0]).toFixed(2);
        }
        if(mylv < 20){
            def.value = (bm[selectedText][2]*lm5[mylv-1]).toFixed(2);
        }
    }
    if(bm[selectedText][6] == 4){
        if(mylv >= 80){
            def.value = (bm[selectedText][2]*lm4[mylv-1] + bm[selectedText][5]*am[5]).toFixed(2);
        }
        if(mylv >= 70 && mylv < 80){
            def.value = (bm[selectedText][2]*lm4[mylv-1] + bm[selectedText][5]*am[4]).toFixed(2);
        }
        if(mylv >= 60 && mylv < 70){
            def.value = (bm[selectedText][2]*lm4[mylv-1] + bm[selectedText][5]*am[3]).toFixed(2);
        }
        if(mylv >= 50 && mylv < 60){
            def.value = (bm[selectedText][2]*lm4[mylv-1] + bm[selectedText][5]*am[2]).toFixed(2);
        }
        if(mylv >= 40 && mylv < 50){
            def.value = (bm[selectedText][2]*lm4[mylv-1] + bm[selectedText][5]*am[1]).toFixed(2);
        }
        if(mylv >= 20 && mylv < 40){
            def.value = (bm[selectedText][2]*lm4[mylv-1] + bm[selectedText][5]*am[0]).toFixed(2);
        }
        if(mylv < 20){
            def.value = (bm[selectedText][2]*lm4[mylv-1]).toFixed(2);
        }
    }
}
setInterval("myclick()",100);
