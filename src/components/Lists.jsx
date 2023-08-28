import React, { Component } from 'react';
import './style.css';

class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listLeft: this.props.listLeft,
      listRight: this.props.listRight,
      listRemove: this.props.listRemove,
    };
  }

  transferToLeft = () => {
    const { listRight } = this.state;
    if (listRight.length > 0) {
      const [movedItem, ...newListRight] = listRight;
  
      this.setState(prevState => ({
        listLeft: [movedItem, ...prevState.listLeft],
        listRight: newListRight,
      }));
    }
  };

  transferToRight = () => {
    const { listLeft } = this.state;
    if (listLeft.length > 0) {
      const [movedItem, ...newListLeft] = listLeft;
      this.setState(prevState => ({
        listRight: [movedItem, ...prevState.listRight],
        listLeft: newListLeft,
      }));
    }
  };

  transferToRemove = () => {
    const { listRight } = this.state;
    if (listRight.length > 0) {
      const [movedItem, ...newListRight] = listRight;

      this.setState(prevState => ({
        listRemove: [movedItem, ...prevState.listRemove],
        listRight: newListRight,
      }));
    }
  };

  listRemove = () => {
    const { listRemove } = this.state;
    if (listRemove.length > 0) {
      const newListRemove = listRemove.slice(0, -1);
      this.setState({ listRemove: newListRemove });
    }
  };

  render() {
    const { listLeft=[], listRight=[], listRemove=[] } = this.state;

    return (
      <>
        <div className='container'>
          <div className='block first__block'>
            <ul>
              {listLeft.map((el, i) => (
                <li key={i}>{el.title}</li>
              ))}
            </ul>
            <button onClick={this.transferToRight}>Transfer first to right</button>
          </div>
          <div className='block two__block'>
            <ul>
              {listRight.map((el, i) => (
                <li key={i}>{el.title}</li>
              ))}
            </ul>
            <div className='button__container'>
              <button onClick={this.transferToLeft}>Transfer first to left</button>
              <button onClick={this.transferToRemove}>Transfer first to right</button>
            </div>
          </div>
          <div className='block remove'>
            {listRemove.length 
              ? <ul>
                  {listRemove.map((el, i) => (
                    <li key={i}>{el.title}</li>
                  ))}
                </ul>
              : null}
            {listRemove.length 
              ? <button onClick={this.listRemove}>Remove last item</button>
              : null}
          </div>
        </div>
      </>
    );
  }
}

export default Lists;



///////////////////////////////////////////////////////

// Вариант с использованием componentDidUpdate() и вариант с использованием shouldComponentUpdate()


// import React, { Component } from 'react';
// import './style.css';

// class Lists extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       listLeft: this.props.listLeft,
//       listRight: this.props.listRight,
//       listRemove: this.props.listRemove,
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.listLeft !== this.state.listLeft) {
//       this.setState({ listLeft: this.state.listLeft });
//     }
//     if (prevState.listRight !== this.state.listRight) {
//       this.setState({ listRight: this.state.listRight });
//     }
//     if (prevState.listRemove !== this.state.listRemove) {
//       this.setState({ listRemove: this.state.listRemove });
//     }
//   }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (
//   //     nextState.listLeft !== this.state.listLeft ||
//   //     nextState.listRight !== this.state.listRight ||
//   //     nextState.listRemove !== this.state.listRemove
//   //   ) {
//   //     return true;
//   //   }
//   //   return false;
//   // }

//   transferToLeft = () => {
//     const { listRight } = this.state;
//     if (listRight.length > 0) {
//       const [movedItem, ...newListRight] = listRight;

//       this.setState(prevState => ({
//         listLeft: [movedItem, ...prevState.listLeft],
//         listRight: newListRight,
//       }));
//     }
//   };

//   transferToRight = () => {
//     const { listLeft } = this.state;
//     if (listLeft.length > 0) {
//       const [movedItem, ...newListLeft] = listLeft;
//       this.setState(prevState => ({
//         listLeft: newListLeft,
//         listRight: [movedItem, ...prevState.listRight],
//         listRemove: prevState.listRemove.filter(item => item.id !== movedItem.id),
//       }));
//     }
//   };

//   transferToRemove = () => {
//     const { listRight } = this.state;
//     if (listRight.length > 0) {
//       const [movedItem, ...newListRight] = listRight;

//       this.setState(prevState => ({
//         listRight: newListRight,
//         listRemove: [...prevState.listRemove, movedItem],
//       }));
//     }
//   };

//   listRemove = () => {
//     const { listRemove } = this.state;
//     if (listRemove.length > 0) {
//       const newListRemove = listRemove.slice(0, -1);
//       this.setState({ listRemove: newListRemove });
//     }
//   };

//   render() {
//     const { listLeft, listRight, listRemove } = this.state;

//     return (
//       <>
//         <div className='container'>
//           <div className='block first__block'>
//             <ul>
//               {listLeft.map((el, i) => (
//                 <li key={i}>{el.title}</li>
//               ))}
//             </ul>
//             <button onClick={this.transferToRight}>Transfer first to right</button>
//           </div>
//           <div className='block two__block'>
//             <ul>
//               {listRight.map((el, i) => (
//                 <li key={i}>{el.title}</li>
//               ))}
//             </ul>
//             <div className='button__container'>
//               <button onClick={this.transferToLeft}>Transfer first to left</button>
//               <button onClick={this.transferToRemove}>Transfer first to right</button>
//             </div>
//           </div>
//           <div className='block remove'>
//             {listRemove.length ? (
//               <ul>
//                 {listRemove.map((el, i) => (
//                   <li key={i}>{el.title}</li>
//                 ))}
//               </ul>
//             ) : null}
//             {listRemove.length ? (
//               <button onClick={this.listRemove}>Remove last item</button>
//             ) : null}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Lists;