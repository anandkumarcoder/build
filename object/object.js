const output = document.querySelector('#output');



/* Q1
Given an array of objects of student's marks:

A:Print the name and total marks of each student.
B:Print the name of student whose total marks is highest.
C:Print the name of student whose total marks is lowest.
D:Print the average marks of the class in computer subject.

E:Print the grades of all students:
  (i):Grade A if total marks is higher than or equal to 75%,
 (ii):Grade B if higher than or equal to 60%,
 (iii):Grade C if higher than or equal to 35%,
 (iv):Grade D if lower than 35%.
 (V):Print the total number of students passed and their names.
  Pass when total marks is greater than 35%.

*/



const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
    
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

//A:Print the name and total marks of each student.

// for (let i=0; i<studentDetails.length; i++){
    
    
//     let sum = studentDetails[i].maths +  studentDetails[i].science + studentDetails[i].english + studentDetails[i].computer;
//     totalMarks = Number(sum)
    
    
//   console.log(`name: ${studentDetails[i].name} total marks: ${totalMarks}`) 
 
// }


//B:Print the name of student whose total marks is highest.

