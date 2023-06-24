# lil-gui-imagecontroller

An image module for [lil-gui](https://github.com/georgealways/lil-gui). Inspired by [dat.gui.image](https://github.com/Jeremboo/dat.gui.image) by [@jeremboo](https://github.com/Jeremboo).

## Installation

```bash
npm install lil-gui-imagecontroller
```

## Usage

```javascript
import { GUI } from 'lil-gui';
import { ImageController } from 'lil-gui-imagecontroller';

const gui = new GUI();
const image = new Image();
image.src = 'cool.gif';

const imageController = new ImageController(gui, image, 'src')
    .name(propName)
    .onChange((image, firstTime) => {
        /*
            do something nice with your lil image. maybe update
            the DOM or swap out a threejs texture.
        */
    });
```

This creates a new `lil-gui` instance and an `ImageController` instance attached to the image's `src` value.