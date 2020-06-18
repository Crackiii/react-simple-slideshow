import React from 'react';

class Slides extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      currentSlide: 0,
      nextDisabled: false,
      prevDisabled: false,
    }

    this.prevHandler = this.prevHandler.bind(this)
    this.nextHandler = this.nextHandler.bind(this)
    this.resandler = this.resandler.bind(this)
  }


  nextHandler() {

    this.setState((prevState, props) => {
      if (prevState.currentSlide < this.props.slides.length - 1) {
        return {
          currentSlide: prevState.currentSlide + 1,
          prevDisabled: false
        }

      } else if (prevState.currentSlide === this.props.slides.length - 1) {
        return {
          nextDisabled: true,
          prevDisabled: false
        }
      }
    })

  }

  prevHandler() {
    this.setState((prevState, props) => {
      if (prevState.currentSlide === 0) {
        return { prevDisabled: true }
      } else if (prevState.currentSlide > 0) {
        return {
          currentSlide: prevState.currentSlide - 1,
          nextDisabled: false
        }
      }
    })

  }

  resandler() {
    this.setState({
      currentSlide: 0,
      nextDisabled: false,
      prevDisabled: true
    })
  }

  componentDidMount() {
    // this.setState((prevState, props) => {
    //   if (prevState.currentSlide === 0) {
    //     return { prevDisabled: true }
    //   }
    // })

    // let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    // let flattenedArray = arr.reduce((e, s) => s.concat(e), []).sort()
    // let leftDiagonalEls = []
    // let rightDiagonalEls = []
    // for (let i = 0; i < flattenedArray.length; i += 4) {
    //   leftDiagonalEls.push(flattenedArray[i])
    // }
    // for (let i = 2; i < flattenedArray.length; i--) {
    //   rightDiagonalEls.push(flattenedArray[i])
    // }

    // console.log(leftDiagonalEls, rightDiagonalEls)



    // function processData(input) {
    //   //Enter your code here
    //   let regex = new RegExp(/^[_\.]\d+[a-z]*_?$/, 'g')
    //   return input
    //     .split("\n")
    //     .map(i => i.match(regex) ? console.log("VALID") : console.log("INVALID"))

    // }

    var twoSum = function (nums, target) {
      let indices = []
      for (let i = 0; i < nums.length; i++) {
        if (indices.length === 2) {
          break
        } else {

          for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
              indices.push(i)
              indices.push(j)
              break
            } else {
              indices.pop()
            }
          }
        }
      }
      return indices
    };

    twoSum([2, 7, 11, 15], 9)

  }

  render() {
    const { slides } = this.props;
    return (
      <div>
        <div id="navigation">
          <button data-testid="button-restart" onClick={this.resandler} data-testid="button-restart">Restart</button>
          <button data-testid="button-prev" onClick={this.prevHandler} data-testid="button-prev" disabled={this.state.currentSlide === 0} >Prev</button>
          <button data-testid="button-next" onClick={this.nextHandler} data-testid="button-next" disabled={this.state.currentSlide === this.props.slides.length - 1}>Next</button>
        </div>
        {
          slides.map((slide, i) => {
            return (
              i === this.state.currentSlide ?
                <div id="slide" key={slide + i}>
                  <h1 data-testid="title">{slide.title}</h1>
                  <p data-testid="text">{slide.text}</p>
                </div> : null
            )
          })
        }

      </div>
    );
  }
}

export default Slides;
