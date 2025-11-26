import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Input } from "./Input";
import * as styles from "./Input.css";

const meta: Meta<typeof Input> = {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Input 컴포넌트는 텍스트 입력 필드를 표시하는 컴포넌트에요. label prop을 사용하여 라벨을 함께 표시할 수 있어요.\n\n**className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다. width, border, backgroundColor 등 모든 스타일을 className으로 자유롭게 오버라이드할 수 있어요.',
                props: {
                    label: '입력 필드 위에 표시되는 라벨 (선택사항) / Label displayed above input field (optional)',
                    type: '입력 필드 타입 (text, email, password 등) / Input field type (text, email, password, etc.)',
                    placeholder: '플레이스홀더 텍스트 / Placeholder text',
                    value: '입력 값 (controlled component) / Input value (controlled component)',
                    onChange: '값 변경 시 호출되는 콜백 함수 / Callback function called when value changes',
                    disabled: '비활성화 여부 (boolean) / Whether the input is disabled (boolean)',
                    fullWidth: '전체 너비 사용 여부 (boolean) / Whether to use full width (boolean)',
                    className: '추가 CSS 클래스명 (string) / Additional CSS class name (string)',
                },
            },
        },
    },
    args: {
        placeholder: '입력하세요',
        className: styles.inputDefault,
    },
};

export default meta;

export const Default: StoryObj<typeof Input> = {
    parameters: {
        docs: {
            description: {
                story: '기본 Input 컴포넌트에요.',
            },
            source: {
                code: `<Input placeholder="입력하세요" />`,
                language: 'tsx',
            },
        },
    },
};

export const WithLabel: StoryObj<typeof Input> = {
    parameters: {
        docs: {
            description: {
                story: '라벨이 있는 Input 컴포넌트에요.',
            },
            source: {
                code: `<Input label="이름" placeholder="이름을 입력하세요" />`,
                language: 'tsx',
            },
        },
    },
    args: {
        label: '이름',
        placeholder: '이름을 입력하세요',
    },
};

export const DifferentTypes: StoryObj<typeof Input> = {
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: '다양한 타입의 Input 컴포넌트를 사용할 수 있어요.',
            },
            source: {
                code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Input label="이름" type="text" placeholder="이름을 입력하세요" />
  <Input label="이메일" type="email" placeholder="이메일을 입력하세요" />
  <Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
  <Input label="전화번호" type="tel" placeholder="전화번호를 입력하세요" />
  <Input label="숫자" type="number" placeholder="숫자를 입력하세요" />
</div>`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input label="이름" type="text" placeholder="이름을 입력하세요" />
                <Input label="이메일" type="email" placeholder="이메일을 입력하세요" />
                <Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
                <Input label="전화번호" type="tel" placeholder="전화번호를 입력하세요" />
                <Input label="숫자" type="number" placeholder="숫자를 입력하세요" />
            </div>
        );
    },
};

export const Disabled: StoryObj<typeof Input> = {
    parameters: {
        docs: {
            description: {
                story: '비활성화된 Input 컴포넌트에요.',
            },
            source: {
                code: `<Input label="이름" placeholder="입력할 수 없습니다" disabled />`,
                language: 'tsx',
            },
        },
    },
    args: {
        label: '이름',
        placeholder: '입력할 수 없습니다',
        disabled: true,
    },
};

export const Controlled: StoryObj<typeof Input> = {
    parameters: {
        docs: {
            description: {
                story: 'controlled component로 사용하는 Input이에요.',
            },
            source: {
                code: `const [value, setValue] = useState('');

return (
  <Input 
    label="이름"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="이름을 입력하세요"
  />
);`,
                language: 'tsx',
            },
        },
    },
    render: () => {
        const [value, setValue] = useState('');
        
        return (
            <div style={{ maxWidth: '400px' }}>
                <Input
                    label="이름"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="이름을 입력하세요"
                />
                {value && (
                    <p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
                        입력된 값: {value}
                    </p>
                )}
            </div>
        );
    },
};

export const FullWidth: StoryObj<typeof Input> = {
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: '전체 너비를 사용하는 Input 컴포넌트에요.',
            },
            source: {
                code: `<Input fullWidth placeholder="전체 너비 입력" />
<Input fullWidth label="이름" placeholder="이름을 입력하세요" />`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input fullWidth placeholder="전체 너비 입력" />
                <Input fullWidth label="이름" placeholder="이름을 입력하세요" />
            </div>
        );
    },
};

export const FullWidthComparison: StoryObj<typeof Input> = {
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: '일반 Input과 fullWidth Input을 비교할 수 있어요.',
            },
            source: {
                code: `<div style={{ maxWidth: '500px' }}>
  <Input label="일반 너비" placeholder="일반 너비 입력" />
  <Input fullWidth label="전체 너비" placeholder="전체 너비 입력" />
</div>`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input label="일반 너비" placeholder="일반 너비 입력" />
                <Input fullWidth label="전체 너비" placeholder="전체 너비 입력" />
            </div>
        );
    },
};

export const WithClassName: StoryObj<typeof Input> = {
    parameters: {
        docs: {
            description: {
                story: 'className prop을 사용하여 Tailwind CSS 등 외부 스타일을 적용할 수 있어요.',
            },
            source: {
                code: `<Input
  label="이름"
  placeholder="이름을 입력하세요"
  className="border-2 border-blue-500 focus:border-blue-700"
/>`,
                language: 'tsx',
            },
        },
    },
    render: () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Input
                    label="이름"
                    placeholder="이름을 입력하세요"
                    className="border-2 border-blue-500 focus:border-blue-700"
                />
                <Input
                    placeholder="Tailwind 스타일 입력"
                    className="bg-gray-100 text-gray-800"
                />
            </div>
        );
    },
};