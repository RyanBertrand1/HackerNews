import React from 'react';
import Item from '../ItemListComponent/ItemComponent/ItemComponent';

export default class ItemListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
        }
    }

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5em'}}>
                <h3>
                    Newest
                </h3>
                <div className="item-list">
                    {
                        this.state.data.map(item => {
                            return <Item item={item} key={item.id}></Item>
                        })
                    }
                </div>
            </div>
        );
    }
}