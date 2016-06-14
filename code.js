
(function(ext) {
    state = 2;
    stateMsg = 'Ready';
    // Code to be run when the user closes the window, reloads the page, etc.    
    ext._shutdown = function() {};
    
    // Shows the status of the extension 0 = red, 1 = yellow, and 2 = green
    ext._getStatus = function() {
        return {status: state, msg: stateMsg};
    };
    ext.say_hello = function() {
	try { console.log("Hello world!"); }
	catch(err) { state = 0; stateMsg = 'Error' }
    };
    ext.say_number = function(number) {
	return number;
    };
    ext.if_string = function(bool, return_true, return_false) {
	if (bool) { return return_true; } else { return return_false }
    };
    ext.true = function() {
	return true;
    };
    ext.when_bool = function(bool, true_or_false) {
	if (true_or_false === 'true') {
	    if (bool) { return true } else { return false }
	} else {
	    if (bool) { return false } else { return true }
	}
    };
    /*ext.set_state(newState, msg) {
	state = newState;
	stateMsg = msg;
    };*/
    ext.equal = function(str1, mode, str2) { 
	if (mode === '==') {return str1 == str2;} else {return str1 != str2}
    };
    // Descriptions of the blocks and menus the extension adds
    var descriptor = {
        blocks: [ 
	[' ', 'Hello world', 'say_hello'], 
	['r', 'Say %n', 'say_number', 2], 
	['r', 'If %b then %s else %s', 'if_string', '', 'true', 'false'], 
	['b', 'True', 'true'], 
	['h', 'When %b becomes %m.trueFalse', 'when_bool', '', 'true'], 
	['b', '%s %m.eeNe %s', 'equal', '', '==', ''],
	//[' ', 'Set stautus to %n with meassage %s', 'set_state', '2', 'Ready']
	],
	menus: {
	trueFalse: ['true', 'false'],
	eeNe: ['==', '=/='],
	eNe: ['=', '/=']
	}
    };
    // Register the extension
    ScratchExtensions.register('Hello World', descriptor, ext);
})({});
