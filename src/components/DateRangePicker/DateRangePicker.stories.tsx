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
                component: 'DateRangePicker 컴포넌트는 시작일과 종료일을 선택할 수 있는 컴포넌트에요.\n\n**⚠️ className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.',
                props: {
                    label: 'DateRangePicker 위에 표시되는 라벨 (선택사항) / Label displayed above DateRangePicker (optional)',
                    startDate: '시작일 (YYYY-MM-DD 형식, 선택사항) / Start date in YYYY-MM-DD format (optional)',
                    endDate: '종료일 (YYYY-MM-DD 형식, 선택사항) / End date in YYYY-MM-DD format (optional)',
                    onChange: '날짜 범위 변경 시 호출되는 콜백 함수 (startDate, endDate) / Callback function called when date range changes',
                    className: '추가 CSS 클래스명 (string) / Additional CSS class name (string)',
                    fullWidth: '전체 너비 사용 여부 (boolean) / Whether to use full width (boolean). Input들이 부모 컨테이너 크기에 따라 분배됩니다.',
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
                story: '기본적으로 150일 전부터 오늘까지의 기간이 설정되어 있어요.\n\n**⚠️ className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.',
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
                story: '레이블 없이 DateRangePicker 컴포넌트를 사용할 수 있어요.\n\n**⚠️ className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.',
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
                story: '초기 시작일과 종료일을 지정할 수 있어요.\n\n**⚠️ className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.',
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

export const WithClassName: StoryObj<typeof DateRangePicker> = {
    parameters: {
        docs: {
            description: {
                story: 'className prop을 사용하여 Tailwind CSS 등 외부 스타일을 적용할 수 있어요.\n\n**⚠️ className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.',
            },
            source: {
                code: `<DateRangePicker
  label="기간"
  className="border-2 border-blue-500 rounded-lg p-4"
  onChange={(startDate, endDate) => {
    console.log({ startDate, endDate });
  }}
/>`,
                language: 'tsx',
            },
        },
    },
    render: (args) => {
        const [dateRange, setDateRange] = useState({ 
            startDate: args.startDate || getDateRange(150, getToday()).startDate,
            endDate: args.endDate || formatDateToString(getToday())
        });
        
        return (
            <DateRangePicker
                {...args}
                className="border-2 border-blue-500 rounded-lg p-4"
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

export const FullWidth: StoryObj<typeof DateRangePicker> = {
    parameters: {
        docs: {
            description: {
                story: 'fullWidth prop을 사용하면 DateRangePicker가 전체 너비를 사용하고, Input들이 부모 컨테이너 크기에 따라 분배되어요.\n\n**⚠️ className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.',
            },
            source: {
                code: `<DateRangePicker
  label="기간"
  fullWidth
  onChange={(startDate, endDate) => {
    console.log({ startDate, endDate });
  }}
/>`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    render: (args) => {
        const [dateRange, setDateRange] = useState({ 
            startDate: args.startDate || getDateRange(150, getToday()).startDate,
            endDate: args.endDate || formatDateToString(getToday())
        });
        
        return (
            <DateRangePicker
                {...args}
                fullWidth={true}
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

export const FullWidthComparison: StoryObj<typeof DateRangePicker> = {
    parameters: {
        docs: {
            description: {
                story: '일반 DateRangePicker와 fullWidth DateRangePicker를 비교할 수 있어요.\n\n**⚠️ className 우선순위**: className prop으로 전달된 스타일이 기본 스타일보다 우선 적용됩니다.',
            },
            source: {
                code: `<div style={{ maxWidth: '600px' }}>
  <DateRangePicker label="일반 너비" onChange={...} />
  <DateRangePicker label="전체 너비" fullWidth onChange={...} />
</div>`,
                language: 'tsx',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <Story />
            </div>
        ),
    ],
    render: () => {
        const [dateRange1, setDateRange1] = useState({ 
            startDate: getDateRange(150, getToday()).startDate,
            endDate: formatDateToString(getToday())
        });
        const [dateRange2, setDateRange2] = useState({ 
            startDate: getDateRange(150, getToday()).startDate,
            endDate: formatDateToString(getToday())
        });
        
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <DateRangePicker
                    label="일반 너비"
                    startDate={dateRange1.startDate}
                    endDate={dateRange1.endDate}
                    onChange={(startDate, endDate) => {
                        setDateRange1({ startDate, endDate });
                    }}
                />
                <DateRangePicker
                    label="전체 너비"
                    fullWidth
                    startDate={dateRange2.startDate}
                    endDate={dateRange2.endDate}
                    onChange={(startDate, endDate) => {
                        setDateRange2({ startDate, endDate });
                    }}
                />
            </div>
        );
    },
};