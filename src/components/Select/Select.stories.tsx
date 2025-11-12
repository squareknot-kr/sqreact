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
export const Default: StoryObj<typeof Select> = {};
export const NoLabel: StoryObj<typeof Select> = {
    args: {
        label: undefined,
    },
};

export const WithSearch: StoryObj<typeof Select> = {
    args: {
        withSearch: true,
    },
};

export const WithFullWidth: StoryObj<typeof Select> = {
    parameters: {
        layout: 'centered',
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