export const searchFields = [
    {
        prop: 'gridCode',
        label: '所属网格',
        fieldType: 'grid',
    },
    {
        prop: 'type',
        label: '事件类型',
        fieldType: 'dict',
        dictType: 'eventType',
    },
    {
        prop: 'status',
        label: '事件状态',
        fieldType: 'dict',
        dictType: 'eventStatusNew',
    },
    {
        prop: 'source',
        label: '事件来源',
        fieldType: 'dict',
        dictType: 'info_source',
    },
]

export const tableFields = [
    {
        prop: 'no',
        label: '编号',
    },
    {
        prop: 'typeStr',
        label: '事件类型',
    },
    {
        prop: 'statusStr',
        label: '事件状态',
    },
    {
        prop: 'sourceStr',
        label: '事件来源',
    },
    {
        prop: 'addTime',
        label: '上报时间',
    },
    {
        prop: 'imageUrl',
        label: '图片',
        fieldType: 'image'
    }
]

export const descriptionsFields = [
    {
        prop: 'no',
        label: '编号',
    },
    {
        prop: 'gridName',
        label: '上报网格'
    },
    {
        prop: 'typeStr',
        label: '事件类型',
    },
    {
        prop: 'statusStr',
        label: '事件状态',
    },
    {
        prop: 'sourceStr',
        label: '事件来源',
    },
    {
        prop: 'addTime',
        label: '上报时间',
    },
    {
        prop: 'realName',
        label: '上报人'
    },
    {
        prop: 'longitude',
        label: '经度'
    },
    {
        prop: 'latitude',
        label: '纬度'
    },
    {
        prop: 'desc',
        label: '事件描述',
    },
    {
        prop: 'imageUrl',
        label: '图片',
        fieldType: 'image'
    }]

export const formFields = [
    {
        prop: 'id',
        label: 'ID'
    },
    {
        prop: 'no',
        label: '编号',
        fieldType: 'input'
    },
    {
        prop: 'gridCode',
        label: '所属网格',
        fieldType: 'grid'
    },
    {
        prop: 'status',
        label: '事件状态',
        fieldType: 'dict',
        dictType: 'eventStatusNew'
    },
    {
        prop: 'source',
        label: '事件来源',
        fieldType: 'dict',
        dictType: 'info_source',
    },
    {
        prop: 'type',
        label: '事件类型',
        fieldType: 'dict',
        dictType: 'eventType'
    },
    // {
    //     prop: 'level',
    //     label: '事件等级',
    //     fieldType: 'checkbox',
    //     fieldData: [
    //         {
    //             label: '一级',
    //             value: '0'
    //         },
    //         {
    //             label: '二级',
    //             value: '1',
    //             disabled: true
    //         },
    //         {
    //             label: '三级',
    //             value: '2'
    //         }
    //     ]
    // },
    // {
    //     prop: 'count',
    //     label: '数量',
    //     fieldType: 'number'
    // },
    {
        prop: 'addTime',
        label: '上报时间',
        fieldType: 'date'
    },
    // {
    //     prop: 'switch',
    //     label: '打开定位',
    //     fieldType: 'switch'
    // },
    // {
    //     prop: 'rate',
    //     label: '评价',
    //     fieldType: 'rate'
    // },
    {
        prop: 'imageUrl',
        label: '图片',
        fieldType: 'image'
    }
]