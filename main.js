!function() {
    var t = 20
    $('.buttons').on('click', 'button', function(e) {
        var button = e.currentTarget
        var speed = button.id
        $(button).addClass('active').siblings().removeClass('active')
        if (speed === 'slow') {
            t = 30
        } else if(speed === 'medium') {
            t = 20
        } else if (speed === 'fast') {
            t = 10
        }
    })

    function writeCode(code, fn) {
        var container = document.querySelector('.code')
        var style = document.querySelector('.styleTag')
        var n = 0
        let id 
        id = setTimeout(function setTime() {
            n += 1
            container.scrollTop = container.scrollHeight
            container.innerHTML = code.substring(0, n)
            style.innerHTML = code.substring(0, n)
            id = setTimeout(setTime, t)
        }, 0)

        if (n >= code.length) {
            clearTimeout(id)
            fn && fn.call()
        }
    }
    var code = `
    /*
        首先画一个鼻子
    */
    .nose {
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-top-color: black;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 28px;
    }
    /*
        然后画眼睛
    */
    .eye {
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        border-radius: 50%;
        position: absolute;
        border: 2px solid #000000;
    }
    
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    /*
        然后画眼球
    */
    .eye::before {
        content: "";
        display: block;
        background: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: absolute;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    /*
        然后画腮部
    */
    .face {
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border-radius: 50%;
        border: 2px solid black;
        top: 85px;
        position: absolute;
    
    }
    
    .face.left {
        right: 50%;
        margin-right: 116px;
    }
    
    .face.right {
        left: 50%;
        margin-left: 116px;
    }
    /*
        然后画上嘴唇
    */
    .upperLip {
        width: 80px;
        height: 25px;
        border: 2px solid black;
        position: absolute;
        top: 50px;
        background: #FDE348;
    
    }
    
    .upperLip.left {
        transform: rotate(-20deg);
        border-right: none;
        border-top: none;
        border-bottom-left-radius: 40px 25px;
        right: 50%;
    
    }
    
    .upperLip.right {
        transform: rotate(20deg);
        border-left: none;
        border-top: none;
        border-bottom-right-radius: 40px 25px;
        left: 50%;
    }
    /*
        然后画下嘴唇
    */    
    .lowerLip {
        width: 100%;
        height: 3500px;
        background: #990513;
        position: absolute;
        bottom: 0;
        border-radius: 200px/2000px;
        border: 2px solid black;
        overflow: hidden;
    
    }
    
    .lowerLip::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%;
        background: #FC4A62;
    
    }`
    writeCode(code)



}.call()

