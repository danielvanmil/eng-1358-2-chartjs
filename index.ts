import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  TimeScale,
  Tooltip,
} from 'chart.js';
import 'chartjs-adapter-luxon';
import { DateTime } from 'luxon';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TimeScale
);

var data1 = {
  label: 's1',
  backgroundColor: 'blue',
  data: [
    {
      x: DateTime.now().toISO(),
      y: 50,
    },
  ],
};

var data2 = {
  label: 's2',
  backgroundColor: 'red',
  data: [
    {
      x: DateTime.now().plus({days: 10}).toISO(),
      y: 50,
    },
  ],
};

var ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext(
  '2d'
);
new Chart<any>(ctx, {
  type: 'bar',
  data: {
    datasets: [data1, data2],
  },
  options: {
    scales: {
      x: {
        min: DateTime.now().minus({days: 5}).toISO(),
        max: DateTime.now().plus({days: 5}).toISO(),
        type: 'time',
        time: {
          unit: 'day',
        },
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
});
