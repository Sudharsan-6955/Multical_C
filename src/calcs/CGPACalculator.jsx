import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CGPACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', grade: '', credits: '' }
  ]);
  const [cgpa, setCGPA] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);

  const gradePoints = {
    'A+': 10,
    'A': 9,
    'B+': 8,
    'B': 7,
    'C+': 6,
    'C': 5,
    'D': 4,
    'F': 0
  };

  const addSubject = () => {
    const newSubject = {
      id: subjects.length + 1,
      name: '',
      grade: '',
      credits: ''
    };
    setSubjects([...subjects, newSubject]);
  };

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    subjects.forEach(subject => {
      const credits = parseFloat(subject.credits) || 0;
      const gradePoint = gradePoints[subject.grade] || 0;
      
      if (credits > 0 && subject.grade) {
        totalGradePoints += gradePoint * credits;
        totalCreditHours += credits;
      }
    });

    const calculatedCGPA = totalCreditHours > 0 ? (totalGradePoints / totalCreditHours).toFixed(2) : 0;
    setCGPA(calculatedCGPA);
    setTotalCredits(totalCreditHours);
  };

  const getGradeColor = (cgpa) => {
    if (cgpa >= 9) return 'text-green-600';
    if (cgpa >= 8) return 'text-blue-600';
    if (cgpa >= 7) return 'text-yellow-600';
    if (cgpa >= 6) return 'text-orange-600';
    return 'text-red-600';
  };

  const getPerformanceLevel = (cgpa) => {
    if (cgpa >= 9) return 'Outstanding';
    if (cgpa >= 8) return 'Excellent';
    if (cgpa >= 7) return 'Very Good';
    if (cgpa >= 6) return 'Good';
    if (cgpa >= 5) return 'Average';
    return 'Below Average';
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 px-4">🎓 CGPA Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mx-2 sm:mx-0">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Add Your Subjects</h3>
            
            {subjects.map((subject, index) => (
              <div key={subject.id} className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4 p-3 bg-gray-50 rounded">
                <input
                  type="text"
                  placeholder="Subject Name"
                  value={subject.name}
                  onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
                
                <select
                  value={subject.grade}
                  onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Grade</option>
                  <option value="A+">A+ (10)</option>
                  <option value="A">A (9)</option>
                  <option value="B+">B+ (8)</option>
                  <option value="B">B (7)</option>
                  <option value="C+">C+ (6)</option>
                  <option value="C">C (5)</option>
                  <option value="D">D (4)</option>
                  <option value="F">F (0)</option>
                </select>
                
                <input
                  type="number"
                  placeholder="Credits"
                  value={subject.credits}
                  onChange={(e) => updateSubject(subject.id, 'credits', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  min="0"
                  step="0.5"
                />
                
                <button
                  onClick={() => removeSubject(subject.id)}
                  disabled={subjects.length === 1}
                  className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={addSubject}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Add Subject
            </button>
            
            <button
              onClick={calculateCGPA}
              className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Calculate CGPA
            </button>
          </div>

          {cgpa > 0 && (
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-semibold mb-3">CGPA Result</h3>
              
              <div className="text-center mb-4">
                <div className={`text-4xl font-bold ${getGradeColor(cgpa)} mb-2`}>
                  {cgpa}
                </div>
                <div className={`text-lg font-semibold ${getGradeColor(cgpa)}`}>
                  {getPerformanceLevel(cgpa)}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Total Credits:</span>
                  <span className="font-bold">{totalCredits}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Subjects:</span>
                  <span className="font-bold">{subjects.filter(s => s.grade && s.credits).length}</span>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-600">
                <h4 className="font-semibold mb-2">Grade Scale:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div>A+: 10 points</div>
                  <div>A: 9 points</div>
                  <div>B+: 8 points</div>
                  <div>B: 7 points</div>
                  <div>C+: 6 points</div>
                  <div>C: 5 points</div>
                  <div>D: 4 points</div>
                  <div>F: 0 points</div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">📚 Real-Time Use Cases:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Track semester performance and academic progress</li>
              <li>• Plan future course selections to improve CGPA</li>
              <li>• Meet scholarship or graduation requirements</li>
              <li>• Prepare for job applications and higher studies</li>
              <li>• Set academic goals and monitor achievements</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-6 px-4">
          <Link to="/calculators" className="text-white underline hover:text-blue-200 inline-block py-2 px-4 rounded transition-colors text-sm sm:text-base">
            Back to Calculators
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;
