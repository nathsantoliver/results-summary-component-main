const divSummary = document.querySelector('.summary');
const resultValue = document.querySelector('.result_value');

resultSection();
summarySection();

async function resultSection() {
    const response = await fetch('data.json');
    const data = await response.json();

    let result;
    let totalSummary = 0;
    let totalScore = 0;
    for(let i = 0; i < data.length; i++) {
        totalScore += data[i].score;
        totalSummary++;
    }
    result = Math.round(totalScore / totalSummary);
    // console.log(result);

    resultValue.innerHTML = `<span class="result_media">${result}</span><span>of 100</span>`;
}

async function summarySection() {
    const response = await fetch('data.json');
    const data = await response.json();

    divSummary.innerHTML = 
                            `<li class="summary_reaction">
                            <div class="summary_category">
                            <img src="${data[0].icon}" alt="${data[0].category} Icon">
                            <h3>${data[0].category}</h3>
                            </div>
                            <div class="summary_value">
                            <p><span>${data[0].score}</span> / 100</p>
                            </div>
                            </li>` + 
                            `<li class="summary_memory">
                            <div class="summary_category">
                            <img src="${data[1].icon}" alt="${data[1].category} Icon">
                            <h3>${data[1].category}</h3>
                            </div>
                            <div class="summary_value">
                            <p><span>${data[1].score}</span> / 100</p>
                            </div>
                            </li>` + 
                            `<li class="summary_verbal">
                            <div class="summary_category">
                            <img src="${data[2].icon}" alt="${data[2].category} Icon">
                            <h3>${data[2].category}</h3>
                            </div>
                            <div class="summary_value">
                            <p><span>${data[2].score}</span> / 100</p>
                            </div>
                            </li>` + 
                            `<li class="summary_visual">
                            <div class="summary_category">
                            <img src="${data[3].icon}" alt="${data[3].category} Icon">
                            <h3>${data[3].category}</h3>
                            </div>
                            <div class="summary_value">
                            <p><span>${data[3].score}</span> / 100</p>
                            </div>
                            </li>`;
}