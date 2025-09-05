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
  for(const data of historyData){
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
     <div class="flex justify-center gap-20 bg-[#fafafa] rounded-xl my-4">
          <div class="mt-2 ">
            <h3 class="font-bold">${data.name}</h3>
            <p class="text-sm text-[#5c5c5c]">${data.number}</p>
          </div>
          <div class="my-5">
            <p>${data.time}</p>
          </div>
       </div>
  `

      historyContainer.appendChild(historyDiv)
  }



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
  for(const data of historyData){
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
     <div class="flex justify-center gap-20 bg-[#fafafa] rounded-xl">
          <div class="mt-2 ">
            <h3 class="font-bold">${data.name}</h3>
            <p class="text-sm text-[#5c5c5c]">${data.number}</p>
          </div>
          <div class="my-5">
            <p>${data.time}</p>
          </div>
       </div>
  `

      historyContainer.appendChild(historyDiv)
  }



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
  for(const data of historyData){
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
     <div class="flex justify-center gap-20 bg-[#fafafa] rounded-xl">
          <div class="mt-2 ">
            <h3 class="font-bold">${data.name}</h3>
            <p class="text-sm text-[#5c5c5c]">${data.number}</p>
          </div>
          <div class="my-5">
            <p>${data.time}</p>
          </div>
       </div>
  `

      historyContainer.appendChild(historyDiv)
  }



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
  for(const data of historyData){
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
     <div class="flex justify-center gap-20 bg-[#fafafa] rounded-xl">
          <div class="mt-2 ">
            <h3 class="font-bold">${data.name}</h3>
            <p class="text-sm text-[#5c5c5c]">${data.number}</p>
          </div>
          <div class="my-5">
            <p>${data.time}</p>
          </div>
       </div>
  `

      historyContainer.appendChild(historyDiv)
  }



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
  for(const data of historyData){
    const historyDiv = document.createElement("div"); 

   historyDiv.innerHTML = `
     <div class="flex justify-center gap-20 bg-[#fafafa] rounded-xl">
          <div class="mt-2 ">
            <h3 class="font-bold">${data.name}</h3>
            <p class="text-sm text-[#5c5c5c]">${data.number}</p>
          </div>
          <div class="my-5">
            <p>${data.time}</p>
          </div>
       </div>
  `

      historyContainer.appendChild(historyDiv)
  }



});







