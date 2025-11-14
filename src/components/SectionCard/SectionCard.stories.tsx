import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionCard } from "./SectionCard";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const meta: Meta<typeof SectionCard> = {
    component: SectionCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'SectionCard 컴포넌트는 섹션을 감싸는 카드 형태의 컨테이너에요. 부모 컨테이너의 전체 너비(100%)를 차지하며, 제목과 설명을 표시하고 내부에 콘텐츠를 배치할 수 있어요.',
                props: {
                    title: '카드의 제목 (선택사항) / Card title (optional)',
                    description: '카드의 설명 (선택사항) / Card description (optional)',
                    children: '카드 내부에 표시될 콘텐츠 / Content to display inside the card',
                    flexRow: '가로 방향 flex 레이아웃 사용 여부 (boolean) / Whether to use row flex layout (boolean)',
                    flexColumn: '세로 방향 flex 레이아웃 사용 여부 (boolean) / Whether to use column flex layout (boolean)',
                    style: '커스텀 스타일 (CSSProperties) / Custom style (CSSProperties)',
                    className: '추가 CSS 클래스명 (string) / Additional CSS class name (string)',
                },
            },
        },
    },
    args: {
        title: 'Section Card',
        description: 'This is a section card description',
    },
};

export default meta;

export const Default: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: '기본 SectionCard 컴포넌트에요.',
            },
            source: {
                code: `<SectionCard 
  title="Section Card"
  description="This is a section card description"
>
  <Button>Button</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Button>Button</Button>
            </SectionCard>
        </div>
    ),
};

export const WithFlexColumn: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'flexColumn prop을 사용하여 내부 콘텐츠를 세로 방향 flex 레이아웃으로 배치할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  title="Section Card"
  description="This is a section card with column flex layout"
  flexColumn
>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Section Card',
        description: 'This is a section card with column flex layout',
        flexColumn: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </SectionCard>
        </div>
    ),
};

export const WithFlexRow: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'flexRow prop을 사용하여 내부 콘텐츠를 가로 방향 flex 레이아웃으로 배치할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  title="Section Card"
  description="This is a section card with row flex layout"
  flexRow
>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Section Card',
        description: 'This is a section card with row flex layout',
        flexRow: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
                <Button>Button 3</Button>
            </SectionCard>
        </div>
    ),
};

export const WithInputs: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'Input 컴포넌트들을 포함하는 SectionCard에요.',
            },
            source: {
                code: `<SectionCard 
  title="Form Section"
  description="Fill out the form below"
  flexColumn
>
  <Input label="이름" placeholder="이름을 입력하세요" />
  <Input label="이메일" type="email" placeholder="이메일을 입력하세요" />
  <Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Form Section',
        description: 'Fill out the form below',
        flexColumn: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Input label="이름" placeholder="이름을 입력하세요" />
                <Input label="이메일" type="email" placeholder="이메일을 입력하세요" />
                <Input label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
            </SectionCard>
        </div>
    ),
};

export const WithMultipleButtons: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: '여러 개의 버튼을 포함하는 SectionCard에요.',
            },
            source: {
                code: `<SectionCard 
  title="Actions"
  description="Choose an action"
  flexRow
>
  <Button>저장</Button>
  <Button>취소</Button>
  <Button>삭제</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Actions',
        description: 'Choose an action',
        flexRow: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Button>저장</Button>
                <Button>취소</Button>
                <Button>삭제</Button>
            </SectionCard>
        </div>
    ),
};

export const WithoutFlex: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'flexRow나 flexColumn prop 없이 사용하는 SectionCard에요. 기본 레이아웃으로 콘텐츠가 배치돼요.',
            },
            source: {
                code: `<SectionCard 
  title="Section Card"
  description="This is a section card without flex layout"
>
  <div>
    <p>Some content here</p>
    <Button>Button</Button>
  </div>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Section Card',
        description: 'This is a section card without flex layout',
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <div>
                    <p style={{ marginBottom: '16px', color: '#666' }}>
                        Some content here
                    </p>
                    <Button>Button</Button>
                </div>
            </SectionCard>
        </div>
    ),
};

