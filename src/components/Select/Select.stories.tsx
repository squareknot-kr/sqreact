import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Select } from "./Select";
import { SelectButton } from "../SelectButton/SelectButton";

const DEFAULT_TRIGGER_WIDTH = '240px';
const FULL_TRIGGER_WIDTH = '500px';

const meta: Meta<typeof Select> = {
    component: Select,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Select 컴포넌트는 드롭다운 메뉴를 표시하고 사용자가 옵션을 선택할 수 있게 해요. 메뉴가 자연스럽게 열고 닫히는 모션이 적용되어 있어요.',
                props: {
                    label: 'Select 카드 위에 표시되는 소제목(라벨) / Label displayed above Select card',
                    options: '옵션으로 띄워 줄 아이템 목록 (Array) / Array of items to display as options',
                    withSearch: '검색 기능 사용 여부 (boolean) / Whether to use search functionality (boolean)',
                    defaultValue: '기본 선택 값 / Default selected value',
                    onChange: '선택 값 변경 시 호출되는 콜백 함수 / Callback function called when selected value changes',
                    trigger: '트리거 컴포넌트 / Trigger component',
                },
            },
        },
    },
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.defaultValue || '선택');
        
        return (
            <Select
                {...args}
                defaultValue={args.defaultValue || '선택'}
                onChange={(value) => {
                    setSelectedValue(value);
                    args.onChange?.(value);
                }}
                trigger={<SelectButton style={{ width: DEFAULT_TRIGGER_WIDTH }}>{selectedValue}</SelectButton>}
            />
        );
    },
    args: {
        label: '가장 좋아하는 음식은?',
        options: ['김치볶음밥', '제육볶음', '불닭게티', '비빔밥', '라면', '햄버거'],
        onChange: (value) => console.log(value),
        withSearch: false,
        defaultValue: '선택',
    },
};

export default meta;
export const Default: StoryObj<typeof Select> = {
    parameters: {
        docs: {
            description: {
                story: '기본 Select 컴포넌트에요. 레이블과 옵션 목록을 표시해요.',
            },
            source: {
                code: `const [selectedValue, setSelectedValue] = useState('선택');

return (
  <Select
    label="가장 좋아하는 음식은?"
    options={['김치볶음밥', '제육볶음', '불닭게티', '비빔밥', '라면', '햄버거']}
    defaultValue="선택"
    onChange={(value) => {
      setSelectedValue(value);
      console.log(value);
    }}
    trigger={
      <SelectButton style={{ width: '240px' }}>
        {selectedValue}
      </SelectButton>
    }
  />
);`,
                language: 'tsx',
            },
        },
    },
};
export const NoLabel: StoryObj<typeof Select> = {
    parameters: {
        docs: {
            description: {
                story: '레이블 없이 Select 컴포넌트를 사용할 수 있어요.',
            },
            source: {
                code: `const [selectedValue, setSelectedValue] = useState('선택');

return (
  <Select
    options={['김치볶음밥', '제육볶음', '불닭게티', '비빔밥', '라면', '햄버거']}
    defaultValue="선택"
    onChange={(value) => {
      setSelectedValue(value);
      console.log(value);
    }}
    trigger={
      <SelectButton style={{ width: '240px' }}>
        {selectedValue}
      </SelectButton>
    }
  />
);`,
                language: 'tsx',
            },
        },
    },
    args: {
        label: undefined,
    },
};

export const WithSearch: StoryObj<typeof Select> = {
    parameters: {
        docs: {
            description: {
                story: '검색 기능이 활성화된 Select에요. 옵션이 많을 때 유용해요.',
            },
            source: {
                code: `const [selectedValue, setSelectedValue] = useState('선택');

return (
  <Select
    label="가장 좋아하는 음식은?"
    options={['김치볶음밥', '제육볶음', '불닭게티', '비빔밥', '라면', '햄버거']}
    defaultValue="선택"
    onChange={(value) => {
      setSelectedValue(value);
      console.log(value);
    }}
    withSearch
    trigger={
      <SelectButton style={{ width: '240px' }}>
        {selectedValue}
      </SelectButton>
    }
  />
);`,
                language: 'tsx',
            },
        },
    },
    args: {
        withSearch: true,
    },
};

