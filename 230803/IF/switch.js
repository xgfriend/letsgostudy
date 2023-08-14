console.log( '연결' )

const food = '닭가슴살'
switch(food){
    case "짬뽕":
        console.log('웬일임 짬뽕이라니')
        break; //조건이 맞지 않으면 빠져나옴 > console.log를 break 밑에 작성하면 맞는 조건이어도 실행 안 됨
    case "생선구이":
        console.log('너 생선 싫다며')
        break;
    case "김치찌개":
        console.log('개좋은데?')
        break;
    case "떡볶이":
        console.log("어디 브랜드?")
        break;
    default: //위 조건이 아무것도 맞지 않으면 default 값이 실행
        console.log('백반 먹고 싶다 진짜로')
        break;
}

function add(x, y){
    return //아래 내용을 무조건 무시 > return x + y; 혹은 x + y를 위에 작성
}