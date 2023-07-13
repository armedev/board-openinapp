import { createSignal, type Component, createEffect } from "solid-js";

import "./dashboardBody.scss";
import Card1Pic from "../../assets/card-1.svg";
import Card2Pic from "../../assets/card-2.svg";
import Card3Pic from "../../assets/card-3.svg";
import Card4Pic from "../../assets/card-4.svg";
import { SolidApexCharts, ApexChartProps } from "solid-apexcharts";

type Options = ApexChartProps["options"];

const DashboardBody: Component = () => {
  const [chartData, setChartData] = createSignal<Options>();
  const pieOptions = {
    series: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Jeans", "Shirt", "Hat"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  createEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2c36818bb5ca9e829313dd736fd15859"
      );
      const data = await res.json();

      setChartData({
        series: [
          {
            name: "Activity 1",
            data: data.map((d: any) =>
              Number(
                (Math.random() * 10 + 1) * Number(d.lat).toPrecision(5)
              ).toPrecision(5)
            ),
          },
          {
            name: "Activity 2",
            data: data.map((d: any) =>
              Number(
                (Math.random() * 10 + 1) * Number(d.lat).toPrecision(5)
              ).toPrecision(5)
            ),
          },
        ],
        xaxis: {
          categories: data.map((_d: any, id: number) => `week ${id}`),
        },
        chart: {
          id: "realtime",
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        markers: {
          size: 0,
        },
        legend: {
          show: false,
        },
      });
    };
    // window.setInterval(fetchData, 500);

    fetchData();
  });
  return (
    <div class="body">
      <div class="body__row1">
        <span class="body__row1__items">
          <img src={Card1Pic} />
          <span class="body__row1__items__key">Total Revenues</span>
          <span class="body__row1__items__value">
            ${Number(2129430).toString()}
          </span>
        </span>
        <span class="body__row1__items">
          <img src={Card2Pic} />
          <span class="body__row1__items__key">Total Transactions</span>
          <span class="body__row1__items__value">
            {Number(1520).toString()}
          </span>
        </span>
        <span class="body__row1__items">
          <img src={Card3Pic} />
          <span class="body__row1__items__key">Total Likes</span>
          <span class="body__row1__items__value">
            {Number(9721).toString()}
          </span>
        </span>
        <span class="body__row1__items">
          <img src={Card4Pic} />
          <span class="body__row1__items__key">Total Users</span>
          <span class="body__row1__items__value">{Number(892).toString()}</span>
        </span>
      </div>
      <div class="body__row2">
        <span class="body__row2__items">
          <span>
            <span>Activities</span>
            <span>May - June 2023</span>
          </span>
          <SolidApexCharts height={200} type="line" options={chartData()!} />
        </span>
      </div>
      <div class="body__row3">
        <span class="body__row3__items">
          <span>
            <span>Top Products</span>
            <span>May - June 2023</span>
          </span>
          <SolidApexCharts height={150} type="pie" options={pieOptions} />
        </span>
        <span class="body__row3__items2">
          <span class="title">
            <span>Today's Schedule</span>
            <span>See All {">"}</span>
          </span>
          <span class="body">
            <span>
              <span>Meeting suppliers</span>
              <span>2:00 - 5:00</span>
              <span>at Banglore, Karnataka</span>
            </span>
            <span>
              <span>Operation Checks</span>
              <span>12:00 - 1:00</span>
              <span>remote</span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default DashboardBody;