export const WithFullWidth: StoryObj<typeof Select> = {
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'trigger의 fullWidth 속성을 지정하면 컨테이너 전체 너비를 차지해요.',
            },
            source: {
                code: `const [selectedValue, setSelectedValue] = useState('선택');

return (
  <Select
    label="가장 좋아하는 음식은?"
    options={['김치볶음밥', '제육볶음', '불닭게티', '비빔밥', '라면', '햄버거']}
    defaultValue="선택"
    onChange={(value) => {
      setSelectedValue(value);
      console.log(value);
    }}
    withSearch
    trigger={
      <SelectButton fullWidth>
        {selectedValue}
      </SelectButton>
    }
  />
);`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: FULL_TRIGGER_WIDTH }}>
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState(args.defaultValue || '선택');
        
        return (
            <Select
                {...args}
                defaultValue={args.defaultValue || '선택'}
                onChange={(value) => {
                    setSelectedValue(value);
                    args.onChange?.(value);
                }}
                trigger={<SelectButton fullWidth>{selectedValue}</SelectButton>}
            />
        );
    },
    args: {
        withSearch: true,
    },
};

export const MultipleSelects: StoryObj<typeof Select> = {
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: '여러 개의 Select 컴포넌트의 trigger에 fullWidth 속성을 지정하면 컨테이너 안에서 공간을 자연스럽게 나눠서 배치할 수 있어요.',
            },
            source: {
                code: `const [food, setFood] = useState('선택');
const [drink, setDrink] = useState('선택');
const [dessert, setDessert] = useState('선택');

return (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
    <Select
      label="음식"
      options={['김치볶음밥', '제육볶음', '불닭게티', '비빔밥', '라면', '햄버거']}
      defaultValue="선택"
      onChange={(value) => {
        setFood(value);
        console.log('음식:', value);
      }}
      trigger={<SelectButton fullWidth>{food}</SelectButton>}
    />
    <Select
      label="음료"
      options={['콜라', '사이다', '오렌지주스', '커피', '녹차', '물']}
      defaultValue="선택"
      onChange={(value) => {
        setDrink(value);
        console.log('음료:', value);
      }}
      trigger={<SelectButton fullWidth>{drink}</SelectButton>}
    />
    <Select
      label="디저트"
      options={['케이크', '아이스크림', '쿠키', '초콜릿', '과일', '푸딩']}
      defaultValue="선택"
      onChange={(value) => {
        setDessert(value);
        console.log('디저트:', value);
      }}
      trigger={<SelectButton fullWidth>{dessert}</SelectButton>}
    />
  </div>
);`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: '16px',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px'
            }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        const [food, setFood] = useState('선택');
        const [drink, setDrink] = useState('선택');
        const [dessert, setDessert] = useState('선택');
        
        return (
            <>
                <Select
                    label="음식"
                    options={['김치볶음밥', '제육볶음', '불닭게티', '비빔밥', '라면', '햄버거']}
                    defaultValue="선택"
                    onChange={(value) => {
                        setFood(value);
                        console.log('음식:', value);
                    }}
                    trigger={<SelectButton fullWidth>{food}</SelectButton>}
                />
                <Select
                    label="음료"
                    options={['콜라', '사이다', '오렌지주스', '커피', '녹차', '물']}
                    defaultValue="선택"
                    onChange={(value) => {
                        setDrink(value);
                        console.log('음료:', value);
                    }}
                    trigger={<SelectButton fullWidth>{drink}</SelectButton>}
                />
                <Select
                    label="디저트"
                    options={['케이크', '아이스크림', '쿠키', '초콜릿', '과일', '푸딩']}
                    defaultValue="선택"
                    onChange={(value) => {
                        setDessert(value);
                        console.log('디저트:', value);
                    }}
                    trigger={<SelectButton fullWidth>{dessert}</SelectButton>}
                />
            </>
        );
    },
};