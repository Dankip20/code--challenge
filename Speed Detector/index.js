function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (points > 12) {
            return "License suspended";
        } else {
            return "Points: " + points;
        }
    }
}

function main() {
    let speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));
    
    if (!isNaN(speed)) {
        let result = calculateDemeritPoints(speed);
        alert(result);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

main();