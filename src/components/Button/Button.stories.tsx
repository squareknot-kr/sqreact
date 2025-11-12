import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import * as styles from "./Button.css.ts";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Button 컴포넌트는 클릭 가능한 버튼을 표시하는 컴포넌트에요. 아이콘을 추가하거나 전체 너비로 설정할 수 있어요.',
                props: {
                    children: '버튼에 표시될 내용 / Content to display in the button',
                    icon: '아이콘 (ReactNode) / Icon (ReactNode)',
                    fullWidth: '전체 너비 사용 여부 (boolean) / Whether to use full width (boolean)',
                },
            },
        },
    },
    args: {
        children: '버튼',
        fullWidth: false,
    },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
    parameters: {
        docs: {
            description: {
                story: '기본 Button 컴포넌트에요.',
            },
            source: {
                code: `<Button>버튼</Button>`,
                language: 'tsx',
            },
        },
    },
};

export const WithIcon: StoryObj<typeof Button> = {
    parameters: {
        docs: {
            description: {
                story: '아이콘이 표시되는 버튼이에요.',
            },
            source: {
                code: `<Button 
  icon={
    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  }
>
  버튼
</Button>`,
                language: 'tsx',
            },
        },
    },
    args: {
        icon: (
            <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        ),
    },
};

export const FullWidth: StoryObj<typeof Button> = {
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: '전체 너비를 사용하는 버튼이에요.',
            },
            source: {
                code: `<Button fullWidth>전체 너비 버튼</Button>`,
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
    args: {
        children: '전체 너비 버튼',
        fullWidth: true,
    },
};

export const Disabled: StoryObj<typeof Button> = {
    parameters: {
        docs: {
            description: {
                story: '비활성화된 버튼이에요.',
            },
            source: {
                code: `<Button disabled>비활성화된 버튼</Button>`,
                language: 'tsx',
            },
        },
    },
    args: {
        children: '비활성화된 버튼',
        disabled: true,
    },
};

export const WithIconAndFullWidth: StoryObj<typeof Button> = {
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: '아이콘과 전체 너비를 함께 사용하는 버튼이에요.',
            },
            source: {
                code: `<Button 
  icon={
    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  }
  fullWidth
>
  전체 너비 버튼
</Button>`,
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
    args: {
        children: '전체 너비 버튼',
        icon: (
            <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        ),
        fullWidth: true,
    },
};

export const WithStyle: StoryObj<typeof Button> = {
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: 'style prop을 사용하여 커스텀 스타일을 적용할 수 있어요.',
            },
            source: {
                code: `<div style={{ display: 'flex', gap: '12px' }}>
  <Button 
    style={{ 
      backgroundColor: '#B8E0D2', 
      color: '#2D5A4A', 
      borderColor: '#A8D5C4',
      width: '240px',
      justifyContent: 'center'
    }}
  >
    저장하기
  </Button>
  <Button 
    style={{ 
      backgroundColor: '#FFD6BA', 
      color: '#8B5A3C', 
      borderColor: '#FFCCB3',
      width: '240px',
      justifyContent: 'center'
    }}
  >
    공유하기
  </Button>
  <Button 
    style={{ 
      backgroundColor: '#E1BEE7', 
      color: '#6A4C7A', 
      borderColor: '#D4A5F5',
      width: '240px',
      justifyContent: 'center'
    }}
  >
    다음으로
  </Button>
</div>`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        return (
            <div style={{ display: 'flex', gap: '12px' }}>
                <Button 
                    style={{ 
                        backgroundColor: '#B8E0D2', 
                        color: '#2D5A4A', 
                        borderColor: '#A8D5C4',
                        width: '240px',
                        justifyContent: 'center'
                    }}
                >
                    저장하기
                </Button>
                <Button 
                    style={{ 
                        backgroundColor: '#FFD6BA', 
                        color: '#8B5A3C', 
                        borderColor: '#FFCCB3',
                        width: '240px',
                        justifyContent: 'center'
                    }}
                >
                    공유하기
                </Button>
                <Button 
                    style={{ 
                        backgroundColor: '#E1BEE7', 
                        color: '#6A4C7A', 
                        borderColor: '#D4A5F5',
                        width: '240px',
                        justifyContent: 'center'
                    }}
                >
                    다음으로
                </Button>
            </div>
        );
    },
};

export const MultipleButtons: StoryObj<typeof Button> = {
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                story: '여러 개의 버튼을 함께 사용할 수 있어요. fullWidth 속성을 사용하면 컨테이너 안에서 공간을 자연스럽게 나눠서 배치할 수 있어요.',
            },
            source: {
                code: `<div style={{ display: 'flex', gap: '12px' }}>
  <Button>취소</Button>
  <Button 
    icon={
      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    }
  >
    추가
  </Button>
</div>

<div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
  <Button fullWidth>취소</Button>
  <Button 
    fullWidth
    icon={
      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    }
  >
    추가
  </Button>
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
        const plusIcon = (
            <svg
                className={styles.icon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                />
            </svg>
        );

        return (
            <>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <Button>취소</Button>
                    <Button icon={plusIcon}>추가</Button>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                    <Button fullWidth>취소</Button>
                    <Button fullWidth icon={plusIcon}>추가</Button>
                </div>
            </>
        );
    },
};

