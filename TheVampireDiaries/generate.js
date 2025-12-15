let vampires = [
    'v1.png',
    'v2.png',
    'v3.png',
    'v4.png',
    'v5.png',
    'v6.png',
    'v7.png',
    'v8.png',
    'v9.png',
    'v10.png',
    'v11.png',
]
let witches = [
    'wt1.png',
    'wt2.png',
    'wt3.png',
    'wt4.png',
    'wt5.png',
    'wt6.png',
    'wt7.png',
    'wt8.png',
    'wt9.png',
    'wt10.png',
]
let werewolves = [
    'w1.png',
    'w2.png',
    'w3.png',
    'w4.png',
    'w5.png',
    'w6.png',
    'w7.png',
    'w8.png',
    'w9.png',
    'w10.png',
]

let vampiresT = [
  "Когда выпил не ту человеческую кровь (группа Б)",
  "Попытка сделать селфи, не отражаясь в зеркале",
  "Когда пытаешься быть 'хорошим вампиром', но видишь группу подростков после полуночи",
  "Обнаружил, что в моем гробу WiFi не ловит",
  "Когда Елена посмотрела на тебя на 0.00001сек дольше, чем обычно))",
  "Проснулся и понял, что проспал на 100 лет. Опять.",
  "Мой вид, когда кто-то говорит, что «Сумерки» — это лучший вампирский фильм",
  "Не отражаюсь в зеркале. Зато отлично вижу в нём все свои ошибки. Идеально.",
  "Когда попил «крови» из пакета, а это оказался томатный сок с чесноком",
  "На дворе 2024 год, а тебе все еще надо приглашение, чтобы войти в дом",
  "Когда все злятся, а ты нет, потому что ты всех и разозлил",
];
let witchesT = [
    'Мой котёл — это просто старая мультиварка',
    'Когда защитный круг от негатива не пускает в дом даже родственников',
    'Моя реакция на очередную порчу от Предков',
    'Когда все просят магию, но никто не спрашивает как дела',
    'Когда пытаешься навести порчу через соцсети, но алгоритмы принимают это за буллинг и банят',
    'Когда твой кристальный шар постоянно показывает только рекламу и предлагает купить его аналог со скидкой',
    'Мои седые волосы — не от возраста. Это следствие чтения мыслей таких, как ты',
    'Когда снова надо жертвовать собой для спасения друзей',
    'Гадаю на таро. Карты показывают, что я — шарлатанка',
    'Колдую. В основном на кухне. Над пельменями'
];
let werewolvesT = [
    'Мой внутренний зверь просыпается от запаха шашлыка',
    'Понедельник. Полнолуние. Ипотека. Всё сошлось.',
    'Мой внутренний волк, когда вижу вампира',
    'Интроверт на людях, экстраверт при луне',
    'Выл. Полиция приехала. Сказали, что фальцет. Теперь стыдно жить.',
    'Когда Хэйли сделала тебя альфой, но ты не хотел',
    'Люблю природу. Особенно когда после моих похождений её показывают в новостях как место крушения малого самолёта',
    'Когда Клаус опять использовал тебя как пешку',
    'Меня вырастил не альфа-самец. Меня вырастили депрессия и недорогие корма из «Ашана»',
    'Хотел стать альфой стаи. Стал альфа-нахлебником у помойных енотов'
];

const MainImage = document.getElementById("MainImage")
const MainText = document.getElementById("MainText")

function changeMeme() {
    back_url = window.getComputedStyle(document.body).backgroundImage
    if (back_url.at(-7) == '1') {
        len = vampires.length
        n = Math.floor(Math.random() * len)
        srcNew = `img_meme/${vampires[n]}`

        m = Math.floor(Math.random() * len)
        MainText.textContent = vampiresT[m]
    } else if (back_url.at(-7) == '2') {
        len = werewolves.length
        n = Math.floor(Math.random() * len)
        srcNew = `img_meme/${werewolves[n]}`

        m = Math.floor(Math.random() * len)
        MainText.textContent = werewolvesT[m]
    } else if (back_url.at(-7) == '3') {
        console.log(back_url)
        len = witches.length
        n = Math.floor(Math.random() * len)
        srcNew = `img_meme/${witches[n]}`

        m = Math.floor(Math.random() * len)
        MainText.textContent = witchesT[m]
    }

    MainImage.src = srcNew
    MainImage.width = 500
    MainImage.height = 500
}

document.getElementById("Generate").addEventListener("click", changeMeme)


function changeBackground(n) {
    imgNew = `img/background${n}.png`
    document.body.style.backgroundImage = `url(${imgNew}`

    p2 = document.querySelector(".werewolf-text")
    p3 = document.querySelector(".witch-text")
    if (n == 2) {
        p2.style.backgroundColor = "rgba(10, 8, 8, 0.85)"
    }
    if (n == 2 || n == 3) {
        p3.style.backgroundColor = "rgba(183, 180, 178, 0.5)"
        p3.style.padding = "0 15px"
        p3.style.borderRadius = "15px"
    } else {
        p3.style.backgroundColor = ""
        p3.style.padding = ""
        p3.style.borderRadius = ""

        p2.style.backgroundColor = "rgba(10, 8, 8, 0.8)"
    }
}

document.getElementById("img1").addEventListener("click", () => {changeBackground(1); changeMeme()})
document.getElementById("img2").addEventListener("click", () => {changeBackground(2); changeMeme()})
document.getElementById("img3").addEventListener("click", () => {changeBackground(3); changeMeme()})
