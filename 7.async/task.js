

class AlarmClock {
    constructor (alarmCollection = [], timerId = null){
        this.alarmCollection = alarmCollection;
        this.timerId = timerId;
    }

    addClock(time, callback, id){
        if (!id){
            throw new Error ('Параметр не передан!');
        }

        else if (this.alarmCollection.find(item => item.id === id)){
            console.error('Такой звонок уже существует');
        }

        else {
            this.alarmCollection.push({
                time: time,
                callback: callback,
                id: id
            })
        }
    }

    removeClock(id) {
            const removedId = this.alarmCollection.filter(item => item.id === id)
            
        if (removedId){
            this.alarmCollection.pop();
        }
        return this.alarmCollection.length != this.alarmCollection.length;
            
    }

    getCurrentFormattedTime(time){
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`;
    }

    start(){
        const checkClock = call =>{
            if (this.alarmCollection.time === this.getCurrentFormattedTime()){
                this.alarmCollection.callback();
            }

            if (this.timerId === null){
                this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock),this.timerId);
            }
        }
    }

    stop(){
        if (this.timerId != null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(alarm => console.log('Будильник ' + `${alarm.id}` + 'заведен на время: ' + `${alarm.time}`));
    }    
    
    clearAlarms(){
        clearInterval(this.timerId);
        this.alarmCollection = [];
        this.timerId = null;
    }
}

function testCase(){
    let alarm1 = new AlarmClock();
    
}