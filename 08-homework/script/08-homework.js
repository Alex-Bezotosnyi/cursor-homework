class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }

    getInfo() {
        return `"Студент ${this.course}го курсу ${this.university}, ${this.fullName}, ${this.marks}"`;
    }

    get marks() {
        return this._marks;
    }

    set marks(mark) {
        if (this.marks instanceof Array) {
            this._marks = this.marks;
        } else {
            this._marks = [];
        }
        this._marks.push(mark);
        return this._marks = this.marks.flat();
    }

    getAverageMark() {
        let dismiss = this.dismiss();
        let recover = this.recover();
        return dismiss === false && recover === true
            ? null : this.marks.reduce((a, b) => a + b) / this.marks.length;
    }

    dismiss() {
        let marks = false;
        return marks;
    }

    recover() {
        let marks = false;
        return marks;
    }
}

// Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, getScholarship) {
        super(university, course, fullName, marks);
        this.getScholarship = getScholarship;
    }

////// ідеї закінчилися щодо getInterval
// https://developer.mozilla.org/ru/docs/Web/API/setInterval#%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0_%D1%81_this
    getScholarship() {
        let message = "Ви отримали +1400 грн. стипендії";
        // return window.setInterval(`getScholarship`, 1000)
        return this.getAverageMark() >= 4.0 ? message : "Ви НЕ отримали 1400 грн. стипендії";
    }

}

const userA = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [5, 4, 4, 5]);
const userB = new BudgetStudent("Середня Школа Психотерапії м.Одеса", 2, "Остап Родоманський Бендер", [4, 4, 4, 5]);
userA.marks = 5;

console.log(userA.getAverageMark(userA.marks));
// console.log(userA.getInfo())
console.log(userB.getInfo())
