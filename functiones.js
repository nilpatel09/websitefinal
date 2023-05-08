function submitAttendance() {
    var name = document.getElementById("student-name").value;
    var id = document.getElementById("student-id").value;
    var date = document.getElementById("attendance-date").value;

    if (name == "" || id == "" || date == "") {
        alert("Please fill in all fields.");
    } else {
        // Save the data to local storage
        var attendance = {
            name: name,
            id: id,
            date: date
        };

        localStorage.setItem("attendance", JSON.stringify(attendance));

        // Clear the form fields
        document.getElementById("student-name").value = "";
        document.getElementById("student-id").value = "";
        document.getElementById("attendance-date").value = "";

        alert("Attendance recorded successfully.");
    }
}
