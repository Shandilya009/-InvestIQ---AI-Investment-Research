import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function PriceChart({ history }) {

    return (

        <div className="chart-container">

            <h3>📈 1 Month Price Trend</h3>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={history}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="date" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#2563eb"
                        strokeWidth={3}
                        dot={false}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default PriceChart;