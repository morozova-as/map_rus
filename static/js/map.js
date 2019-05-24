// function hslToRgb(h, s, l) {
//     var r, g, b;
//
//     if (s == 0) {
//         r = g = b = l; // achromatic
//     } else {
//         function hue2rgb(p, q, t) {
//             if (t < 0) t += 1;
//             if (t > 1) t -= 1;
//             if (t < 1 / 6) return p + (q - p) * 6 * t;
//             if (t < 1 / 2) return q;
//             if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//             return p;
//         }
//
//         var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//         var p = 2 * l - q;
//         r = hue2rgb(p, q, h + 1 / 3);
//         g = hue2rgb(p, q, h);
//         b = hue2rgb(p, q, h - 1 / 3);
//     }
//
//     return [r * 255, g * 255, b * 255];
// }
//
// /*
//  * Create an array containing a rainbow colormap in rgb strings.
//  *
//  * @param   Number  valcnt    How many items are in the colormap
//  * @param   Number  cyclelen  How long the cycle is before repeating
//  * @param   Number  s         The saturation (deault 100)
//  * @param   Number  l         The lightness (default 50)
//  * @return  Array             The RGB representation
//  *
//  * The resolution is 360 different colors (probably hard to see);
//  * you can make more by repeating the process at different `s` and `l`.
//  */
// function cmap(valcnt, cyclelen = null, s = 100, l = 50, stepsize=1) {
//     if (cyclelen == null)
//         cyclelen = valcnt;
//     var cm = new Array(valcnt);
//     /* Deliberately exclude the endpoint because it's cyclic. */
// 	if (cyclelen <= 2)
// 		var step = 360;
// 	else
//     	var step = 360. / (cyclelen - 1);
//     for (var i = 0; i < valcnt * stepsize; i += stepsize) {
//         let h = Math.round((i % cyclelen) * step);
//         // Use this if you want hsl values:
//         //cm[i] = 'hsl(' + h + ',' + s + '%,' + l + '%)';
//         // Use this if you want rgb values:
//         let rgb = hslToRgb(h / 360., s / 100., l / 100.);
//         cm[i] = 'rgb(' + Math.round(rgb[0]) + ',' +
//             Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ')';
//     }
//     return cm;
// }


let colors = ['#dc143c', '#da133f', '#d71142', '#d51045', '#d20e48', '#d00d4b',
    '#cd0c4e', '#cb0a50', '#c80953', '#c60756', '#c30659', '#c1055c',
    '#be045e', '#bb0361', '#b80264', '#b60166', '#b30069', '#b0006c',
    '#ad006f', '#aa0071', '#a70074', '#a40077', '#a1007a', '#9e007c',
    '#9b007f', '#970082', '#940084', '#900087', '#8d008a', '#8a008b',
    '#88008b', '#86008a', '#83008a', '#81008a', '#7f0089', '#7d0089',
    '#7b0089', '#790088', '#770088', '#740088', '#720087', '#700087',
    '#6e0087', '#6c0086', '#690086', '#670086', '#650085', '#630085',
    '#600085', '#5e0085', '#5c0084', '#590084', '#570084', '#550083',
    '#520083', '#500083', '#4d0082', '#4b0082', '#490082', '#480082',
    '#460082', '#440082', '#430082', '#410082', '#3f0082', '#3e0081',
    '#3c0081', '#3a0081', '#380081', '#360081', '#340081', '#320081',
    '#300081', '#2e0081', '#2c0081', '#290081', '#270081', '#240081',
    '#210081', '#1e0080', '#1b0080', '#180080', '#140080', '#0f0080',
    '#090080', '#020080', '#1d067f', '#31107e', '#3f197d', '#4b227c',
    '#562a7b', '#5f337a', '#683b78', '#714377', '#794c75', '#815474',
    '#895d72', '#906570', '#986e6e', '#9f776c', '#a6806a', '#ad8867',
    '#b49164', '#bb9a61', '#c1a35d', '#c8ad5a', '#ceb655', '#d5bf51',
    '#dbc84b', '#e2d245', '#e8db3e', '#eee535', '#f4ee2a', '#fbf819',
    '#fffe00', '#fffa00', '#fff600', '#fff200', '#ffee00', '#ffea00',
    '#ffe600', '#ffe200', '#ffdf00', '#ffdb00', '#ffd700', '#ffd300',
    '#ffcf00', '#ffcb00', '#ffc700', '#ffc300', '#ffbf00', '#ffbb00',
    '#ffb700', '#ffb300', '#ffae00', '#ffaa00', '#ffa600', '#ffa200',
    '#ff9e00', '#ff9a00', '#ff9500', '#ff9100', '#ff8d00', '#ff8a00',
    '#ff8700', '#ff8400', '#ff8100', '#ff7e00', '#ff7b00', '#ff7800',
    '#ff7400', '#ff7100', '#ff6e00', '#ff6b00', '#ff6700', '#ff6400',
    '#ff6000', '#ff5d00', '#ff5900', '#ff5500', '#ff5100', '#ff4d00',
    '#ff4800', '#ff4300', '#ff3e00', '#ff3900', '#ff3300', '#ff2c00',
    '#ff2500', '#ff1b00', '#ff0d00', '#fd0000', '#f80000', '#f40001',
    '#ef0001', '#ea0001', '#e60001', '#e10002', '#dc0002', '#d80002',
    '#d30002', '#cf0002', '#ca0003', '#c50003', '#c10003', '#bc0003',
    '#b80003', '#b40003', '#af0003', '#ab0003', '#a60003', '#a20003',
    '#9e0003', '#990003', '#950002', '#910002', '#8d0001', '#880001',
    '#840001', '#800000'];
