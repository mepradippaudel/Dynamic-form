import { Form, Input, Button, Space,Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const addform = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };
  
  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                {...restField}
                        name="name"
                        required
                        label="Name"
                        rules={[{ required: true, message: 'Missing first name' }]}
                    >
                        <Input
                            type="text"
                            placeholder="Name"
                            size="large"
                            required
                        />
                    </Form.Item>
                    <Form.Item
                    {...restField}
                        name="parent"
                        label="Parent"
                        requiredMark={false}
                    >
                        <Select
                            placeholder="Select Parent"
                            size="large"
                           allowClear
                        >
                           
                        </Select>
                    </Form.Item>
                    <Form.Item {...restField} name="order" label="Order" requiredMark={false}>
                        <Input type="number" size="large" />
                    </Form.Item>
                    <Form.Item
                    {...restField}
                        name="thumbnail_images_url"
                        label="add thumbnail images url"
                    >
                        
                      
                    </Form.Item>
                    <Form.Item
                    {...restField}
                    name="button"

                    >
                        <Button
                            key="submit"
                            type="primary"
                            className="flex flex-row items-center px-6 py-6 justify-center w-full"
                            onClick={() => levelForm.submit()}
                       
                        >
                           Level
                        </Button>
                    </Form.Item>

              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default addform;