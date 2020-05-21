import React, { Component} from 'react';
import { List} from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
class pageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        let url = 'http://www.dell-lee.com/react/api/list.json'
        const id = this.props.match.params.id;
        if (id) {
            url = url + '?id=' + id;
        }
        axios.get(url).then(res => {
          this.setState({ data: res.data.data });
        })
    }
    componentWillReceiveProps(nextProps, nextContext){
        const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id='+id).then(res => {
            this.setState({ data: res.data.data });
        })
    }

    render() {
        console.log (this.props)
        return (
            <List
                style={{background: '#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Link to= {`/details/${item.id}`}>
                           {item.title}
                        </Link>
                    </List.Item>
                )}
            />
        )
    }
}
export default pageList;
