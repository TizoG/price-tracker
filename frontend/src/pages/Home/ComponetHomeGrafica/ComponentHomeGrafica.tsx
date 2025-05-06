import { Chart, useChart } from '@chakra-ui/charts';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

const staticData = [
    { month: 'Ene', price: 100 },
    { month: 'Feb', price: 200 },
    { month: 'Mar', price: 150 },
    { month: 'Abr', price: 250 },
    { month: 'May', price: 300 },
];

export const ComponentHomeGrafica = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={staticData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                {/* SVG Gradient */}
                <defs>
                    <linearGradient
                        id="price-gradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                    >
                        <stop offset="0%" stopColor="teal" stopOpacity={1} />
                        <stop offset="100%" stopColor="red" stopOpacity={1} />
                    </linearGradient>
                </defs>

                <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    fill="url(#price-gradient)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export const GraficCircle = () => {
    const chart = useChart({
        data: [
            { name: 'Informatica', value: 400, color: 'blue.solid' },
            { name: 'Movil', value: 300, color: 'orange.solid' },
            { name: 'Ropa', value: 300, color: 'pink.solid' },
            { name: 'other', value: 200, color: 'green.solid' },
        ],
    });
    return (
        <Chart.Root boxSize="200px" mx="auto" chart={chart}>
            <PieChart>
                <Pie
                    isAnimationActive={false}
                    data={chart.data}
                    dataKey={chart.key('value')}
                    outerRadius={100}
                    innerRadius={0}
                    labelLine={false}
                    label={({ name, index }) => {
                        const { value } = chart.data[index ?? -1];
                        const percent = value / chart.getTotal('value');
                        return `${name}: ${(percent * 100).toFixed(1)}%`;
                    }}
                >
                    {chart.data.map((item) => {
                        return (
                            <Cell
                                key={item.name}
                                fill={chart.color(item.color)}
                            />
                        );
                    })}
                </Pie>
            </PieChart>
        </Chart.Root>
    );
};
