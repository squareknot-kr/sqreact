// import { Search, PageList } from './src/index';
import { Search } from '@/components';
import { Select } from '@/shared/components/Select/Select';
import { SelectButton } from '@/shared/components/SelectButton/SelectButton';
import { useState } from 'react';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const options = ['바나나', '사과', '포도'];
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Search 컴포넌트
        </h2>

      </div>
    <Search onSearch={(values) => console.log(values)}>
      <Search.Select
        label="템플릿"
        valueKey="templateName"
        options={['템플릿1', '템플릿2', '템플릿3']}
      />
      <Search.Select
        label="고객사"
        valueKey="clientName"
        options={['고객사1', '고객사2', '고객사3']}
      />
      <Search.Select
        label="상품"
        valueKey="productName"
        options={['상품1', '상품2', '상품3']}
      />
    </Search>
      <div>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          PageList 컴포넌트
        </h2>
        <Select 
          label="과일"
          defaultValue='선택하세요'
          options={options}
          onChange={(value) => setSelectedValue(value)} 
          trigger={<SelectButton style={{ width: '300px' }}>{selectedValue}</SelectButton>}
          withSearch
        />
      </div>
    </div>
  );
}

export default App;

