'use client';
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
  } from "@/components/ui/card";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }:any) => {
    return (
        <ResponsiveLine
        data={data}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
    />
    )
}

export default function Lines() {
    const data = [
        {
          "id": "japan",
          "color": "hsl(276, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 246
            },
            {
              "x": "helicopter",
              "y": 195
            },
            {
              "x": "boat",
              "y": 227
            },
            {
              "x": "train",
              "y": 161
            },
            {
              "x": "subway",
              "y": 293
            },
            {
              "x": "bus",
              "y": 144
            },
            {
              "x": "car",
              "y": 118
            },
            {
              "x": "moto",
              "y": 125
            },
            {
              "x": "bicycle",
              "y": 147
            },
            {
              "x": "horse",
              "y": 64
            },
            {
              "x": "skateboard",
              "y": 159
            },
            {
              "x": "others",
              "y": 107
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(114, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 46
            },
            {
              "x": "helicopter",
              "y": 195
            },
            {
              "x": "boat",
              "y": 189
            },
            {
              "x": "train",
              "y": 123
            },
            {
              "x": "subway",
              "y": 179
            },
            {
              "x": "bus",
              "y": 70
            },
            {
              "x": "car",
              "y": 299
            },
            {
              "x": "moto",
              "y": 106
            },
            {
              "x": "bicycle",
              "y": 140
            },
            {
              "x": "horse",
              "y": 231
            },
            {
              "x": "skateboard",
              "y": 77
            },
            {
              "x": "others",
              "y": 241
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(86, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 298
            },
            {
              "x": "helicopter",
              "y": 19
            },
            {
              "x": "boat",
              "y": 62
            },
            {
              "x": "train",
              "y": 0
            },
            {
              "x": "subway",
              "y": 196
            },
            {
              "x": "bus",
              "y": 237
            },
            {
              "x": "car",
              "y": 166
            },
            {
              "x": "moto",
              "y": 136
            },
            {
              "x": "bicycle",
              "y": 98
            },
            {
              "x": "horse",
              "y": 82
            },
            {
              "x": "skateboard",
              "y": 138
            },
            {
              "x": "others",
              "y": 205
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(219, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 280
            },
            {
              "x": "helicopter",
              "y": 158
            },
            {
              "x": "boat",
              "y": 65
            },
            {
              "x": "train",
              "y": 60
            },
            {
              "x": "subway",
              "y": 263
            },
            {
              "x": "bus",
              "y": 23
            },
            {
              "x": "car",
              "y": 173
            },
            {
              "x": "moto",
              "y": 209
            },
            {
              "x": "bicycle",
              "y": 196
            },
            {
              "x": "horse",
              "y": 89
            },
            {
              "x": "skateboard",
              "y": 235
            },
            {
              "x": "others",
              "y": 243
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(350, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 109
            },
            {
              "x": "helicopter",
              "y": 53
            },
            {
              "x": "boat",
              "y": 134
            },
            {
              "x": "train",
              "y": 141
            },
            {
              "x": "subway",
              "y": 105
            },
            {
              "x": "bus",
              "y": 171
            },
            {
              "x": "car",
              "y": 283
            },
            {
              "x": "moto",
              "y": 148
            },
            {
              "x": "bicycle",
              "y": 37
            },
            {
              "x": "horse",
              "y": 99
            },
            {
              "x": "skateboard",
              "y": 227
            },
            {
              "x": "others",
              "y": 197
            }
          ]
        }
      ]
    return <Card>
        <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the stats for the week.</CardDescription>
      </CardHeader>
        <CardContent className='h-[264px] flex items-center 
        w-full'>
            <MyResponsiveLine data={data} />
        </CardContent>
    </Card>;
}