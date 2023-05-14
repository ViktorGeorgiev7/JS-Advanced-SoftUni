
function determine(speed,area)
{
    let limit;
    switch (area) {
        case 'motorway'://limit - 130  
        limit = 130;
        console.log(IsLimit(limit,speed))
            break;
        case 'city'://limit-50
        limit = 50;
        console.log(IsLimit(limit,speed))
            break;
        case 'interstate'://limit-90
        limit=90;
        console.log(IsLimit(limit,speed))
            break;
        case 'residential'://limit-20  
        limit = 20;
        console.log(IsLimit(limit,speed))
            break;
    }
}
function IsLimit(limit,speed){
    if (speed<=limit) 
    {
        return 'Driving '+ speed +' km/h in a '+limit+' zone ';
    }
    else
    {
        if (speed-limit<=20) 
        {
            return 'The speed is '+ (speed-limit) +' km/h faster than the allowed speed of '+limit+' - speeding '
        }
        else if(speed-limit<=40)
        {
            return 'The speed is '+ (speed-limit) +' km/h faster than the allowed speed of '+limit+' - excessive speeding '
        }
        return 'The speed is '+ (speed-limit) +' km/h faster than the allowed speed of '+limit+' - reckless driving '
    }
}
determine(120, 'interstate' );