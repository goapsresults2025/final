const availableChoices = [
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "Machine Intelligence and Automation" },
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "Artificial Intelligence" },
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "Energy and Environmental Engineering" },
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "Industrial Engineering and Data Analytics" },
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "Renewable Energy" },
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "Signal Processing and Machine Learning" },
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "VLSI Design" },
  { institute: "Dr. B R Ambedkar National Institute of Technology, Jalandhar", program: "Electric Vehicle Design" },
  { institute: "Malaviya National Institute of Technology Jaipur", program: "Embedded Systems" },
  { institute: "Malaviya National Institute of Technology Jaipur", program: "Electronics and Communication Engineering" },
  { institute: "Malaviya National Institute of Technology Jaipur", program: "Materials Engineering" },
  { institute: "Malaviya National Institute of Technology Jaipur", program: "Renewable Energy" },
  { institute: "Malaviya National Institute of Technology Jaipur", program: "VLSI Design" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Artificial Intelligence" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Automation and Robotics" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Communication Systems" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Geoinformatics & Its Applications" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Industrial Engineering & Management" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Nanotechnology" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Renewable Energy" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "VLSI Design & Embedded Systems" },
  { institute: "Maulana Azad National Institute of Technology Bhopal", program: "Smart Manufacturing" },
  { institute: "Motilal Nehru National Institute of Technology Allahabad", program: "Biomedical Engineering" },
  { institute: "Motilal Nehru National Institute of Technology Allahabad", program: "Control & Instrumentation" },
  { institute: "Motilal Nehru National Institute of Technology Allahabad", program: "Communication Systems" },
  { institute: "Motilal Nehru National Institute of Technology Allahabad", program: "Geoinformatics" },
  { institute: "Motilal Nehru National Institute of Technology Allahabad", program: "Information Security" },
  { institute: "Motilal Nehru National Institute of Technology Allahabad", program: "Microelectronics & VLSI Design" },
  { institute: "Motilal Nehru National Institute of Technology Allahabad", program: "Signal Processing" },
  { institute: "National Institute of Technology  Agartala", program: "Communication Systems & Signal Processing" },
  { institute: "National Institute of Technology  Agartala", program: "Instrumentation Engineering" },
  { institute: "National Institute of Technology  Agartala", program: "Integrated Energy System" },
  { institute: "National Institute of Technology  Agartala", program: "Power Electronics & Drives" },
  { institute: "National Institute of Technology  Agartala", program: "VLSI Design" },
  { institute: "National Institute of Technology Calicut", program: "Electronics Design & Technology" },
  { institute: "National Institute of Technology Calicut", program: "Microelectronics & VLSI Design" },
  { institute: "National Institute of Technology Calicut", program: "Signal Processing" },
  { institute: "National Institute of Technology Calicut", program: "Telecommunication" },
  { institute: "National Institute of Technology Delhi", program: "Electronics and Communication Engineering" },
  { institute: "National Institute of Technology Delhi", program: "Electronics and Communication Engineering with specialisation in VLSI" },
  { institute: "National Institute of Technology Durgapur", program: "Robotics & Artificial Intelligence" },
  { institute: "National Institute of Technology Durgapur", program: "Sustainable Materials & Technology" },
  { institute: "National Institute of Technology Durgapur", program: "Microelectronics & VLSI" },
  { institute: "National Institute of Technology Durgapur", program: "Next Generation Communication and Networks" },
  { institute: "National Institute of Technology Durgapur", program: "Operations Research" },
  { institute: "National Institute of Technology Goa", program: "Power Electronics & Power Systems" },
  { institute: "National Institute of Technology Goa", program: "VLSI" },
  { institute: "National Institute of Technology Hamirpur", program: "Energy Technology" },
  { institute: "National Institute of Technology Hamirpur", program: "Electronics & Communication Engineering (Communications System and Networks)" },
  { institute: "National Institute of Technology Hamirpur", program: "Electronics & Communication Engineering (VLSI Design)" },
  { institute: "National Institute of Technology Hamirpur", program: "Electrical Engineering (Signal Processing & Control)" },
  { institute: "National Institute of Technology Karnataka, Surathkal", program: "Computational and Data Science" },
  { institute: "National Institute of Technology Karnataka, Surathkal", program: "Communication Engineering and Networks" },
  { institute: "National Institute of Technology Karnataka, Surathkal", program: "Mechatronics Engineering" },
  { institute: "National Institute of Technology Karnataka, Surathkal", program: "Nanotechnology" },
  { institute: "National Institute of Technology Karnataka, Surathkal", program: "Signal Processing and Machine Learning" },
  { institute: "National Institute of Technology Karnataka, Surathkal", program: "VLSI Design" },
  { institute: "National Institute of Technology Meghalaya", program: "VLSI & Embedded Systems" },
  { institute: "National Institute of Technology Nagaland", program: "Communication Engineering" },
  { institute: "National Institute of Technology Nagaland", program: "VLSI Systems" },
  { institute: "National Institute of Technology Patna", program: "Next Generation Wireless Technologies" },
  { institute: "National Institute of Technology Patna", program: "Microelectronics and VLSI System Design" },
  { institute: "National Institute of Technology Puducherry", program: "VLSI Design" },
  { institute: "National Institute of Technology Puducherry", program: "Computer Science & Engineering" },
  { institute: "National Institute of Technology Raipur", program: "Medical Devices with a specialization in Critical Care and IVD" },
  { institute: "National Institute of Technology Raipur", program: "Information Technology" },
  { institute: "National Institute of Technology Raipur", program: "Industrial Engineering & Management" },
  { institute: "National Institute of Technology Raipur", program: "VLSI & Embedded Systems" },
  { institute: "National Institute of Technology Sikkim", program: "M.Tech in Artificial Intelligence and Machine Learning" },
  { institute: "National Institute of Technology Sikkim", program: "M.Tech in VLSI and Embedded Systems" },
  { institute: "National Institute of Technology Sikkim", program: "M.Tech in Communication and Signal Processing" },
  { institute: "National Institute of Technology Arunachal Pradesh", program: "Innovation and Entrepreneurship" },
  { institute: "National Institute of Technology, Jamshedpur", program: "VLSI and Embedded Systems Engineering" },
  { institute: "National Institute of Technology, Jamshedpur", program: "Data Science and Engineering" },
  { institute: "National Institute of Technology, Jamshedpur", program: "Communication Systems Engineering" },
  { institute: "National Institute of Technology, Kurukshetra", program: "Computer Engineering (Cyber Security)" },
  { institute: "National Institute of Technology, Kurukshetra", program: "Control System" },
  { institute: "National Institute of Technology, Kurukshetra", program: "Communication Systems" },
  { institute: "National Institute of Technology, Kurukshetra", program: "Renewable Energy Systems" },
  { institute: "National Institute of Technology, Kurukshetra", program: "Embedded System Design" },
  { institute: "National Institute of Technology, Kurukshetra", program: "VLSI Design" },
  { institute: "National Institute of Technology, Manipur", program: "Communication & Signal Processing" },
  { institute: "National Institute of Technology, Manipur", program: "VLSI Design & Embedded Systems" },
  { institute: "National Institute of Technology Mizoram", program: "Microelectronics and VLSI System Design" },
  { institute: "National Institute of Technology, Rourkela", program: "RF and Microwave systems" },
  { institute: "National Institute of Technology, Rourkela", program: "Biomedical Engineering" },
  { institute: "National Institute of Technology, Rourkela", program: "Communication & Networks" },
  { institute: "National Institute of Technology, Rourkela", program: "Electronic Systems & Communication" },
  { institute: "National Institute of Technology, Rourkela", program: "Electronics and Instrumentation Engineering" },
  { institute: "National Institute of Technology, Rourkela", program: "Industrial Ceramics" },
  { institute: "National Institute of Technology, Rourkela", program: "Signal & Image Processing" },
  { institute: "National Institute of Technology, Rourkela", program: "VLSI Design & Embedded Systems" },
  { institute: "National Institute of Technology, Silchar", program: "Power Electronics and Drives" },
  { institute: "National Institute of Technology, Silchar", program: "Control & Industrial Automation" },
  { institute: "National Institute of Technology, Silchar", program: "Instrumentation Engineering" },
  { institute: "National Institute of Technology, Silchar", program: "Microelectronics & VLSI Design" },
  { institute: "National Institute of Technology, Silchar", program: "Power & Energy Systems Engineering" },
  { institute: "National Institute of Technology, Silchar", program: "RF and Terahertz Communications" },
  { institute: "National Institute of Technology, Silchar", program: "Renewable Energy" },
  { institute: "National Institute of Technology, Silchar", program: "Communication & Signal Processing" },
  { institute: "National Institute of Technology, Srinagar", program: "Microelectronics" },
  { institute: "National Institute of Technology, Srinagar", program: "Communication & Signal Processing" },
  { institute: "National Institute of Technology, Tiruchirappalli", program: "Communication Systems" },
  { institute: "National Institute of Technology, Tiruchirappalli", program: "Industrial Automation" },
  { institute: "National Institute of Technology, Tiruchirappalli", program: "Material Science & Engineering" },
  { institute: "National Institute of Technology, Tiruchirappalli", program: "Non Destructive Testing" },
  { institute: "National Institute of Technology, Tiruchirappalli", program: "VLSI System" },
  { institute: "National Institute of Technology Uttarakhand", program: "Power Electronics & Electric Vehicle" },
  { institute: "National Institute of Technology Uttarakhand", program: "Power System & Renewable Energy" },
  { institute: "National Institute of Technology Uttarakhand", program: "Signal Processing and Communication System" },
  { institute: "National Institute of Technology Uttarakhand", program: "Artificial Intelligence and Machine Learning" },
  { institute: "National Institute of Technology Uttarakhand", program: "Microelectronics & VLSI Design" },
  { institute: "National Institute of Technology, Warangal", program: "Electronics and Communication Engineering -  Embedded & Machine Learning Systems (EMLS)" },
  { institute: "National Institute of Technology, Warangal", program: "Advanced Communication Systems" },
  { institute: "National Institute of Technology, Warangal", program: "VLSI Systems Design" },
  { institute: "Sardar Vallabhbhai National Institute of Technology, Surat", program: "Control and Automation" },
  { institute: "Sardar Vallabhbhai National Institute of Technology, Surat", program: "Communication System" },
  { institute: "Sardar Vallabhbhai National Institute of Technology, Surat", program: "Power Electronics & Electrical Drives" },
  { institute: "Sardar Vallabhbhai National Institute of Technology, Surat", program: "Power System" },
  { institute: "Sardar Vallabhbhai National Institute of Technology, Surat", program: "VLSI & Embedded Systems" },
  { institute: "Visvesvaraya National Institute of Technology, Nagpur", program: "Biomedical Engineering" },
  { institute: "Visvesvaraya National Institute of Technology, Nagpur", program: "Communication System Engineering" },
  { institute: "Visvesvaraya National Institute of Technology, Nagpur", program: "VLSI Design" },
  { institute: "National Institute of Technology Andhra Pradesh", program: "Advanced Communication Systems and Signal Processing" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "RF and Photonics" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Machine Learning in Materials Engineering" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Sustainable Energy Technology and Development" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Biomedical Engineering" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Communication Engineering & Signal Processing" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Control & Industrial Automation" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Aerospace Engineering" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Mechatronics" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Information Technology" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Materials Science and Engineering" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "Microelectronics & VLSI Design" },
  { institute: "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah", program: "VLSI Design" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "IC Design and Technology" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "Computer Science and Engineering" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "Autonomous Systems and Machine Intelligence" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "Dual Degree Program M.Tech. (CSE) + Ph.D. in CSE" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "Dual Degree Program M.Tech. (IT) + Ph.D. in IT" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "Information and Cyber Security" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "Information Technology" },
  { institute: "Atal Bihari Vajpayee Indian Institute of Information Technology & Management Gwalior", program: "Wireless Networks and Computing" },
    { institute: "Indian Institute of Information Technology, Allahabad", program: "M.Tech. ECE with specialization in Microelectronics" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "M.Tech. ECE with specialization in Communication Engineering" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "Dual Degree M.Tech. –PhD in ECE with specialization in Microelectronics" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "M.Tech. IT with specialization in Machine Learning, Robotics and Human Computer Interaction Group" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "Dual Degree M.Tech. - Ph.D in IT with specialization in Machine Learning, Robotics and Human Computer Interaction Group" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "M.Tech. IT with specialization in Software and Data Engineering Group" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "Dual Degree M.Tech. - Ph.D in IT with specialization in Software and Data Engineering Group" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "M.Tech. IT with specialization in Network and Security Group" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "Dual Degree M.Tech. - Ph.D in IT with specialization in Network and Security Group" },
  { institute: "Indian Institute of Information Technology, Allahabad", program: "M.Tech. Biomedical Engineering" },
  { institute: "Indian Institute of Information Technology, Design & Manufacturing Kancheepuram, Chennai", program: "Electronics and Communication Engineering with Specialization in RF and Microwave Engineering" },
  { institute: "Indian Institute of Information Technology, Design & Manufacturing Kancheepuram, Chennai", program: "Electronics and Communication Engineering with Specialization in Microelectronics and VLSI Systems" },
  { institute: "Indian Institute of Information Technology, Design & Manufacturing Kancheepuram, Chennai", program: "Electronics and Communication Engineering with Specialization in Communication Systems" },
  { institute: "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacturing Jabalpur", program: "Mechatronics" },
  { institute: "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacturing Jabalpur", program: "Nanoelectronics and VLSI Design" },
  { institute: "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacturing Jabalpur", program: "Power & Control" },
  { institute: "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design & Manufacturing Jabalpur", program: "Communication & Signal Processing" },
  { institute: "Indian Institute of Information Technology Tiruchirappalli", program: "VLSI Systems" },
  { institute: "Indian Institute of Information Technology, Kalyani", program: "VLSI & Embedded Systems" },
  { institute: "Indian Institute of Information Technology, Design and Manufacturing, Kurnool", program: "M.Tech. Drones and IoT" },
  { institute: "Indian Institute of Information Technology, Design and Manufacturing, Kurnool", program: "VLSI & Embedded Systems" },
  { institute: "Indian Institute of Information Technology, Pune", program: "Electronics and Communication Engineering" },
  { institute: "Indian Institute of Information Technology, Bhagalpur, Bihar", program: "VLSI & Embedded Systems" },
  { institute: "Indian Institute of Information Technology, Una", program: "M. Tech. Microelectronics and VLSI Design" },
  { institute: "Indian Institute of Information Technology, Kota", program: "Electronics and Communication Engineering with specialization in Semiconductor Technology" },
  { institute: "Indian Institute of Information Technology, Bhopal", program: "M.Tech in Artificial Intelligence" },
  { institute: "Indian Institute of Information Technology, Bhopal", program: "M.Tech in Data Science" },
  { institute: "Indian Institute of Information Technology, Bhopal", program: "M.Tech in Cyber Physical System" },
  { institute: "Indian Institute of Information Technology, Vadodara, Gandhinagar Campus", program: "Artificial Intelligence" },
  { institute: "Indian Institute of Information Technology, Vadodara, Gandhinagar Campus", program: "Data Science" },
  { institute: "Indian Institute of Information Technology, Vadodara, Diu Campus", program: "Artificial Intelligence" },
  { institute: "Indian Institute of Information Technology (IIIT) Surat", program: "Electronics and Communication Engineering (VLSI)" },
  { institute: "National Institute of Electronics and Information Technology, Aurangabad", program: "Embedded System and VLSI Design" },
  { institute: "National Institute of Electronics and Information Technology, Aurangabad", program: "Artificial Intelligence" },
  { institute: "Sant Longowal Institute of Engineering and Technology", program: "Electronics and Communication Engineering" },
  { institute: "Sant Longowal Institute of Engineering and Technology", program: "VLSI Design" },
  { institute: "Sant Longowal Institute of Engineering and Technology", program: "Computer Science & Engineering" },
  { institute: "International Institute of Information Technology, Naya Raipur", program: "Electronics and Communication Engineering" },
  { institute: "Punjab Engineering College, Chandigarh", program: "Quantum Materials & Technology" },
  { institute: "Punjab Engineering College, Chandigarh", program: "Electronics (VLSI Design)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Laser and Electro Optics" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Electronics and Communication Engineering (Defence and Space Electronics)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Electronics and Communication Engineering (Signal Processing and AI)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Electronics and Communication Engineering (Semiconductor Chip Design)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Industrial Systems Engineering" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Cyber Security" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Aerospace Engineering (Guided Missiles)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Automation and Robotics" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Aerospace Engineering (UAVs)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Materials Engineering" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Sensor Technology" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Quantum Computing" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Electronics and Communication  Engineering (Radar and Communications)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Electronics and Communication  Engineering (VLSI and Embedded System)" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Modeling and Simulation" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Data Science" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Renewable Energy" },
  { institute: "Defence Institute of Advanced Technology (Deemed to be University), Girinagar, Pune", program: "Computer Science & Engineering (Artificial Intelligence)" },
  { institute: "Guru Ghasidas Vishwavidyalaya, Bilaspur", program: "Electronics and Communication Engineering" },
  { institute: "Guru Ghasidas Vishwavidyalaya, Bilaspur", program: "Information Technology" },
  { institute: "Guru Ghasidas Vishwavidyalaya, Bilaspur", program: "CAD/CAM-ROBOTICS" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Control Systems" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Digital Signal Processing" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "RF and Microwave Engineering" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "VLSI and Microsystems" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Master of Science in Astronomy and Astrophysics" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Earth System Science" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Optical Engineering" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Quantum Technology" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Geoinformatics" },
  { institute: "Indian Institute of Space Science and Technology, Thiruvananthapuram", program: "Power Electronics" },
  { institute: "National Institute of Technical Teachers Training & Research, Kolkata", program: "Intelligent Control Systems with Pedagogy" },
  { institute: "National Institute of Technical Teachers Training & Research, Kolkata", program: "Engineering Education" },
  { institute: "National Institute of Technical Teacher’s Training and Research (NITTTR), Bhopal", program: "M. Tech. in VLSI & Microelectronics" },
  { institute: "Jawaharlal Nehru University, New Delhi", program: "Electronics and Communication Engineering" },
  { institute: "NIELIT Deemed to be University- Ropar", program: "Automotive Electronics" },
  { institute: "NIELIT Deemed to be University- Ropar", program: "Data Engineering" },
  { institute: "NIELIT Deemed to be University- Ropar", program: "Cyber Forensics and Information Security" },
  { institute: "NIELIT Deemed to be University- Ropar", program: "IOT and Sensor Systems" },
  { institute: "NIELIT Deemed to be University- Ropar", program: "Artificial Intelligence" },
  { institute: "NIELIT Deemed to be University- Gorakhpur", program: "VLSI and Embedded Systems Design" },
  { institute: "NIELIT Deemed to be University- Gorakhpur", program: "Electronics Design & Technology" },
  { institute: "NIELIT Deemed to be University- Srinagar", program: "Cyber Forensics" },
  { institute: "National Institute of Electronics and Information Technology, Calicut", program: "Electronics Design technology" },
  { institute: "National Institute of Electronics and Information Technology, Calicut", program: "Automotive Electronics" },
  { institute: "National Institute of Electronics and Information Technology, Calicut", program: "Embedded Systems" },
  { institute: "NIELIT Deemed to be University Agartala", program: "Data Engineering" }
];
let filledChoices = [];

function renderAvailableChoices() {
  const tbody = document.getElementById("availableChoices");
  tbody.innerHTML = "";
  availableChoices.forEach((choice, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><b>${choice.institute}</b><br><small>Institute Type: National Institute of Technology</small></td>
      <td>${choice.program}</td>
      <td><button onclick="addChoice(${index})">Add</button></td>
    `;
    tbody.appendChild(row);
  });
}

function addChoice(index) {
  const choice = availableChoices[index];
  filledChoices.push(choice);
  renderFilledChoices();
}

function removeChoice(index) {
  filledChoices.splice(index, 1);
  renderFilledChoices();
}

function renderFilledChoices() {
  const tbody = document.getElementById("filledChoices");
  tbody.innerHTML = "";
  filledChoices.forEach((choice, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${choice.institute}</td>
      <td>${choice.program}</td>
      <td>${index + 1}</td>
      <td><button onclick="removeChoice(${index})">Remove</button></td>
      <td><button onclick="moveUp(${index})">Up</button></td>
      <td><button onclick="moveDown(${index})">Down</button></td>
    `;
    tbody.appendChild(row);
  });

  document.querySelector(".status span:nth-child(1)").textContent = `Total selected choice(s) to fill : ${filledChoices.length}`;
  document.querySelector(".status span:nth-child(2)").textContent = `Total saved choice(s) : ${filledChoices.length}`;
}

function moveUp(index) {
  if (index === 0) return;
  [filledChoices[index - 1], filledChoices[index]] = [filledChoices[index], filledChoices[index - 1]];
  renderFilledChoices();
}

function moveDown(index) {
  if (index === filledChoices.length - 1) return;
  [filledChoices[index + 1], filledChoices[index]] = [filledChoices[index], filledChoices[index + 1]];
  renderFilledChoices();
}

renderAvailableChoices();

// Countdown timer logic
let seconds = 964;
const timer = document.getElementById("timer");
setInterval(() => {
  seconds--;
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  timer.textContent = `${min}:${sec}`;
}, 1000);