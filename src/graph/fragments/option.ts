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

 // TODO getAllServices(duration: Duration!,externalProjectId: String): [Service!]!
export const Services = {
  variable: '$duration: Duration!, $externalProjectId: String!',
  query: `
    services: getAllServices(duration: $duration, externalProjectId: $externalProjectId) {
      key: id
      label: name
    }
  `};

// TODO  getAllDatabases(duration: Duration!,externalProjectId: String): [Database!]!
export const Database = {
  variable: '$duration: Duration!, $externalProjectId: String!',
  query: `
    services: getAllDatabases(duration: $duration, externalProjectId: $externalProjectId) {
      key: id
      label: name
    }
  `};

// TODO  searchEndpoint(keyword: String!, serviceId: ID!, limit: Int!,externalProjectId: String): [Endpoint!]!
export const Endpoints = {
  variable: '$serviceId: ID!, $keyword: String!, $externalProjectId: String!',
  query: `
    getEndpoints: searchEndpoint(serviceId: $serviceId, keyword: $keyword, limit: 100, externalProjectId: $externalProjectId) {
      key: id
      label: name
    }
`};

// TODO  getServiceInstances(duration: Duration!, serviceId: ID!,externalProjectId: String): [ServiceInstance!]!
export const Instances = {
  variable: '$serviceId: ID!, $duration: Duration!, $externalProjectId: String!',
  query: `
    getServiceInstances(duration: $duration, serviceId: $serviceId, externalProjectId: $externalProjectId) {
      key: id
      label: name
      attributes {
        name
        value
      }
    }
  `};
