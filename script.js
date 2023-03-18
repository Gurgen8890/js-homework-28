class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
   
    async delay(hours, min, sec) {
            setInterval(() => {
                console.clear()
                    sec+=1
                    console.clear;
                    if(sec > 59){
                        min += 1;
                        sec = 0;
                    }  
                    if(min > 59) {
                        hours += 1;
                        min = 0;
                    }            
                    
                    if(hours > 23){
                        hours = 0;
                        return
                    }
                    console.log(`${hours} : ${min} : ${sec}`);
            }, 1000)
    }

    async watch() {
        await this.delay(0, 0, 0);
    }
}


 let clock = new Clock();

clock.watch()

 