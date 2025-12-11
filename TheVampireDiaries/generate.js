const MainImage = document.getElementById("MainImage")
const MainText = document.getElementById("MainText")

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
  "Проснулся и понял, что тебе 162 года, а ты всё ещё в пижаме с единорогами",
  "Когда пытаешься быть 'хорошим вампиром', но видишь группу подростков после полуночи",
  "Серьёзные вампирские дела: сидеть на крыше особняка и пить виски 5 часов",
  "Когда включили 'солнечный режим' на гирлянде",
  "Моя душа: *чернее ночи* | Моё настроение: *хочу мороженое с посыпкой*",
  "Вампирские проблемы: выбрал не тот день, чтобы выключить кольцо",
  "Когда твой 150-летний парень снова говорит о 'трудностях бессмертия'",
  "Кровь из больницы vs Кровь из бара: выбор очевиден",
  "Серьёзное лицо, пока не предложат стаканчик AB+",
  "Когда все злятся, а ты нет, потому что ты всех и разозлил",
];
let witchesT = [
    'Бонни, когда надо спасать всех... опять',
    'Когда заклинание требует "жертву с чистой душой"',
    'Моя реакция на очередную порчу от Предков',
    'Когда все просят магию, но никто не спрашивает как дела',
    'Ты говоришь "нет тёмной магии", а твои глаза говорят "но..."',
    'Когда Кай просто появился и испортил всё',
    'Моя бабушка в меня вселилась, чтобы сделать выговор',
    'Когда снова надо жертвовать собой для спасения друзей',
    'Твоё выражение лица после 10-го заклинания подряд',
    'Когда все выжили, но теперь ты призрак'
];
let werewolvesT = [
    'Когда полнолуние, а ты забыл принять вербену',
    'Тайлер, когда снова предал Мэтта',
    'Мой внутренний волк, когда вижу вампира',
    'Когда лунный цикл совпал с дедлайном',
    'Твоя реакция на первый трансформации (больно же!)',
    'Когда Хэйли сделала тебя альфой, но ты не хотел',
    'Лицо, когда понял что теперь в стае',
    'Когда Клаус опять использовал тебя как пешку',
    'Мэтт, когда узнал что его друг оборотень',
    'Когда полнолуние, а у тебя свидание'
];


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
