const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

words = {
    おはようございます: 'Chào buổi sáng',
    'お会いできて、 嬉 しいです': 'Hân hạnh được gặp bạn!',
    お久しぶりです: 'Lâu quá không gặp',
    'お元 気ですか': 'Bạn khoẻ không?',
    '最近　どうですか': 'Dạo này bạn thế nào?',
    お休みなさい: 'Chúc ngủ ngon!',
    たすかります: 'May quá, cảm ơn cậu nhiều',
    'ご迷惑ですか？': 'Tôi có đang làm phiền bạn không?',
}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3`;
    definition.innerHTML = `<h2>${randomTerm[1]}</h2`;
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function() {
    definition.style.display = 'none';
    getRandomWord();
})

