function MultiLiner() {
	
	this.myLinesStartWith = "";
	this.myLinesEndWith = "";
	this.myStringToWrap = "";
	
	this.setLineStart = function(aLineStart){
		this.myLinesStartWith = aLineStart;
	}
	
	this.setLineEnd = function(aLineEnd){
		this.myLinesEndWith = aLineEnd;
	}
	
	this.setStringToWrap = function(aStringToWrap){
		this.myStringToWrap = aStringToWrap;
	}
	
	this.getLineStart = function(){
		return this.myLinesStartWith;
	}
	
	this.getLineEnd = function(){
		return this.myLinesEndWith;
	}
	
	this.getStringToWrap = function(){
		return this.myStringToWrap;
	}
	
	this.wrapString = function(){
		this.myStringToWrap = this.myStringToWrap.replace(/\r\n|\r|\n/g, this.myLinesEndWith + "\n" + this.myLinesStartWith);
		this.myStringToWrap = this.myLinesStartWith + this.myStringToWrap + this.myLinesEndWith;
		
		return this.myStringToWrap;
	}
	
}