// colors = cmap(200, 200, 200, 50, 1)
//'BUDĚJOVICKÉ PIVO',
//     'BUDĚJOVICKÝ MĚŠŤANSKÝ VAR', 'BIERE DE BUDWEIS', 'BUDWEIS BEER', 'BUDWEISER BIER',
//     'BUDWEISER BÜRGERBRÄU',

const names = ['HABANOS', 'MURFATLAR',
    'PROSCIUTTO DI PARMA', 'АДЫГЕЙСКИЙ ЧАЙ', 'АЛТАЙСКИЙ МЁД', 'АРАРАТ',
    'АРХЫЗ', 'АРШАН', 'АСТРАХАНСКАЯ ВОБЛА',
    'АСТРАХАНСКАЯ ОСЕТРОВАЯ ИКРА', 'АСТРАХАНСКАЯ ТОМАТНАЯ ПАСТА',
    'АСТРАХАНСКИЕ АРБУЗЫ', 'АСТРАХАНСКИЕ ТОМАТЫ',
    'АСТРАХАНСКИЙ ВЕРБЛЮД', 'АХАШЕНИ AKHASHENI', 'АЧАЛУКИ',
    'БАЛАКЛАВА', 'БАШКИРСКИЙ МЁД', 'БАШКИРСКИЙ МЕД',
    'БЕЛЁВСКАЯ ПАСТИЛА',
    'БОЛГАРСКАЯ БЕЛАЯ РАССОЛЬНАЯ БРЫНЗА - КОРОВЬЯ',
    'БУРЗЯНСКИЙ БОРТЕВОЙ МЕД', 'ВАЛДАЙСКИЕ КОЛОКОЛЬЧИКИ', 'ВАРЗИ-ЯТЧИ',
    'ВЕЛИКОУСТЮЖСКОЕ ЧЕРНЕНИЕ ПО СЕРЕБРУ (СЕВЕРНАЯ ЧЕРНЬ)',
    'ВОЛОГОДСКОЕ КРУЖЕВО', 'ВОЛОГОДСКОЕ МАСЛО', 'ГЖЕЛЬ',
    'ГОРНАЯ ПОЛЯНА', 'ГОРНОМАРИЙСКИЙ КРАВЕЦ', 'ГОРЯЧИЙ КЛЮЧ',
    'ГОРЯЧИЙ КЛЮЧ 958', 'ГОРЯЧИЙ КЛЮЧ-1481', 'ГОРЯЧИЙ КЛЮЧ-3',
    'ДАГЕСТАН', 'ДЕРБЕНТ', 'ДЖЕРМУК', 'ДУЛЕВСКИЙ ФАРФОР',
    'ДЫМКОВСКАЯ ИГРУШКА', 'ЕЛЕЦКИЕ КРУЖЕВА', 'ЕССЕНТУКИ',
    'ЕССЕНТУКИ - 17', 'ЕССЕНТУКИ - 4', 'ЕССЕНТУКИ ЦЕЛЕБНАЯ',
    'ЕССЕНТУКИ № 17', 'ЕССЕНТУКИ № 4', 'ЕССЕНТУКИ №17', 'ЕССЕНТУКИ №4',
    'ЕССЕНТУКИ-17', 'ЕССЕНТУКИ-4', 'ЖОСТОВО', 'ЗАРАМАГ',
    'ЗЕЛЕНОГРАДСКАЯ МИНЕРАЛЬНАЯ ВОДА',
    'ЗЛАТОУСТОВСКАЯ ГРАВЮРА НА СТАЛИ', 'КАДОМСКИЙ ВЕНИЗ',
    'КАЛИНИНГРАДСКАЯ', 'КАМЧАТСКАЯ НЕРКА', 'КАРАВАЕВО',
    'КАРАЧАРОВСКАЯ', 'КАРАЧИНСКАЯ', 'КАРМАДОН', 'КАСЛИНСКОЕ ЛИТЬЕ',
    'КИЗЛЯР', 'КИНДЗМАРАУЛИ KINDZMARAULI', 'КЛЕНОВАЯ ГОРА',
    'КЛИНСКАЯ ЕЛОЧНАЯ ИГРУШКА', 'КОЛОМЕНСКАЯ ПАСТИЛА', 'КРАИНСКАЯ',
    'КРАСНОДАРСКИЙ ЧАЙ', 'КРЕСТЕЦКАЯ СТРОЧКА',
    'КУБАНСКОЕ ПОДСОЛНЕЧНОЕ МАСЛО', 'КУЛОН КАМЧАТСКИЙ', 'КУРАЙ',
    'КУРАКИНСКАЯ КЕРАМИКА', 'КУРГАЗАК', 'КУРГАНСКОЕ ЛЬНЯНОЕ МАСЛО',
    'КУРТЯЕВСКАЯ', 'ЛИПЕЦКАЯ', 'ЛУХОВИЦКИЙ ОГУРЕЦ',
    'МЁД ГОРНОГО АЛТАЯ', 'МАГАРАЧ', 'МАЙКОПСКАЯ', 'МАРИЙСКИЕ ГУСЛИ',
    'МЕГАНОМ', 'МИНЕРАЛЬНАЯ ВОДА "АНАПСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "АССЫ"', 'МИНЕРАЛЬНАЯ ВОДА "БОРИСОВСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "ВОЛОГОДСКАЯ"', 'МИНЕРАЛЬНАЯ ВОДА "ДОВОЛЕНСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "ЕССЕНТУКИ № 4"',
    'МИНЕРАЛЬНАЯ ВОДА "ЗЕЛЕНОГРАДСКАЯ НАСТОЯЩАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "ЗЕЛЕНОГРАДСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "ИРКУТСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "КАРАГАЙСКИЙ БОР"',
    'МИНЕРАЛЬНАЯ ВОДА "КАРАЧИНСКАЯ"', 'МИНЕРАЛЬНАЯ ВОДА "КАШИНСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "КИСЛОВОДСКАЯ ЦЕЛЕБНАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "КОЗЕЛЬСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "КУКА КУРОРТНАЯ 45"',
    'МИНЕРАЛЬНАЯ ВОДА "КУКА-7"', 'МИНЕРАЛЬНАЯ ВОДА "ЛИПЕЦКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "МАЛЬТИНСКАЯ"', 'МИНЕРАЛЬНАЯ ВОДА "МАШУК № 19"',
    'МИНЕРАЛЬНАЯ ВОДА "НАГУТСКАЯ - 26"',
    'МИНЕРАЛЬНАЯ ВОДА "НАГУТСКАЯ 26"', 'МИНЕРАЛЬНАЯ ВОДА "НАГУТСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "НАГУТСКАЯ-26"', 'МИНЕРАЛЬНАЯ ВОДА "ПЕРМСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "СЕМИГОРСКАЯ-1"',
    'МИНЕРАЛЬНАЯ ВОДА "СЕМИГОРСКАЯ-6"', 'МИНЕРАЛЬНАЯ ВОДА "УГЛИЧСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "УСПОЛОНЬ"', 'МИНЕРАЛЬНАЯ ВОДА "ШАДРИНСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА "ШАДРИНСКАЯ-1"', 'МИНЕРАЛЬНАЯ ВОДА "ЮМАТОВСКАЯ"',
    'МИНЕРАЛЬНАЯ ВОДА «ЗАВЬЯЛОВСКАЯ»',
    'МИНЕРАЛЬНАЯ ВОДА КОНСТАНТИНОВСКАЯ-1',
    'МИРГОРОДСЬКА (МИРГОРОДСКАЯ)', 'МУКУЗАНИ MUKUZANI',
    'НАГУТСКАЯ - 4', 'НАРЗАН', 'НИЖНЕ - ИВКИНСКАЯ № 2К',
    'НИЖНЕ-ИВКИНСКАЯ № 2К', 'НИЖНЕ-ИВКИНСКАЯ №2К', 'НИЖНИЙ КАРМАДОН',
    'НОВОТЕРСКАЯ КЛАССИЧЕСКАЯ', 'НОЛИНСКИЕ ПРЯНИКИ', 'ОБУХОВСКАЯ - 1',
    'ОБУХОВСКАЯ - 14', 'ОБУХОВСКАЯ 10', 'ОБУХОВСКАЯ-11',
    'ОБУХОВСКАЯ-13', 'ОРЕНБУРГСКИЙ ПУХОВЫЙ ПЛАТОК',
    'ПАВЛОВОПОСАДСКИЙ ПЛАТОК', 'ПАВЛОВСКИЕ ХУДОЖЕСТВЕННЫЕ ИЗДЕЛИЯ',
    'РАИФСКИЙ ИСТОЧНИК', 'РОСТОВСКАЯ ФИНИФТЬ', 'РУДНЕНСКИЙ ТАН',
    'РУССКАЯ ВОДКА', 'РЯЗАНСКИЙ ЛЕДЕНЕЦ', 'САРОВА', 'СЕВАНСКАЯ ФОРЕЛЬ',
    'СЛАВЯНОВСКАЯ', 'СМИРНОВСКАЯ', 'СТАРООСКОЛЬСКАЯ ГЛИНЯНАЯ ИГРУШКА',
    'СЫР "БОБРОВСКИЙ"', 'СЫР "СТАРОДУБСКИЙ"', 'СЫР АДЫГЕЙСКИЙ',
    'СЫР УЛЕЙМА', 'ТВИШИ TVISHI', 'ТОБОЛЬСКАЯ РЕЗНАЯ КОСТЬ',
    'ТОРЖОКСКОЕ ЗОЛОТНОЕ ШИТЬЁ', 'ТУЛЬСКАЯ ГАРМОНЬ', 'ТУЛЬСКИЙ ПРЯНИК',
    'ТУЛЬСКИЙ САМОВАР', 'УВИНСКАЯ', 'УВИНСКАЯ ЖЕМЧУЖИНА',
    'УНДОРОВСКАЯ', 'УРОЧИЩЕ ДОЛИНЫ НАРЗАНОВ', 'ФЕДОСКИНО', 'ХАБАЗ',
    'ШАДРИНСКАЯ', 'ШАДРИНСКАЯ БЕРЕСТА',
    'ШЕМОГОДСКАЯ РЕЗЬБА ПО БЕРЕСТЕ', 'ШМАКОВКА',
    'ВИНА ИГРИСТЫЕ НОВЫЙ СВЕТ'];

