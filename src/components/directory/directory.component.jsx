import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            section:[
                {
                  title: 'Glasses',
                  imageUrl: 'https://images.unsplash.com/photo-1552574023-e7095f12d660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  id: 1,
                  linkUrl: 'hats'

                },
                {
                  title: 'Round',
                  imageUrl: 'https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'Rayban',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://images.unsplash.com/photo-1554129353-33bf3b19fc44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
              
        }

    }
    render(){
        return(
            <div className="directory-menu">

                {this.state.section.map(({id,...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )

    }
}
export default Directory