interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
}

const student1: Student = {
	firstName: 'James',
	lastName: 'Bond',
	age: 20,
	location: 'Nairobi',
}
const student2: Student = {
	firstName: 'Jane',
	lastName: 'Bond',
	age: 22,
	location: 'Mombasa',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

table.innerHTML += `<tr>
						<th>First Name</th>
						<th>Location</th>
					</tr>`

studentsList.forEach((student) => {
	table.innerHTML += `<tr>
							<td>${student.firstName}</td>
							<td>${student.location}</td>
						</tr>`
})

document.body.appendChild(table);