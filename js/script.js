window.onload = function () {
    //获取dom元素
    const wList = document.getElementById('wepList');
    const btn = document.getElementById('btn'); //测试按钮
    let mB = document.getElementsByClassName('moduleB');
    let mA = document.getElementsByClassName('moduleA');
    let mC = document.getElementsByClassName('moduleC');
    let mD = document.getElementsByClassName('moduleD');
    let mE = document.getElementsByClassName('moduleE');
    let wepSiftChoose = document.getElementsByClassName('wepSiftChoose');
    let listChoose = document.getElementsByClassName('listChoose')[0].getElementsByTagName('div');
    // let wepSiftList = document.getElementsByClassName('siftListHidden');
    let wepSiftList = [listChoose[1], listChoose[3]];

    addNewLi();

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
        // addNewLi(this.textContent);
        console.log(this.textContent);
        for (let i = 0; i < 5; i++) {
            if (this.parentNode.getElementsByTagName('li')[i].textContent != this.textContent) {
                this.parentNode.getElementsByTagName('li')[i].className = "liUnChecked";
            }
        }
    }
    function addNewLi(type1) {
        for (let i = 0; i < zWep.length; i++) {
            switch (type1) {
                case "1":
                    // wList.remove();
                    if (zWep[i]["rankLevel"] == type1) {
                        let nli = document.createElement('li');
                        nli.textContent = zWep[i]["weaponName"];
                        wList.appendChild(nli);
                    }
                    break;
                default:
                    let nli = document.createElement('li');
                    nli.textContent = zWep[i]["weaponName"];
                    wList.appendChild(nli);
                    break;
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
    /* btn.onclick = function () {
        //测试用
        let count = 0;
        let oneStar = 0;
        let twoStar = 0;
        let threeStar = 0;
        let fourStar = 0;
        let fiveStar = 0;
        let i = 0;
        while (i < zWep.length) {
            if (zWep[i]["weaponType"] == "长柄武器") {
                count++;
                console.log(zWep[i]);
                if (zWep[i]["rankLevel"] == 1) oneStar++;
                if (zWep[i]["rankLevel"] == 2) twoStar++;
                if (zWep[i]["rankLevel"] == 3) threeStar++;
                if (zWep[i]["rankLevel"] == 4) fourStar++;
                if (zWep[i]["rankLevel"] == 5) fiveStar++;
            }
            i++;
        }
        console.log(count, oneStar, twoStar, threeStar, fourStar, fiveStar);



    } */
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