let types  =['Напитки',
            'Мясные продукты',
            'Молочная продукция',
            'Ткани',
            'Сигары',
            'Самовары',
            'Рыбная продукция',
            'Мёд',
            'Сладости',
            'Овощи, фрукты, ягоды',
            'Декоративные изделия',
            'Минеральная вода',
            'Сувенирные товары',
            'Музыкальные инструменты'];

let dict_filter = {'Напитки': ['чай', 'водка', 'вино', 'вина игристые', 'бренди', 'ПИВО', 'напиток'],
                 'Мясные продукты': ['ветчина'],
                 'Молочная продукция': ['сыр',
                  'масло',
                  'молоко',
                  'творог',
                  'сметана',
                  'брынза'],
                 'Ткани': ['блузки', 'платок', 'платочные изделия', 'шаль'],
                 'Сигары': ['сигары'],
                 'Самовары': ['самовары'],
                 'Рыбная продукция': ['рыбная продукция', 'икра', 'вобла', 'рыба'],
                 'Мёд': ['мёд', 'мед'],
                 'Сладости': ['пастила', 'карамель', 'пряники', 'пирог'],
                 'Овощи, фрукты, ягоды': ['огурцы', 'арбузы', 'томаты', 'томатная паста'],
                 'Декоративные изделия': ['ножи',
                  'ножны',
                  'топорики',
                  'подносы',
                  'изделия',
                  'украшения'],
                 'Минеральная вода': ['минеральная вода',
                  'минеральная природная столовая вода',
                  'вода минеральная'],
                 'Сувенирные товары': ['кулон',
                  'колокольчики',
                  'игрушки',
                  'сувениры',
                  'изделия',
                  'верблюд'],
                 'Музыкальные инструменты': ['музыкальный инструмент',
                  'музыкальные инструменты']};

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Goods_map() {
    this.polys = {};
    this.markers = [];
    this.content = {};
}


