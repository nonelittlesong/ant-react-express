import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { connect } from 'redux';
import { actions as FormActions } from '../../reducers/formReducer';

class UploadForm extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    form: PropTypes.object.isRequired
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  fileRemove = (file) => {
    thi;
  }

  render() {
    return (
      <div>Upload</div>
    );
  }
}

const { add_img } = FormActions;

const mapStateToProps = (state) => ({

  });

function mapDispatchToProps(dispatch) {
  return {

  };
}

const WrappedDemo = Form.create({ name: 'upload_demo' })(UploadForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedDemo);
