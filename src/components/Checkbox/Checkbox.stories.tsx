import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import * as styles from "./Checkbox.css.ts";
import { Check } from "lucide-react";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Checkbox 컴포넌트는 체크박스 입력 필드를 표시하는 컴포넌트에요. checked 상태를 관리하고 커스텀 아이콘을 설정할 수 있어요.\n\n**className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다. width, height, border, borderRadius, backgroundColor 등 모든 스타일을 className으로 자유롭게 오버라이드할 수 있어요.',
                props: {
                    label: '체크박스 옆에 표시되는 라벨 (선택사항) / Label displayed next to checkbox (optional)',
                    checked: '체크 상태 (controlled component) / Checked state (controlled component)',
                    defaultChecked: '기본 체크 상태 (uncontrolled component) / Default checked state (uncontrolled component)',
                    onChange: '체크 상태 변경 시 호출되는 콜백 함수 (checked: boolean) / Callback function called when checked state changes',
                    icon: '체크되지 않았을 때 표시될 아이콘 (ReactNode) / Icon displayed when unchecked (ReactNode)',
                    checkedIcon: '체크되었을 때 표시될 아이콘 (ReactNode, icon이 없으면 icon 사용) / Icon displayed when checked (ReactNode, uses icon if not provided)',
                    className: '라벨 래퍼에 적용될 CSS 클래스명 / CSS class name applied to label wrapper',
                    disabled: '비활성화 여부 (boolean) / Whether the checkbox is disabled (boolean)',
                },
            },
        },
    },
    args: {
        label: '체크박스',
        defaultChecked: false,
        checkedIcon: <Check size={14} />,
    }
};

export default meta;

export const Default: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: '기본 Checkbox 컴포넌트에요.',
            },
            source: {
                code: `<Checkbox label="체크박스" />`,
                language: 'tsx',
            },
        },
    },
};

export const WithLabel: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: '라벨이 있는 Checkbox 컴포넌트에요.',
            },
            source: {
                code: `<Checkbox label="동의합니다" />`,
                language: 'tsx',
            },
        },
    },
    args: {
        label: '동의합니다',
    },
};

export const Controlled: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: 'controlled component로 사용하는 Checkbox에요.',
            },
            source: {
                code: `const [checked, setChecked] = useState(false);

return (
  <Checkbox 
    label="동의합니다"
    checked={checked}
    onChange={(checked) => setChecked(checked)}
  />
);`,
                language: 'tsx',
            },
        },
    },
    render: () => {
        const [checked, setChecked] = useState(false);
        
        return (
            <Checkbox
                label="동의합니다"
                checked={checked}
                onChange={(checked) => setChecked(checked)}
            />
        );
    },
};

export const Uncontrolled: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: 'uncontrolled component로 사용하는 Checkbox에요. defaultChecked로 초기값을 설정할 수 있어요.',
            },
            source: {
                code: `<Checkbox 
  label="동의합니다"
  defaultChecked={true}
  onChange={(checked) => console.log('Checked:', checked)}
/>`,
                language: 'tsx',
            },
        },
    },
    args: {
        label: '동의합니다',
        defaultChecked: true,
        onChange: (checked) => console.log('Checked:', checked),
    },
};

export const WithCustomIcon: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: '커스텀 아이콘을 사용하는 Checkbox에요. checkedIcon을 지정하면 체크되었을 때 다른 아이콘이 표시돼요.',
            },
            source: {
                code: `<Checkbox 
  label="동의합니다"
  icon={<span>○</span>}
  checkedIcon={<Check size={14} />}
/>`,
                language: 'tsx',
            },
        },
    },
    render: () => {
        const [checked, setChecked] = useState(false);
        
        return (
            <Checkbox
                label="동의합니다"
                checked={checked}
                onChange={(checked) => setChecked(checked)}
                icon={<span style={{ fontSize: '12px' }}>○</span>}
                checkedIcon={<Check size={14} />}
            />
        );
    },
};

export const WithLucideIcon: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: 'Lucide React 아이콘을 사용하는 Checkbox에요.',
            },
            source: {
                code: `import { Check } from 'lucide-react';

<Checkbox 
  label="동의합니다"
  checkedIcon={<Check size={14} />}
/>`,
                language: 'tsx',
            },
        },
    },
    render: () => {
        const [checked, setChecked] = useState(false);
        
        return (
            <Checkbox
                label="동의합니다"
                checked={checked}
                onChange={(checked) => setChecked(checked)}
                checkedIcon={<Check size={14} />}
            />
        );
    },
};

export const Disabled: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: '비활성화된 Checkbox 컴포넌트에요.',
            },
            source: {
                code: `<Checkbox label="동의합니다" disabled />`,
                language: 'tsx',
            },
        },
    },
    args: {
        label: '동의합니다',
        disabled: true,
    },
};

export const DisabledChecked: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: '체크된 상태로 비활성화된 Checkbox 컴포넌트에요.',
            },
            source: {
                code: `<Checkbox label="동의합니다" checked disabled />`,
                language: 'tsx',
            },
        },
    },
    args: {
        label: '동의합니다',
        checked: true,
        disabled: true,
    },
};

export const MultipleCheckboxes: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: '여러 개의 Checkbox를 함께 사용할 수 있어요.',
            },
            source: {
                code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <Checkbox label="옵션 1" />
  <Checkbox label="옵션 2" />
  <Checkbox label="옵션 3" />
</div>`,
                language: 'tsx',
            },
        },
    },
    render: () => {
        const [checked1, setChecked1] = useState(false);
        const [checked2, setChecked2] = useState(false);
        const [checked3, setChecked3] = useState(false);
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Checkbox
                    label="옵션 1"
                    checked={checked1}
                    onChange={(checked) => setChecked1(checked)}
                />
                <Checkbox
                    label="옵션 2"
                    checked={checked2}
                    onChange={(checked) => setChecked2(checked)}
                />
                <Checkbox
                    label="옵션 3"
                    checked={checked3}
                    onChange={(checked) => setChecked3(checked)}
                />
            </div>
        );
    },
};

export const WithClassName: StoryObj<typeof Checkbox> = {
    parameters: {
        docs: {
            description: {
                story: 'className prop을 사용하여 Tailwind CSS 등 외부 스타일을 적용할 수 있어요.',
            },
            source: {
                code: `<Checkbox 
  label="동의합니다"
  className="border-2 border-blue-500 rounded-lg p-2"
/>`,
                language: 'tsx',
            },
        },
    },
    render: () => {
        const [checked, setChecked] = useState(false);
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Checkbox
                    label="동의합니다"
                    checked={checked}
                    onChange={(checked) => setChecked(checked)}
                    className="border-2 border-blue-500 rounded-lg p-2"
                />
                <Checkbox
                    label="다른 스타일"
                    checked={checked}
                    onChange={(checked) => setChecked(checked)}
                    className="bg-gray-100 p-3 rounded-md"
                />
            </div>
        );
    },
};

