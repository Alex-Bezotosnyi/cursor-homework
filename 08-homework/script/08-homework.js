class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isDismiss = true;
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
        return this.isDismiss ? this.marks.reduce((a, b) => a + b) / this.marks.length : null
    }

    dismiss() {
        this.isDismiss = true;
    }

    recover() {
        this.isDismiss = false;
    }
}

// Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, getScholarship) {
        super(university, course, fullName, marks);
        setInterval(() => {
            console.log(this.getScholarship())
        }, 3000)
    }

    getScholarship() {
        return this.getAverageMark() >= 4.0 && this.isDismiss
            ? "Ви отримали 1400 грн. стипендії"
            : "Ви НЕ отримали 1400 грн. стипендії";
    }
}

const userA = new Student("Вища Школа Психотерапії м.Одеса", 1, "Остап Родоманський Бендер", [5, 4, 4, 5]);
const userB = new BudgetStudent("Середня Школа Психотерапії м.Одеса", 2, "Остап Родоманський Бендер", [4, 4, 4, 5]);
userA.marks = 5;

console.log(userA.getAverageMark(userA.marks));
console.log(userB.getInfo())