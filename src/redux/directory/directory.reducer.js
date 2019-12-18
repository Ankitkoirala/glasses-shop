const INITIAL_STATE = {
    sections:[
        {
          title: 'Glasses',
          imageUrl: 'https://images.unsplash.com/photo-1552574023-e7095f12d660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          id: 1,
          linkUrl: 'shop/glasses'

        },
        {
          title: 'Round',
          imageUrl: 'https://images.unsplash.com/photo-1483412468200-72182dbbc544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          id: 2,
          linkUrl: 'shop/round'
        },
        {
          title: 'Rayban',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/rayban'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1554129353-33bf3b19fc44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
} ;
export default directoryReducer;