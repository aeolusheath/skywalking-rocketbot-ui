/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default [
  {
    o: "Database",
    d: "databaseResponseTime",
    c: "ChartNum",
    t: "Database Avg ResponseTime",
    w: 4,
    h: 80
  }, {
    o: "Database",
    d: "databaseThroughput",
    c: "ChartNum",
    t: "Database Avg Throughput",
    w: 4,
    h: 80
  }, {
    o: "Database",
    d: "databaseSLA",
    c: "ChartNum",
    t: "Database Avg SLA",
    w: 4,
    h: 80
  },  
  // {
  //   o: 'Global',
  //   d: 'globalBrief',
  //   c: 'ChartBrief',
  //   t: 'Global Brief',
  //   w: 3,
  //   h: '250',
  // },
  {
    o: 'Database',
    d: 'databaseResponseTime',
    c: 'ChartLine',
    t: 'Database ResponseTime',
    w: 4,
    h: 270,
  },
  {
    o: 'Database',
    d: 'databaseThroughput',
    c: 'ChartLine',
    t: 'Database Throughput',
    w: 4,
    h: 270,
  },
  {
    o: 'Database',
    d: 'databaseSLA',
    c: 'ChartBar',
    t: 'Database SLA',
    w: 4,
    h: 270,
  },
  // {
  //   o: 'Global',
  //   d: 'globalPercent',
  //   c: 'ChartLine',
  //   t: 'Global Percent Response',
  //   w: 3,
  //   h: '250',
  // },
  {
    o: 'Database',
    d: 'databasePercent',
    c: 'ChartLine',
    t: 'Database Percent',
    w: 4,
    h: '350',
  },
  {
    o: 'Database',
    d: 'databaseTopNRecords',
    c: 'ChartSlow',
    t: 'Database TopN Records',
    w: 4,
    h: '350',
  },
];
