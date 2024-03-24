function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60) {
        return 'B';
    } else if (mark >= 50) {
        return 'C';
    } else if (mark >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

function main() {
    while (true) {
        let input = prompt("Enter the student's mark (0-100):");
        let mark = parseFloat(input);
        
        if (!isNaN(mark) && mark >= 0 && mark <= 100) {
            let grade = calculateGrade(mark);
            alert("The student's grade is: " + grade);
            break;
        } else {
            alert("Invalid input. Please enter a valid number between 0 and 100.");
        }
    }
}

main();