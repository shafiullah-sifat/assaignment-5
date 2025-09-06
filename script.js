// heart count

const heartCounter = document.getElementById("heart-counter")

const heartIcons = document.getElementsByClassName("fa-heart")

for (const icon of heartIcons) {
    icon.addEventListener("click", function () {
        let count = parseInt(heartCounter.textContent);
        heartCounter.textContent = count + 1;

    })
}

// copy btn
const copyCount = document.getElementById("copy-count")


//first card
const copyNumber = document.getElementById("copy-number")

const copyBtn = document.getElementById("copy-btn")



    copyBtn.addEventListener("click", function () {
    const number = document.getElementById("copy-number").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})


//second card

const copyNumber1 = document.getElementById("copy-number1")

const copyBtn1 = document.getElementById("copy-btn1")



    copyBtn1.addEventListener("click", function () {
    const number = document.getElementById("copy-number1").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})

//third card

const copyNumber2 = document.getElementById("copy-number2")

const copyBtn2 = document.getElementById("copy-btn2")



    copyBtn2.addEventListener("click", function () {
    const number = document.getElementById("copy-number2").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})

//fourth card

const copyNumber3 = document.getElementById("copy-number3")

const copyBtn3 = document.getElementById("copy-btn3")



    copyBtn3.addEventListener("click", function () {
    const number = document.getElementById("copy-number3").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})
// fifth card

const copyNumber4 = document.getElementById("copy-number4")

const copyBtn4 = document.getElementById("copy-btn4")



    copyBtn4.addEventListener("click", function () {
    const number = document.getElementById("copy-number4").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})

//sixth card
   const copyNumber5 = document.getElementById("copy-number5")

  const copyBtn5 = document.getElementById("copy-btn5")



    copyBtn5.addEventListener("click", function () {
    const number = document.getElementById("copy-number5").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})
// 7th card

  const copyNumber6 = document.getElementById("copy-number6")

  const copyBtn6 = document.getElementById("copy-btn6")



    copyBtn6.addEventListener("click", function () {
    const number = document.getElementById("copy-number6").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})


// 8 th card

  const copyNumber7 = document.getElementById("copy-number7")

  const copyBtn7 = document.getElementById("copy-btn7")



    copyBtn7.addEventListener("click", function () {
    const number = document.getElementById("copy-number7").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})
// 9 th card

  const copyNumber8 = document.getElementById("copy-number8")

  const copyBtn8 = document.getElementById("copy-btn8")



    copyBtn8.addEventListener("click", function () {
    const number = document.getElementById("copy-number8").textContent
    navigator.clipboard.writeText(number);

    const currentCount = parseInt(copyCount.textContent)
    copyCount.textContent = currentCount + 1;
})



// call button 
const coinCounter = document.getElementById("coin-counter");
let coins = parseInt(coinCounter.textContent); 
const historyData =[];

// call button first
const callBtn = document.getElementById("call-btn");

callBtn.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling National Emergency Number 999");

  const data = {
    name: "National Emargency Number",
    number: "999",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)
  
  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});

// call button second

const callBtn1 = document.getElementById("call-btn1");

callBtn1.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Police Helpline Number 999");

  const data = {
    name: "Police Helpline Number",
    number: "999",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});

// call button 3rd

const callBtn2 = document.getElementById("call-btn2");

callBtn2.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Fire Service Numbery Number 999");

  const data = {
    name: "Fire Service Number",
    number: "999",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});

//call btn 4



const callBtn3 = document.getElementById("call-btn3");

callBtn3.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Ambulance Service Number 1994-999999");

  const data = {
    name: "Ambulance Service",
    number: "1994-999999",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});


// call btn 5

const callBtn4 = document.getElementById("call-btn4");

callBtn4.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Women & Child Helpline Number 109");

  const data = {
    name: "Women & Child Helpline",
    number: "109",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});

// call btn 6

const callBtn5 = document.getElementById("call-btn5");

callBtn5.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Anti-Corruption HelplineHelpline Number 106");

  const data = {
    name: "Anti-Corruption Helpline",
    number: "106",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});

// call btn 7th


const callBtn6 = document.getElementById("call-btn6");

callBtn6.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Anti-Corruption HelplineHelpline Number 106");

  const data = {
    name: "Electricity Helpline",
    number: "16216",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});

//call btn 8



const callBtn7 = document.getElementById("call-btn7");

callBtn7.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Brac Helpline Number 16445");

  const data = {
    name: "Brac Helpline",
    number: "16445",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)



});

// call btn 9

const callBtn8 = document.getElementById("call-btn8");

callBtn8.addEventListener("click", function () {
  if (coins < 20) {
    alert("You don't have enough coins");
    return;
  }

  coins -= 20;
  coinCounter.textContent = coins;


  alert("Calling Bangladesh Railway Helpline Number 163");

  const data = {
    name: "Bangladesh Railway Helpline",
    number: "163",
    time: new Date().toLocaleTimeString()

  }
  historyData.push(data)

  const historyContainer = document.getElementById("history-container")
  
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
  <div class="flex justify-between items-center bg-[#fafafa] rounded-xl my-4 p-4 w-full">
    <div>
      <h3 class="font-bold">${data.name}</h3>
      <p class="text-sm text-[#5c5c5c]">${data.number}</p>
    </div>
    <div>
      <p>${data.time}</p>
    </div>
  </div>
  `

      historyContainer.appendChild(historyDiv)
  



});


//clear btn

const clearBtn = document.getElementById("clear-history")

clearBtn.addEventListener("click",function(){
  historyData.length = 0;
  const historyContainer = document.getElementById("history-container")
  historyContainer.innerHTML = ''


})