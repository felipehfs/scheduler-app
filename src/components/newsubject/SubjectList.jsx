import React from 'react'
import moment from 'moment'
import { Table } from 'antd'

export default  props =>  {
    const columns = [
        {
            title: "Nome",
            dataIndex: "name",
            key: "name"
        }, 
        {
            title: "Início",
            dataIndex: "starts",
            key: "starts",
            render: data => moment(data).format("HH:mm")
        },
        {
            title: "Finaliza",
            dataIndex: "ends",
            key: "ends",
            render: data => moment(data).format("HH:mm")
        },
        {
            title: "Ações",
            key: "action",
            render: data => (
                <span>
                    <a href="javascript:;" onClick={e => props.onRemove(data.key)}><i className="fa fa-trash"></i></a>
                    <a href="javascript:;" style={{ marginLeft: 14}}><i className="fa fa-pencil"></i></a>

                </span>
            )
        }
    ]

    return <Table dataSource={props.items} columns={columns}/>
}
   