export const tableFields = [
    {
        prop: 'id',
        label: 'ID',
    },
    {
        prop: 'name',
        label: '菜单名称'
    },
    {
        prop: 'hasActionConfig',
        label: '类型',
        formData:[
            {
                label:'菜单',
                value:'0'
            },
            {
                label:'按钮',
                value:'1'
            }
        ]
    },
    {
        prop: 'url',
        label: '地址'
    },
    {
        prop: 'hasChild',
        label: '是否有子菜单'
    },
    {
        prop: 'authority',
        label: '权限标识'
    },
    {
        prop: 'icon',
        label: '图标'
    },
    {
        prop: 'displayOrder',
        label: '显示顺序'
    },
    {
        prop: 'remark',
        label: '备注'
    },
    {
        prop: 'valid',
        label: '是否生效'
    }
]

export const searchFields = [
    {
        prop: 'name',
        label: '菜单名称',
        fieldType: 'input'
    },
    {
        prop: 'url',
        label: '地址',
        fieldType: 'input'
    }
]