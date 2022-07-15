// import { Component } from 'react';

// class Fetch extends Component {
//   state = {
//     request: '',
//     loading: false,
//     page: 1,
//     KEY: '28064028-9753e04b4800a7fc07442f07d',
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.requestName !== this.props.requestName) {
//       // console.log(prevProps.requestName)
//       // console.log(this.props.requestName)
//       const { page, KEY } = this.state;
//       const { requestName } = this.props;
//       fetch(
//         `https://pixabay.com/api/?q=${requestName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(r => r.json())
//         .then(request => {
//           console.log(request.hits);
//           this.setState({ request });
//         })
//         .finally(() => this.setState({ loading: false }));
//     }
//   }
//   render() {
//     return <div></div>;
//   }
// }

// export default Fetch;
