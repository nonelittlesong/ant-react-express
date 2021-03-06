# react express

参考:  

- [react express demo](https://github.com/Nealyang/React-Express-Blog-Demo)
- [body-parser](https://github.com/nonelittlesong/study-web/blob/master/JSLibrary/Express-Middleware/body-parser/body-parser.md)
- [simple react full stack](https://github.com/crsandeep/simple-react-full-stack)
- [express-vue-boilerplate](https://github.com/nonelittlesong/express-vue-boilerplate)
- [NodeJS mysql2 使用心得](https://blog.csdn.net/u010379324/article/details/51228569)

依赖：  

- [mysql2](https://github.com/sidorares/node-mysql2#readme)

## Troubleshot

### CleanWebpackPlugin is not a Constructor

新版的引用方式已改成 `const { CleanWebpackPlugin } = require('clean-webpack-plugin')`。  

### Form 中 使用 Upload

需要配置 `getValueFromEvent`:  

```js
<Form.Item>
  {getFieldDecorator('upload', {
    valuePropName: 'fileList',
    getValueFromEvent: (e) => {
      console.log('Upload event: ', e);
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
```
