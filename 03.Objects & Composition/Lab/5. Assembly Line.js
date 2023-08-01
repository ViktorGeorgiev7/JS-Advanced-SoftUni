const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function hasAudio(myCar){
    let hasAudio= {
        currentTrack: {
            name:'Never Gonna Give You Up',
            artist:'Rick Astley'
        },
        nowPlaying: function(){
            console.log('Now playing '+{this:this.currentTrack.name}+' by '+{this:this.currentTrack.artist})
        }
    }
    myCar[hasAudio] = hasAudio;
    console.log('car now has audio and can play music')
}
function hasClima(myCar){
    let hasClima = {
        temp:21,
        tempSettings:21,
        adjustTemp: function(){
            if (this.temp<this.tempSettings) {
                temp++;
            }
            else if(this.temp>this.tempSettings){
                temp--;
            }
        }
    }
    myCar[hasClima] = hasClima;
    console.log('car now has klimatronik and can adjust temperature with the base one set to 21')
}
function hasParktronic(myCar){
    let hasParktronic = {
        checkDistance: function(distance){
            if (distance<0.1) {
                console.log("Beep! Beep! Beep!")
            }
            else if (distance < 0.25) {
                console.log("Beep! Beep!")
            }
            else if (distance< 0.5){
                console.log("Beep!")
            }
            else{
                console.log('')
            }
        }
    }
    myCar[hasParktronic] = hasParktronic;
    console.log('car now has parktronic and can park safely with ease')
}
hasAudio(myCar);
hasClima(myCar);
hasParktronic(myCar);