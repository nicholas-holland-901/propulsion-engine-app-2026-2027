// setup_renderer.js
//
// functionality for main menu page


// Main menu button functionality :D
document.getElementById('setup::main-controls-panel').addEventListener('click', () => {
	electronAPI.sendLoadMain("main_controls_panel.html");
});


document.getElementById('setup::edit-test-sequences').addEventListener('click', () => {
	electronAPI.sendLoadMain("test_sequence_editor.html");
});


document.getElementById('setup::connection-setup').addEventListener('click', () => {
	electronAPI.sendLoadMain("connection_setup.html");
});

