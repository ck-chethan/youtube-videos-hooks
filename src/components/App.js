import React, { useEffect, useState } from 'react'
import youTube from '../apis/youTube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


const App = () => {


    const [selectedVideo, setSelectedVideo] = useState(null);

    //setSelectedVideo(response.data.items[0]);


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            //(video) => setSelectedVideo(video) <===> setSelectedVideo
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App
