AFRAME.registerComponent('gesture-handler', {
    schema: {
      enabled: {default: true}
    },
    init: function () {
      this.handleScale = this.handleScale.bind(this);
      this.handleRotation = this.handleRotation.bind(this);
  
      this.el.sceneEl.addEventListener('onefingermove', this.handleRotation);
      this.el.sceneEl.addEventListener('twofingermove', this.handleScale);
    },
  
    remove: function () {
      this.el.sceneEl.removeEventListener('onefingermove', this.handleRotation);
      this.el.sceneEl.removeEventListener('twofingermove', this.handleScale);
    },
  
    handleRotation: function (event) {
      if (this.data.enabled) {
        this.el.object3D.rotation.y += event.detail.positionChange.x * 0.005;
      }
    },
  
    handleScale: function (event) {
      if (this.data.enabled) {
        this.el.object3D.scale.x *= 1 + event.detail.spreadChange / 400;
        this.el.object3D.scale.y *= 1 + event.detail.spreadChange / 400;
        this.el.object3D.scale.z *= 1 + event.detail.spreadChange / 400;
      }
    }
  });
  