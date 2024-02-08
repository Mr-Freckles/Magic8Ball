const answers = [
    'It is certain.',
    'Highly uncertain.',
    'Without a doubt.',
    'Yes, definitely.',
    'Who cares.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Try asking Jesus.',
    'Ask again later.',
    'Go pray.',
    'Cannot predict now.',
    'Ask again.',
    'Don\'t bet on it.',
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
