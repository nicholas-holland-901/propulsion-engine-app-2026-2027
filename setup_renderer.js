// setup_renderer.js


// Main menu button functionality :D
document.getElementById('setup::main-controls-panel').addEventListener('click', () => {
	electronAPI.sendLoadMain();
});


document.getElementById('setup::edit-test-sequences').addEventListener('click', () => {
	electronAPI.sendLoadMain();
});


document.getElementById('setup::connection-setup').addEventListener('click', () => {
	electronAPI.sendLoadMain("connection_setup.html");
});

