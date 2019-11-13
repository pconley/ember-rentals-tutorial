import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['map-container'],
  mapElement: service(), // somehow injects the service that matches the attr name (mapElement)

  didInsertElement() {
    this._super(...arguments);
    this.mapElement.getMapElement(this.location).then((mapElement) => {
      this.element.append(mapElement);
    });
  }
});