Goods_map.prototype.init = function (map, info) {
    this.map = map;
    this.info_window = info;
    this.create_menu(map);
    this.set_settings();
};

// Goods_map.prototype.remove_all = function () {
//     for (let name in this.polys){
//         this.polys[name].setMap(null);
//     };
//
//     this.polys = {};
//     this.info_window.close();
// };

Goods_map.prototype.remove = function (name) {
    for (let i in this.polys[name]) {
        this.polys[name][i].setMap(null);
    }
    delete this.polys[name];
    delete this.content[name];

    this.info_window.close();
};

Goods_map.prototype.get_bounds = function (a) {

    let lat_arr = [];
    for (let ii = 0; ii < a[0].length; ii++) {
        lat_arr.push(parseFloat(a[0][ii]['lat']));
    }

    let lon_arr = [];
    for (let ii = 0; ii < a[0].length; ii++) {
        lon_arr.push(parseFloat(a[0][ii]['lng']));
    }

    let zoom = new google.maps.LatLngBounds(
        new google.maps.LatLng(Math.max(...lat_arr), Math.min(...lon_arr)),
        new google.maps.LatLng(Math.min(...lat_arr), Math.max(...lon_arr))
    );

    return (zoom);
};

Goods_map.prototype.create_poly = function (name, response) {
    let r = JSON.parse(response);
    let flag = 1;
    this.polys[name] = [];
    let color = colors[getRandomInt(0, 199)];
    for (let i = 0; i < r.length; i++) {
        let descr = r[i]['fields']['description'].replaceAll("'", '"');
        descr = JSON.parse(descr);
        for (let key in descr) {
            let a = (new Function("return [" + descr[key]["poly"] + "];")());
            let lat = parseFloat(descr[key]["lat"]);
            let lon = parseFloat(descr[key]["lon"]);

            let zoom = this.get_bounds(a);

            map.fitBounds(zoom);
            map.setCenter({lat: lat, lng: lon});
            let poly = new google.maps.Polygon({
                paths: a,
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: color,
                fillOpacity: 0.2,
                zIndex: Object.keys(this.polys).length
            });

            if (a[0].length === 0){
                let marker = google.maps.LatLng(lat, lon);
                this.markers.push(marker);
                flag = 0;
            }
            this.polys[name].push(poly);

        }
    }
    return(flag);
};

