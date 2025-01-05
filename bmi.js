document.getElementById('bmi').addEventListener('submit',function(e){
    e.preventDefault();
    const gender=document.getElementById('gender').value;
    const age=parseInt(document.getElementById('age').value);
    const heightFeet=parseInt(document.getElementById('heightFeet').value);
    const heightInch=parseInt(document.getElementById('heightInch').value);
    const weight=parseFloat(document.getElementById('weight').value);

 if(gender && age && heightFeet && heightInch &&weight){
    const heightMeters=((heightFeet*12)+heightInch)*0.0254;
    const bmi=weight/(heightMeters*heightMeters);
    const result=document.getElementById('result');
    let category='';
    
    if(bmi < 18.5){
        category='under weight';
    }
     else if(bmi >18.5 && bmi<24.9){
        category='normal weight';
    }
    else if(bmi>=25 && bmi<29.9){
        category='over weight';
    }
     else if(bmi>29.9){
        category='obese';
    }

    let reslt='Your BMI value is ' +bmi.toFixed(2)+'<br>';
    reslt += `category:${category}`;
    result.innerHTML=reslt;
}})