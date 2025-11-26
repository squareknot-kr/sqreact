import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { PageList } from "./Pagination";

const meta: Meta<typeof PageList> = {
    component: PageList,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `PageList 컴포넌트는 페이지네이션을 표시하고 사용자가 페이지를 이동할 수 있게 해요.
10개씩 그룹으로 나뉘어 표시되며, 이전/다음 버튼으로 그룹 간 이동이 가능해요.

**className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.`,
                props: {
                    totalPages: '전체 페이지 수 / Total number of pages',
                    currentPage: '현재 페이지 번호 / Current page number',
                    onPageChange: '페이지 변경 시 호출되는 콜백 함수 / Callback function called when page changes',
                    className: '추가 CSS 클래스명 (string) / Additional CSS class name (string)',
                },
            },
            canvas: {
                minHeight: '200px',
            },
        },
    },
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
        
        return (
            <PageList
                {...args}
                currentPage={currentPage}
                onPageChange={(page) => {
                    setCurrentPage(page);
                    args.onPageChange?.(page);
                }}
            />
        );
    },
    args: {
        totalPages: 25,
        currentPage: 1,
        onPageChange: (page) => console.log('Page changed to:', page),
    },
};

export default meta;

export const Default: StoryObj<typeof PageList> = {
    args: {
        currentPage: 1
    }
};

export const MiddlePage: StoryObj<typeof PageList> = {
    args: {
        totalPages: 50,
        currentPage: 25,
    },
};

export const LastPage: StoryObj<typeof PageList> = {
    args: {
        totalPages: 30,
        currentPage: 30,
    },
};

export const WithClassName: StoryObj<typeof PageList> = {
    parameters: {
        docs: {
            description: {
                story: 'className prop을 사용하여 Tailwind CSS 등 외부 스타일을 적용할 수 있어요.',
            },
            source: {
                code: `<PageList
  totalPages={25}
  currentPage={1}
  onPageChange={(page) => console.log('Page changed to:', page)}
  className="border-2 border-blue-500 rounded-lg p-4"
/>`,
                language: 'tsx',
            },
        },
    },
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
        
        return (
            <PageList
                {...args}
                currentPage={currentPage}
                onPageChange={(page) => {
                    setCurrentPage(page);
                    args.onPageChange?.(page);
                }}
                className="border-2 border-blue-500 rounded-lg p-4"
            />
        );
    },
};