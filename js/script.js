window.onload = function () {
    //获取dom元素
    const wepList = document.getElementById('wepList');
    const wList = document.getElementById("wList");
    const btn1 = document.getElementById('btn1'); //测试按钮
    const btn2 = document.getElementById('btn2'); //测试按钮
    let mB = document.getElementsByClassName('wName');
    let mA = document.getElementsByClassName('moduleA');
    let mC = document.getElementsByClassName('wType');
    let mD = document.getElementsByClassName('wIcon');
    let mE = document.getElementsByClassName('moduleE');
    let wepSiftChoose = document.getElementsByClassName('wepSiftChoose');
    let listChoose = document.getElementsByClassName('listChoose')[0].getElementsByTagName('div');
    let wepSiftList = [listChoose[2], listChoose[3]];
    let lvRangeBtn = document.getElementById('weplevel');
    let affixName = document.getElementsByClassName("affixName");
    let affixText = document.getElementsByClassName("affixText");
    let showList = document.getElementById("showList");
    let propBtn = document.getElementById('isPropBtn');

    addNewLi(siftWType(), siftWRank());


    q(getPresentStar(), zWep[0]["rankLevel"]);

    wepList.addEventListener("click", function (e) {
        for (let i = 0; i < zWep.length; i++) {
            if (e.target.textContent == zWep[i]["weaponName"]) {

                //获取列表长度
                let arrayLi = wepList.children;

                //清空列表样式
                for (let i = 0; i < arrayLi.length; i++) {
                    arrayLi[i].className = "";
                }
                //设置列表选中样式
                e.target.className = "liChecked";

                //载入武器类型图片
                mD[0].innerHTML = "<img src=" + getType(zWep[i]["weaponType"]) + ">";

                //写入武器主词条和对应数值
                let preLevel = lvRangeBtn.value;//获取当前等级
                let propMainType = zWep[i]["weaponProp"][0]["type"];//获取武器成长主词条类型

                let mainFirstValue = zWep[i]["weaponProp"][0]["initValue"];//获取武器初始主词条
                let mainNum = getPropValue(preLevel, propMainType, mainFirstValue, null);
                let addNum = getAddPropValue(zWep[i]["rankLevel"], getPropRange(preLevel, isPropChecked()));
                mA[0].innerHTML = "<span>基础攻击力</span>" + "<span>" + (mainNum + addNum).toFixed(0) + "</span>";

                //写入武器名字和武器类型
                mB[0].innerHTML = "<span>" + zWep[i]['weaponName'] + "</span>";
                mC[0].innerHTML = "<span>" + zWep[i]["weaponType"] + "</span>";

                //重置武器特效
                affixName[0].innerHTML = "";
                affixText[0].innerHTML = "";

                //改变星级
                q(getPresentStar(), zWep[i]["rankLevel"]);

                //改变副词条
                if (zWep[i]["weaponProp"][1]) {
                    let propSecType = zWep[i]["weaponProp"][1]["type"];
                    let propSecValue = zWep[i]["weaponProp"][1]["initValue"];

                    //写入武器特效
                    affixName[0].innerHTML = "<span>" + zWep[i]["skillAffixName"] + "</span>";
                    affixText[0].innerHTML = "<span>• " + zWep[i]["skillAffixText"] + "</span>";

                    //写入武器副词条及数值
                    switch (zWep[i]["weaponProp"][1]["propType"]) {

                        //对于元素精通不做变化输出
                        case "元素精通":
                            mA[1].innerHTML = "<span>" + zWep[i]["weaponProp"][1]["propType"] + "</span>"
                                + "<span>" + (getPropValue(preLevel, propSecType, propSecValue, null)).toFixed(0) + "</span>";
                            break;

                        //对于小数数据变成对应的百分数及四舍五入
                        default:
                            mA[1].innerHTML = "<span>" + zWep[i]["weaponProp"][1]["propType"] + "</span>"
                                + "<span>" + ((getPropValue(preLevel, propSecType, propSecValue, null)) * 100).toFixed(1) + "%" + "</span>";
                            break;
                    }
                }
                //对于没有副词条的写入其他的东西
                if (!zWep[i]["weaponProp"][1]) {
                    mA[1].innerHTML = "<span>" + "没有副词条的" + "</span>"
                        + "<span>" + "神圣武器" + "</span>";
                }

            }
        }
    });

    //获取武器类型显示图片
    function getType(weaponType) {
        switch (weaponType) {
            case "单手剑":
                return "img/Icon_Sword.png";
                break;
            case "双手剑":
                return "img/Icon_Claymore.png";
                break;
            case "长柄武器":
                return "img/Icon_Polearm.png";
                break;
            case "法器":
                return "img/Icon_Catalyst.png";
                break;
            case "弓":
                return "img/Icon_Bow.png";
                break;
            default:
                break;
        }
    }

    //获取当前显示的武器星级
    function getPresentStar() {
        // console.log(mE[0].getElementsByTagName('i').length);
        return mE[0].getElementsByTagName('i').length;
    }

    //筛选
    for (let i = 0; i < wepSiftChoose.length; i++) {
        wepSiftChoose[i].onclick = wepSift;
    }
    for (let i = 0; i < 5; i++) {
        wepSiftList[0].getElementsByTagName('li')[i].onclick = liChecked;
        wepSiftList[1].getElementsByTagName('li')[i].onclick = liChecked;
    }
    //选中li事件 /* 用this的问题 */
    function liChecked() {
        this.className = "liChecked";
        for (let i = 0; i < 5; i++) {
            if (this.parentNode.getElementsByTagName('li')[i].textContent != this.textContent) {
                this.parentNode.getElementsByTagName('li')[i].className = "liUnChecked";
            }
        }
        addNewLi(siftWType(), siftWRank());
    }
    //创建武器列表
    function addNewLi(WsiftType, WsiftRank) {
        delList();
        if (WsiftType == false && WsiftRank == false) {
            for (let i = 0; i < zWep.length; i++) {
                let nli = document.createElement('li');
                nli.textContent = zWep[i]["weaponName"];
                wepList.appendChild(nli);
            }
        }
        if (WsiftRank != false && WsiftType != false) {
            for (let i = 0; i < zWep.length; i++) {
                if (zWep[i]["rankLevel"] == WsiftRank) {
                    if (zWep[i]["weaponType"] == WsiftType) {
                        let nli = document.createElement('li');
                        nli.textContent = zWep[i]["weaponName"];
                        wepList.appendChild(nli);
                    }
                }
                /* if (zWep[i]["weaponType"] == WsiftType) {
                    if (zWep[i]["rankLevel"] == WsiftRank) {
                        let nli = document.createElement('li');
                        nli.textContent = zWep[i]["weaponName"];
                        wepList.appendChild(nli);
                    }
                } */
            }
        }
        if (WsiftType != false && WsiftRank == false) {
            for (let i = 0; i < zWep.length; i++) {
                if (zWep[i]["weaponType"] == WsiftType) {
                    let nli = document.createElement('li');
                    nli.textContent = zWep[i]["weaponName"];
                    wepList.appendChild(nli);
                }
            }
        }
        if (WsiftRank != false && WsiftType == false) {
            for (let i = 0; i < zWep.length; i++) {
                if (zWep[i]["rankLevel"] == WsiftRank) {
                    let nli = document.createElement('li');
                    nli.textContent = zWep[i]["weaponName"];
                    wepList.appendChild(nli);
                }
            }
        }
    }

    //筛选列表开关
    function wepSift() {
        for (let i = 0; i < 2; i++) {
            if (wepSiftChoose[i]) {
                switch (wepSiftList[i].className) {
                    case "siftListHidden":
                        wepSiftList[i].className = "wepListA";
                        wepSiftChoose[i].getElementsByTagName('i')[0].className = "fa-solid fa-angle-down arrowUp";
                        break;
                    case "wepListA":
                        wepSiftList[i].className = "siftListHidden";
                        wepSiftChoose[i].getElementsByTagName('i')[0].className = "fa-solid fa-angle-down";
                        break;
                }
            }
        }
    }
    /* btn1.onclick = function () {
        //测试用
        // console.log(siftWType(), siftWRank());
        addNewLi(siftWType(), siftWRank());
    }
    btn2.onclick = function () {
        //测试用
        delList();
    } */
    //删除武器列表
    function delList() {
        for (let i = wepList.children.length; i >= 1; i--) {
            wepList.children[i - 1].remove();
        }
    }
    function siftWType() {
        let wTypelist = document.getElementById("wTypelist");
        let isChecked = false;
        let backString;
        for (let i = 0; i < 5; i++) {
            if (wTypelist.getElementsByTagName('li')[i].className == "liChecked") {
                isChecked = true;
                backString = wTypelist.getElementsByTagName('li')[i].textContent;
            }
        }
        if (isChecked) {
            return backString;
        } else {
            return isChecked;
        }
    }
    function siftWRank() {
        let wRanklist = document.getElementById("wRanklist");
        let isChecked = false;
        let backString;
        for (let i = 0; i < 5; i++) {
            if (wRanklist.getElementsByTagName('li')[i].className == "liChecked") {
                isChecked = true;
                backString = Number(wRanklist.getElementsByTagName('li')[i].textContent);
            }
        }
        if (isChecked) {
            return backString;
        } else {
            return isChecked;
        }
    }
    //动态修改星级
    function q(n1, n2) {
        setTimeout(function () {
            if (n1 == n2) {
                return 0;
            }
            if (n1 > n2) {

                clearStar(n1);
                n1--;
                return q(n1, n2);
            }
            n1++;
            nI();
            return q(n1, n2);
        }, 100
        );
    }
    //添加星星图标
    function nI() {
        setTimeout(function () {
            let nI = document.createElement('i');
            nI.className = "fa-solid fa-star staricon";
            mE[0].appendChild(nI);
        }, 0);
    }
    //清除星星图标
    function clearStar(nnn) {
        // let nnn = getPresentStar();
        mE[0].getElementsByTagName('i')[nnn - 1].className = "fa-solid fa-star clearStar";
        setTimeout(function () {
            mE[0].getElementsByTagName('i')[nnn - 1].parentNode.removeChild(mE[0].getElementsByTagName('i')[nnn - 1]);
        }, 100);
    }
    //等级滑块
    lvRangeBtn.oninput = rangeCreateLv;
    function rangeCreateLv() {
        lvRangeBtn.parentNode.getElementsByTagName('span')[0].textContent = "Lv." + lvRangeBtn.value;
        for (let i = 0; i < zWep.length; i++) {
            if (zWep[i]["weaponName"] == mB[0].textContent) {
                //写入武器主词条和对应数值
                let preLevel = lvRangeBtn.value;//获取当前等级
                let propMainType = zWep[i]["weaponProp"][0]["type"];//获取武器成长主词条类型
                let mainFirstValue = zWep[i]["weaponProp"][0]["initValue"];//获取武器初始主词条
                let mainNum = getPropValue(preLevel, propMainType, mainFirstValue, null);
                let addNum = getAddPropValue(zWep[i]["rankLevel"], getPropRange(preLevel, isPropChecked()));
                mA[0].innerHTML = "<span>基础攻击力</span>" + "<span>" + (mainNum + addNum).toFixed(0) + "</span>";
                if (zWep[i]["weaponProp"][1]) {
                    let propSecType = zWep[i]["weaponProp"][1]["type"];
                    let propSecValue = zWep[i]["weaponProp"][1]["initValue"];

                    //写入武器特效
                    affixName[0].innerHTML = "<span>" + zWep[i]["skillAffixName"] + "</span>";
                    affixText[0].innerHTML = "<span>• " + zWep[i]["skillAffixText"] + "</span>";

                    //写入武器副词条及数值
                    switch (zWep[i]["weaponProp"][1]["propType"]) {

                        //对于元素精通不做变化输出
                        case "元素精通":
                            mA[1].innerHTML = "<span>" + zWep[i]["weaponProp"][1]["propType"] + "</span>"
                                + "<span>" + getPropValue(preLevel, propSecType, propSecValue, null).toFixed(0) + "</span>";
                            break;

                        //对于小数数据变成对应的百分数及四舍五入
                        default:
                            mA[1].innerHTML = "<span>" + zWep[i]["weaponProp"][1]["propType"] + "</span>"
                                + "<span>" + ((getPropValue(preLevel, propSecType, propSecValue, null)) * 100).toFixed(1) + "%" + "</span>";
                            break;
                    }
                }
            }



        }
    }
    //侧边菜单
    showList.onclick = function () {
        // console.log("clicked");
        // console.log(ali.clientWidth, ali.clientHeight);
        if (wList.className == "wList" && showList.className == "showList") {
            wList.className = "wListHidden";
            showList.className = "showListBack";
        } else {
            wList.className = "wList";
            showList.className = "showList";
        }
    }

    //获取武器对应等级的等级乘数
    function getPropValue(preLevel, propType, firstValue, isProp) {

        for (let i = 0; i < wce.length; i++) {
            if (preLevel == wce[i]["level"]) {
                for (let j = 0; j < wce[i]["curveInfos"].length; j++) {
                    if (propType == wce[i]["curveInfos"][j]["type"]) {
                        return wce[i]["curveInfos"][j]["value"] * firstValue;
                    }
                }
            }
        }
    }
    //获取武器突破等级
    function getPropRange(preLevel, isProp) {
        if ((preLevel == 80 && isProp) || preLevel >= 81) return 6;
        if ((preLevel == 70 && isProp) || preLevel >= 71) return 5;
        if ((preLevel == 60 && isProp) || preLevel >= 61) return 4;
        if ((preLevel == 50 && isProp) || preLevel >= 51) return 3;
        if ((preLevel == 40 && isProp) || preLevel >= 41) return 2;
        if ((preLevel == 20 && isProp) || preLevel >= 21) return 1;
        else return 0;
    }
    //获取武器对应突破等级的数值
    function getAddPropValue(weaponRankLevel, propLevel, isProp) {
        for (let i = 0; i < addPropValue.length; i++) {
            if (weaponRankLevel == addPropValue[i]["rankLevel"] && propLevel != 0) {
                if ((weaponRankLevel == 1 || weaponRankLevel == 2) && propLevel == 5) {
                    return addPropValue[i]["propValue"][propLevel - 2];
                }
                let len = addPropValue[i]["propValue"].length;
                return addPropValue[i]["propValue"][propLevel - 1];
            }
            if (propLevel == 0) return 0;
        }
    }
    //获取是否突破属性
    propBtn.addEventListener("click", isPropChecked);
    propBtn.addEventListener("click", changeMainValue);
    function isPropChecked() {
        if (propBtn.checked == true) {
            return true;
        }
        else {
            return false;
        }
    }
    function changeMainValue() {
        for (let i = 0; i < zWep.length; i++) {
            if (zWep[i]["weaponName"] == mB[0].textContent) {
                //写入武器主词条和对应数值
                let preLevel = lvRangeBtn.value;//获取当前等级
                let propMainType = zWep[i]["weaponProp"][0]["type"];//获取武器成长主词条类型
                let mainFirstValue = zWep[i]["weaponProp"][0]["initValue"];//获取武器初始主词条
                let addNum = getAddPropValue(zWep[i]["rankLevel"], getPropRange(preLevel, isPropChecked()));
                let mainNum = getPropValue(preLevel, propMainType, mainFirstValue, null);
                mA[0].innerHTML = "<span>基础攻击力</span>" + "<span>" + (mainNum + addNum).toFixed(0) + "</span>";
            }

        }
    }
}

