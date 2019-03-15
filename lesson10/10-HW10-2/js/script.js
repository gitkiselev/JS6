class Options {
    constructor(height, width, bg, fontSize, textAlign) {
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }
    
    createElement(text) {
      let node = document.createElement('div');
      node.textContent = text;
      node.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; text-align: ${this.textAlign}`
	  document.body.appendChild(node);
    }
  }
  
  const div = new Options('120px', '240px', '#fa8075', '22px', 'center');
  div.createElement('Some text');