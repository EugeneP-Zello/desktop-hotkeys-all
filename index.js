class ShortcutHelper {
	let iohook = require('iohook');
	let win;
	let keyCodes;
	constructor() {
		if(process.platform != 'win32') {
			iohook = require('iohook');		
		} else {
			win = require('desktop-hotkeys');	
		}
	}
	start(enableLogger) {
		;
	}
	stop() {
		;
	}
	registerShortcut(keys, callback, releaseCallback) {
		;
	}
	unregisterShortcut(shortcutId) {
	}
	collectPressedKeyCodes() {
		if(iohook) {
			keyCodes = [];
			iohook.on('keydown', this.onKeyDown);
			iohook.on('keyup', this.onKeyUp);
		}
	}
	pressedKeyCodes() {
		iohook.off('keydown', this.onKeyDown);
		iohook.off('keyup', this.onKeyUp);
		return keyCodes;
	}
	onKeyDown(evt) {
		if (-1 == keyCodes.indexOf(evt.keycode)) {
			keyCodes.push(evt.keycode);
		}
	}
	onKeyUp(evt) {
		const idx = keyCodes.indexOf(evt.keycode);
		if (-1 != idx) {
			keyCodes.splice(idx, 1);
		}
	}
}

const shortcutHelper = new ShortcutHelper();
module.exports = shortcutHelper;