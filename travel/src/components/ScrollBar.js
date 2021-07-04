import React,{useEffect,useState} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../css/styles.css';
import axios from 'axios';



const ScrollBar=()=>{ 
  //initialization of state//
  const[destinations,setDestinations]=useState('');
  const[menuItems,setMenuItems]=useState('');
  const[selected,setSelected]=useState('');

  //tried to make request to that Api//
  useEffect(()=>{
    //   const getDestinations=async()=>{
    //   const {data}= await axios.get('https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c');

    //   console.log(data);
    //   setDestinations(data.result);
    //   // console.log(destinations);

    // }
    //   getDestinations();

    setMenuItems(Menu(destinationsDef));
    
  },[]);
  //below are the functions to render horizontal scrollable section
  const MenuItem = ({text, image,selected}) => {
    return (
      <div
      className={`menu-item ${selected ? 'active' : ''}`}
      >
      <img className="scroll-image" src={image} />
      <div style={{color:'grey'}}>{text}</div>
      </div>
      );
    };

    const Menu = (destinationsDef, selected) =>
    destinationsDef.map(dest => {


      return <MenuItem image={dest.imageUrl} text={dest.city} key={dest.city} selected={selected} />;
    });


    const Arrow = ({ text, className }) => {
      return (
      <div
      className={className}
      >{text}</div>
      );
    };

    const [destinationsDef,setDestinationsDef]=useState([{
      "city": "London",
      "imageUrl": "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
    },
    {
      "city": "Paris",
      "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
    },
    {
      "city": "Milano",
      "imageUrl": "https://images.unsplash.com/photo-1615915017883-ff58d7e33b0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      "city": "Montreal",
      "imageUrl": "https://images.unsplash.com/photo-1519178614-68673b201f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80"
    },
    {
      "city": "Japan",
      "imageUrl": "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
    },
    {
      "city": "India",
      "imageUrl": "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      "city": "Greece",
      "imageUrl": "https://images.unsplash.com/photo-1532234604265-fe9ed3175d5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
    },
    {
      "city": "Penang",
      "imageUrl": "https://images.unsplash.com/photo-1608982413524-3a3e1c1accb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
    }
    ]);
    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

      //just a statement to indicate the user that the section is loading!!
      if(!destinationsDef){
      return <div>'Loading!!'</div>;
    }
    

    return (
    <div>
    <h2 style={{color:'rgb(0,21,60)',marginTop:'15%',paddingLeft:'30px'}}>Featured Destinations</h2>
    <ScrollMenu
    data={menuItems}
    arrowLeft={ArrowLeft}
    arrowRight={ArrowRight}
    selected={selected}
    />
    </div>
    );

  }

  export default ScrollBar;