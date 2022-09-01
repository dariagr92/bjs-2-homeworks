

class AlarmClock {
    constructor (alarmCollection, timerId){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error ('Параметр ID не передан!');
        }

        else if (this.alarmCollection.find(item => item.id === id)){
           return console.error('Такой звонок уже существует');
        }

        this.alarmCollection.push({time, callback, id});
        
     
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
        this.alarmCollection.forEach(alarm => console.log('Будильник ' + `${alarm.id}` + ' заведен на время: ' + `${alarm.time}`));
    }    
    
    clearAlarms(){
        clearInterval(this.timerId);
        this.alarmCollection = [];
        this.timerId = null;
    }
}

let clock = new AlarmClock();

console.log('Первый будильник ' + clock.addClock("07:00", () => console.log('Вставай!'), 1));
console.log('Количество записей - ' + clock.alarmCollection.length);

clock.removeClock(1);
console.log('Теперь количество записей - ' + clock.alarmCollection.length);

const currentDate = new Date();
console.log('Показываем текущее время - ' + clock.getCurrentFormattedTime());

console.log('id интервала до запуска - ' + clock.timerId);

console.log('Второй будильник ' + clock.addClock("07:00", () => console.log('Вставай уже!'), 2));

console.log('Запускаем ' + clock.start());
console.log(clock.timerId);

console.log('Третий будильник ' + clock.addClock("07:05", () => console.log('Вставай уже!'), 3));
console.log('Четвертый будильник ' + clock.addClock("07:10", () => console.log('Вставаааай!'), 4));
console.log('Пятый будильник ' + clock.addClock("07:15", () => console.log('Щас проспишь!'), 5));

console.log('Сейчас записей - ' + clock.alarmCollection.length);
clock.printAlarms();


clock.clearAlarms();
console.log('После удаления записей - ' + clock.alarmCollection.length);




    
