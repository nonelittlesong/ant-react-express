/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Upload, Button } from 'antd';
import { connect } from 'react-redux';
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
    const { imgList } = this.props;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="upload-form">
          <Form.Item>
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: (e) => {
                console.log('Upload event', e);
                if (Array.isArray(e)) {
                  return e;
                }
                return e && e.fileList;
              }
            })(
              <Upload
                action=""
                beforeUpload={
                  () => false
                }
              >
                <Button>
                  Select Images
                </Button>
              </Upload>
            )}
          </Form.Item>
        </Form>
        <pre>{JSON.stringify(imgList, null, 2)}</pre>
      </div>
    );
  }
}

const { addImg } = FormActions;

const mapStateToProps = (state) => ({
  imgList: state.form.imgList,
  imgNum: state.form.imgNum
});

const mapDispatchToProps = (dispatch) => ({
  add_img: (imgs, num) => {
    dispatch(addImg(imgs, num));
  }
});

const WrappedDemo = Form.create({
  name: 'upload_demo',
  mapPropsToFields(props) {
    console.log('mapPropsToFields', props);
    return {
      upload: Form.createFormField({
        value: props.imgList
      })
    };
  },
  onFieldsChange(props, fields) {
    console.log('onFieldsChange', fields);
    props.add_img(fields.upload.value, 3);
  }
})(UploadForm);

export default connect(mapStateToProps, mapDispatchToProps)(WrappedDemo);
