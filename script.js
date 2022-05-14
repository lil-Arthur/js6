function Film(name, genres, length, budget, age, year, rating, img, trailer, description) {
    this.name = name;
    this.genres = genres;
    this.length = length;
    this.budget = budget;
    this.age = age;
    this.year = year;
    this.rating = rating;
    this.img = img;
    this.trailer = trailer;
    this.descriptiion = description;
}

let Avengers = new Film("Мстители", ["фантастика","боевик" ,"фэнтези" , "приключение"], 137, 220000000, 12, 2012, 7.9, 'images/film0.jpg', "https://www.youtube.com/watch?v=5iw-hJ6xteE", "Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ.И.Т. Ник Фьюри собирает выдающихся поборников справедливости и добра, чтобы отразить атаку. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком.")
let Uncharted = new Film("Анчартед: На картах не значится", ["приключение", "боевик"], 115, 12000000, 12, 2022, 6.9, 'images/film1.jpg',"https://www.youtube.com/watch?v=ljk62UiPQso", "Нейтан Дрейк не видел старшего брата Сэма 15 лет, с тех пор как тот сбежал из сиротского приюта. Парень работает барменом и промышляет мелким воровством, когда на него выходит Виктор Салливан по прозвищу Салли и предлагает отправиться на поиски давно потерянных сокровищ Магеллана. Узнав, что Салли знаком с Сэмом, Нейтан соглашается на авантюру, надеясь также отыскать и брата.");
let Wings_over_Berlin = new Film("1941. Крылья над Берлином", ["военный", "боевик"], 100, 7000000, 12, 2022, 6.3,'images/film2.jpg' ,"https://www.youtube.com/watch?v=4pMmUJBmPgQ", "История о подвиге лётчиков 1-го минно-торпедного авиационного полка ВВС Балтийского флота во главе с полковником Преображенским. У них была сложнейшая боевая задача — нанести первые бомбовые удары по Берлину, столице фашистской Германии.");
let Shawshank_Redemption = new Film("Побег из Шоушенка", ["драма"], 142, 25000000, 16, 1994, 9.1,'images/film3.jpg',"https://www.youtube.com/watch?v=kgAeKpAPOYk", "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.");
let Wolf_Wall_Street = new Film("Волк с Уолл-стрит", ["драма", "криминал", "биография", "комедия"], 180, 100000000, 18, 2013, 7.9,'images/film4.jpg',"https://www.youtube.com/watch?v=CHivqmutR0I", "1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...");

let films = new Array();
films.push(Avengers);
films.push(Uncharted);
films.push(Wings_over_Berlin);
films.push(Shawshank_Redemption);
films.push(Wolf_Wall_Street);

function getCard(i) {
    cards.insertAdjacentHTML('afterbegin', '<div class="card" id="card1">\n' +
        `        <img src=${films[i].img}>\n` +
        `        <h2>${films[i].name}</h2>\n` +
        `        <p>Жанры: ${films[i].genres}</p>\n` +
        `        <p>Длительность: ${films[i].length}м</p>\n` +
        `        <p>Бюджет: ${films[i].budget}$</p>\n` +
        `        <p>Рейтинг: ${films[i].rating}</p>\n` +
        `        <p>Год выпуска: ${films[i].year}</p>\n` +
        `        <p>Возрастное ограничение: ${films[i].age}+</p>\n` +
        `        <p>Ссылка на трейлер: ${films[i].trailer}</p>\n` +
        `        <p>Описание: ${films[i].descriptiion}</p>\n` +
        `    </div>`);
}

let c = 0, c1 = -1, c2 = -1, c3 = -1, c4 = -1;

function showForm() {
    let g = document.Form.genre1.selectedIndex;
    let g1 = document.Form.genre1.options[g].value;
    g = document.Form.genre2.selectedIndex;
    let g2 = document.Form.genre2.options[g].value;
    g = document.Form.genre3.selectedIndex;
    let g3 = document.Form.genre3.options[g].value;

    for (let i = 0; i < films.length; i++) {
        if(c1 == i){
            c = 1;
            continue;
        } else if (c2 == i){
            c = 2;
            continue;
        } else if (c3 == i) {
            c = 3;
            continue;
        } else if (c4 != -1) {
            c = 4;
            break;
        } else if (((films[i].genres.indexOf(g1) != -1) || (films[i].genres.indexOf(g2) != -1) || (films[i].genres.indexOf(g3) != -1))) {
            getCard(i);
            if(c1 == -1){
                c1 = i;
            } else if (c2 == -1){
                c2 = i;
            } else if (c3 == -1) {
                c3 = i;
            } else if (c4 == -1) {
                c4 = i;
            }
        }
    }
    document.cookie = `card1=${c1}`;
    document.cookie = `card2=${c2}`;
    document.cookie = `card3=${c3}`;
    document.cookie = `card4=${c4}`;
    alert(getCookie(`card1`));
}

function clearCards() {
    let elem1 = document.getElementById("card1");
    elem1.parentNode.removeChild(elem1);
    elem1 = document.getElementById("card1");
    elem1.parentNode.removeChild(elem1);
    elem1 = document.getElementById("card1");
    elem1.parentNode.removeChild(elem1);
    elem1 = document.getElementById("card1");
    elem1.parentNode.removeChild(elem1);
    deleteAllCookies();
}


function deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

if (getCookie('card1') != -1) {
    getCard(getCookie('card1'));
}
if (getCookie('card2') != -1) {
    getCard(getCookie('card2'));
}
if (getCookie('card3') != -1) {
    getCard(getCookie('card3'));
}
if (getCookie('card4') != -1) {
    getCard(getCookie('card4'));
}

function fullReset() {
    location.reload();
    deleteAllCookies();
}
