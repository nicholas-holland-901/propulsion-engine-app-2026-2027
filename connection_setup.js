// connection_setup.js
// menu functionality for the engine serial port connection setup/settings

// main process
function setup_main() {
	updateSerialPortSelect();
}


// handle serial port selection and option reloading
const serialPortSelect = document.getElementById("serialport-select");
const serialPortReloadButton = document.getElementById("setup::reload-serialport-options")


async function updateSerialPortSelect() {
    // remove pre-existing options
	await electronAPI.getSerialPorts().then((ports,err) => {
		// handle errors
		if (err) {
			console.log(err);
			return;
		}
        serialPortSelect.length = 0;
        // TODO(?): make a message appear when there are no serial ports available
        serialPortSelect.add(new Option('none','none'));
		// add available paths
		ports.forEach(port => {
			const newPortOption = new Option(port.path, port.path);
			serialPortSelect.add(newPortOption);
		});
	})
}

serialPortReloadButton.addEventListener("click", updateSerialPortSelect);

const csvPathTextInput = document.getElementById("setup::csv-path");

// handle button start button press
const initEngineCommsButton = document.getElementById("setup::init-engine-comms");

function initEngineCommunication() {
	const path = serialPortSelect.value;
	// check that we have valid port (!= none)
	if (path === 'none') {
		console.log("invalid path");
		alert("ERROR: Invalid serialport path.");
		return;
	}
	// send serial port path
	electronAPI.sendSerialPath(path);
	
	// send message to load new page, including csv path
	//electronAPI.sendLoadMain(csvPathTextInput.value + '.csv');
}


initEngineCommsButton.addEventListener("click", initEngineCommunication);



document.getElementById('setup::cancel_init_engine_comms').addEventListener('click', () => {
	electronAPI.sendLoadMain("setup_renderer.html");
});



setup_main();

