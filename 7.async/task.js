

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
            

            
    }
    
}