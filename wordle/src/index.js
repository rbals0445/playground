const ROW = 6;
const COL = 5;
/**
 *  Make Wordle Grid (6 x 5)
 */
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
let curRow = 0, curCol = 0;

const gridWrapper = document.getElementById('grid');
// 첫번째 줄이 다차면 더이상 써지지 않는다. 윗줄부터..

function initGlobalValue(){
    // 0~7 까지 나오게 하려면? 0~1까지 나오는데? 곱하기 10을 하고 8로 나눈 나머지. or 랜덤 * 길이 하고 floor 
    // ~~(Math.random() * length), 
    // 1 * 30 => 27.xxx
    randomIndex =  ~~(Math.random() * wordList.length);
    randomAnswer = wordList[randomIndex];
    curRow = 0;
    curCol = 0;
    attempts = [];
    currentAttempt = '';
}

function getBgColor(row,col){
    const curCharacter = attempts[row][col];

    if(curCharacter === randomAnswer[col]){
        return 'green';
    }

    if(randomAnswer.includes(curCharacter)){
        return 'yellow';
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
    return char >= 'a' && char <= 'z';
}

function onClickGridCell(e){
    const character = e.key;
    // 엔터면 리셋시켜주는 코드 작성
    if(character === 'Enter' || e.keyCode === 13) {
        // 꽉 채우지 않고 엔터 누른경우
        if(curCol !== COL) return; 
        // 정답체크 먼저 하기
        if(checkIsCorrectAnswer()){
            return;
        }

        // 현재 시도를 저장하고 비운다
        attempts.push(currentAttempt);
        currentAttempt = '';

        // 다음 row부터 써지게 한다. col 첫번째자리로 옮긴다.
        curRow++;
        curCol = 0;
        updateGrid();
        return;
    }

    if(!isValidInput(character)) return;
    
    if(currentAttempt.length >= COL) return;
        
    currentAttempt += character;

    return character;
}
document.addEventListener('keyup',(e) => {
    const char = onClickGridCell(e);
    if(!char || curCol === COL) return; // 엔터가 눌려야 j는 리셋됨.

    updateGrid();
    curCol++;
});

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

// 새로 만들지 않고 children으로 접근.
function updateGrid() {
    for(let i = 0; i < ROW; i++){
        const gridRow = gridWrapper.children[i];
        for(let j = 0; j < COL; j++){
            const gridColumn = gridRow.children[j];
            gridColumn.textContent = '';
            
            if(i === curRow && currentAttempt[j]) {
                gridColumn.textContent = currentAttempt[j];
            }else if(i < curRow) {
                gridColumn.textContent = attempts[i][j];
                gridColumn.style.borderColor = getBgColor(i,j);
            }   
        }
    }
}

initGrid();

