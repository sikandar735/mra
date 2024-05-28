import React from 'react';

export const tableData = [
    {
        id: '1',
        name: 'Safety and Security Concerns',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2024-04-18'
    },
    {
        id: '2',
        name: 'Parking Problems',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2024-04-18'
    },
    {
        id: '3',
        name: 'Maintenance Issues',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2024-04-18'
    },
    {
        id: '4',
        name: 'Maintenance Issues',
        status: <i className="fa fa-circle font-danger f-12" />,
        creat_on: '2024-04-18'
    },
    {
        id: '5',
        name: 'Parking Problems',
        status: <i className="fa fa-circle font-success f-12" />,
        creat_on: '2024-04-18'
    },
    {
        id: '6',
        name: 'Safety and Security Concerns',
        status: <i className="fa fa-circle font-warning f-12" />,
        creat_on: '2024-04-18'
    }
];

export const tableColumns = [
    {
        name: 'ID',
        selector: Row => Row['id'],
        sortable: true,
        center: true,
    },
    {
        name: 'Name',
        selector: Row => Row['name'],
        sortable: true,
        center: true,
    },
    {
        name: 'Status',
        selector: Row => Row['status'],
        sortable: true,
        center: true,
    },
    {
        name: 'Creat_on',
        selector: Row => Row['creat_on'],
        sortable: true,
        center: true,
    },
];




