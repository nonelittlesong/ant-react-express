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

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit} className="upload-form">
        <Form.Item>
          {getFieldDecorator('imgs', {

          })()}
        </Form.Item>
      </Form>
    );
  }
}

const { addImg } = FormActions;

const mapStateToProps = (state) => ({
  imgList: state.imgList,
  imgNum: state.imgNum
});

const mapDispatchToProps = (dispatch) => ({
  add_img: (imgs, num) => {
    dispatch(addImg(imgs, num));
  }
});

const WrappedDemo = Form.create({ name: 'upload_demo' })(UploadForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedDemo);
