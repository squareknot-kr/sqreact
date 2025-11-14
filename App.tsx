// import { Search, PageList } from './src/index';
import { Search, DateRangePicker } from '@/components';
import { Input } from '@/components/Input';
import { useState } from 'react';
import { SectionCard } from '@/components/SectionCard/SectionCard';

function App() {
  const [_, setDateRange] = useState({ startDate: '', endDate: '' });

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
      <Search.Select
        label="템플릿"
        valueKey="template"
        options={templateOptions}
        defaultValue='선택'
      />
      <Search.Select
        label="고객사"
        valueKey="client"
        options={clientOptions}
        defaultValue='선택'
      />
      <Search.Select
        label="상품"
        valueKey="product"
        options={productOptions}
        defaultValue='선택'
      />
      <Search.DatePicker
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

    <div style={{ marginTop: '40px', marginBottom: '40px' }}>
      <h2 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '600' }}>
        Input 컴포넌트
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>

      </div>

      <SectionCard 
        title="Section Card" 
        description="Section Card Description"
        flexRow
      >
        <Input label="이름" placeholder="이름을 입력하세요" />
        <Input label="이메일" type="email" placeholder="이메일을 입력하세요" />
        <Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
      </SectionCard>
    </div>
    </div>
  );
}

export default App;