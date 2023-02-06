import React, { ComponentLifecycle, useEffect } from 'react';
import { motion } from "framer-motion";
import {useState} from 'react';

// interface Component<p = {}, s = {}> extends ComponentLifecycle<p, s> { }

// interface IProps {
//   images: any;
// }

// interface IState {
//   selectedImage: string;
//   images: any;
//   // prevState: any;
// }

function About() {
  const [image, setImage ] = useState({

    images: [
      "https://picsum.photos/200/300/?image=523",
       "https://picsum.photos/200/300/?image=524"
    ]
  });

  useEffect(() => {
    const interval = setInterval(() =>{
      setImage((prevImage) => prevImage)
    })
  });

// class About extends React.Component <IProps, IState>{
//   constructor(props:any){
//     super(props);{
//       this.state = {
//       // count: 0,
//       images: [ 
//           "https://picsum.photos/200/300/?image=523",
//           "https://picsum.photos/200/300/?image=524"
//          ],
//          selectedImage: "https://picsum.photos/200/300/?image=523"
//       }
//     }
//   }
//   componentDidMount(): void {
//     let intervalId = setInterval(() => {
//       this.setState; {
//         if (prevState.selectedImage === this.state.images[0]){
//           return {
//             selectedImage: this.state.images[1]
//           };
//         }
//       });
//     }, 1000);
//   } 
//   // this.setState({
//   //   intervalId
//   // });
// };
// componentWillUnmount(){
//   clearInterval(this.state.intervalId);
// }

  // render() {
    return  (
        <div>
            {/*<div className="bg-red-400 h-[100vh]">
               <motion.h2 animate={{fontSize: 50, x:20, y:-20}}>
                <p> flex </p>
              </motion.h2> 
            </div>*/}

        </div> 
    )
  }


export default About;