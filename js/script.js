/* LOGIN */

function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let users=JSON.parse(localStorage.getItem("users"))||[];

let user=users.find(u=>u.email===email && u.password===password);

if(user){

localStorage.setItem("loggedUser",email);

window.location.href="dashboard.html";

}else{

alert("Invalid login");

}

}


/* SIGNUP */

function signup(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

let users=JSON.parse(localStorage.getItem("users"))||[];

users.push({name,email,password});

localStorage.setItem("users",JSON.stringify(users));

alert("Account created");

window.location.href="index.html";

}


/* POST RIDE */

function postRide(){

let source=document.getElementById("source").value;
let destination=document.getElementById("destination").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let vehicle=document.getElementById("vehicle").value;
let seats=document.getElementById("seats").value;
let price=document.getElementById("price").value;
let notes=document.getElementById("notes").value;

let rides=JSON.parse(localStorage.getItem("rides"))||[];

let ride={
id:Date.now(),
source,
destination,
date,
time,
vehicle,
seats,
price,
notes
};

rides.push(ride);

localStorage.setItem("rides",JSON.stringify(rides));

alert("Ride posted");

window.location.href="myrides.html";

}


/* DASHBOARD */

function loadDashboard(){

let rides=JSON.parse(localStorage.getItem("rides"))||[];

let total=document.getElementById("totalRides");
let available=document.getElementById("availableRides");

if(total) total.innerText=rides.length;
if(available) available.innerText=rides.length;

let container=document.getElementById("recentRides");

if(container){

container.innerHTML="";

rides.slice(-3).forEach(ride=>{

container.innerHTML+=`
<div class="ride-card">

<h3>${ride.source} → ${ride.destination}</h3>

<p><i class="fa-solid fa-calendar"></i> ${ride.date}</p>

<p><i class="fa-solid fa-clock"></i> ${ride.time}</p>

<p><i class="fa-solid fa-chair"></i> Seats: ${ride.seats}</p>

<p><i class="fa-solid fa-money-bill"></i> ₹${ride.price}</p>

</div>
`;

});

}

}

window.onload=loadDashboard;


/* MY RIDES */

function loadMyRides(){

let rides=JSON.parse(localStorage.getItem("rides"))||[];

let container=document.getElementById("ridesList");

if(!container) return;

container.innerHTML="";

rides.forEach(ride=>{

container.innerHTML+=`

<div class="ride-card">

<h3>${ride.source} → ${ride.destination}</h3>

<p>${ride.date} | ${ride.time}</p>

<p>Seats: ${ride.seats}</p>

<p>Price: ₹${ride.price}</p>

<button onclick="deleteRide(${ride.id})">Delete</button>

</div>

`;

});

}


/* DELETE */

function deleteRide(id){

let rides=JSON.parse(localStorage.getItem("rides"))||[];

rides=rides.filter(r=>r.id!==id);

localStorage.setItem("rides",JSON.stringify(rides));

location.reload();

}


/* SEARCH */

function searchRide(){

let source=document.getElementById("searchSource").value.toLowerCase();
let destination=document.getElementById("searchDestination").value.toLowerCase();

let rides=JSON.parse(localStorage.getItem("rides"))||[];

let results=rides.filter(r=>

r.source.toLowerCase().includes(source) &&
r.destination.toLowerCase().includes(destination)

);

displayRides(results);

}


function displayRides(rides){

let container=document.getElementById("rideResults");

container.innerHTML="";

rides.forEach(ride=>{

container.innerHTML+=`

<div class="ride-card">

<h3>${ride.source} → ${ride.destination}</h3>

<p>${ride.date} | ${ride.time}</p>

<p>Seats: ${ride.seats}</p>

<p>Price: ₹${ride.price}</p>

<button>Request Ride</button>

</div>

`;

});

}


/* PROFILE */

function loadProfile(){

let email=localStorage.getItem("loggedUser");

let users=JSON.parse(localStorage.getItem("users"))||[];

let user=users.find(u=>u.email===email);

if(user){

document.getElementById("profileName").innerText=user.name;
document.getElementById("profileEmail").innerText=user.email;

}

}
function showGreeting(){

let email = localStorage.getItem("loggedUser");
let users = JSON.parse(localStorage.getItem("users")) || [];

let user = users.find(u => u.email === email);

let hour = new Date().getHours();

let greeting = "";

if(hour < 12){
greeting = "Good Morning";
}
else if(hour < 17){
greeting = "Good Afternoon";
}
else{
greeting = "Good Evening";
}

document.getElementById("greeting").innerText =
greeting + ", " + user.name;

}

window.onload = function(){
loadDashboard();
showGreeting();
};
function uploadProfile(event){

let file = event.target.files[0];

let reader = new FileReader();

reader.onload = function(){
localStorage.setItem("profileImage",reader.result);
document.getElementById("profilePic").src = reader.result;
};

reader.readAsDataURL(file);

}


function loadProfile(){

let email = localStorage.getItem("loggedUser");

let users = JSON.parse(localStorage.getItem("users")) || [];

let user = users.find(u => u.email === email);

if(user){

document.getElementById("profileName").innerText = user.name;
document.getElementById("profileEmail").innerText = user.email;

}

let img = localStorage.getItem("profileImage");

if(img){
document.getElementById("profilePic").src = img;
}

}