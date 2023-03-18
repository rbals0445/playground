const ROW = 6;
const COL = 5;

const keyboardLetters = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['Enter','z','x','c','v','b','n','m','bs'],
    
]
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
const keyboardWrapper = document.getElementById('keyboard_wrapper');

document.addEventListener('keydown',(e) => {
    console.log(e.metaKey, e.ctrlKey, e.altKey, e.shiftKey)
    if(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey){ // keyup이면 어떻게 ㅎ결할지.
        return;
    }
    const key = e.key;
    const char = onClickGridCell(key);
    if(!char) return; 

    updateGrid();
});

/**
 *  Make Wordle Grid (6 x 5)
 */
initGrid();
initKeyboard();

function initKeyboard() {
    for(let keyboardLetter of keyboardLetters) {
        buildKeyboradRow(keyboardLetter)
    }
}

function buildKeyboradRow(letters) {
    const letterDivWrapper = document.createElement('div');

    for(let letter of letters){
        const letterDiv = document.createElement('div');
        letterDiv.className = 'letter';
        letterDiv.textContent = letter;
        letterDivWrapper.appendChild(letterDiv);    

        letterDivWrapper.addEventListener('click',(e) => {
            if(e.target.className === 'letter') {
                const key = e.target.innerHTML === 'bs' ? 'Backspace' : e.target.innerHTML;                

                const char = onClickGridCell(key);
                if(!char) return; 

                updateGrid();
            }
        })
    }

    letterDivWrapper.style.display = 'flex'
    letterDivWrapper.style.gap = '10px'
    keyboardWrapper.appendChild(letterDivWrapper);
}


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

function isGameFinished(){
    if(randomAnswer === currentAttempt){
        alert(randomAnswer);
        initGrid();
        return true;
    }

    if(attempts.length === ROW-1){
        alert("you can`t find the correct answer");
        initGrid();
        return true;
    }

    console.log("wrong! answer is = ",randomAnswer);
    return false;
}

function isValidInput(char){
    return /^[a-z]$/.test(char);
}

function onClickGridCell(character){
    // 엔터면 리셋시켜주는 코드 작성
    if(character === 'Enter') {
        // 꽉 채우지 않고 엔터 누른경우 or 정답인경우.
        if(currentAttempt.length !== COL || isGameFinished()) return; 

        if(!wordList.includes(currentAttempt)){
            alert("answer is not in the wordList");
            return;
        }
    
        attempts.push(currentAttempt);
        currentAttempt = ''; 
        updateGrid();
        return;
    }

    if(character === 'Backspace') {
        currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1);
        updateGrid();
        return;
    }
    // letter이 아니거나 6글자를 다 쓴 경우.
    if(currentAttempt.length === COL || !isValidInput(character)) return;
    
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

