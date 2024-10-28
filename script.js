document.getElementById("calculate").addEventListener("click", calculator);

function calculator() {
  let exams = Number(document.getElementById("major-exams").value);
  let minorAssignments1 = Number(
    document.getElementById("minor-assignments-1").value
  );
  let minorAssignments2 = Number(
    document.getElementById("minor-assignments-2").value
  );
  let AFL = Number(document.getElementById("AFL").value);
  let teacherAwarded = Number(document.getElementById("teacher-awarded").value);

  var grade_calc =
    (exams + minorAssignments1 + minorAssignments2 + AFL + teacherAwarded) / 5;

  document.getElementById("answer").innerHTML = grade_calc;
}
