function loadRepos() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.github.com/repositories/73502401');
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.getElementById('res').textContent = xhr.responseText;
		}
	}
	xhr.send();
}