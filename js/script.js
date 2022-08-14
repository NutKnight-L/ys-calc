window.onload = function () {
    //获取dom元素
    const wList = document.getElementById('wepList');
    const btn1 = document.getElementById('btn1'); //测试按钮
    const btn2 = document.getElementById('btn2'); //测试按钮
    let mB = document.getElementsByClassName('moduleB');
    let mA = document.getElementsByClassName('moduleA');
    let mC = document.getElementsByClassName('moduleC');
    let mD = document.getElementsByClassName('moduleD');
    let mE = document.getElementsByClassName('moduleE');
    let wepSiftChoose = document.getElementsByClassName('wepSiftChoose');
    let listChoose = document.getElementsByClassName('listChoose')[0].getElementsByTagName('div');
    // let wepSiftList = document.getElementsByClassName('siftListHidden');
    let wepSiftList = [listChoose[1], listChoose[3]];

    addNewLi(siftWType(), siftWRank());

    q(getPresentStar(), zWep[0]["rankLevel"]);
    wList.addEventListener("click", function (e) {
        for (let i = 0; i < zWep.length; i++) {
            if (e.target.textContent == zWep[i]["weaponName"]) {
                mD[0].innerHTML = "<img src=" + getType(zWep[i]["weaponType"]) + ">";
                mA[0].innerHTML = "<span>基础攻击力</span>" + "<span>" + zWep[i]["weaponProp"][0]["initValue"].toFixed(0) + "</span>"
                mB[0].innerHTML = "<span>" + zWep[i]['weaponName'] + "</span>";
                mC[0].innerHTML = "<span>" + zWep[i]["weaponType"] + "</span>";
                q(getPresentStar(), zWep[i]["rankLevel"]);
                if (zWep[i]["weaponProp"][1]) {
                    switch (zWep[i]["weaponProp"][1]["propType"]) {
                        case "元素精通":
                            mA[1].innerHTML = "<span>" + zWep[i]["weaponProp"][1]["propType"] + "</span>"
                                + "<span>" + zWep[i]["weaponProp"][1]["initValue"].toFixed(0) + "</span>";
                            break;
                        default:
                            mA[1].innerHTML = "<span>" + zWep[i]["weaponProp"][1]["propType"] + "</span>"
                                + "<span>" + (zWep[i]["weaponProp"][1]["initValue"] * 100).toFixed(1) + "%" + "</span>";
                            break;
                    }
                }

            }
        }
    });

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
    function addNewLi(WsiftType, WsiftRank) {
        delList();
        if (WsiftType == false && WsiftRank == false) {
            for (let i = 0; i < zWep.length; i++) {
                let nli = document.createElement('li');
                nli.textContent = zWep[i]["weaponName"];
                wList.appendChild(nli);
            }
        }
        if (WsiftRank != false && WsiftType != false) {
            for (let i = 0; i < zWep.length; i++) {
                if (zWep[i]["rankLevel"] == WsiftRank) {
                    if (zWep[i]["weaponType"] == WsiftType) {
                        let nli = document.createElement('li');
                        nli.textContent = zWep[i]["weaponName"];
                        wList.appendChild(nli);
                    }
                }
                /* if (zWep[i]["weaponType"] == WsiftType) {
                    if (zWep[i]["rankLevel"] == WsiftRank) {
                        let nli = document.createElement('li');
                        nli.textContent = zWep[i]["weaponName"];
                        wList.appendChild(nli);
                    }
                } */
            }
        }
        if (WsiftType != false && WsiftRank == false) {
            for (let i = 0; i < zWep.length; i++) {
                if (zWep[i]["weaponType"] == WsiftType) {
                    let nli = document.createElement('li');
                    nli.textContent = zWep[i]["weaponName"];
                    wList.appendChild(nli);
                }
            }
        }
        if (WsiftRank != false && WsiftType == false) {
            for (let i = 0; i < zWep.length; i++) {
                if (zWep[i]["rankLevel"] == WsiftRank) {
                    let nli = document.createElement('li');
                    nli.textContent = zWep[i]["weaponName"];
                    wList.appendChild(nli);
                }
            }
        }
    }

    //筛选列表开关
    function wepSift() {
        for (let i = 0; i < 2; i++) {
            if (wepSiftChoose[i] === this) {
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
    btn1.onclick = function () {
        //测试用
        // console.log(siftWType(), siftWRank());
        addNewLi(siftWType(), siftWRank());
    }
    btn2.onclick = function () {
        //测试用
        delList();
    }
    function delList() {
        for (let i = wList.children.length; i >= 1; i--) {
            wList.children[i - 1].remove();
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
}