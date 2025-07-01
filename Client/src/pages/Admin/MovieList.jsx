import React from 'react'

const MovieList = () => {

    const columns =[
        {
            title:"Poster",
            dataIndex:"poster",
            render:(url) => <img src={url} alt='poster' width={50}/>,
        },
        {
            title:"Movie Name",
            dataIndex:"movieNmae",
        },
        {
            title:"Description",
            dataIndex:"description",
        },
        {
            title:"Duration (in mins)",
            dataIndex:"duration",
        },
        {
            title:"Genre",
            dataIndex:"genre",
        },
        {
            title:"Movie Name",
            dataIndex:"movieNmae",
        },
    ]
  return (
    <div>MovieList</div>
  )
}

export default MovieList