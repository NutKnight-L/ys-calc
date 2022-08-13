window.onload = function () {
    //获取dom元素
    const wList = document.getElementById('wepList');
    const btn = document.getElementById('btn'); //测试按钮
    let mB = document.getElementsByClassName('moduleB');
    let mA = document.getElementsByClassName('moduleA');
    let mC = document.getElementsByClassName('moduleC');
    let mD = document.getElementsByClassName('moduleD');
    let mE = document.getElementsByClassName('moduleE');

    for (let i = 0; i < zWep.length; i++) {
        let nli = document.createElement('li');
        nli.textContent = zWep[i]["weaponName"];
        wList.appendChild(nli);
    }
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

    btn.onclick = function () {
        //测试用
        let nnn = getPresentStar();
        mE[0].getElementsByTagName('i')[nnn - 1].className = "fa-solid fa-star clearStar";
        setTimeout(function () {
            mE[0].getElementsByTagName('i')[nnn - 1].parentNode.removeChild(mE[0].getElementsByTagName('i')[nnn - 1]);
        }, 100);



    }
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
    function nI() {
        setTimeout(function () {
            let nI = document.createElement('i');
            nI.className = "fa-solid fa-star staricon";
            mE[0].appendChild(nI);
        }, 0);
    }
    function clearStar(nnn) {
        // let nnn = getPresentStar();
        mE[0].getElementsByTagName('i')[nnn - 1].className = "fa-solid fa-star clearStar";
        setTimeout(function () {
            mE[0].getElementsByTagName('i')[nnn - 1].parentNode.removeChild(mE[0].getElementsByTagName('i')[nnn - 1]);
        }, 100);
    }
}