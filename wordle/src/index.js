const ROW = 6;
const COL = 5;

const wordList = [
    'patio',
    'apple',
    'darts',
    'piano',
    'egloo',
    'event',
    'trend',
    'horse'
];

let randomIndex;
let randomAnswer;
let attempts = []; // 시도할때마다 숫자가 참.
let currentAttempt = '';

const gridWrapper = document.getElementById('grid');

document.addEventListener('keyup',(e) => {
    const char = onClickGridCell(e);
    if(!char) return; 

    updateGrid();
});

/**
 *  Make Wordle Grid (6 x 5)
 */
initGrid();


function initGlobalValue(){
    // 0~7 까지 나오게 하려면? 0~1까지 나오는데? 곱하기 10을 하고 8로 나눈 나머지. or 랜덤 * 길이 하고 floor 
    // ~~(Math.random() * length), 
    // 1 * 30 => 27.xxx
    randomIndex =  ~~(Math.random() * wordList.length);
    randomAnswer = wordList[randomIndex];
    attempts = [];
    currentAttempt = '';
}

function getBgColor(letters,i){
    const attemptLetter = letters[i];
    const correctLetter = randomAnswer[i];

    if(attemptLetter === correctLetter){
        return 'green';
    }

    if(randomAnswer.includes(attemptLetter)){
        return '#aeae2d';
    }
    
    return 'gray';
}

function clearBoard(){
    while(gridWrapper.firstChild){
        gridWrapper.lastChild.remove();
    }
}

function checkIsCorrectAnswer(){
    if(randomAnswer === currentAttempt){
        alert(randomAnswer);
        initGrid();
        return true;
    }

    console.log("wrong! answer is = ",randomAnswer);
    return false;
}

function isValidInput(char){
    return /^[a-z]$/.test(char);
}

function onClickGridCell(e){
    const character = e.key;
    // 엔터면 리셋시켜주는 코드 작성
    if(character === 'Enter' || e.keyCode === 13) {
        // 꽉 채우지 않고 엔터 누른경우
        if(currentAttempt.length !== COL) return; 
        // 정답체크 먼저 하기
        if(checkIsCorrectAnswer()){
            return;
        }

        // 현재 시도를 저장하고 비운다
        attempts.push(currentAttempt);
        currentAttempt = '';

        updateGrid();
        return;
    }

    if(character === 'Backspace' || e.keyCode === 8) {
        currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1);
        updateGrid();
        return;
    }
    // letter이 아니거나 6글자를 다 쓴 경우.
    if(!isValidInput(character) || currentAttempt.length >= COL) return;
    
    currentAttempt += character;

    return character;
}

function initGrid() {
    initGlobalValue();
    clearBoard();

    for(let i = 0; i < ROW; i++){
        const gridRow = document.createElement('div');    
        gridRow.className = 'grid_item_wrapper';
        
        for(let j = 0; j < COL; j++){
            const gridColumn = document.createElement('div');
            gridColumn.className = 'grid_item';
            gridRow.appendChild(gridColumn);
        }
        gridWrapper.appendChild(gridRow);
    }
}

function updateGrid() {
    let row = gridWrapper.firstChild; // 직접 찾지 말고 그 row 자체를 넘겨서 탐색 시킴.

    for(let attempt of attempts) { 
        // draw already recorded word (with bgColor)
        drawAttempt(row, attempt, true);
        row = row.nextSibling;
    }
    // draw current attempt letters (without bgColor)
    drawAttempt(row, currentAttempt, false);
}

// 새로 만들지 않고 children으로 접근.
function drawAttempt(row, letters, isRecorded) {
    for(let i = 0; i < COL; i++){
        const gridColumn = row.children[i];
        gridColumn.textContent = letters[i] ?? '';
        gridColumn.style.borderColor = '';

        if (isRecorded) {  
            gridColumn.style.backgroundColor = getBgColor(letters,i);
        } else {
            gridColumn.style.borderColor = letters[i] ? 'white' : '';
        }
    }
    
}

