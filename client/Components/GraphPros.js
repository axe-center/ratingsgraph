import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme} from 'victory';
import StarRatings from 'react-star-ratings';
import Typography from '@material-ui/core/Typography';

const GraphPros = (props) => {

  const data = [
    {proscons: 1, ratings: props.pros[0]},
    {proscons: 2, ratings: props.pros[1]},
    {proscons: 3, ratings: props.pros[2]},
    {proscons: 4, ratings: props.pros[3]},
    {proscons: 5, ratings: props.pros[4]}
  ];

  return (
    <div>
      <StarRatings
        rating={props.ratingAverage}
        starRatedColor="orange"
        numberOfStars={0}
        starDimension="20px"
        starSpacing="5px"
      />
      <Typography variant="subtitle1">
         Based on customer reviews
      </Typography>

      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10} // padding from the axis
        style={{tickLabels: {fontFamily: "'Fira Sans', sans-serif", fontSize: 20}}}
        padding={{ top: 20, bottom: 5, left: 85, right: 20 }}
        height={150}
      >
        <VictoryAxis
          tickFormat={["Value", "Reliability", "Performance", "Design", "Durability"]}
          style={{ 
            tickLabels: { fontSize: 12, fill: '#808080', fontFamily: "'Fira Sans', sans-serif" }
          }}
        />
        <VictoryBar horizontal
          data={data}
          x="proscons"
          y="ratings"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 }
          }}
          style={{
            data: {fill: "#a00000", width: 20},
            tickLabels: {color: "red"},
            labels: {fill: "#bbb"}
          }}
          alignment="middle"
          cornerRadius={{ top: 5}}
          labels={(data) => (data.ratings).toFixed(0) }
        />
      </VictoryChart>
    </div>
  )
}

export default GraphPros;