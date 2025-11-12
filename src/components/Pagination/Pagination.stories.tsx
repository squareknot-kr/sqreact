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
10개씩 그룹으로 나뉘어 표시되며, 이전/다음 버튼으로 그룹 간 이동이 가능해요.`,
                props: {
                    totalPages: '전체 페이지 수 / Total number of pages',
                    currentPage: '현재 페이지 번호 / Current page number',
                    onPageChange: '페이지 변경 시 호출되는 콜백 함수 / Callback function called when page changes',
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