Goods_map.prototype.get_place = function (name, content_str) {
    $.ajax({
        url: '/get_place/',
        data: {
            csrfmiddlewaretoken: getCookie('csrftoken'),
            "name": name
        },
        type: 'POST'
    }).done(function (response) {
        this.create_poly(name, response);
        this.draw_curr(name, content_str);
    }.bind(this));
};

let make_field_str = function(i, response, field, name_field){
    let cur_str = '';

    if ((response[i]["fields"][field] !== "") && (response[i]["fields"][field] !== "-")) {

        cur_str += "<b id=" + field + ">" + name_field + "</b>";

        if (field === 'url') {
            cur_str += "<p id=" + field + "_cont" + ">" +
                "<a href=" + response[i]["fields"][field] + ">" +
                "Ссылка" + "</a></p>";
        } else {
            cur_str += "<p id=" + field + "_cont" + ">" +
                response[i]["fields"][field]
                + "</p>";
        }
    }
    return (cur_str);
};

Goods_map.prototype.get_info = function (name) {
    $.ajax({
        url: '/get_info/',
        data: {
            csrfmiddlewaretoken: getCookie('csrftoken'),
            "name": name
        },
        type: 'POST'
    }).done(function (response) {

        let or_place = [];
        let spec = [];
        let act = [];
        let rh_name = [];
        let rh_add = [];
        let country = [];
        let url = [];
        let content_str = "<br id=\"content\">" +
            "<h2 id=\"name\">"+
            name+"</h2>";

        content_str += "<div style='display: flex;" +
            "align-items: center;" +
            "justify-content: center;'>" +
            "<img src='/media/" +
            response[0]['fields']['img'] +
            "' style=\"" +
            "width: auto;" +
            "max-height: 300px;" +
            "max-width: 100%;" +
            "\"/></div></br>";


        // console.log(response[0]['fields']['img']);
        // console.log(content_str);


        for (let i = 0; i < response.length; i++){

            if ((response[i]["fields"]['rh_name'] !== "") && (response[i]["fields"]['rh_name'] !== "-")) {
                spec.push(make_field_str(i, response, 'specification', "Назначение товара:"));
                or_place.push(make_field_str(i, response, 'origin_place', "Место происхождения:"));
                act.push(make_field_str(i, response, 'actual', "Действителен:"));
                rh_name.push(make_field_str(i, response, 'rh_name', "Имя производителя:"));
                rh_add.push(make_field_str(i, response, 'rh_address', "Адрес производителя:"));
                country.push(make_field_str(i, response, 'rh_country', "Страна:"));
                url.push(make_field_str(i, response, 'url', "Ссылка на патент:"));
            }
        }

        for (let i = 0; i < spec.length; i++){

            content_str += spec[i];
            content_str += or_place[i];
            content_str += act[i];
            content_str += rh_name[i];
            content_str += rh_add[i];
            content_str += country[i];
            content_str += url[i];

            content_str += "<hr>";

        }
        content_str += "</div>";

        this.content[name] = content_str;

        this.get_place(name, content_str);
        this.info_window.close();
    }.bind(this));
};


