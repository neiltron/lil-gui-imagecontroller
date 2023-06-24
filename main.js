import * as GUI from 'lil-gui';

class ImageController extends GUI.Controller {
  constructor(parent, object, property) {
    super(parent, object, property, 'image-controller');

    this.fileReader = new FileReader();

    this.$input = document.createElement('input');
    this.$input.type = 'file';
    this.$input.style.visibility = 'hidden';

    this.$imageEl = document.createElement('img');
    this.$imageEl.style.minWidth = '20px';
    this.$imageEl.style.minHeight = '20px';
    this.$imageEl.style.maxWidth = '50px';
    this.$imageEl.style.maxHeight = '50px';

    this.$input.addEventListener('change', this.handleFileUpload.bind(this));
    this.fileReader.addEventListener('loadend', this.handleFileLoaded.bind(this));
    
    this.$imageEl.addEventListener('click', () => {
      this.$input.click();
    });

    this.$widget.append(this.$imageEl);
    this.$widget.append(this.$input);
  }

  handleFileUpload() {
    const file = this.$input.files[0];
    if (!file) {
      return;
    }

    this.$input.value = '';
    this.fileReader.readAsDataURL(file);
  }

  handleFileLoaded() {
    this.handleFilePath(this.fileReader.result);
  }

  handleFilePath(filePath) {
    if (!filePath) {
      return;
    }
    this.$imageEl.src = filePath;
    this.setValue(filePath);
  }
}

export { ImageController }