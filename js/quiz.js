var quiz = {
    data: [
    {
    q: "భారతదేశపు జాతీయ పక్షి ఏది?",
    o: [
    "బాతు",
    "నెమలి",
    "చిలుక",
    "పావురం"],
    
    a: 1
    },
    {
    q: "ఎనిమిదో నెల ఏది?",
    o: [
    "సెప్టెంబర్",
    "నవంబర్",
    "జూలై",
    "ఆగష్టు"],
    
    a: 3 },
    
    {
    q: "ప్రపంచంలో అతి పొడవైన నది ఏది",
    o: [
    "తుంగభద్ర నది",
    "కృష్ణా నది",
    "నైల్ నది",
    "పెన్నా నది"],
    
    a: 2 },
    
    {
    q: "సూర్యుడు ఉదయించే దిశ ఏది?",
    o: [
    "తూర్పు",
    "పడమర",
    "దక్షిణ",
    "ఉత్తరం"],
    
    a: 0 },
    
    {
    q: "మానవ శరీరంలో అతి పెద్ద అవయవం ఏది?",
    o: [
    "కాళ్ళు",
    "మెదడు",
    "గుండె",
    "చర్మం"],
    
    a: 3 }],
    
    hWrap: null, // HTML quiz container
    hQn: null, // HTML question wrapper
    hAns: null, // HTML answers wrapper
    
    now: 0, // current question
    score: 0, // current score
    
    init: () => {
    quiz.hWrap = document.getElementById("quizWrap");
    
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);
    
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);
    
    quiz.draw();
    },
    
    draw: () => {
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;
    
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.id = "quizo" + i;
    quiz.hAns.appendChild(radio);
    let label = document.createElement("label");
    label.innerHTML = quiz.data[quiz.now].o[i];
    label.setAttribute("for", "quizo" + i);
    label.dataset.idx = i;
    label.addEventListener("click", () => {quiz.select(label);});
    quiz.hAns.appendChild(label);
    }
    },
    
    select: option => {
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
    label.removeEventListener("click", quiz.select);
    }
    
    let correct = option.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
    quiz.score++;
    option.classList.add("correct");
    } else {
    option.classList.add("wrong");
    }
    
    quiz.now++;
    setTimeout(() => {
    if (quiz.now < quiz.data.length) {quiz.draw();} else { quiz.hQn.innerHTML=`You have answered ${quiz.score} of ${quiz.data.length} correctly.`; quiz.hAns.innerHTML="" ; } }, 1000); }, reset: ()=> {
        quiz.now = 0;
        quiz.score = 0;
        quiz.draw();
        } };
    
        window.addEventListener("load", quiz.init);