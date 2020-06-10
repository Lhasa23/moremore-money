let id: number = parseInt(window.localStorage.getItem('_MaxId') || '0') || 0;

function IDCreator() {
	id++;
	return id;
}

export default IDCreator;
