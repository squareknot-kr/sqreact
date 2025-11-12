import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useEffect } from "react";
import { DateRangePicker } from "./DateRangePicker";
import { getDateRange, formatDateToString, getToday } from "@/utils/date";

const meta: Meta<typeof DateRangePicker> = {
    component: DateRangePicker,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'DateRangePicker 위에 표시되는 라벨 (선택사항)',
        },
        startDate: {
            control: 'text',
            description: '시작일 (YYYY-MM-DD 형식, 선택사항)',
        },
        endDate: {
            control: 'text',
            description: '종료일 (YYYY-MM-DD 형식, 선택사항)',
        },
        onChange: {
            action: 'onChange',
            description: '날짜 범위 변경 시 호출되는 콜백 함수',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'DateRangePicker 컴포넌트는 시작일과 종료일을 선택할 수 있는 컴포넌트에요.',
                props: {
                    label: 'DateRangePicker 위에 표시되는 라벨 (선택사항) / Label displayed above DateRangePicker (optional)',
                    startDate: '시작일 (YYYY-MM-DD 형식, 선택사항) / Start date in YYYY-MM-DD format (optional)',
                    endDate: '종료일 (YYYY-MM-DD 형식, 선택사항) / End date in YYYY-MM-DD format (optional)',
                    onChange: '날짜 범위 변경 시 호출되는 콜백 함수 (startDate, endDate) / Callback function called when date range changes',
                },
            },
        },
    },
    render: (args) => {
        const [dateRange, setDateRange] = useState({ 
            startDate: args.startDate || getDateRange(150, getToday()).startDate,
            endDate: args.endDate || formatDateToString(getToday())
        });
        
        useEffect(() => {
            if (args.startDate !== undefined) {
                setDateRange(prev => ({ ...prev, startDate: args.startDate! }));
            }
            if (args.endDate !== undefined) {
                setDateRange(prev => ({ ...prev, endDate: args.endDate! }));
            }
        }, [args.startDate, args.endDate]);
        
        return (
            <DateRangePicker
                {...args}
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                onChange={(startDate, endDate) => {
                    setDateRange({ startDate, endDate });
                    args.onChange?.(startDate, endDate);
                }}
            />
        );
    },
    args: {
        label: '기간',
        startDate: undefined,
        endDate: undefined,
        onChange: (startDate, endDate) => console.log('선택된 기간:', { startDate, endDate }),
    },
};

export default meta;

export const Default: StoryObj<typeof DateRangePicker> = {
    parameters: {
        docs: {
            description: {
                story: '기본적으로 150일 전부터 오늘까지의 기간이 설정되어 있어요.',
            },
            source: {
                code: `const [dateRange, setDateRange] = useState({ 
  startDate: getDateRange(150, getToday()).startDate,
  endDate: formatDateToString(getToday())
});

return (
  <DateRangePicker
    label="기간"
    onChange={(startDate, endDate) => setDateRange({ startDate, endDate })}
  />
);`,
                language: 'tsx',
            },
        },
    },
};

export const NoLabel: StoryObj<typeof DateRangePicker> = {
    parameters: {
        docs: {
            description: {
                story: '레이블 없이 DateRangePicker 컴포넌트를 사용할 수 있어요.',
            },
            source: {
                code: `const [dateRange, setDateRange] = useState({ 
  startDate: getDateRange(150, getToday()).startDate,
  endDate: formatDateToString(getToday())
});

return (
  <DateRangePicker
    startDate={dateRange.startDate}
    endDate={dateRange.endDate}
    onChange={(startDate, endDate) => {
      setDateRange({ startDate, endDate });
    }}
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

export const WithInitialDates: StoryObj<typeof DateRangePicker> = {
    parameters: {
        docs: {
            description: {
                story: '초기 시작일과 종료일을 지정할 수 있어요.',
            },
            source: {
                code: `const [dateRange, setDateRange] = useState({ 
  startDate: '2024-01-01',
  endDate: '2024-12-31'
});

return (
  <DateRangePicker
    label="기간"
    startDate={dateRange.startDate}
    endDate={dateRange.endDate}
    onChange={(startDate, endDate) => {
      setDateRange({ startDate, endDate });
    }}
  />
);`,
                language: 'tsx',
            },
        },
    },
    render: (args) => {
        const [dateRange, setDateRange] = useState({ 
            startDate: '2024-01-01',
            endDate: '2024-12-31'
        });
        
        return (
            <DateRangePicker
                {...args}
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                onChange={(startDate, endDate) => {
                    setDateRange({ startDate, endDate });
                    args.onChange?.(startDate, endDate);
                }}
            />
        );
    },
};