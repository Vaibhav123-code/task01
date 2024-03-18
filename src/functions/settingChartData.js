import { gettingDate } from "./gettingDate";

export const settingChartData = (setChartData, prices1) => {
   {
    setChartData({
      labels: prices1?.map((data) => gettingDate(data[0])), //x axis sgowing date
      datasets: [
        {
          label:"crypto curreny",
          data: prices1?.map((data) => data[1]), // showing price y axix
          borderWidth: 1,
          fill: true,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
