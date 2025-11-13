import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionCard } from "./SectionCard";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

const meta: Meta<typeof SectionCard> = {
    component: SectionCard,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'SectionCard 컴포넌트는 섹션을 감싸는 카드 형태의 컨테이너에요. 부모 컨테이너의 전체 너비(100%)를 차지하며, 제목과 설명을 표시하고 내부에 콘텐츠를 배치할 수 있어요.',
                props: {
                    title: '카드의 제목 (선택사항) / Card title (optional)',
                    description: '카드의 설명 (선택사항) / Card description (optional)',
                    children: '카드 내부에 표시될 콘텐츠 / Content to display inside the card',
                    flex: 'flex 레이아웃 사용 여부 (boolean) / Whether to use flex layout (boolean)',
                },
            },
        },
    },
    args: {
        title: 'Section Card',
        description: 'This is a section card description',
        flex: false,
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
        <div style={{ maxWidth: '600px' }}>
            <SectionCard {...args}>
                <Button>Button</Button>
            </SectionCard>
        </div>
    ),
};

export const WithFlex: StoryObj<typeof SectionCard> = {
    parameters: {
        docs: {
            description: {
                story: 'flex prop을 사용하여 내부 콘텐츠를 flex 레이아웃으로 배치할 수 있어요.',
            },
            source: {
                code: `<SectionCard 
  title="Section Card"
  description="This is a section card with flex layout"
  flex
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
        description: 'This is a section card with flex layout',
        flex: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
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
  flex
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
        flex: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
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
  flex
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
        flex: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
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
                story: 'flex prop 없이 사용하는 SectionCard에요. 기본 레이아웃으로 콘텐츠가 배치돼요.',
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
        flex: false,
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
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
        flex: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
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
  flex
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
        flex: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
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
  flex
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
        flex: true,
    },
    render: (args) => (
        <div style={{ maxWidth: '600px' }}>
            <SectionCard {...args}>
                <Button>Button 1</Button>
                <Button>Button 2</Button>
            </SectionCard>
        </div>
    ),
};
