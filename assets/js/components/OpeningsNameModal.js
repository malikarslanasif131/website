import { Opening } from '@chesslablab/jsblab';
import AbstractComponent from './AbstractComponent.js';
import OpeningsTable from './OpeningsTable.js';

class OpeningsNameModal extends AbstractComponent {
  mount() {
    this.props.form.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(this.props.form);
      const openingsTable = new OpeningsTable(
        this.props.form.querySelector('table'),
        {
          modal: this.props.modal,
          openings: Opening.byName(formData.get('name'))
        }
      );
      openingsTable.mount();
    });
  }
}

export default OpeningsNameModal;
