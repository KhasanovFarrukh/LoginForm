let login = document.getElementById('login');
let password = document.getElementById('password');
let auth = document.getElementById('auth');
let reg = document.getElementById('reg');
let forget = document.getElementById('forget');
let startButton = document.getElementById('startpage');
let startPage = document.getElementById('world');
let form = document.getElementById('form');
let newdate = new Date();
let date = newdate.getDate();
let month = newdate.getMonth() + 1;
let year = newdate.getFullYear();
let adminPass = date + '.' + month + '.' + year;
let adminLogin = 'Farrux';


auth.addEventListener('click', authorization);
reg.addEventListener('click', registration);
forget.addEventListener('click', forgeting);
startButton.addEventListener('click', startpages);

function forgeting() {
	alert('Login: Farrux\nParolni topish uchun bugungi kun, oy, yilni quyidagi ko\'rinishda kiriting 1.1.2020');
}

function authorization() {
	if ((login.value != adminLogin) || (password.value != adminPass.toString())) {
		alert('Login yoki parol noto\'g\'ri kiritildi.\nHarflarning katta yoki kichikligiga e`tibor bering');
		console.log(adminPass.toString());
		password.value = null;
		login.value = null;
	} else {
		password.value = null;
		login.value = null;
		startPage.style.display = 'block';
		form.style.display = 'none';
	}
}

function registration() {
	alert('Ro\'yhatdan o\'tish vaqtincha to\'xtatilgan!');
}

function startpages() {
	form.style.display = 'block';
	startPage.style.display = 'none';
}

//For testing
