'use strict';
class Track {
	constructor(color, factor) {
		this.color = color;
		this.factor = factor;
	}
}
class Asphalt extends Track {
	constructor(color, factor) {
		super(color, factor);
		this.name = 'Asphalt'
		this.traceClass = 'asphalt-trace';
	}
	getTrace() {
		let trace = document.createElement('div');
		trace.setAttribute('class', 'trace asphalt-trace');
		return trace;
	}
}

class Ice extends Track {
	constructor(color, factor) {
		super(color, factor);
		this.name = 'Ice';
		this.traceClass = 'ice-trace'
	}
	getTrace() {
		let trace = document.createElement('div');
		trace.setAttribute('class', 'trace ice-trace');
		return trace;
	}
}

class Ground extends Track {
	constructor(color, factor) {
		super(color, factor);
		this.name = 'Ground';
		this.traceClass = 'ground-trace'
	}
	getTrace() {
		let trace = document.createElement('div');
		trace.setAttribute('class', 'trace ground-trace');
		return trace;
	}
}
