function marksToPoint(marks) {
  if (marks >= 90 && marks <= 100) return 10;
  if (marks >= 80 && marks < 90) return 9;
  if (marks >= 70 && marks < 80) return 8;
  if (marks >= 60 && marks < 70) return 7;
  if (marks >= 50 && marks < 60) return 6;
  if (marks >= 40 && marks < 50) return 5;
  if (marks >= 35 && marks < 40) return 4;
  return 0; // Marks below 35 get no points
}

function calculateSGPA() {
  const courses = [
    { code: 'BCS301', credits: 4 },
    { code: 'BCS302', credits: 4 },
    { code: 'BCS303', credits: 4 },
    { code: 'BCS304', credits: 4 },
    { code: 'BCSL305', credits: 1 },
    { code: 'BCS306', credits: 3 },
    { code: 'BCSK307', credits: 1 }
  ];

  let totalCredits = 0;
  let totalPoints = 0;

  courses.forEach(course => {
    const marks = parseInt(document.getElementById(`grade-${course.code}`).value, 10);
    const points = marksToPoint(marks);
    totalCredits += course.credits;
    totalPoints += points * course.credits;
  });

  const sgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById('result').textContent = `Your SGPA is: ${sgpa}`;
}
