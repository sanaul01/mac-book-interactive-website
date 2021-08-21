

function memoryCost(isAdd){
    const memoryInputText = document.getElementById('memory-cost');
    let newmemoryNumber = memoryInputText.innerText
    if(isAdd == true){
        newmemoryNumber = parseFloat(180);
    }
    else{
        newmemoryNumber = parseFloat(0);
    }
    memoryInputText.innerText = newmemoryNumber;
    // console.log(newmemoryNumber)
    
}

function getInputValue(product){
    const memoryCostInput = document.getElementById(product + '-cost');
    let memoryCostNumber = parseInt(memoryCostInput.value);
    return memoryCostNumber;
}


document.getElementById('memory-minus').addEventListener('click', function(){
    memoryCost(false);
    
});
document.getElementById('memory-plus').addEventListener('click', function(){
    memoryCost(true);
   
});

// storage button 

function storageCost(isAdd){
    const storageCostText = document.getElementById('storage-cost');
    let storageCostNumber = storageCostText.innerText;
    if(isAdd == true){
        storageCostNumber = parseFloat(0);
    }
    else if(isAdd == false){
        storageCostNumber = parseFloat(100);
    }
    
    else{
        storageCostNumber = parseFloat(180);
    }
    storageCostText.innerText = storageCostNumber;
    
    
    
}

document.getElementById('storage-button1').addEventListener('click', function(){
    
    storageCost(true);
    
    
});

document.getElementById('storage-button2').addEventListener('click', function(){
    
    storageCost(false);
    
    
});
document.getElementById('storage-button3').addEventListener('click', function(){
    
    storageCost();
    
    
});

// delivery button and cost 

function deliveryCost(isAdd){
    const deliveryText = document.getElementById('delivery-cost');
    let deliveryNumber = deliveryText.innerText;
    if(isAdd == true){
        deliveryNumber = parseFloat(0);
    }
    else{
        deliveryNumber = parseFloat(20);
    }
    deliveryText.innerText = deliveryNumber
    // console.log(deliveryNumber)
}

document.getElementById('delivery-option-button1').addEventListener('click', function(){
    deliveryCost(true);
    
    
});
document.getElementById('delivery-option-button2').addEventListener('click', function(){
    deliveryCost(false);
    

    
    
});

