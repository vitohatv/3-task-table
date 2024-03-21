import { Skeleton, Table } from 'antd';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const tableData = () => {
    setTimeout(() => {
      setData([
        {
          key: '1',
          name: 'John Brown',
          age: 25,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 2 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 37,
          address: 'Sidney No. 3 Lake Park',
        },
      ]);
      setLoading(false);
    }, 2600);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: text => loading ? <Skeleton active paragraph={{ rows: 2 }} /> : text,
    },
  ];
  tableData();
  return (
    <div className="App">
      <Table columns={columns} dataSource={loading ? [{}] : data} />
    </div>
  );
}

export default App;