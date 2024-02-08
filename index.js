const answers = [
    'It is certain.',
    'Highly uncertain.',
    'Without a doubt.',
    'Yes, definitely.',
    'Who cares.',
    'Oui Señorita.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Try asking Jesus.',
    'Ask again later.',
    'Go pray.',
    'Cannot predict now.',
    'Ask again.',
    'Press ctr-w for answer.',
    'My reply is no.',
    'Nope.',
    'Potatoes say no.',
    'Very doubtful.'
];

const magicBall = document.getElementById('magicBall');
const magicBallText = document.getElementById('magicBallText');

magicBall.addEventListener('click', () => {
    magicBallText.innerText = answers[Math.floor(Math.random() * answers.length)];
});
