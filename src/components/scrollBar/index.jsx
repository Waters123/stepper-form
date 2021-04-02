import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .container {
    background-color: #fdfdfd;
    height: 400px;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 4px 28px rgba(123, 151, 158, 0.25);
    border: 1px solid #d6dee1;
    padding: 1rem;
    overflow: scroll;
    scroll-behavior: smooth;
  }
  h1 {
    margin: 0;
    text-align: center;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 20px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`

export function ScrollBar({ setcondintionsScrolled }) {
  function checkScroll(event) {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight
    if (bottom) {
      setcondintionsScrolled(true)
    }
  }

  return (
    <Wrapper>
      <div className="container custom-scrollbar" onScroll={checkScroll}>
        <h1>Terms and Condintions</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsa sapiente expedita aperiam iste suscipit cum voluptates
          voluptatibus facilis incidunt perferendis dolore iure iusto, minima culpa id velit consequatur quae?
        </p>
      </div>
    </Wrapper>
  )
}
