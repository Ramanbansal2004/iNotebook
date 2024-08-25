import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/Notes/NoteContext'

function About() {
  const a=useContext(NoteContext)
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
        This is about {a.state.name}
    </div>
  )
}

export default About