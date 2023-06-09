!function(n) {
    var e = {};
    function t(a) {
        if (e[a])
            return e[a].exports;
        var s = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return n[a].call(s.exports, s, s.exports, t),
        s.l = !0,
        s.exports
    }
    t.m = n,
    t.c = e,
    t.d = function(n, e, a) {
        t.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    t.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(n, e) {
        if (1 & e && (n = t(n)),
        8 & e)
            return n;
        if (4 & e && "object" == typeof n && n && n.__esModule)
            return n;
        var a = Object.create(null);
        if (t.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: n
        }),
        2 & e && "string" != typeof n)
            for (var s in n)
                t.d(a, s, function(e) {
                    return n[e]
                }
                .bind(null, s));
        return a
    }
    ,
    t.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default
        }
        : function() {
            return n
        }
        ;
        return t.d(e, "a", e),
        e
    }
    ,
    t.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }
    ,
    t.p = "",
    t(t.s = 0)
}([function(n, e, t) {
    "use strict";
    t.r(e);
    t(1);
    (()=>{
        const n = document.querySelector("#content")
          , e = document.createElement("div");
        e.classList.add("tab-content"),
        e.innerHTML = '<div id="home" class="active" data-tab-content>\n  <div class="hero">\n    <h1>Come on down for some delicious tacos!</h1>\n    <p>Tasty, Fresh and affordable!</p>\n    <div class="btn-container">\n      <a data-tab-target="#menu" class="order-now">Order Now</a>\n    </div>\n  </div>\n  <div class="info">\n    <div class="address">\n      <span><i class="fi-xnsuxl-map-marker-solid"></i></span>\n      <p>1024 Oakwood Ave<br />San Diego, CA 22434</p>\n    </div>\n    <div class="hours">\n      <span><i class="fi-cnsuhl-clock-solid"></i></span>\n      <p>\n        <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span\n        >8am-11pm\n      </p>\n    </div>\n  </div>\n</div>',
        n.appendChild(e)
    }
    )(),
    (()=>{
        const n = document.querySelector("#content")
          , e = document.createElement("div");
        e.setAttribute("id", "menu"),
        e.setAttribute("data-tab-content", ""),
        e.innerHTML = '\n  <div class="hero">\n  <h1>Menu</h1>\n  \n</div>\n<div class="menu-container">\n  <div class="menu-item">\n    <img src="./images/herson.jpg" alt="" />\n    <div class="item-content">\n      <h4>Chips with Chesse: <span>$2.49</span></h4>\n      <p>\n        Buns, patty, tomato, onions, lettuce, and our secret family\n        recipe.\n      </p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/jarett.jpg" alt="" />\n    <div class="item-content">\n      <h4>Tacos: <span>$3.99</span></h4>\n      <p>Similar to our hamburger, but with cheese.</p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/jed.jpg" alt="" />\n    <div class="item-content">\n      <h4>Chips with Salad & Soup <span>$3.49</span></h4>\n      <p>Similar to our cheeseburger, but with an extra patty.</p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/jesse.jpg" alt="" />\n    <div class="item-content">\n      <h4>Enchiladas: <span>$11.99</span></h4>\n      <p>A juicy steak made just how you like it.</p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/jed.jpg" alt="jed" />\n l   <div class="item-content">\n      <h4>Beef Enchiladas: <span>$7.99</span></h4>\n      <p>\n        Your typical caesar salad that comes with your choice of\n        dressings.\n      </p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/drew.jpg" alt="" />\n    <div class="item-content">\n      <h4> Pico de Gallo: <span>$1.99</span></h4>\n      <p>\n        Sometimes you don\'t want to eat your taco alone, why not add\n        some spicy sauce?\n      </p>\n    </div>\n  </div>\n</div>',
        n.appendChild(e)
    }
    )(),
    (()=>{
        const n = document.querySelector("#content")
          , e = document.createElement("div");
        e.setAttribute("id", "contact"),
        e.setAttribute("data-tab-content", ""),
        e.innerHTML = '\n    <div class="hero">\n    <h1>Contact us</h1>\n  </div>\n  <div class="contact-container">\n    <div class="info">\n      <div class="address">\n        <p>\n          <i class="fi-xnsuxl-map-marker-solid"></i>1024 Oakwood Ave<br />San\n          Diego, CA 22434\n        </p>\n      </div>\n      <div class="hours">\n        <p>\n          <i class="fi-cnsuhl-clock-solid"></i\n          ><span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span\n          >8am-11pm\n        </p>\n      </div>\n      <div class="phone">\n        <p><i class="fi-xnsrxl-phone-solid"></i>(222)-888 5555</p>\n      </div>\n      <div class="contact-form">\n        <form onsubmit="return false">\n          <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>\n          <div class="input-box">\n            <input type="text" required />\n            <span>Full Name</span>\n          </div>\n          <div class="input-box">\n            <input type="text" required />\n            <span>Email</span>\n          </div>\n          <div class="input-box">\n            <textarea required></textarea>\n            <span>Type your message...</span>\n          </div>\n          <input type="submit" value="Send" />\n        </form>\n      </div>\n    </div>\n     </div>',
        n.appendChild(e)
    }
    )();
    const a = document.querySelectorAll("[data-tab-target]")
      , s = document.querySelectorAll("[data-tab-content]")
      , i = document.querySelector(".hamburger");
    i.addEventListener("click", ()=>{
        document.querySelector("ul").classList.toggle("active"),
        i.classList.toggle("toggle")
    }
    ),
    a.forEach(n=>n.addEventListener("click", ()=>{
        const e = document.querySelector(n.dataset.tabTarget);
        s.forEach(n=>{
            n.classList.remove("active")
        }
        ),
        a.forEach(n=>{
            n.classList.remove("red")
        }
        ),
        n.classList.add("red"),
        e.classList.add("active")
    }
    )),
    document.querySelector(".order-now").addEventListener("click", ()=>{
        document.querySelector('[data-tab-target="#menu"]').classList.add("red")
    }
    ),
    document.querySelector('[type="submit"]').addEventListener("click", ()=>{
        document.querySelector("form").reset()
    }
    ),
    console.log(`Today is ${(new Date).toUTCString()}. Very nice.`)
}
, function(n, e) {
    (()=>{
        const n = document.querySelector("#content")
          , e = document.createElement("header");
        e.innerHTML = '\n  <nav>\n  <h2>Taco Land</h2>\n  <a href="#" class="hamburger">\n    <span class="line line1"></span>\n    <span class="line line2"></span>\n    <span class="line line3"></span>\n  </a>\n  <ul class="links">\n    <li data-tab-target="#home" class="tab red">Home</li>\n    <li data-tab-target="#menu" class="tab">Menu</li>\n    <li data-tab-target="#contact" class="tab">Contact us</li>\n  </ul>\n</nav>',
        n.appendChild(e)
    }
    )()
}
]);
