
const body = document.body;
const button1 = document.createElement('button');
button1.innerHTML = "Start for questions";
button1.onclick = ()=>myonclick();
let myonclick = async function() {
    // let random = Math.floor(Math.random()*3);
    // let random = 0;
    // switch(random) {
    //     case 0:
    //         // type trivia
    //         // A trivia is a question have two to four options with one of them is the correct answer.
    //         await trivia();
    //         break;
    //     case 1:
    //         // type poll
    //         // A poll is an objective question have two to four options without a correct answer. 

    //         break;
    //     case 2:
    //         // type checkbox
    //         // A checkbox question is an objective question with up to ten options and people can choose anything between one and ten options. 

    //         break;
        
    //     case 3:
    //         // type matrix
    //         // A matrix question is an objective question that shows options in a matrix. A visitor can only pick one of the available options, there is no right or wrong answer

    //         break;
        
    //     default:
    //         alert("not in all cases");
    //         throw console.error();
    // }


    await fetch("http://localhost:3000")
    .then(
        res => res.json()
    ).then(
        res => {
            alert(res)
        }
    )
    alert('end')
}

let obj = {
    type: "trivia",
    question: "quesiton1",
    choices: ["a","b","c","d"],
    anwser_index: 3
}

let trivia = async function() {
    body.innerHTML = "";

    let widget = document.createElement("div");
    let questionDescribe = document.createElement("h2");
    widget.appendChild(questionDescribe);
    let form = document.createElement("form");
    widget.appendChild(form);
    
    questionDescribe.innerHTML = obj.question;
    let index = 0;
    for(let choice of obj.choices) {
        console.log(choice);
        index++;
        let input = document.createElement("input");
        input.type = "radio";
        input.value = choice;
        input.id = index;
        let label = document.createElement("label");
        label.htmlFor = index;
        label.innerHTML = choice;
        let br = document.createElement("br")
        form.appendChild(input);
        form.appendChild(label);
        form.append(br);
    }

    form.className = "trivia";

    body.appendChild(questionDescribe);
    body.appendChild(form);
    
}

body.appendChild(button1);
