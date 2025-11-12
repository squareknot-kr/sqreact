import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Motion } from "./Motion";
import { Button } from "../Button/Button";

const meta: Meta<typeof Motion> = {
    component: Motion,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Motion 컴포넌트는 `div` 요소에 조건부 렌더링과 애니메이션을 제공해요. 컴포넌트가 나타나고 사라질 때 부드러운 페이드 인/아웃과 스케일 애니메이션이 적용되어 있어요.',
                props: {
                    children: '애니메이션이 적용될 자식 요소 / Child elements to animate',
                    condition: '컴포넌트 표시 여부 (boolean) / Whether to show the component (boolean)',
                    className: '추가 CSS 클래스명 / Additional CSS class name',
                    ref: 'DOM 요소 참조 / Reference to DOM element',
                },
            },
            source: {
                code: 
`const [isVisible, setIsVisible] = useState(true);

return (
  <>
    <Button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? '숨기기' : '보이기'}
    </Button>

    <Motion condition={isVisible}>
      <div style={{ padding: '24px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        애니메이션 박스
      </div>
    </Motion>
  </>
);`,
                language: 'tsx',
            },
        },
    },
    render: (args) => {
        const [isVisible, setIsVisible] = useState(args.condition ?? true);
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <Button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? '숨기기' : '보이기'}
                </Button>
                <div style={{ minHeight: '120px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Motion {...args} condition={isVisible}>
                        <div
                            style={{
                                padding: '24px',
                                backgroundColor: '#f3f4f6',
                                borderRadius: '8px',
                                border: '1px solid #e5e7eb',
                                minWidth: '200px',
                                textAlign: 'center',
                            }}
                        >
                            <p style={{ margin: 0, fontSize: '16px', color: '#374151' }}>
                                애니메이션 박스
                            </p>
                        </div>
                    </Motion>
                </div>
            </div>
        );
    },
    args: {
        condition: true,
    },
};

export default meta;

export const Default: StoryObj<typeof Motion> = {
    parameters: {
        docs: {
            source: {
                code: 
`const [isVisible, setIsVisible] = useState(true);

return (
  <>
    <Button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? '숨기기' : '보이기'}
    </Button>

    <Motion condition={isVisible}>
      <div style={{ padding: '24px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
        애니메이션 박스
      </div>
    </Motion>
  </>
);`,
                language: 'tsx',
            },
        },
    },
    render: (args) => {
        const [isVisible, setIsVisible] = useState(args.condition ?? true);
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <Button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? '숨기기' : '보이기'}
                </Button>
                <div style={{ minHeight: '120px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Motion {...args} condition={isVisible}>
                        <div
                            style={{
                                padding: '24px',
                                backgroundColor: '#f3f4f6',
                                borderRadius: '8px',
                                border: '1px solid #e5e7eb',
                                minWidth: '200px',
                                textAlign: 'center',
                            }}
                        >
                            <p style={{ margin: 0, fontSize: '16px', color: '#374151' }}>
                                애니메이션 박스
                            </p>
                        </div>
                    </Motion>
                </div>
            </div>
        );
    },
};

export const WithList: StoryObj<typeof Motion> = {
    parameters: {
        docs: {
            source: {
                code: 
`const [isVisible, setIsVisible] = useState(true);

return (
  <>
    <Button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? '리스트 숨기기' : '리스트 보이기'}
    </Button>

    <Motion condition={isVisible}>
      <ul style={{ listStyle: 'none', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
        <li>항목 1</li>
        <li>항목 2</li>
        <li>항목 3</li>
        <li>항목 4</li>
      </ul>
    </Motion>
  </>
);`,
                language: 'tsx',
            },
        },
    },
    render: (args) => {
        const [isVisible, setIsVisible] = useState(true);
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <Button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? '리스트 숨기기' : '리스트 보이기'}
                </Button>
                <div style={{ minHeight: '200px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Motion {...args} condition={isVisible}>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: '16px',
                                margin: 0,
                                backgroundColor: '#white',
                                borderRadius: '8px',
                                border: '1px solid dodgerblue',
                                minWidth: '200px',
                            }}
                        >
                            <li style={{ padding: '8px', borderBottom: '1px solid #e5e7eb' }}>항목 1</li>
                            <li style={{ padding: '8px', borderBottom: '1px solid #e5e7eb' }}>항목 2</li>
                            <li style={{ padding: '8px', borderBottom: '1px solid #e5e7eb' }}>항목 3</li>
                            <li style={{ padding: '8px' }}>항목 4</li>
                        </ul>
                    </Motion>
                </div>
            </div>
        );
    },
    args: {
        condition: true,
    },
};

