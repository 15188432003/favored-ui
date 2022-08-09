import Alert from '../package/Alert'
import Button from '../package/Button'
import Badge from "../package/Badge";
import Breadcrumb from "../package/Breadcrumb";
import Card from "../package/Card";
import Cascader from "../package/Cascader";
import CheckBox from "../package/CheckBox";
import Collapse from "../package/Collapse";
import CollapseItem from "../package/CollapseItem";
import Input from "../package/Input";
import InputNumber from "../package/InputNumber";
import Lazying from "../package/Lazying";
import Loading from "../package/Loading";
import Pagination from "../package/Pagination";
import Radio from "../package/Radio";
import Rate from "../package/Rate";
import Select from "../package/Select";
import Table from "../package/Table";
import TableColums from "../package/TableColums";


let components = [Alert,
    Button,
    Badge,
    Breadcrumb,
    Card,
    Cascader,
    CheckBox,
    Collapse,
    CollapseItem,
    Input,
    InputNumber,
    Lazying,
    Loading,
    Pagination,
    Radio,
    Rate,
    Select,
    Table,
    TableColums
]

// 1. 支持全局注册
export default {
    install(Vue) {
        components.map(item => {
            Vue.component(item.name, item)
        })
    }
}


// 2. 支持按需导入

export {
    Alert,
    Button,
    Badge,
    Breadcrumb,
    Card,
    Cascader,
    CheckBox,
    Collapse,
    CollapseItem,
    Input,
    InputNumber,
    Lazying,
    Loading,
    Pagination,
    Radio,
    Rate,
    Select,
    Table,
    TableColums
}