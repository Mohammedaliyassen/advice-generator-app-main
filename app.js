var advice = [
    'If you want to be strong, learn how to fight yourself',
    'Open your mind before your mouth',
    'Do not give up, the beginning is always the hardest',
    'A person who never made mistakes never tried anything - Albert Einstein',
    'The journey of thousands miles begins with a step',
    'success is going from failure to failure without losing your enthusiasm - W Churchill',
    'Champions keep playing until they got it - Billie jean',
    'Over thinking kills your happiness',
    'To succeed in life, you need two things : ignorance & confidence - Mark twain',
    'Some people look for a beautiful place, others make the place beautiful',
    'Be strong for yourself',
    'Stop wishing , start doing',
    'Stars can not shine without darkness',
    'Mistakes are proof that you are trying',
    'I do not know the key to success, but the key to failure is trying to please everyone - Bill Cosby',
    'Necessity is the mother of invention',
    'Do not be afraid to fail, just keep trying',
    'In order to succeed, we must first believe that we can',
    'The road to success is not straight',
    'Every one thinks of changing the world, but no one thinks of changing himself'
];

function changeAdvice(advice){
    x= Math.floor(Math.random() * advice.length); 
    document.getElementById('Advice').innerHTML= `"${advice[x]}"`
    document.getElementById('adviveNum').innerHTML= `"ADVCIE #${x+1}"`
    document.getElementById('Advice').classList.remove('lol');
}
function nextAdvice(advice){
        var curantAdvice = 0;
        document.getElementById('Advice').innerHTML= `"${advice[curantAdvice]}"`
        document.getElementById('adviveNum').innerHTML= `"ADVCIE #${curantAdvice+1}"`
        // document.getElementById('Advice').classList.toggle('lol');
    if(document.getElementById('Advice').matches('.lol')){
        console.log("true")
        
    setInterval(()=>{
        if(curantAdvice <advice.length){
            curantAdvice += 1;
            document.getElementById('Advice').innerHTML= `"${advice[curantAdvice-1]}"`
            document.getElementById('adviveNum').innerHTML= `"ADVCIE #${curantAdvice}"` 
            console.log(curantAdvice)
        }
        else{
            curantAdvice = 0 ;
        }
    }
    ,3000)
    }
    }


