import Chart from 'react-apexcharts'
import './Insights.css'

export const Insights = () => {
    const chartmake = JSON.parse(localStorage.getItem(localStorage.getItem('email') + 'movies'))
    return (
        <div className='whole-insights'>
            <div className='heading-style'>
                <div className='heading'>Bar Chart Developed By Movies Suggestion Team</div>
            </div>
            <div className='chart'>
                <Chart
                    type='bar'
                    width={1380}
                    heigth={1000}
                    series={[
                        {
                            name: 'Insights',
                            data: [chartmake['thriller'], chartmake['horror'], chartmake['action'], chartmake['comedy'], chartmake['romance']]
                        }
                    ]}
                    options={{
                        colors: ['#f99900'],
                        theme: { mode: 'light' },
                        xaxis: {
                            tickPlacement: 'on',
                            categories: ['Thriller', 'Horror', 'Action', 'Comedy', 'Romance'],
                            labels: {
                                style: { fontSize: 20, color: 'f99900' }
                            },
                        },
                        yaxis: {
                            labels: {
                                formatter: (val) => { return val },
                                style: { fontSize: 15, color: '#f99900' }
                            },
                            title: {
                                text: "Number of Movies",
                                style: { fontSize: 20 }
                            }
                        },
                        legend: {
                            show: true,
                            position: 'bottom'
                        },
                        dataLabels: {
                            style: { fontSize: 20 }
                        }
                    }}>

                </Chart>
            </div>
            <div className='footer'>
                <div>Movie Categories</div>
            </div>
        </div>
    )
}