const element = (
  //   Write your code here.
  <div className='league-bg-container'>
    <div className='content-container'>
      <h1 className='title'> Super Over League </h1>
      <div className='team-image-container'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
          className='team-logo'
        />
        <img
          src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
          className='team-logo'
        />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))


