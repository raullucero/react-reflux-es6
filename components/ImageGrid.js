import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/imagestore';

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  render: function() {
      if (this.state.imagestore) {
        return <div>
          {
            this.state.imagestore.map((image) => {
              return <div className="image">
                <a href={ image.link }>
                    <img src={ image.media.m }></img>
                </a>
              </div>
          })
        }
        </div>
      }
      else {
          return (<p>No hay imágenes</p>)
      }
  }
});

export default ImageGrid
