import React, { Component} from 'react';
import { Card } from 'antd';
import axios from 'axios';
import './style.css';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            content: 'content'
        }
    }

    render() {
        return (
            <div>
                <Card title={this.state.title}>
                    <p className='detail-content' dangerouslySetInnerHTML={{__html: this.state.content}}></p>
                </Card>
            </div>
        )
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/detail.json?id='+id)
            .then((res) => {
              const data = res.data.data;
              this.setState(data);
        })
    }
}
export default Detail;
