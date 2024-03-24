# Challenge 2: Speed Detector
# Description
The Speed Detector program takes the speed of a car as input, such as 80 km/h. If the speed matches the speed limit of 70 km/h, it prints "Ok". However, if the speed exceeds the limit, it assigns demerit points to the driver and if the points exceed 12, it logs "License suspended".

# Set Up instructions

* The program takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
* The program should define a function that declares a const speed limit and the default demerit points.
* The program should provide a conditional statement that sets the speed limit and returns "OK", if the speed is input is 70.
* Also, the program adds another conditional statement that checks the users speed input, calculates the demerit points and rounds down the calculated demerit points to the nearest integer.
* For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
* Lastly the program provides a conditional statement that checks the demerits points calculation and if the points exceed 12, it logs "License suspended".