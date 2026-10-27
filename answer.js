// Question 1: Value Detective

function describeValue(value){
    if(value){
        return typeof(value) + " | truthy";
    }
    else{
        return typeof(value) + " | falsy";
    }
}


// Question 2: Bangladesh Weekend Machine

function getDayType(day){
    switch(day){
        case "Friday":
        case "Saturday":
            return "Weekend";
        case "Sunday":
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}  

// Question 3: Username Gatekeeper

function validateUsername(username){
    if(username.length < 4){
        return "Too Short";
    }
    else if(username.includes(" ")){
        return "No Spaces Allowed";
    }
    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}

// Question 4: Dhaka CNG Fare Meter 

function getCngFare(distance, isNight=false, waitingMinutes = 0) {
    let baseFare = 50;
    let perKmFare = 15;
    let waitingFarePerMinute = 2;
    distance = distance < 2 ? 0 : distance - 2;

    let totalFare = baseFare + (distance * perKmFare) + (waitingMinutes * waitingFarePerMinute);

    if (isNight) {
        totalFare *= 1.2; // 20% increase for night time
    }
    return totalFare;
}

//Question 5: Run Chase Commentator

function getChaseVerdict(target, scored, ballsLeft) {

    let runsNeeded = target - scored;
    if(runsNeeded <= 0) {
        return "Won";
    }
    else if(ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    if(requiredRate <= 6) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    }
    else if(requiredRate <= 12 && requiredRate > 6) {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    }
    else {
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }
}