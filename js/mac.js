
// Function of the memory cost=====
function memoryCost(isAdd){
    const memoryInputText = document.getElementById('memory-cost');
    let newmemoryNumber = memoryInputText.innerText
    if(isAdd == true){
        newmemoryNumber = 180;
    }
    else{
        newmemoryNumber = 0;
    }
    memoryInputText.innerText = newmemoryNumber;

    calculateTotal();
}

function getInputValue(product){
    const memoryCostInput = document.getElementById(product + '-cost');
    let memoryCostNumber = parseInt(memoryCostInput.value);
    return memoryCostNumber;
}

// 8GB/ 16Gb unified Memory 

document.getElementById('memory-minus').addEventListener('click', function(){
    memoryCost(false);
    
});
document.getElementById('memory-plus').addEventListener('click', function(){
    memoryCost(true);
   
});

// Chooes SSD Card------

function storageCost(isAdd){
    const storageCostText = document.getElementById('storage-cost');
    let storageCostNumber = storageCostText.innerText;
    if(isAdd == true){
        storageCostNumber = 0;
    }
    else if(isAdd == false){
        storageCostNumber = 100;
    }
    
    else{
        storageCostNumber = 180;
    }
    storageCostText.innerText = storageCostNumber;
    calculateTotal();

}

// Different side of cost 

document.getElementById('storage-button1').addEventListener('click', function(){
    storageCost(true);
});

document.getElementById('storage-button2').addEventListener('click', function(){
    storageCost(false);
});

document.getElementById('storage-button3').addEventListener('click', function(){
    storageCost();  
});

// delivery cost 

function deliveryCost(isAdd){
    const deliveryMac = document.getElementById('delivery-cost');
    let deliveryCost = deliveryMac.innerText;
    if(isAdd == true){
        deliveryCost = 0;
    }
    else{
        deliveryCost = 20;
    }
    deliveryMac.innerText = deliveryCost
    calculateTotal();
}
// Click Delivery Date ====
document.getElementById('delivery-option-button1').addEventListener('click', function(){
    deliveryCost(true); 
});

document.getElementById('delivery-option-button2').addEventListener('click', function(){
    deliveryCost(false); 
});

// Total Calculation

function calculateTotal(){
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = parseFloat(memoryCostText);
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = parseFloat(storageCostText)
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseFloat(deliveryCostText);

    const totalInput = document.getElementById('total-price');
    const totalPrice = 1299 + memoryCost + storageCost + deliveryCost;
    totalInput.innerText = totalPrice;

    const inputTotal = document.getElementById('total');
    inputTotal.innerText = totalPrice;
    
}

// Extra Promo Code===
document.getElementById('apply-button').addEventListener('click', function(){
    
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value;
    const inputTotal = document.getElementById('total');
        let total = inputTotal.innerText;
    if(promoCode == 'stevekaku'){
        inputTotal.innerText = total - (20 / 100) * total;

        promoInput.value ='';
        
    }
    return total;
});