Goods_map.prototype.draw_curr = function (name) {
    for (let i in this.polys[name]){
        this.polys[name][i].setMap(this.map);
        this.polys[name][i].addListener('click', function(event) {
            this.info_window.setPosition(event.latLng);

            let content = '';

            $.ajax({
                url: '/get_the_same/',
                data: {csrfmiddlewaretoken: getCookie('csrftoken'), 'name':name},
                type: 'POST',
                async: false
            }).done(function (response) {
                let set_name = new Set();
                for (let i=0; i<response.length; i++){
                    let curr_name = response[i]['fields']['name'];
                    if ((this.content[response[i]['fields']['name']] !== undefined) && (set_name.has(curr_name) === false)){
                        content += this.content[curr_name];
                        set_name.add(curr_name);
                    }
                }

            }.bind(this));
            this.info_window.setContent(content);
            this.info_window.open(this.map);
        }.bind(this));
    }
};


Goods_map.prototype.create_menu= function (map) {
    let br = document.createElement("br");

    let menu = document.createElement('div');
    menu.style.cssText =
        'margin: 40px 10px; border-radius: 8px; width: 250px;' +
        'background-color: white; font-size: 20px; font-family: Roboto;' +
        'text-align: center; color: #002080;line-height: 32px;';
    let title = document.createElement('div');
    title.style.cssText =
        'width: 100%; background-color: #002080; color: white; font-size: 20px;' +
        'line-height: 40px;margin-bottom: 24px';
    title.innerText = 'Product filter';

    let field_name = document.createElement('div');
    field_name.style.cssText = "margin-left:10px; text-align:left;";
    field_name.style.fontWeight = '800';
    field_name.innerText = 'Choose the product:';


    let select_name = document.createElement('div');
    select_name.style.cssText =
        'font-size: 14px; font-family: Roboto;text-align: left; line-height: 32px;' +
        ' background-color: white; color: #002080; height:200px;' +
        'padding: 6px; overflow:scroll;';
    let num = 0;
    names.forEach(function (name) {

        let check_parent = document.createElement('div');

        let id = 'option_' + num.toString();
        let option = document.createElement('input');
        option.type = "checkbox";
        option.id = id;
        option.value = name;
        option.name = name;
        option.checked = false;


        let label = document.createElement('label');
        label.htmlFor = id;
        label.appendChild(document.createTextNode(name));

        check_parent.appendChild(option);
        check_parent.appendChild(label);
        check_parent.appendChild(br);

        select_name.appendChild(check_parent);

        num++;

        option.onchange = function () {
            if (option.checked){
                this.get_info(option.name);
            } else {
                this.remove(option.name);
            }

        }.bind(this);

    }.bind(this));



    let field_filter = document.createElement('div');
    field_filter.style.cssText = "margin-left:10px; text-align:left;";
    field_filter.style.fontWeight = '800';
    field_filter.innerText = 'Choose the type:';


    let select_filter = document.createElement('div');
    select_filter.style.cssText =
        'font-size: 14px; font-family: Roboto;text-align: left; line-height: 32px;' +
        ' background-color: white; color: #002080;' +
        'padding: 6px; overflow:scroll;  height:200px;';
    num = 0;
    types.forEach(function (t) {

        let check_parent = document.createElement('div');

        let id = 'type_' + num.toString();
        let option = document.createElement('input');
        option.type = "checkbox";
        option.id = id;
        option.value = t;
        option.name = t;
        option.checked = false;


        let label = document.createElement('label');
        label.htmlFor = id;
        label.appendChild(document.createTextNode(t));

        check_parent.appendChild(option);
        check_parent.appendChild(label);
        check_parent.appendChild(br);

        select_filter.appendChild(check_parent);

        num++;

        option.onchange = function () {
            if (option.checked){
                this.get_all_names(option.name);
            } else {
                this.remove_all_type(option.name);
            }

        }.bind(this);

    }.bind(this));

    menu.appendChild(title);
    menu.appendChild(field_filter);
    menu.appendChild(select_filter);
    menu.appendChild(br);
    menu.appendChild(field_name);
    menu.appendChild(select_name);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(menu);
};