export const WithoutTitleAndDescription: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'title과 description 없이 사용하는 SectionCard에요. 제목과 설명 없이 콘텐츠만 표시할 수 있어요.',
            },
            source: {
                code: `<SectionCard>
  <Button>Button</Button>
  <Button>Another Button</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        flexRow: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Button>Button</Button>
                <Button>Another Button</Button>
            </SectionCard>
        </div>
    ),
};

export const WithTitleOnly: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'title만 있는 SectionCard에요. 설명 없이 제목만 표시할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  title="Section Card"
  flexRow
>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Section Card',
        flexRow: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </SectionCard>
        </div>
    ),
};

export const WithDescriptionOnly: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'description만 있는 SectionCard에요. 제목 없이 설명만 표시할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  description="This is a section card with description only"
  flexColumn
>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        description: 'This is a section card with description only',
        flexRow: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </SectionCard>
        </div>
    ),
};

export const WithCustomStyle: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'style prop을 사용하여 SectionCard의 너비를 조정할 수 있어요. 좁게 만들거나 다른 스타일을 적용할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  title="Narrow Section Card"
  description="This is a narrow section card using style prop"
  style={{ maxWidth: '400px', margin: '0 auto' }}
  flexColumn
>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Narrow Section Card',
        description: 'This is a narrow section card using style prop',
        flexColumn: true,
        style: { maxWidth: '400px', margin: '0 auto' },
    },
    render: (args) => (
        <SectionCard {...args}>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
        </SectionCard>
    ),
};

export const WithClassName: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'className prop을 사용하여 추가 CSS 클래스를 적용할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  title="Custom Styled Card"
  description="This card has custom className"
  className="custom-card"
  flexRow
>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Custom Styled Card',
        description: 'This card has custom className',
        flexRow: true,
        className: 'custom-card',
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <style>{`
                .custom-card {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                .custom-card h2 {
                    color: white;
                }
                .custom-card p {
                    color: rgba(255, 255, 255, 0.9);
                }
            `}</style>
            <SectionCard {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </SectionCard>
        </div>
    ),
};

export const ComplexLayout: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: '복잡한 레이아웃을 구성하는 예제에요. 여러 컴포넌트를 조합해서 사용할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  title="Dashboard"
  description="Welcome to your dashboard"
  flexColumn
>
  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
    <Input label="검색" placeholder="검색어를 입력하세요" fullWidth />
    <Button>검색</Button>
  </div>
  <div style={{ display: 'flex', gap: '12px' }}>
    <Button fullWidth>저장</Button>
    <Button fullWidth>취소</Button>
  </div>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Dashboard',
        description: 'Welcome to your dashboard',
        flexColumn: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <Input label="검색" placeholder="검색어를 입력하세요" fullWidth />
                    <Button>검색</Button>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <Button fullWidth>저장</Button>
                    <Button fullWidth>취소</Button>
                </div>
            </SectionCard>
        </div>
    ),
};

export const MixedContent: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: '다양한 타입의 콘텐츠를 섞어서 사용하는 예제에요.',
            },
            source: {
                code: `<SectionCard 
  title="Mixed Content"
  description="This card contains various types of content"
  flexColumn
>
  <Input label="이름" placeholder="이름을 입력하세요" />
  <div style={{ display: 'flex', gap: '12px' }}>
    <Button>확인</Button>
    <Button>취소</Button>
  </div>
  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
    추가 정보를 여기에 표시할 수 있어요.
  </p>
</SectionCard>`,
                language: 'tsx',
            },
        },
    },
    args: {
        title: 'Mixed Content',
        description: 'This card contains various types of content',
        flexColumn: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '1200px', width: '100%' }}>
            <SectionCard {...args}>
                <Input label="이름" placeholder="이름을 입력하세요" />
                <div style={{ display: 'flex', gap: '12px' }}>
                    <Button>확인</Button>
                    <Button>취소</Button>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                    추가 정보를 여기에 표시할 수 있어요.
                </p>
            </SectionCard>
        </div>
    ),
};
