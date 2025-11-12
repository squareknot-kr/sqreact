// import { Search, PageList } from './src/index';
import { Search, DateRangePicker } from '@/components';
import { Select } from '@/components/Select/Select';
import { SelectButton } from '@/components/SelectButton/SelectButton';
import { useState } from 'react';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');
  const [selectedValue3, setSelectedValue3] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  const templateOptions = ['템플릿1', '템플릿2', '템플릿3'];
  const clientOptions = ['고객사1', '고객사2', '고객사3'];
  const productOptions = ['상품1', '상품2', '상품3'];
  
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
          Search 컴포넌트
        </h2>

      </div>
    <Search onSearch={(values) => console.log(values)}>
      <Select
        label="템플릿"
        trigger={<SelectButton fullWidth>{selectedValue}</SelectButton>}
        onChange={(value) => setSelectedValue(value)}
        options={templateOptions}
      />
      <Select
        label="고객사"
        trigger={<SelectButton fullWidth>{selectedValue2}</SelectButton>}
        onChange={(value) => setSelectedValue2(value)}
        options={clientOptions}
      />
      <Select
        label="상품"
        trigger={<SelectButton fullWidth>{selectedValue3}</SelectButton>}
        onChange={(value) => setSelectedValue3(value)}
        options={productOptions}
      />
    </Search>
    
    <div style={{ marginTop: '40px', marginBottom: '40px' }}>
      <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
        DateRangePicker 컴포넌트
      </h2>
      <DateRangePicker
        onChange={(startDate, endDate) => {
          setDateRange({ startDate, endDate });
        }}
      />
    </div>
    </div>
  );
}

export default App;