const Mock = require('mockjs');

Mock.mock('/getList', 'post', {data: ['Amelia', 'Alice', 'Aileen']});
Mock.mock('/getOrders', 'post', {data:  [
    {id: 1, name: 'Amelia'},
    {id: 2, name: 'second'},
    {id: 3, name: 'Cris'}
]});

Mock.mock('/login', 'post', {data: 'success'});
export default Mock;