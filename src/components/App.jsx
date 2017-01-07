class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer/>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData}/>
      </div>
    </div>);
  }

}

window.App = App;

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

// document.body.append('this works');  