Goods_map.prototype.remove_all_type = function (t) {
    let data = {};
    data['csrfmiddlewaretoken'] = getCookie('csrftoken');
    for (let i in dict_filter[t]){
        data["type_"+ i] = dict_filter[t][i];
    }
    $.ajax({
        url: '/get_all_names/',
        data: data,
        type: 'POST'
    }).done(function (response) {
        // console.log(response);
        for (let i=0; i<response.length; i++) {
            this.remove(response[i]['fields']['name']);
        }
    }.bind(this))
};

Goods_map.prototype.get_all_names = function(t){
    let data = {};
    data['csrfmiddlewaretoken'] = getCookie('csrftoken');
    for (let i in dict_filter[t]){
        data["type_"+ i] = dict_filter[t][i];
    }

    $.ajax({
        url: '/get_all_names/',
        data: data,
        type: 'POST'
    }).done(function (response) {
        // console.log(response);
        let set_of_names = new Set();
        for (let i=0; i<response.length; i++) {
            set_of_names.add(response[i]['fields']['name']);
        }
        set_of_names.forEach(function(i){
            // console.log(i);
            this.get_info(i);
        }.bind(this));
    }.bind(this))
};


Goods_map.prototype.set_settings = function () {
    let styles = {
        'easy': [
            {
                featureType: 'administrative.country',
                elementType: 'labels',
                stylers: [
                    {visibility: 'on'}
                ]
            }, {
                featureType: 'administrative.country',
                elementType: 'geometry',
                stylers: [
                    {visibility: 'on'},
                    {weight: 1}
                ]
            }
        ]
    };

    this.map.set('styles', styles);
};

//
// function add_poly(map, data, fill_color, stroke_color) {
//     var a = new google.maps.Polygon({
//         paths: data,
//         strokeColor: stroke_color,
//         strokeOpacity: 0.8,
//         strokeWeight: 1,
//         fillColor: fill_color,
//         fillOpacity: 0.2
//     });
//     a.setMap(map);
// }


let all_goods;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {lat: 56.886, lng: 35.268},
        mapTypeId: 'terrain',
        mapTypeControl: false
    });
    let info = new google.maps.InfoWindow({
        zIndex: 3,
        maxWidth: 300
    });

    $.ajax({
        url: '/update_place/',
        data: {csrfmiddlewaretoken: getCookie('csrftoken')},
        type: 'POST'
    }).done(function (response) {

        //console.log(response);

        // for (let i = 0; i < response.length; i++) {
        //
        //     let descr = response[i]['fields']['description'].replaceAll("'", '"');
        //     descr = JSON.parse((descr));
        //     for (let key in descr) {
        //         let a = (new Function("return [" + descr[key]["poly"] + "];")());
        //         add_poly(map, a, colors[i], colors[i]);
        //     }
        // }
    });


    (new Goods_map).init(map, info);

    $.ajax({
        url: '/get_goods/',
        data: {csrfmiddlewaretoken: getCookie('csrftoken')},
        type: 'POST'
    }).done(function (response) {
        all_goods = response;
    });
}



