import React, {Component} from 'react';
import {
  WizardModal,
} from 'carbon-addons-iot-react';

class CustomWizardModal extends Component {
  render() {
    return (
      <WizardModal
        //currentStepIndex={0}
        footer={{
          cancelButtonLabel: 'Cancel',
          leftContent: null,
          nextButtonLabel: 'Next',
          previousButtonLabel: 'Previous',
          submitButtonLabel: 'Submit'
        }}
        header={{
          label: 'Basic Wizard',
          title: 'Gimme 3 Steps'
        }}
        isClickable
        //onClose={function E(){}}
        //onSubmit={function E(){}}
        steps={[
          {
            content: 'page 1',
            label: 'step1',
          },
          {
            content: 'page 2',
            label: 'step2',
          },
          {
            content: 'page 3',
            label: 'step3',
          }
        ]}
      />
    );
  }
}

export default CustomWizardModal;