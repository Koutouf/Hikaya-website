let availablekeywords=[
    'الرئيسية',
    'صور متحركة',
    'أغاني أطفال',
    'بودكاست',
    'الافلام' 
];

const resultsBox=document.querySelector(".resultbox");
const inputbox=document.querySelector(".input-box");

inputbox.onkeyup =function()
{
    let result=[];//filter the list of values
    let input=inputbox.value;
    if(input.length)
    {
        result =availablekeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });

        display(result);
    }
    else
    {
        resultsBox.innerHTML=''//clear results if input is empty
    }
};

function display(result){
    const content = result.map((list)=>{
        //Pass the clicked keyword as an argument to the selectInput function
        return "<li onclick=\"selectInput('"+list.trim()+"')\">" +list+"</li>";
    });

    resultsBox.innerHTML= "<ul>" +content.join('')+"</ul>";
}

function selectInput(keyword)
{
    switch (keyword.trim()) {
        case 'الرئيسية':
            window.location.replace('7ikeya.html');
            break;
        case 'صور متحركة':
            window.location.replace('anime.html');
            break;
        case 'أغاني أطفال':
            window.location.replace('songs.html');
            break;
        case 'بودكاست':
            window.location.replace('podcast.html');
            break;
        case 'الافلام':
            window.location.replace('film.html');
            break;
        default:
            // Default action if no matching keyword is found
            break;
    }
    document.querySelector(".resultbox").innerHTML = ''; 
}